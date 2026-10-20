/**
 * First-touch campaign attribution for the two site forms.
 *
 * On every page the entry context is captured once per browsing session
 * (sessionStorage, cleared when the tab closes; no cookies, nothing sent
 * anywhere until a form is submitted): the three supported utm parameters,
 * the domain of an external referring site and the path of the first page.
 * Later internal navigation never overwrites a meaningful record; a record
 * from a direct visit (no campaign, no referrer) is replaced if the visitor
 * later arrives through a campaign link in the same session.
 *
 * Values are reduced to what attribution needs: utm values are length-limited
 * and rejected when they contain an address-like or URL-like value, the
 * referrer is kept as a hostname only, and the landing page as a path only.
 * The privacy policy (src/content/pages/privacy.ts) describes this; keep both
 * in step.
 */
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'] as const;
type UtmKey = (typeof UTM_KEYS)[number];

export interface Attribution extends Record<UtmKey, string> {
  referrer: string;
  landing: string;
}

const STORAGE_KEY = 'sollelio-attribution';
const UTM_PATTERN = /^[\p{L}\p{N} _.\-+|/:,()]{1,100}$/u;

function cleanUtm(value: string | null): string {
  const v = (value ?? '').trim();
  if (!v || v.includes('@') || v.includes('://') || !UTM_PATTERN.test(v)) return '';
  return v;
}

function externalReferrerHost(): string {
  if (!document.referrer) return '';
  try {
    const host = new URL(document.referrer).hostname;
    return host && host !== location.hostname ? host.slice(0, 100) : '';
  } catch {
    return '';
  }
}

/** The attribution of the current page on its own, without storage. */
export function currentAttribution(): Attribution {
  const params = new URLSearchParams(location.search);
  return {
    utm_source: cleanUtm(params.get('utm_source')),
    utm_medium: cleanUtm(params.get('utm_medium')),
    utm_campaign: cleanUtm(params.get('utm_campaign')),
    referrer: externalReferrerHost(),
    landing: location.pathname.slice(0, 200),
  };
}

function meaningful(a: Attribution): boolean {
  return UTM_KEYS.some((k) => a[k] !== '') || a.referrer !== '';
}

function readStored(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    const o = parsed as Record<string, unknown>;
    const str = (k: string) => (typeof o[k] === 'string' ? (o[k] as string) : '');
    return {
      utm_source: cleanUtm(str('utm_source')),
      utm_medium: cleanUtm(str('utm_medium')),
      utm_campaign: cleanUtm(str('utm_campaign')),
      referrer: str('referrer').slice(0, 100),
      landing: str('landing').slice(0, 200),
    };
  } catch {
    return null;
  }
}

/**
 * Records the entry context once per session. Idempotent: safe to call on
 * every page and again from the form script, whatever the script order.
 */
export function captureAttribution(): Attribution {
  const current = currentAttribution();
  const stored = readStored();
  const keep = stored !== null && (meaningful(stored) || !meaningful(current));
  if (keep) return stored;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Storage unavailable: the current page's own attribution is used.
  }
  return current;
}
