# 06 · Implementation roadmap

**Status.** Proposed plan, pending your approval. No implementation has started. Effort figures are estimates in focused working days for one experienced developer working with Claude Code; treat them as `[HYP]`.

---

## 0. Sequencing logic

The commercial objective is Founding Design Partner recruitment, so the Events product page, the application page and the form ship first, on a foundation that will carry everything else. The current site stays live untouched until the new site is approved on a preview URL and you authorise the domain switch. Beauty OS and the full homepage follow once their facts are verified, because publishing them half-verified would undermine the honesty the whole site is built on.

```
M0 Foundations ──► M1 Events + Candidatura + privacy + provisional home ──► GO-LIVE (approval)
                                                                             │
                              M2 Full homepage + Beauty OS + English ◄───────┘
                                                                             │
                              M3 Refinement from real data and feedback ◄────┘
```

---

## M0 · Foundations

**Scope.** Repository scaffold (Astro 7, TypeScript strict, Tailwind 4 via Vite plugin), `tokens.css` from the Fundações board, base layout (head, header, footer, skip link, theme script, language switch), i18n plumbing with Portuguese default and English under `/en`, content collections and schemas (page copy, status tiers, FAQ), font pipeline (Manrope, IBM Plex Mono), image pipeline, `netlify.toml` (redirects, headers, forms), Netlify project connected to the repository with deploy previews, CI (astro check, lint, Lighthouse CI, pa11y, Playwright smoke), `README` with run and content-editing instructions.

**Acceptance criteria.**

- A deploy preview renders a placeholder page in both languages and both themes with no theme flash (verified by a Playwright test that loads with `prefers-color-scheme: dark` and a stored `light` preference and asserts the first painted background).
- Lighthouse CI passes the budgets in `05 §6` on the placeholder page.
- `astro check`, ESLint and Prettier run clean in CI; a failing check blocks the merge.
- Tokens in `tokens.css` match the Fundações board values exactly; dark and light pass automated contrast checks for text tokens.
- Existing URL scheme preserved (`/`, `/en`, `/events`, `/en/events`), trailing-slash behaviour unchanged, `/index.html` and `/events.html` redirect.

**Verification gate.** Code review of the scaffold; CI green; you confirm the Netlify project and plan (see `07`).

**Effort.** 3–4 days.

---

## M1 · The recruitment release

**Scope.** `/events` (Portuguese), `/events/design-partners`, `/events/design-partners/obrigado`, `/privacidade`, `404`, and a provisional homepage built in the new system that presents the company with both products truthfully but without the full Beauty OS page (the Beauty OS card links to a short "em breve" statement or to contact, as decided in `07`). Netlify Forms live with honeypot and notifications. Analytics with the funnel events from `03 §5.8`. Per-page social images for the shipped pages. Structured data for Organization, WebSite, the Events product and the FAQ. English versions of every page shipped in this milestone (`/en`, `/en/events`, the programme page, thank-you and privacy), because `/en` and `/en/events` are already indexed with reciprocal hreflang and must not disappear between releases; the existing English copy is the starting point. Sitemap, robots and complete hreflang for the shipped pages.

**Content prerequisites (from `07`, P0).** Programme naming; programme terms (places or none, hours, duration, conditions, exit) or the explicit decision to state none; status-tier content reviewed line by line against the tier-1 evidence rule; Do Luxo à Mesa authorisation and the decision on screenshots (demonstration or blurred data); privacy policy text; founder facts.

**Acceptance criteria.**

- Every `[CONFIRMAR]` placeholder is resolved or the sentence removed; a CI grep for `CONFIRMAR` and `[` placeholder patterns in content files fails the build.
- The application form submits without JavaScript and with JavaScript; a test submission arrives by email and appears in the Netlify dashboard; spam honeypot verified; thank-you page returns `noindex`.
- Analytics shows page view, form start, form submit and thank-you events for a test session; UTM attribution recorded.
- All pages pass Lighthouse budgets on mobile and desktop and pa11y with zero errors in both themes; keyboard-only run through the application journey succeeds; screen-reader pass on the form (labels, errors, required states).
- Every tier-1 line on the status board is backed by an authorised screenshot or your written confirmation; no proposal copy remains in tier 1.
- No screenshot shows real client data; captures are demonstration data or blurred, with the authorisation on file.
- Copy reviewed by a native pt-PT reader against the lexicon in `02 §5`; no Brazilian forms; no scarcity or present-tense V2 claims (manual checklist).
- Visual review of every page at 390, 768, 1280 and 1440 px in both themes against the canvas.
- Redirect map from `03 §1.3` verified on the preview with the Netlify redirect playground or curl.

**Verification gate (go-live).** Your explicit approval on the preview URL; legal sign-off on the privacy page; the Netlify plan confirmed; then the domain is pointed at the new project and the old project is kept for rollback for two weeks. Search Console: sitemap resubmitted; coverage checked after 48 hours and after two weeks.

**Effort.** 6–8 days plus your content turnaround.

---

## M2 · The company release

**Scope.** Full homepage as designed (two products as peers, method, origin, founder), `/beauty-os` once claims are verified and real screenshots exist, English version of the Beauty OS page and a localisation review of all English pages (with the first-screen note that the programme is Portugal-only), Beauty OS contact form or email action as decided, Beauty OS structured data, English social images.

**Content prerequisites.** Beauty OS capability verification and screenshots; Salão Agradável permission; invoicing-boundary wording confirmed; English copy review.

**Acceptance criteria.** Same gates as M1 for every new page; hreflang complete and reciprocal on all pages; sitemap lists both languages; English pages pass a native-reader check; Beauty OS page contains no claim outside the verified list.

**Effort.** 5–7 days plus content turnaround.

---

## M3 · Refinement from real data

**Scope.** Review the first weeks of analytics and applications: where people drop in the form, which channel brings qualified applicants, which FAQ is read. Adjust copy and hierarchy. Add motion refinements that were deferred, the optional acknowledgement email if volume justifies it, and any page states discovered in use. Re-run Lighthouse and accessibility audits. Consider the "Design System" artifact if more pages are planned.

**Acceptance criteria.** Each change ties to an observed metric or a received application's feedback; budgets still pass.

**Effort.** 2–3 days in the first month, then as needed.

---

## Continuous obligations

- **Status tiers.** Update `status/events.json` whenever a capability changes tier; nothing moves to "já funciona no V2" without verification. This is a content rule, not a technical one.
- **Dependencies.** Monthly `npm outdated`; Astro minor updates applied in a pull request with CI; Node version pinned in `netlify.toml` and `.nvmrc`.
- **Measurement.** Monthly look at Search Console queries and Core Web Vitals; quarterly re-pull of autocomplete observations as the research recommends.
- **Rights.** Keep written authorisations for every third-party image or name in the repository's private documentation, not in the public site.

---

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Netlify Free credits exhausted → site offline `[VERIFIED behaviour]` | Production outage | Confirm plan before go-live; Personal plan if on credit-based Free (`07`) |
| Live screenshots contain real client data | Privacy exposure today | Verify with Do Luxo à Mesa this week; replace with demonstration or blurred captures on the current site before anything else |
| Content decisions delay M1 | Recruitment slips | Build M1 against placeholders in a preview; ship the moment P0 decisions land |
| Authorisation refused for DLM screenshots or photos | Proof section weakens | Fallback: demo-data screenshots of the same system (if DLM agrees) or the schematic device from the live site, clearly labelled |
| `astro check` tooling transition `[VERIFIED]` | CI breakage | Pin TypeScript 6; watch Astro's successor tool |
| Form spam | Noise in applications | Honeypot plus Akismet first; Turnstile via the function path if needed |
| Dark mode regressions | Visual bugs | Both themes in every Playwright screenshot and pa11y run |
| Copy drift toward abstraction | Loses the owner | Lexicon and tone test in `02 §5` as a review checklist on every copy change |

---

## The exact first milestone, pending approval

**M0 Foundations** as specified above, followed immediately by **M1** built behind a Netlify deploy preview. Nothing touches sollelio.com until you approve the preview. The first pull request would contain: the Astro 7 scaffold with TypeScript strict and Tailwind 4; `tokens.css` from the Fundações board; the base layout with header, footer, theme switcher and language switch; i18n configuration; content schemas including the status tiers file; `netlify.toml` with redirects and headers; CI with `astro check`, lint, Lighthouse CI and pa11y; a placeholder homepage proving both themes and both languages on a preview URL.
