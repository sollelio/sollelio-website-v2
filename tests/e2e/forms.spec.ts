import { test, expect, type Page } from '@playwright/test';

/**
 * Both forms post to Netlify Forms from the page's own path. Locally there is
 * no Netlify, so the POST is intercepted: we assert its shape (form-name,
 * fields, honeypot) and that the confirmation flow follows a 200.
 */
async function interceptPost(page: Page) {
  const posts: { url: string; body: URLSearchParams }[] = [];
  await page.route('**/*', (route) => {
    const request = route.request();
    if (request.method() !== 'POST') return route.continue();
    posts.push({ url: request.url(), body: new URLSearchParams(request.postData() ?? '') });
    return route.fulfill({ status: 200, body: '' });
  });
  return posts;
}

test('partner application: empty submit shows errors and focuses the first field', async ({
  page,
}) => {
  await page.goto('/events/design-partners#candidatura');
  await page.getByRole('button', { name: 'Enviar candidatura' }).click();
  await expect(page.locator('#f-nome')).toBeFocused();
  await expect(page.locator('#f-nome-error')).toHaveText('Campo obrigatório.');
  await expect(page.locator('#g-tipo-error')).toHaveText('Escolha pelo menos uma opção.');
  await expect(page).toHaveURL(/design-partners/);
});

test('partner application: invalid email is reported inline on blur', async ({ page }) => {
  await page.goto('/events/design-partners');
  await page.locator('#f-email').fill('nao-e-um-email');
  await page.locator('#f-email').blur();
  await expect(page.locator('#f-email-error')).toHaveText('Introduza um email válido.');
  await page.locator('#f-email').fill('teste@exemplo.pt');
  await expect(page.locator('#f-email-error')).toHaveText('');
});

test('partner application: valid submit posts to Netlify Forms and reaches the confirmation page', async ({
  page,
}) => {
  const posts = await interceptPost(page);
  await page.goto('/events/design-partners');
  const form = page.locator('form[data-form]');
  await expect(form).toHaveAttribute('data-netlify', 'true');
  await expect(form).toHaveAttribute('netlify-honeypot', 'website');
  await expect(form).toHaveAttribute('name', 'parceiros-fundadores-events');
  await page.locator('#f-nome').fill('Teste Sintético');
  await page.locator('#f-empresa').fill('Empresa de Teste');
  await page.locator('#f-funcao').selectOption('proprietario');
  await page.locator('#f-email').fill('teste@exemplo.pt');
  await page.locator('#f-contacto').selectOption('email');
  await page.locator('label.pill', { hasText: 'Catering' }).click();
  await page.locator('#f-eventos').selectOption('10-30');
  await page.locator('#f-privacidade').check();
  await page.getByRole('button', { name: 'Enviar candidatura' }).click();
  await expect(page).toHaveURL(/\/events\/design-partners\/obrigado$/);
  await expect(page.locator('h1')).toContainText('Candidatura recebida');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  expect(posts).toHaveLength(1);
  expect(new URL(posts[0]!.url).pathname).toBe('/events/design-partners');
  expect(posts[0]!.body.get('form-name')).toBe('parceiros-fundadores-events');
  expect(posts[0]!.body.get('email')).toBe('teste@exemplo.pt');
  expect(posts[0]!.body.getAll('tipo')).toEqual(['catering']);
  expect(posts[0]!.body.get('website')).toBe('');
  expect(posts[0]!.body.get('lang')).toBe('pt-PT');
});

test('partner application: a failed post keeps the answers and shows the email alternative', async ({
  page,
}) => {
  await page.route('**/*', (route) =>
    route.request().method() === 'POST' ? route.fulfill({ status: 500 }) : route.continue(),
  );
  await page.goto('/events/design-partners');
  await page.locator('#f-nome').fill('Teste Sintético');
  await page.locator('#f-empresa').fill('Empresa de Teste');
  await page.locator('#f-funcao').selectOption('gestor');
  await page.locator('#f-email').fill('teste@exemplo.pt');
  await page.locator('#f-contacto').selectOption('whatsapp');
  await page.locator('label.pill', { hasText: 'Decoração' }).click();
  await page.locator('#f-eventos').selectOption('ate-10');
  await page.locator('#f-privacidade').check();
  await page.getByRole('button', { name: 'Enviar candidatura' }).click();
  await expect(page.locator('[data-form-failure]')).toBeVisible();
  await expect(page.locator('#f-nome')).toHaveValue('Teste Sintético');
  await expect(page).toHaveURL(/design-partners$/);
});

test('beauty OS interest: valid submit posts its own form name and confirms inline', async ({
  page,
}) => {
  const posts = await interceptPost(page);
  await page.goto('/beauty-os#contacto');
  await expect(page.locator('form[data-form]')).toHaveAttribute('name', 'interesse-beauty-os');
  await page.locator('#f-nome').fill('Teste Sintético');
  await page.locator('#f-salao').fill('Salão de Teste');
  await page.locator('#f-email').fill('teste@exemplo.pt');
  await page.locator('#b-privacidade').check();
  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  await expect(page.locator('[data-form-success]')).toBeVisible();
  await expect(page.locator('[data-form-success]')).toContainText('Mensagem recebida');
  await expect(page.locator('[data-form-fields]')).toBeHidden();
  expect(posts).toHaveLength(1);
  expect(posts[0]!.body.get('form-name')).toBe('interesse-beauty-os');
  expect(posts[0]!.body.get('salao')).toBe('Salão de Teste');
});

test('english application form uses the english confirmation page', async ({ page }) => {
  await page.goto('/en/events/design-partners');
  await expect(page.locator('form[data-form]')).toHaveAttribute(
    'data-success',
    '/en/events/design-partners/thank-you',
  );
  await expect(page.locator('form[data-form]')).toHaveAttribute(
    'action',
    '/en/events/design-partners/thank-you',
  );
});
