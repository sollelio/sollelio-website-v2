// Fails when visible text in the built site still contains a placeholder
// such as [CONFIRMAR] or a bracketed note, or when a form is still in
// demonstration mode (src/config/site.ts). Run after `astro build`; this is
// the M1 go-live gate from docs/06.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(root);

const pattern = /CONFIRMAR|\[(?:[A-ZÀ-Ý][^\]<>]{2,})\]/u;
let found = 0;
for (const file of files) {
  const text = readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, '\n');
  if (/data-form-mode="demo"/.test(readFileSync(file, 'utf8'))) {
    found++;
    console.error(`✗ ${file.slice(root.length)}: a form is still in demonstration mode`);
  }
  for (const line of text.split('\n')) {
    if (pattern.test(line)) {
      found++;
      console.error(`✗ ${file.slice(root.length)}: ${line.trim().slice(0, 120)}`);
    }
  }
}
if (found) {
  console.error(`\n${found} placeholder(s) found in the built site.`);
  process.exit(1);
}
console.log(`✓ No placeholders in ${files.length} built pages.`);
