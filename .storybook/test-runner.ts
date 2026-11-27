import type { TestRunnerConfig } from "@storybook/test-runner";

/**
 * Andamio para el test-runner de Storybook.
 * No saca snapshots: las líneas de base before/after
 * se capturan en los PR de migración de cada app.
 */
const config: TestRunnerConfig = {
  tags: {
    skip: ["skip-visual"],
  },
  async postVisit(_page, _context) {
    return undefined;
  },
};

export default config;
