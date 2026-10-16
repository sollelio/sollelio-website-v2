// `astro check` exits with status 0 when it cannot load @astrojs/check, which
// would let type errors through silently. Fail loudly instead.
try {
  await import('@astrojs/check');
} catch (error) {
  console.error('[require-checker] @astrojs/check cannot be loaded:', error.message);
  process.exit(1);
}
