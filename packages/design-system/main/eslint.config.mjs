import lufaReactConfig from '@grasdouble/lufa_config_eslint/react.mjs';

export default [
  ...lufaReactConfig,
  {
    ignores: [
      '**/*.config.cjs',
      '**/*.config.mjs',
      'scripts/**/*.cjs',
      'scripts/**/*.js',
      'vite.config.ts',
      '*.config.ts',
    ],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Enforce: Do not import token JS/TS exports in component files
    files: ['src/components/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@grasdouble/lufa_design-system-tokens'],
              message:
                '❌ Do not import token JS/TS exports in React components.\n\n' +
                '✅ Use CSS Modules with CSS custom properties instead:\n' +
                '   .button { color: var(--lufa-primitive-color-blue-600); }\n\n' +
                '📚 See: packages/design-system/tokens/docs/USAGE_GUIDELINES.md',
            },
          ],
        },
      ],
    },
  },
  {
    // Allow token imports in stories, tests, and utility files
    files: ['**/*.stories.{ts,tsx}', '**/*.test.{ts,tsx}', 'src/utils/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
];
