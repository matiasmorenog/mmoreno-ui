import { defineConfig } from "@playwright/test";

/**
 * Regresión visual con Playwright contra Storybook.
 * Hoy el spec está salteado: no hay imágenes before/after en este corte.
 */
export default defineConfig({
  testDir: "./visual-regression",
  outputDir: "./test-results/visual",
  snapshotPathTemplate: "{testDir}/snapshots/{arg}{ext}",
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  use: {
    baseURL: "http://127.0.0.1:6006",
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: "npm run storybook -- --ci",
    url: "http://127.0.0.1:6006",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
