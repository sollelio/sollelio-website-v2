import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { pages } from './pages.ts';

for (const theme of ['light', 'dark'] as const) {
  for (const p of [...pages, { path: '/nao-existe' }]) {
    test(`axe: ${p.path} (${theme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme, reducedMotion: 'reduce' });
      await page.goto(p.path);
      // Open every FAQ item so its content is audited too.
      await page.locator('details.faq-item').evaluateAll((items) => {
        for (const d of items) (d as HTMLDetailsElement).open = true;
      });
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
        .analyze();
      expect(
        results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(' | ')}`),
      ).toEqual([]);
    });
  }
}
