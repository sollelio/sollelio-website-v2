# Sollelio website strategy: market, language and SEO research (pt-PT)

Date: 2026-10-16. Method: 26 WebSearch/WebFetch calls plus two small curl batches (Google autocomplete endpoint, 9 queries; homepage language/price checks, 6 vendors). Capterra PT and GetApp PT returned HTTP 403; Fresha's pricing page rendered no content. Labels: **EVIDENCE** = seen at the cited source; **HYPOTHESIS** = plausible, needs validation; **RECOMMENDATION** = our suggestion. No search volumes are stated; autocomplete observations are not volumes.

---

## 1. How Portuguese businesses actually name these categories (pt-PT)

### Beauty (salões, cabeleireiros, barbearias)

- **EVIDENCE** – Sublime Software (Portuguese vendor): "Facturação e Gestão para Cabeleireiros e Institutos de Beleza"; segments *cabeleireiros, institutos de beleza, centros de estética, spas*; vocabulary *marcações, agenda, talão, pacotes de sessões, faturas, recibos, SAFT, comissões, controlo de caixa, stock, inventário, fichas de cliente, fidelização, SMS*; claims "certificado pela Autoridade Tributária (AT)" and "mais de 300" customers (vendor claim); no prices; no online booking. https://www.sublimesoftware.pt/
- **EVIDENCE** – Cegid Vendus ("Vendus by Shine"): H1 "Software de Faturação para Cabeleireiros", category "Cabeleireiros e Estética" (plus barbearias, estética). Uses **both** *marcação* (bookings) and *agendamento* (booking requests/integrations); *controlar a caixa, movimentos de caixa por tipo de pagamento, stock, relatórios por cliente/serviço/colaborador*. Does **not** use *fecho de caixa* or *programa de gestão*. https://www.vendus.pt/software-faturacao-cabeleireiros/
- **EVIDENCE** – Kolvero (barbershops; "feito para o ritmo de uma barbearia em Portugal"): title "Software para barbearias — agendamento, clientes e faturação" but *marcações* in the body; *agenda, lembretes SMS, fichas, caução por MB WAY ou Multibanco*; no *comissões/stock/fecho de caixa*. https://www.kolvero.pt/software-barbearia
- **EVIDENCE** – Koibox (Spanish vendor) serves a `lang="pt-PT"` page "Software n.º 1 para salões de cabeleireiro", slug "programa-gestao-cabeleireiro". https://koibox.cloud/pt/programa-gestao-cabeleireiro/
- **EVIDENCE** – Marketplaces use the verb *agendar* even for Portugal: Treatwell.pt "Agende online cabeleireiro, esteticista, unhas, massagem" (hreflang pt-PT); Booksy pt-pt "Agende Serviços de Beleza em Poucos Cliques". Fresha's /pt page is served with `html lang="pt-BR"`. https://www.treatwell.pt/ ; https://booksy.com/pt-pt/ ; https://www.fresha.com/pt
- **EVIDENCE** – Generic "software para salões de beleza" searches return mostly Brazilian vendors using *estoque, fechamento de caixa, agendamento* (Beleza Soft, Avec). https://belezasoft.com/ ; https://negocios.avec.app/
- **HYPOTHESIS** – Safest pt-PT nouns: *marcação/marcações, stock, fecho de caixa / fecho do dia, equipa, colaborador/profissional*. *Agendar* as a verb is fine; *agendamento* as a category noun reads Brazilian. Kolvero's *caução* is the salon word for a no-show deposit (EVIDENCE); for events *sinal* is the customary pt-PT deposit word vs pt-BR *entrada* (HYPOTHESIS; not confirmed in a fetched source). Validate with 3–5 owners.

### Events (catering, organização de eventos, quintas, aluguer, wedding planners)

- **EVIDENCE** – Caterfy's Portuguese page: headline "Gestão de Eventos e Catering", clearly pt-PT (*Registe-se, Definições, ementa, equipas, gerir, carregar em*). Vocabulary: *leads, orçamentos, follow-ups, pré-reservas, visitas, ementas, fichas técnicas, fichas de produção, mise-en-place, atoalhados, contratos, pagamentos, capitações, encomendas, stock, colaboradores externos, armazéns, KPI's*. Not used: *propostas, sinal*. https://www.caterfy.com/pt
- **EVIDENCE** – APECATE ("Associação Portuguesa de Empresas de Congressos, Animação Turística e Eventos") categorises members as *organizadoras de congressos e de eventos, animação turística, agências de viagens, campos de férias* plus "membros colaboradores" (connected service providers); quota €400/year. Catering, aluguer and espaços are not named categories. https://apecate.pt/junte-se-a-nos/ ; https://apecate.pt/missao-e-objetivos/
- **EVIDENCE (snippet only; fetch blocked)** – Capterra PT's category is "Software para Catering", listing international tools (Connecteam, Deputy, HoneyBook, Tripleseat, Total Party Planner). https://www.capterra.pt/directory/20023/catering/deployment-options/mac/software
- **HYPOTHESIS** – "software para empresas de eventos" is not a phrase people type (autocomplete returned only the typed phrase, §3). Owners more likely search by trade: "software catering", "programa gestão de eventos", "orçamentos para eventos".

### pt-BR → pt-PT substitutions (EVIDENCE from Caterfy vs Brazilian sites unless marked)

| pt-BR (avoid) | pt-PT (use) |
|---|---|
| gerenciar, gerenciamento | gerir, gestão |
| agendamento (noun) | marcação / marcações |
| estoque | stock |
| fechamento de caixa | fecho de caixa |
| cardápio | ementa |
| equipe | equipa |
| registre-se / configurações / clicar em | registe-se / definições / carregar em |
| entrada (deposit) | sinal (HYPOTHESIS) |
| "Sistemas para Salão de Beleza" (GetApp PT snippet) | "Software de gestão para salões / cabeleireiros" |

---

## 2. Competitive landscape as a Portuguese buyer sees it

Pricing below comes mostly from third-party blogs/directories (**low reliability**, often contradictory); check vendor pages before quoting.

### Events operations

1. **HoneyBook** – US clientflow/CRM for independent event pros. EVIDENCE: Capterra start price $36/month; a competitor report claims a 2026 rise (Starter $19→$36, Essentials $39→$59, Premium $79→$129). https://www.capterra.com/compare/162588-206389/HoneyBook-vs-Dubsado ; https://prospeo.io/s/honeybook-alternatives . pt-PT: not seen. Gap: USD, no Portuguese invoicing; proposals/CRM-first, not operations.
2. **Dubsado / 17hats** – CRM/forms/contracts for freelancers. EVIDENCE: Dubsado sources disagree (Capterra $20/month; others Starter $35/mo or $200/yr, Premier $55/mo or $400/yr); 17hats reportedly a single $60/month plan ($50 annual) per a competitor blog. https://getpulsesignal.com/compare/17hats-vs-dubsado ; https://agiled.app/blog/17hats-pricing . Gap: solo-oriented, English only.
3. **Aisle Planner** – wedding-planner specific. EVIDENCE (third-party): $39.99/month (10 projects) to $169.99 (100). https://www.maroo.us/blogs/honeybook-alternatives-event-planners . Gap: planner workflow, not catering/aluguer; English/USD.
4. **Tripleseat / Total Party Planner** – listed in Capterra PT's catering category (listing only; pricing/pt-PT not verified). Perfect Venue, Event Temple, Planning Pod, Releventful, Curate and Caterease were **not** verified within budget – do not cite them without checking. https://www.capterra.pt/directory/20023/catering/deployment-options/mac/software
5. **Caterfy (pt-PT)** – the only pt-PT events-ops competitor found, with real depth (orçamentos → ementas/fichas técnicas → capitações → stock/armazéns → KPIs). No public pricing; origin not stated (privacy policy hosted on catergest.com); no AT/invoicing claim. **Direct benchmark for Sollelio Events.** HYPOTHESIS gap: catering-centric; wedding planners, decoração/aluguer and quintas not addressed by name; no partner programme. https://www.caterfy.com/pt
6. **Other** – Buffet Mais and Teknisa are pt-BR (https://buffetmais.com/ ; https://www.teknisa.com/sistema-para-catering-eventos/); Infor Sales & Catering is enterprise hotel/venue (https://www.infor.com/products/sales-catering); tepublico.net pages have unclear origin (https://tepublico.net/pt/software-de-gestao-para/servico-de-catering-para-casamentos/).

### Beauty back-office

7. **Fresha** – "#1 Software for Salons and Spas" (vendor claim); marketplace/booking-first; /pt served as pt-BR (EVIDENCE). Third-party blogs: free plan removed in 2025, from ~$19.95/mo solo or $14.95/member (EU "from €12.95"), plus 20% (min $6) commission on a new client's first marketplace booking – **unverified**. https://www.fresha.com/pt ; https://trypronto.app/blog/best-free-salon-booking-software-2026 ; https://www.zentus.agency/post/salon-booking-software-europe . Gap: no AT-certified invoicing, no Portuguese period-closing; pt-BR copy.
8. **Treatwell** – marketplace with pt-PT site (EVIDENCE). Third-party: Starter ~€29/mo, Advanced ~€49/mo plus ~35% commission on new-client bookings – unverified. https://www.treatwell.pt/ ; https://www.dothebeauty.com/blog/best-salon-booking-system . Gap: acquisition channel, not back-office.
9. **Booksy** – pt-pt site (EVIDENCE). Third-party: $29.99/mo + $20 per extra staff; no booking commission except optional "Boost" – unverified. https://booksy.com/pt-pt/ ; https://vizajobs.com/top-20-best-booking-software-for-salons-in-2026/ . Gap: booking/CRM-first.
10. **Phorest / Timify** – Phorest: premium suite, demo-gated pricing (a competitor blog guesses £100–150/mo); phorest.com/pt/ returns 404 (EVIDENCE). Timify /pt-pt redirects to /en (EVIDENCE). Zenoti and Shortcuts not researched. https://pabau.com/blog/best-salon-software-uk/
11. **Vendus** – Base €9 / Flex €17 / Pro €22 per month (VAT unstated); "Software de Faturação certificado com o Nº 2230"; no native agenda (integrations Zappy, 24agenda). https://www.vendus.pt/software-faturacao-cabeleireiros/
12. **Sublime, Kolvero, Koibox, gicnet, Masterinsoft** – Sublime: sector faturação+gestão, no pricing (https://www.sublimesoftware.pt/). Kolvero: free (≤50 marcações/mo, 1 barbeiro) or €29/mo; invoices via Moloni under the heading "Faturas certificadas pela AT" – whose certificate is unclear (https://www.kolvero.pt/software-barbearia). Koibox: pt-PT page, pricing not captured. gicnet: faturação + agenda + comissões (https://gicnet.pt/cabeleireiro/). Masterinsoft: MB/Entidade-Referência payments (https://masterinsoft.com/software-para-salao-de-beleza/).

**Gap read-out (HYPOTHESIS):** Portugal splits into (a) marketplaces/booking apps with weak Portuguese financial back-office and (b) invoicing/POS tools with weak operations (commissions, stock, expenses, period closing in one mobile flow). A mobile-first "back-office + visibilidade operacional" for owners is a defensible wedge, provided the invoicing boundary (§4a) is stated honestly.

---

## 3. Search-intent map (all HYPOTHESIS unless marked)

### Observed autocomplete (EVIDENCE; Google suggest endpoint, hl=pt-PT, gl=pt, 2026-10-16; not volumes; may include pt-BR demand)

- "software para salão de beleza" → "… gratuito", "software salão de beleza", "software para gestao de salao de beleza gratuito", "software para gestão de salão de beleza", "… completo grátis".
- "software para cabeleireiros", "software para barbearias", "software para empresas de catering" → only the typed phrase. "programa de gestão para cabeleireiro", "gestão de orçamentos eventos" → no suggestions.
- "software gestão de eventos" → "software gestao de eventos", "software de gestão de eventos grátis". "programa para catering" → "programa catering doordash". "software para wedding planner" → English/Italian variants.
- Takeaway: "gratuito/grátis" intent dominates salon searches; events phrasing is thin and generic.

### Audience → funnel → page

- **Events business owner** – Problem-aware: "como fazer orçamento para catering", "controlo de custos eventos", "ficha técnica ementa" → pt-PT guides linking to /events. Solution-aware: "software gestão de eventos", "software catering Portugal", "CRM para eventos" → /events (H1 "Software de gestão para empresas de eventos"). Vendor-aware: "Caterfy alternativa", "HoneyBook em português" → FAQ/comparison (verified facts only). Decision: "Sollelio Events preço", "design partner Sollelio" → programme page.
- **Salon/barbershop owner** – Problem-aware: "fecho de caixa salão", "comissões cabeleireiros", "controlo de stock salão", "gestão financeira salão" → guides. Solution-aware: "software gestão salão de beleza", "software para barbearias", "app gestão salão telemóvel" → /beauty (H1 "Back-office para salões e barbearias"). Objections: "faturação certificada", "gratuito" → FAQ on invoicing boundary and pricing/trial.
- **Prospective design partner** – brand + "design partner"/"programa parceiros", plus LinkedIn/WhatsApp referrals → programme page that works without prior context.
- **Press/partners/talent** – "Sollelio empresa", "Sollelio Lda", "Sollelio equipa/LinkedIn" → /about with NIF/morada/contactos in footer.
- **Existing contacts** – "sollelio", "solelio", "sollelio events/beauty", "salão agradável app" → homepage with clear two-product split; monitor the misspelling in GSC.

### Validation plan (RECOMMENDATION)
1. Google Search Console from day one; monthly query review, pt vs en.
2. Google Keyword Planner (Portugal only; bucketed volumes) for the §1 candidate list.
3. Google Trends PT: "software salão de beleza" vs "software cabeleireiro" vs "software barbearia"; "gestão de eventos" vs "software catering".
4. Re-pull autocomplete quarterly (same endpoint) and log changes.
5. Ask 5 owners per vertical "what would you type into Google?" and record verbatims.

---

## 4. Regulatory/market context affecting copy and forms (verify with founder / lawyer / contabilista)

### (a) Certified invoicing (faturação certificada pela AT)

- **EVIDENCE (primary text)** – Portaria n.º 22-A/2012, art. 2.º n.º 1: IRS/IRC taxpayers, "para emissão de faturas ou documentos equivalentes e talões de venda … estão obrigados a utilizar, exclusivamente, programas informáticos de faturação que tenham sido objeto de prévia certificação pela Autoridade Tributária e Aduaneira (AT)". N.º 2 exclusions (2012 text): in-house software; turnover ≤ €100 000 in the previous period (€125 000 interim to 1 Jan 2013); fewer than 1 000 documents; vending/ticket-type sales. N.º 3 a): excluded taxpayers who **opt** to use an invoicing programme must use a certified one. Art. 6.º-C: non-certified systems issuing any client-facing document must number it sequentially and state "não serve de fatura". https://files.diariodarepublica.pt/1s/2012/01/01701/0000200005.pdf
- **EVIDENCE (secondary)** – Portaria 340/2013 narrowed the in-house exemption from 1 Jan 2014; thresholds may have changed since – check the consolidated text. https://www.apeca.pt/docs/apeca-documentos/Cert_Prog_Fat.pdf ; https://www.moloni.pt/suporte/portaria-363-2010
- **EVIDENCE (market wording)** – Vendus publishes a certificate number ("Nº 2230"); Kolvero says "Faturas certificadas pela AT" while relying on Moloni; Sublime says "certificado pela AT" without a number (URLs in §2).
- **HYPOTHESIS/RISK** – If Beauty OS records payments and financial records but does **not** emit faturas/recibos/talões, it is not a "programa de faturação" and must not claim "faturação certificada". Any printed/sent document a client could mistake for an invoice triggers art. 6.º-C duties and fiscal/reputational risk. If it ever emits invoices, it needs its own certificate or a certified partner.
- **RECOMMENDATION** – Boundary copy such as: "O Sollelio Beauty OS regista serviços, pagamentos e despesas e fecha o período; a emissão de faturas continua no seu software de faturação certificado (integração em roadmap)". Avoid "faturação certificada", "POS", "fatura" as feature names unless true; prefer "registo de pagamentos", "registos financeiros", "fecho de período", "visibilidade operacional".

### (b) RGPD for the design-partner application form

- **EVIDENCE** – GDPR art. 13 requires, at collection: controller identity/contacts, purposes and legal basis, recipients, retention period or criteria, rights, right to complain to a supervisory authority, whether provision is required. https://gdpr-text.com/pt/read/article-13
- **EVIDENCE** – Lei n.º 58/2019 designates the CNPD as Portugal's supervisory authority. https://comarcas.tribunais.org.pt/comarcas/pdf2/evora/pdf/Lei_n_58_2019_08_agosto.pdf
- **EVIDENCE (practitioner guide)** – the commonest Portuguese failure is an English-translated policy that does not identify the Portuguese controller; legal basis must be stated per purpose. https://www.legiscope.com/blog/politica-privacidade-modelo-site.html
- **RECOMMENDATION** – (1) A pt-PT privacy policy page is required once any form exists; (2) form microcopy naming Sollelio, Lda. (NIF, email), purpose ("avaliar a candidatura ao programa e contactá-lo"), legal basis (HYPOTHESIS: pre-contractual steps/legitimate interest for B2B contacts; consent only for optional newsletter), retention (HYPOTHESIS: e.g. 12 months after decision), recipients (hosting/form processor), rights and CNPD complaint right; (3) minimal fields: name, company, role, segment, city, email/phone, 1–2 qualifying questions; (4) no pre-ticked boxes; separate marketing opt-in.

### (c) Using a client's (Do Luxo à Mesa) screenshots/photos as proof

- **EVIDENCE** – Art. 79.º Código Civil: a portrait cannot be exhibited or published without consent (exceptions include public events); courts require **express** consent and accepted it where the company told the person beforehand that photos would appear on its site/magazine; an identifiable image is also personal data. https://trc.pt/?p=34711 ; https://trc.pt/?p=39879 ; https://www.uc.pt/site/assets/files/475840/20110607_acordao_sup_trib_justica_p_1581.pdf
- **HYPOTHESIS/RISK** – Live-account screenshots expose third-party personal data (customers, prices, suppliers) and trade secrets; logo/name use is also a trademark/identity matter.
- **RECOMMENDATION** – Written authorisation from Do Luxo à Mesa (and Salão Agradável) covering logo/name, specific screenshots (demo or anonymised data), photos of identifiable people (with their own consent), channels, duration and revocation. Prefer demo-data screenshots plus a short quotable testimonial.

---

## 5. Design-partner programme patterns

Three targeted searches did not surface a first-party startup "apply" page within budget; below are a published standard agreement with benchmark data, two playbooks (one with named case studies) and one naming-collision example. Vendor playbooks are promotional.

1. **Common Paper – Design Partner Agreement standard** (https://commonpaper.com/standards/design-partner-agreement/). EVIDENCE: early access "for its internal business purposes"; fees optional (**75% no fees**), future discount optional (43%); asks regular feedback (72%; of those 46% twice-monthly, 36% monthly), case study/reference, private (64%) or public (61%) customer-list appearance; 49% of terms are 3 or 6 months; either side may terminate on 30 days' notice; provider owns feedback; standard omits liability cap and data-privacy clauses. Cover-page fields: product description, session count/frequency, case-study/list/reference options, discount, term, fees, governing law. Tone: founder-friendly, pro-provider ("early believers in your vision").
2. **Koji – Design Partner Program playbook** (https://www.koji.so/docs/design-partner-program). EVIDENCE: "not pilot customers, not beta testers"; offers roadmap vote (no veto), free design-phase then 30–50% off list for 12–24 months, priority support; asks 1–4 h/month plus async feedback (sample: 45-min call every two weeks, prototype feedback within 5 business days), mutual NDA, public reference after GA subject to partner review; 30-day no-penalty exit. Qualification: 30-minute call scored on problem severity (raised unprompted), workaround evidence (already paying for a hack), decision authority, time willingness – 4/4 become partners, others early-access leads. 5–15 partners (7–10 typical), 3–12 months. Names Linear, Figma, Stripe, Notion, Vercel as examples (unverified).
3. **Bessemer Atlas – case studies** (https://www.bvp.com/atlas/design-partners-the-pre-launch-edge-most-ai-founders-ignore). EVIDENCE: Ada's founders worked as support agents in seven companies that became design partners running v1 in production; Strella recruited 12 partners via cold LinkedIn outreach, biweekly meetings, launch discount, hard conversion deadline – all 12 converted. Prefer strangers to friends ("much harder to convince a stranger on the internet than someone doing you a favor"); end with a binary paid/not decision; 5–12 partners; "Enthusiasm is noise. Conversion is clarity."
4. **Terms guides** (https://dowhatmatter.com/guides/design-partner-agreement ; https://www.saastr.com/dear-saastr-what-incentives-are-given-to-design-partners-and-other-super-early-customers). EVIDENCE: "preferential pricing" must be spelled out; one guide cites a 40% discount locked for three years for quarterly feedback and a case study; equity flagged as risky.
5. **Naming collision – Showit "Design Partner Program"** (https://showit.com/design-partner). EVIDENCE: in web design, "design partner" means an agency directory. HYPOTHESIS: Portuguese readers may parse "Design Partners" as "parceiros de design (gráfico)"; keep the English name but add a pt-PT line ("empresas que constroem a V2 connosco").

**Lessons for a trustworthy, non-manipulative page (RECOMMENDATION):** state the three numbers (places, months, price lock) and the ask in hours/month; state the exit (30 days, either side, no penalty); publish qualification criteria so people self-select; promise influence honestly ("voto, não veto"), never features; references only with written approval; show the pt-PT agreement before people apply; no fake countdowns or "últimas vagas" (a real cap with a visible count is fine); RGPD notice beside the button; a clear conversion moment ("no fim do programa decide se continua, ao preço acordado").

---

## 6. Synthesis: 10 decision-relevant findings

1. **Direct pt-PT competition is thin but real.** Caterfy is the only pt-PT events-ops competitor found; in beauty, Portuguese tools are invoicing-led (Vendus, Sublime, Kolvero/Moloni) while international players are booking-led. Position Sollelio Events as *operações* (orçamentos → ementas/fichas → logística → fecho) and Beauty OS as *back-office financeiro e operacional*, not another agenda/marketplace. (EVIDENCE §2; positioning RECOMMENDATION)
2. **Use pt-PT vocabulary consistently**: *gerir, gestão, marcações, stock, fecho de caixa/período, equipa, ementa, orçamento, sinal*; avoid *gerenciar, agendamento (noun), estoque, fechamento, cardápio, equipe*. Fresha serving pt-BR to Portugal is an opening. (EVIDENCE §1)
3. **Anchor H1s/titles on category labels**: "Software de gestão para empresas de eventos" with sub-labels *catering, organização de eventos, decoração e aluguer de material, quintas e espaços, wedding planners*; "Software de gestão para salões de beleza e barbearias" ("gestão de salão de beleza" phrasing exists in autocomplete; "cabeleireiros/barbearias" have no long tail yet). (EVIDENCE §3; HYPOTHESIS on priority)
4. **"Grátis/gratuito" intent is prominent for salon software.** Decide the pricing stance (trial, free tier or founding price) and answer it in the FAQ. (EVIDENCE autocomplete; RECOMMENDATION)
5. **/events vs /eventos**: Portuguese vendors use Portuguese slugs (EVIDENCE: vendus.pt/software-faturacao-cabeleireiros, kolvero.pt/software-barbearia, koibox …/programa-gestao-cabeleireiro). HYPOTHESIS: slug language is a weak signal; title, H1, body and hreflang matter far more. RECOMMENDATION: keep /events and /en/events (live) to avoid redirect churn; set `hreflang="pt-PT"`/`"en"`, pt-PT title/H1; consider /eventos only in a future IA overhaul with 301s.
6. **Never claim "faturação certificada" unless true.** The Portaria is explicit and competitors advertise certificate numbers; say plainly that invoices are issued in the client's certified software. (EVIDENCE §4a; wording RECOMMENDATION, verify)
7. **pt-PT privacy policy and form notice are launch prerequisites**, naming Sollelio as controller and CNPD as authority; legal basis per purpose; minimal fields. (EVIDENCE §4b)
8. **Client proof needs written authorisation** (logo, demo-data screenshots, express consent for identifiable people). (EVIDENCE §4c)
9. **Design-partner page = transparent contract, not a waitlist.** Numbers, ask, exit, public criteria, pt-PT explanation of the English programme name. Benchmarks: 75% fee-free; 49% run 3–6 months; 5–12 partners. (EVIDENCE §5)
10. **Do not cite unverified competitors or prices on the site.** Perfect Venue, Event Temple, Planning Pod, Releventful, Curate, Caterease, Zenoti and Shortcuts were not verified; all pricing came from contradictory third-party blogs. Any comparison page should link to vendor pricing pages and be date-stamped. (EVIDENCE of gaps §2)

*Open items for the founder:* confirm current certified-software thresholds with the contabilista; confirm whether Beauty OS will emit any client-facing documents; fix programme numbers (places, months, price lock); collect 10 owner "what would you Google" verbatims; set up GSC on day one.

---

## Corrections after independent review (16 Oct 2026)

- §1 (Events, HYPOTHESIS bullet): the query "software para empresas de eventos" was not among the nine autocomplete queries actually run (see `autocomplete-raw-2026-10-16.txt`). The statement that it "returned only the typed phrase" is withdrawn; the point stands only as a hypothesis.
- §2 items 1–4: Portuguese-language availability for HoneyBook, Dubsado, Aisle Planner and Tripleseat was "not seen" or "not verified", not confirmed absent.
