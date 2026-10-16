/**
 * Every page of the site, keyed by a stable id, with its path in each locale.
 * Product and programme pages keep the same slug in both languages; the
 * thank-you and privacy pages use localised slugs (docs/03 §1).
 *
 * `indexable` is the production intent: it controls the sitemap and the
 * robots meta tag. Deploy previews are kept out of search engines by
 * Netlify's `X-Robots-Tag` header, not by this flag.
 */
export const locales = ['pt-PT', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt-PT';

export interface RouteDef {
  paths: Record<Locale, string>;
  indexable: boolean;
}

export const routes = {
  home: { paths: { 'pt-PT': '/', en: '/en' }, indexable: true },
  events: { paths: { 'pt-PT': '/events', en: '/en/events' }, indexable: true },
  partners: {
    paths: { 'pt-PT': '/events/design-partners', en: '/en/events/design-partners' },
    indexable: true,
  },
  partnersThanks: {
    paths: {
      'pt-PT': '/events/design-partners/obrigado',
      en: '/en/events/design-partners/thank-you',
    },
    indexable: false,
  },
  beauty: { paths: { 'pt-PT': '/beauty-os', en: '/en/beauty-os' }, indexable: true },
  privacy: { paths: { 'pt-PT': '/privacidade', en: '/en/privacy' }, indexable: true },
} satisfies Record<string, RouteDef>;

export type RouteId = keyof typeof routes;

export function pathFor(id: RouteId, locale: Locale): string {
  return routes[id].paths[locale];
}

export const indexablePaths = new Set(
  Object.values(routes as Record<string, RouteDef>)
    .filter((r) => r.indexable)
    .flatMap((r) => Object.values(r.paths)),
);
