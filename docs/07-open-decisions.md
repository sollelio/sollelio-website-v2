# 07 · Open decisions and claims requiring confirmation

**Status (16 October 2026): closed.** Every item below (0–29) was decided by the founder and is recorded in [`08-approved-decisions.md`](08-approved-decisions.md), which is the authoritative record and takes precedence over the options and recommendations here. This document is kept for the reasoning, the options considered and the claims register with its sources; it is not updated item by item.

How the items resolved, in short: **approved** 0, 1, 2, 4, 5, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23; **approved with details pending** 3 (confidentiality, contributions, personal data and acceptance mechanics), 6 (launch blocked until legal/operational completion; contacts not yet chosen), 7 (account limits to verify), 8 (provisional), 16 (derived assets need visual approval); **deferred or conditional** 24, 25, 27, 28, 29; **excluded** 26. The remaining publishing blockers are listed at the end of `08`.

Original register follows unchanged. P0 blocked the recruitment release; P1 blocked a specific page; P2 could wait. Each item records where the underlying claim came from, so proposal copy is never silently treated as fact. Source tags as in `01`.

---

## P0 · Blocks the recruitment release

| # | Decision or claim | Why it matters | Options and my recommendation | Source |
| --- | --- | --- | --- | --- |
| 0 | **Live-site screenshots may expose client data.** The current `/events` and homepage screenshots show client-looking names, event names, a venue, dates and amounts. | A privacy problem today if the records are real, independent of the redesign; also the basis for any future use of the captures. | Confirm with Do Luxo à Mesa whether these are demonstration records. If real, replace them on the live site now with blurred or demo captures; I can prepare the files, but deploying to the current site needs your go-ahead because you asked me not to modify it. | `[LIVE]` observation; `[docs/research §4c]` |
| 1 | **Approve the overall direction** (direction C: company layer plus two products, dedicated programme page, truth tiers, dark mode, Astro static on Netlify) and the sitemap in `03 §1`. | Everything else follows from it. | Approve, or mark the sections you want changed before any code. | `[REC]` |
| 2 | **Programme name in Portuguese.** | Headline, navigation label, URL copy, form title. | A. "Parceiros Fundadores" first, "Founding Design Partners" as the formal English name (recommended). B. Keep "Founding Design Partner" everywhere as today. | `[LIVE]` uses the English term; the research hypothesises, from one example, that "design partner" can read as a graphic-design partnership in Portuguese `[docs/research]`; `[REC]` |
| 3 | **Programme terms, published as one artefact ("Termos do programa"):** number of places (or the decision to state none), hours per month asked, duration, commercial conditions during and after, exit terms (for example either side may stop with notice), how influence works ("voto, não veto"), response window, selection criteria, geography. | Without them the page uses only "grupo pequeno" and the thank-you page cannot state a response time. VVarelAI's "poucos lugares à mesa" implied a number that was never decided. The research on comparable programmes shows that stating terms up front is what makes such pages trustworthy. | Draft the terms with me in one session and publish them on the programme page. Benchmarks from the research (not rules): a published standard agreement reports most programmes fee-free during the programme and 3–6 months long; one vendor playbook suggests 1–4 hours a month. | Hours, cost, profile, response time and availability: `[VV-PDF]` CONFIRMAR 03–06, 08. Number of places: no source. `[docs/research §5]`; `[REC]` |
| 4 | **Status-tier content for Events.** What, if anything, already works in V2; what is in development; what is in study. The canvas lists candidates marked `[CONFIRMAR]`. | The status board is the site's honesty device and its single source of truth. | Fill `status/events.json` from your knowledge of V2; I only have evidence for tier 1 (the DLM screens). | `[LIVE]` and `[VV-ZIP]` for tier 1; `[VV-PDF]` CONFIRMAR 02; `[BRIEF]` for the existence of V2 as a separate SaaS |
| 5 | **Written authorisation from Do Luxo à Mesa** for: naming the company, the logo, each screenshot (with blurred client data), the table photograph, and the scope and duration of use. | Proof section and hero depend on it; Portuguese law requires express consent for identifiable people and the screenshots contain third-party data. | Obtain a short written agreement; prefer demo-data screenshots if the business prefers. | `[VV-PDF]` CONFIRMAR 11; `[docs/research §4c]` |
| 6 | **Privacy policy inputs:** legal entity name and NIF, address, contact, retention period for applications, legal basis per purpose (pre-contractual steps or legitimate interest, not consent), processors and international transfers (Netlify is a US company), analytics disclosure; lawyer review. | Required the moment the form exists; CNPD is the authority. | You supply the entity facts; a lawyer or contabilista validates; I draft the page from the template structure in `03 §5.4`. | `[VV-PDF]` CONFIRMAR 07; `[docs/research §4b]` |
| 7 | **Netlify plan.** Is the Sollelio account on the credit-based Free plan or a legacy plan? | On the credit-based Free plan, exhausting 300 credits takes the production site offline until the next month. | If credit-based: approve the Personal plan (USD 9/month) before go-live. If legacy: no change for launch. | `[docs/research/stack-facts §2]`; `[REC]` |
| 8 | **Analytics vendor and consent stance.** | Needed to measure the programme; may need legal confirmation that no banner is required. | A. Umami Cloud Hobby (free, cookieless, custom events) (recommended to start). B. Plausible (USD 9/month, EU vendor). Confirm with the lawyer in item 6 whether a banner is needed; the research found no CNPD guidance. | `[docs/research/stack-facts §5]`; `[REC]` |
| 9 | **Founder facts for the site:** full name as displayed ("Hélio Gonçalves" per VVarelAI, "Hélio" on the live site), title, LinkedIn URL, portrait availability, whether you want a short founder note in first person. | Appears on every page footer area and in the responder line. | Confirm name and title; provide a portrait or approve the no-portrait variant. | `[LIVE]`, `[VV-ZIP]` |
| 10 | **Events hero headline.** | Sets the register of the whole product page. | A. "Faça o evento. O resto fica tratado." with the status badge and a vision lead (recommended, from VVarelAI). B. "O evento acontece num dia. O trabalho começa semanas antes." (literally true today). | `[VV-ZIP]`; `[REC]` |
| 11 | **Company line.** | Title tags, homepage hero, footer. | A. "Software de operações, construído dentro de negócios reais." (recommended). B. Keep "Software para operar melhor o seu negócio." | `[LIVE]`; `[REC]` |

## P1 · Blocks a page or materially improves it

| # | Decision or claim | Why it matters | Options and my recommendation | Source |
| --- | --- | --- | --- | --- |
| 12 | **Beauty OS claims to verify before publication:** exact capability list, "mobile-first PWA", "em utilização" wording, commercial availability, pricing stance (free trial, founding price, not yet available), CTA (contact form, email, waitlist). | Blocks `/beauty-os` and the homepage product card detail. | Verify each capability in the product; decide availability; I recommend "Falar connosco" with a short form until terms exist, and no waitlist unless onboarding is planned. | `[BRIEF]` for existence and tenant; everything else `[REC]` pending verification |
| 13 | **Permission to name Salão Agradável** and to show real Beauty OS screens and a photograph. | The strongest proof for Beauty OS and for the company. | Written permission, same scope as item 5. | `[BRIEF]`; `[docs/research §4c]` |
| 14 | **Invoicing boundary wording for Beauty OS.** Does the product issue any client-facing document that could be mistaken for an invoice? | Portuguese certified-invoicing rules; competitors advertise certificate numbers; a wrong claim is a legal and reputational risk. | Confirm with the contabilista; use the boundary sentence proposed on the canvas if accurate. | `[docs/research §4a]`; `[REC]` |
| 15 | **Typeface decisions.** Confirm Manrope plus IBM Plex Mono; approve or reject the optional Newsreader italic for scenes. | Font budget and brand voice. | Recommend confirm Manrope and Plex Mono; try Newsreader on the boards and decide. | `[LIVE]`, `[VV-PDF]`, `[BRAND]`; `[REC]` |
| 16 | **Logo adaptations for approval:** transparent-background reverse exports; a standalone Events symbol derived by the accent-plane rule; a reverse (white-planes) masterbrand symbol for dark surfaces; all ideally issued as official assets in the next package version. | Dark mode and small uses need them. | Approve the exports as produced, or supply official files. | `[BRAND]`; `[REC]` |
| 17 | **English scope.** Who the English site is for and who reviews English copy. | The two existing English URLs are indexed with hreflang and must not disappear between releases. | Recommend: English for every page shipped at M1 (existing English copy as the base), Beauty OS English at M2; a native reviewer for English before go-live. | `[LIVE]`; `[REC]` |
| 18 | **FAQ answers** for "Tenho de mudar a forma como trabalho?", "Quanto tempo me vai pedir?", "Tem custos?", "Quando fica disponível?". | FAQ ships on `/events` and the programme page. | Answer in one or two sentences each; the canvas proposes drafts marked `[CONFIRMAR]`. | `[VV-PDF]` CONFIRMAR 03, 04, 08, 09 |
| 19 | **WhatsApp as a contact channel** (optional phone field; replies by WhatsApp). | Preferred channel for many Portuguese owners; also a privacy consideration. | Recommend optional field with "WhatsApp" hint; state it in the privacy page. | `[REC]`, `[HYP]` |
| 20 | **Geography field and selection by region.** | Only useful if visits or regional focus matter. | Keep optional "Zona do país" if you intend visits; otherwise drop. | `[VV-PDF]` CONFIRMAR 05 |
| 21 | **Response-window statement** on the thank-you page. | Expectation management. | State only what you will keep ("nos próximos dias úteis" or a specific number). | `[VV-PDF]` CONFIRMAR 06 |
| 22 | **Beauty OS and Events contact routing.** Single inbox or separate addresses; who answers Beauty OS. | Follow-up quality. | One inbox is fine now; separate form names keep the data apart. | `[REC]` |

| 23 | **Acquisition channels and provisional targets.** Who sends traffic (your LinkedIn posts, direct outreach to a researched list, forwards from Do Luxo à Mesa and your network, sector associations), how much founder time per week, and what counts as success in the first weeks (qualified applications, first conversations, time to reply). | Without targets, M3 has nothing to compare against and the funnel measurement is decorative. | Agree a one-page channel plan and a provisional target with me; `03 §5.10` proposes a starting point. | `[REC]`, `[HYP]` |

## P2 · Can wait

| # | Decision or claim | Notes | Source |
| --- | --- | --- | --- |
| 24 | **A `/sobre` page.** The homepage founder block covers it for now. | Add when there is more to say (team, story, press). | `[REC]` |
| 25 | **Video.** The Downloads folder holds Sollelio Events films I did not inspect. If authentic and authorised, a short muted loop could replace the hero photograph later. | Needs content review and authorisation; weight budget applies. | Observed file names only |
| 26 | **"Workforce".** The brand package names a provisional second product. | Keep off the website until named and real. | `[BRAND]` |
| 27 | **Discovery documents.** The same folder holds product-discovery and operations PDFs that could ground the Events narrative in verified facts. | If you want them considered, copy the approved ones into `references/` and I will treat them as verified project sources. | Observed file names only |
| 28 | **Design System artifact.** Publish the tokens and components as a reusable system once pages multiply. | Not needed for the first releases. | `[REC]` |
| 29 | **Brand package inconsistencies** (wordmark weight, descriptor colour between packages). | For a future brand pass, not this project. | `[BRAND]` |

---

## Claims register

Where the important claims in these documents came from. Nothing marked `[VV-*]` or `[REC]` should be treated as confirmed until you say so.

| Claim | Source | Status |
| --- | --- | --- |
| Sollelio Events V2 is a separate, broader SaaS in development | `[BRIEF]` | Confirmed by you |
| The internal system is in daily use at Do Luxo à Mesa | `[LIVE]` copy and screenshots; `[VV-ZIP]` | Stated by you on the live site; authorisation to show it pending (item 5) |
| Beauty OS is a mobile-first PWA with real operational functionality, first tenant Salão Agradável | `[BRIEF]` | Confirmed by you; marketing claims to verify (items 12–14) |
| Hélio Gonçalves is a programmer and the founder of Sollelio | `[LIVE]`, `[VV-ZIP]` | Confirm display name (item 9) |
| Events accent is teal, Beauty OS is violet, Workforce provisional amber | `[BRAND]` | Confirmed by the asset packages |
| Live site scores 97–100 in Lighthouse | `[MEASURED]` | Lab measurement, 16 Oct 2026 |
| Netlify Free plan is credit-based with a 300-credit hard cap | `[docs/research/stack-facts]` | Verified against Netlify docs, 16 Oct 2026; applicability to your account unknown (item 7) |
| Astro 7.4, Tailwind 4.3, Lighthouse 13.5 are current | `[docs/research/stack-facts]` | Verified 16 Oct 2026 |
| Caterfy is the only pt-PT events-operations competitor found | `[docs/research/market]` | Evidence from one research pass; not exhaustive |
| "Design partner" may be read as graphic design in Portuguese | `[docs/research/market]` | Hypothesis with one supporting example |
| Many design-partner programmes are fee-free and run 3–6 months | `[docs/research/market §5]` | Third-party benchmark, not a rule |
| Programme places, hours, duration, terms, response time | None | **Undecided**; VVarelAI's "poucos lugares" was proposal copy |
| The live screenshots show demonstration data only | None | **Unknown**; names, dates and amounts are visible (item 0) |
| Any V2 capability "already working" | None | **Undecided**; no evidence in the material provided |
