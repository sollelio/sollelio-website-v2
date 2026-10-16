// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { indexablePaths } from './src/i18n/routes.ts';

// The inline theme script (Base.astro) is not hashed by Astro, so its hash is
// added to script-src here, computed from the same file that is inlined.
const themeInitHash = /** @type {`sha256-${string}`} */ (
  `sha256-${createHash('sha256')
    .update(readFileSync(new URL('./src/scripts/theme-init.js', import.meta.url)))
    .digest('base64')}`
);

export default defineConfig({
  site: 'https://sollelio.com',
  output: 'static',
  markdown: { syntaxHighlight: false },
  trailingSlash: 'never',
  build: {
    // `/events` is served from `events.html`, matching the live URL scheme.
    format: 'file',
  },
  i18n: {
    defaultLocale: 'pt-PT',
    locales: ['pt-PT', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    {
      // Decision 15: Newsreader italic may be tested for selective editorial
      // moments (the lived scenes), subject to visual review.
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: [400],
      styles: ['italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: { hashes: [themeInitHash] },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => indexablePaths.has(new URL(page).pathname.replace(/\/$/, '') || '/'),
      i18n: {
        defaultLocale: 'pt-PT',
        locales: { 'pt-PT': 'pt-PT', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
