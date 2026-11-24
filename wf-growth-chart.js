(function () {
  if (customElements.get('wf-growth')) return;
  const PAST = [[2016, 0, 100000], [2017, 5.8, 105800], [2018, 5.6, 105600], [2019, 6.8, 106800], [2020, 19.9, 119900], [2021, 29.9, 129900], [2022, 47.7, 147700], [2023, 20.2, 120200], [2024, 51.6, 151600], [2025, 123.8, 223800], [2026, 174.5, 274500], [2026 + 10 / 12, 170.3, 270300]];
  const NOW = 2026 + 10 / 12;
  const BAND = [[NOW, 170.3, 270300, 170.3, 170.3], [2027.833, 210, 310000, 201, 218], [2028.833, 254, 354000, 236, 273], [2029.833, 306, 406000, 275, 339], [2030.833, 365, 465000, 318, 415], [2031.833, 432, 532000, 366, 505], [2032.833, 509, 609000, 419, 611], [2033.833, 597, 697000, 479, 736], [2034.833, 699, 799000, 546, 882], [2035.833, 814, 914000, 620, 1054], [2036.833, 947, 1047000, 703, 1256]];
  const FUT = [[2026.8333, 170.3, 270300], [2027.4167, 214, 314000], [2027.9167, 239, 339000], [2028.4167, 203, 303000], [2028.9167, 197, 297000], [2029.4167, 256, 356000], [2029.9167, 317, 417000], [2030.4167, 363, 463000], [2030.9167, 409, 509000], [2031.4167, 346, 446000], [2031.9167, 386, 486000], [2032.4167, 474, 574000], [2032.9167, 549, 649000], [2033.4167, 614, 714000], [2033.9167, 656, 756000], [2034.4167, 539, 639000], [2034.9167, 602, 702000], [2035.4167, 758, 858000], [2035.9167, 853, 953000], [2036.4167, 928, 1028000], [2036.9167, 947, 1047000]];
  (function () {
    const L = FUT.map(r => Math.log(1 + r[1] / 100));
    for (let pass = 0; pass < 3; pass++) { const c = L.slice(); for (let i = 1; i < L.length - 1; i++) c[i] = 0.25 * L[i - 1] + 0.5 * L[i] + 0.25 * L[i + 1]; for (let i = 1; i < L.length - 1; i++) L[i] = c[i]; }
    FUT.forEach((r, i) => { const p = (Math.exp(L[i]) - 1) * 100; r[1] = Math.round(p * 10) / 10; r[2] = Math.round(100000 * (1 + p / 100)); });
    const t0 = FUT[0][0], t1 = FUT[FUT.length - 1][0], hiF = Math.log(13.56 / 10.47), loF = Math.log(8.03 / 10.47);
    BAND.length = 0; FUT.forEach(r => { const u = (r[0] - t0) / (t1 - t0), v = 1 + r[1] / 100; BAND.push([r[0], r[1], r[2], (v * Math.exp(loF * u) - 1) * 100, (v * Math.exp(hiF * u) - 1) * 100]); });
  })();
  const MP = [[2016, 0, 100000], [2017, 8.7, 108700], [2018, 15, 115000], [2019, 7.6, 107600], [2020, 38.1, 138100], [2021, 44.3, 144300], [2022, 85.8, 185800], [2023, 57.7, 157700], [2024, 86, 186000], [2025, 131.6, 231600], [2026, 143.2, 243200], [NOW, 175.1, 275100]];
  const MF = [[2026.8333, 175.1, 275100], [2027.4167, 200, 300000], [2027.9167, 215, 315000], [2028.4167, 196, 296000], [2028.9167, 193, 293000], [2029.4167, 226, 326000], [2029.9167, 255, 355000], [2030.4167, 277, 377000], [2030.9167, 299, 399000], [2031.4167, 271, 371000], [2031.9167, 290, 390000], [2032.4167, 329, 429000], [2032.9167, 359, 459000], [2033.4167, 387, 487000], [2033.9167, 407, 507000], [2034.4167, 361, 461000], [2034.9167, 388, 488000], [2035.4167, 447, 547000], [2035.9167, 481, 581000], [2036.4167, 510, 610000], [2036.9167, 522, 622000]];
  const YEAR = { 2016: 5.8, 2017: -0.2, 2018: 1.1, 2019: 12.3, 2020: 8.4, 2021: 13.7, 2022: -18.6, 2023: 26.1, 2024: 47.6, 2025: 22.6, 2026: -1.5 };
  const MARKERS = [
    { t: 2016, pct: 0, title: '1. Jan. 2016 — Start', body: 'Gekauft: Gold 24.000 € (1.060 $/oz), S&P 500 9.000 € (2.044 Pkt.), Alphabet 7.000 € (39 $, split-bereinigt), Silber 6.000 € (13,80 $/oz), USD 10.000 € (1 € = 1,086 $). 44.000 € bleiben als Cash in Reserve.' },
    { t: 2022, pct: 47.7, title: '1. Jan. 2022 — Einstieg Krypto & Tesla', body: 'Gekauft: Bitcoin 24.000 € (46.300 $), Tesla 7.500 € (352 $).' }
  ];
  const T0 = 2016, T1 = 2036 + 11 / 12, MON = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'];
  const fmtPct = v => (v >= 0 ? '+' : '−') + Math.abs(v).toLocaleString('de-DE', { minimumFractionDigits: Math.abs(v) < 200 ? 1 : 0, maximumFractionDigits: Math.abs(v) < 200 ? 1 : 0 }) + ' %';
  const fmtEur = v => (Math.round(v / 100) * 100).toLocaleString('de-DE') + ' €';
  const fmtDate = t => { const y = Math.floor(t + 1e-6), m = Math.min(11, Math.round((t - y) * 12)); return MON[m] + ' ' + y; };
  const lerp = (arr, t, i) => { for (let k = 1; k < arr.length; k++) if (t <= arr[k][0]) { const a = arr[k - 1], b = arr[k], u = (t - a[0]) / (b[0] - a[0]); return a[i] + (b[i] - a[i]) * u; } return arr[arr.length - 1][i]; };
  const CSS = `
.wfg{position:relative;font-family:'Jost',system-ui,sans-serif;color:#E7E8E6}
.wfg-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}
.wfg-note{margin:0;font-size:12.5px;color:rgba(231,232,230,.55)}
.wfg-ctl{display:flex;gap:8px;align-items:center}
.wfg-end{position:absolute;right:18px;transform:translateY(-130%);font:500 10.5px 'IBM Plex Mono',monospace;letter-spacing:.04em;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .6s ease 3.4s}.wfg.ready .wfg-end{opacity:1}
.wfg-mtog{display:inline-flex;align-items:center;gap:8px;height:28px;padding:0 12px;border-radius:999px;border:1px solid rgba(163,173,152,.4);background:transparent;color:#a3ad98;font:12px 'Jost',sans-serif;cursor:pointer;transition:background .24s,color .24s}.wfg-mtog i{width:8px;height:8px;border-radius:50%;background:#a3ad98}.wfg-mtog.off{color:rgba(231,232,230,.4);border-color:rgba(231,232,230,.14)}.wfg-mtog.off i{background:transparent;border:1px solid rgba(231,232,230,.4)}
.wfg-ser{display:flex;flex-wrap:wrap;gap:6px 22px;margin-top:34px;font-size:12px;color:rgba(231,232,230,.75)}.wfg-ser span{display:inline-flex;align-items:center;gap:8px}.wfg-ser i{display:block;width:18px;height:2px;border-radius:2px}
.wfg-pill{display:inline-flex;align-items:center;height:28px;padding:0 12px;border-radius:999px;background:rgba(231,232,230,.08);border:1px solid rgba(231,232,230,.14);font-size:12px;color:#E7E8E6}
.wfg-tog{display:inline-flex;height:28px;padding:2px;border-radius:999px;background:rgba(231,232,230,.06);border:1px solid rgba(231,232,230,.12)}
.wfg-tog button{border:0;background:transparent;color:rgba(231,232,230,.55);font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.06em;padding:0 10px;border-radius:999px;cursor:pointer;transition:background .24s,color .24s}
.wfg-tog button.on{background:rgba(231,232,230,.14);color:#E7E8E6}
.wfg-plot{position:relative;height:260px;touch-action:pan-y}
.wfg-plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.wfg-plot svg *{pointer-events:none}
.wfg-lab{position:absolute;top:4px;font:500 10.5px 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;pointer-events:none}
.wfg{padding-bottom:30px}.wfg-axis{position:absolute;left:0;right:0;bottom:-22px;height:16px;font:11px 'IBM Plex Mono',monospace;color:rgba(231,232,230,.5)}
.wfg-axis span{position:absolute;transform:translateX(-50%)}.wfg-axis .now{color:#E7E8E6}
.wfg-yl{position:absolute;right:calc(100% + 8px);transform:translateY(-50%);font:10.5px 'IBM Plex Mono',monospace;color:rgba(231,232,230,.42);white-space:nowrap}
.wfg-mk{position:absolute;width:22px;height:22px;margin:-11px 0 0 -11px;border:0;padding:0;background:transparent;cursor:pointer}
.wfg-mk i{position:absolute;left:6px;top:6px;width:10px;height:10px;border-radius:50%;background:#C9A55C}
.wfg-mk::after{content:"";position:absolute;inset:0;border-radius:50%;border:1px solid rgba(201,165,92,.7);animation:wfgp 2.4s cubic-bezier(.22,.61,.36,1) infinite}
@keyframes wfgp{0%{transform:scale(.5);opacity:1}100%{transform:scale(1.6);opacity:0}}
.wfg-card{position:absolute;z-index:5;width:260px;padding:14px 16px;border-radius:10px;background:#141A17;border:1px solid rgba(231,232,230,.16);box-shadow:0 18px 40px -20px rgba(0,0,0,.6);opacity:0;transform:translateY(8px);transition:opacity .24s cubic-bezier(.22,.61,.36,1),transform .24s cubic-bezier(.16,1,.3,1);pointer-events:none}
.wfg-card.on{opacity:1;transform:none}
.wfg-card b{display:block;margin-bottom:6px;font:500 13px 'Jost',sans-serif;color:#C9A55C}
.wfg-card p{margin:0;font-size:12.5px;line-height:1.55;color:rgba(231,232,230,.78)}
.wfg-leg{display:flex;gap:4px;margin-top:40px}
.wfg-leg div{flex:1;min-width:0}
.wfg-leg i{display:block;height:10px;border-radius:3px;margin-bottom:8px}
.wfg-leg span{display:block;font-size:12px;line-height:1.4;color:rgba(231,232,230,.75)}
.wfg-leg em{font-style:normal;font-family:'IBM Plex Mono',monospace;font-size:11px;color:rgba(231,232,230,.5)}
@media (prefers-reduced-motion:reduce){.wfg-mk::after{animation:none}}`;

  class WFGrowth extends HTMLElement {
    connectedCallback() {
      if (this._on) return; this._on = true; this.log = true;
      if (!document.getElementById('wfg-css')) { const s = document.createElement('style'); s.id = 'wfg-css'; s.textContent = CSS; document.head.appendChild(s); }
      this.innerHTML = `<div class="wfg"><div class="wfg-top"><p class="wfg-note">Historische Werte · kein Versprechen künftiger Rendite</p><div class="wfg-ctl"><button type="button" class="wfg-mtog" data-mtog aria-pressed="true"><i></i>MSCI World</button><span class="wfg-pill">± 10 Jahre</span></div></div>
<div class="wfg-plot" data-plot><svg data-svg aria-hidden="true"></svg><span class="wfg-lab" data-l1 style="color:rgba(231,232,230,.5)">Rückblick</span><span class="wfg-lab" data-l2 style="color:#C9A55C">Prognose</span><div class="wfg-axis" data-axis></div><div class="wfg-card" data-card><b></b><p></p></div><span class="wfg-end" data-endp style="color:#C9A55C">Portfolio +947 %</span><span class="wfg-end" data-endm style="color:#a3ad98">MSCI World +522 %</span></div><div class="wfg-ser"><span><i style="background:#C9A55C"></i>Portfolio</span><span data-msci-leg><i style="background:#a3ad98"></i>MSCI World (Ø +9,7 % p. a. Rückblick / +8,5 % p. a. Prognose)</span></div>
</div>`;
      this.msci = true; this.plot = this.querySelector('[data-plot]'); const mt = this.querySelector('[data-mtog]'); mt.addEventListener('click', () => { this.msci = !this.msci; mt.classList.toggle('off', !this.msci); mt.setAttribute('aria-pressed', String(this.msci)); this.querySelector('[data-msci-leg]').style.opacity = this.msci ? '' : '.35'; this.draw(); this.kpi(this._t || NOW, true); }); this.svg = this.querySelector('[data-svg]'); this.card = this.querySelector('[data-card]');
      this.querySelectorAll('.wfg-tog button').forEach(b => b.addEventListener('click', () => { this.log = b.dataset.s === 'log'; this.querySelectorAll('.wfg-tog button').forEach(x => x.classList.toggle('on', x === b)); this.draw(); }));
      this.plot.addEventListener('pointermove', e => this.hover(e)); this.plot.addEventListener('pointerdown', e => this.hover(e)); this.plot.style.touchAction = 'pan-y';
      this.plot.addEventListener('pointerleave', () => { this._hov = false; this.cursor(null); this.kpi(NOW); });
      new ResizeObserver(() => this.draw()).observe(this.plot);
      this.shown = { eur: null }; this.draw(); this.kpi(NOW, true);
    }
    y(p) { const H = this.H, top = 26, bot = H - 6; if (this.log) { const a = Math.log(1), b = Math.log(1 + 1300 / 100); return bot - (Math.log(1 + p / 100) - a) / (b - a) * (bot - top); } return bot - p / 1300 * (bot - top); }
    x(t) { return (t - T0) / (T1 - T0) * this.W; }
    path(pts) { let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)]; const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]; d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)},${c2[0].toFixed(1)} ${c2[1].toFixed(1)},${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`; } return d; }
    mono(pts) { const n = pts.length; if (n < 3) return this.path(pts); const dx = [], dy = [], m = []; for (let i = 0; i < n - 1; i++) { dx[i] = pts[i + 1][0] - pts[i][0]; dy[i] = (pts[i + 1][1] - pts[i][1]) / dx[i]; } m[0] = dy[0]; m[n - 1] = dy[n - 2]; for (let i = 1; i < n - 1; i++) m[i] = dy[i - 1] * dy[i] <= 0 ? 0 : (dy[i - 1] + dy[i]) / 2; for (let i = 0; i < n - 1; i++) { if (dy[i] === 0) { m[i] = m[i + 1] = 0; continue; } const a = m[i] / dy[i], b = m[i + 1] / dy[i], h = a * a + b * b; if (h > 9) { const t = 3 / Math.sqrt(h); m[i] = t * a * dy[i]; m[i + 1] = t * b * dy[i]; } } let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1); for (let i = 0; i < n - 1; i++) { const h = dx[i] / 3; d += 'C' + (pts[i][0] + h).toFixed(1) + ' ' + (pts[i][1] + m[i] * h).toFixed(1) + ',' + (pts[i + 1][0] - h).toFixed(1) + ' ' + (pts[i + 1][1] - m[i + 1] * h).toFixed(1) + ',' + pts[i + 1][0].toFixed(1) + ' ' + pts[i + 1][1].toFixed(1); } return d; }
    draw() {
      const W = this.W = this.plot.clientWidth, H = this.H = this.plot.clientHeight; if (!W) return;
      const ticks = this.log ? [0, 50, 100, 200, 500, 1000] : [0, 250, 500, 750, 1000, 1250];
      let g = ticks.map(p => `<line x1="0" x2="${W}" y1="${this.y(p).toFixed(1)}" y2="${this.y(p).toFixed(1)}" stroke="rgba(231,232,230,${p === 0 ? .3 : .1})" ${p === 0 ? '' : 'stroke-dasharray="2 4"'}/>`).join('');
      const past = PAST.map(r => [this.x(r[0]), this.y(r[1])]), fut = FUT.map(r => [this.x(r[0]), this.y(r[1])]);
      const lo = BAND.map(r => [this.x(r[0]), this.y(r[3])]), hi = BAND.map(r => [this.x(r[0]), this.y(r[4])]);
      const nx = this.x(NOW), ny = this.y(170.3), base = this.y(0);
      const pathP = this.path(past), pathF = this.mono(fut); const mPast = MP.map(r => [this.x(r[0]), this.y(r[1])]), mFut = MF.map(r => [this.x(r[0]), this.y(r[1])]); const msciSvg = this.msci ? `<path data-mp d="${this.path(mPast)}" fill="none" stroke="#a3ad98" stroke-width="1.5"/><path data-mf d="${this.mono(mFut)}" fill="none" stroke="#a3ad98" stroke-width="1.5" stroke-opacity=".8"/>` : '';
      const band = this.mono(hi) + 'L' + this.mono(lo.slice().reverse()).slice(1);
      this.svg.innerHTML = `<defs><linearGradient id="wfgA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E7E8E6" stop-opacity=".18"/><stop offset="1" stop-color="#E7E8E6" stop-opacity="0"/></linearGradient><linearGradient id="wfgF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9A55C" stop-opacity=".16"/><stop offset="1" stop-color="#C9A55C" stop-opacity="0"/></linearGradient></defs>${g}
<path d="${band}Z" fill="rgba(201,165,92,.12)"/><path d="${pathF}L${this.x(T1).toFixed(1)} ${base.toFixed(1)}L${nx.toFixed(1)} ${base.toFixed(1)}Z" fill="url(#wfgF)"/><path d="${pathP}L${nx.toFixed(1)} ${base.toFixed(1)}L0 ${base.toFixed(1)}Z" fill="url(#wfgA)"/>
<line x1="${nx}" x2="${nx}" y1="0" y2="${H}" stroke="rgba(231,232,230,.35)" stroke-dasharray="3 4"/>
${msciSvg}<path data-pll d="${pathP}" fill="none" stroke="#E7E8E6" stroke-width="2"/><path data-pl d="${pathP}" fill="none" stroke="transparent"/><path data-fl d="${pathF}" fill="none" stroke="#C9A55C" stroke-width="2"/>
<circle cx="${nx}" cy="${ny}" r="11" fill="rgba(201,165,92,.2)"/><circle cx="${nx}" cy="${ny}" r="5" fill="#C9A55C"/>
<g data-cur style="display:none"><line data-cl y1="0" y2="${H}" stroke="rgba(231,232,230,.5)"/><circle data-cm r="4" fill="#141A17" stroke="#a3ad98" stroke-width="2"/><circle data-cd r="4.5" fill="#141A17" stroke="#E7E8E6" stroke-width="2"/></g>`;
      if (!this._drawn) { this._drawn = true; const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
        [['[data-pll]', 0, 1400], ['[data-fl]', 1400, 2000], ['[data-mp]', 0, 1400], ['[data-mf]', 1400, 2000]].forEach(([sel, delay, dur]) => { const p = this.svg.querySelector(sel); if (!p || rm) return; const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.getBoundingClientRect(); p.style.transition = 'stroke-dashoffset ' + dur + 'ms cubic-bezier(.22,.61,.36,1) ' + delay + 'ms'; requestAnimationFrame(() => { p.style.strokeDashoffset = '0'; }); setTimeout(() => { p.style.strokeDasharray = ''; p.style.transition = ''; }, delay + dur + 80); }); }
      this._tEnd = Math.min(T1, (FUT[FUT.length-1]||[T1])[0]); const ep = this.querySelector('[data-endp]'), em = this.querySelector('[data-endm]'); ep.style.top = this.y(947) + 'px'; em.style.top = (this.y(522) + 92) + 'px'; em.style.display = this.msci ? '' : 'none'; requestAnimationFrame(() => this.querySelector('.wfg').classList.add('ready'));
      this.querySelector('[data-l1]').style.left = Math.max(0, nx / 2 - 40) + 'px';
      this.querySelector('[data-l2]').style.left = (nx + 14) + 'px';
      const ax = this.querySelector('[data-axis]'); ax.innerHTML = '';
      for (let yr = 2016; yr <= 2036; yr += 2) { const s = document.createElement('span'); s.textContent = yr; s.style.left = this.x(yr) + 'px'; if (yr === 2026) s.className = 'now'; ax.appendChild(s); }
      this.plot.querySelectorAll('.wfg-yl,.wfg-mk').forEach(n => n.remove());
      ticks.forEach(p => { const s = document.createElement('span'); s.className = 'wfg-yl'; s.textContent = p.toLocaleString('de-DE') + ' %'; s.style.top = this.y(p) + 'px'; this.plot.appendChild(s); });
      MARKERS.forEach(m => { const b = document.createElement('button'); b.className = 'wfg-mk'; b.type = 'button'; b.setAttribute('aria-label', m.title); b.innerHTML = '<i></i>'; b.style.left = this.x(m.t) + 'px'; b.style.top = this.y(m.pct) + 'px';
        const show = on => { if (on) { this.card.querySelector('b').textContent = m.title; this.card.querySelector('p').textContent = m.body; const L = Math.min(W - 260, Math.max(0, this.x(m.t) - 20)); this.card.style.left = L + 'px'; this.card.style.top = Math.max(0, this.y(m.pct) - 140) + 'px'; } this.card.classList.toggle('on', on); };
        b.addEventListener('pointerenter', () => show(true)); b.addEventListener('pointerleave', () => show(false)); b.addEventListener('focus', () => show(true)); b.addEventListener('blur', () => show(false));
        b.addEventListener('click', e => { e.stopPropagation(); show(!this.card.classList.contains('on')); });
        this.plot.appendChild(b); });
    }
    cursor(t) { const g = this.svg.querySelector('[data-cur]'); if (!g) return; if (t == null) { g.style.display = 'none'; return; } const fut = t > NOW, p = fut ? lerp(FUT, t, 1) : lerp(PAST, t, 1); const x = this.x(t); g.style.display = ''; g.querySelector('[data-cl]').setAttribute('x1', x); g.querySelector('[data-cl]').setAttribute('x2', x); const cm = g.querySelector('[data-cm]'); if (this.msci) { cm.style.display = ''; cm.setAttribute('cx', x); cm.setAttribute('cy', this.y(fut ? lerp(MF, t, 1) : lerp(MP, t, 1))); } else cm.style.display = 'none'; const c = g.querySelector('[data-cd]'); c.setAttribute('cx', x); c.setAttribute('cy', this.y(p)); c.setAttribute('stroke', fut ? '#C9A55C' : '#E7E8E6'); }
    hover(e) { const r = this.plot.getBoundingClientRect(); if (!r.width) return; const k = (this.plot.offsetWidth || r.width) / r.width; const lx = (e.clientX - r.left) * k; const t = Math.min(this._tEnd != null ? this._tEnd : T1, Math.max(T0, T0 + lx / this.W * (T1 - T0))); this.cursor(t); this._hov = true; this.kpi(t); }
    kpi(t, instant) {
      const fut = t > NOW + 1e-6, pct = fut ? lerp(FUT, t, 1) : lerp(PAST, t, 1), eur = fut ? lerp(FUT, t, 2) : lerp(PAST, t, 2);
      const q = s => document.querySelector(s), P = q('[data-kpi-pct]'), E = q('[data-kpi-eur]'), D = q('[data-kpi-date]'), S = q('[data-kpi-sub]'), Y = q('[data-kpi-year]');
      this._t = t; if (P) P.textContent = fmtPct(pct);
      const Mx = q('[data-kpi-msci]'), Dx = q('[data-kpi-diff]'); if (Mx && Dx) { if (this.msci) { const mp = fut ? lerp(MF, t, 1) : lerp(MP, t, 1), me = fut ? lerp(MF, t, 2) : lerp(MP, t, 2), dd = pct - mp; Mx.textContent = 'MSCI World: ' + fmtPct(mp) + ' (' + fmtEur(me) + ')'; Dx.textContent = 'Differenz: ' + (dd >= 0 ? '+' : '−') + Math.abs(dd).toLocaleString('de-DE', { maximumFractionDigits: 1, minimumFractionDigits: 1 }) + ' Prozentpunkte'; Dx.style.color = dd >= 0 ? '#C9A55C' : '#C77E6E'; Mx.style.display = ''; Dx.style.display = this._hov ? '' : 'none'; } else { Mx.style.display = Dx.style.display = 'none'; } }
      if (D) D.textContent = fut ? fmtDate(t) + ' · Prognose' : fmtDate(t);
      if (S) { S.textContent = ''; S.style.display = 'none'; }
      const yc = YEAR[Math.floor(t + 1e-6)]; if (Y) { const neg = !fut && yc < 0; Y.textContent = neg ? 'Jahr: ' + fmtPct(yc) : ''; Y.style.display = neg && this._hov ? '' : 'none'; }
      if (E) { E.style.color = fut ? '#C9A55C' : '#E7E8E6'; if (P) P.style.color = fut ? '#C9A55C' : 'rgba(231,232,230,.85)'; cancelAnimationFrame(this._raf); const from = this.shown.eur == null ? eur : this.shown.eur, to = eur, t0 = performance.now(), dur = instant || matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 240;
        const step = now => { const u = dur ? Math.min(1, (now - t0) / dur) : 1, e2 = 1 - Math.pow(1 - u, 3), v = from + (to - from) * e2; this.shown.eur = v; E.textContent = fmtEur(v); if (u < 1) this._raf = requestAnimationFrame(step); }; this._raf = requestAnimationFrame(step); }
    }
  }
  customElements.define('wf-growth', WFGrowth);
})();
