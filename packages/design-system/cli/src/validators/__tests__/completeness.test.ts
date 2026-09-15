import { describe, expect, it } from 'vitest';

import { getRequiredThemeTokens, validateCompletenessContent } from '../completeness.js';

const requiredTokens = ['--lufa-core-color-primary', '--lufa-core-spacing-default'];

describe('Completeness Validator', () => {
  it('derives cumulative required token sets from published metadata', async () => {
    const starter = await getRequiredThemeTokens('starter');
    const extended = await getRequiredThemeTokens('extended');
    const advanced = await getRequiredThemeTokens('advanced');

    expect(starter.length).toBeGreaterThan(0);
    expect(extended.length).toBeGreaterThan(starter.length);
    expect(advanced.length).toBeGreaterThan(extended.length);
    expect(starter.every((token) => extended.includes(token))).toBe(true);
    expect(extended.every((token) => advanced.includes(token))).toBe(true);
  });

  it('requires every metadata token in every supported mode', () => {
    const content = `
      [data-theme='test'][data-mode='light'] {
        --lufa-core-color-primary: #000;
        --lufa-core-spacing-default: 1rem;
      }
      [data-theme='test'][data-mode='dark'] {
        --lufa-core-color-primary: #fff;
      }
    `;

    const result = validateCompletenessContent(content, requiredTokens);

    expect(result.valid).toBe(false);
    expect(result.modes).toEqual([
      { mode: 'light', missingTokens: [] },
      { mode: 'dark', missingTokens: ['--lufa-core-spacing-default'] },
      { mode: 'high-contrast', missingTokens: requiredTokens },
    ]);
  });

  it('passes a complete three-mode theme nested in an at-rule', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `@layer theme {
      [data-theme='test'] { ${declarations} }
      [data-theme='test'][data-mode='dark'] { ${declarations} }
      [data-theme='test'][data-mode='high-contrast'] { ${declarations} }
    }`;

    expect(validateCompletenessContent(content, requiredTokens).valid).toBe(true);
  });

  it('does not count token declarations scoped only to theme descendants', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `[data-theme='test'] .child { ${declarations} }`;

    const result = validateCompletenessContent(content, requiredTokens);

    expect(result.valid).toBe(false);
    expect(result.modes.every((mode) => mode.missingTokens.length === requiredTokens.length)).toBe(true);
  });

  it('does not count nested descendant declarations as theme-host declarations', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `[data-theme='test'] { .child { ${declarations} } }`;

    expect(validateCompletenessContent(content, requiredTokens).valid).toBe(false);
  });

  it('does not count negated theme selectors', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `:not([data-theme]) { ${declarations} }`;

    expect(validateCompletenessContent(content, requiredTokens).valid).toBe(false);
  });

  it('does not count declarations that require data-mode to be absent', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `[data-theme='test']:not([data-mode]) { ${declarations} }`;

    expect(validateCompletenessContent(content, requiredTokens).valid).toBe(false);
  });

  it('supports theme attributes inside :where()', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `:where([data-theme='test']) { ${declarations} }`;

    expect(validateCompletenessContent(content, requiredTokens).valid).toBe(true);
  });

  it('supports nested mode selectors on a theme host', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `
      [data-theme='test'] {
        &[data-mode='light'] { ${declarations} }
        &[data-mode='dark'] { ${declarations} }
        &[data-mode='high-contrast'] { ${declarations} }
      }
    `;

    expect(validateCompletenessContent(content, requiredTokens).valid).toBe(true);
  });

  it('combines mode branches declared inside :is()', () => {
    const declarations = requiredTokens.map((token) => `${token}: #000;`).join('');
    const content = `
      :is(
        [data-theme='test'][data-mode='light'],
        [data-theme='test'][data-mode='dark'],
        [data-theme='test'][data-mode='high-contrast']
      ) { ${declarations} }
    `;

    expect(validateCompletenessContent(content, requiredTokens).valid).toBe(true);
  });
});
