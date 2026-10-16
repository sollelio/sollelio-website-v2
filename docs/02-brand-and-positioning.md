# 02 · Brand architecture, positioning, audiences, messaging and voice

**Status.** Recommendation for your review. Source tags as defined in `01-current-site-audit.md`. Portuguese copy in this document is proposed copy, not approved copy.

---

## 1. Brand architecture

### 1.1 The model: one company, endorsed products, one symbol

The approved assets already encode a clear model `[BRAND]`: a single symbol whose top-right plane carries a product accent, and lockups in which the Sollelio wordmark is dominant and the product descriptor subordinate. The website should make this model legible rather than invent another one.

| Level | Name | Role on the website | Accent `[BRAND]` |
| --- | --- | --- | --- |
| Masterbrand | **Sollelio** | The company. Carries credibility, vision, the founder, the method (software built inside real businesses). Owns `/`, navigation, footer, legal pages. | Cobalt `#2457F5` on Mineral Indigo |
| Product | **Sollelio Events** | Operations platform for events businesses. In development (V2). Owns `/events` and the Founding Design Partner experience. | Teal `#00A69A` |
| Product | **Sollelio Beauty OS** | Back-office operations for salons and barbershops. Mobile-first PWA in real use. Owns `/beauty-os`. | Precision Violet `#7657D6` (`#9A7CF0` on dark) |
| Future product (provisional) | Sollelio Workforce | Not on the website until named and real. The asset exists `[BRAND]`; its appearance would only weaken credibility now. | Amber `#D98A20` |
| Programme | **Founding Design Partners** | A company method applied per product, not a brand. Today it is open for Events; Beauty OS already had one (Salão Agradável) `[BRIEF]`. | Inherits the product accent |

Rules this implies for the site `[REC]`:

1. The company lockup appears in the global header on every page. The product lockup appears inside the product page (hero or product bar), never as a replacement for the company mark. This fixes the VVarelAI drift where the masterbrand lockup fronted an Events page `[VV-ZIP]`.
2. The accent colour tells the visitor where they are: cobalt on company surfaces, teal on Events surfaces, violet on Beauty OS surfaces. Buttons, eyebrow labels, focus rings and status chips follow the accent of the page they sit on.
3. The symbol is never redrawn or recoloured beyond the accent plane `[BRAND]`. The website needs no new marks.
4. The programme is always named with its product: "Parceiros Fundadores · Sollelio Events". While applications are open it may appear in the global navigation and footer as a campaign link, styled as an action (button or accent link) rather than as a product entry; it must never read as a third product.

### 1.2 Programme naming

The live site and your brief use the English term "Founding Design Partner" untranslated `[LIVE]` `[BRIEF]`. VVarelAI keeps the English name in the page title and otherwise speaks of "candidatar-me" and "o programa" `[VV-ZIP]` `[VV-PDF]`. For a Portuguese owner of a catering company, "Design Partner" is software-industry jargon.

Recommendation `[REC]`: lead in Portuguese with **Parceiro Fundador** (programme: **Parceiros Fundadores do Sollelio Events**) and keep **Founding Design Partner** as the formal English name, used on English pages and once in Portuguese copy as the equivalent ("o programa de Parceiros Fundadores, ou Founding Design Partners"). "Parceiro Fundador" communicates status and belonging immediately and is natural pt-PT. This is a reversible naming decision and is listed in `07`.

---

## 2. Positioning

### 2.1 Sollelio (company)

**Position.** Sollelio builds operational software from inside real businesses. It is not a studio, not an agency, not a generic SaaS factory. Its products exist because a real business needed them first, and they are developed with the businesses that use them.

**Why this is credible today.** The Do Luxo à Mesa system is in daily use `[LIVE]`; Beauty OS runs in a real salon `[BRIEF]`; the founder is a programmer who built both `[LIVE]` `[BRIEF]`. No other claim is needed, and no claim beyond these should be made.

**Proposed company line (pt-PT).**

- Primary `[REC]`: **Software de operações, construído dentro de negócios reais.**
- Alternative (current, already indexed) `[LIVE]`: Software para operar melhor o seu negócio.
- Supporting sentence: A Sollelio cria software para o trabalho que acontece todos os dias num negócio: pedidos, marcações, pagamentos, equipa, stock, fecho do dia. Começa sempre dentro de uma empresa real e cresce com as empresas que o usam.

The primary line replaces an abstract benefit with the company's actual differentiator (origin and method). The current line is kept as the `<title>` suffix candidate if you prefer continuity.

### 2.2 Sollelio Events (product, in development)

**Position.** The operations platform for events businesses in Portugal, built with events businesses. It is the second generation of a system that already runs a real events company every day.

**Promise hierarchy.**

1. Outcome: the event is the work you love; everything around it stops depending on memory.
2. Mechanism: enquiries, proposals, deposits, documents, the team for the day and follow-up live in one place, with a next step always visible.
3. Proof: the original system is in daily use at Do Luxo à Mesa (screens shown, labelled).
4. Invitation: V2 is being built now with a small group of Portuguese events businesses; their operational knowledge shapes what is built.

**Proposed hero (pt-PT).** `[REC]`

- Status badge above the headline: *Em desenvolvimento · Candidaturas abertas*
- H1: **Faça o evento. O resto fica tratado.** `[VV-ZIP]`
- Lead: *É isto que estamos a construir com empresas de eventos em Portugal: pedidos, propostas, sinais, equipa e documentos num só sítio, com o próximo passo sempre à vista.*

The VVarelAI headline is kept because it is the best line in any of the sources. The badge and the lead turn it from a present-tense capability claim into a stated vision with explicit status, which satisfies the brief's rule. If you prefer a headline that is literally true today, the alternative is: **O evento acontece num dia. O trabalho começa semanas antes.**

**Truth tiers (mandatory vocabulary).** `[BRIEF]` `[REC]`

| Tier | Label (pt-PT) | Label (en) | What may be said |
| --- | --- | --- | --- |
| 1 | **Já funciona no sistema original** | Running in the original system | Capabilities demonstrably in daily use at Do Luxo à Mesa; shown with real screenshots and the caption that it is that company's system. |
| 2 | **Já funciona no V2** | Working in V2 | Only capabilities you confirm as implemented and verified in V2. None are confirmed in the material I have. |
| 3 | **Em desenvolvimento** | In development | Work actively under way; described as intent, never as a feature. |
| 4 | **Em estudo** | Being explored | Ideas and questions, phrased as questions where possible. |

Every capability statement on `/events` must sit visibly in one of these tiers. The four tiers are the brief's `[BRIEF]`; the VVarelAI PDF's three-column block is the right visual device `[VV-PDF]` and gains a fourth column.

**Evidence rule for tier 1.** A capability may be listed as working in the original system only if it is visible in an authorised screenshot or confirmed by you in writing. The status board is reviewed line by line before the recruitment release (`06`). Lines inherited from proposal copy (for example "só prometida" or "Volta a ser seu") do not qualify until confirmed.

### 2.3 Sollelio Beauty OS (product, in real use)

**Position.** The back-office of the salon, in your pocket. Not a booking marketplace and not an agenda: the daily control of services, professionals, payments, stock, expenses and period closing. `[BRIEF]`

**Proposed hero (pt-PT).** `[REC]`

- Eyebrow: *Sollelio Beauty OS · para salões e barbearias*
- H1: **O salão sob controlo, a partir do telemóvel.**
- Lead: *Serviços, profissionais, pagamentos, stock, despesas e fecho do dia num só sítio. Construído com o Salão Agradável, onde está em utilização.*
- CTA: *Falar connosco sobre o Beauty OS* (the commercial CTA depends on availability, see `07`).

Claims that need verification before publication `[BRIEF]`: the exact capability list, "mobile-first PWA", "em utilização diária", the tenant's permission to be named, and whether any invoicing or payment-related wording could be read as certified invoicing. Until verified, the page uses only the capabilities listed in your brief and names the tenant only with permission.

### 2.4 How the two products avoid cannibalising each other

- Different accents, different imagery worlds (events: tables, venues, teams on the day; beauty: chairs, mirrors, the counter at closing time), different vocabularies. Same typography, grid, components and tone, so the company is recognisable across both.
- The homepage presents both as peers in a "products" section, while the campaign strip (Events partners open) is a time-bound overlay, not the company's identity.
- Beauty OS's status ("em utilização") and Events' status ("em desenvolvimento") are stated side by side. Contrast increases credibility for both: it shows the company tells the truth about where each product is.

---

## 3. Audiences and their intentions

| Audience | Who, concretely (Portugal) | What they want from the site | Primary page | Success |
| --- | --- | --- | --- | --- |
| **Events business owner or manager** | Catering, organização de eventos, decoração e aluguer de material, quintas e espaços, wedding planners; owner-operated, small teams; operations on WhatsApp, Excel, paper and memory `[HYP]` | Recognise their reality, judge credibility, understand what participation costs them, apply without friction | `/events` → `/events/design-partners` | Qualified application |
| **Salon or barbershop owner** | 1–10 chairs, owner is often the main professional; wants cash, commissions, stock and closing under control `[HYP]` | Understand what Beauty OS does, see it is real, make contact | `/beauty-os` | Contact or waitlist (to decide) |
| **Credibility checker** | Prospective partners (both products), collaborators, future hires, agencies, people who received a WhatsApp link | Is this company real, who is behind it, what has it shipped | `/` | Reads founder and products, follows to LinkedIn or email |
| **Existing contacts searching the brand** | People who met Hélio, DLM contacts, Salão Agradável contacts | Find the site, the right product, a way to reply | `/` | Finds the page in one click |
| **English reader** | International partners, press, suppliers, Portuguese readers who prefer English | Same as above, in English; must learn that the programme is Portugal-only | `/en`, `/en/events` | Correct expectation set |

The English site is a credibility layer, not an acquisition channel for the programme. Every English programme page states, in its first screen, that the programme is for businesses operating in Portugal.

---

## 4. Messaging strategy

### 4.1 Narrative pillars

1. **Real origin.** "Nasceu dentro de uma empresa de eventos." Shown, not told: the DLM screens, the fact that the system runs daily.
2. **Operational truth.** The site speaks the owner's language: sinal, orçamento, prova de menu, montagem, 120 para 140 convidados, "o sinal entrou?". Concrete scenes replace process nouns.
3. **Built with, not for.** The design-partner method is the company's way of working, visible on both products (Salão Agradável was the first).
4. **Honest status.** Four tiers, badges, captions. Honesty is presented as a feature of the company, not as a disclaimer.
5. **A named human answers.** "Responde-lhe o Hélio Gonçalves, programador e fundador da Sollelio." `[VV-ZIP]`

### 4.2 Message house per page

| Page | Headline job | Supporting messages | Proof | Action |
| --- | --- | --- | --- | --- |
| `/` | Position the company | Two products, one method; origin; honest status | DLM screens; Beauty OS in use; founder | Go to a product; apply (strip) |
| `/events` | Promise and vision for events ops | The daily reality; what the original system already does; what V2 is; status tiers; why partners | Annotated DLM screenshot; status block | Apply |
| `/events/design-partners` | Invite the right businesses | Who it is for; what you give; what you get; how it works; FAQ | Named responder; privacy; process | Submit application |
| `/beauty-os` | Promise for salon operations | Capabilities; real use; mobile-first | Tenant (with permission); real screens (with permission) | Contact |
| `/en/*` | Same, plus geographic expectation | Programme is Portugal-only | Same | Same, or email |

### 4.3 The founder's role

Hélio is the credibility mechanism, not the hero. The story is told through facts: built the DLM system from inside the business, built Beauty OS with a salon, answers applications personally. One short founder block on the homepage, a named responder line next to every form, a LinkedIn link. No manifesto, no "visionary" language. Voice: the company speaks as "nós"; the founder appears in the third person everywhere, including the responder line ("Responde-lhe o Hélio Gonçalves"), and in the first person only in a short signed note, if one is used.

---

## 5. Voice and language

**Register.** European Portuguese, formal-direct address in the third person with imperative where natural ("Faça o evento", "Candidate-se"), consistent with both existing sources `[LIVE]` `[VV-ZIP]`. Short sentences. Concrete nouns. Numbers only when they are true. One idea per paragraph.

**Lexicon (pt-PT, use).** sinal (not "entrada" or "depósito" when meaning the booking deposit), orçamento e proposta, pedido, data, convidados, montagem, fornecedores, equipa do dia, briefing, marcação (not "agendamento"), faturação, fecho do dia / fecho do mês, profissionais, comissões, stock, despesas, caixa, cliente, "o dia a dia", "a operação".

**Avoid.** Brazilian forms (agendamento, gerenciar, time, usuário, celular, "você" written out); empty superlatives ("inovador", "revolucionar", "solução completa", "líder"); startup abstractions ("escalável", "disruptivo", "sinergias"); over-use of "fluxos de trabalho" (prefer "trabalho", "o dia a dia", "a operação"); scarcity and urgency devices ("poucos lugares", "últimas vagas", countdowns); any present-tense claim about V2 capabilities.

**English.** en-GB spelling throughout ("programme", "organisation"). Translate meaning, not words: Portuguese scenes get an English equivalent that reads naturally. Terms like "sinal" become "deposit" with the booking sense made explicit on first use.

**Orthography.** Acordo Ortográfico de 1990 throughout (faturação, direta, atualizada, projeto). Text quoted from the Do Luxo à Mesa interface keeps its original pre-reform spelling (for example "projecto") and is marked as a quotation.

**Tone test.** Would the owner of a 12-person catering company in Leiria read this sentence and think "they know what my Friday looks like"? If not, rewrite.

---

## 6. Trust signals the site may use now, and those it may not

**May use.** DLM screenshots with the origin caption (subject to the authorisation listed in `07`); the fact that Beauty OS is in use at Salão Agradável (subject to permission); the founder's name, role and LinkedIn; the explicit status tiers; the named responder; a privacy statement; the method described as steps.

**May not use.** Testimonials that do not exist; partner counts; launch dates; performance statistics; "trusted by" strips; concept renderings presented as screenshots; scarcity claims; any capability presented as existing in V2 unless you confirm it.

---

## 7. Market context

The competitor, terminology and regulatory findings that inform the positioning above are in `docs/research/market-and-seo-research.md`, summarised in `05-technical-architecture-and-seo.md` §10.2. Three consequences for positioning: (1) the only Portuguese-language events-operations competitor found is catering-centric, so the breadth of segments (decoração e aluguer, espaços, wedding planners) is a differentiator worth naming; (2) Portuguese beauty tools are invoicing-led and international ones are booking-led, so "back-office operacional" is an open position, provided the invoicing boundary is stated; (3) "design partner" can be read in Portuguese as a graphic-design partnership, which supports the Portuguese-first programme name.
