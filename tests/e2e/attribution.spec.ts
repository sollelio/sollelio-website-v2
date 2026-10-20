import { test, expect, type Page } from '@playwright/test';

/**
 * First-touch attribution (src/scripts/attribution.ts): captured once per
 * session on any page, carried to both forms through internal navigation,
 * never fabricated on direct visits, never overwritten once meaningful.
 */
const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'referrer', 'landing'] as const;

async function hiddenValues(page: Page): Promise<Record<string, string>> {
  const form = page.locator('form[data-form]');
  // The form script fills the fields after load; `landing` is never empty once it has run.
  await expect(form.locator('input[name="landing"]')).not.toHaveValue('');
  const out: Record<string, string> = {};
  for (const k of KEYS) out[k] = await form.locator(`input[name="${k}"]`).inputValue();
  return out;
}

async function interceptPost(page: Page) {
  const posts: URLSearchParams[] = [];
  await page.route('**/*', (route) => {
    const request = route.request();
    if (request.method() !== 'POST') return route.continue();
    posts.push(new URLSearchParams(request.postData() ?? ''));
    return route.fulfill({ status: 200, body: '' });
  });
  return posts;
}

test('direct visit: no fabricated attribution, landing is the page itself', async ({ page }) => {
  await page.goto('/events/design-partners');
  expect(await hiddenValues(page)).toEqual({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    referrer: '',
    landing: '/events/design-partners',
  });
});

test('campaign landing on the homepage survives navigation to the partner form and is posted', async ({
  page,
}) => {
  const posts = await interceptPost(page);
  await page.goto('/?utm_source=newsletter&utm_medium=email&utm_campaign=outubro', {
    referer: 'https://www.example.com/edicao/42?token=abc',
  });
  await page.locator('a[href="/events/design-partners"]:visible').first().click();
  await expect(page).toHaveURL(/\/events\/design-partners$/);
  expect(await hiddenValues(page)).toEqual({
    utm_source: 'newsletter',
    utm_medium: 'email',
    utm_campaign: 'outubro',
    referrer: 'www.example.com',
    landing: '/',
  });
  await page.locator('#f-nome').fill('Teste Sintético');
  await page.locator('#f-empresa').fill('Empresa de Teste');
  await page.locator('#f-funcao').selectOption('proprietario');
  await page.locator('#f-email').fill('teste@exemplo.pt');
  await page.locator('#f-contacto').selectOption('email');
  await page.locator('label.pill', { hasText: 'Catering' }).click();
  await page.locator('#f-eventos').selectOption('10-30');
  await page.locator('#f-privacidade').check();
  await page.getByRole('button', { name: 'Enviar candidatura' }).click();
  await expect(page).toHaveURL(/\/obrigado$/);
  expect(posts).toHaveLength(1);
  expect(posts[0]!.get('form-name')).toBe('parceiros-fundadores-events');
  expect(posts[0]!.get('utm_source')).toBe('newsletter');
  expect(posts[0]!.get('utm_campaign')).toBe('outubro');
  expect(posts[0]!.get('referrer')).toBe('www.example.com');
  expect(posts[0]!.get('landing')).toBe('/');
  expect(posts[0]!.get('lang')).toBe('pt-PT');
});

test('meaningful first touch is not overwritten by later internal navigation, Beauty OS form posts it', async ({
  page,
}) => {
  const posts = await interceptPost(page);
  await page.goto('/events?utm_source=linkedin&utm_medium=social&utm_campaign=lancamento');
  await page.evaluate(() => location.assign('/beauty-os?utm_source=outro&utm_campaign=outra'));
  await expect(page).toHaveURL(/\/beauty-os/);
  expect(await hiddenValues(page)).toEqual({
    utm_source: 'linkedin',
    utm_medium: 'social',
    utm_campaign: 'lancamento',
    referrer: '',
    landing: '/events',
  });
  await page.locator('#f-nome').fill('Teste Sintético');
  await page.locator('#f-salao').fill('Salão de Teste');
  await page.locator('#f-email').fill('teste@exemplo.pt');
  await page.locator('#b-privacidade').check();
  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  await expect(page.locator('[data-form-success]')).toBeVisible();
  expect(posts).toHaveLength(1);
  expect(posts[0]!.get('form-name')).toBe('interesse-beauty-os');
  expect(posts[0]!.get('utm_source')).toBe('linkedin');
  expect(posts[0]!.get('landing')).toBe('/events');
});

test('a direct first visit is replaced when a campaign link is followed later in the session', async ({
  page,
}) => {
  await page.goto('/');
  await page.goto('/beauty-os?utm_source=instagram&utm_medium=social');
  expect(await hiddenValues(page)).toEqual({
    utm_source: 'instagram',
    utm_medium: 'social',
    utm_campaign: '',
    referrer: '',
    landing: '/beauty-os',
  });
});

test('address-like or oversized campaign values are dropped', async ({ page }) => {
  const long = 'a'.repeat(101);
  await page.goto(
    `/events/design-partners?utm_source=alguem@exemplo.pt&utm_medium=https://x.y/z&utm_campaign=${long}`,
  );
  const v = await hiddenValues(page);
  expect(v.utm_source).toBe('');
  expect(v.utm_medium).toBe('');
  expect(v.utm_campaign).toBe('');
});
