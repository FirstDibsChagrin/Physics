/* plot.js — AP data registry bootstrap + canvas plotting (static specs & live sim plots) */
"use strict";

window.AP = {
  units: [],
  registerUnit: function (u) { this.units.push(u); }
};

window.Plot = (function () {
  const FONT = "11px 'JetBrains Mono', monospace";
  const PALETTE = ["#fbbf24", "#22d3ee", "#f87171", "#34d399", "#c084fc", "#60a5fa"];

  function setupCanvas(canvas, cssH) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || canvas.parentElement.clientWidth || 600;
    const h = cssH || canvas.clientHeight || 300;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.height = h + "px";
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h };
  }

  // Shared axes painter. map: data → pixel.
  function axes(ctx, w, h, o) {
    const pad = { l: 52, r: 14, t: 14, b: 34 };
    const X = x => pad.l + ((x - o.xMin) / (o.xMax - o.xMin)) * (w - pad.l - pad.r);
    const Y = y => h - pad.b - ((y - o.yMin) / (o.yMax - o.yMin)) * (h - pad.t - pad.b);

    ctx.clearRect(0, 0, w, h);
    // grid
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    const xt = ticks(o.xMin, o.xMax), yt = ticks(o.yMin, o.yMax);
    ctx.beginPath();
    xt.forEach(t => { ctx.moveTo(X(t), pad.t); ctx.lineTo(X(t), h - pad.b); });
    yt.forEach(t => { ctx.moveTo(pad.l, Y(t)); ctx.lineTo(w - pad.r, Y(t)); });
    ctx.stroke();
    // zero lines
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.beginPath();
    if (o.yMin < 0 && o.yMax > 0) { ctx.moveTo(pad.l, Y(0)); ctx.lineTo(w - pad.r, Y(0)); }
    if (o.xMin < 0 && o.xMax > 0) { ctx.moveTo(X(0), pad.t); ctx.lineTo(X(0), h - pad.b); }
    ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, h - pad.b); ctx.lineTo(w - pad.r, h - pad.b);
    ctx.stroke();
    // tick labels
    ctx.fillStyle = "#6b7494"; ctx.font = FONT;
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    xt.forEach(t => ctx.fillText(fmt(t), X(t), h - pad.b + 6));
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    yt.forEach(t => ctx.fillText(fmt(t), pad.l - 7, Y(t)));
    // axis labels
    ctx.fillStyle = "#9aa3bf";
    if (o.xLabel) { ctx.textAlign = "right"; ctx.textBaseline = "bottom"; ctx.fillText(o.xLabel, w - pad.r, h - 2); }
    if (o.yLabel) {
      ctx.save(); ctx.translate(12, pad.t + 4); ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "right"; ctx.textBaseline = "top"; ctx.fillText(o.yLabel, 0, 0); ctx.restore();
    }
    return { X, Y, pad };
  }

  function ticks(min, max) {
    const span = max - min;
    const step = Math.pow(10, Math.floor(Math.log10(span / 4)));
    const s = span / step > 8 ? step * 2 : (span / step < 3 ? step / 2 : step);
    const out = [];
    for (let t = Math.ceil(min / s) * s; t <= max + 1e-9; t += s) {
      if (Math.abs(t) > 1e-9 || (min > 0 || max < 0)) out.push(t);
    }
    return out;
  }

  function fmt(v) {
    if (Math.abs(v) >= 1000) return v.toExponential(0);
    return +v.toFixed(3) + "";
  }

  // Draw a static graph from a content-spec (see CONTENT_GUIDE.md)
  function drawSpec(canvas, spec) {
    const { ctx, w, h } = setupCanvas(canvas, 300);
    const m = axes(ctx, w, h, spec);
    const compiled = (spec.fns || []).map((f, i) => ({
      fn: compile(f.expr), label: f.label, color: f.color || PALETTE[i % PALETTE.length]
    }));
    // shading
    if (spec.shade) {
      const sfn = compile(spec.shade.expr);
      ctx.beginPath();
      ctx.moveTo(m.X(spec.shade.from), m.Y(0));
      for (let i = 0; i <= 80; i++) {
        const x = spec.shade.from + (i / 80) * (spec.shade.to - spec.shade.from);
        ctx.lineTo(m.X(x), m.Y(clampY(sfn(x), spec)));
      }
      ctx.lineTo(m.X(spec.shade.to), m.Y(0));
      ctx.closePath();
      ctx.fillStyle = "rgba(167,139,250,0.22)";
      ctx.fill();
    }
    // markers
    (spec.vlines || []).forEach(v => dashLine(ctx, m.X(v.x), m.pad.t, m.X(v.x), h - m.pad.b, v.label, m.X(v.x) + 5, m.pad.t + 12));
    (spec.hlines || []).forEach(v => dashLine(ctx, m.pad.l, m.Y(v.y), w - 14, m.Y(v.y), v.label, m.pad.l + 6, m.Y(v.y) - 6));
    // curves
    compiled.forEach(c => {
      ctx.strokeStyle = c.color; ctx.lineWidth = 2.4; ctx.lineJoin = "round";
      ctx.beginPath();
      let pen = false;
      for (let i = 0; i <= 400; i++) {
        const x = spec.xMin + (i / 400) * (spec.xMax - spec.xMin);
        let y;
        try { y = c.fn(x); } catch (e) { y = NaN; }
        if (!isFinite(y)) { pen = false; continue; }
        const py = m.Y(clampY(y, spec));
        if (!pen) { ctx.moveTo(m.X(x), py); pen = true; } else ctx.lineTo(m.X(x), py);
      }
      ctx.stroke();
    });
    // legend
    let lx = m.pad.l + 12, ly = m.pad.t + 8;
    ctx.font = "600 12px 'Inter', sans-serif"; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    compiled.forEach(c => {
      if (!c.label) return;
      ctx.strokeStyle = c.color; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(lx + 18, ly); ctx.stroke();
      ctx.fillStyle = "#c9d1e8";
      ctx.fillText(c.label, lx + 25, ly + 0.5);
      ly += 19;
    });

    function dashLine(ctx, x1, y1, x2, y2, label, lx, ly) {
      ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = "rgba(255,255,255,0.35)"; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore();
      if (label) { ctx.fillStyle = "#9aa3bf"; ctx.font = FONT; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillText(label, lx, ly); }
    }
  }

  function clampY(y, spec) {
    const m = (spec.yMax - spec.yMin) * 0.5;
    return Math.max(spec.yMin - m, Math.min(spec.yMax + m, y));
  }

  function compile(expr) {
    /* content-authored math expression in x */
    return new Function("x", "with(Math){return " + expr + ";}");
  }

  /* LivePlot — streaming time-series plot used inside simulations */
  class LivePlot {
    constructor(canvas, opts) {
      this.canvas = canvas;
      this.opts = Object.assign({ xMin: 0, xMax: 10, yMin: -1, yMax: 1, height: 150, series: [] }, opts);
      this.data = this.opts.series.map(() => []);
      this.resize();
    }
    resize() {
      const s = setupCanvas(this.canvas, this.opts.height);
      this.ctx = s.ctx; this.w = s.w; this.h = s.h;
    }
    clear() { this.data = this.opts.series.map(() => []); }
    push(i, x, y) {
      this.data[i].push([x, y]);
      if (this.data[i].length > 2200) this.data[i].splice(0, 400);
    }
    draw(extra) {
      const o = this.opts;
      // auto-scroll x window
      let xMax = o.xMax;
      this.data.forEach(d => { if (d.length) xMax = Math.max(xMax, d[d.length - 1][0]); });
      const view = { xMin: Math.max(o.xMin, xMax - (o.xMax - o.xMin)), xMax: xMax, yMin: o.yMin, yMax: o.yMax, xLabel: o.xLabel, yLabel: o.yLabel };
      const m = axes(this.ctx, this.w, this.h, view);
      (o.hlines || []).forEach(hl => {
        this.ctx.save(); this.ctx.setLineDash([5, 5]); this.ctx.strokeStyle = "rgba(255,255,255,0.35)";
        this.ctx.beginPath(); this.ctx.moveTo(m.pad.l, m.Y(hl.y)); this.ctx.lineTo(this.w - 14, m.Y(hl.y)); this.ctx.stroke(); this.ctx.restore();
        if (hl.label) { this.ctx.fillStyle = "#9aa3bf"; this.ctx.font = FONT; this.ctx.textAlign = "left"; this.ctx.fillText(hl.label, m.pad.l + 6, m.Y(hl.y) - 8); }
      });
      this.data.forEach((d, i) => {
        const s = o.series[i];
        this.ctx.strokeStyle = s.color || PALETTE[i]; this.ctx.lineWidth = 2.2;
        this.ctx.beginPath();
        let pen = false;
        for (const [x, y] of d) {
          if (x < view.xMin) continue;
          const py = m.Y(Math.max(view.yMin * 1.5, Math.min(view.yMax * 1.5, y)));
          if (!pen) { this.ctx.moveTo(m.X(x), py); pen = true; } else this.ctx.lineTo(m.X(x), py);
        }
        this.ctx.stroke();
      });
      // legend
      let lx = m.pad.l + 10, ly = m.pad.t + 8;
      this.ctx.font = "600 11.5px 'Inter', sans-serif"; this.ctx.textAlign = "left"; this.ctx.textBaseline = "middle";
      o.series.forEach((s, i) => {
        if (!s.label) return;
        this.ctx.strokeStyle = s.color || PALETTE[i]; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(lx, ly); this.ctx.lineTo(lx + 16, ly); this.ctx.stroke();
        this.ctx.fillStyle = "#c9d1e8"; this.ctx.fillText(s.label, lx + 22, ly + 0.5);
        lx += 22 + this.ctx.measureText(s.label).width + 24;
      });
      if (extra) extra(this.ctx, m);
    }
  }

  return { setupCanvas, axes, drawSpec, LivePlot, PALETTE };
})();
