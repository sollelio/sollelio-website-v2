# Sollelio website v2 · strategy, decisions and architecture

Phase 1 delivered the strategy and architecture documents (16 October 2026). On the same day the founder reviewed them and recorded the approved decisions in `08-approved-decisions.md`. Local implementation of the website followed; nothing on sollelio.com has been changed.

## Precedence

1. **`08-approved-decisions.md`** is the authoritative record of business and editorial decisions (0–29) and of the publishing blockers. Where it conflicts with a *recommendation* in documents 01–07, the approved decision wins.
2. Canonical product sources (the Beauty OS repository and its docs, the Do Luxo à Mesa discovery material, the approved brand packages under `references/`) take precedence over any website document for facts about the products and brands.
3. Documents 01–07 remain the research and reasoning behind the decisions. They are not rewritten when a decision supersedes a recommendation; `07` carries a status note instead.

| File | Content | Status |
| --- | --- | --- |
| `01-current-site-audit.md` | Evidence-based assessment of the live site, the two VVarelAI deliverables and the brand assets; conflicts and resolutions | Research, current |
| `02-brand-and-positioning.md` | Masterbrand architecture, product positioning, audiences, messaging, voice and lexicon | Recommendation; naming and hero lines settled by `08` decisions 2, 10, 11, 12 |
| `03-information-architecture-and-conversion.md` | Sitemap, URL policy, migration, journeys, CTAs, the application form and follow-up | Recommendation; form fields and confirmation settled by `08` decisions 6, 19–22 |
| `04-design-direction.md` | Visual direction, principles, logo usage, colour and type systems, imagery, motion, dark mode, the design canvas | Recommendation; typography and brand variants settled by `08` decisions 15, 16 |
| `05-technical-architecture-and-seo.md` | Stack, repository layout, i18n, theme, forms, performance budgets, quality gates, Netlify, measurement, SEO | Recommendation; stack, Netlify, forms and analytics settled by `08` decisions 1, 6, 7, 8 |
| `06-implementation-roadmap.md` | Milestones M0–M3 with acceptance criteria and verification gates | Superseded in sequencing by the delivery directive in `08`: the complete local website first, then deploy preview and launch gates |
| `07-open-decisions.md` | The original decision register with source attribution | **Closed.** Every item 0–29 is resolved in `08`; kept for the claims register and the sources |
| `08-approved-decisions.md` | Owner-approved decisions 0–29, working principles, publishing blockers, delivery directive | **Authoritative** |
| `research/` | Research reports with sources (market and language; stack facts) | Research, current |

Design canvases (private): direction https://claude.ai/artifact/HggCCzQMxjbzLF1FqkAHxx · final pages https://claude.ai/artifact/QS7TzgRo5wDwJNKcezSzCv

Source material is preserved under `references/` (VVarelAI handoff and technical PDF; brand asset packages, including Salão Agradável v0.1 and the Do Luxo à Mesa logo; original archives). The Do Luxo à Mesa discovery documents and the Beauty OS first-run reference package were consulted read-only and are not copied into the repository.
