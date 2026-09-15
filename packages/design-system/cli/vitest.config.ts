import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    exclude: ['dist/**', 'node_modules/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      include: ['src/**/*.ts'],
      // Keep all production sources. Subprocess integration tests exercise cli.ts,
      // but Vitest cannot attribute child-process execution to the parent report.
      exclude: ['src/**/__tests__/**', 'src/**/*.test.ts', 'src/**/*.spec.ts'],
      // Measured all-source floors; raise them when coverage improves.
      thresholds: {
        lines: 75,
        functions: 80,
        branches: 72,
        statements: 75,
      },
    },
  },
});
