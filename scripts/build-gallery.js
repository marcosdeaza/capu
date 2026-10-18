// One animated SVG per scene (assets/scenes/<name>.svg) plus PNG-free stills, for the README and docs.
//   node scripts/build-gallery.js
const C = require('../src/capu.js');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'assets', 'scenes');
fs.mkdirSync(OUT, { recursive: true });

// evolve needs two forms: the gallery shows Liquid turning into Solid
const FORM = { evolve: ['solid', 'liquid'] };
function animated(name, px) {
  const [form, from] = FORM[name] || [];
  const box = C.centeredBox([name], 1, form ? [from, form] : undefined);
  const frames = C.SCENES[name].frames.map((f, i) => [f[0], C.frameAt(name, i, form, from)]);
  const total = frames.reduce((a, f) => a + f[0], 0);
  let t = 0, groups = '', css = '';
  frames.forEach(([ms, g], k) => {
    const a = (t / total * 100).toFixed(3), b = ((t + ms) / total * 100).toFixed(3);
    t += ms;
    const inner = C.toSVG(g, { px: 1, crop: box }).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
    groups += `<g class="f${k}" visibility="${k === 0 ? 'visible' : 'hidden'}">${inner}</g>`;
    css += `.f${k}{animation:k${k} ${total}ms step-end infinite}@keyframes k${k}{0%,${a}%{visibility:hidden}${a}%,${b}%{visibility:visible}${b}%,100%{visibility:hidden}}`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${box.w} ${box.h}" width="${box.w * px}" height="${box.h * px}" shape-rendering="crispEdges" role="img"><title>Capu: ${name}</title><style>${css}@media (prefers-reduced-motion:reduce){g[class]{animation:none!important}}</style>${groups}</svg>`;
}
const names = Object.keys(C.SCENES);
for (const n of names) fs.writeFileSync(path.join(OUT, `${n}.svg`), animated(n, 5));
console.log(names.length, 'animated scenes in', OUT);
