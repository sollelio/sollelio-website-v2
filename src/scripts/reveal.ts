/**
 * Section entry: elements with `data-reveal` fade and rise once when they
 * enter the viewport (docs/04 §9). The CSS only hides them when the document
 * has the `js` class and motion is allowed, so nothing depends on this file
 * to be readable. A safety timeout reveals everything after 4 s.
 */
export function initReveal(): void {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (items.length === 0) return;
  const show = (el: HTMLElement) => el.classList.add('is-visible');

  if (!('IntersectionObserver' in window)) {
    items.forEach(show);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  items.forEach((el) => observer.observe(el));
  window.setTimeout(() => items.forEach(show), 4000);
}
