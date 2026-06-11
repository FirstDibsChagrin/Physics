/* simcore.js — simulation registry, control builders, animation harness, draw helpers */
"use strict";

window.Sims = (function () {
  const registry = {};
  const live = [];   // active sims, destroyed on route change

  function define(id, factory) { registry[id] = factory; }
  function has(id) { return !!registry[id]; }
  function ids() { return Object.keys(registry); }

  function mount(el, id, params) {
    const factory = registry[id];
    if (!factory) {
      el.innerHTML = "<p class='sim-caption'>Simulation “" + id + "” unavailable.</p>";
      return;
    }
    const sim = new SimHarness(el, params || {});
    try { factory(sim); } catch (e) {
      console.error("sim " + id + " failed:", e);
      el.innerHTML = "<p class='sim-caption'>Simulation failed to load.</p>";
      return;
    }
    live.push(sim);
    sim.start();
  }

  function destroyAll() {
    live.forEach(s => s.destroy());
    live.length = 0;
  }

  /* ---------------- harness ---------------- */
  class SimHarness {
    constructor(root, params) {
      this.root = root;
      this.params = params;
      this.canvas = document.createElement("canvas");
      root.appendChild(this.canvas);
      this.controlsEl = document.createElement("div");
      this.controlsEl.className = "sim-controls";
      root.appendChild(this.controlsEl);
      this.readoutsEl = document.createElement("div");
      this.readoutsEl.className = "sim-readouts";
      root.appendChild(this.readoutsEl);
      this.plotsEl = document.createElement("div");
      root.appendChild(this.plotsEl);
      this._raf = null;
      this._last = null;
      this._readouts = {};
      this.onTick = null;   // (dt) physics step
      this.onDraw = null;   // (ctx, w, h) render
      this.running = true;  // sims may pause themselves
      this.time = 0;
    }

    size(h) {
      const s = Plot.setupCanvas(this.canvas, h || 320);
      this.ctx = s.ctx; this.w = s.w; this.h = s.h;
      return s;
    }

    slider(label, min, max, step, value, opts) {
      opts = opts || {};
      const wrap = document.createElement("div");
      wrap.className = "sim-control";
      const lab = document.createElement("label");
      const name = document.createElement("span");
      name.textContent = label;
      const out = document.createElement("output");
      lab.appendChild(name); lab.appendChild(out);
      const input = document.createElement("input");
      input.type = "range";
      input.min = min; input.max = max; input.step = step; input.value = value;
      wrap.appendChild(lab); wrap.appendChild(input);
      this.controlsEl.appendChild(wrap);
      const fmt = opts.fmt || (v => (+v).toFixed(step < 0.1 ? 2 : step < 1 ? 1 : 0) + (opts.unit ? " " + opts.unit : ""));
      const update = () => { out.textContent = fmt(+input.value); };
      input.addEventListener("input", () => { update(); if (opts.onChange) opts.onChange(+input.value); });
      update();
      return { get value() { return +input.value; }, set value(v) { input.value = v; update(); }, el: input };
    }

    button(label, onClick, primary) {
      const b = document.createElement("button");
      b.className = "sim-btn" + (primary ? " primary" : "");
      b.textContent = label;
      b.addEventListener("click", onClick);
      this.controlsEl.appendChild(b);
      return b;
    }

    select(options, onChange, value) {
      const s = document.createElement("select");
      s.className = "sim-select";
      options.forEach(o => {
        const op = document.createElement("option");
        op.value = o[0]; op.textContent = o[1];
        s.appendChild(op);
      });
      if (value) s.value = value;
      s.addEventListener("change", () => onChange(s.value));
      this.controlsEl.appendChild(s);
      return s;
    }

    readout(key, label) {
      const span = document.createElement("span");
      span.className = "sim-readout";
      span.innerHTML = label + ": <b>—</b>";
      this.readoutsEl.appendChild(span);
      this._readouts[key] = span.querySelector("b");
    }
    set(key, text) { if (this._readouts[key]) this._readouts[key].textContent = text; }

    livePlot(opts) {
      const c = document.createElement("canvas");
      c.style.marginTop = "12px";
      this.plotsEl.appendChild(c);
      return new Plot.LivePlot(c, opts);
    }

    start() {
      const loop = (t) => {
        this._raf = requestAnimationFrame(loop);
        if (this._last == null) this._last = t;
        let dt = Math.min(0.033, (t - this._last) / 1000);
        this._last = t;
        if (!document.body.contains(this.root)) { this.destroy(); return; }
        if (this.onTick && this.running) { this.time += dt; this.onTick(dt); }
        if (this.onDraw) this.onDraw(this.ctx, this.w, this.h);
      };
      this._raf = requestAnimationFrame(loop);
    }
    destroy() { if (this._raf) cancelAnimationFrame(this._raf); this._raf = null; }
  }

  /* ---------------- drawing helpers ---------------- */
  const D = {
    arrow(ctx, x1, y1, x2, y2, color, width, label) {
      const dx = x2 - x1, dy = y2 - y1;
      const len = Math.hypot(dx, dy);
      if (len < 2) return;
      const ang = Math.atan2(dy, dx);
      const head = Math.min(11, len * 0.4);
      ctx.save();
      ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = width || 2.4;
      ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x1, y1);
      ctx.lineTo(x2 - head * 0.6 * Math.cos(ang), y2 - head * 0.6 * Math.sin(ang));
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - head * Math.cos(ang - 0.42), y2 - head * Math.sin(ang - 0.42));
      ctx.lineTo(x2 - head * Math.cos(ang + 0.42), y2 - head * Math.sin(ang + 0.42));
      ctx.closePath(); ctx.fill();
      if (label) {
        ctx.font = "600 13px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        const off = 14;
        ctx.fillText(label, x2 + off * Math.cos(ang), y2 + off * Math.sin(ang) - 2);
      }
      ctx.restore();
    },

    spring(ctx, x1, y1, x2, y2, coils, amp, color) {
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
      const ux = dx / len, uy = dy / len, px = -uy, py = ux;
      ctx.save();
      ctx.strokeStyle = color || "#9aa3bf"; ctx.lineWidth = 2; ctx.lineJoin = "round";
      ctx.beginPath(); ctx.moveTo(x1, y1);
      const lead = Math.min(12, len * 0.12);
      ctx.lineTo(x1 + ux * lead, y1 + uy * lead);
      const n = coils * 2;
      for (let i = 1; i <= n; i++) {
        const f = lead + (i / n) * (len - 2 * lead);
        const s = (i % 2 === 0 ? 0 : (i % 4 === 1 ? 1 : -1)) * amp;
        ctx.lineTo(x1 + ux * f + px * s, y1 + uy * f + py * s);
      }
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    },

    block(ctx, x, y, w, h, color, angle) {
      ctx.save();
      ctx.translate(x, y);
      if (angle) ctx.rotate(angle);
      const g = ctx.createLinearGradient(0, -h / 2, 0, h / 2);
      g.addColorStop(0, color); g.addColorStop(1, shade(color, -0.35));
      ctx.fillStyle = g;
      ctx.strokeStyle = "rgba(255,255,255,0.25)"; ctx.lineWidth = 1.2;
      roundRect(ctx, -w / 2, -h / 2, w, h, 5);
      ctx.fill(); ctx.stroke();
      ctx.restore();
    },

    ball(ctx, x, y, r, color) {
      const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.15, x, y, r);
      g.addColorStop(0, "#ffffff"); g.addColorStop(0.25, color); g.addColorStop(1, shade(color, -0.4));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    },

    label(ctx, text, x, y, color, size) {
      ctx.save();
      ctx.fillStyle = color || "#9aa3bf";
      ctx.font = "600 " + (size || 12) + "px 'JetBrains Mono', monospace";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(text, x, y);
      ctx.restore();
    },

    ground(ctx, y, x1, x2) {
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.3)"; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,0.12)"; ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = x1; x < x2; x += 14) { ctx.moveTo(x, y); ctx.lineTo(x - 8, y + 9); }
      ctx.stroke();
      ctx.restore();
    },

    bars(ctx, x, y, w, items, maxV, title) {
      /* vertical energy bars: items = [{label, value, color}] */
      const bw = Math.min(54, (w - 10) / items.length - 12);
      const H = 110;
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + w, y); ctx.stroke();
      items.forEach((it, i) => {
        const bx = x + 14 + i * (bw + 18);
        const hh = Math.max(0, Math.min(1.15, it.value / maxV)) * H;
        const g = ctx.createLinearGradient(0, y - hh, 0, y);
        g.addColorStop(0, it.color); g.addColorStop(1, shade(it.color, -0.4));
        ctx.fillStyle = g;
        roundRect(ctx, bx, y - hh, bw, hh, 3);
        ctx.fill();
        D.label(ctx, it.label, bx + bw / 2, y + 12, "#9aa3bf", 11);
      });
      if (title) D.label(ctx, title, x + w / 2, y - H - 18, "#6b7494", 11);
      ctx.restore();
    },

    fieldDot(ctx, x, y, out, r) {
      /* B out of page (dot) or into page (cross) */
      r = r || 5;
      ctx.save();
      ctx.strokeStyle = "rgba(167,139,250,0.55)"; ctx.fillStyle = "rgba(167,139,250,0.55)";
      ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
      if (out) { ctx.beginPath(); ctx.arc(x, y, r * 0.32, 0, Math.PI * 2); ctx.fill(); }
      else {
        const k = r * 0.62;
        ctx.beginPath();
        ctx.moveTo(x - k, y - k); ctx.lineTo(x + k, y + k);
        ctx.moveTo(x + k, y - k); ctx.lineTo(x - k, y + k);
        ctx.stroke();
      }
      ctx.restore();
    },

    charge(ctx, x, y, q, r) {
      r = r || 14;
      const pos = q > 0;
      const color = pos ? "#f87171" : "#60a5fa";
      const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
      g.addColorStop(0, "#fff"); g.addColorStop(0.25, color); g.addColorStop(1, shade(color, -0.45));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.9)"; ctx.lineWidth = 2; ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x - r * 0.45, y); ctx.lineTo(x + r * 0.45, y);
      if (pos) { ctx.moveTo(x, y - r * 0.45); ctx.lineTo(x, y + r * 0.45); }
      ctx.stroke();
    }
  };

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function shade(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    r = Math.round(Math.max(0, Math.min(255, r * (1 + f))));
    g = Math.round(Math.max(0, Math.min(255, g * (1 + f))));
    b = Math.round(Math.max(0, Math.min(255, b * (1 + f))));
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  return { define, has, ids, mount, destroyAll, D, roundRect, shade };
})();
