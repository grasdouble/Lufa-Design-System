import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { getContrastRatio } from '../../cli/src/utils/wcag.js';

const currentDir = dirname(fileURLToPath(import.meta.url));
const packageDir = resolve(currentDir, '..');
const srcDir = resolve(packageDir, 'src');
const packageJson = JSON.parse(readFileSync(resolve(packageDir, 'package.json'), 'utf8')) as {
  exports: Record<string, string>;
  files: string[];
  repository: { directory?: string };
};

const auditedThemes = {
  coffee: {
    light: '#2d1610',
    dark: '#faf7f2',
    'high-contrast': '#ffffff',
  },
  ocean: {
    light: '#0c4a6e',
    dark: '#f0f9ff',
    'high-contrast': '#ffffff',
  },
  sunset: {
    light: '#431407',
    dark: '#fff7ed',
    'high-contrast': '#ffffff',
  },
} as const;

const outlineVariants = ['primary', 'secondary', 'success', 'destructive', 'warning', 'info'] as const;
const feedbackVariants = ['success', 'destructive', 'warning'] as const;
const requiredStarterTokens = [
  '--lufa-core-color-neutral-surface-raised',
  '--lufa-core-color-feedback-success-on-background',
  '--lufa-core-color-feedback-error-on-background',
  '--lufa-core-color-feedback-warning-on-background',
  '--lufa-core-color-feedback-info-on-background',
] as const;

const strictActionOverrides = [
  {
    theme: 'cyberpunk',
    mode: 'high-contrast',
    ghostBackground: '#000000',
    colors: { success: '#00ff9f', destructive: '#ff006e', warning: '#ffd700' },
  },
  {
    theme: 'matrix',
    mode: 'dark',
    ghostBackground: '#001100',
    colors: { success: '#00ff41', destructive: '#ff3333', warning: '#ffff00' },
  },
  {
    theme: 'matrix',
    mode: 'high-contrast',
    ghostBackground: '#000000',
    colors: { success: '#00ff41', destructive: '#ff3333', warning: '#ffff00' },
  },
  {
    theme: 'volcano',
    mode: 'high-contrast',
    ghostBackground: '#000000',
    colors: { success: '#76ff03', destructive: '#ff1744', warning: '#ff9100' },
  },
  {
    theme: 'volt',
    mode: 'high-contrast',
    ghostBackground: '#000000',
    colors: { success: '#76ff03', destructive: '#ff1744', warning: '#ffea00' },
  },
] as const;

const semanticOverrides = [
  {
    theme: 'cyberpunk',
    mode: 'high-contrast',
    text: '#ffffff',
    background: '#660066',
    page: '#000000',
  },
  {
    theme: 'matrix',
    mode: 'dark',
    text: '#00ff41',
    background: '#001100',
    page: '#0d0208',
  },
  {
    theme: 'matrix',
    mode: 'high-contrast',
    text: '#00ff41',
    background: '#000000',
    page: '#000000',
  },
] as const;

function modeBlock(css: string, theme: string, mode: string): string {
  const selector = `[data-theme='${theme}'][data-mode='${mode}']`;
  const start = css.indexOf(selector);
  assert.notEqual(start, -1, `Missing ${selector}`);

  const openingBrace = css.indexOf('{', start);
  const closingBrace = css.indexOf('}', openingBrace);
  return css.slice(openingBrace + 1, closingBrace);
}

function declarationValue(block: string, token: string): string {
  const match = new RegExp(`${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*([^;]+);`).exec(block);
  assert.ok(match, `Missing ${token}`);
  return match[1].trim();
}

function assertContrast(foreground: string, background: string, minimum: number, context: string): void {
  const ratio = getContrastRatio(foreground, background);
  assert.notEqual(ratio, null, `${context} uses an unsupported color`);
  assert.ok(ratio >= minimum, `${context} is ${ratio.toFixed(2)}:1; expected at least ${minimum}:1`);
}

void test('audited themes override every outline variant active border in every mode', () => {
  for (const [theme, modes] of Object.entries(auditedThemes)) {
    const css = readFileSync(resolve(srcDir, `${theme}.css`), 'utf8');

    for (const [mode, expectedColor] of Object.entries(modes)) {
      const block = modeBlock(css, theme, mode);

      for (const variant of outlineVariants) {
        const declaration = `--lufa-component-button-type-outline-variant-${variant}-border-active: ${expectedColor};`;
        assert.ok(block.includes(declaration), `${theme}/${mode} is missing "${declaration}"`);
      }
    }
  }
});

void test('every theme declares the starter surface and feedback tokens in every mode', () => {
  for (const file of readdirSync(srcDir).filter((entry) => entry.endsWith('.css'))) {
    const theme = file.replace(/\.css$/, '');
    const css = readFileSync(resolve(srcDir, file), 'utf8');

    for (const mode of ['light', 'dark', 'high-contrast']) {
      const block = modeBlock(css, theme, mode);
      for (const token of requiredStarterTokens) {
        assert.ok(declarationValue(block, token), `${theme}/${mode} is missing ${token}`);
      }
    }
  }
});

void test('strict action-state overrides preserve WCAG AA contrast in affected modes', () => {
  for (const { theme, mode, ghostBackground, colors } of strictActionOverrides) {
    const block = modeBlock(readFileSync(resolve(srcDir, `${theme}.css`), 'utf8'), theme, mode);

    for (const variant of feedbackVariants) {
      const color = colors[variant];
      const solidToken = `--lufa-component-button-type-solid-variant-${variant}-background-active`;
      const ghostToken = `--lufa-component-button-type-ghost-variant-${variant}-text-active`;
      const outlineToken = `--lufa-component-button-type-outline-variant-${variant}-background-active`;

      assert.equal(declarationValue(block, solidToken), color);
      assert.equal(declarationValue(block, ghostToken), color);
      assert.equal(declarationValue(block, outlineToken), color);
      assertContrast('#000000', color, 4.5, `${theme}/${mode} solid ${variant}`);
      assertContrast(color, ghostBackground, 4.5, `${theme}/${mode} ghost ${variant}`);
      assertContrast('#000000', color, 3, `${theme}/${mode} outline ${variant}`);
    }
  }
});

void test('strict ghost and semantic overrides remain readable on dark theme surfaces', () => {
  const cyberpunkDark = modeBlock(readFileSync(resolve(srcDir, 'cyberpunk.css'), 'utf8'), 'cyberpunk', 'dark');
  const cyberpunkGhostColors = {
    primary: '#ff66ff',
    success: '#00ff9f',
    destructive: '#ff6699',
    warning: '#f2ff00',
  } as const;

  for (const [variant, color] of Object.entries(cyberpunkGhostColors)) {
    const token = `--lufa-component-button-type-ghost-variant-${variant}-text-active`;
    assert.equal(declarationValue(cyberpunkDark, token), color);
    assertContrast(color, '#0d001a', 4.5, `cyberpunk/dark ghost ${variant}`);
  }
  assert.equal(declarationValue(cyberpunkDark, '--lufa-component-button-type-ghost-text-hover'), '#00ffff');
  assertContrast('#00ffff', '#26004d', 4.5, 'cyberpunk/dark ghost hover');

  const cyberpunkHighContrast = modeBlock(
    readFileSync(resolve(srcDir, 'cyberpunk.css'), 'utf8'),
    'cyberpunk',
    'high-contrast'
  );
  assert.equal(declarationValue(cyberpunkHighContrast, '--lufa-component-button-type-ghost-text-hover'), '#00ffff');
  assertContrast('#00ffff', '#1a0033', 4.5, 'cyberpunk/high-contrast ghost hover');

  const nordicModes = [
    { mode: 'dark', color: '#7dd3fc', background: '#1e293b' },
    { mode: 'high-contrast', color: '#00ccff', background: '#0a1929' },
  ] as const;
  const nordicCss = readFileSync(resolve(srcDir, 'nordic.css'), 'utf8');
  for (const { mode, color, background } of nordicModes) {
    const block = modeBlock(nordicCss, 'nordic', mode);
    assert.equal(declarationValue(block, '--lufa-component-button-type-ghost-variant-primary-text-active'), color);
    assertContrast(color, background, 4.5, `nordic/${mode} ghost primary`);
  }

  for (const { theme, mode, text, background, page } of semanticOverrides) {
    const block = modeBlock(readFileSync(resolve(srcDir, `${theme}.css`), 'utf8'), theme, mode);
    assert.equal(declarationValue(block, '--lufa-semantic-interactive-text-active'), text);
    assert.equal(declarationValue(block, '--lufa-semantic-interactive-background-active'), background);
    assertContrast(text, background, 4.5, `${theme}/${mode} interactive active`);
    assertContrast(text, page, 4.5, `${theme}/${mode} interactive page`);
  }
});

void test('package exports every and only built theme plus its package metadata', () => {
  const themes = readdirSync(srcDir)
    .filter((file) => file.endsWith('.css'))
    .sort();
  const cssExports = Object.entries(packageJson.exports)
    .filter(([subpath]) => subpath.endsWith('.css'))
    .sort(([left], [right]) => left.localeCompare(right));

  assert.deepEqual(
    cssExports,
    themes.map((theme) => [`./${theme}`, `./dist/${theme}`])
  );
  assert.equal(packageJson.exports['./package.json'], './package.json');
  assert.deepEqual(packageJson.files, ['dist', 'README.md', 'CHANGELOG.md', 'LICENSE.md']);
  assert.equal(packageJson.repository.directory, 'packages/design-system/themes');
});

void test('published README links and commands describe the current package', () => {
  const readme = readFileSync(resolve(packageDir, 'README.md'), 'utf8');

  assert.match(readme, /\]\(\.\/LICENSE\.md\)/);
  assert.match(readme, /@grasdouble\/lufa_design-system-tokens\/tokens\.css/);
  assert.doesNotMatch(readme, /validate:(?:conventions|template)/);
  assert.doesNotMatch(readme, /_token-template\.css/);
});
