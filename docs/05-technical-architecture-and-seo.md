# 05 · Technical architecture, Netlify deployment, localisation, SEO foundation and testing

**Status.** Recommendation for your review. Source tags as in `01`. Facts about tool versions and plans were verified against official documentation on 16 October 2026 and are tagged `[VERIFIED]`; the full fact sheet with URLs is in `docs/research/stack-facts.md` and summarised here.

---

## 1. Stack decision

Your preference (Astro, TypeScript, Tailwind, static generation, minimal client JavaScript, Netlify) holds up. The current site already runs on Astro on Netlify `[LIVE]`, which lowers migration risk. I challenged it on the details below and kept the core.

| Layer | Recommendation | Why | Alternatives rejected |
| --- | --- | --- | --- |
| Framework | **Astro 7.x**, `output: 'static'` `[VERIFIED: 7.4.0, 15 Oct 2026]` | Zero JS by default, built-in i18n routing, stable Fonts API, image pipeline, content collections. Already proven on this site. | Next.js or Nuxt (server runtime and framework JS for a site with no application logic); Eleventy (fine, but no i18n, fonts or images built in); Webflow or Framer (recurring cost, weaker dark mode and i18n, performance ceiling, vendor lock-in). |
| Language | **TypeScript**, `astro/tsconfigs/strict` | Typed content schemas and props catch copy and link errors at build. | Plain JS: no gain. |
| Styling | **Tailwind CSS 4.x via `@tailwindcss/vite`** with CSS-first `@theme` tokens `[VERIFIED: 4.3.3; the old `@astrojs/tailwind` integration is deprecated]` | Design tokens live in one CSS file and double as utilities; dark mode via `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *))`. | Hand-written CSS only (viable, but tokens plus utilities speed up a small team); CSS-in-JS (needs client JS). |
| UI framework | **None.** Astro components only. | The site has three interactive behaviours (theme, menu, form enhancement), all a few lines of vanilla TypeScript. | React or Svelte islands: unnecessary weight. |
| Hosting | **Netlify**, static deploy from Git | Required by you; deploy previews, forms, redirects and headers cover every need without a backend. | — |
| Forms | **Netlify Forms** with honeypot and Akismet, success redirect to the thank-you page `[VERIFIED]` | No backend, no secrets, email notifications and CSV export included. | Netlify Function plus Resend plus Turnstile (kept as the fallback if Forms proves limiting). |
| Analytics | **Cookieless, privacy-first analytics with custom events** (see §9) | Needed to measure the programme funnel; no consent banner for cookieless aggregate analytics (verify with lawyer). | GA4 (cookies, consent, overkill); PostHog (first-party cookie by default). |

**Rendering.** Static only. There is no personalised content, no authentication and no dynamic data. Server-side rendering would add a runtime, a cost line and a failure mode for no benefit. If a future need appears (for example a partner portal), Astro supports per-route on-demand rendering with an adapter, so the decision is reversible.

**Adapter.** Not needed for a static site `[VERIFIED]`. The `@astrojs/netlify` adapter adds Netlify Image CDN (request-time image transforms), Astro-config redirects and static headers. I recommend starting without it: images are few, build-time `sharp` optimisation is enough, and redirects and headers live in `netlify.toml` anyway. Add the adapter only if image volume grows.

**Notable version facts that affect a greenfield start `[VERIFIED]`.** Node 22.22 or newer is required. Astro 7 uses a Rust compiler that errors on unclosed tags and collapses inline whitespace by default. `astro check` does not support TypeScript 7 and is slated for deprecation; pin `typescript@6` for now and watch the successor tooling. The Fonts API is stable (top-level `fonts` config, `<Font />` component with `preload`).

---

## 2. Repository and content architecture

```
src/
  content.config.ts         # collections: pages copy, status tiers, faq, programme
  content/
    status/events.json      # the four truth tiers: single source of truth
    faq/events.pt-PT.json   # FAQ per product and locale
    faq/events.en.json
  i18n/
    ui.pt-PT.ts, ui.en.ts   # UI strings (nav, buttons, form labels, errors)
    utils.ts                # getLangFromUrl, useTranslations, path helpers
  layouts/Base.astro        # html lang, head, theme script, header, footer, skip link
  components/
    primitives/  Button, Chip, Eyebrow, Section, Card, Faq, Field, Pills
    site/        Header, Footer, ThemeToggle, LangSwitch, Seo, ProductBar
    product/     ProofFigure, StatusBoard, ProgrammeSummary, ApplicationForm, Scene
  pages/
    index.astro, events.astro, beauty-os.astro, privacidade.astro, 404.astro
    events/design-partners.astro, events/design-partners/obrigado.astro
    en/ (mirrors; same slugs for product and programme pages, localised slugs for thank-you and privacy)
  styles/tokens.css          # @theme tokens, light/dark variables, product accents
public/ brand/ (lockups, symbols) · og/ (per-page social images) · favicon files
netlify.toml                 # build, redirects, headers, forms config
```

**Principles.**

- **One source of truth for product status.** The four truth tiers are data (`status/events.json`), rendered on `/events` and summarised on the homepage. Changing a capability's tier is a one-line edit, and nothing can drift between pages.
- **Copy as content, not as markup.** Page copy for each locale lives in typed content files; components receive text as props. Translators (or you) edit one file per page per language.
- **Accent by context.** `<body data-product="company|events|beauty">` switches the accent custom properties; components never hard-code product colours.
- **Shared layout, product-specific composition.** Pages assemble product components in different orders; they do not share a rigid template.

---

## 3. Internationalisation and URLs

- Astro i18n: `defaultLocale: 'pt-PT'`, `locales: ['pt-PT', 'en']`, `routing.prefixDefaultLocale: false` `[VERIFIED defaults]`. This reproduces the live scheme exactly (`/` Portuguese, `/en/...` English) and keeps existing URLs stable `[LIVE]`.
- Same slugs in both languages for product and programme pages (`/events/design-partners` and `/en/events/design-partners`); localised slugs for the thank-you and privacy pages, as decided in `03`.
- Translated UI strings follow the official recipe (`useTranslations(lang)` with Portuguese fallback) `[VERIFIED]`. Missing English strings fall back to Portuguese at build and fail `astro check` if typed as required.
- `build.format: 'file'` so URLs have no trailing slash, matching current behaviour; Netlify "pretty URLs" post-processing stays off `[VERIFIED: pretty URLs rewrite to trailing slashes]`. Add 301s from `/index.html` and `/events.html` to their clean URLs.
- `hreflang` is emitted twice: `<link rel="alternate">` in each page head and `xhtml:link` in the sitemap (via `@astrojs/sitemap` i18n options), as today `[LIVE]`.
- No browser-language auto-redirect. Netlify's language redirects read only the first `Accept-Language` value `[VERIFIED]` and would send Portuguese users with English browsers to `/en`. A visible language switch is enough.

---

## 4. Theme (light and dark)

- `data-theme` attribute on `<html>` with three states: `system` (default, no attribute, follows `prefers-color-scheme`), `light`, `dark`. The choice persists in `localStorage`.
- An inline script in `<head>`, before any CSS paints, reads the stored choice and sets the attribute; this is the documented way to avoid a flash of the wrong theme `[VERIFIED: Tailwind dark-mode guidance]`. It is the only render-blocking script and is under 300 bytes.
- `color-scheme: light dark` on the root so form controls and scrollbars follow; `<meta name="theme-color">` emitted twice with `media="(prefers-color-scheme: ...)"` and updated by the toggle.
- The switcher is a three-option segmented control with `role="group"` and `aria-pressed`, keyboard operable, in the header (icon on mobile) and the footer (full labels). Design in `04`.
- Images: product screenshots keep their native light appearance inside a card; photographs receive no inversion; the dark theme is a designed palette (Midnight Indigo ground, raised surfaces, lightened accents), not a filter. Token values in `04`.
- Reduced motion: all transitions and reveals sit behind `@media (prefers-reduced-motion: no-preference)`.

---

## 5. Forms and data handling

**Primary path: Netlify Forms** `[VERIFIED]`.

- Enable form detection in the Netlify UI, then deploy. Markup: `<form name="design-partners" method="POST" action="/events/design-partners/obrigado" data-netlify="true" netlify-honeypot="website">` with a unique name per form (`design-partners`, `design-partners-en`, `beauty-os-contact`).
- Spam: Akismet on every submission plus the honeypot field; no CAPTCHA at launch. Add reCAPTCHA v2 (supported natively) or move to the function path with Turnstile only if spam becomes a problem.
- Progressive enhancement: the form submits without JavaScript; with JavaScript it validates inline and posts via `fetch`, keeping the user's input on failure and showing the email alternative.
- Attribution: hidden fields (`utm_source`, `utm_medium`, `utm_campaign`, `referrer`, `landing`, `lang`) filled client-side; no personal data beyond what the applicant types.
- Notifications: email to you on each submission; CSV export from the Netlify dashboard. Data stays in Netlify; retention policy to be written into the privacy page (see `07`).
- Quotas depend on the account's plan type `[VERIFIED]`: on credit-based plans forms are free and unlimited; on legacy plans (accounts created before September 2025) the free level is 100 submissions per site per month. Check which applies to the Sollelio account before launch (`07`).

**Fallback path.** A Netlify Function (`netlify/functions/apply.mts`) that validates, verifies a Cloudflare Turnstile token (free) and sends two emails via Resend (free tier 3,000/month, requires a verified domain) `[VERIFIED]`. Needs one secret (`RESEND_API_KEY`) in Netlify environment variables. Only if Forms proves limiting.

**Secrets and environment.** The launch configuration needs no secrets at all. If the function path is adopted later: secrets live only in Netlify environment variables (never in the repo), Netlify's secret scanning stays enabled, and `.env.example` documents names without values. Note that scoping variables to functions only is a Pro-plan feature `[VERIFIED]`; on free plans variables apply to all scopes, which is acceptable for one key.

---

## 6. Images, fonts and performance budgets

**Images.** `astro:assets` with build-time `sharp`; AVIF and WebP with JPEG fallback for photographs; WebP for screenshots; explicit `width` and `height` everywhere; `<Image priority>` on the LCP image (sets `fetchpriority="high"` and eager loading) `[VERIFIED]`; all others lazy. Target: hero photograph under 180 KB at 1440 px, screenshots under 60 KB each. Per-page social images (1200×630) as static PNGs under `public/og/`.

**Fonts.** Astro Fonts API with the `fontsource` provider `[VERIFIED]`: Manrope variable (one `latin` woff2, about 25 KB), IBM Plex Mono static 400 and 500 (about 15 KB each; no variable version exists), and, if approved in `04`, Newsreader italic. The Google `latin` subset covers every Portuguese glyph (U+00C0–00FF included), so `latin-ext` is unnecessary `[VERIFIED]`. Preload the Manrope file; `font-display: swap`; `optimizedFallbacks` on so Arial is metric-adjusted and CLS stays at zero. The proposed set weighs about 55 KB (plus roughly 20 KB if the optional italic serif is approved), which is why the font budget below sits under the live site's current 98 KB.

**Budgets (per page, mobile, lab).** Set at the live site's current level and enforced in CI:

| Metric | Budget | Live today `[MEASURED]` |
| --- | --- | --- |
| Lighthouse Performance / Accessibility / Best Practices / SEO | ≥ 95 / 100 / 100 / 100 | 97–100 / 100 / 100 / 100 |
| LCP | ≤ 1.8 s | 1.6–1.7 s |
| CLS | 0 | 0 |
| TBT | ≤ 50 ms | 10–40 ms |
| JavaScript (compressed) | ≤ 25 KB | ~3 inline scripts |
| Fonts | ≤ 80 KB | ~98 KB (eight files) |
| Total transfer, landing pages | ≤ 300 KB | 131–159 KB |

Core Web Vitals thresholds for reference: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 `[VERIFIED]`.

---

## 7. Quality gates and testing

| Gate | Tool | When |
| --- | --- | --- |
| Types and content schemas | `astro check` (TypeScript 6) | Every build (`astro check && astro build`) |
| Lint and format | ESLint (astro plugin), Prettier | Pre-commit and CI |
| Accessibility | `pa11y-ci` or `axe-core` via Playwright on the six key URLs in both themes | CI on every pull request against the deploy preview |
| Performance budgets | Lighthouse CI (`@lhci/cli`) against the deploy preview, assertions from the table above | CI on every pull request |
| Functional smoke | Playwright: navigation, language switch keeps the page, theme toggle persists and has no flash, form validation and successful submit (intercepted), 404 | CI on every pull request |
| Links and HTML | `linkinator` on the built site; HTML validation | CI |
| Visual review | Netlify Deploy Preview URL per pull request (0 credits) `[VERIFIED]` | Every pull request |

GitHub Actions runs the checks; Netlify builds the preview. Production deploys only from `main`.

---

## 8. Netlify configuration and plan

- `netlify.toml`: build command, publish directory, Node version, redirects (`/index.html` and `/events.html` → clean URLs, 301; `www` handled by setting the apex as primary domain), security headers (`Content-Security-Policy` allowing self plus the analytics host, `Referrer-Policy`, `Permissions-Policy`, `X-Content-Type-Options`), long-lived caching for hashed assets, `noindex` header for the thank-you page.
- Branch deploys for a `staging` branch if you want a stable review URL; deploy previews for every pull request.
- **Plan check (high priority, see `07`)** `[VERIFIED]`: Netlify's current Free plan is credit-based with a hard cap of 300 credits per month (production deploy 15 credits, 20 credits per GB of bandwidth). When credits run out, every site on the account shows "Site not available" until the next cycle. For a company's production domain that risk is unacceptable. If the Sollelio account is on the credit-based Free plan, the Personal plan (USD 9/month, 1,000 credits, rechargeable) is the minimum I would recommend; this is a paid service and needs your approval. If the account is a legacy plan (created before September 2025), the old limits apply (100 GB bandwidth, 300 build minutes, 100 form submissions per month) and no change is needed for launch.

---

## 9. Measurement

Requirements: cookieless, EU-friendly, custom events for the application funnel, no consent banner. Options verified on 16 Oct 2026 `[VERIFIED]`:

| Option | Cost | Custom events | Notes |
| --- | --- | --- | --- |
| Umami Cloud Hobby | Free (1 site, 100k events/month, 6-month retention) | Yes | Cookieless; upgrade USD 20/month |
| Plausible Cloud | USD 9/month (10k pageviews) | Yes | Cookieless; 30-day trial; EU-based vendor `[HYP]` |
| Cloudflare Web Analytics | Free | Not verified `[HYP]` | Cookieless beacon, no DNS change needed; reports Web Vitals |
| Netlify Web Analytics | Included on credit plans | No | Free tier keeps one day of history, so it is not useful |
| GoatCounter | Free for reasonable use | Yes, event counting `[HYP]` | Open source, no cookies |

Recommendation `[REC]`: start with Umami Cloud Hobby (free, custom events) or Plausible if you prefer a paid EU vendor with support; either needs your approval if paid. Events to track are listed in `03 §5.8`. Add Cloudflare Web Analytics alongside for field Web Vitals if desired. Legal note: the EDPB's 2023 guidelines place even IP-based measurement within the ePrivacy rule, but cookieless aggregate analytics does not automatically require consent; CNPD guidance on cookieless analytics could not be found `[UNVERIFIED]`. The privacy page should disclose the tool; confirm with a lawyer whether a banner is needed (`07`).

Search Console (Google) and Bing Webmaster Tools from day one: submit the sitemap, monitor coverage, queries (Portuguese vs English) and the "solelio" misspelling.

---

## 10. SEO foundation

### 10.1 Technical

- One `<Seo>` component per page: title (≤ 60 characters, brand suffix), description (≤ 155), canonical, hreflang trio, Open Graph with page-specific image and `og:image:alt`, Twitter card, `og:locale` and alternate.
- Semantic HTML: one `h1` per page, landmarks, lists for lists, `<figure>` and `<figcaption>` for proof images, `<details>` for FAQ (works without JavaScript).
- Structured data (JSON-LD), kept truthful: `Organization` with `founder` as a full `Person` (name, `sameAs` LinkedIn), `logo`, `email`, `areaServed: PT`; `WebSite`; `SoftwareApplication` for each product with `applicationCategory: BusinessApplication`, `operatingSystem: Web`, and no `offers` or ratings until terms exist; `FAQPage` on `/events` and the programme page (Google now shows FAQ rich results mainly for authoritative sites, so the value is semantic rather than visual). `BreadcrumbList` on product sub-pages.
- Sitemap with hreflang; `robots.txt` allowing all and pointing to the sitemap; thank-you page `noindex`; 404 returns a real 404 status (Netlify does this for `404.html`).
- Redirects as in `03 §1.3`.

### 10.2 Market and search research (summary of `docs/research/market-and-seo-research.md`)

**Evidence.**

- Portuguese vendors name the beauty category around *faturação* and *gestão* ("Software de Faturação para Cabeleireiros", "Facturação e Gestão para Cabeleireiros e Institutos de Beleza") and use *marcações*, *stock*, *comissões*, *controlo de caixa*. International booking tools (Fresha, Treatwell, Booksy) use *agendar*; Fresha serves Brazilian Portuguese to Portugal. Brazilian vendors dominate generic "software para salão de beleza" results with *estoque* and *fechamento de caixa*.
- The only Portuguese-language events-operations product found is Caterfy ("Gestão de Eventos e Catering"), catering-centric, with vocabulary such as *orçamentos*, *ementas*, *fichas técnicas*, *capitações*. For the international tools checked (HoneyBook, Dubsado, Aisle Planner, Tripleseat) no Portuguese-language offering was seen; Portuguese availability was not verified for all of them.
- Google autocomplete (pt-PT, Portugal, 16 Oct 2026): "software para salão de beleza" suggests "gratuito" and "gestão" variants; "software gestão de eventos" suggests only generic and "grátis" variants; "software para empresas de catering" returns no suggestions; "software para empresas de eventos" was not queried and is assumed thin `[HYP]`. These are observations, not volumes.
- Certified invoicing: Portaria 22-A/2012 obliges businesses above its thresholds to issue invoices only with AT-certified software (the thresholds have changed since 2012 and must be checked with the contabilista); a product that records payments but does not issue invoices must not claim certified invoicing.

**Hypotheses to validate with Search Console, Keyword Planner and owner interviews.**

- Events owners search by trade ("software catering", "programa gestão de eventos", "orçamentos para eventos") rather than "software para empresas de eventos".
- Salon owners search "software gestão salão de beleza", "software para barbearias", "programa cabeleireiro", with strong free-tier intent.
- Slug language (`/events` vs `/eventos`) is a weak ranking signal compared with title, H1, body and hreflang; keeping `/events` avoids redirect churn.

**Recommendations `[REC]`.**

- `/events` title and H1 family: "Sollelio Events — Software de gestão para empresas de eventos" (title), with the promise headline as H1 and category sub-labels (catering, organização de eventos, decoração e aluguer, espaços e quintas, wedding planners) in the first screen. The title uses the category word people search for ("gestão") while the brand voice keeps "operações" in the H1 and body: a deliberate split between findability and positioning.
- `/beauty-os` title: "Sollelio Beauty OS — Gestão para salões de beleza e barbearias"; answer the invoicing boundary and the pricing question explicitly in a short FAQ once decided.
- Use pt-PT vocabulary consistently (see `02 §5`); avoid Brazilian forms that would signal a foreign product.
- No programmatic pages, no comparison pages with unverified competitor facts, no keyword stuffing. One honest page per product, one programme page, done well.

### 10.3 Internal linking

Header and footer link to both products and the programme from every page. The homepage links to each product once in the hero and once in the products section. `/events` links to the programme page from the hero, the programme summary and the closing section. The programme page links back to `/events` and to the FAQ. Beauty OS links to the homepage and to Events only through global navigation, so product pages stay distinct.

---

## 11. Trade-offs made explicit

| Decision | Benefit | Cost or risk | Reversible? |
| --- | --- | --- | --- |
| Static only, no adapter | Zero runtime cost, maximal speed, no secrets | No request-time image CDN; adding on-demand routes later needs an adapter | Yes |
| Netlify Forms | No backend, no secrets, included | Plan-dependent quota; data lives in Netlify; limited validation server-side | Yes (function path ready) |
| Same slugs in both languages | Simple routing and redirects | English slugs on Portuguese pages (`/events/design-partners`) | Yes, with 301s |
| Container-independent tokens in CSS | One place for brand and dark mode | Requires discipline: no hard-coded colours in components | — |
| Pin TypeScript 6 | `astro check` keeps working | Lagging TypeScript 7 until Astro's successor tooling matures | Yes |
| Umami Cloud Hobby | Free, cookieless, custom events | Single site limit; retention 6 months; vendor hosting location to confirm | Yes |
