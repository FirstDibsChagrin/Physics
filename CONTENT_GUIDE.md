# Content Authoring Guide — AP Physics C Study Site

Every unit of content lives in one JS file under `data/`. The file registers a unit object
with the global `AP` API. These files are plain scripts (no modules, no imports).

## File skeleton

```js
/* data/mech-u1.js — Unit 1: Kinematics */
AP.registerUnit({
  id: 1,                       // unit number (1–13)
  course: "mech",             // "mech" or "em"
  title: "Kinematics",
  weight: "10–15%",           // official exam weighting
  tagline: "Describing motion with calculus: position, velocity, and acceleration.",
  bigIdeas: [
    "Velocity and acceleration are derivatives of position; displacement is an integral of velocity.",
    "Graphs, equations, and vectors are three equivalent languages for describing motion."
  ],
  topics: [ /* topic objects, see below */ ]
});
```

## Topic object

```js
{
  id: "1.1",
  title: "Scalars and Vectors",
  blurb: "One-sentence hook shown on the topic card.",
  objectives: [
    "Describe physical quantities as scalars or vectors.",
    "Resolve a vector into components and reassemble magnitude and direction."
  ],
  sections: [
    { heading: "The Core Idea",
      content: String.raw`<p>Velocity is the time derivative of position: $v = \dfrac{dx}{dt}$ ...</p>` },
    { heading: "Interactive: Adding Vectors",
      sim: "vectorAddition",                  // sim id from the catalog below
      simCaption: "Drag the sliders to change each vector. Watch the resultant respond.",
      content: String.raw`<p>Optional short intro paragraph before the sim.</p>` },
    { heading: "Reading the Graph",
      graph: { xLabel: "t (s)", yLabel: "x (m)", xMin: 0, xMax: 5, yMin: 0, yMax: 30,
               fns: [ { expr: "2*x*x", label: "x(t) = 2t²", color: "#fbbf24" } ],
               shade: { expr: "2*x*x", from: 1, to: 3 } },     // shade is optional
      graphCaption: "Slope of x(t) gives velocity.",
      content: String.raw`<p>Explanation referencing the graph...</p>` },
    { heading: "Common Pitfalls",
      content: String.raw`<ul><li>...</li><li>...</li></ul>` }
  ],
  equations: [
    { latex: String.raw`v_x = v_{x0} + a_x t`, note: "Constant acceleration only." },
    { latex: String.raw`x = x_0 + v_{x0}t + \tfrac{1}{2}a_x t^2`, note: "Constant acceleration only." }
  ],
  problems: [ /* exactly 5: three "mcq" then two "frq" */ ]
}
```

## Section rules

- 3–6 sections per topic. Suggested arc: **core idea → deeper development (with calculus) →
  interactive sim or graph → worked connection/example → common pitfalls**.
- Each prose section is 100–220 words of clean HTML. Allowed tags: `p, ul, ol, li, strong, em,
  table, thead, tbody, tr, th, td, br, sub, sup`.
- Callout boxes (use sparingly, 1–2 per topic):
  - `<div class="callout">Insight or tip.</div>`
  - `<div class="callout warn">Common trap.</div>`
  - `<div class="callout key">Must-know fact.</div>`
- Math: inline `$...$`, display `$$...$$` (KaTeX). **Always wrap any string containing LaTeX in
  `String.raw` template literals** so backslashes survive.
- NEVER use a backtick character or the sequence `${` inside content strings.
- Level: fully calculus-based (AP Physics C). Use derivatives, integrals, and differential
  equations where the topic calls for them. Be rigorous but friendly — you are reinforcing
  AP Daily videos the student already watched, so aim for "second pass that makes it click":
  intuition first, then formalism, then exam strategy.

## Graph spec

`graph: { xLabel, yLabel, xMin, xMax, yMin, yMax, fns: [{ expr, label, color? }], shade?, vlines?, hlines? }`

- `expr` is a JS expression in the variable `x` (e.g. `"5*Math.exp(-x/2)"`, `"3*Math.sin(2*x)"`).
  It is evaluated for plotting — keep it pure math.
- `shade: { expr, from, to }` shades the area under that curve (use for work/impulse/flux ideas).
- `vlines: [{x, label?}]`, `hlines: [{y, label?}]` for asymptotes/markers.
- Default colors are supplied automatically; only set `color` if you need contrast between curves.
  Palette: `#fbbf24` amber, `#f87171` red, `#34d399` green, `#60a5fa` blue, `#c084fc` violet, `#22d3ee` cyan.

## Problems (exactly 5 per topic: 3 MCQ, then 2 FRQ)

```js
{ type: "mcq",
  q: String.raw`<p>A particle moves with $x(t) = 4t^3 - 2t$ ... What is its acceleration at $t = 1\,\text{s}$?</p>`,
  choices: [ String.raw`$12\,\text{m/s}^2$`, String.raw`$24\,\text{m/s}^2$`,
             String.raw`$10\,\text{m/s}^2$`, String.raw`$4\,\text{m/s}^2$` ],
  answer: 1,            // index 0–3 of the correct choice
  solution: String.raw`<p>$a = \ddot{x} = 24t$, so at $t=1$: $24\,\text{m/s}^2$.</p>` },

{ type: "frq",
  q: String.raw`<p>Stem describing the physical setup (give a figure in words).</p>`,
  parts: [
    { label: "(a)", prompt: String.raw`<p>Derive an expression for ...</p>`,
      solution: String.raw`<p>Full worked solution with reasoning and math.</p>` },
    { label: "(b)", prompt: String.raw`<p>...</p>`, solution: String.raw`<p>...</p>` }
  ] }
```

- MCQ difficulty mix per topic: one straightforward, one moderate, one exam-hard. Make the
  distractors physically meaningful (sign errors, missing factor of 2, confusing v and a...).
- Each MCQ `solution` should explain WHY, not just compute (1–4 sentences plus math).
- FRQs: 2–4 parts each, authentic AP Physics C style ("derive an expression", "justify your
  answer", symbolic answers preferred over numbers). Solutions must be complete worked solutions.
- Use symbolic quantities ($m$, $v_0$, $\theta$, $R$ ...) like the real exam; use numbers when a
  numeric answer is pedagogically better.

## Simulation catalog (use ONLY these ids)

Mechanics:
| id | what it shows | params |
|---|---|---|
| `kinematics1d` | 1D motion with live x(t), v(t), a(t) graphs; scenario picker | — |
| `projectile` | launch angle/speed/height; trajectory, velocity vectors, range readouts | — |
| `vectorAddition` | two vectors via sliders; tip-to-tail resultant + components | — |
| `riverboat` | relative velocity: boat crossing a river, heading vs. ground track | — |
| `incline` | block on adjustable incline with friction; full FBD; slides when it must | — |
| `frictionBlock` | applied force vs. static→kinetic friction; classic f vs F graph | — |
| `hookesLaw` | spring stretch, F = −kx line, shaded ½kx² energy | — |
| `drag` | falling object with linear/quadratic drag; v(t) → terminal velocity | — |
| `circular` | uniform circular motion; tangential v and centripetal a vectors | — |
| `centerOfMass` | masses on a line; center of mass marker responds to sliders | — |
| `energyTrack` | ball on a hilly track; live KE/PE/thermal energy bars | — |
| `forceArea` | area under a curve = work or impulse | `{ "mode": "work" }` or `{ "mode": "impulse" }` |
| `collision` | 1D two-cart collision with elasticity slider; p and KE before/after | — |
| `torqueSeesaw` | beam balance: masses and lever arms; net torque readout | — |
| `rotInertia` | point masses on a rod; I = Σmr²; apply torque, watch α | — |
| `rolling` | hoop vs disk vs sphere race down an incline; energy split | — |
| `skater` | conservation of angular momentum; pull arms in, ω rises | — |
| `orbit` | satellite around a star; ellipse/circle/escape; energy & vectors | — |
| `shm` | spring–mass oscillator; x(t), v(t), a(t) graphs and energy bars | — |
| `pendulum` | real pendulum vs small-angle prediction; period readouts | — |

E&M:
| id | what it shows | params |
|---|---|---|
| `efield` | point charges: field vectors, field lines, equipotential map; draggable | `{ "preset": "single" \| "dipole" \| "like" \| "coulomb" \| "row" }` |
| `gauss` | gaussian surface around charges; flux depends only on enclosed q | — |
| `potentialField` | linked V(x) and E(x) = −dV/dx graphs with movable probe | `{ "preset": "uniform" \| "point" \| "dipole" }` |
| `capacitorLab` | parallel plates: area, separation, dielectric; battery vs isolated | — |
| `circuit` | animated current in resistor networks; I, V, P table | `{ "preset": "series" \| "parallel" \| "combo" }` |
| `rc` | RC charging/discharging with switch; q(t), I(t), τ marker | — |
| `chargeInB` | charged particle circling in uniform B; r = mv/qB | — |
| `wireB` | field of current-carrying wires / parallel-wire forces / solenoid | `{ "preset": "wire" \| "twoWires" \| "solenoid" }` |
| `induction` | bar sliding on rails in B; flux, emf = BLv, Lenz force, live graphs | — |
| `lr` | LR circuit switch; I(t) growth/decay, τ = L/R | — |
| `lc` | LC oscillation; q(t), I(t), energy sloshing E-field ↔ B-field | — |

Attach a sim to a section with `sim: "id"` and optionally `simParams: { ... }` (JSON-safe values
only) plus a `simCaption` telling the student what to try and what to notice.

## Quality bar

- Physics must be correct. Double-check signs, factors, and limiting cases.
- Every topic ends with a "Common Pitfalls" section.
- Use sims/graphs generously — every topic should have at least one visual element
  (sim or graph); most should have both.
- Do not run git commands. Write only the data files you were assigned.
