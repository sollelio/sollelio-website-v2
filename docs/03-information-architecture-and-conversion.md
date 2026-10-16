# 03 · Information architecture, user journeys and the Founding Design Partner conversion strategy

**Status.** Recommendation for your review. Source tags as defined in `01-current-site-audit.md`.

---

## 1. Sitemap

### 1.1 Recommended pages `[REC]`

| URL (pt-PT, default) | URL (en) | Purpose | Phase |
| --- | --- | --- | --- |
| `/` | `/en` | Company homepage: position Sollelio, present both products as peers, carry the time-bound Events partner strip, founder, contact | M1 (provisional) · M2 (full) |
| `/events` | `/en/events` | Sollelio Events product page: promise, daily reality, origin proof, truth tiers, programme summary, CTA | M1 |
| `/events/design-partners` | `/en/events/design-partners` | The acquisition experience: who it is for, what you give and get, how it works, FAQ, application form | M1 |
| `/events/design-partners/obrigado` | `/en/events/design-partners/thank-you` | Confirmation and next-step expectations; also the measurable conversion endpoint. `noindex`. | M1 |
| `/beauty-os` | `/en/beauty-os` | Sollelio Beauty OS product page | M2 |
| `/privacidade` | `/en/privacy` | Privacy policy covering the form, analytics and contact data | M1 |
| `/404` | | Branded not-found page (exists today `[LIVE]`) | M1 |

Deferred, only when content justifies them: `/sobre` (company and founder page; the homepage founder block covers this now), a journal or notes section (only if you will write regularly), a products index (the homepage is the index while there are two products).

Not recommended: a pricing page (no terms exist), a careers page, generic "solutions" pages, programmatic SEO pages per city or per event type (thin content risk, explicitly excluded by the brief).

### 1.2 URL and language policy `[REC]`

- Keep English path segments for product names (`/events`, `/beauty-os`) because they are the product names and because `/events` is already indexed and linked `[LIVE]`. Keep one slug per page across languages for product and programme pages (`/events/design-partners` in both), which keeps routing, hreflang and shared campaign links simple. Utility pages that are never shared as campaign links (the thank-you page and the privacy policy) take a natural slug in each language (`/obrigado` and `/thank-you`, `/privacidade` and `/privacy`).
- Portuguese is the default locale with no prefix; English lives under `/en`. This is the live site's scheme and must not change, to preserve indexing `[LIVE]`.
- No trailing slashes (current behaviour; a consequence of file-based build output, since Netlify redirects cannot change trailing-slash handling) `[LIVE]` `[VERIFIED]`.
- Portuguese-only pages that have no English counterpart (if any) omit the `en` hreflang rather than pointing to a different page.

### 1.3 Migration, redirects and continuity `[LIVE]` `[REC]`

| Existing URL | Action |
| --- | --- |
| `/`, `/en`, `/events`, `/en/events` | Keep. Same URLs, new content. No redirect needed. The two English URLs are indexed with reciprocal hreflang, so the recruitment release rebuilds them too (`06`, M1); they must never return 404 between releases. |
| `/#design-partners`, `/events#design-partners` | Keep an element with `id="design-partners"` on both pages so old links still land on the programme summary, which links to the application page. Anchors never reach the server, so no redirect is possible. |
| `/og-pt.png`, `/og.png`, `/brand/*`, `/origin/*` | Replace with page-specific images; keep old files for a few weeks so cached social previews keep resolving. |
| `/index.html`, `/events.html` | Currently serve 200 as duplicates `[LIVE]`. Add 301 redirects to the clean URLs. |
| `http://www.sollelio.com/*` | Currently two hops `[LIVE]`. Configure the apex as primary domain in Netlify so `www` redirects straight to `https://sollelio.com/*`. |

Submit the new sitemap in Google Search Console at launch and watch coverage for the first two weeks (see `05`).

---

## 2. Navigation

**Global header (all pages).** Sollelio lockup (links to `/`) · Events · Beauty OS · Parceiros Fundadores (points to `/events/design-partners`, one destination everywhere, fixing today's two destinations `[LIVE]`) · language switch PT/EN · theme switch · a single compact header button while the programme is open: "Candidatar-me" on the homepage and Events pages, "Ir para a candidatura" on the programme page itself (it scrolls to the form), and the product's own action on Beauty OS ("Falar connosco"). On mobile: logo, theme, menu.

**Product sub-navigation (on `/events` only).** A slim in-page bar below the header with anchors: Visão geral · Origem · Em que ponto estamos · Programa · Perguntas, plus the button. This replaces the VVarelAI double header bar `[VV-PDF]` with something that only appears once the page is scrolled past the hero, so the headline is never pushed down.

**Footer.** Company line, products, programme, privacy, LinkedIn, email, language, theme, copyright. The footer is the only place where "Workforce" or future products never appear until real.

---

## 3. Principal journeys

### Journey A: events owner arrives from a shared link (LinkedIn post, WhatsApp forward, email)

`/events/design-partners` → reads "Para quem é" and "O que pedimos" (qualifies herself in under a minute) → scans "Como funciona" → fills the form (2–3 minutes) → `/events/design-partners/obrigado` → receives a personal reply from Hélio.

Design implications: the page must stand alone (company context in the header, product context in the hero), the form must be reachable in one tap from the hero, and the thank-you page must say what happens next.

### Journey B: events owner arrives from search or the homepage

`/` (recognises the company and the Events door, sees the partner strip) → `/events` (recognises her Friday, sees the original system works, understands the tiers) → programme summary → `/events/design-partners#candidatura` → form → thank-you.

Design implications: the homepage must route events owners in one click; `/events` must not duplicate the whole programme, only summarise and link.

### Journey C: salon or barbershop owner

`/beauty-os` (from search, Salão Agradável word of mouth, or the homepage) → reads capabilities and real use → contact action. Until commercial availability is decided, the action is "Falar connosco" with a short form or an email, measured separately from the Events programme.

### Journey D: credibility check

`/` → founder block, products, DLM proof → LinkedIn or email. The homepage must answer "is this real" in the first two screens: two real products, one in use, one in development with partners, built by a named programmer.

### Journey E: English reader

`/en` or `/en/events` → the same story, and on programme pages a first-screen note that the programme is for businesses operating in Portugal, with the email as the action.

---

## 4. Calls to action

| Page | Primary | Secondary | Tertiary |
| --- | --- | --- | --- |
| `/` | Conhecer o Sollelio Events | Conhecer o Beauty OS | Partner strip: Ver o programa (to the programme page) |
| `/events` | Candidatar-me a Parceiro Fundador (to the application page) | Ver em que ponto estamos (anchor) | Prefere email? helio@sollelio.com |
| `/events/design-partners` | Enviar candidatura (form) | Ler as perguntas frequentes (anchor) | Prefere email? helio@sollelio.com |
| `/beauty-os` | Falar connosco sobre o Beauty OS | Ver como funciona (anchor) | — |
| Thank-you | Voltar ao Sollelio Events | Ver o Beauty OS | — |

Rules: one primary action per screen; the primary button text names the outcome ("Enviar candidatura"), not the mechanism ("Submeter"); secondary actions are links or outlined buttons; the `mailto:` survives only as a tertiary, explicit alternative for people who prefer email.

---

## 5. The Founding Design Partner application

### 5.1 Integrated, standalone, or both

Both, with one form `[REC]`. `/events` carries the programme panel (why partners, what you get and what we ask in four short lines each, the four steps, one button) and the FAQ, because product and programme questions overlap. `/events/design-partners` carries the explanation of the programme, who it is for, the same two lists, how it works, the three most-asked questions with a link to the full FAQ, and the only form. Reasons:

- A standalone URL is shareable, advertisable and measurable, and it can be retired or changed when the programme closes without rewriting the product page.
- `/events` stays a product page with a long life; today it is half campaign `[LIVE]`.
- One form avoids split data and duplicated validation; VVarelAI's single long page with the form embedded `[VV-PDF]` keeps momentum but conflates product and campaign for the life of the page.

### 5.2 What the form must achieve

Collect enough to hold a first conversation and to triage, in under three minutes on a phone, with no account, no file upload and no multi-step wizard.

| Field | Type | Required | Why it is genuinely necessary |
| --- | --- | --- | --- |
| Nome | text | yes | To reply personally |
| Empresa | text | yes | To look the business up before the call |
| Função | select (proprietário/a · gestor/a · coordenação · outra) | yes | Decision-maker check |
| Email | email | yes | Reply channel |
| Telemóvel / WhatsApp | tel | no | Preferred channel in Portugal; optional to lower friction `[HYP]` |
| Tipo de negócio | multi-select pills (catering · organização de eventos · decoração e aluguer · espaço ou quinta · wedding planning · outro) | yes | Fit and segment mix; VVarelAI proposes the same device `[VV-PDF]` |
| Eventos por ano | select of ranges (até 10 · 10–30 · 30–80 · mais de 80) | yes | Volume is the main triage signal; ranges avoid false precision |
| Zona do país | select (Norte · Centro · Lisboa e Vale do Tejo · Alentejo · Algarve · Açores ou Madeira) | no | Geography for visits; whether it matters is an open decision |
| Como gere hoje | multi-select pills (WhatsApp · Excel/folhas · papel/caderno · software: qual?) | no | Starts the conversation on operations; free text for "software" |
| A maior dor | textarea with prompt ("O que lhe tira mais tempo ou lhe falha mais vezes?") | no | Best qualification signal; optional because required text fields cause abandonment on mobile |
| Aviso de privacidade | checkbox linking to `/privacidade` | yes | Confirms the applicant has seen the notice. The legal basis for processing an application is not consent but steps prior to a contract (RGPD art. 6(1)(b)) or legitimate interest, to be confirmed by a lawyer; a required "consent" box would not be freely given consent. No pre-ticked boxes and no marketing opt-in on this form. |
| Honeypot + timestamp | hidden | — | Spam control without a CAPTCHA |
| Attribution | hidden (`utm_*`, referrer, landing page, language) | — | Measurement without personal data |

Nothing else. No company size, NIF, website or budget; those come up in the conversation.

### 5.3 Qualification without rejection

The page qualifies by description ("Para quem é": catering, planners, decoration and rental, venues, wedding planners operating in Portugal; "O que pedimos": one initial conversation, short occasional questions, prototype reviews, real-context tests). The form never rejects anyone. Triage happens in the reply: a business outside the profile gets a courteous answer and stays on an interest list (only if you decide to keep one; see `07`).

### 5.4 Trust and privacy assurances, inline

- Under the form title: "Responde-lhe o Hélio Gonçalves, programador e fundador da Sollelio."
- Beside the submit button: "Os seus dados servem apenas para responder à sua candidatura e preparar a conversa. Não os partilhamos. Pode pedir-nos para os apagar quando quiser." with a link to `/privacidade`.
- No "we respect your privacy" boilerplate; the sentence above is the whole statement. The policy page carries the formal detail: controller identity and contacts, purposes, legal basis per purpose, retention period, recipients and processors (Netlify as form processor and host, a US company, so the international-transfer disclosure applies; the analytics vendor; email), data-subject rights, and CNPD as supervisory authority (to be confirmed by a lawyer `[HYP]`).

### 5.5 Submission, confirmation and expectations

- Inline validation on blur, friendly messages, no red walls on first load. Submit button shows a sending state; on failure, the data stays in the fields and the email alternative is shown.
- Success redirects to `/events/design-partners/obrigado`, which states: what you sent (in one line), what happens next (Hélio reads every application and replies personally), when (the response window is an open decision; the page uses a true statement such as "nos próximos dias úteis" only after you confirm it), and what to do meanwhile (read "Em que ponto estamos"; reply by email if something changes).
- The confirmation page is `noindex` and is the conversion goal URL.

### 5.6 Human follow-up

- Netlify form notifications by email to you on each submission (included in the platform, see `05`).
- Applications live in Netlify's form dashboard with CSV export; a spreadsheet is the CRM for now. No CRM tool is justified before there are applications to manage.
- Optional, phase 2: an automatic acknowledgement email. It requires a serverless function and an email provider; the thank-you page already does the job without it.

### 5.7 Mobile conversion

- Inputs at 16 px or more (prevents iOS zoom), 48 px tall, correct `inputmode` and `autocomplete` attributes, pills large enough for thumbs, single-column, a sticky "Candidatar-me" button only on the programme page and only after the hero is scrolled past.
- The form appears at most two screens below the hero on mobile; "Para quem é" and "O que pedimos" sit between, so qualification still happens.

### 5.8 Measurement and attribution

Events to measure (privacy-conscious analytics, no cookies, see `05`): page views by language; programme page view; form started (first focus); form submitted; thank-you view; outbound email clicks; theme used; language switch used. Attribution from `utm_*` on shared links (one UTM set per channel: LinkedIn post, WhatsApp forward, email signature, DLM referral).

Success metrics that need your baseline decision (`07`): applications per week, share of applications inside the target profile, time to first reply.

### 5.9 Future email workflows (optional)

If volume justifies it: acknowledgement email, a short "while you wait" note with the status page, and a programme update list for applicants not selected. Each requires an email provider and a function; none is needed for launch.

### 5.10 Channel plan and provisional targets `[HYP]`

Measurement is decorative without a plan for who sends traffic and what counts as success. Proposed starting point, to be agreed with you (`07`, item 23):

| Channel | Mechanism | UTM | Founder time |
| --- | --- | --- | --- |
| Your LinkedIn | One post per week for six weeks: a scene, a proof screen, the status board, the programme; each links to the programme page | `linkedin/post` | 1 h per week |
| Direct outreach | A researched list of events businesses in the five segments; a short personal message with the programme link; no mass mailing | `direct/outreach` | 1–2 h per week |
| Network forwards | Do Luxo à Mesa and personal contacts forwarding the page by WhatsApp, with their consent | `whatsapp/forward` | occasional |
| Email signature and replies | Link in every email you send | `email/signature` | none |
| Sector associations and newsletters | Only where a genuine relationship exists (the research names APECATE as the events association) | `partner/<name>` | as arises |

Provisional success definition for the first six weeks after go-live, to be set by you: a number of applications that fit the profile, a share of applications that reach a first conversation, and time to first reply. The numbers are yours to decide; the site only has to make them measurable.

---

## 6. Beauty OS journey and contact

Until commercial availability is decided, `/beauty-os` presents the product truthfully (in use, with permission to name the tenant) and offers one contact action. Two options for that action are listed in `07`: a short contact form (name, salon, email, message) reusing the same form infrastructure, or an email link. A waitlist should exist only if you intend to onboard new salons in the foreseeable future; otherwise it creates expectations the site cannot keep.

---

## 7. Missing business decisions that block copy on these pages

All are collected and prioritised in `07-open-decisions.md`: number of partners (or the decision to state none), participation hours and duration, commercial conditions during and after the programme, response window, selection criteria and geography, whether applicants outside the profile are kept on a list, privacy policy ownership, Beauty OS availability and CTA, permission to name Salão Agradável and Do Luxo à Mesa, photo and screenshot authorisations, the programme terms as a published artefact, and acquisition channels with provisional targets.
