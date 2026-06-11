/* app.js — router, renderers, interactivity for Force & Field */
"use strict";
(function () {
  const app = document.getElementById("app");

  /* ---------------- data access ---------------- */
  const COURSES = {
    mech: { id: "mech", name: "AP Physics C: Mechanics", short: "Mechanics", blurb: "Calculus-based classical mechanics: kinematics through oscillations." },
    em: { id: "em", name: "AP Physics C: Electricity & Magnetism", short: "E&M", blurb: "Fields, circuits, and Maxwell's greatest hits — fully calculus-based." }
  };
  function units(course) { return AP.units.filter(u => u.course === course).sort((a, b) => a.id - b.id); }
  function unit(id) { return AP.units.find(u => u.id === +id); }
  function allTopics(course) {
    const out = [];
    units(course).forEach(u => u.topics.forEach(t => out.push({ unit: u, topic: t })));
    return out;
  }
  function findTopic(tid) {
    for (const u of AP.units) for (const t of u.topics) if (t.id === tid) return { unit: u, topic: t };
    return null;
  }

  /* ---------------- progress (localStorage) ---------------- */
  const store = {
    get data() {
      try { return JSON.parse(localStorage.getItem("ff-progress") || "{}"); } catch (e) { return {}; }
    },
    save(d) { localStorage.setItem("ff-progress", JSON.stringify(d)); },
    isDone(tid) { return !!(this.data[tid] && this.data[tid].done); },
    toggleDone(tid) {
      const d = this.data;
      d[tid] = d[tid] || {};
      d[tid].done = !d[tid].done;
      this.save(d);
      return d[tid].done;
    },
    unitProgress(u) {
      const d = this.data;
      const done = u.topics.filter(t => d[t.id] && d[t.id].done).length;
      return { done, total: u.topics.length };
    },
    courseProgress(c) {
      let done = 0, total = 0;
      units(c).forEach(u => { const p = this.unitProgress(u); done += p.done; total += p.total; });
      return { done, total };
    }
  };

  /* ---------------- helpers ---------------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function ring(p, color) {
    const r = 14, c = 2 * Math.PI * r;
    const frac = p.total ? p.done / p.total : 0;
    return '<svg class="progress-ring" viewBox="0 0 34 34">' +
      '<circle class="ring-bg" cx="17" cy="17" r="' + r + '"/>' +
      '<circle class="ring-fg" cx="17" cy="17" r="' + r + '" stroke="' + color + '" stroke-dasharray="' + c + '" stroke-dashoffset="' + (c * (1 - frac)) + '"/>' +
      '<text x="17" y="18">' + p.done + "/" + p.total + "</text></svg>";
  }

  function typeset(el) {
    if (window.renderMathInElement) {
      renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    } else {
      setTimeout(() => typeset(el), 120);
    }
  }

  function accent(course) { return course === "mech" ? "#fbbf24" : "#22d3ee"; }

  /* ---------------- views ---------------- */
  function viewHome() {
    const pm = store.courseProgress("mech"), pe = store.courseProgress("em");
    const nTopics = AP.units.reduce((n, u) => n + u.topics.length, 0);
    const nProblems = AP.units.reduce((n, u) => n + u.topics.reduce((m, t) => m + (t.problems || []).length, 0), 0);
    return '<div class="page">' +
      '<section class="hero"><canvas class="hero-canvas" id="heroCanvas"></canvas>' +
      '<div class="hero-kicker">AP PHYSICS C · SELF-STUDY COMPANION</div>' +
      '<h1>See the physics.<br><span class="grad">Master the exam.</span></h1>' +
      '<p class="lede">Interactive simulations, live graphs, and exam-style practice for every official College Board topic in Mechanics and E&amp;M. Watch the AP Daily videos — then come here to make it stick.</p>' +
      '<div class="hero-stats">' +
      '<div class="hero-stat"><b>' + AP.units.length + '</b><span>CED UNITS</span></div>' +
      '<div class="hero-stat"><b>' + nTopics + '</b><span>TOPIC PAGES</span></div>' +
      '<div class="hero-stat"><b>' + (Sims.ids().length) + '</b><span>SIMULATIONS</span></div>' +
      '<div class="hero-stat"><b>' + nProblems + '</b><span>PRACTICE PROBLEMS</span></div>' +
      '</div></section>' +
      '<section class="course-cards">' +
      courseCard("mech", pm) + courseCard("em", pe) +
      '</section>' +
      '<section class="home-features reveal">' +
      feature("🎛", "Interactive simulations", "Drag charges, launch projectiles, race rolling objects. Every sim is built to answer a “what if?”") +
      feature("📈", "Live graphs everywhere", "x–v–a curves, RC charging, flux and emf — drawn in real time so the calculus feels concrete.") +
      feature("🧮", "Exam-style practice", "MCQs with instant feedback and FRQs with full worked solutions, for all " + nTopics + " topics.") +
      feature("✅", "Progress tracking", "Mark topics complete as you follow the AP Daily videos and watch your rings fill up.") +
      '</section></div>';
  }
  function courseCard(c, p) {
    const us = units(c);
    return '<a class="course-card ' + c + '" href="#/course/' + c + '">' +
      '<span class="cc-label">' + (c === "mech" ? "COURSE 1" : "COURSE 2") + '</span>' +
      '<h2>' + COURSES[c].name + '</h2><p>' + COURSES[c].blurb + '</p>' +
      '<div class="cc-meta"><span>' + us.length + ' units</span><span>' + us.reduce((n, u) => n + u.topics.length, 0) + ' topics</span>' +
      '<span class="cc-progress">' + ring(p, accent(c)) + '</span></div></a>';
  }
  function feature(ico, b, p) {
    return '<div class="feature"><span class="f-ico">' + ico + '</span><b>' + b + '</b>' + p + '</div>';
  }

  function viewCourse(c) {
    const course = COURSES[c];
    if (!course) return view404();
    const us = units(c);
    return '<div class="page ' + c + '-page">' +
      '<div class="page-head"><div class="crumb"><a href="#/">HOME</a> / ' + course.short.toUpperCase() + '</div>' +
      '<h1 class="' + c + '-grad">' + course.name + '</h1>' +
      '<p class="sub">' + course.blurb + ' Units and topics follow the official College Board Course and Exam Description, so they line up 1-to-1 with your AP Daily videos.</p>' +
      '<p style="margin-top:14px"><a class="sim-btn" href="#/formulas/' + c + '">📜 Full equation sheet for this course</a></p></div>' +
      '<div class="unit-grid">' +
      us.map(u => {
        const p = store.unitProgress(u);
        return '<a class="unit-card" data-course="' + c + '" href="#/unit/' + u.id + '">' +
          '<span class="unit-num">UNIT ' + u.id + '</span>' +
          '<h3>' + esc(u.title) + '</h3><p>' + esc(u.tagline || "") + '</p>' +
          '<div class="uc-foot"><span class="weight-pill">' + esc(u.weight || "") + ' of exam</span>' +
          '<span>' + u.topics.length + ' topics</span>' + ring(p, accent(c)) + '</div></a>';
      }).join("") +
      '</div></div>';
  }

  function viewUnit(id) {
    const u = unit(id);
    if (!u) return view404();
    const c = u.course;
    return '<div class="page ' + c + '-page">' +
      '<div class="page-head"><div class="crumb"><a href="#/">HOME</a> / <a href="#/course/' + c + '">' + COURSES[c].short.toUpperCase() + '</a> / UNIT ' + u.id + '</div>' +
      '<h1 class="' + c + '-grad">Unit ' + u.id + ': ' + esc(u.title) + '</h1>' +
      '<p class="sub">' + esc(u.tagline || "") + ' <span class="weight-pill" style="margin-left:8px">' + esc(u.weight || "") + ' of the exam</span></p></div>' +
      (u.bigIdeas && u.bigIdeas.length ?
        '<div class="big-ideas">' + u.bigIdeas.map(b => '<div class="big-idea reveal"><span class="bi-ico">💡</span><span>' + b + '</span></div>').join("") + '</div>' : "") +
      '<div class="topic-list">' +
      u.topics.map(t =>
        '<a class="topic-row reveal" href="#/topic/' + t.id + '">' +
        '<span class="topic-id">' + t.id + '</span>' +
        '<span class="tr-body"><h4>' + esc(t.title) + '</h4><p>' + esc(t.blurb || "") + '</p></span>' +
        '<span class="topic-done' + (store.isDone(t.id) ? " is-done" : "") + '">✓</span></a>'
      ).join("") +
      '</div></div>';
  }

  let pendingGraphs = [], pendingSims = [];
  function sectionHTML(t, s, i) {
    let inner = "";
    if (s.content) inner += s.content;
    if (s.sim) {
      const sid = "sim-" + t.id.replace(".", "-") + "-" + i;
      pendingSims.push({ el: sid, sim: s.sim, params: s.simParams });
      inner += '<div class="sim-frame" id="' + sid + '"></div>';
      if (s.simCaption) inner += '<p class="sim-caption">' + s.simCaption + '</p>';
    }
    if (s.graph) {
      const gid = "graph-" + t.id.replace(".", "-") + "-" + i;
      pendingGraphs.push({ el: gid, spec: s.graph });
      inner += '<div class="graph-frame"><canvas id="' + gid + '"></canvas></div>';
      if (s.graphCaption) inner += '<p class="graph-caption">' + s.graphCaption + '</p>';
    }
    return '<section class="content-section reveal"><h2>' + esc(s.heading) + '</h2>' + inner + '</section>';
  }

  function problemHTML(p, idx) {
    if (p.type === "mcq") {
      return '<div class="problem" data-idx="' + idx + '" data-answer="' + p.answer + '">' +
        '<span class="problem-tag mcq">Multiple choice</span>' +
        '<div class="q">' + p.q + '</div>' +
        '<div class="choices">' +
        p.choices.map((ch, ci) =>
          '<button class="choice" data-ci="' + ci + '"><span class="ch-letter">' + "ABCD"[ci] + '</span><span>' + ch + '</span></button>').join("") +
        '</div><div class="sol-slot" hidden><div class="solution"><span class="sol-label">Why</span>' + p.solution + '</div></div></div>';
    }
    return '<div class="problem"><span class="problem-tag frq">Free response</span>' +
      '<div class="q">' + p.q + '</div>' +
      (p.parts || []).map(part =>
        '<div class="frq-part"><span class="part-label">' + esc(part.label) + '</span>' + part.prompt +
        '<button class="show-sol-btn">Show solution</button>' +
        '<div class="sol-slot" hidden><div class="solution"><span class="sol-label">Solution</span>' + part.solution + '</div></div></div>').join("") +
      '</div>';
  }

  function viewTopic(tid) {
    const hit = findTopic(tid);
    if (!hit) return view404();
    const { unit: u, topic: t } = hit;
    const c = u.course;
    pendingGraphs = []; pendingSims = [];
    const flat = allTopics(c);
    const pos = flat.findIndex(x => x.topic.id === tid);
    const prev = pos > 0 ? flat[pos - 1] : null;
    const next = pos < flat.length - 1 ? flat[pos + 1] : null;

    const side = '<aside class="topic-side"><h5>Unit ' + u.id + '</h5>' +
      u.topics.map(x => '<a href="#/topic/' + x.id + '" class="' + (x.id === tid ? "current" : "") + '"><span class="t-id">' + x.id + '</span><span>' + esc(x.title) + '</span></a>').join("") +
      '</aside>';

    const main = '<div class="topic-main">' +
      '<div class="page-head" style="padding-top:34px">' +
      '<div class="crumb"><a href="#/">HOME</a> / <a href="#/course/' + c + '">' + COURSES[c].short.toUpperCase() + '</a> / <a href="#/unit/' + u.id + '">UNIT ' + u.id + '</a> / ' + t.id + '</div>' +
      '<h1 class="' + c + '-grad" style="font-size:clamp(26px,4vw,38px)">' + t.id + ' — ' + esc(t.title) + '</h1>' +
      '<p class="sub">' + esc(t.blurb || "") + '</p></div>' +
      (t.objectives && t.objectives.length ?
        '<div class="objectives reveal"><h4>You should be able to…</h4><ul>' + t.objectives.map(o => "<li>" + o + "</li>").join("") + '</ul></div>' : "") +
      (t.sections || []).map((s, i) => sectionHTML(t, s, i)).join("") +
      (t.equations && t.equations.length ?
        '<div class="equations-panel reveal"><h3>🧾 Key equations</h3>' +
        t.equations.map(e => '<div class="equation-row"><div class="eq">$$' + e.latex + '$$</div><div class="eq-note">' + (e.note || "") + '</div></div>').join("") + '</div>' : "") +
      (t.problems && t.problems.length ?
        '<div class="problems-block"><h3>🎯 Check your understanding</h3><p class="p-sub">Three multiple-choice (instant feedback) + two FRQ-style problems with full solutions.</p>' +
        t.problems.map((p, i) => problemHTML(p, i)).join("") + '</div>' : "") +
      '<div class="topic-foot">' +
      (prev ? '<a class="tf-link" href="#/topic/' + prev.topic.id + '"><span>← Previous</span><b>' + prev.topic.id + ' ' + esc(prev.topic.title) + '</b></a>' : '<span class="tf-link" style="visibility:hidden"></span>') +
      '<button class="mark-done-btn' + (store.isDone(tid) ? " is-done" : "") + '" id="markDone">' + (store.isDone(tid) ? "✓ Completed" : "Mark complete") + '</button>' +
      (next ? '<a class="tf-link next" href="#/topic/' + next.topic.id + '"><span>Next →</span><b>' + next.topic.id + ' ' + esc(next.topic.title) + '</b></a>' : '<span class="tf-link" style="visibility:hidden"></span>') +
      '</div></div>';

    return '<div class="page ' + c + '-page"><div class="topic-layout">' + side + main + '</div></div>';
  }

  function viewFormulas(c) {
    if (!COURSES[c]) return view404();
    return '<div class="page ' + c + '-page">' +
      '<div class="page-head"><div class="crumb"><a href="#/">HOME</a> / <a href="#/course/' + c + '">' + COURSES[c].short.toUpperCase() + '</a> / EQUATIONS</div>' +
      '<h1 class="' + c + '-grad">Equation sheet — ' + COURSES[c].short + '</h1>' +
      '<p class="sub">Every key equation from every topic, in CED order. Skim this before mocks.</p></div>' +
      units(c).map(u => '<div class="formula-unit reveal"><h3>Unit ' + u.id + ': ' + esc(u.title) + '</h3>' +
        '<div class="equations-panel">' +
        u.topics.map(t => (t.equations || []).map(e =>
          '<div class="equation-row"><div class="eq">$$' + e.latex + '$$</div><div class="eq-note"><strong style="color:#6b7494">' + t.id + '</strong> · ' + (e.note || "") + '</div></div>').join("")).join("") +
        '</div></div>').join("") +
      '</div>';
  }

  function view404() {
    return '<div class="page"><div class="page-head"><h1>Lost in phase space</h1><p class="sub">That page doesn’t exist. <a href="#/" style="color:#22d3ee">Head home</a>.</p></div></div>';
  }

  /* ---------------- hero canvas: orbiting particles + field lines ---------------- */
  function heroAnim() {
    const cv = document.getElementById("heroCanvas");
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    let W, H;
    function resize() {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ctx = cv.getContext("2d");
    const N = 42;
    const ps = [];
    for (let i = 0; i < N; i++) {
      ps.push({
        x: Math.random() * 1.2 - 0.1, y: Math.random() * 1.2 - 0.1,
        vx: (Math.random() - 0.5) * 0.0011, vy: (Math.random() - 0.5) * 0.0011,
        hue: Math.random()
      });
    }
    function frame() {
      if (!document.body.contains(cv)) return;
      requestAnimationFrame(frame);
      ctx.clearRect(0, 0, W, H);
      ps.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -0.1 || p.x > 1.1) p.vx *= -1;
        if (p.y < -0.1 || p.y > 1.1) p.vy *= -1;
      });
      // links
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const a = ps[i], b = ps[j];
        const d = Math.hypot((a.x - b.x) * W, (a.y - b.y) * H);
        if (d < 130) {
          const al = (1 - d / 130) * 0.22;
          ctx.strokeStyle = "rgba(140,160,255," + al + ")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x * W, a.y * H); ctx.lineTo(b.x * W, b.y * H); ctx.stroke();
        }
      }
      ps.forEach(p => {
        const c = p.hue < 0.33 ? "251,191,36" : p.hue < 0.66 ? "34,211,238" : "167,139,250";
        ctx.fillStyle = "rgba(" + c + ",0.8)";
        ctx.beginPath(); ctx.arc(p.x * W, p.y * H, 1.8, 0, Math.PI * 2); ctx.fill();
      });
    }
    frame();
    window.addEventListener("resize", resize);
  }

  /* ---------------- interactivity wiring ---------------- */
  function wire(route) {
    // graphs
    pendingGraphs.forEach(g => {
      const cv = document.getElementById(g.el);
      if (cv) { try { Plot.drawSpec(cv, g.spec); } catch (e) { console.error("graph failed", e); } }
    });
    // sims
    pendingSims.forEach(s => {
      const el = document.getElementById(s.el);
      if (el) Sims.mount(el, s.sim, s.params);
    });
    // MCQs
    app.querySelectorAll(".problem[data-answer]").forEach(prob => {
      const ans = +prob.dataset.answer;
      prob.querySelectorAll(".choice").forEach(btn => {
        btn.addEventListener("click", () => {
          if (prob.classList.contains("answered")) return;
          prob.classList.add("answered");
          const ci = +btn.dataset.ci;
          const right = ci === ans;
          btn.classList.add(right ? "picked-right" : "picked-wrong");
          if (!right) prob.querySelector('.choice[data-ci="' + ans + '"]').classList.add("reveal-right");
          prob.classList.add(right ? "correct" : "incorrect");
          prob.querySelectorAll(".choice").forEach(b => b.disabled = true);
          const slot = prob.querySelector(".sol-slot");
          slot.hidden = false;
          typeset(slot);
        });
      });
    });
    // FRQ reveals
    app.querySelectorAll(".show-sol-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const slot = btn.nextElementSibling;
        slot.hidden = !slot.hidden;
        btn.textContent = slot.hidden ? "Show solution" : "Hide solution";
        if (!slot.hidden) typeset(slot);
      });
    });
    // mark done
    const md = document.getElementById("markDone");
    if (md && route.tid) {
      md.addEventListener("click", () => {
        const done = store.toggleDone(route.tid);
        md.classList.toggle("is-done", done);
        md.textContent = done ? "✓ Completed" : "Mark complete";
      });
    }
    // reveal on scroll
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("shown"); obs.unobserve(e.target); } });
    }, { threshold: 0.06 });
    app.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    // hero
    heroAnim();
  }

  /* ---------------- router ---------------- */
  function parse() {
    const h = location.hash.replace(/^#\/?/, "");
    const seg = h.split("/").filter(Boolean);
    if (!seg.length) return { view: "home" };
    if (seg[0] === "course" && seg[1]) return { view: "course", c: seg[1] };
    if (seg[0] === "unit" && seg[1]) return { view: "unit", id: seg[1] };
    if (seg[0] === "topic" && seg[1]) return { view: "topic", tid: seg[1] };
    if (seg[0] === "formulas" && seg[1]) return { view: "formulas", c: seg[1] };
    return { view: "404" };
  }

  function render() {
    Sims.destroyAll();
    const r = parse();
    let html;
    if (r.view === "home") html = viewHome();
    else if (r.view === "course") html = viewCourse(r.c);
    else if (r.view === "unit") html = viewUnit(r.id);
    else if (r.view === "topic") html = viewTopic(r.tid);
    else if (r.view === "formulas") html = viewFormulas(r.c);
    else html = view404();
    app.innerHTML = html;
    window.scrollTo({ top: 0 });
    typeset(app);
    wire(r);
    // nav highlight
    document.querySelectorAll(".site-nav a[data-nav]").forEach(a => {
      const c = a.dataset.nav;
      const active = (r.view === "course" && r.c === c) ||
        (r.view === "formulas" && r.c === c) ||
        (r.view === "unit" && unit(r.id) && unit(r.id).course === c) ||
        (r.view === "topic" && findTopic(r.tid) && findTopic(r.tid).unit.course === c);
      a.classList.toggle("active", !!active);
    });
  }

  /* ---------------- search ---------------- */
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  function openSearch() {
    overlay.hidden = false;
    input.value = "";
    renderResults("");
    setTimeout(() => input.focus(), 30);
  }
  function closeSearch() { overlay.hidden = true; }
  function renderResults(q) {
    q = q.trim().toLowerCase();
    const items = [];
    AP.units.forEach(u => u.topics.forEach(t => {
      const hay = (t.id + " " + t.title + " " + (t.blurb || "") + " " + u.title).toLowerCase();
      if (!q || hay.includes(q)) items.push({ u, t });
    }));
    results.innerHTML = items.length ? items.slice(0, 40).map(({ u, t }) =>
      '<a class="search-result" href="#/topic/' + t.id + '"><span class="sr-id ' + u.course + '">' + t.id + '</span>' +
      '<span>' + esc(t.title) + '</span><span class="sr-unit">' + COURSES[u.course].short + ' · U' + u.id + '</span></a>'
    ).join("") : '<div class="search-empty">No topics match “' + esc(q) + '”.</div>';
  }
  document.getElementById("searchBtn").addEventListener("click", openSearch);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeSearch(); });
  input.addEventListener("input", () => renderResults(input.value));
  results.addEventListener("click", () => closeSearch());
  document.addEventListener("keydown", e => {
    if (e.key === "/" && overlay.hidden && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault(); openSearch();
    }
    if (e.key === "Escape") closeSearch();
    if (e.key === "Enter" && !overlay.hidden) {
      const first = results.querySelector(".search-result");
      if (first) { location.hash = first.getAttribute("href"); closeSearch(); }
    }
  });

  window.addEventListener("hashchange", render);
  render();
})();
