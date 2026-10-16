# 01 · Current site audit

**Scope.** Evidence-based assessment of the live website (sollelio.com), the two VVarelAI deliverables and the approved brand asset packages, as inspected on 16 October 2026.
**Status.** Strategy phase. Nothing here has been implemented.

Source tags used in all seven documents:

| Tag | Meaning |
| --- | --- |
| `[LIVE]` | Observed on https://sollelio.com on 16 Oct 2026 (HTML, CSS, headers, sitemap, screenshots) |
| `[MEASURED]` | Measured in this audit (Lighthouse 13.5 via headless Chrome, curl, asset weights) |
| `[VV-ZIP]` | VVarelAI handoff ZIP, dated 9 Oct 2026 (`references/vvarelai/handoff/`) |
| `[VV-PDF]` | VVarelAI "Documento técnico para implementação", dated 11 Oct 2026 (`references/vvarelai/`) |
| `[BRAND]` | Brand asset packages v0.1 (`references/branding/`) |
| `[BRIEF]` | Stated in your brief |
| `[REC]` | My recommendation, not a fact |
| `[HYP]` | Hypothesis that needs validation |

---

## 1. What was inspected

**Live site.** Four indexable URLs exist: `/`, `/en`, `/events`, `/en/events`, plus a 404 page. `[LIVE]` Probing confirmed that `/beauty-os`, `/design-partners`, `/events/design-partners`, `/sobre`, `/contacto`, `/privacidade`, `/blog` and `/pt` all return 404. Trailing-slash variants redirect 301 to the canonical form. `http://` and `www.` redirect to the apex over HTTPS (the `http://www.` path takes two hops). Hosting is Netlify; the build is Astro (hashed `/_astro/fonts/` files and Astro scoped-style attributes). `[LIVE]`

The Chrome extension was not connected, so visual inspection used headless Chrome screenshots at 1440 px and 390 px, the fetched HTML and CSS, and Lighthouse runs. Screenshots are kept in the session scratchpad, not in the repository.

**VVarelAI handoff ZIP.** `index.html` (one page, fully inline-styled), `tokens.css`, two logo SVGs, two photographs, a desktop reference JPG (1200×2892) and a mobile reference JPG (390×4024). `[VV-ZIP]`

**VVarelAI technical PDF.** Seven A4 landscape pages specifying an "approved" version of the `/events` page: fonts, colours, measures, components, a ten-block structure, tab contents and eleven "CONFIRMAR" points. It explicitly refers to companion deliverables that are **not** in the material provided: the proposal PDF "Página Sollelio Events e resposta à revisão (versão 3)", an `IMAGENS/` folder (hero photos, blurred DLM capture, Events logo and negative), `TEXTOS-EVENTS.MD` and `PAGINA-REFERENCIA.HTML`. `[VV-PDF]` The ZIP and the PDF therefore describe **two different versions**: the ZIP is the earlier single-section landing; the PDF is the later, richer structure whose final visuals and texts I could not see.

**Brand assets.** Masterbrand package v0.1 (symbol, Sollelio / Events / Workforce lockups, avatars, README with palette and rules), Beauty OS package v0.1 (lockups, compact lockup, symbol, app icons, splash screens, manifest colours, README) and the Sollelio folder of the "Sollelio × Do Luxo à Mesa" package, whose files are byte-identical to the masterbrand package. A `README.txt` that sits next to that ZIP in your Downloads folder (copied into `references/branding/sollelio-do-luxo-a-mesa-partnership/` for completeness) lists `partnership/`, `do-luxo-a-mesa/` and `reference/` folders (including a Do Luxo à Mesa design-system PDF) that were not supplied. `[BRAND]`

**Not inspected.** Other files in your Downloads folder (discovery documents, videos, decks). They were not part of the brief; several look relevant to product truth and are listed as an open decision in `07-open-decisions.md`.

---

## 2. The live website

### 2.1 Technical quality — excellent, and a bar to protect `[MEASURED]`

| Page | Device | Performance | Accessibility | Best practices | SEO | LCP | CLS | Transfer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Mobile | 97 | 100 | 100 | 100 | 1.6 s | 0 | 147 KiB |
| `/events` | Mobile | 99 | 100 | 100 | 100 | 1.7 s | 0 | 131 KiB |
| `/` | Desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 159 KiB |

Lighthouse 13.5, headless Chrome, 16 Oct 2026. Lab data only; the PageSpeed Insights API answered with a quota error (HTTP 429), so field (CrUX) data could not be queried.

What produces these numbers `[LIVE]`:

- No third-party scripts and no analytics of any kind. One tiny inline bootstrap script, one JSON-LD block and one small inline module holding four behaviours: reveal-on-scroll (with a `prefers-reduced-motion` fallback and a four-second safety timeout), header shadow on scroll, mobile nav toggle with `aria-expanded` and Escape handling, and tabbed screenshot views with `aria-pressed`.
- Fonts self-hosted through the Astro Fonts API: eight subsetted woff2 files, about 98 KB in total per page according to Lighthouse's network log, `font-display: swap`, metric-adjusted fallbacks. Manrope for text, IBM Plex Mono for labels.
- Images as WebP with `srcset`, separate mobile crops in `<picture>`, lazy loading and explicit dimensions.
- SEO hygiene: canonical on every page, `hreflang` `pt-PT` / `en` / `x-default` (x-default points to Portuguese), XML sitemap with `xhtml:link` alternates, `robots.txt`, Open Graph and Twitter card tags, `theme-color`, JSON-LD `Organization`.
- Accessibility: skip link, landmarks with Portuguese `aria-label`s, logical heading order, `lang` attributes on the language switch, visible focus styles, reduced-motion media queries.

Weaknesses in the same area `[LIVE]`:

- The Portuguese Open Graph image is the same file for `/` and `/events`, so a shared Events link looks like a company link. There is no `og:image:alt`.
- JSON-LD names the founder only as "Hélio" and has no `sameAs` link; there is no `WebSite`, `SoftwareApplication` or FAQ structured data.
- No analytics or event tracking at all, so the current Founding Design Partner campaign has produced no measurable data.
- No privacy page, which becomes necessary the moment a form exists.
- No dark mode: `prefers-color-scheme` is never referenced; `color-scheme: dark` is set only on the midnight-coloured sections.
- Mobile Speed Index of 4.2 s on the homepage is probably driven by the reveal animation holding content until it intersects `[HYP]`; a minor effect, but a reminder that animation can cost perceived speed.

### 2.2 Brand and identity — correct, consistent, not memorable `[LIVE]` `[BRAND]`

The site uses the approved outlined lockups, the symbol as favicon, teal as the Events accent, Midnight Indigo as the dark surface and Warm Off-white as the ground. Hierarchy is respected: the Sollelio wordmark dominates, "Events" is subordinate. The CSS defines the brand palette as tokens (`--c-indigo`, `--c-teal`, `--c-midnight`, `--c-offwhite`) with a `.theme-events` scope that swaps the accent to teal. This is the most brand-faithful of the three sources.

The visual language is a restrained editorial-SaaS idiom: mono eyebrow labels with a square bullet, large tightly tracked headlines, two-column prose, white cards with 16 px radius, one hand-drawn "fragmented operation" mind-map, one schematic "operational view" card. It is competent and calm. It is also close to the default look of contemporary developer-tool websites, so it does not yet say "this company understands events businesses" visually. There is no photography, no material, no human presence beyond the founder's name.

### 2.3 Positioning and copy — honest but abstract `[LIVE]`

Strengths:

- Scrupulous truthfulness. "Em desenvolvimento" appears in the hero fact card; the operational diagram is captioned "não é uma captura de ecrã do produto"; the eight areas are "não são uma promessa"; the DLM screenshots are captioned as the origin system shown in that company's identity.
- A founder section and a direct email, which make the company human.
- The idea "Um Founding Design Partner não é um beta tester" is a strong, reusable distinction.
- Authentic proof: four real screenshots of the internal system (home, journey, calendar, payments) showing real operational concepts such as "sinais por receber", "A seguir: criar o projecto", 50% deposit tracking and MB Way payments.

Weaknesses:

- The language is process-abstract and repeated: "fluxos de trabalho fragmentados", "operações mais estruturadas e escaláveis", "incerteza operacional", "coordenação manual" recur in the meta descriptions, hero, section copy and product card. An events owner never meets a scene they recognise: no sinal, no orçamento, no WhatsApp at 23:00, no guest count changing on Thursday.
- The problem is presented as a list of tools (WhatsApp, folhas de cálculo, documentos, calendários, tarefas, pagamentos, memória). That is a diagnosis, not a feeling.
- The pay-off is "mais estrutura", not an outcome the owner wants (a free Sunday evening, a deposit that is never forgotten, a team that knows the headcount changed).
- Company framing conflicts with reality: the homepage labels Sollelio Events "O nosso primeiro produto comercial" and the meta description says "O seu primeiro produto". Beauty OS, a product with a live tenant, is absent from the site. The brief names exactly this risk: the company is reduced to one campaign.
- **Client data in the screenshots.** The live screenshots show what look like client first names, event names, a venue, dates and amounts (on the home, payments and calendar views). Whether these are demonstration records or real clients cannot be told from the images; the VVarelAI handoff uses a blurred capture of the same system `[VV-ZIP]`. If any of it is real, it is a privacy problem on the current site today, independent of the redesign (`07`, item 0).
- Duplication and drift: the homepage carries the full "O que recebe / O que pedimos" lists, `/events` compresses them into "Em troca" plus a seven-step collaboration diagram, and both pages close with a contact section that repeats the same offer in different words; the VVarelAI PDF reuses the homepage lists as "texto do site atual" `[VV-PDF]`. The nav item "Design Partners" points to `/#design-partners` on the homepage and to `/events#design-partners` on the Events page, two destinations for one label.

### 2.4 Conversion — the weakest area `[LIVE]`

- Every conversion call to action is a `mailto:` link, some with a pre-filled subject (the hero buttons are in-page anchors and links to `/events`). This captures no qualification data, offers no confirmation or thank-you state, cannot be measured, and silently fails for the many desktop users whose browser has no mail client configured (common with webmail).
- "Tornar-se Founding Design Partner" and "Falar com o Hélio" lead to the same mail link, so the primary and secondary actions are not actually different.
- Nothing tells the applicant what happens after the email, how quickly, or who replies.
- No privacy statement, no attribution capture, no way to A/B anything.

### 2.5 English version `[LIVE]`

A complete, faithful en-GB translation with correct `hreflang`, `lang="en"` and `og:locale en_GB`. Minor issues: "Founding Design Partner Program" (US spelling) sits next to the label "Programme"; "Built by Hélio." is weaker than the Portuguese heading. The bigger question is strategic: the programme is Portugal-only, so the English audience is undefined (investors, partners, international press, Portuguese owners who prefer English?). This is handled in `02` and `03`.

### 2.6 Mobile `[MEASURED]`

Fully responsive, full-width stacked buttons, accessible hamburger menu, no horizontal overflow. The pages are long at 390 px (trimmed full-page captures measure about 7,600 px for the homepage and 9,100 px for Events) with little visual relief, which produces scroll fatigue before the design-partner block is reached.

---

## 3. VVarelAI materials

### 3.1 The handoff ZIP (9 Oct 2026) `[VV-ZIP]`

**What it is.** A single-page visual reference for an `/events` landing titled "Sollelio Events · Founding Design Partners": photo hero, one "problem" section, one "proof" section with an annotated DLM screenshot, one dark application section, footer. Inline styles throughout, container queries, non-functional forms ("ainda não enviam dados").

**Strengths.**

- Markedly better copy craft than the live site. A headline with a promise ("Faça o evento. O resto fica tratado."), a concrete scene ("São 23:47 de sexta. Um casal pergunta pelo sábado 14 e não tem a certeza se o outro casal já pagou…"), outcome-led items ("Saber se o sinal já entrou", "Avisar quem contratou para o dia: passou de 120 para 140 convidados"), and a proof heading that lands ("Não é uma ideia. Já está a funcionar.").
- A photo-led hero (a styled table) that gives sector identification and warmth, which the live site lacks entirely.
- The responder is named: "Responde-lhe o Hélio Gonçalves, programador e fundador da Sollelio."
- Short and scannable.

**Weaknesses and risks.**

- *Factual framing.* The hero speaks of Sollelio Events in the present tense as "o sistema para empresas de eventos" with "Pedidos, propostas e sinais num só sítio", and the problem list marks items "TRATADO". Those capabilities belong to the Do Luxo à Mesa internal system, not to the V2 SaaS, so the page reads as if V2 already exists. This conflicts with your rule against implying planned capabilities exist.
- *Scarcity framing.* "Há poucos lugares à mesa", "Lugar reservado para", "Ocupar o lugar" imply a defined number of places. No number has been decided anywhere in the material (the PDF's CONFIRMAR list covers hours, cost, company profile, response time and availability, but not places). This is exactly the misleading scarcity the brief excludes.
- *Capture.* Email-only forms, twice, with no qualification, `type="button"` controls that do nothing, and no success or error states.
- *Brand drift.* The header uses the masterbrand lockup (cobalt accent) on a page about the Events product; teal appears nowhere. The dark surface is `#1A1D57` rather than brand Midnight `#11152D`. The typeface is Plus Jakarta Sans, which matches neither the lockups (Rubik) nor the live site (Manrope); the PDF acknowledges the Manrope conflict in a note.
- *Scope.* No homepage, no company layer, no Beauty OS, no English, no dark mode, no metadata, no component system (inline styles cannot be reused as code).
- *Rights.* The hero photograph and the DLM screenshot are used pending authorisation (PDF CONFIRMAR 11).

### 3.2 The technical PDF (11 Oct 2026) `[VV-PDF]`

**What it is.** An implementation specification for a later, approved v3 of the `/events` page, organised as ten blocks: 0 bars (company bar plus product bar with badge and button), 1 entry with a three-column product illustration, 2 real proof (annotated DLM capture with four tabs), 3 the problem (two dark panels "Hoje" and "O que estamos a construir"), 4 "Em que ponto estamos" (three columns: Já funciona · Em desenvolvimento · A decidir), 5 the programme (three tabs: Como participa · O que recebe · O que pedimos), 6 "Para quem é" (five business types), 7 application (four steps plus a real form), 8 five FAQ items, 9 closing card and four-column footer.

**Strengths.**

- The structure is more honest and more complete than the ZIP. Block 4 implements almost exactly the status tiers your brief demands; an "EM DESENVOLVIMENTO" badge is specified; the single primary button always leads to `#candidatura`; FAQ and "Para quem é" answer the qualification questions a serious applicant has.
- A real form is specified: 50 px fields, labels above, event-type multi-select pills, and designed states for error, sending, send failure and success (on a page I could not see).
- The eleven CONFIRMAR points are a disciplined list of unverified copy. They overlap substantially with my own open decisions, which is a good sign about the agency's rigour.

**Differences from the ZIP.**

| Aspect | ZIP (9 Oct) | PDF (11 Oct) |
| --- | --- | --- |
| Main background | Off-white `#F7F4EE`, paper `#EDECF5` | White `#FFFFFF`, paper `#F3F4FB` |
| Secondary text / lines | `#585B66` / `#DDDBE7` | `#5B5F73` / `#E3E5F0`, new light blue `#E8EEFF` |
| Dark surface | `#1A1D57` | `#1A1D57` |
| H1 scale | 48 → 112 px | 40 → 80 px |
| Hero | Photograph | Product illustration (menu, event list, detail) with status chips |
| Header | One bar, masterbrand lockup | Two bars: Sollelio (company) and Sollelio Events (product) |
| Sections | 4 | 10, with anchors `#origem`, `#programa`, `#candidatura` (`#perguntas` is marked in the PDF as a suggested anchor, not present in the design) |
| Form | Email only | Full form with event-type pills |
| Status honesty | "Tratado" | Já funciona / Em desenvolvimento / A decidir |

**Risks.**

- The Block 1 "ilustração do produto" with chips such as "Sinal por receber" and "Proposta aceite" is a rendering of a V2 concept. Unless it is captioned as a concept, it becomes fabricated product evidence, which your brief excludes.
- Two stacked header bars add chrome and push the headline down, especially on mobile.
- The deliverable is still a single-page specification. It does not address the homepage, Beauty OS, company credibility, English, dark mode, SEO or accessibility beyond the component level.
- Final copy and visuals could not be verified because the v3 proposal PDF, texts file and reference HTML were not provided.

**Verdict.** The PDF supersedes the ZIP as the content structure for the Events experience. The ZIP remains valuable for its copy voice and photo-led atmosphere. Neither is a website architecture.

---

## 4. Brand assets `[BRAND]`

**Shared visual language.** One symbol: four coordinated planes with a continuous diagonal negative-space route that hints at an "S". Products are differentiated only by the top-right accent plane: masterbrand Cobalt `#2457F5`, Events Teal `#00A69A`, Beauty OS Precision Violet `#7657D6` (`#9A7CF0` on dark), provisional Workforce Amber `#D98A20`. Neutrals are Warm Graphite `#25272B`, Warm Off-white `#F7F4EE` and Midnight Indigo `#11152D`. Lockups are set in Rubik with outlined production versions. Reverse versions ship with a solid `#11152D` background rectangle.

**Hierarchy.** The Sollelio wordmark is dominant in every lockup. "Events" is a subordinate descriptor in graphite; "Beauty OS" is a subordinate descriptor in violet at weight 500, and Beauty OS also has a compact in-product lockup ("Beauty OS / SOLLELIO"). Small inconsistencies exist between packages (descriptor colour, wordmark weight 500 vs 400, letter-spacing −1.5 vs −1.2). None blocks the website; they are noted for a later brand pass.

**Dark-mode readiness.** Reverse lockups exist for all three brands, but their baked-in background rectangle makes them unusable on any dark surface that is not exactly `#11152D`. For the design exploration I produced transparent-background exports of the reverse lockups by removing only that rectangle; the artwork itself is untouched. Approval to use such exports in production is requested in `07`.

**README caveat.** The masterbrand README states the assets are "first production-oriented foundations, not a substitute for trademark clearance or a final professional optical review"; the Beauty OS README has no such line but builds on the same foundations.

---

## 5. Conflicts between sources, and how I propose to resolve them

| Topic | Live | VV-ZIP | VV-PDF | Brand | Resolution `[REC]` |
| --- | --- | --- | --- | --- | --- |
| Typeface | Manrope + IBM Plex Mono | Plus Jakarta Sans + IBM Plex Mono | Same as ZIP | Rubik in lockups only | Keep Manrope + IBM Plex Mono. Rubik stays inside the lockups. Rationale in `04`. |
| Dark surface | `#11152D` | `#1A1D57` | `#1A1D57` | `#11152D` | `#11152D` as the dark ground; `#1A1D57`-range as raised surfaces in dark mode. |
| Light ground | `#F7F4EE` | `#F7F4EE` | `#FFFFFF` + `#F3F4FB` | `#F7F4EE` | `#F7F4EE` ground with white cards, so light mode is warm rather than clinical. |
| Events accent | Teal | None (cobalt) | None (cobalt) | Teal | Teal identifies Events everywhere; cobalt is reserved for the masterbrand. |
| Primary button | Indigo (company), teal (events) | Cobalt | Cobalt | — | One accent per context; contrast verified in `04`. |
| Product truth | "Em desenvolvimento" disclaimers | Present tense, "Tratado" | Three status tiers | — | Four tiers as per the brief, with the PDF's three-column device. |
| Scarcity | None | "Poucos lugares à mesa" and "grupo pequeno" | Not addressed (CONFIRMAR list) | — | "Grupo pequeno" is acceptable and true; counts and "lugares" are not. |
| Capture | `mailto:` | Email-only form | Full form | — | Full form with a `mailto:` fallback for people who prefer email. |
| Scope | Company + Events, PT/EN | Events only | Events only | Three products | Company + two products, PT/EN, light and dark. |

---

## 6. Keep, change, drop

**Keep from the live site.** The technical quality bar and the Astro foundation; hreflang, sitemap and canonical approach; brand-correct tokens; the DLM screenshots as labelled origin proof (re-captured with demonstration or blurred data); the founder section; "não é um beta tester"; the truthfulness disclaimers; a full English translation.

**Keep from VVarelAI.** The promise-led headline pattern; the concrete scene; outcome-led lists; the annotated proof section; the status tiers; FAQ and "Para quem é"; the four-step application; a real form with event-type selection; the named human responder; the CONFIRMAR discipline.

**Change.** Company framing (two products, one company); the conversion mechanism (form, confirmation, follow-up); the abstract copy (concrete pt-PT scenes and outcomes); visual distinctiveness (material and product-led storytelling instead of generic cards); add dark mode; add measurement; page-specific social images; richer structured data; a privacy page.

**Drop.** Scarcity language; present-tense capability claims about V2; email-only hero capture; the double header bar; the typeface switch.

---

## 7. Opportunities the current material under-uses

1. **Beauty OS is the strongest credibility signal available and is invisible.** A shipped, mobile-first product with a real tenant proves Sollelio ships. It also proves the company is not one campaign. `[BRIEF]`
2. **The DLM system is real proof of operational depth.** Its screens show deposits, journeys, documents and calendars in daily use, in a visibly different (gold, serif) identity. "Built for them, in their identity" is a more credible story than any mock-up. `[LIVE]`
3. **The VVarelAI copy voice can be kept while its claims are corrected.** The scene and the promise do not depend on V2 existing; they depend on the problem being real, which it is.
4. **Nothing is measured today.** Any analytics and form attribution is a step up from zero.
5. **The performance baseline is already at the ceiling.** Budgets can be set at the current numbers and enforced, instead of hoped for.
