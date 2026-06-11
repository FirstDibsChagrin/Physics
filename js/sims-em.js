/* sims-em.js — interactive simulations for AP Physics C: Electricity & Magnetism */
"use strict";
(function () {
  const D = Sims.D;
  const TAU = Math.PI * 2;

  /* ============ point charges: field vectors / lines / potential ============ */
  Sims.define("efield", (S) => {
    S.size(360);
    const preset = S.params.preset || "dipole";
    let charges =
      preset === "single" ? [{ x: 0.5, y: 0.5, q: 2 }] :
      preset === "like"   ? [{ x: 0.36, y: 0.5, q: 2 }, { x: 0.64, y: 0.5, q: 2 }] :
      preset === "coulomb"? [{ x: 0.36, y: 0.5, q: 2 }, { x: 0.64, y: 0.5, q: -2 }] :
      preset === "row"    ? [-2,-1,0,1,2].map(i => ({ x: 0.5 + i * 0.075, y: 0.5, q: 1.2 })) :
                            [{ x: 0.36, y: 0.5, q: 2 }, { x: 0.64, y: 0.5, q: -2 }];
    let view = "vectors";
    const q1s = S.slider("Charge 1 magnitude", -4, 4, 0.25, charges[0].q, { unit: "q", onChange: v => { charges[0].q = v; dirty = true; } });
    S.select([["vectors", "view: field vectors"], ["lines", "view: field lines"], ["potential", "view: potential map"]], v => { view = v; dirty = true; });
    if (preset === "coulomb") S.readout("F", "Coulomb force ∝ q₁q₂/r²");
    S.readout("hint", "Tip");
    let dirty = true, off = null, drag = null;
    const k = 0.012;
    function E(x, y) {
      let ex = 0, ey = 0;
      for (const c of charges) {
        const dx = x - c.x, dy = y - c.y;
        const r2 = dx * dx + dy * dy + 1e-6;
        const r = Math.sqrt(r2);
        ex += k * c.q * dx / (r2 * r);
        ey += k * c.q * dy / (r2 * r);
      }
      return [ex, ey];
    }
    function V(x, y) {
      let v = 0;
      for (const c of charges) v += k * c.q / Math.hypot(x - c.x, y - c.y, 0.02);
      return v;
    }
    // dragging
    S.canvas.style.cursor = "grab";
    S.canvas.addEventListener("pointerdown", e => {
      const r = S.canvas.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width, my = (e.clientY - r.top) / r.height;
      drag = charges.find(c => Math.hypot(c.x - mx, (c.y - my) * (S.h / S.w) * (S.w / S.h)) < 0.05 || Math.hypot(c.x - mx, c.y - my) < 0.06) || null;
    });
    S.canvas.addEventListener("pointermove", e => {
      if (!drag) return;
      const r = S.canvas.getBoundingClientRect();
      drag.x = Math.max(0.04, Math.min(0.96, (e.clientX - r.left) / r.width));
      drag.y = Math.max(0.06, Math.min(0.94, (e.clientY - r.top) / r.height));
      dirty = true;
    });
    window.addEventListener("pointerup", () => { drag = null; });
    S.onDraw = (ctx, w, h) => {
      if (dirty) {
        dirty = false;
        off = document.createElement("canvas");
        off.width = w; off.height = h;
        const c2 = off.getContext("2d");
        if (view === "potential") {
          const N = 90, M = Math.round(N * h / w);
          for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) {
            const x = (i + 0.5) / N, y = (j + 0.5) / M;
            const v = V(x, y * h / w * (w / h));
            const s = Math.tanh(v * 28);
            const r = s > 0 ? 248 : 96, g = s > 0 ? 113 : 165, b = s > 0 ? 113 : 250;
            c2.fillStyle = "rgba(" + r + "," + g + "," + b + "," + Math.min(0.85, Math.abs(s)) + ")";
            c2.fillRect(i / N * w, j / M * h, w / N + 1, h / M + 1);
          }
          // equipotential contours (marching through V levels along scan lines is heavy; draw iso-bands instead)
        } else if (view === "vectors") {
          const step = 34;
          for (let px = step / 2; px < w; px += step) for (let py = step / 2; py < h; py += step) {
            const [ex, ey] = E(px / w, py / w);
            const mag = Math.hypot(ex, ey);
            if (mag < 1e-6) continue;
            const len = 6 + Math.min(16, mag * 5200);
            const a = Math.atan2(ey, ex);
            const al = Math.min(0.9, 0.25 + mag * 2600);
            c2.strokeStyle = c2.fillStyle = "rgba(34,211,238," + al + ")";
            c2.lineWidth = 1.6;
            c2.beginPath();
            c2.moveTo(px - len * Math.cos(a) / 2, py - len * Math.sin(a) / 2);
            c2.lineTo(px + len * Math.cos(a) / 2, py + len * Math.sin(a) / 2);
            c2.stroke();
            c2.beginPath();
            const hx = px + len * Math.cos(a) / 2, hy = py + len * Math.sin(a) / 2;
            c2.moveTo(hx, hy);
            c2.lineTo(hx - 5 * Math.cos(a - 0.5), hy - 5 * Math.sin(a - 0.5));
            c2.lineTo(hx - 5 * Math.cos(a + 0.5), hy - 5 * Math.sin(a + 0.5));
            c2.fill();
          }
        } else {
          // field lines seeded around each positive (and negative if no positive) charge
          c2.strokeStyle = "rgba(34,211,238,0.55)"; c2.lineWidth = 1.4;
          const seeds = [];
          charges.forEach(c => {
            const n = Math.max(8, Math.round(Math.abs(c.q) * 6));
            if (c.q > 0) for (let i = 0; i < n; i++) seeds.push({ x: c.x + 0.018 * Math.cos(TAU * i / n), y: c.y + 0.018 * Math.sin(TAU * i / n) * 1, dir: 1 });
          });
          if (!seeds.length) charges.forEach(c => {
            const n = Math.max(8, Math.round(Math.abs(c.q) * 6));
            for (let i = 0; i < n; i++) seeds.push({ x: c.x + 0.018 * Math.cos(TAU * i / n), y: c.y + 0.018 * Math.sin(TAU * i / n), dir: -1 });
          });
          seeds.forEach(s0 => {
            let x = s0.x, y = s0.y;
            c2.beginPath(); c2.moveTo(x * w, y * w);
            for (let i = 0; i < 700; i++) {
              const [ex, ey] = E(x, y);
              const m = Math.hypot(ex, ey);
              if (m < 1e-7) break;
              x += s0.dir * ex / m * 0.006; y += s0.dir * ey / m * 0.006;
              if (x < 0 || x > 1 || y < 0 || y * w > S.h) break;
              c2.lineTo(x * w, y * w);
              if (charges.some(c => c.q * s0.dir < 0 && Math.hypot(x - c.x, y - c.y) < 0.022)) break;
            }
            c2.stroke();
            // arrowhead midway
          });
        }
        // charges drawn each frame below
      }
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(off, 0, 0);
      charges.forEach(c => D.charge(ctx, c.x * w, c.y * w, c.q, 11 + Math.abs(c.q) * 2.2));
      if (preset === "coulomb" && charges.length >= 2) {
        const a = charges[0], b = charges[1];
        const dx = (b.x - a.x) * w, dy = (b.y - a.y) * w;
        const r = Math.hypot(dx, dy) / w;
        const F = Math.abs(a.q * b.q) / (r * r) * 0.0009;
        const rep = a.q * b.q > 0 ? 1 : -1;
        const ux = dx / Math.hypot(dx, dy), uy = dy / Math.hypot(dx, dy);
        const len = Math.min(70, 6 + F * 30);
        D.arrow(ctx, b.x * w, b.y * w, b.x * w + rep * ux * len, b.y * w + rep * uy * len, "#34d399", 3, "F on 2");
        D.arrow(ctx, a.x * w, a.y * w, a.x * w - rep * ux * len, a.y * w - rep * uy * len, "#34d399", 3, "F on 1");
        S.set("F", (F * 1000).toFixed(2) + " (arb. units) at r = " + r.toFixed(2));
      }
      S.set("hint", "drag the charges!");
    };
  });

  /* ============ Gauss's law ============ */
  Sims.define("gauss", (S) => {
    S.size(340);
    const qs = S.slider("Enclosed charge q", -4, 4, 0.5, 2, { unit: "q" });
    const rs = S.slider("Gaussian sphere radius", 40, 130, 2, 80, { unit: "px" });
    let ext = false;
    S.select([["no", "no external charge"], ["yes", "add external charge"]], v => { ext = v === "yes"; });
    S.readout("flux", "Φ = q_enc/ε₀"); S.readout("note", "Note");
    S.onTick = () => {};
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.42, cy = h / 2;
      const R = rs.value;
      // gaussian surface
      ctx.strokeStyle = "rgba(52,211,153,0.85)"; ctx.lineWidth = 2; ctx.setLineDash([7, 6]);
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
      D.label(ctx, "gaussian surface", cx, cy - R - 12, "#34d399", 11);
      const extQ = ext ? { x: w * 0.84, y: cy, q: 3 } : null;
      // flux arrows through surface (∝ E at surface from all charges, but NET counts only enclosed)
      const n = 26;
      for (let i = 0; i < n; i++) {
        const a = TAU * i / n;
        const px = cx + R * Math.cos(a), py = cy + R * Math.sin(a);
        let ex = qs.value * Math.cos(a) / (R * R) * 50000;
        let ey = qs.value * Math.sin(a) / (R * R) * 50000;
        if (extQ) {
          const dx = px - extQ.x, dy = py - extQ.y;
          const r2 = dx * dx + dy * dy;
          ex += extQ.q * dx / r2 / Math.sqrt(r2) * 50000;
          ey += extQ.q * dy / r2 / Math.sqrt(r2) * 50000;
        }
        const m = Math.hypot(ex, ey);
        const L = Math.min(26, 3 + m * 0.9);
        const dot = (ex * Math.cos(a) + ey * Math.sin(a)) >= 0;
        ctx.globalAlpha = 0.85;
        D.arrow(ctx, px, py, px + ex / m * L, py + ey / m * L, dot ? "#22d3ee" : "#f87171", 1.8);
        ctx.globalAlpha = 1;
      }
      if (Math.abs(qs.value) > 0.01) D.charge(ctx, cx, cy, qs.value, 12 + Math.abs(qs.value) * 2);
      if (extQ) { D.charge(ctx, extQ.x, extQ.y, extQ.q, 15); D.label(ctx, "outside → zero NET flux", extQ.x, extQ.y + 32, "#9aa3bf", 10.5); }
      S.set("flux", qs.value.toFixed(1) + " q/ε₀  (independent of radius!)");
      S.set("note", ext ? "external charge bends field lines but adds zero net flux" : "try changing the radius — Φ doesn't care");
    };
  });

  /* ============ V(x) and E = −dV/dx ============ */
  Sims.define("potentialField", (S) => {
    S.size(0.1); S.canvas.remove(); // graphs only
    const preset = S.params.preset || "point";
    const probe = S.slider("Probe position x", -4.8, 4.8, 0.05, 2, { unit: "m" });
    S.readout("V", "V at probe"); S.readout("E", "E = −dV/dx");
    const Vf = preset === "uniform" ? (x => -3 * x)
      : preset === "dipole" ? (x => 8 / Math.max(0.25, Math.abs(x - 1.6)) - 8 / Math.max(0.25, Math.abs(x + 1.6)))
      : (x => 10 / Math.max(0.3, Math.abs(x)));
    const pv = S.livePlot({ xMin: -5, xMax: 5, yMin: preset === "uniform" ? -16 : -34, yMax: 34, xLabel: "x (m)", yLabel: "V (volts)", height: 170, series: [] });
    const pe = S.livePlot({ xMin: -5, xMax: 5, yMin: -30, yMax: 30, xLabel: "x (m)", yLabel: "Eₓ (V/m)", height: 170, series: [] });
    const Ef = x => -(Vf(x + 0.01) - Vf(x - 0.01)) / 0.02;
    function drawCurve(plot, fn, color) {
      const m = Plot.axes(plot.ctx, plot.w, plot.h, plot.opts);
      plot.ctx.strokeStyle = color; plot.ctx.lineWidth = 2.4;
      plot.ctx.beginPath();
      let pen = false;
      for (let i = 0; i <= 360; i++) {
        const x = -5 + i / 36;
        let y = fn(x);
        if (!isFinite(y)) { pen = false; continue; }
        y = Math.max(plot.opts.yMin * 1.2, Math.min(plot.opts.yMax * 1.2, y));
        pen ? plot.ctx.lineTo(m.X(x), m.Y(y)) : plot.ctx.moveTo(m.X(x), m.Y(y));
        pen = true;
      }
      plot.ctx.stroke();
      return m;
    }
    S.onDraw = () => {
      pv.opts.xLabel = "x (m)";
      const m1 = drawCurve(pv, Vf, "#fbbf24");
      const m2 = drawCurve(pe, Ef, "#22d3ee");
      const x = probe.value;
      [[pv, m1, Vf(x)], [pe, m2, Ef(x)]].forEach(([p, m, y]) => {
        const yc = Math.max(p.opts.yMin, Math.min(p.opts.yMax, y));
        p.ctx.save(); p.ctx.setLineDash([4, 4]); p.ctx.strokeStyle = "rgba(255,255,255,0.3)";
        p.ctx.beginPath(); p.ctx.moveTo(m.X(x), m.pad.t); p.ctx.lineTo(m.X(x), p.h - m.pad.b); p.ctx.stroke(); p.ctx.restore();
        D.ball(p.ctx, m.X(x), m.Y(yc), 5, "#34d399");
      });
      // slope arrow on V plot: E points downhill in V
      const Ex = Ef(x);
      D.arrow(pv.ctx, m1.X(x), m1.Y(Math.max(pv.opts.yMin, Math.min(pv.opts.yMax, Vf(x)))),
        m1.X(x) + Math.sign(Ex) * Math.min(34, Math.abs(Ex) * 3 + 8), m1.Y(Math.max(pv.opts.yMin, Math.min(pv.opts.yMax, Vf(x)))), "#22d3ee", 2.4, "E");
      S.set("V", Vf(x).toFixed(2) + " V");
      S.set("E", Ex.toFixed(2) + " V/m  (E points downhill on the V graph)");
    };
  });

  /* ============ parallel-plate capacitor lab ============ */
  Sims.define("capacitorLab", (S) => {
    S.size(330);
    const As = S.slider("Plate area A", 0.5, 3, 0.05, 1.5, { fmt: v => v.toFixed(2) + "×", });
    const ds = S.slider("Separation d", 0.4, 2.2, 0.05, 1.0, { fmt: v => v.toFixed(2) + "×" });
    const ks = S.slider("Dielectric κ", 1, 6, 0.1, 1);
    let mode = "battery";
    S.select([["battery", "battery stays connected (V fixed)"], ["isolated", "battery disconnected (Q fixed)"]], v => { mode = v; });
    S.readout("C", "C = κε₀A/d"); S.readout("Q", "Q"); S.readout("V", "V"); S.readout("E", "E field"); S.readout("U", "Energy U");
    const V0 = 10, C0 = 1;
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const C = ks.value * C0 * As.value / ds.value;
      const V = mode === "battery" ? V0 : (V0 * C0 * 1.5 / C); // isolated: Q fixed at value charged to V0 with C=1.5C0 reference
      const Q = C * V;
      const E = V / ds.value;
      const U = 0.5 * C * V * V;
      const cx = w * 0.40, cy = h / 2;
      const pw = 90 * As.value, gap = 52 * ds.value;
      // plates
      ctx.fillStyle = "#f87171";
      ctx.fillRect(cx - pw, cy - gap / 2 - 8, pw * 2, 8);
      ctx.fillStyle = "#60a5fa";
      ctx.fillRect(cx - pw, cy + gap / 2, pw * 2, 8);
      // dielectric slab
      if (ks.value > 1.01) {
        ctx.fillStyle = "rgba(167,139,250," + (0.10 + ks.value * 0.05) + ")";
        ctx.fillRect(cx - pw, cy - gap / 2, pw * 2, gap);
        D.label(ctx, "κ = " + ks.value.toFixed(1), cx, cy + 4, "#c4b5fd", 12);
      }
      // charges on plates
      const nq = Math.max(2, Math.round(Q * 1.1));
      for (let i = 0; i < Math.min(nq, 22); i++) {
        const x = cx - pw + (i + 0.5) / Math.min(nq, 22) * pw * 2;
        D.label(ctx, "+", x, cy - gap / 2 - 4, "#fff", 11);
        D.label(ctx, "−", x, cy + gap / 2 + 4, "#fff", 11);
      }
      // E field arrows
      const ne = Math.max(2, Math.round(E * 1.4));
      for (let i = 0; i < Math.min(ne, 14); i++) {
        const x = cx - pw + (i + 0.5) / Math.min(ne, 14) * pw * 2;
        D.arrow(ctx, x, cy - gap / 2 + 5, x, cy + gap / 2 - 5, "rgba(34,211,238,0.7)", 1.7);
      }
      // battery sketch
      D.label(ctx, mode === "battery" ? "⎓ battery connected (V = " + V0 + " V)" : "⌁ isolated (Q locked)", cx, cy + gap / 2 + 34, "#9aa3bf", 11.5);
      // bars
      D.bars(ctx, w * 0.74, h - 60, w * 0.22, [
        { label: "C", value: C, color: "#34d399" },
        { label: "Q", value: Q / 4, color: "#fbbf24" },
        { label: "V", value: V / 4, color: "#f87171" },
        { label: "U", value: U / 22, color: "#a78bfa" }
      ], 6, "relative size");
      S.set("C", C.toFixed(2) + " (arb. F)");
      S.set("Q", Q.toFixed(1) + " (arb. C)" + (mode === "isolated" ? " — fixed" : ""));
      S.set("V", V.toFixed(2) + " V" + (mode === "battery" ? " — fixed" : ""));
      S.set("E", E.toFixed(2) + " (V per unit d)");
      S.set("U", U.toFixed(1) + " (arb. J)");
    };
  });

  /* ============ resistor circuits with animated current ============ */
  Sims.define("circuit", (S) => {
    S.size(330);
    const preset = S.params.preset || "series";
    const Vs = S.slider("Battery emf ε", 2, 24, 0.5, 12, { unit: "V" });
    const R1 = S.slider("R₁", 1, 20, 0.5, 4, { unit: "Ω" });
    const R2 = S.slider("R₂", 1, 20, 0.5, 8, { unit: "Ω" });
    const R3 = preset === "combo" ? S.slider("R₃", 1, 20, 0.5, 8, { unit: "Ω" }) : null;
    S.readout("req", "R_eq"); S.readout("i", "I from battery"); S.readout("p", "P total");
    let phase = 0;
    function solve() {
      const V = Vs.value, r1 = R1.value, r2 = R2.value, r3 = R3 ? R3.value : 0;
      if (preset === "series") {
        const Req = r1 + r2, I = V / Req;
        return { Req, I, branches: [{ R: r1, I, V: I * r1 }, { R: r2, I, V: I * r2 }] };
      }
      if (preset === "parallel") {
        const Req = 1 / (1 / r1 + 1 / r2), I = V / Req;
        return { Req, I, branches: [{ R: r1, I: V / r1, V }, { R: r2, I: V / r2, V }] };
      }
      const Rp = 1 / (1 / r2 + 1 / r3);
      const Req = r1 + Rp, I = V / Req;
      const Vp = I * Rp;
      return { Req, I, branches: [{ R: r1, I, V: I * r1 }, { R: r2, I: Vp / r2, V: Vp }, { R: r3, I: Vp / r3, V: Vp }] };
    }
    S.onTick = (dt) => { phase += dt; };
    function wire(ctx, pts) {
      ctx.strokeStyle = "rgba(255,255,255,0.4)"; ctx.lineWidth = 2.2; ctx.lineJoin = "round";
      ctx.beginPath();
      pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
      ctx.stroke();
    }
    function dots(ctx, pts, I, ph) {
      // animated charge dots along polyline, speed ∝ I
      let segs = [], total = 0;
      for (let i = 1; i < pts.length; i++) {
        const L = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
        segs.push({ a: pts[i - 1], b: pts[i], L }); total += L;
      }
      const n = Math.max(3, Math.round(total / 36));
      for (let i = 0; i < n; i++) {
        let d = ((i / n + ph * I * 0.05) % 1 + 1) % 1 * total;
        for (const s of segs) {
          if (d <= s.L) {
            const f = d / s.L;
            const x = s.a[0] + (s.b[0] - s.a[0]) * f, y = s.a[1] + (s.b[1] - s.a[1]) * f;
            ctx.fillStyle = "#fbbf24";
            ctx.beginPath(); ctx.arc(x, y, 3, 0, TAU); ctx.fill();
            break;
          }
          d -= s.L;
        }
      }
    }
    function resistor(ctx, x, y, horiz, label, glow) {
      ctx.save();
      ctx.translate(x, y); if (!horiz) ctx.rotate(Math.PI / 2);
      ctx.strokeStyle = "#c9d1e8"; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(-26, 0);
      for (let i = 0; i < 6; i++) ctx.lineTo(-26 + 8 + i * 8, (i % 2 ? -8 : 8));
      ctx.lineTo(26, 0); ctx.stroke();
      if (glow > 0.02) {
        ctx.shadowColor = "#fb7185"; ctx.shadowBlur = 4 + glow * 22;
        ctx.strokeStyle = "rgba(251,113,133," + Math.min(0.9, glow) + ")";
        ctx.beginPath(); ctx.moveTo(-26, 0);
        for (let i = 0; i < 6; i++) ctx.lineTo(-26 + 8 + i * 8, (i % 2 ? -8 : 8));
        ctx.lineTo(26, 0); ctx.stroke();
      }
      ctx.restore();
      D.label(ctx, label, x + (horiz ? 0 : 26), y + (horiz ? -18 : 0), "#9aa3bf", 11.5);
    }
    function battery(ctx, x, y) {
      ctx.strokeStyle = "#e8ecf8"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x - 9, y - 16); ctx.lineTo(x + 9, y - 16); ctx.stroke();
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(x - 16, y - 8); ctx.lineTo(x + 16, y - 8); ctx.stroke();
      D.label(ctx, "ε", x - 26, y - 12, "#fbbf24", 13);
    }
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const sol = solve();
      const Pmax = 60;
      const L = 60, Rt = w - 60, T = 46, B = h - 56;
      const mid = (L + Rt) / 2;
      if (preset === "series") {
        const loop = [[L, B], [L, T], [mid - 40, T], [mid + 40, T], [Rt, T], [Rt, B], [mid + 40, B], [mid - 40, B], [L, B]];
        wire(ctx, loop);
        battery(ctx, L, (T + B) / 2 + 12);
        resistor(ctx, mid, T, true, "R₁ = " + sol.branches[0].R + "Ω · " + sol.branches[0].V.toFixed(1) + "V", sol.branches[0].I * sol.branches[0].V / Pmax);
        resistor(ctx, mid, B, true, "R₂ = " + sol.branches[1].R + "Ω · " + sol.branches[1].V.toFixed(1) + "V", sol.branches[1].I * sol.branches[1].V / Pmax);
        dots(ctx, loop, sol.I, phase);
      } else if (preset === "parallel") {
        const x1 = mid - 60, x2 = mid + 60;
        wire(ctx, [[L, B], [L, T], [Rt, T]]);
        wire(ctx, [[Rt, T], [Rt, B], [L, B]]);
        wire(ctx, [[x1, T], [x1, B]]);
        wire(ctx, [[x2, T], [x2, B]]);
        battery(ctx, L, (T + B) / 2 + 12);
        resistor(ctx, x1, (T + B) / 2, false, "R₁ " + sol.branches[0].I.toFixed(1) + "A", sol.branches[0].I * sol.branches[0].V / Pmax);
        resistor(ctx, x2, (T + B) / 2, false, "R₂ " + sol.branches[1].I.toFixed(1) + "A", sol.branches[1].I * sol.branches[1].V / Pmax);
        dots(ctx, [[L, B], [L, T], [x1, T], [x1, B], [L, B]], sol.branches[0].I, phase);
        dots(ctx, [[x1, T], [x2, T], [x2, B], [x1, B]], sol.branches[1].I, phase + 0.4);
      } else {
        const xr1 = mid - 40, xp1 = Rt - 130, xp2 = Rt - 50;
        wire(ctx, [[L, B], [L, T], [xr1 - 26, T]]);
        wire(ctx, [[xr1 + 26, T], [Rt, T], [Rt, B], [L, B]]);
        wire(ctx, [[xp1, T], [xp1, B - 0]]); wire(ctx, [[xp1, B], [Rt, B]]);
        battery(ctx, L, (T + B) / 2 + 12);
        resistor(ctx, xr1, T, true, "R₁ " + sol.branches[0].I.toFixed(1) + "A", sol.branches[0].I * sol.branches[0].V / Pmax);
        resistor(ctx, xp1, (T + B) / 2, false, "R₂ " + sol.branches[1].I.toFixed(1) + "A", sol.branches[1].I * sol.branches[1].V / Pmax);
        resistor(ctx, Rt, (T + B) / 2, false, "R₃ " + sol.branches[2].I.toFixed(1) + "A", sol.branches[2].I * sol.branches[2].V / Pmax);
        dots(ctx, [[L, B], [L, T], [xp1, T]], sol.I, phase);
        dots(ctx, [[xp1, T], [xp1, B], [L, B]], sol.branches[1].I, phase + 0.3);
        dots(ctx, [[xp1, T], [Rt, T], [Rt, B], [xp1, B]], sol.branches[2].I, phase + 0.6);
      }
      const P = sol.I * Vs.value;
      S.set("req", sol.Req.toFixed(2) + " Ω");
      S.set("i", sol.I.toFixed(2) + " A");
      S.set("p", P.toFixed(1) + " W");
    };
  });

  /* ============ RC circuit ============ */
  Sims.define("rc", (S) => {
    S.size(150);
    let q = 0, t = 0, mode = "rest";
    const Vb = S.slider("Battery ε", 2, 20, 0.5, 10, { unit: "V" });
    const Rs = S.slider("Resistance R", 0.5, 10, 0.25, 2, { unit: "Ω" });
    const Cs = S.slider("Capacitance C", 0.5, 5, 0.25, 1, { unit: "F" });
    S.button("⚡ Charge", () => { mode = "charge"; t = 0; plq.clear(); pli.clear(); }, true);
    S.button("⇣ Discharge", () => { mode = "discharge"; t = 0; plq.clear(); pli.clear(); });
    S.button("↺ Reset", () => { mode = "rest"; q = 0; t = 0; plq.clear(); pli.clear(); });
    S.readout("tau", "τ = RC"); S.readout("q", "q / q_max"); S.readout("i", "current");
    const plq = S.livePlot({ xMin: 0, xMax: 20, yMin: 0, yMax: 110, xLabel: "t (s)", yLabel: "q (% of max)", height: 150, series: [{ label: "q(t)", color: "#fbbf24" }], hlines: [{ y: 63.2, label: "63% at t = τ" }] });
    const pli = S.livePlot({ xMin: 0, xMax: 20, yMin: 0, yMax: 12, xLabel: "t (s)", yLabel: "|I| (A)", height: 150, series: [{ label: "I(t)", color: "#22d3ee" }] });
    S.onTick = (dt) => {
      const R = Rs.value, C = Cs.value, V = Vb.value, qmax = C * V;
      if (mode === "rest") return;
      t += dt;
      const I = mode === "charge" ? (V - q / C) / R : -(q / C) / R;
      q = Math.max(0, Math.min(qmax, q + I * dt));
      plq.push(0, t, q / qmax * 100);
      pli.push(0, t, Math.abs(I));
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const qmax = Cs.value * Vb.value;
      // capacitor fill viz
      const cx = w / 2, cy = h / 2;
      const f = q / qmax;
      ctx.fillStyle = "#f87171"; ctx.globalAlpha = 0.25 + f * 0.75;
      ctx.fillRect(cx - 60, cy - 22, 120, 9); ctx.globalAlpha = 1;
      ctx.fillStyle = "#60a5fa"; ctx.globalAlpha = 0.25 + f * 0.75;
      ctx.fillRect(cx - 60, cy + 13, 120, 9); ctx.globalAlpha = 1;
      for (let i = 0; i < Math.round(f * 10); i++) {
        D.label(ctx, "+", cx - 52 + i * 12, cy - 28, "#f87171", 11);
        D.label(ctx, "−", cx - 52 + i * 12, cy + 30, "#60a5fa", 11);
      }
      const ne = Math.max(0, Math.round(f * 6));
      for (let i = 0; i < ne; i++)
        D.arrow(ctx, cx - 50 + i * 20, cy - 11, cx - 50 + i * 20, cy + 11, "rgba(34,211,238,0.6)", 1.5);
      D.label(ctx, mode === "charge" ? "charging…" : mode === "discharge" ? "discharging…" : "idle", cx, cy + 50, "#9aa3bf", 12);
      const tau = Rs.value * Cs.value;
      S.set("tau", tau.toFixed(2) + " s");
      S.set("q", (f * 100).toFixed(1) + "%");
      const I = mode === "charge" ? (Vb.value - q / Cs.value) / Rs.value : mode === "discharge" ? (q / Cs.value) / Rs.value : 0;
      S.set("i", I.toFixed(2) + " A");
      plq.draw(); pli.draw();
    };
  });

  /* ============ charged particle in B field ============ */
  Sims.define("chargeInB", (S) => {
    S.size(340);
    let p = null, trail = [];
    const qsign = S.slider("Charge q", -2, 2, 0.5, 1, { unit: "q" });
    const ms = S.slider("Mass m", 0.5, 4, 0.25, 1, { unit: "kg" });
    const vs = S.slider("Speed v", 20, 120, 5, 60, { unit: "m/s" });
    const Bs = S.slider("Field strength B", 0.2, 2.5, 0.1, 1, { unit: "T" });
    S.button("🚀 Fire particle", fire, true);
    S.readout("r", "r = mv/|q|B"); S.readout("T", "Period T = 2πm/|q|B");
    function fire() { p = { x: 60, y: S.h / 2, vx: vs.value, vy: 0 }; trail = []; }
    fire();
    S.onTick = (dt) => {
      if (!p || Math.abs(qsign.value) < 0.01) {
        if (p) { p.x += p.vx * dt * 2; trail.push([p.x, p.y]); if (p.x > S.w) p = null; }
        return;
      }
      const steps = 30;
      for (let i = 0; i < steps; i++) {
        // B into page (+z out of screen is toward viewer; we draw × symbols = into page)
        // F = qv×B with B = -z (into page): F = q(v × B) → Fx = q*vy*B, Fy = -q*vx*B (screen y down ⇒ adjust sign)
        const B = Bs.value, qq = qsign.value;
        const ax = (qq * p.vy * B) / ms.value;
        const ay = (-qq * p.vx * B) / ms.value;
        p.vx += ax * dt / steps * 2; p.vy += ay * dt / steps * 2;
        p.x += p.vx * dt / steps * 2; p.y += p.vy * dt / steps * 2;
      }
      trail.push([p.x, p.y]);
      if (trail.length > 900) trail.shift();
      if (p.x < -40 || p.x > S.w + 40 || p.y < -40 || p.y > S.h + 40) p = null;
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      // B field into page
      for (let x = 26; x < w; x += 44) for (let y = 26; y < h; y += 44) D.fieldDot(ctx, x, y, false, 4.5);
      D.label(ctx, "B into page (×)", w - 70, 16, "#a78bfa", 11);
      ctx.strokeStyle = "rgba(34,211,238,0.6)"; ctx.lineWidth = 2;
      ctx.beginPath();
      trail.forEach((t, i) => i ? ctx.lineTo(t[0], t[1]) : ctx.moveTo(t[0], t[1]));
      ctx.stroke();
      if (p) {
        D.ball(ctx, p.x, p.y, 8, qsign.value >= 0 ? "#f87171" : "#60a5fa");
        const sp = Math.hypot(p.vx, p.vy);
        D.arrow(ctx, p.x, p.y, p.x + p.vx / sp * 30, p.y + p.vy / sp * 30, "#34d399", 2.2, "v");
        if (Math.abs(qsign.value) > 0.01) {
          const B = Bs.value, qq = qsign.value;
          const fx = qq * p.vy * B, fy = -qq * p.vx * B;
          const fm = Math.hypot(fx, fy);
          D.arrow(ctx, p.x, p.y, p.x + fx / fm * 26, p.y + fy / fm * 26, "#fbbf24", 2.2, "F");
        }
      }
      const r = ms.value * vs.value / (Math.abs(qsign.value) * Bs.value);
      S.set("r", Math.abs(qsign.value) < 0.01 ? "∞ (straight line!)" : (r / 2).toFixed(0) + " px — note: ∝ mv/qB");
      S.set("T", Math.abs(qsign.value) < 0.01 ? "—" : (TAU * ms.value / (Math.abs(qsign.value) * Bs.value)).toFixed(2) + " s (independent of v!)");
    };
  });

  /* ============ fields of wires / parallel wires / solenoid ============ */
  Sims.define("wireB", (S) => {
    S.size(330);
    const preset = S.params.preset || "wire";
    const I1 = S.slider("Current I₁", 0.5, 10, 0.25, 4, { unit: "A" });
    const I2 = preset === "twoWires" ? S.slider("Current I₂", -10, 10, 0.25, 4, { unit: "A" }) : null;
    const ns = preset === "solenoid" ? S.slider("Turns per length n", 4, 14, 1, 8) : null;
    if (preset === "wire") S.readout("B", "B = μ₀I/2πr at probe");
    if (preset === "twoWires") S.readout("F", "Force per length");
    if (preset === "solenoid") S.readout("B", "B inside = μ₀nI");
    let probeR = 80;
    if (preset === "wire") {
      S.canvas.addEventListener("pointermove", e => {
        const r = S.canvas.getBoundingClientRect();
        probeR = Math.max(24, Math.hypot(e.clientX - r.left - r.width / 2, e.clientY - r.top - S.h / 2));
      });
    }
    S.onTick = () => {};
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      if (preset === "wire") {
        const cx = w / 2, cy = h / 2;
        // concentric field circles, spacing ∝ 1/B
        for (let r = 26; r < Math.min(w, h) / 2; r += 26) {
          ctx.strokeStyle = "rgba(167,139,250," + Math.min(0.8, I1.value * 8 / r) + ")";
          ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.stroke();
          // direction arrows (counterclockwise for current out of page)
          for (let a = 0; a < 4; a++) {
            const th = a * Math.PI / 2 + 0.4 + r * 0.01;
            const px = cx + r * Math.cos(th), py = cy + r * Math.sin(th);
            D.arrow(ctx, px, py, px - Math.sin(th) * 9, py + Math.cos(th) * 9, "rgba(167,139,250,0.8)", 1.5);
          }
        }
        D.fieldDot(ctx, cx, cy, true, 11);
        D.label(ctx, "I out of page", cx, cy - 24, "#e8ecf8", 11.5);
        // probe
        ctx.strokeStyle = "#34d399"; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.arc(cx, cy, probeR, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
        D.label(ctx, "probe (move mouse)", cx, cy + probeR + 14, "#34d399", 10.5);
        S.set("B", (I1.value / probeR * 1000).toFixed(1) + " (arb.) — doubles when r halves");
      } else if (preset === "twoWires") {
        const x1 = w * 0.38, x2 = w * 0.62, cy = h / 2;
        const para = I2.value >= 0;
        [["I₁", x1, true], ["I₂", x2, para]].forEach(([lab, x, out]) => {
          for (let r = 22; r < 90; r += 22) {
            ctx.strokeStyle = "rgba(167,139,250," + (0.5 - r * 0.004) + ")";
            ctx.beginPath(); ctx.arc(x, cy, r, 0, TAU); ctx.stroke();
          }
          D.fieldDot(ctx, x, cy, out, 11);
          D.label(ctx, lab + (out ? " (out)" : " (in)"), x, cy - 110, "#e8ecf8", 12);
        });
        const F = I1.value * Math.abs(I2.value) * 4;
        const attract = para;
        const fl = Math.min(60, 8 + F);
        D.arrow(ctx, x1, cy + 60, x1 + (attract ? fl : -fl), cy + 60, "#34d399", 3, "F on 1");
        D.arrow(ctx, x2, cy + 60, x2 + (attract ? -fl : fl), cy + 60, "#34d399", 3, "F on 2");
        D.label(ctx, attract ? "parallel currents attract" : "antiparallel currents repel", w / 2, h - 22, "#9aa3bf", 12);
        S.set("F", (I1.value * Math.abs(I2.value)).toFixed(1) + " μ₀I₁I₂/2πd per meter");
      } else {
        // solenoid cross-section
        const cy = h / 2, x0 = w * 0.2, x1 = w * 0.8;
        const n = ns.value;
        for (let i = 0; i < n; i++) {
          const x = x0 + (i + 0.5) / n * (x1 - x0);
          D.fieldDot(ctx, x, cy - 58, true, 7);   // top row: current out
          D.fieldDot(ctx, x, cy + 58, false, 7);  // bottom row: in
        }
        // uniform field inside
        const B = n * I1.value;
        const rows = Math.min(5, Math.max(1, Math.round(B / 14)));
        for (let rr = 0; rr < rows; rr++) {
          const y = cy - 30 + rr * (60 / Math.max(1, rows - 1) || 0);
          D.arrow(ctx, x0 + 8, rows === 1 ? cy : y, x1 - 8, rows === 1 ? cy : y, "rgba(34,211,238,0.8)", 2);
        }
        // weak external field hint
        ctx.strokeStyle = "rgba(34,211,238,0.15)";
        ctx.beginPath(); ctx.moveTo(x1 - 4, cy - 80); ctx.bezierCurveTo(w - 8, cy - 130, w - 8, cy + 130, x1 - 4, cy + 80); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x0 + 4, cy - 80); ctx.bezierCurveTo(12, cy - 130, 12, cy + 130, x0 + 4, cy + 80); ctx.stroke();
        D.label(ctx, "B ≈ 0 outside", w / 2, cy - 96, "#6b7494", 11);
        D.label(ctx, "uniform B = μ₀nI inside", w / 2, cy + 92, "#22d3ee", 12);
        S.set("B", (n * I1.value).toFixed(1) + " μ₀ (arb.) — ∝ n·I, uniform inside");
      }
    };
  });

  /* ============ electromagnetic induction: sliding rail ============ */
  Sims.define("induction", (S) => {
    S.size(280);
    let x = 0.25, t = 0;
    const Bs = S.slider("Field B (into page)", 0.2, 2, 0.1, 1, { unit: "T" });
    const Ls = S.slider("Rail separation L", 0.4, 1.6, 0.05, 1, { unit: "m" });
    const vs = S.slider("Bar velocity v", -3, 3, 0.25, 1.5, { unit: "m/s" });
    const Rr = S.slider("Circuit resistance R", 0.5, 8, 0.25, 2, { unit: "Ω" });
    S.readout("emf", "ε = BLv"); S.readout("i", "I = ε/R"); S.readout("f", "Opposing force = BIL"); S.readout("p", "P = Fv = I²R");
    const plot = S.livePlot({ xMin: 0, xMax: 14, yMin: -8, yMax: 8, xLabel: "t (s)", height: 160, series: [
      { label: "flux Φ (T·m²)", color: "#a78bfa" }, { label: "emf ε (V)", color: "#fbbf24" }
    ]});
    S.onTick = (dt) => {
      t += dt;
      x += vs.value * dt * 0.12;
      if (x > 0.9) x = 0.9; if (x < 0.05) x = 0.05;
      const area = x * 4 * Ls.value;
      plot.push(0, t, Bs.value * area);
      plot.push(1, t, Bs.value * Ls.value * (x >= 0.9 || x <= 0.05 ? 0 : vs.value) * 3);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const x0 = 40, x1 = w - 40, yT = 40, yB = 40 + Ls.value * 130;
      // B field region
      for (let px = x0 + 16; px < x1; px += 40) for (let py = yT + 14; py < yB; py += 36) D.fieldDot(ctx, px, py, false, 4.2);
      // rails
      ctx.strokeStyle = "rgba(255,255,255,0.45)"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x0, yT); ctx.lineTo(x1, yT); ctx.moveTo(x0, yB); ctx.lineTo(x1, yB); ctx.stroke();
      // left end (resistor)
      ctx.strokeStyle = "#c9d1e8"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x0, yT);
      const mid = (yT + yB) / 2;
      ctx.lineTo(x0, mid - 22);
      for (let i = 0; i < 5; i++) ctx.lineTo(x0 + (i % 2 ? -7 : 7), mid - 22 + 8 + i * 7);
      ctx.lineTo(x0, mid + 22); ctx.lineTo(x0, yB); ctx.stroke();
      D.label(ctx, "R", x0 - 18, mid, "#9aa3bf", 13);
      // bar
      const bx = x0 + x * (x1 - x0 - 20) + 10;
      ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 6; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(bx, yT); ctx.lineTo(bx, yB); ctx.stroke();
      if (Math.abs(vs.value) > 0.05 && x < 0.9 && x > 0.05) {
        D.arrow(ctx, bx, yT - 14, bx + vs.value * 26, yT - 14, "#34d399", 2.6, "v");
        // induced current direction (Lenz): v>0 flux into page increases → induced current counterclockwise
        const ccw = vs.value > 0;
        const Iind = Bs.value * Ls.value * Math.abs(vs.value) / Rr.value;
        const amp = Math.min(1, Iind / 2);
        ctx.strokeStyle = "rgba(34,211,238," + (0.4 + amp * 0.5) + ")";
        D.arrow(ctx, bx - 10, ccw ? yB - 12 : yT + 12, bx - 10, ccw ? yT + 16 : yB - 16, "#22d3ee", 2.4, "I");
        // opposing force on bar
        D.arrow(ctx, bx, (yT + yB) / 2, bx - Math.sign(vs.value) * (12 + amp * 36), (yT + yB) / 2, "#f87171", 2.6, "F = BIL");
      }
      const moving = x < 0.9 && x > 0.05 ? vs.value : 0;
      const emf = Bs.value * Ls.value * moving;
      const I = emf / Rr.value;
      S.set("emf", Math.abs(emf).toFixed(2) + " V");
      S.set("i", Math.abs(I).toFixed(2) + " A " + (Math.abs(I) > 0.01 ? (vs.value > 0 ? "(counterclockwise)" : "(clockwise)") : ""));
      S.set("f", Math.abs(Bs.value * I * Ls.value).toFixed(2) + " N (opposes motion)");
      S.set("p", Math.abs(emf * I).toFixed(2) + " W (mechanical → electrical → heat)");
      plot.draw();
    };
  });

  /* ============ LR circuit ============ */
  Sims.define("lr", (S) => {
    S.size(120);
    let I = 0, t = 0, closed = false;
    const Vb = S.slider("Battery ε", 2, 20, 0.5, 10, { unit: "V" });
    const Rs = S.slider("Resistance R", 0.5, 10, 0.25, 2, { unit: "Ω" });
    const Ls = S.slider("Inductance L", 0.5, 8, 0.25, 3, { unit: "H" });
    S.button("⚡ Close switch", () => { closed = true; t = 0; plot.clear(); }, true);
    S.button("⏏ Open (decay loop)", () => { closed = false; t = 0; plot.clear(); });
    S.readout("tau", "τ = L/R"); S.readout("i", "I"); S.readout("imax", "I_max = ε/R"); S.readout("u", "U_L = ½LI²");
    const plot = S.livePlot({ xMin: 0, xMax: 16, yMin: 0, yMax: 12, xLabel: "t (s)", yLabel: "I (A)", height: 180, series: [{ label: "I(t)", color: "#22d3ee" }], hlines: [] });
    S.onTick = (dt) => {
      t += dt;
      const dI = closed ? (Vb.value - I * Rs.value) / Ls.value : (-I * Rs.value) / Ls.value;
      I = Math.max(0, I + dI * dt);
      plot.opts.yMax = Math.max(4, Vb.value / Rs.value * 1.2);
      plot.opts.hlines = closed ? [{ y: Vb.value / Rs.value, label: "I_max = ε/R" }] : [];
      plot.push(0, t, I);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      // simple visual: coil with glow ∝ stored energy
      const cx = w / 2, cy = h / 2;
      const U = 0.5 * Ls.value * I * I;
      ctx.save();
      ctx.shadowColor = "#a78bfa"; ctx.shadowBlur = Math.min(40, U * 2);
      ctx.strokeStyle = "#c9d1e8"; ctx.lineWidth = 2.4;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) ctx.arc(cx - 44 + i * 22, cy, 12, Math.PI, 0, false);
      ctx.stroke();
      ctx.restore();
      D.label(ctx, closed ? "switch closed — current ramping up (inductor fights dI/dt)" : "switch open — inductor keeps current flowing while it decays", cx, cy + 34, "#9aa3bf", 11.5);
      S.set("tau", (Ls.value / Rs.value).toFixed(2) + " s");
      S.set("i", I.toFixed(2) + " A");
      S.set("imax", (Vb.value / Rs.value).toFixed(2) + " A");
      S.set("u", (0.5 * Ls.value * I * I).toFixed(1) + " J");
      plot.draw();
    };
  });

  /* ============ LC circuit ============ */
  Sims.define("lc", (S) => {
    S.size(190);
    let q, dq, t;
    const Ls = S.slider("Inductance L", 0.5, 6, 0.25, 2, { unit: "H", onChange: reset });
    const Cs = S.slider("Capacitance C", 0.5, 6, 0.25, 2, { unit: "F", onChange: reset });
    S.button("↺ Restart (capacitor charged)", reset, true);
    S.readout("w", "ω = 1/√(LC)"); S.readout("T", "Period"); S.readout("e", "Energy");
    const plot = S.livePlot({ xMin: 0, xMax: 25, yMin: -1.2, yMax: 1.2, xLabel: "t (s)", height: 170, series: [
      { label: "q(t) on capacitor", color: "#fbbf24" }, { label: "I(t) in inductor", color: "#22d3ee" }
    ]});
    function reset() { q = 1; dq = 0; t = 0; plot.clear(); }
    reset();
    S.onTick = (dt) => {
      const steps = 14;
      for (let i = 0; i < steps; i++) {
        const dd = -q / (Ls.value * Cs.value);
        dq += dd * dt / steps; q += dq * dt / steps;
      }
      t += dt;
      const w0 = 1 / Math.sqrt(Ls.value * Cs.value);
      plot.push(0, t, q);
      plot.push(1, t, dq / w0);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const w0 = 1 / Math.sqrt(Ls.value * Cs.value);
      const UE = 0.5 * q * q / Cs.value;
      const UB = 0.5 * Ls.value * dq * dq;
      const tot = 0.5 / Cs.value;
      // capacitor
      const cxC = w * 0.26, cy = h * 0.42;
      const f = Math.abs(q);
      ctx.fillStyle = q >= 0 ? "#f87171" : "#60a5fa"; ctx.globalAlpha = 0.25 + f * 0.7;
      ctx.fillRect(cxC - 40, cy - 16, 80, 7); ctx.globalAlpha = 1;
      ctx.fillStyle = q >= 0 ? "#60a5fa" : "#f87171"; ctx.globalAlpha = 0.25 + f * 0.7;
      ctx.fillRect(cxC - 40, cy + 9, 80, 7); ctx.globalAlpha = 1;
      D.label(ctx, "capacitor (E field)", cxC, cy + 36, "#9aa3bf", 11);
      // inductor
      const cxL = w * 0.62;
      ctx.save();
      ctx.shadowColor = "#a78bfa"; ctx.shadowBlur = Math.min(34, UB / tot * 34);
      ctx.strokeStyle = "#c9d1e8"; ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) ctx.arc(cxL - 30 + i * 20, cy, 11, Math.PI, 0, false);
      ctx.stroke(); ctx.restore();
      D.label(ctx, "inductor (B field)", cxL, cy + 36, "#9aa3bf", 11);
      // energy bars
      D.bars(ctx, w * 0.8, h - 36, w * 0.17, [
        { label: "U_E", value: UE, color: "#fbbf24" },
        { label: "U_B", value: UB, color: "#a78bfa" }
      ], tot, "energy sloshes");
      S.set("w", w0.toFixed(2) + " rad/s");
      S.set("T", (TAU / w0).toFixed(2) + " s");
      S.set("e", "U_E + U_B = " + ((UE + UB)).toFixed(3) + " (constant)");
      plot.draw();
    };
  });
})();
