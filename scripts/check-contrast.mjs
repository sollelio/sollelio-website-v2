// Verifies WCAG contrast for every text-token pair in src/styles/tokens.css,
// in light and dark, and that the two dark blocks (explicit and system) match.
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

function block(marker) {
  const start = css.indexOf(`/* @tokens ${marker}`);
  if (start < 0) throw new Error(`Marker "@tokens ${marker}" not found`);
  const open = css.indexOf('{', css.indexOf('\n', start));
  let depth = 0;
  for (let i = open; i < css.length; i++) {
    if (css[i] === '{') depth++;
    if (css[i] === '}' && --depth === 0) return css.slice(open + 1, i);
  }
  throw new Error(`Unclosed block for ${marker}`);
}

function vars(text) {
  const out = {};
  for (const m of text.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g))
    out[m[1]] = m[2].replace(/\/\*.*?\*\//g, '').trim();
  return out;
}

function parse(value) {
  const hex = value.match(/^#([0-9a-f]{6})$/i);
  if (hex) return { rgb: [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16)), a: 1 };
  const rgb = value.match(/^rgb\(\s*(\d+)\s+(\d+)\s+(\d+)\s*(?:\/\s*([\d.]+))?\s*\)$/);
  if (rgb)
    return { rgb: rgb.slice(1, 4).map(Number), a: rgb[4] === undefined ? 1 : Number(rgb[4]) };
  throw new Error(`Unsupported colour: ${value}`);
}

const over = (top, base) => top.rgb.map((c, i) => c * top.a + base[i] * (1 - top.a));
const lum = (rgb) => {
  const [r, g, b] = rgb.map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const light = vars(block('light'));
const darkExplicit = vars(block('dark (explicit choice)'));
const darkSystem = vars(block('dark (system preference)'));

let failures = 0;
const mismatch = Object.keys({ ...darkExplicit, ...darkSystem }).filter(
  (k) => darkExplicit[k] !== darkSystem[k],
);
if (mismatch.length) {
  failures++;
  console.error(`✗ Dark blocks differ for: ${mismatch.join(', ')}`);
} else {
  console.log('✓ Dark blocks (explicit and system) are identical');
}

const text = 4.5;
const ui = 3;
const pairs = [
  ['--ink', '--bg', text],
  ['--ink', '--bg-2', text],
  ['--ink', '--bg-3', text],
  ['--ink-2', '--bg', text],
  ['--ink-2', '--bg-2', text],
  ['--ink-3', '--bg', text],
  ['--ink-3', '--bg-2', text],
  ['--company', '--bg', text],
  ['--events', '--bg', text],
  ['--beauty', '--bg', text],
  ['--company', '--bg-2', text],
  ['--events', '--bg-2', text],
  ['--beauty', '--bg-2', text],
  ['--on-company', '--company-solid', text],
  ['--on-events', '--events-solid', text],
  ['--on-beauty', '--beauty-solid', text],
  ['--link', '--bg', text],
  ['--link-hover', '--bg', text],
  ['--tier-original-ink', '--tier-original-bg', text],
  ['--tier-v2-ink', '--tier-v2-bg', text],
  ['--tier-dev-ink', '--tier-dev-bg', text],
  ['--tier-explore-ink', '--tier-explore-bg', text],
  ['--focus', '--bg', ui],
  ['--focus', '--bg-2', ui],
];

for (const [name, palette] of [
  ['light', light],
  ['dark', darkExplicit],
]) {
  const ground = parse(palette['--bg']).rgb;
  // Translucent surfaces are composited over the card surface they sit on.
  const card = over(parse(palette['--bg-2']), ground);
  for (const [fg, bg, min] of pairs) {
    if (!palette[fg] || !palette[bg]) {
      failures++;
      console.error(`✗ ${name}: missing ${!palette[fg] ? fg : bg}`);
      continue;
    }
    const base = bg.startsWith('--tier') ? card : ground;
    const b = over(parse(palette[bg]), base);
    const f = over(parse(palette[fg]), b);
    const r = ratio(f, b);
    const ok = r >= min;
    if (!ok) failures++;
    console.log(
      `${ok ? '✓' : '✗'} ${name.padEnd(5)} ${fg} on ${bg}: ${r.toFixed(2)}:1 (min ${min})`,
    );
  }
}

if (failures) {
  console.error(`\n${failures} contrast check(s) failed.`);
  process.exit(1);
}
console.log('\nAll contrast checks passed.');
