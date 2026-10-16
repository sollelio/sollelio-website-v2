// Runs after `astro build`. Astro writes the page's CSP <meta> near the end of
// <head>, and a <meta> policy only governs what the parser meets after it, so
// the inline theme script and font styles above it would run unchecked. This
// moves the policy to directly after <meta charset>, then fails the build if
// anything in the page is not allowed by it: an inline script or style without
// a matching hash, a style or event-handler attribute, or a script from
// another origin.
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const CHARSET = /<meta charset="utf-8">/i;
const CSP_META = /<meta http-equiv="content-security-policy" content="([^"]*)">/gi;

const htmlFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? htmlFiles(join(dir, e.name))
      : e.name.endsWith('.html')
        ? [join(dir, e.name)]
        : [],
  );

const sources = (policy, directive) =>
  new Set(
    policy
      .match(new RegExp(`(?:^|;)\\s*${directive} ([^;]*)`))?.[1]
      .trim()
      .split(/\s+/) ?? [],
  );

const digests = (text) =>
  ['sha256', 'sha384', 'sha512'].map(
    (alg) => `'${alg}-${createHash(alg).update(text, 'utf8').digest('base64')}'`,
  );

const failures = [];
const files = htmlFiles(dist);
if (files.length === 0) failures.push('no HTML files in dist/ (run astro build first)');

for (const file of files) {
  const name = relative(dist, file);
  const fail = (msg) => failures.push(`${name}: ${msg}`);
  let html = readFileSync(file, 'utf8');

  const metas = [...html.matchAll(CSP_META)];
  if (metas.length !== 1) {
    fail(`expected one CSP <meta>, found ${metas.length}`);
    continue;
  }
  const [tag, policy] = metas[0];
  const charset = html.match(CHARSET);
  if (!charset) {
    fail('no <meta charset="utf-8">');
    continue;
  }
  html = html.replace(tag, '');
  const at = html.search(CHARSET) + charset[0].length;
  html = html.slice(0, at) + tag + html.slice(at);

  // Nothing that loads or runs code may precede the policy.
  const policyAt = html.indexOf(tag);
  const firstResource = html.search(/<(script|style|link)\b/i);
  if (firstResource !== -1 && firstResource < policyAt)
    fail('a script, style or link precedes the CSP');

  const scriptSrc = sources(policy, 'script-src');
  const styleSrc = sources(policy, 'style-src');
  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const src = attrs.match(/\bsrc="([^"]*)"/)?.[1];
    // Data blocks (JSON-LD) are never executed, so the policy does not apply to them.
    if (/\btype="application\/ld\+json"/.test(attrs)) continue;
    if (src !== undefined) {
      if (!src.startsWith('/') || src.startsWith('//')) fail(`script from another origin: ${src}`);
    } else if (!digests(body).some((d) => scriptSrc.has(d))) {
      fail(`inline script not hashed in script-src: ${body.trim().slice(0, 60)}…`);
    }
  }
  for (const [, body] of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    if (!digests(body).some((d) => styleSrc.has(d))) {
      fail(`inline style not hashed in style-src: ${body.trim().slice(0, 60)}…`);
    }
  }
  const markup = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  for (const [attr] of markup.matchAll(/<[a-z][^>]*?\s(style|on[a-z]+)\s*=/gi)) {
    fail(`inline attribute not allowed by the CSP: ${attr.slice(0, 80)}`);
  }

  writeFileSync(file, html);
}

if (failures.length) {
  console.error(`CSP check failed:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`CSP moved to the top of <head> and verified in ${files.length} pages.`);
