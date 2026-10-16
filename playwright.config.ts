import { defineConfig, devices } from '@playwright/test';

// Locally you can reuse an installed Chrome: PLAYWRIGHT_CHANNEL=chrome npm run test:e2e
const channel = process.env.PLAYWRIGHT_CHANNEL;
const baseURL = process.env.BASE_URL ?? 'http://localhost:4321';

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], channel } },
    { name: 'mobile', use: { ...devices['Pixel 7'], channel } },
  ],
  // Against a deploy preview set BASE_URL and no local server is started.
  // `--ignore-lock` keeps the server in the foreground: Astro 7 otherwise moves
  // `astro preview` to the background when it detects an AI-agent shell, and
  // Playwright sees the process exit (withastro/astro#17903).
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npx astro preview --port 4321 --ignore-lock',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
      },
});
