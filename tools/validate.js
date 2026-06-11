/* validate.js — sanity-check all data files against the content schema */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SIM_IDS = ["kinematics1d","projectile","vectorAddition","riverboat","incline","frictionBlock",
  "hookesLaw","drag","circular","centerOfMass","energyTrack","forceArea","collision","torqueSeesaw",
  "rotInertia","rolling","skater","orbit","shm","pendulum","efield","gauss","potentialField",
  "capacitorLab","circuit","rc","chargeInB","wireB","induction","lr","lc"];

const dataDir = path.join(__dirname, "..", "data");
const units = [];
const ctx = vm.createContext({ AP: { registerUnit: u => units.push(u) }, String });

let errors = 0, warnings = 0;
const err = m => { console.error("  ERROR: " + m); errors++; };
const warn = m => { console.warn("  warn:  " + m); warnings++; };

for (const f of fs.readdirSync(dataDir).filter(f => f.endsWith(".js")).sort()) {
  const before = units.length;
  try {
    vm.runInContext(fs.readFileSync(path.join(dataDir, f), "utf8"), ctx, { filename: f });
  } catch (e) { console.error(f); err("failed to execute: " + e.message); continue; }
  console.log(f + " → " + (units.length - before) + " unit(s)");
}

const expected = {
  1: 5, 2: 10, 3: 5, 4: 4, 5: 6, 6: 6, 7: 5,
  8: 6, 9: 3, 10: 4, 11: 8, 12: 4, 13: 6
};

let topicCount = 0, problemCount = 0, simCount = 0, graphCount = 0;
const seen = new Set();
for (const u of units) {
  console.log("Unit " + u.id + ": " + u.title);
  if (seen.has(u.id)) err("duplicate unit id " + u.id);
  seen.add(u.id);
  if (!["mech", "em"].includes(u.course)) err("bad course " + u.course);
  if (!u.weight) warn("unit " + u.id + " missing weight");
  if (!u.tagline) warn("unit " + u.id + " missing tagline");
  if (!Array.isArray(u.bigIdeas) || !u.bigIdeas.length) warn("unit " + u.id + " missing bigIdeas");
  if (expected[u.id] !== u.topics.length) err("unit " + u.id + " has " + u.topics.length + " topics, expected " + expected[u.id]);
  for (const t of u.topics) {
    topicCount++;
    const tag = "topic " + t.id;
    if (!t.title) err(tag + " missing title");
    if (!t.blurb) warn(tag + " missing blurb");
    if (!Array.isArray(t.objectives) || t.objectives.length < 2) warn(tag + " needs ≥2 objectives");
    if (!Array.isArray(t.sections) || t.sections.length < 3) err(tag + " needs ≥3 sections");
    let hasVisual = false;
    for (const s of t.sections || []) {
      if (!s.heading) err(tag + " section missing heading");
      if (s.sim) {
        simCount++;
        hasVisual = true;
        if (!SIM_IDS.includes(s.sim)) err(tag + " references unknown sim '" + s.sim + "'");
      }
      if (s.graph) {
        graphCount++;
        hasVisual = true;
        const g = s.graph;
        ["xMin", "xMax", "yMin", "yMax"].forEach(k => { if (typeof g[k] !== "number") err(tag + " graph missing " + k); });
        for (const fn of g.fns || []) {
          try {
            const fcn = new Function("x", "with(Math){return " + fn.expr + ";}");
            const v = fcn((g.xMin + g.xMax) / 2);
            if (typeof v !== "number") err(tag + " graph expr not numeric: " + fn.expr);
          } catch (e) { err(tag + " graph expr fails: " + fn.expr + " — " + e.message); }
        }
      }
    }
    if (!hasVisual) warn(tag + " has no sim or graph");
    if (!Array.isArray(t.equations) || t.equations.length < 3) warn(tag + " has <3 equations");
    const probs = t.problems || [];
    problemCount += probs.length;
    if (probs.length !== 5) err(tag + " has " + probs.length + " problems (expected 5)");
    const mcq = probs.filter(p => p.type === "mcq"), frq = probs.filter(p => p.type === "frq");
    if (mcq.length !== 3 || frq.length !== 2) err(tag + " mix is " + mcq.length + " mcq / " + frq.length + " frq");
    for (const p of mcq) {
      if (!Array.isArray(p.choices) || p.choices.length !== 4) err(tag + " mcq needs 4 choices");
      if (!(p.answer >= 0 && p.answer <= 3)) err(tag + " mcq bad answer index " + p.answer);
      if (!p.solution) err(tag + " mcq missing solution");
    }
    for (const p of frq) {
      if (!Array.isArray(p.parts) || !p.parts.length) err(tag + " frq missing parts");
      for (const part of p.parts || []) {
        if (!part.label || !part.prompt || !part.solution) err(tag + " frq part incomplete");
      }
    }
    // unbalanced $ check (even count per HTML string)
    const strings = JSON.stringify(t);
    const dollars = (strings.match(/[^\\]\$/g) || []).length;
    if (dollars % 2 !== 0) warn(tag + " possibly unbalanced $ delimiters");
  }
}

console.log("\n==== SUMMARY ====");
console.log("units: " + units.length + " | topics: " + topicCount + " | problems: " + problemCount +
  " | sim placements: " + simCount + " | graphs: " + graphCount);
console.log(errors + " errors, " + warnings + " warnings");
process.exit(errors ? 1 : 0);
