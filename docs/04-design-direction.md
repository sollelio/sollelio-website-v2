# 04 · Design direction, principles, brand continuity, dark mode, motion and the use of `/design`

**Status.** Recommendation for your review. Source tags as in `01`. The visual exploration lives on a private design canvas (link below); the artboards are design mock-ups, not code, and nothing in them is approved until you say so.

---

## 1. The design canvas

**Link.** https://claude.ai/artifact/HggCCzQMxjbzLF1FqkAHxx (private to your account until you share it from the page's Share menu).

**What is on it.** Twelve artboards in five rows:

| Row | Artboards | Purpose |
| --- | --- | --- |
| 01 Fundações e componentes | Fundações do sistema visual · Componentes (claro e escuro) | Identity hierarchy on light and dark, both palettes, type specimen, accent system, spacing and radii; the component set side by side in both modes |
| 02 Homepage | Claro · Escuro · Telemóvel | The company homepage with two products, the partner strip, method, origin proof, founder, closing |
| 03 Sollelio Events | Claro · Escuro · Telemóvel | The product page: promise hero, the 23:47 scene, annotated proof, four-tier status board, programme summary, who it is for, FAQ |
| 04 Parceiros Fundadores | Candidatura · Telemóvel | The acquisition page: explanation of the programme, who it is for, four steps, the application form, what happens next |
| 05 Sollelio Beauty OS | Claro · Escuro | The product page with honest placeholders for real screenshots, capabilities, the invoicing boundary, the salon partner, contact |

**How to read it.** Each page artboard has a "Tema" tweak (light or dark) in the Tweaks panel, so any board can be flipped. The "escuro" and "telemóvel" boards reuse the same page file at a different theme or width, so they stay in sync with the main board. Text marked `[CONFIRMAR]` or in square brackets is a visible placeholder for a decision or an asset that does not exist yet; those marks are deliberate and must not reach production.

**Screenshots in the mock-ups.** The boards reuse the live site's Do Luxo à Mesa screenshots for composition. Those images show client-looking names, dates and amounts (`01` §2.3 and `07`, item 0) and are captioned on the boards as captures to be replaced by demonstration-data or blurred versions before anything is published.

**Caveat.** I did not render or verify the boards after publishing them (the canvas tooling asks that verification wait for your request). If a board fails to render or a layout breaks at a given width, tell me and I will fix the file.

---

## 2. The direction in one paragraph

**Operational editorial.** A warm, material, precise site that looks like it was made by people who understand tables being set at 06:00 and a salon closing at 20:10, not by a template. It earns distinctiveness from composition, typography, authentic imagery and the discipline of honest status, not from effects. Light mode is warm off-white paper with white cards; dark mode is Midnight Indigo with lightened accents, designed as its own palette. One symbol, one wordmark, and an accent colour that changes with the product tells the visitor where they are without a word.

Why this and not the alternatives: the live site is calm but generic `[LIVE]`; the VVarelAI prototype has warmth and a strong voice but drifts from the brand and overstates `[VV-ZIP]`. The direction keeps the live site's rigour and brand fidelity, takes the prototype's warmth and scene-led copy, and adds what neither has: a company layer, honest product status as a visual device, dark mode, and conversion craft.

---

## 3. Design principles

1. **Proof over decoration.** Real screens, labelled as what they are. Placeholders are visibly placeholders. No concept renderings presented as product. This is the brief's rule turned into a visual habit `[BRIEF]`.
2. **One identity, accent by context.** The symbol and wordmark never change. Cobalt means company, teal means Events, violet means Beauty OS. Buttons, eyebrows, chips, focus rings and markers follow the page's accent `[BRAND]`.
3. **Warm light, designed dark.** Light mode is paper, not a white void. Dark mode has its own surface hierarchy and lighter accents; nothing is simply inverted.
4. **Typography carries the brand.** Manrope at tight tracking for headlines, Manrope for text, IBM Plex Mono for labels and operational numbers. Optional: Newsreader italic for lived scenes only. Rubik stays inside the lockups.
5. **Editorial rhythm.** Big headline, short lead, two-column body, numbered rows with hairlines, asymmetric proof compositions, generous section spacing. Lists are rows, not icon grids.
6. **Status is a design element.** The four truth tiers are chips with a consistent colour code and appear wherever a capability is named.
7. **Motion explains or confirms, never performs.** Reveal, highlight, confirm. Every animation has a reduced-motion equivalent.
8. **Mobile is the conversion device.** Every page is designed at 390 px first for the application journey: the form is reachable in one tap, inputs are 16 px, targets are 48 px.

---

## 4. Brand continuity and logo usage on the website

- **Header.** The Sollelio lockup (outlined SVG, light or reverse by theme) at 150 px wide on desktop and in the footer; on mobile the header shows the standalone symbol at 40 px. This follows the brand rule that the standalone symbol is used below approximately 140 px of lockup width and that at 32 px only the symbol is used `[BRAND]`. Clear space of one quarter of the symbol width is respected by the header padding.
- **Product identification.** The product lockup appears in the product hero and in the slim product bar on `/events`; it never replaces the company lockup in the header, and two lockups never sit side by side in the header. This corrects the prototype `[VV-ZIP]`.
- **Favicon and app icons.** Masterbrand symbol as favicon site-wide (as today `[LIVE]`). Beauty OS app icons belong to the product, not the website.
- **Dark surfaces.** Reverse lockups are used on Midnight Indigo. The approved reverse files ship with a baked-in background rectangle `[BRAND]`; the website needs transparent-background exports. I produced such exports for the canvas by removing only the rectangle. **Approval requested** (`07`).
- **Events symbol.** The package has no standalone Events symbol, only the lockup and avatar `[BRAND]`. For small uses (strip, chips) I derived one by applying the approved rule "only the top-right plane changes" to the master symbol. **Approval requested**, ideally as an official export in the next asset version.
- **Do not.** No gradients, shadows or glows on the symbol; no recolouring beyond the accent plane; no monochrome lockups on photographs (use a solid or veiled panel instead) `[BRAND]`.
- **Noted for a future brand pass, not for this project:** small inconsistencies between packages (wordmark weight 500 vs 400, descriptor colour) `[BRAND]`.

---

## 5. Colour system

### 5.1 Light mode

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#F7F4EE` Warm Off-white | Page ground `[BRAND]` |
| `--bg-2` | `#FBFAF7` | Cards, panels |
| `--bg-3` | `#EFEBE2` | Muted surfaces, dividers' fill |
| `--line` | `#E6E1D6` | Hairlines, borders |
| `--ink` | `#25272B` Warm Graphite | Text `[BRAND]` |
| `--ink-2` | `#5A5D64` | Secondary text (6.0:1 on ground) |
| `--ink-3` | `#6B6E77` | Captions (4.6:1 on ground) |
| `--company` | `#3030A8` Mineral Indigo | Company accent, buttons on company pages (white text 9.9:1) |
| `--cobalt` | `#2457F5` | Symbol plane, links on light |
| `--events` | `#007D74` teal-ink | Events buttons and text on light (white text 5.0:1). The brand teal `#00A69A` stays for the symbol plane, chips and marks; white on it is 3.0:1 and fails AA for text. |
| `--beauty` | `#5B3FB8` violet-ink | Beauty OS buttons and text on light (white text 7.4:1). Brand violet `#7657D6` for marks. |
| Status chips | Já funciona no sistema original `#DFF4F1/#005E57` · Já funciona no V2 `#E3F3EA/#1F6B45` · Em desenvolvimento `#FFF1D6/#7A4B00` · Em estudo `#ECEBF2/#4A4C57` | Four tiers, all pass AA (5.6:1 to 7.2:1) |

### 5.2 Dark mode

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#11152D` Midnight Indigo | Page ground `[BRAND]` (this resolves the `#1A1D57` conflict in `[VV-ZIP]`: that range becomes a raised surface) |
| `--bg-2` | `#171C3B` | Cards |
| `--bg-3` | `#1A2046` | Panels, raised surfaces |
| `--line` | `rgba(245,244,251,.14)` | Hairlines |
| `--ink` | `#F5F4FB` | Text |
| `--ink-2` | `#C6C8E6` | Secondary text |
| `--ink-3` | `#9FA2C4` | Captions |
| Company button | `#FFFFFF` with Midnight text | The premium move on dark: white, not blue |
| `--events` | `#5FD3C9` with Midnight text | Events accent on dark (10:1) |
| `--beauty` | `#9A7CF0` with Midnight text | Beauty OS accent on dark `[BRAND]` |
| Links | `#9DB8FF` | Cobalt lightened |
| Status chips | Tinted translucent fills with light text (`#8FE3DB`, `#9ADFB5`, `#F2C063`, `#C6C8E6`) | Same semantics as light |

Both palettes are on the Fundações board. Contrast ratios were computed with the WCAG formula against the stated grounds (all text pairs listed pass AA; brand teal with white text measures 3.0:1 and is therefore reserved for marks and chips). Re-verify in the implementation with an automated check.

---

## 6. Typography

| Role | Face and weight | Size (mobile → desktop) | Notes |
| --- | --- | --- | --- |
| Display (hero) | Manrope 800 | 42 → 72–76 px | Line height 1.0, tracking −0.04em, `text-wrap: balance` |
| H2 | Manrope 800 | 32 → 44 px | Tracking −0.035em |
| H3 | Manrope 700 | 20 → 22 px | |
| Lead | Manrope 400 | 18 → 20 px | Secondary ink |
| Body | Manrope 400 | 17 px | Line height 1.6, max 68 characters |
| Small | Manrope 400–600 | 14–15 px | |
| Eyebrow / label | IBM Plex Mono 500 | 12 px, uppercase, +0.12em | Preceded by a 8 px square in the accent colour (continuity with the live site `[LIVE]`) |
| Operational numbers | IBM Plex Mono 500 | as needed, tabular | e.g. amounts in the proof section |
| Scene accent (optional) | Newsreader italic 400 | 26–30 px | Only for first-person scenes; decision in `07` |

Why Manrope and not Plus Jakarta Sans: continuity with the live site, already self-hosted and subset, variable weights, excellent Portuguese diacritics, and no brand rationale for a switch `[VV-PDF]` acknowledges the conflict. Why not Rubik for headlines: its rounded terminals read friendly but not premium at display sizes; it belongs in the lockups where it already works `[BRAND]`.

---

## 7. Layout, spacing and components

- 8 px base grid; container 1200 px; side gutters 32 px desktop, 20 px mobile; section padding 112 px desktop, 64 px mobile; column gap 32 px (64–72 px for text-and-figure pairs).
- Radii: 12 px controls, 16 px cards, 20–24 px hero panels and figures; 999 px chips and pills.
- Shadows only on proof figures and the application form (`0 30px 60px -30px` at low alpha); none on buttons.
- Component inventory (Components board): global header with language and theme controls; product bar; buttons (primary per accent, secondary outline, tertiary link); status chips and the programme badge; product card; proof figure with numbered markers; numbered editorial rows; four-column status board; programme panel; "para quem é" cards; FAQ with native `<details>`; form fields, error state, multi-select pills, consent; three-state theme switcher; footer with four columns.
- Accessibility as drawn: real buttons and links, labels bound to inputs, `aria-pressed` on toggles, `aria-current` on navigation, decorative SVG hidden, focus visible, targets ≥ 44 px.

---

## 8. Imagery

**Use.** Real screenshots of the Do Luxo à Mesa system with the origin caption (subject to written authorisation, `07`); Do Luxo à Mesa event photography if authorised (the handoff photograph is the hero candidate `[VV-ZIP]`); real Beauty OS screens once captured with the salon's permission; a founder portrait (to be taken); later, photography from partner businesses with consent.

**Do not use.** Stock photography; AI-generated imagery presented as real; concept renderings of V2 presented as product; cropped competitor UI.

**3D and advanced effects.** Evaluated and not recommended now. Nothing on these pages becomes clearer with 3D, and the brief's test ("materially improve comprehension, emotional impact or differentiation") is not met. One future candidate: an interactive walkthrough of a real V2 event page once it exists, built from the real UI rather than a mock. Video: the Downloads folder contains Sollelio Events films that I did not inspect; a short muted loop could later replace the hero photograph if its content is authentic and authorised (`07`).

---

## 9. Motion

Principles: short (150–350 ms), eased (`cubic-bezier(.2,.7,.2,1)`), one purpose per animation, and a `prefers-reduced-motion` equivalent that removes movement but keeps state changes visible.

| Moment | Motion | Purpose |
| --- | --- | --- |
| Section entry | Fade and 8 px rise, once, staggered 60 ms across siblings, with a 4 s safety timeout as the live site already does `[LIVE]` | Pace the narrative without hiding content |
| Proof figure | Markers appear in sequence and pulse once | Guide the eye to the four things that matter |
| Status board | Chips settle in order of tier | Make the honesty device memorable |
| Product bar | Slides in after the hero scrolls past | Keep orientation and the button available |
| Theme switch | 150 ms crossfade of background and text colours | Avoid a hard flash |
| FAQ | Native `<details>`; height transition via CSS only | No JavaScript |
| Form | Inline validation on blur; sending state on the button; success replaced by the thank-you page | Confidence |

Not used: parallax, scroll-jacking, auto-playing background video with sound, animated gradients, cursor effects.

---

## 10. Dark mode strategy

- Three states (system, light, dark), persisted, no flash (inline head script, see `05 §4`).
- Designed palette (section 5.2): ground, two raised surfaces, lightened accents, white primary button on company pages.
- Images: screenshots keep their light UI inside a bordered card; photographs are unchanged; the lockup switches to its reverse version and the standalone symbol to a white-planes variant (the masterbrand package has no reverse symbol file, so this is another derived export for approval, `07` item 16); illustrations and chips switch tokens.
- `theme-color` follows the active theme; `color-scheme` makes native controls match.
- Both modes are first-class in review: every board exists in both.

---

## 11. How `/design` was used, and how it will be used next

- **Used now** to turn the strategy into visible, comparable options at real sizes: the identity in both modes, the component set, and four page designs with their dark and mobile counterparts, all built on the approved assets uploaded to the canvas.
- **Next, with your feedback:** iterate on the boards (copy, hierarchy, imagery) before any code; add any missing page states (form errors, thank-you page, 404, English variants) as boards once the decisions in `07` land.
- **Then:** the approved boards become the reference for Astro components; tokens move from the Fundações board into `tokens.css` unchanged. If the design system grows, it can be published as a separate "Design System" artifact so future pages and products start from the same tokens.
