import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests/ui',
  fullyParallel: false,
  use: { baseURL: 'http://127.0.0.1:3001', viewport: { width: 1440, height: 1000 }, headless: true },
  webServer: { command: 'npm run dev -- --port 3001 --strictPort', url: 'http://127.0.0.1:3001', reuseExistingServer: false },
})
