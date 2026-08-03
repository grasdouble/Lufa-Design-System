import storybook from 'eslint-plugin-storybook';

import lufaReactConfig from '@grasdouble/lufa_config_eslint/react.mjs';

export default [
  ...lufaReactConfig,
  { ignores: ['storybook-static', 'eslint.config.mjs', 'prettier.config.mjs'] },
  ...storybook.configs['flat/recommended'],
  {
    files: ['src/**/*.{ts,tsx}', '.storybook/**/*.{ts,tsx}', 'vite.config.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'react/no-unescaped-entities': 'off',
      // Console is often used in stories for demonstration
      'no-console': 'off',
    },
  },
];
