# sollelio.com

The Sollelio website: company homepage, Sollelio Events, the Founding Design Partner
programme and, later, Sollelio Beauty OS. Strategy and decisions live in [`docs/`](docs/README.md);
this file covers running and editing the site.

**Status: complete local website, not yet deployed.** Homepage, Sollelio Events, the Founding
Design Partners programme, Sollelio Beauty OS, confirmation and privacy pages, in pt-PT and
English, light and dark. Forms are in demonstration mode (see "Forms"). Nothing here is deployed
to sollelio.com; the publishing blockers are listed in docs/08.

## Stack

Astro 7 (static output, no adapter) · TypeScript strict (TypeScript 6, required by `astro check`)
· Tailwind CSS 4 via `@tailwindcss/vite` · no UI framework · Netlify. Rationale in docs/05.

## Run

Requires Node 22.22 or newer. `.nvmrc` pins the 22.22 line used by CI and Netlify.

```sh
npm ci
npm run dev        # http://localhost:4321
npm run build      # astro check + static build into dist/ + CSP step (see below)
npm run preview    # serve dist/
```

## Checks

| Command                                 | What it verifies                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run check`                         | Types and content schemas (fails if `@astrojs/check` cannot load)                                                                                |
| `npm run lint` / `npm run format:check` | ESLint (Astro + TypeScript) and Prettier                                                                                                         |
| `npm run check:contrast`                | WCAG contrast of every text-token pair in light and dark; both dark blocks identical                                                             |
| `npm run test:e2e`                      | Playwright: no theme flash, theme persistence, language switch, hreflang, skip link, 404, console errors, axe in both themes, desktop and mobile |
| `npm run lhci`                          | Lighthouse budgets from docs/05 §6 (run after `build`)                                                                                           |
| `npm run check:placeholders`            | Go-live gate: no `[CONFIRMAR]` placeholder text in the built pages and no form left in demonstration mode (fails on purpose until launch)        |
| `npm run build:og`                      | Regenerates the social-sharing images in `public/og/` from the approved lockups                                                                  |
| `npm run verify`                        | Format, lint, contrast, build and end-to-end tests in one go                                                                                     |

Local tips: reuse an installed Chrome with `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e` and
`CHROME_PATH=$(which google-chrome-stable) npm run lhci`. To test a deploy preview, set
`BASE_URL=https://deploy-preview-…netlify.app` (Playwright) or `LHCI_URLS="…"` (Lighthouse).

### Dependency installation is project-scoped

The repository's `.npmrc` sets `legacy-peer-deps=false`. Project npm settings override user
settings, so a machine whose `~/.npmrc` has `legacy-peer-deps=true` still installs the same tree
as CI and Netlify, and `package-lock.json` always contains the required peer dependencies.

Why this matters: `@astrojs/check` loads `@astrojs/astro2tsx`, whose `@napi-rs/wasm-runtime`
declares `@emnapi/runtime` as a required **peer** dependency. With `legacy-peer-deps=true` npm
skips peers, so `@emnapi/runtime` was missing, `@astrojs/check` could not load, and the lockfile
it produced was rejected by `npm ci` under default settings. Astro then made it worse: when the
checker cannot load, `astro check` prints an error but exits with status 0
(`node_modules/astro/dist/cli/index.js`), so type checking silently did not run.

Two safeguards prevent a recurrence: the project `.npmrc` above, and
`scripts/require-checker.mjs`, which runs before `astro check` and fails the build if
`@astrojs/check` cannot be loaded. Never commit a lockfile produced with `--legacy-peer-deps`.

### Local preview from AI-agent shells

When Astro 7 detects an AI-agent shell it moves `astro preview` to the background. Playwright's
server command passes `--ignore-lock`, which keeps it in the foreground. If you start a preview
yourself from such a shell, stop it with `npx astro preview stop`.

## Structure

```
src/
  styles/tokens.css      design tokens: light, dark (explicit + system), product accents
  styles/global.css      Tailwind entry, token utilities, base styles
  config/site.ts         contact address, form mode and names, programme terms, founder facts
  content/pages/*.ts     page copy per locale (typed: English must mirror the Portuguese shape)
  content/faq, status    FAQ entries and the Events truth tiers (content collections)
  i18n/routes.ts         every page with its path per locale and whether it is indexable
  i18n/ui.ts             interface strings (pt-PT source, English must match its keys)
  layouts/Base.astro     <head>, no-flash theme script, header, footer, skip link
  scripts/theme-init.js  the inline theme script (its CSP hash is computed from this file)
  components/ui/         Button, Chip, Section, Rows, Faq, Field, PillGroup, ProductLockup
  components/site/       Header, Footer, Logo, LangSwitch, ThemeToggle, Seo
  components/product/    ProofFigure, PartnerForm, BeautyForm
  components/pages/      one component per page, rendered by the pt-PT and English routes
  content.config.ts      schemas: status tiers (with the evidence rule) and FAQ
  assets/                proof screenshot, Beauty OS screens, partner logos (optimised at build)
  pages/                 Portuguese at the root, English under en/
public/og/               social-sharing images (generated by scripts/build-og.mjs)
public/brand/            logo files served by the site (see "Brand files" below)
scripts/finalise-csp.mjs places and verifies the page CSP after the build
netlify.toml             build, redirects, security headers
.npmrc                   project npm settings (peer dependencies are installed)
```

## Brand files

The approved originals live in `references/branding/` and are never edited. The site serves:

| File in `public/`                           | Status                        | Source                                                                                                     |
| ------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `brand/sollelio-logo.svg`                   | Approved, byte-identical      | `sollelio-brand-assets-v0.1/…/sollelio-logo-horizontal-outlined.svg`                                       |
| `brand/sollelio-symbol.svg`, `favicon.svg`  | Approved, byte-identical      | `…/sollelio-symbol-color.svg`                                                                              |
| `brand/sollelio-logo-reverse.derived.svg`   | **Derived, pending approval** | `…/sollelio-logo-horizontal-reverse-outlined.svg` with only the `#11152D` background rectangle removed     |
| `brand/sollelio-symbol-reverse.derived.svg` | **Derived, pending approval** | `…/sollelio-symbol-color.svg` with the three indigo planes set to white, as in the approved reverse lockup |
| `favicon.ico`, `apple-touch-icon.png`       | Resized from approved         | `…/sollelio-avatar-1024.png` (32/16 px and 180 px)                                                         |

Files ending in `.derived.svg` must be approved as they are, or replaced by official exports,
before go-live.

## Forms

Both forms (partner application, Beauty OS interest) are controlled by `formMode` in
`src/config/site.ts`, currently `netlify`: each form carries `data-netlify="true"`, a honeypot
(`netlify-honeypot="website"`) and the hidden `form-name` Netlify needs for scripted posts. With
JavaScript the form validates inline and posts URL-encoded data to the page's own path, then
moves to the confirmation page (partners) or shows the inline confirmation (Beauty OS); without
JavaScript it posts natively and Netlify redirects to the form's `action`. On Netlify, enable
form detection for the site and set the notification inbox in the UI; nothing else is needed.
Accepting real submissions is still gated by the privacy page (docs/08, decision 6). `demo` mode
keeps the same journey but sends nothing. Attribution fields (`utm_*`, referrer, landing page,
language) are filled client-side and normally contain no personal data; the privacy policy covers
the case where a referrer or campaign tag does.

## Common edits

- **Change page copy:** edit `src/content/pages/<page>.ts`. Each file holds the Portuguese source
  and the English localisation under one type, so a missing English field fails `npm run check`.
- **Change a programme term (cohort, months, hours, response days):** edit `programme` in
  `src/config/site.ts` and the sentences that quote it in `content/pages/` and `content/faq/`.
- **Add a page:** register it in `src/i18n/routes.ts` (both paths), create `src/pages/<slug>.astro`
  and `src/pages/en/<slug>.astro` using `Base`, and set `indexable: true` only when its content is
  approved. The sitemap, `robots` meta, canonical and hreflang follow from the route map.
- **Change a colour:** edit `src/styles/tokens.css` (keep both dark blocks identical), then run
  `npm run check:contrast`.
- **Change a product's accent on a page:** pass `product="company" | "events" | "beauty"` to `Base`.
- **Add an interface string:** add the key to the Portuguese object in `src/i18n/ui.ts`; the type
  check fails until the English object has it too.

## Theme

Three states: system (default), light, dark. The choice is stored in `localStorage`
(`sollelio-theme`) and applied by an inline script before the first paint.

The theme script lives in `src/scripts/theme-init.js` and is inlined into `<head>` by `Base.astro`.

## Content Security Policy

Astro (`security.csp`) builds a per-page policy with hashes for the scripts and styles it emits.
Two things complete it:

- **The theme script is hashed too.** Astro does not hash `is:inline` scripts, so
  `astro.config.mjs` computes the hash of `src/scripts/theme-init.js` and adds it to
  `security.csp.scriptDirective.hashes`. Editing that file updates the hash automatically.
- **The policy comes first.** A `<meta>` policy only governs what the parser meets after it, and
  Astro writes it near the end of `<head>`, after the theme script and font styles. The last
  build step, `scripts/finalise-csp.mjs`, moves it to directly after `<meta charset>`. It then
  fails the build if an inline script or style has no matching hash, or if the page has a
  `style=` or `on…=` attribute, or a script from another origin.

The browser therefore enforces the policy on every script and style, locally as well as on
Netlify. The no-flash and console-error tests in `tests/e2e/` fail if the theme script is
blocked. `frame-ancestors` cannot be set in a `<meta>` policy, so `netlify.toml` sends it as a
header.

## Deployment

Netlify installs dependencies with `npm install` (which reads the project `.npmrc` and the
lockfile), builds `npm run build` and publishes `dist/`. Deploy previews for every pull request;
production only from `main`, and only after the go-live gate in docs/06. To verify on the
first deploy preview: the Node version actually used, `pretty_urls = false` taking effect, the
redirects in `netlify.toml` (no loops), trailing-slash behaviour (`/events/` → `/events`), the
security headers, the page CSP with no console violations, and that previews send
`X-Robots-Tag: noindex`.

## Lighthouse and placeholder pages

The SEO budget is a category score of 1 for every page. Pages marked `indexable: false` in
`src/i18n/routes.ts` are `noindex` on purpose, which fails exactly one Lighthouse audit
(`is-crawlable`). `lighthouserc.cjs` reads the route map and, for those pages only, replaces the
category assertion with every other SEO audit at score 1. Flipping a route to `indexable: true`
puts it back under the full category assertion with no config change.
