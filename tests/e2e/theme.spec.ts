import { test, expect, type Page } from '@playwright/test';
import { DARK_BG, LIGHT_BG } from './pages.ts';

/**
 * Records the root background in the first animation frame, i.e. before the
 * first paint. If the stored preference were applied late, this value would
 * differ from the final one (a visible flash).
 */
async function recordFirstFrame(page: Page, stored?: 'light' | 'dark') {
  await page.addInitScript((value) => {
    if (value) localStorage.setItem('sollelio-theme', value);
    requestAnimationFrame(() => {
      (window as unknown as { __firstBg: string }).__firstBg = getComputedStyle(
        document.documentElement,
      ).backgroundColor;
    });
  }, stored);
}

const firstBg = (page: Page) =>
  page
    .waitForFunction(() => (window as unknown as { __firstBg?: string }).__firstBg)
    .then((h) => h.jsonValue());

const cases = [
  {
    name: 'system dark, nothing stored → dark',
    scheme: 'dark',
    stored: undefined,
    expected: DARK_BG,
  },
  {
    name: 'system light, nothing stored → light',
    scheme: 'light',
    stored: undefined,
    expected: LIGHT_BG,
  },
  {
    name: 'system dark, stored light → light',
    scheme: 'dark',
    stored: 'light',
    expected: LIGHT_BG,
  },
  { name: 'system light, stored dark → dark', scheme: 'light', stored: 'dark', expected: DARK_BG },
] as const;

for (const c of cases) {
  test(`no theme flash: ${c.name}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: c.scheme });
    await recordFirstFrame(page, c.stored);
    await page.goto('/');
    expect(await firstBg(page)).toBe(c.expected);
    await expect(page.locator('html')).toHaveCSS('background-color', c.expected);
  });
}

test('theme choice persists across pages and reloads', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  // The footer toggle is visible at every width (the header one lives in the menu on mobile).
  const footer = page.locator('footer [data-theme-toggle]');
  await footer.locator('[data-theme-value="dark"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(footer.locator('[data-theme-value="dark"]')).toHaveAttribute('aria-pressed', 'true');

  await page.goto('/events');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('footer [data-theme-value="dark"]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  await page.locator('footer [data-theme-value="system"]').click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', /.+/);
  await page.reload();
  await expect(page.locator('html')).toHaveCSS('background-color', LIGHT_BG);
});

test('theme switcher is keyboard operable', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const dark = page.locator('footer [data-theme-value="dark"]');
  await dark.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
