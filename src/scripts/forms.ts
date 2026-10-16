/**
 * Progressive enhancement for the two site forms (partner application and
 * Beauty OS interest). Without JavaScript the form still submits natively in
 * Netlify mode; with it we validate inline, keep the applicant's input on
 * failure and move to the confirmation page on success.
 *
 * Modes (src/config/site.ts): `demo` validates and confirms but sends
 * nothing; `netlify` posts URL-encoded data to Netlify Forms.
 */
type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function message(form: HTMLFormElement, key: 'required' | 'email' | 'group'): string {
  return form.dataset[`msg${key[0]!.toUpperCase()}${key.slice(1)}`] ?? '';
}

function errorElement(control: HTMLElement): HTMLElement | null {
  const id = control
    .getAttribute('aria-describedby')
    ?.split(/\s+/)
    .find((s) => s.endsWith('-error'));
  return id ? document.getElementById(id) : null;
}

function setError(control: HTMLElement, text: string): void {
  const el = errorElement(control);
  if (el) el.textContent = text;
  control.setAttribute('aria-invalid', text ? 'true' : 'false');
}

function validateField(form: HTMLFormElement, field: Field): boolean {
  if (field.type === 'hidden' || field.closest('[data-honeypot]')) return true;
  const group = field.closest<HTMLElement>('[data-group-required]');
  if (group) return validateGroup(form, group);
  let text = '';
  if (field.validity.valueMissing) text = message(form, 'required');
  else if (field.validity.typeMismatch && field.type === 'email') text = message(form, 'email');
  setError(field, text);
  return !text;
}

function validateGroup(form: HTMLFormElement, group: HTMLElement): boolean {
  const checked = group.querySelector('input:checked');
  setError(group, checked ? '' : message(form, 'group'));
  return !!checked;
}

function fillAttribution(form: HTMLFormElement): void {
  const params = new URLSearchParams(location.search);
  const values: Record<string, string> = {
    utm_source: params.get('utm_source') ?? '',
    utm_medium: params.get('utm_medium') ?? '',
    utm_campaign: params.get('utm_campaign') ?? '',
    referrer: document.referrer ? new URL(document.referrer).hostname : '',
    landing: location.pathname,
    lang: document.documentElement.lang,
  };
  for (const [name, value] of Object.entries(values)) {
    const input = form.elements.namedItem(name);
    if (input instanceof HTMLInputElement) input.value = value;
  }
}

async function send(form: HTMLFormElement): Promise<boolean> {
  if (form.dataset.formMode !== 'netlify') {
    await new Promise((r) => window.setTimeout(r, 400));
    return true;
  }
  const body = new URLSearchParams();
  new FormData(form).forEach((value, key) => body.append(key, String(value)));
  const response = await fetch(location.pathname, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  return response.ok;
}

function setup(form: HTMLFormElement): void {
  form.noValidate = true;
  fillAttribution(form);
  const fields = Array.from(form.querySelectorAll<Field>('input, select, textarea'));
  const groups = Array.from(form.querySelectorAll<HTMLElement>('[data-group-required]'));
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const failure = form.querySelector<HTMLElement>('[data-form-failure]');
  const sendingLabel = form.dataset.sending ?? '';

  for (const field of fields) {
    field.addEventListener('blur', () => validateField(form, field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(form, field);
    });
  }
  for (const group of groups) {
    group.addEventListener('change', () => {
      if (group.getAttribute('aria-invalid') === 'true') validateGroup(form, group);
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const results = [
      ...fields
        .filter((f) => !f.closest('[data-group-required]'))
        .map((f) => validateField(form, f)),
      ...groups.map((g) => validateGroup(form, g)),
    ];
    if (results.includes(false)) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }
    if (failure) failure.hidden = true;
    const label = submit?.textContent ?? '';
    if (submit) {
      submit.disabled = true;
      if (sendingLabel) submit.textContent = sendingLabel;
    }
    let ok = false;
    try {
      ok = await send(form);
    } catch {
      ok = false;
    }
    if (ok) {
      if (form.dataset.success) {
        location.assign(form.dataset.success);
        return;
      }
      // No confirmation page: show the inline confirmation in place of the fields.
      const done = form.querySelector<HTMLElement>('[data-form-success]');
      form.querySelector<HTMLElement>('[data-form-fields]')?.setAttribute('hidden', '');
      if (done) {
        done.hidden = false;
        done.focus();
      }
      return;
    }
    if (submit) {
      submit.disabled = false;
      submit.textContent = label;
    }
    if (failure) {
      failure.hidden = false;
      failure.focus();
    }
  });
}

export function initForms(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach(setup);
}
