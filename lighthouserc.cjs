// Lighthouse CI budgets from docs/05 §6 (mobile, lab).
// Locally: `npm run build && npm run lhci` (uses the built dist/ folder).
// In CI against a deploy preview: LHCI_URLS="https://deploy-preview-1--site.netlify.app/ …".
//
// SEO: the permanent standard is a category score of 1 for every page. A page
// marked non-indexable in src/i18n/routes.ts is noindex on purpose, which fails
// exactly one SEO audit (`is-crawlable`). For those pages only, the category
// assertion is replaced by every other SEO audit at score 1. When a route
// becomes indexable it falls back to the full category assertion automatically.
// Lighthouse CI loads this file with require(), so it is CommonJS; Node ≥ 22.18
// strips the types from routes.ts on load.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { routes } = require('./src/i18n/routes.ts');

const pages = Object.values(routes).flatMap((route) =>
  Object.values(route.paths).map((path) => ({
    path,
    // The static server used locally needs file names; Netlify serves clean URLs.
    file: path === '/' ? 'index.html' : `${path.slice(1)}.html`,
    indexable: route.indexable,
  })),
);

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const urlPattern = (list) =>
  `^https?://[^/]+(?:${list.flatMap((p) => [escape(p.path), `/${escape(p.file)}`]).join('|')})$`;

const budgets = {
  'categories:performance': ['error', { minScore: 0.95 }],
  'categories:accessibility': ['error', { minScore: 1 }],
  'categories:best-practices': ['error', { minScore: 1 }],
  'categories:seo': ['error', { minScore: 1 }],
  'largest-contentful-paint': ['error', { maxNumericValue: 1800 }],
  'cumulative-layout-shift': ['error', { maxNumericValue: 0 }],
  'total-blocking-time': ['error', { maxNumericValue: 50 }],
  'resource-summary:script:size': ['error', { maxNumericValue: 25600 }],
  'resource-summary:font:size': ['error', { maxNumericValue: 81920 }],
  'resource-summary:total:size': ['error', { maxNumericValue: 307200 }],
};

// Lighthouse 12 SEO audits other than `is-crawlable` (structured-data is manual).
const seoAuditsExceptCrawlable = [
  'document-title',
  'meta-description',
  'http-status-code',
  'link-text',
  'crawlable-anchors',
  'robots-txt',
  'image-alt',
  'hreflang',
  'canonical',
];

const noindexPages = pages.filter((p) => !p.indexable);
const urls = process.env.LHCI_URLS?.split(/\s+/).filter(Boolean);

module.exports = {
  ci: {
    collect: {
      ...(urls
        ? { url: urls }
        : { staticDistDir: './dist', url: pages.map((p) => `http://localhost/${p.file}`) }),
      numberOfRuns: 3,
    },
    assert: {
      assertMatrix: [
        noindexPages.length && {
          matchingUrlPattern: urlPattern(noindexPages),
          assertions: {
            ...budgets,
            'categories:seo': 'off',
            ...Object.fromEntries(
              seoAuditsExceptCrawlable.map((id) => [id, ['error', { minScore: 1 }]]),
            ),
          },
        },
        {
          // Every other URL, including any page not in the route map.
          matchingUrlPattern: noindexPages.length
            ? `^(?!${urlPattern(noindexPages).slice(1)})`
            : '.*',
          assertions: budgets,
        },
      ].filter(Boolean),
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci' },
  },
};
