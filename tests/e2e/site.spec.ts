import { test, expect } from '@playwright/test';
import { pages } from './pages.ts';

for (const p of pages) {
  test(`${p.path}: language, canonical, hreflang, robots and switch`, async ({ page }) => {
    const response = await page.goto(p.path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', p.lang);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://sollelio.com${p.path}`,
    );
    await expect(page.locator('link[rel="alternate"][hreflang="pt-PT"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      p.indexable ? /^index/ : /noindex/,
    );

    // The footer switch is visible at every width; it keeps the visitor on the same page.
    await page.locator('footer [data-lang-switch]').click();
    await expect(page).toHaveURL(new RegExp(`${p.other === '/' ? '/$' : `${p.other}$`}`));
  });
}

test('every internal link resolves', async ({ page, request }) => {
  const seen = new Set<string>();
  for (const p of pages) {
    await page.goto(p.path);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) =>
        links.map((a) => (a as HTMLAnchorElement).getAttribute('href') ?? ''),
      );
    for (const href of hrefs) {
      const path = href.split('#')[0]!;
      if (!path || seen.has(path)) continue;
      seen.add(path);
      const response = await request.get(path);
      expect(response.status(), `${href} linked from ${p.path}`).toBe(200);
    }
  }
  expect(seen.size).toBeGreaterThan(8);
});

test('in-page anchors exist on the pages that link to them', async ({ page }) => {
  for (const p of pages) {
    await page.goto(p.path);
    const anchors = await page
      .locator(`a[href^="#"], a[href^="${p.path}#"]`)
      .evaluateAll((links) => links.map((a) => (a as HTMLAnchorElement).hash.slice(1)));
    for (const id of new Set(anchors)) {
      if (id) await expect(page.locator(`#${id}`), `#${id} on ${p.path}`).toHaveCount(1);
    }
  }
});

test('skip link moves focus to the main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Saltar para o conteúdo' });
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('unknown URL returns the 404 page with status 404', async ({ page }) => {
  const response = await page.goto('/nao-existe');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('Página não encontrada');
});

test('no console errors on any page', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  for (const p of pages) await page.goto(p.path);
  expect(errors).toEqual([]);
});

test('no placeholder text is visible outside the provisional privacy page', async ({ page }) => {
  for (const p of pages.filter((x) => !x.path.includes('privac'))) {
    await page.goto(p.path);
    const text = await page.locator('body').innerText();
    expect(text, p.path).not.toMatch(/CONFIRMAR|CONFIRM:|\[[A-ZÀ-Ý][^\]]{2,}\]/);
  }
});
