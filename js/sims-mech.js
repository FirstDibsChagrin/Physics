/* sims-mech.js — interactive simulations for AP Physics C: Mechanics */
"use strict";
(function () {
  const D = Sims.D;
  const g = 9.8;
  const TAU = Math.PI * 2;

  /* ============ 1D kinematics with live x/v/a graphs ============ */
  Sims.define("kinematics1d", (S) => {
    S.size(120);
    let x = 0, v = 0, t = 0, playing = false;
    const v0s = S.slider("Initial velocity v₀", -8, 8, 0.5, 2, { unit: "m/s", onChange: reset });
    const as = S.slider("Acceleration a", -4, 4, 0.25, 1, { unit: "m/s²", onChange: reset });
    S.button("▶ Play", () => { playing = true; }, true);
    S.button("⏸ Pause", () => { playing = false; });
    S.button("↺ Reset", reset);
    S.readout("x", "x"); S.readout("v", "v"); S.readout("a", "a");
    const px = S.livePlot({ xMin: 0, xMax: 12, yMin: -40, yMax: 40, yLabel: "x (m)", xLabel: "t (s)", height: 130, series: [{ label: "x(t)", color: "#fbbf24" }] });
    const pv = S.livePlot({ xMin: 0, xMax: 12, yMin: -12, yMax: 12, yLabel: "v (m/s)", xLabel: "t (s)", height: 130, series: [{ label: "v(t)", color: "#22d3ee" }] });
    const pa = S.livePlot({ xMin: 0, xMax: 12, yMin: -5, yMax: 5, yLabel: "a (m/s²)", xLabel: "t (s)", height: 130, series: [{ label: "a(t)", color: "#f87171" }] });
    function reset() { x = 0; v = v0s.value; t = 0; playing = false; [px, pv, pa].forEach(p => p.clear()); }
    reset();
    S.onTick = (dt) => {
      if (!playing || t > 12) return;
      const a = as.value;
      v += a * dt; x += v * dt; t += dt;
      px.push(0, t, x); pv.push(0, t, v); pa.push(0, t, a);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const y = h - 30;
      D.ground(ctx, y, 20, w - 20);
      const mid = w / 2, scale = (w - 80) / 80; // ±40 m view
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      for (let m = -40; m <= 40; m += 10) {
        const sx = mid + m * scale;
        ctx.beginPath(); ctx.moveTo(sx, y); ctx.lineTo(sx, y - 6); ctx.stroke();
        D.label(ctx, m + "", sx, y + 12, "#6b7494", 10);
      }
      const cx = mid + Math.max(-42, Math.min(42, x)) * scale;
      D.block(ctx, cx, y - 16, 34, 24, "#fbbf24");
      if (Math.abs(v) > 0.05) D.arrow(ctx, cx, y - 44, cx + v * 7, y - 44, "#22d3ee", 2.5, "v");
      S.set("x", x.toFixed(1) + " m"); S.set("v", v.toFixed(1) + " m/s"); S.set("a", as.value.toFixed(2) + " m/s²");
      px.draw(); pv.draw(); pa.draw();
    };
  });

  /* ============ projectile motion ============ */
  Sims.define("projectile", (S) => {
    S.size(360);
    let t = 0, flying = false, trail = [], landed = null;
    const v0 = S.slider("Launch speed v₀", 5, 50, 1, 28, { unit: "m/s", onChange: launch });
    const ang = S.slider("Angle θ", 5, 85, 1, 50, { unit: "°", onChange: launch });
    const h0 = S.slider("Launch height", 0, 40, 1, 0, { unit: "m", onChange: launch });
    S.button("🚀 Launch", launch, true);
    S.readout("r", "Range"); S.readout("h", "Max height"); S.readout("t", "Flight time"); S.readout("v", "Speed now");
    function launch() { t = 0; flying = true; trail = []; landed = null; }
    launch();
    const XMAX = 280, YMAX = 110;
    S.onTick = (dt) => {
      if (!flying) return;
      t += dt * 1.6;
      const th = ang.value * Math.PI / 180;
      const y = h0.value + v0.value * Math.sin(th) * t - 0.5 * g * t * t;
      if (y <= 0) {
        flying = false;
        landed = { t: tLand(), x: v0.value * Math.cos(th) * tLand() };
      }
    };
    function tLand() {
      const th = ang.value * Math.PI / 180, vy = v0.value * Math.sin(th);
      return (vy + Math.sqrt(vy * vy + 2 * g * h0.value)) / g;
    }
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const pad = 46, gy = h - 36;
      const sx = (w - pad - 16) / XMAX, sy = (gy - 18) / YMAX;
      const PX = x => pad + x * sx, PY = y => gy - y * sy;
      D.ground(ctx, gy, pad - 20, w - 10);
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.beginPath(); ctx.moveTo(pad, gy); ctx.lineTo(pad, 12); ctx.stroke();
      for (let m = 50; m <= XMAX; m += 50) D.label(ctx, m + " m", PX(m), gy + 13, "#6b7494", 10);
      const th = ang.value * Math.PI / 180;
      const vx = v0.value * Math.cos(th);
      const tl = tLand();
      // full path (faint)
      ctx.strokeStyle = "rgba(255,255,255,0.13)"; ctx.setLineDash([4, 5]); ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const tt = (i / 60) * tl;
        const X = PX(vx * tt), Y = PY(h0.value + v0.value * Math.sin(th) * tt - 0.5 * g * tt * tt);
        i ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y);
      }
      ctx.stroke(); ctx.setLineDash([]);
      const tc = Math.min(t, tl);
      const x = vx * tc, y = Math.max(0, h0.value + v0.value * Math.sin(th) * tc - 0.5 * g * tc * tc);
      trail.push([x, y]);
      ctx.strokeStyle = "rgba(251,191,36,0.6)"; ctx.lineWidth = 2; ctx.beginPath();
      trail.forEach((p, i) => i ? ctx.lineTo(PX(p[0]), PY(p[1])) : ctx.moveTo(PX(p[0]), PY(p[1])));
      ctx.stroke();
      // launch pedestal
      if (h0.value > 0) { ctx.fillStyle = "rgba(255,255,255,0.10)"; ctx.fillRect(pad - 10, PY(h0.value), 20, gy - PY(h0.value)); }
      const vyNow = v0.value * Math.sin(th) - g * tc;
      D.ball(ctx, PX(x), PY(y), 9, "#fb7185");
      const VS = 2.2;
      D.arrow(ctx, PX(x), PY(y), PX(x) + vx * VS, PY(y), "#34d399", 2, "vₓ");
      D.arrow(ctx, PX(x), PY(y), PX(x), PY(y) - vyNow * VS, "#60a5fa", 2, "v_y");
      D.arrow(ctx, PX(x), PY(y), PX(x) + vx * VS, PY(y) - vyNow * VS, "#22d3ee", 2.6, "v");
      const hmax = h0.value + Math.pow(v0.value * Math.sin(th), 2) / (2 * g);
      S.set("r", (vx * tl).toFixed(1) + " m");
      S.set("h", hmax.toFixed(1) + " m");
      S.set("t", tl.toFixed(2) + " s");
      S.set("v", Math.hypot(vx, vyNow).toFixed(1) + " m/s");
      if (!flying && landed) D.label(ctx, "💥", PX(landed.x), gy - 8, "#fff", 16);
    };
  });

  /* ============ vector addition ============ */
  Sims.define("vectorAddition", (S) => {
    S.size(330);
    const am = S.slider("|A|", 0, 10, 0.5, 6);
    const aa = S.slider("A angle", 0, 360, 5, 20, { unit: "°" });
    const bm = S.slider("|B|", 0, 10, 0.5, 4.5);
    const ba = S.slider("B angle", 0, 360, 5, 110, { unit: "°" });
    S.readout("rx", "Rₓ"); S.readout("ry", "R_y"); S.readout("rm", "|R|"); S.readout("ra", "θ_R");
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const ox = w * 0.34, oy = h * 0.62, sc = 17;
      // axes
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      ctx.beginPath(); ctx.moveTo(20, oy); ctx.lineTo(w - 20, oy); ctx.moveTo(ox, 18); ctx.lineTo(ox, h - 18); ctx.stroke();
      const ax = am.value * Math.cos(aa.value * Math.PI / 180), ay = am.value * Math.sin(aa.value * Math.PI / 180);
      const bx = bm.value * Math.cos(ba.value * Math.PI / 180), by = bm.value * Math.sin(ba.value * Math.PI / 180);
      const rx = ax + bx, ry = ay + by;
      const P = (x, y) => [ox + x * sc, oy - y * sc];
      // parallelogram ghost
      ctx.save(); ctx.setLineDash([4, 5]); ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.beginPath();
      ctx.moveTo(...P(bx, by)); ctx.lineTo(...P(rx, ry));
      ctx.moveTo(...P(ax, ay)); ctx.lineTo(...P(rx, ry));
      ctx.stroke(); ctx.restore();
      D.arrow(ctx, ...P(0, 0), ...P(ax, ay), "#fbbf24", 3, "A");
      D.arrow(ctx, ...P(ax, ay), ...P(rx, ry), "#22d3ee", 3, "B");
      D.arrow(ctx, ...P(0, 0), ...P(bx, by), "rgba(34,211,238,0.30)", 2);
      D.arrow(ctx, ...P(0, 0), ...P(rx, ry), "#34d399", 3.6, "R = A + B");
      // component projections of R
      ctx.save(); ctx.setLineDash([3, 4]); ctx.strokeStyle = "rgba(52,211,153,0.5)";
      ctx.beginPath(); ctx.moveTo(...P(rx, ry)); ctx.lineTo(...P(rx, 0)); ctx.moveTo(...P(rx, ry)); ctx.lineTo(...P(0, ry)); ctx.stroke();
      ctx.restore();
      S.set("rx", rx.toFixed(2)); S.set("ry", ry.toFixed(2));
      S.set("rm", Math.hypot(rx, ry).toFixed(2));
      S.set("ra", (Math.atan2(ry, rx) * 180 / Math.PI).toFixed(1) + "°");
    };
  });

  /* ============ relative motion: river crossing ============ */
  Sims.define("riverboat", (S) => {
    S.size(330);
    let bx = 0, by = 0, t = 0, going = true;
    const vb = S.slider("Boat speed (rel. water)", 1, 6, 0.1, 3, { unit: "m/s", onChange: reset });
    const vr = S.slider("River current", 0, 5, 0.1, 2, { unit: "m/s", onChange: reset });
    const hd = S.slider("Heading (90° = straight across)", 20, 160, 1, 90, { unit: "°", onChange: reset });
    S.button("↺ Restart", reset);
    S.readout("t", "Crossing time"); S.readout("d", "Downstream drift"); S.readout("vg", "Ground speed");
    const W = 60; // river width m
    function reset() { bx = 0; by = 0; t = 0; going = true; }
    S.onTick = (dt) => {
      if (!going) return;
      const th = hd.value * Math.PI / 180;
      const vx = vb.value * Math.cos(th) + vr.value, vy = vb.value * Math.sin(th);
      bx += vx * dt * 4; by += vy * dt * 4; t += dt * 4;
      if (by >= W) going = false;
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const top = 36, bot = h - 36, sc = (bot - top) / W;
      // banks
      ctx.fillStyle = "rgba(52,211,153,0.10)";
      ctx.fillRect(0, 0, w, top); ctx.fillRect(0, bot, w, h - bot);
      ctx.fillStyle = "rgba(34,211,238,0.06)"; ctx.fillRect(0, top, w, bot - top);
      // flow arrows
      for (let y = top + 22; y < bot; y += 34)
        for (let x = 30; x < w - 30; x += 90)
          D.arrow(ctx, x + ((S.time * 30 * vr.value / 2) % 90), y, x + 22 + ((S.time * 30 * vr.value / 2) % 90), y, "rgba(34,211,238,0.25)", 1.6);
      const ox = w * 0.22;
      const X = ox + bx * sc * 0.9, Y = bot - by * sc;
      // path
      ctx.strokeStyle = "rgba(251,191,36,0.5)"; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(ox, bot); ctx.lineTo(X, Y); ctx.stroke(); ctx.setLineDash([]);
      const th = hd.value * Math.PI / 180;
      const vxw = vb.value * Math.cos(th), vyw = vb.value * Math.sin(th);
      const VS = 13;
      D.arrow(ctx, X, Y, X + vxw * VS, Y - vyw * VS, "#fbbf24", 2.4, "v_bw");
      D.arrow(ctx, X + vxw * VS, Y - vyw * VS, X + (vxw + vr.value) * VS, Y - vyw * VS, "#22d3ee", 2.4, "v_w");
      D.arrow(ctx, X, Y, X + (vxw + vr.value) * VS, Y - vyw * VS, "#34d399", 3, "v_bg");
      ctx.save(); ctx.translate(X, Y); ctx.rotate(Math.atan2(-vyw, vxw) + Math.PI / 2);
      ctx.fillStyle = "#fb7185";
      ctx.beginPath(); ctx.moveTo(0, -13); ctx.lineTo(8, 9); ctx.lineTo(-8, 9); ctx.closePath(); ctx.fill();
      ctx.restore();
      const tc = vyw > 0.05 ? W / vyw : NaN;
      S.set("t", isFinite(tc) ? tc.toFixed(1) + " s" : "never");
      S.set("d", isFinite(tc) ? ((vxw + vr.value) * tc).toFixed(1) + " m" : "—");
      S.set("vg", Math.hypot(vxw + vr.value, vyw).toFixed(2) + " m/s");
    };
  });

  /* ============ block on incline with FBD ============ */
  Sims.define("incline", (S) => {
    S.size(340);
    let s = 0, v = 0;
    const ang = S.slider("Incline angle θ", 0, 45, 1, 20, { unit: "°", onChange: reset });
    const mus = S.slider("μ static", 0, 1, 0.02, 0.5, { onChange: reset });
    const muk = S.slider("μ kinetic", 0, 1, 0.02, 0.3, { onChange: reset });
    const m = S.slider("Mass", 1, 10, 0.5, 4, { unit: "kg" });
    S.button("↺ Reset", reset);
    S.readout("st", "Status"); S.readout("N", "Normal force"); S.readout("f", "Friction"); S.readout("a", "Acceleration");
    function reset() { s = 0; v = 0; }
    S.onTick = (dt) => {
      const th = ang.value * Math.PI / 180;
      const slides = Math.tan(th) > mus.value || v > 0.001;
      const a = slides ? Math.max(0, g * (Math.sin(th) - muk.value * Math.cos(th))) : 0;
      if (slides) { v += a * dt; s += v * dt * 28; if (s > 240) reset(); }
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const th = ang.value * Math.PI / 180;
      const baseY = h - 42, ox = w - 60;
      const L = Math.min(w - 110, 430);
      D.ground(ctx, baseY, 26, w - 26);
      // wedge
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.beginPath();
      ctx.moveTo(ox, baseY); ctx.lineTo(ox - L, baseY); ctx.lineTo(ox, baseY - L * Math.tan(th)); ctx.closePath();
      ctx.fill(); ctx.stroke();
      // block position along slope (from top)
      const sx = ox - (L - 70) + (s / 240) * (L - 120);
      const sy = baseY - (ox - sx) * Math.tan(th);
      const bx = sx, by = sy - 15 / Math.cos(th);
      D.block(ctx, bx, by, 40, 28, "#fbbf24", -th);
      // FBD
      const mg = m.value * g, N = mg * Math.cos(th);
      const slides = Math.tan(th) > mus.value || v > 0.001;
      const f = slides ? muk.value * N : mg * Math.sin(th);
      const FS = 2.6;
      D.arrow(ctx, bx, by, bx, by + mg * FS, "#f87171", 2.6, "mg");
      D.arrow(ctx, bx, by, bx - N * FS * Math.sin(th), by - N * FS * Math.cos(th), "#34d399", 2.6, "N");
      if (f > 0.3) D.arrow(ctx, bx, by, bx + f * FS * Math.cos(th), by - f * FS * Math.sin(th), "#22d3ee", 2.6, "f");
      const a = slides ? Math.max(0, g * (Math.sin(th) - muk.value * Math.cos(th))) : 0;
      S.set("st", slides ? "sliding (tan θ > μs)" : "static (tan θ ≤ μs)");
      S.set("N", N.toFixed(1) + " N");
      S.set("f", f.toFixed(1) + " N " + (slides ? "(kinetic)" : "(static)"));
      S.set("a", a.toFixed(2) + " m/s²");
    };
  });

  /* ============ static vs kinetic friction ============ */
  Sims.define("frictionBlock", (S) => {
    S.size(330);
    let x = 0, v = 0;
    const F = S.slider("Applied force F", 0, 80, 0.5, 20, { unit: "N" });
    const mus = S.slider("μ static", 0.05, 1, 0.02, 0.6);
    const muk = S.slider("μ kinetic", 0.05, 1, 0.02, 0.4);
    const m = S.slider("Mass", 1, 10, 0.5, 5, { unit: "kg" });
    S.button("↺ Reset", () => { x = 0; v = 0; });
    S.readout("fs", "fs,max = μsN"); S.readout("f", "Friction now"); S.readout("a", "a");
    S.onTick = (dt) => {
      const N = m.value * g, fsMax = mus.value * N;
      const moving = v > 0.001 || F.value > fsMax;
      if (moving) {
        const a = (F.value - muk.value * N) / m.value;
        v = Math.max(0, v + a * dt);
        x += v * dt * 30;
        if (x > 1000) x = 0;
      } else v = 0;
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const gy = h * 0.45;
      D.ground(ctx, gy, 16, w * 0.52);
      const bx = 70 + (x % (w * 0.52 - 130));
      D.block(ctx, bx, gy - 16, 44, 30, "#fb7185");
      const N = m.value * g, fsMax = mus.value * N;
      const moving = v > 0.001 || F.value > fsMax;
      const f = moving ? muk.value * N : Math.min(F.value, fsMax);
      D.arrow(ctx, bx + 24, gy - 16, bx + 24 + F.value * 1.7, gy - 16, "#fbbf24", 3, "F");
      if (f > 0.5) D.arrow(ctx, bx - 24, gy - 16, bx - 24 - f * 1.7, gy - 16, "#22d3ee", 3, "f");
      // inset: friction vs applied force graph
      const gx0 = w * 0.58, gw = w * 0.38, gy0 = h - 38, gh = h - 70;
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.beginPath(); ctx.moveTo(gx0, gy0); ctx.lineTo(gx0 + gw, gy0); ctx.moveTo(gx0, gy0); ctx.lineTo(gx0, gy0 - gh); ctx.stroke();
      D.label(ctx, "applied F →", gx0 + gw / 2, gy0 + 13, "#6b7494", 10);
      D.label(ctx, "friction f", gx0 + 28, gy0 - gh + 2, "#6b7494", 10);
      const FX = fv => gx0 + (fv / 80) * gw, FY = fv => gy0 - (fv / 80) * gh;
      ctx.strokeStyle = "#34d399"; ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(FX(0), FY(0)); ctx.lineTo(FX(fsMax), FY(fsMax));
      ctx.lineTo(FX(fsMax), FY(muk.value * N)); ctx.lineTo(FX(80), FY(muk.value * N));
      ctx.stroke();
      ctx.setLineDash([3, 4]); ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.beginPath(); ctx.moveTo(FX(fsMax), gy0); ctx.lineTo(FX(fsMax), FY(fsMax)); ctx.stroke(); ctx.setLineDash([]);
      D.label(ctx, "breaks free", FX(fsMax), FY(fsMax) - 12, "#9aa3bf", 10);
      D.ball(ctx, FX(F.value), FY(f), 5, "#fbbf24");
      S.set("fs", fsMax.toFixed(1) + " N");
      S.set("f", f.toFixed(1) + " N " + (moving ? "(kinetic)" : "(static)"));
      S.set("a", (moving ? (F.value - muk.value * N) / m.value : 0).toFixed(2) + " m/s²");
    };
  });

  /* ============ Hooke's law ============ */
  Sims.define("hookesLaw", (S) => {
    S.size(310);
    const xs = S.slider("Displacement x", -0.30, 0.30, 0.01, 0.15, { unit: "m" });
    const ks = S.slider("Spring constant k", 20, 300, 5, 120, { unit: "N/m" });
    S.readout("F", "Spring force"); S.readout("U", "Stored energy ½kx²");
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const x = xs.value, k = ks.value;
      const wallX = 36, eqX = w * 0.30, sc = 240;
      const blockX = eqX + x * sc;
      // wall
      ctx.fillStyle = "rgba(255,255,255,0.10)"; ctx.fillRect(wallX - 14, 30, 14, h * 0.42);
      D.ground(ctx, h * 0.42 + 30, wallX - 14, w * 0.55);
      ctx.save(); ctx.setLineDash([4, 5]); ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.beginPath(); ctx.moveTo(eqX, 26); ctx.lineTo(eqX, h * 0.42 + 30); ctx.stroke(); ctx.restore();
      D.label(ctx, "x = 0", eqX, 18, "#6b7494", 11);
      D.spring(ctx, wallX, h * 0.24 + 26, blockX - 20, h * 0.24 + 26, 9, 9, "#9aa3bf");
      D.block(ctx, blockX, h * 0.24 + 26, 40, 36, "#22d3ee");
      const F = -k * x;
      if (Math.abs(F) > 1) D.arrow(ctx, blockX, h * 0.24 + 26, blockX + F * 1.4, h * 0.24 + 26, "#f87171", 3, "F = −kx");
      // F vs x graph
      const gx0 = w * 0.62, gw = w * 0.34, gyc = h * 0.30 + 20, gh = h * 0.24;
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.beginPath(); ctx.moveTo(gx0, gyc); ctx.lineTo(gx0 + gw, gyc); ctx.moveTo(gx0 + gw / 2, gyc - gh); ctx.lineTo(gx0 + gw / 2, gyc + gh); ctx.stroke();
      D.label(ctx, "x", gx0 + gw - 6, gyc + 12, "#6b7494", 10);
      D.label(ctx, "F", gx0 + gw / 2 + 12, gyc - gh + 4, "#6b7494", 10);
      const GX = xv => gx0 + gw / 2 + (xv / 0.30) * (gw / 2);
      const GY = Fv => gyc - (Fv / (300 * 0.30)) * gh;
      // shaded triangle = energy
      ctx.fillStyle = "rgba(167,139,250,0.25)";
      ctx.beginPath(); ctx.moveTo(GX(0), GY(0)); ctx.lineTo(GX(x), GY(0)); ctx.lineTo(GX(x), GY(-k * x)); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(GX(-0.3), GY(k * 0.3)); ctx.lineTo(GX(0.3), GY(-k * 0.3)); ctx.stroke();
      D.ball(ctx, GX(x), GY(-k * x), 5, "#34d399");
      D.label(ctx, "slope = −k", gx0 + gw / 2 + 34, gyc + gh - 4, "#9aa3bf", 10);
      S.set("F", F.toFixed(1) + " N");
      S.set("U", (0.5 * k * x * x).toFixed(2) + " J");
    };
  });

  /* ============ resistive forces / terminal velocity ============ */
  Sims.define("drag", (S) => {
    S.size(140);
    let v = 0, y = 0, t = 0, falling = false;
    let model = "linear";
    const m = S.slider("Mass", 0.2, 5, 0.1, 1, { unit: "kg", onChange: reset });
    const b = S.slider("Drag coefficient", 0.05, 2.5, 0.05, 0.6, { onChange: reset });
    S.select([["linear", "F_drag = −bv (linear)"], ["quad", "F_drag = −cv² (quadratic)"]], vv => { model = vv; reset(); });
    S.button("⬇ Drop", () => { reset(); falling = true; }, true);
    S.button("↺ Reset", reset);
    S.readout("vt", "Terminal velocity"); S.readout("v", "v"); S.readout("pct", "% of v_t");
    const plot = S.livePlot({ xMin: 0, xMax: 12, yMin: 0, yMax: 30, xLabel: "t (s)", yLabel: "v (m/s)", height: 190, series: [{ label: "v(t)", color: "#22d3ee" }], hlines: [] });
    function vTerm() { return model === "linear" ? m.value * g / b.value : Math.sqrt(m.value * g / b.value); }
    function reset() {
      v = 0; y = 0; t = 0; falling = false; plot.clear();
      const vt = vTerm();
      plot.opts.yMax = Math.min(60, Math.max(8, vt * 1.3));
      plot.opts.hlines = [{ y: Math.min(plot.opts.yMax * 0.96, vt), label: "v_terminal = " + vt.toFixed(1) + " m/s" }];
    }
    reset();
    S.onTick = (dt) => {
      if (!falling) return;
      const a = g - (model === "linear" ? b.value * v : b.value * v * v) / m.value;
      v += a * dt; t += dt;
      y += v * dt;
      plot.push(0, t, v);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const bx = w / 2, by = 26 + (y * 2.2) % (h - 60);
      // streaks suggest air
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      for (let i = 0; i < 9; i++) {
        const sx = (w / 10) * (i + 0.7), sy = (i * 53 + (falling ? -y * 4 : 0)) % h;
        ctx.beginPath(); ctx.moveTo(sx, (sy + h) % h); ctx.lineTo(sx, (sy + h) % h + 11); ctx.stroke();
      }
      D.ball(ctx, bx, by, 12, "#fb7185");
      if (v > 0.2) {
        D.arrow(ctx, bx, by + 16, bx, by + 16 + Math.min(46, v * 2), "#f87171", 2.4, "mg");
        const fd = (model === "linear" ? b.value * v : b.value * v * v);
        D.arrow(ctx, bx, by - 16, bx, by - 16 - Math.min(46, fd / m.value * 2), "#22d3ee", 2.4, "F_drag");
      }
      const vt = vTerm();
      S.set("vt", vt.toFixed(1) + " m/s");
      S.set("v", v.toFixed(1) + " m/s");
      S.set("pct", (100 * v / vt).toFixed(0) + "%");
      plot.draw();
    };
  });

  /* ============ uniform circular motion ============ */
  Sims.define("circular", (S) => {
    S.size(330);
    let th = 0;
    const vs = S.slider("Speed v", 1, 12, 0.5, 5, { unit: "m/s" });
    const rs = S.slider("Radius r", 1, 6, 0.25, 3, { unit: "m" });
    S.readout("a", "a_c = v²/r"); S.readout("w", "ω = v/r"); S.readout("T", "Period T");
    S.onTick = (dt) => { th += (vs.value / rs.value) * dt; };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, sc = (Math.min(w, h) / 2 - 46) / 6;
      const R = rs.value * sc;
      ctx.strokeStyle = "rgba(255,255,255,0.16)"; ctx.setLineDash([5, 6]);
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
      D.ball(ctx, cx, cy, 5, "#9aa3bf");
      const x = cx + R * Math.cos(th), y = cy + R * Math.sin(th);
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
      D.ball(ctx, x, y, 10, "#fbbf24");
      const VS = 9, AS = 5;
      const v = vs.value, a = v * v / rs.value;
      D.arrow(ctx, x, y, x - v * VS * Math.sin(th), y + v * VS * Math.cos(th), "#22d3ee", 2.8, "v");
      D.arrow(ctx, x, y, x - Math.min(a, 16) * AS * Math.cos(th), y - Math.min(a, 16) * AS * Math.sin(th), "#f87171", 2.8, "a_c");
      S.set("a", a.toFixed(1) + " m/s²");
      S.set("w", (v / rs.value).toFixed(2) + " rad/s");
      S.set("T", (TAU * rs.value / v).toFixed(2) + " s");
    };
  });

  /* ============ center of mass ============ */
  Sims.define("centerOfMass", (S) => {
    S.size(240);
    const m1 = S.slider("m₁", 0.5, 10, 0.5, 2, { unit: "kg" });
    const x1 = S.slider("x₁", 0, 10, 0.25, 2, { unit: "m" });
    const m2 = S.slider("m₂", 0.5, 10, 0.5, 6, { unit: "kg" });
    const x2 = S.slider("x₂", 0, 10, 0.25, 8, { unit: "m" });
    S.readout("xcm", "x_cm = Σmx / Σm");
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const y = h * 0.52, pad = 50, sc = (w - 2 * pad) / 10;
      const X = xv => pad + xv * sc;
      ctx.strokeStyle = "rgba(255,255,255,0.3)"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(X(0), y); ctx.lineTo(X(10), y); ctx.stroke();
      for (let i = 0; i <= 10; i++) {
        ctx.strokeStyle = "rgba(255,255,255,0.18)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(X(i), y - 4); ctx.lineTo(X(i), y + 4); ctx.stroke();
        D.label(ctx, i + "", X(i), y + 16, "#6b7494", 10);
      }
      const r1 = 7 + m1.value * 1.6, r2 = 7 + m2.value * 1.6;
      D.ball(ctx, X(x1.value), y - r1, r1, "#fbbf24");
      D.label(ctx, m1.value + " kg", X(x1.value), y - r1 * 2 - 12, "#fbbf24", 11);
      D.ball(ctx, X(x2.value), y - r2, r2, "#22d3ee");
      D.label(ctx, m2.value + " kg", X(x2.value), y - r2 * 2 - 12, "#22d3ee", 11);
      const xcm = (m1.value * x1.value + m2.value * x2.value) / (m1.value + m2.value);
      ctx.fillStyle = "#34d399";
      ctx.beginPath();
      ctx.moveTo(X(xcm), y + 8); ctx.lineTo(X(xcm) - 9, y + 26); ctx.lineTo(X(xcm) + 9, y + 26); ctx.closePath(); ctx.fill();
      D.label(ctx, "CM at x = " + xcm.toFixed(2) + " m", X(xcm), y + 40, "#34d399", 12);
      S.set("xcm", xcm.toFixed(3) + " m");
    };
  });

  /* ============ energy conservation track ============ */
  Sims.define("energyTrack", (S) => {
    S.size(340);
    const m = 1;
    let xpos, dir = 1, vmag = 0, thermal = 0, released = false, E0 = 0;
    const x0s = S.slider("Release point (x)", 2, 26, 0.5, 5, { unit: "m", onChange: reset });
    const mu = S.slider("Friction", 0, 0.12, 0.005, 0, { onChange: reset });
    S.button("▶ Release", () => { released = true; }, true);
    S.button("↺ Reset", reset);
    S.readout("v", "Speed"); S.readout("hgt", "Height");
    const L = 90;
    const hf = x => 5.4 + 4.4 * Math.cos(TAU * x / 60);
    const hslope = x => -4.4 * (TAU / 60) * Math.sin(TAU * x / 60);
    function reset() {
      xpos = x0s.value; dir = 1; vmag = 0; thermal = 0; released = false;
      E0 = m * g * hf(xpos);
    }
    reset();
    S.onTick = (dt) => {
      if (!released) return;
      for (let i = 0; i < 4; i++) {
        const sl = hslope(xpos);
        const sec = Math.sqrt(1 + sl * sl);
        // energy bookkeeping
        const KE = Math.max(0, E0 - m * g * hf(xpos) - thermal);
        vmag = Math.sqrt(2 * KE / m);
        if (vmag < 0.05 && released) {
          // turn around (or stuck at bottom of well with friction)
          dir = -dir;
        }
        const dx = dir * vmag / sec * dt / 4 * 2.2;
        thermal += mu.value * m * g * Math.abs(dx) * sec;
        xpos += dx;
        if (xpos < 1) { xpos = 1; dir = 1; }
        if (xpos > L - 1) { xpos = L - 1; dir = -1; }
      }
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const pad = 30, gy = h - 40;
      const sx = (w * 0.66 - pad) / L, sy = (gy - 36) / 11;
      const PX = x => pad + x * sx, PY = yv => gy - yv * sy;
      // track
      ctx.strokeStyle = "#9aa3bf"; ctx.lineWidth = 2.6; ctx.beginPath();
      for (let i = 0; i <= 140; i++) {
        const x = (i / 140) * L;
        i ? ctx.lineTo(PX(x), PY(hf(x))) : ctx.moveTo(PX(x), PY(hf(x)));
      }
      ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.beginPath(); ctx.moveTo(pad - 8, gy); ctx.lineTo(w * 0.66 + 6, gy); ctx.stroke();
      const yb = hf(xpos);
      D.ball(ctx, PX(xpos), PY(yb) - 9, 9, "#fb7185");
      if (!released) D.label(ctx, "▶ release me", PX(xpos), PY(yb) - 30, "#fbbf24", 11);
      // energy bars
      const KE = Math.max(0, E0 - m * g * yb - thermal);
      D.bars(ctx, w * 0.72, h - 56, w * 0.24,
        [{ label: "KE", value: KE, color: "#22d3ee" },
         { label: "PE", value: m * g * yb, color: "#fbbf24" },
         { label: "heat", value: thermal, color: "#f87171" }],
        E0 || 1, "E total = " + (E0 || 0).toFixed(0) + " J");
      S.set("v", Math.sqrt(2 * Math.max(0, KE) / m).toFixed(2) + " m/s");
      S.set("hgt", yb.toFixed(2) + " m");
    };
  });

  /* ============ area under curve = work / impulse ============ */
  Sims.define("forceArea", (S) => {
    const mode = S.params.mode === "impulse" ? "impulse" : "work";
    S.size(300);
    let curveKind = "bump";
    const upper = S.slider(mode === "work" ? "Upper limit x_f" : "Upper limit t_f", 0.5, 10, 0.1, 6, { unit: mode === "work" ? "m" : "s" });
    S.select([["bump", "F = smooth pulse"], ["linear", "F = 2·" + (mode === "work" ? "x" : "t")], ["const", "F = 12 (constant)"]], v => { curveKind = v; });
    S.readout("area", mode === "work" ? "W = ∫F dx" : "J = ∫F dt = Δp");
    const f = x => curveKind === "const" ? 12 : curveKind === "linear" ? 2 * x : 16 * Math.exp(-Math.pow(x - 5, 2) / 3.2);
    S.onDraw = (ctx, w, h) => {
      const spec = { xMin: 0, xMax: 10, yMin: 0, yMax: 22, xLabel: mode === "work" ? "x (m)" : "t (s)", yLabel: "F (N)" };
      const m = Plot.axes(ctx, w, h, spec);
      // shade 0..upper
      ctx.beginPath(); ctx.moveTo(m.X(0), m.Y(0));
      for (let i = 0; i <= 120; i++) { const x = (i / 120) * upper.value; ctx.lineTo(m.X(x), m.Y(f(x))); }
      ctx.lineTo(m.X(upper.value), m.Y(0)); ctx.closePath();
      ctx.fillStyle = "rgba(167,139,250,0.28)"; ctx.fill();
      // curve
      ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 2.6; ctx.beginPath();
      for (let i = 0; i <= 240; i++) { const x = (i / 240) * 10; i ? ctx.lineTo(m.X(x), m.Y(f(x))) : ctx.moveTo(m.X(x), m.Y(f(x))); }
      ctx.stroke();
      // numeric integral
      let A = 0; const N = 400;
      for (let i = 0; i < N; i++) { const x = (i + 0.5) / N * upper.value; A += f(x) * (upper.value / N); }
      D.label(ctx, "area = " + A.toFixed(1) + (mode === "work" ? " J" : " N·s"), m.X(upper.value / 2), m.Y(2.2), "#e8ecf8", 13);
      S.set("area", A.toFixed(2) + (mode === "work" ? " J" : " kg·m/s"));
    };
  });

  /* ============ 1D collisions ============ */
  Sims.define("collision", (S) => {
    S.size(250);
    let x1, x2, u1, u2, collided, flash = 0;
    const m1 = S.slider("m₁", 0.5, 6, 0.25, 2, { unit: "kg", onChange: reset });
    const v1 = S.slider("v₁ initial", -5, 5, 0.25, 3, { unit: "m/s", onChange: reset });
    const m2 = S.slider("m₂", 0.5, 6, 0.25, 4, { unit: "kg", onChange: reset });
    const v2 = S.slider("v₂ initial", -5, 5, 0.25, -1, { unit: "m/s", onChange: reset });
    const es = S.slider("Elasticity e (1 = elastic)", 0, 1, 0.05, 1, { onChange: reset });
    S.button("↺ Replay", reset, true);
    S.readout("p", "p total"); S.readout("k0", "KE before"); S.readout("k1", "KE after");
    function reset() { x1 = 8; x2 = 26; u1 = v1.value; u2 = v2.value; collided = false; flash = 0; }
    reset();
    S.onTick = (dt) => {
      x1 += u1 * dt * 2.4; x2 += u2 * dt * 2.4;
      const w1 = 1.2 + m1.value * 0.35, w2 = 1.2 + m2.value * 0.35;
      if (!collided && x2 - x1 <= (w1 + w2) / 2 + 0.4 && u1 > u2) {
        const e = es.value, M = m1.value + m2.value;
        const nu1 = (m1.value * u1 + m2.value * u2 + m2.value * e * (u2 - u1)) / M;
        const nu2 = (m1.value * u1 + m2.value * u2 + m1.value * e * (u1 - u2)) / M;
        u1 = nu1; u2 = nu2; collided = true; flash = 1;
      }
      if (x1 < -6 || x2 > 42) reset();
      flash = Math.max(0, flash - dt * 3);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const gy = h - 56, sc = w / 36;
      D.ground(ctx, gy, 8, w - 8);
      const w1 = (1.2 + m1.value * 0.35) * sc, w2 = (1.2 + m2.value * 0.35) * sc;
      const X1 = x1 * sc, X2 = x2 * sc;
      D.block(ctx, X1, gy - 17, w1, 34, "#fbbf24");
      D.block(ctx, X2, gy - 17, w2, 34, "#22d3ee");
      D.label(ctx, m1.value + " kg", X1, gy - 44, "#fbbf24", 11);
      D.label(ctx, m2.value + " kg", X2, gy - 44, "#22d3ee", 11);
      if (Math.abs(u1) > 0.05) D.arrow(ctx, X1, gy - 60, X1 + u1 * 11, gy - 60, "#fbbf24", 2.4);
      if (Math.abs(u2) > 0.05) D.arrow(ctx, X2, gy - 60, X2 + u2 * 11, gy - 60, "#22d3ee", 2.4);
      if (flash > 0) {
        // Newton's-third-law force pair at contact
        const cxp = (X1 + X2) / 2;
        ctx.globalAlpha = flash;
        D.arrow(ctx, cxp + 6, gy - 17, cxp + 50, gy - 17, "#f87171", 3, "F on 2");
        D.arrow(ctx, cxp - 6, gy - 17, cxp - 50, gy - 17, "#f87171", 3, "F on 1");
        ctx.globalAlpha = 1;
      }
      const p = m1.value * u1 + m2.value * u2;
      const k0 = 0.5 * m1.value * v1.value ** 2 + 0.5 * m2.value * v2.value ** 2;
      const k1 = 0.5 * m1.value * u1 ** 2 + 0.5 * m2.value * u2 ** 2;
      S.set("p", p.toFixed(2) + " kg·m/s (constant)");
      S.set("k0", k0.toFixed(2) + " J");
      S.set("k1", k1.toFixed(2) + " J" + (collided && k1 < k0 - 0.01 ? " (lost " + (k0 - k1).toFixed(2) + ")" : ""));
    };
  });

  /* ============ torque / seesaw balance ============ */
  Sims.define("torqueSeesaw", (S) => {
    S.size(300);
    let tilt = 0;
    const m1 = S.slider("Left mass m₁", 0.5, 10, 0.25, 4, { unit: "kg" });
    const d1 = S.slider("Left arm r₁", 0.2, 2.4, 0.05, 1.2, { unit: "m" });
    const m2 = S.slider("Right mass m₂", 0.5, 10, 0.25, 4, { unit: "kg" });
    const d2 = S.slider("Right arm r₂", 0.2, 2.4, 0.05, 1.2, { unit: "m" });
    S.readout("t1", "τ_ccw = m₁g·r₁"); S.readout("t2", "τ_cw = m₂g·r₂"); S.readout("net", "τ_net"); S.readout("st", "Status");
    S.onTick = (dt) => {
      const net = m2.value * g * d2.value - m1.value * g * d1.value;
      const target = Math.max(-0.22, Math.min(0.22, net * 0.004));
      tilt += (target - tilt) * Math.min(1, dt * 4);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h * 0.58, sc = 88;
      // pivot
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - 22, cy + 44); ctx.lineTo(cx + 22, cy + 44); ctx.closePath(); ctx.fill();
      D.ground(ctx, cy + 44, cx - 110, cx + 110);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(tilt);
      ctx.fillStyle = "#9aa3bf";
      Sims.roundRect(ctx, -2.6 * sc, -5, 5.2 * sc, 10, 5); ctx.fill();
      const r1 = 8 + m1.value * 1.7, r2 = 8 + m2.value * 1.7;
      D.block(ctx, -d1.value * sc, -5 - r1, r1 * 2, r1 * 2, "#fbbf24");
      D.block(ctx, d2.value * sc, -5 - r2, r2 * 2, r2 * 2, "#22d3ee");
      ctx.restore();
      const W1 = m1.value * g, W2 = m2.value * g;
      const lx = cx + Math.cos(tilt) * (-d1.value * sc), ly = cy + Math.sin(tilt) * (-d1.value * sc);
      const rx = cx + Math.cos(tilt) * (d2.value * sc), ry = cy + Math.sin(tilt) * (d2.value * sc);
      D.arrow(ctx, lx, ly, lx, ly + W1 * 0.9, "#f87171", 2.4, "m₁g");
      D.arrow(ctx, rx, ry, rx, ry + W2 * 0.9, "#f87171", 2.4, "m₂g");
      const t1 = W1 * d1.value, t2 = W2 * d2.value;
      S.set("t1", t1.toFixed(1) + " N·m"); S.set("t2", t2.toFixed(1) + " N·m");
      S.set("net", (t2 - t1).toFixed(1) + " N·m");
      S.set("st", Math.abs(t2 - t1) < 0.4 ? "⚖ balanced!" : (t2 > t1 ? "tips clockwise" : "tips counter-clockwise"));
    };
  });

  /* ============ rotational inertia ============ */
  Sims.define("rotInertia", (S) => {
    S.size(320);
    let th = 0, om = 0, applying = false;
    const ma = S.slider("Mass A", 0.5, 5, 0.25, 1.5, { unit: "kg" });
    const ra = S.slider("Radius A", 0.15, 1.2, 0.05, 0.5, { unit: "m" });
    const mb = S.slider("Mass B", 0.5, 5, 0.25, 1.5, { unit: "kg" });
    const rb = S.slider("Radius B", 0.15, 1.2, 0.05, 1.0, { unit: "m" });
    const tq = S.slider("Applied torque τ", 0.5, 12, 0.25, 4, { unit: "N·m" });
    const btn = S.button("⟳ Hold to apply torque", () => {}, true);
    btn.addEventListener("pointerdown", () => { applying = true; });
    window.addEventListener("pointerup", () => { applying = false; });
    S.button("↺ Stop", () => { om = 0; });
    S.readout("I", "I = Σmr²"); S.readout("al", "α = τ/I"); S.readout("om", "ω");
    const I = () => ma.value * ra.value ** 2 + mb.value * rb.value ** 2 + 0.02;
    S.onTick = (dt) => {
      if (applying) om += (tq.value / I()) * dt;
      om *= (1 - 0.02 * dt);
      th += om * dt;
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, sc = (Math.min(w, h) / 2 - 40) / 1.2;
      ctx.strokeStyle = "rgba(255,255,255,0.12)"; ctx.setLineDash([4, 6]);
      [ra.value, rb.value].forEach(r => { ctx.beginPath(); ctx.arc(cx, cy, r * sc, 0, TAU); ctx.stroke(); });
      ctx.setLineDash([]);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(th);
      ctx.strokeStyle = "#9aa3bf"; ctx.lineWidth = 7; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(-1.2 * sc, 0); ctx.lineTo(1.2 * sc, 0); ctx.stroke();
      D.ball(ctx, ra.value * sc, 0, 7 + ma.value * 2.4, "#fbbf24");
      D.ball(ctx, -rb.value * sc, 0, 7 + mb.value * 2.4, "#22d3ee");
      ctx.restore();
      D.ball(ctx, cx, cy, 6, "#9aa3bf");
      if (applying) {
        ctx.strokeStyle = "#34d399"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(cx, cy, 26, th + 0.4, th + 2.0); ctx.stroke();
        const ex = cx + 26 * Math.cos(th + 2.0), ey = cy + 26 * Math.sin(th + 2.0);
        D.arrow(ctx, ex - Math.sin(th + 2) * 2, ey + Math.cos(th + 2) * 2, ex - Math.sin(th + 2) * 12, ey + Math.cos(th + 2) * 12, "#34d399", 3);
      }
      S.set("I", I().toFixed(2) + " kg·m²");
      S.set("al", (applying ? tq.value / I() : 0).toFixed(2) + " rad/s²");
      S.set("om", om.toFixed(2) + " rad/s");
    };
  });

  /* ============ rolling race ============ */
  Sims.define("rolling", (S) => {
    S.size(330);
    const shapes = [
      { name: "hoop", beta: 1.0, color: "#f87171" },
      { name: "disk", beta: 0.5, color: "#fbbf24" },
      { name: "sphere", beta: 0.4, color: "#22d3ee" }
    ];
    let s = [0, 0, 0], v = [0, 0, 0], going = false, order = [];
    const ang = S.slider("Incline angle", 5, 35, 1, 18, { unit: "°", onChange: reset });
    S.button("🏁 Race!", () => { reset(); going = true; }, true);
    S.button("↺ Reset", reset);
    S.readout("a0", "a (hoop)"); S.readout("a1", "a (disk)"); S.readout("a2", "a (sphere)"); S.readout("win", "Order");
    function reset() { s = [0, 0, 0]; v = [0, 0, 0]; going = false; order = []; }
    const LEN = 24;
    S.onTick = (dt) => {
      if (!going) return;
      const th = ang.value * Math.PI / 180;
      shapes.forEach((sh, i) => {
        if (s[i] >= LEN) return;
        const a = g * Math.sin(th) / (1 + sh.beta);
        v[i] += a * dt; s[i] += v[i] * dt;
        if (s[i] >= LEN) { s[i] = LEN; order.push(sh.name); }
      });
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const th = ang.value * Math.PI / 180;
      const ox = 56, oy = 50;
      const L = Math.min(w - 130, 520);
      const ex = ox + L * Math.cos(th), ey = oy + L * Math.sin(th);
      ctx.strokeStyle = "rgba(255,255,255,0.3)"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(ox - 16, oy - 8); ctx.lineTo(ex + 8, ey + 4 - 8); ctx.stroke();
      D.ground(ctx, ey + 18, ox - 30, w - 20);
      D.label(ctx, "🏁", ex + 18, ey - 18, "#fff", 16);
      shapes.forEach((sh, i) => {
        const f = s[i] / LEN;
        const lane = (i - 1) * 0; // single lane, offset radius
        const r = 13;
        const px = ox + f * L * Math.cos(th) + Math.sin(th) * (r + 2 + lane);
        const py = oy + f * L * Math.sin(th) - Math.cos(th) * (r + 2 + lane) - 8;
        const rot = s[i] * 30 / r;
        ctx.save(); ctx.translate(px + (i - 1) * 0, py); ctx.rotate(rot);
        ctx.strokeStyle = sh.color; ctx.fillStyle = "rgba(255,255,255,0.06)"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill(); ctx.stroke();
        if (sh.name === "disk") { ctx.fillStyle = sh.color; ctx.globalAlpha = 0.45; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill(); ctx.globalAlpha = 1; }
        if (sh.name === "sphere") { ctx.fillStyle = sh.color; ctx.globalAlpha = 0.75; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill(); ctx.globalAlpha = 1; }
        ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(r, 0); ctx.stroke();
        ctx.restore();
        D.label(ctx, sh.name, px, py - r - 12, sh.color, 11);
      });
      const a = b => (g * Math.sin(th) / (1 + b));
      S.set("a0", a(1).toFixed(2) + " m/s²");
      S.set("a1", a(0.5).toFixed(2) + " m/s²");
      S.set("a2", a(0.4).toFixed(2) + " m/s²");
      S.set("win", order.length ? order.join(" → ") : "β = I/MR²: smaller β wins");
    };
  });

  /* ============ angular momentum: skater ============ */
  Sims.define("skater", (S) => {
    S.size(320);
    const I0 = 1.2, mArm = 4;
    let th = 0;
    const r0 = 1.15, w0 = 1.6;
    const L = (I0 + 2 * mArm * r0 * r0) * w0;
    const rs = S.slider("Arm extension r", 0.25, 1.15, 0.01, 1.15, { unit: "m" });
    S.readout("I", "I = I₀ + 2mr²"); S.readout("w", "ω = L/I"); S.readout("L", "L (conserved)"); S.readout("K", "KE = ½Iω²");
    const I = () => I0 + 2 * mArm * rs.value ** 2;
    S.onTick = (dt) => { th += (L / I()) * dt; };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, sc = (Math.min(w, h) / 2 - 44) / 1.15;
      // motion blur rings
      ctx.strokeStyle = "rgba(167,139,250,0.13)";
      ctx.beginPath(); ctx.arc(cx, cy, rs.value * sc, 0, TAU); ctx.stroke();
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(th);
      ctx.strokeStyle = "#9aa3bf"; ctx.lineWidth = 6; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(-rs.value * sc, 0); ctx.lineTo(rs.value * sc, 0); ctx.stroke();
      D.ball(ctx, rs.value * sc, 0, 13, "#fbbf24");
      D.ball(ctx, -rs.value * sc, 0, 13, "#fbbf24");
      ctx.restore();
      D.ball(ctx, cx, cy, 17, "#a78bfa");
      const om = L / I();
      // spin indicator
      ctx.strokeStyle = "#34d399"; ctx.lineWidth = 2.6;
      ctx.beginPath(); ctx.arc(cx, cy - 0, 28, th, th + Math.min(4.6, 0.8 + om * 0.5)); ctx.stroke();
      S.set("I", I().toFixed(2) + " kg·m²");
      S.set("w", om.toFixed(2) + " rad/s");
      S.set("L", L.toFixed(2) + " kg·m²/s");
      S.set("K", (0.5 * I() * om * om).toFixed(1) + " J (work done by skater!)");
    };
  });

  /* ============ orbital motion ============ */
  Sims.define("orbit", (S) => {
    S.size(380);
    const GM = 60000;     // px³/s² toy units
    const r0 = 150;
    const vc = Math.sqrt(GM / r0);
    let p, vel, trail, crashed;
    const vs = S.slider("Launch speed (× circular speed)", 0.45, 1.48, 0.01, 1.0, { onChange: reset, fmt: v => v.toFixed(2) + "·v_c" });
    S.button("↺ Relaunch", reset, true);
    S.readout("E", "Total energy"); S.readout("type", "Orbit"); S.readout("v", "Speed");
    function reset() { p = { x: r0, y: 0 }; vel = { x: 0, y: -vc * vs.value }; trail = []; crashed = false; }
    reset();
    S.onTick = (dt) => {
      if (crashed) return;
      const steps = 24;
      for (let i = 0; i < steps; i++) {
        const r = Math.hypot(p.x, p.y);
        if (r < 16) { crashed = true; return; }
        if (r > 4000) return;
        const a = -GM / (r * r * r);
        vel.x += a * p.x * dt / steps * 2.4;
        vel.y += a * p.y * dt / steps * 2.4;
        p.x += vel.x * dt / steps * 2.4;
        p.y += vel.y * dt / steps * 2.4;
      }
      trail.push([p.x, p.y]);
      if (trail.length > 1400) trail.shift();
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // star
      const gl = ctx.createRadialGradient(cx, cy, 2, cx, cy, 26);
      gl.addColorStop(0, "#fff7d6"); gl.addColorStop(0.4, "#fbbf24"); gl.addColorStop(1, "rgba(251,191,36,0)");
      ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(cx, cy, 26, 0, TAU); ctx.fill();
      // circular reference orbit
      ctx.strokeStyle = "rgba(255,255,255,0.08)"; ctx.setLineDash([4, 7]);
      ctx.beginPath(); ctx.arc(cx, cy, r0, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = "rgba(34,211,238,0.5)"; ctx.lineWidth = 1.6; ctx.beginPath();
      trail.forEach((t, i) => i ? ctx.lineTo(cx + t[0], cy + t[1]) : ctx.moveTo(cx + t[0], cy + t[1]));
      ctx.stroke();
      if (!crashed) {
        const px = cx + p.x, py = cy + p.y;
        D.ball(ctx, px, py, 7, "#22d3ee");
        D.arrow(ctx, px, py, px + vel.x * 0.55, py + vel.y * 0.55, "#34d399", 2.2, "v");
        const r = Math.hypot(p.x, p.y);
        D.arrow(ctx, px, py, px - p.x / r * 34, py - p.y / r * 34, "#f87171", 2.2, "F_g");
      } else D.label(ctx, "💥 crashed", cx + 40, cy - 30, "#f87171", 13);
      const r = Math.hypot(p.x, p.y), spd = Math.hypot(vel.x, vel.y);
      const E = 0.5 * spd * spd - GM / r;
      S.set("E", (E).toFixed(0) + (E < 0 ? "  (bound)" : "  (unbound!)"));
      S.set("type", crashed ? "crashed" : Math.abs(vs.value - 1) < 0.015 ? "circle" : E < -1 ? "ellipse" : E < 1 ? "≈ parabola (escape)" : "hyperbola");
      S.set("v", spd.toFixed(0) + " (v_circ = " + vc.toFixed(0) + ")");
    };
  });

  /* ============ spring-mass SHM ============ */
  Sims.define("shm", (S) => {
    S.size(170);
    let t = 0;
    const m = S.slider("Mass m", 0.5, 5, 0.25, 1, { unit: "kg", onChange: reset });
    const k = S.slider("Spring constant k", 10, 200, 5, 40, { unit: "N/m", onChange: reset });
    const A = S.slider("Amplitude A", 0.05, 0.5, 0.01, 0.3, { unit: "m", onChange: reset });
    S.button("↺ Restart", reset);
    S.readout("w", "ω = √(k/m)"); S.readout("T", "T = 2π√(m/k)"); S.readout("E", "E total = ½kA²");
    const plot = S.livePlot({ xMin: 0, xMax: 10, yMin: -1, yMax: 1, xLabel: "t (s)", height: 185, series: [
      { label: "x (m)", color: "#fbbf24" }, { label: "v (m/s)", color: "#22d3ee" }, { label: "a (m/s²)", color: "#f87171" }
    ]});
    function om() { return Math.sqrt(k.value / m.value); }
    function reset() {
      t = 0; plot.clear();
      const w0 = om();
      const ymax = Math.max(A.value * 1.2, A.value * w0 * 1.1, A.value * w0 * w0 * 0.35);
      plot.opts.yMin = -ymax; plot.opts.yMax = ymax;
    }
    reset();
    S.onTick = (dt) => {
      t += dt;
      const w0 = om();
      plot.push(0, t, A.value * Math.cos(w0 * t));
      plot.push(1, t, -A.value * w0 * Math.sin(w0 * t));
      plot.push(2, t, -A.value * w0 * w0 * Math.cos(w0 * t) * 0.3);
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const w0 = om();
      const x = A.value * Math.cos(w0 * t);
      const wallX = 30, eqX = w * 0.42, sc = (w * 0.3) / 0.5;
      const bx = eqX + x * sc;
      ctx.fillStyle = "rgba(255,255,255,0.10)"; ctx.fillRect(wallX - 12, 24, 12, 86);
      D.ground(ctx, 110, wallX - 12, w * 0.78);
      ctx.save(); ctx.setLineDash([4, 5]); ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.beginPath(); ctx.moveTo(eqX, 22); ctx.lineTo(eqX, 110); ctx.stroke(); ctx.restore();
      D.spring(ctx, wallX, 67, bx - 19, 67, 10, 9, "#9aa3bf");
      D.block(ctx, bx, 67, 38, 38, "#fbbf24");
      const v = -A.value * w0 * Math.sin(w0 * t);
      if (Math.abs(v) > 0.04) D.arrow(ctx, bx, 36, bx + v * 34, 36, "#22d3ee", 2.4, "v");
      // energy bars
      const E = 0.5 * k.value * A.value ** 2;
      const U = 0.5 * k.value * x * x, K = Math.max(0, E - U);
      D.bars(ctx, w * 0.82, 128, w * 0.16, [
        { label: "K", value: K, color: "#22d3ee" }, { label: "U", value: U, color: "#fbbf24" }
      ], E, "");
      S.set("w", w0.toFixed(2) + " rad/s");
      S.set("T", (TAU / w0).toFixed(2) + " s");
      S.set("E", E.toFixed(2) + " J");
      plot.draw();
    };
  });

  /* ============ pendulum: real vs small-angle ============ */
  Sims.define("pendulum", (S) => {
    S.size(330);
    let th, omg, t, lastSign, lastCross, measured;
    const Ls = S.slider("Length L", 0.3, 2.0, 0.05, 1.0, { unit: "m", onChange: reset });
    const th0 = S.slider("Initial angle θ₀", 5, 75, 1, 30, { unit: "°", onChange: reset });
    S.button("↺ Restart", reset);
    S.readout("Tsa", "T (small-angle 2π√(L/g))"); S.readout("Tm", "T (measured)"); S.readout("dev", "Difference");
    const plot = S.livePlot({ xMin: 0, xMax: 12, yMin: -1.5, yMax: 1.5, xLabel: "t (s)", yLabel: "θ (rad)", height: 160, series: [
      { label: "true pendulum", color: "#fbbf24" }, { label: "small-angle prediction", color: "rgba(34,211,238,0.7)" }
    ]});
    function reset() {
      th = th0.value * Math.PI / 180; omg = 0; t = 0;
      lastSign = 1; lastCross = null; measured = null;
      plot.clear();
      plot.opts.yMin = -th * 1.25 - 0.1; plot.opts.yMax = th * 1.25 + 0.1;
    }
    reset();
    S.onTick = (dt) => {
      const steps = 10;
      for (let i = 0; i < steps; i++) {
        const al = -(g / Ls.value) * Math.sin(th);
        omg += al * dt / steps;
        th += omg * dt / steps;
      }
      t += dt;
      // measure period via positive-going zero crossings
      const sgn = th >= 0 ? 1 : -1;
      if (sgn > 0 && lastSign < 0) {
        if (lastCross != null) measured = (t - lastCross) || measured;
        lastCross = t;
      }
      lastSign = sgn;
      plot.push(0, t, th);
      plot.push(1, t, (th0.value * Math.PI / 180) * Math.cos(Math.sqrt(g / Ls.value) * t));
    };
    S.onDraw = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const px = w / 2, py = 36, sc = 105;
      const L = Ls.value * sc;
      ctx.fillStyle = "rgba(255,255,255,0.12)"; ctx.fillRect(px - 44, py - 12, 88, 8);
      // small-angle ghost
      const thg = (th0.value * Math.PI / 180) * Math.cos(Math.sqrt(g / Ls.value) * t);
      ctx.globalAlpha = 0.28;
      ctx.strokeStyle = "#22d3ee"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + L * Math.sin(thg), py + L * Math.cos(thg)); ctx.stroke();
      D.ball(ctx, px + L * Math.sin(thg), py + L * Math.cos(thg), 11, "#22d3ee");
      ctx.globalAlpha = 1;
      // real pendulum
      ctx.strokeStyle = "#c9d1e8"; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + L * Math.sin(th), py + L * Math.cos(th)); ctx.stroke();
      D.ball(ctx, px + L * Math.sin(th), py + L * Math.cos(th), 13, "#fbbf24");
      const Tsa = TAU * Math.sqrt(Ls.value / g);
      S.set("Tsa", Tsa.toFixed(3) + " s");
      S.set("Tm", measured ? measured.toFixed(3) + " s" : "measuring…");
      S.set("dev", measured ? ((measured / Tsa - 1) * 100).toFixed(1) + "% (grows with θ₀)" : "—");
      plot.draw();
    };
  });
})();
