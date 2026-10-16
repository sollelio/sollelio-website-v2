/**
 * Site-wide facts and switches. Everything here is either a founder-approved
 * decision (docs/08) or a launch switch that must be flipped deliberately.
 */

/** General contact address shown on the live site today. */
export const contactEmail = 'helio@sollelio.com';

/**
 * Form delivery. Accepting real submissions is still gated by the privacy
 * page and the publishing blockers in docs/08 (decision 6).
 * `demo`: the form validates and shows the confirmation page, sends nothing.
 * `netlify`: the form posts to Netlify Forms (provisional provider, decision 6).
 * Netlify needs form detection enabled on the site; the honeypot field and
 * Akismet filtering are the only spam measures. The go-live gate
 * (`npm run check:placeholders`) fails while this is `demo`.
 */
export const formMode: 'demo' | 'netlify' = 'netlify';

/** Unique Netlify form names; the data of the two forms is never mixed (decision 22). */
export const formNames = {
  partners: 'parceiros-fundadores-events',
  beauty: 'interesse-beauty-os',
} as const;

/** Programme terms, as approved (decision 3). Copy reads from here so numbers never drift. */
export const programme = {
  cohortMin: 3,
  cohortMax: 5,
  months: 3,
  hoursPerMonthMin: 1,
  hoursPerMonthMax: 2,
  responseBusinessDays: 5,
  callMinutesMin: 20,
  callMinutesMax: 30,
} as const;

/** Founder presentation (decision 9). */
export const founder = {
  name: 'Hélio Gonçalves',
  title: { 'pt-PT': 'Fundador da Sollelio', en: 'Founder of Sollelio' },
} as const;
