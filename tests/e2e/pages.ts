// Every public page, derived from the route map so the list never drifts.
import { routes, type Locale } from '../../src/i18n/routes.ts';

export interface PageUnderTest {
  path: string;
  lang: Locale;
  other: string;
  indexable: boolean;
}

export const pages: PageUnderTest[] = Object.values(routes).flatMap((route) =>
  (Object.keys(route.paths) as Locale[]).map((lang) => ({
    path: route.paths[lang],
    lang,
    other: route.paths[lang === 'pt-PT' ? 'en' : 'pt-PT'],
    indexable: route.indexable,
  })),
);

export const LIGHT_BG = 'rgb(247, 244, 238)'; // #F7F4EE
export const DARK_BG = 'rgb(17, 21, 45)'; // #11152D
