/**
 * Theme switcher. The initial attribute is set before first paint by the
 * inline script in Base.astro; this module only handles user changes.
 * Storage key and values must match that inline script.
 */
export const THEME_KEY = 'sollelio-theme';
type Choice = 'system' | 'light' | 'dark';

function readChoice(): Choice {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system';
  }
}

function syncThemeColor(): void {
  const color = getComputedStyle(document.documentElement).getPropertyValue('--theme-color').trim();
  const metas = document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]');
  metas.forEach((m) => {
    if (!m.dataset.original) m.dataset.original = m.content;
    m.content = readChoice() === 'system' ? m.dataset.original : color;
  });
}

function apply(choice: Choice): void {
  const root = document.documentElement;
  root.classList.add('theme-transition');
  if (choice === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', choice);
  try {
    if (choice === 'system') localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, choice);
  } catch {
    /* Storage unavailable (private mode): the choice lasts for this page only. */
  }
  syncThemeColor();
  updatePressed(choice);
  window.setTimeout(() => root.classList.remove('theme-transition'), 200);
}

function updatePressed(choice: Choice): void {
  document.querySelectorAll<HTMLButtonElement>('[data-theme-value]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.themeValue === choice));
  });
}

let initialised = false;
export function initThemeToggles(): void {
  if (initialised) return;
  initialised = true;
  updatePressed(readChoice());
  syncThemeColor();
  document.addEventListener('click', (event) => {
    const button = (event.target as Element | null)?.closest<HTMLButtonElement>(
      '[data-theme-value]',
    );
    if (!button) return;
    apply(button.dataset.themeValue as Choice);
  });
}
