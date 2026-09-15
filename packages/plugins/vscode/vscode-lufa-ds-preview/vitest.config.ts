import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      include: ['src/**/*.ts'],
      // Tests are not production sources; ambient declarations contain no executable code.
      exclude: ['src/**/__tests__/**', 'src/**/*.test.ts', 'src/**/*.spec.ts', 'src/types/**/*.d.ts'],
      // Measured after adding lifecycle, provider, cache, fallback, and watcher coverage.
      thresholds: {
        lines: 92,
        functions: 100,
        branches: 73,
        statements: 89,
      },
    },
  },
});
