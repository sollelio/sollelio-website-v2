// Theme before first paint. Inlined by Base.astro; CSP hash from astro.config.mjs.
// Also marks the document as script-enabled so reveal animations only hide
// content when JavaScript will reveal it again.
(function () {
  document.documentElement.classList.add('js');
  try {
    const t = localStorage.getItem('sollelio-theme');
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  } catch {
    /* Storage unavailable: follow the system theme. */
  }
})();
