import type { APIRoute } from 'astro';
import { indexablePaths } from '../i18n/routes.ts';

// The sitemap is referenced only once at least one page is indexable;
// until then @astrojs/sitemap does not emit it.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (indexablePaths.size > 0 && site)
    lines.push('', `Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
