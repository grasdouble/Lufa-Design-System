import { describe, expect, it } from 'vitest';

import type { CSSCustomProperty } from '../../utils/parse-css.js';
import { validateA11yContent } from '../a11y.js';

const pairs: [string, string, 'text' | 'ui'][] = [['semantic-text', 'semantic-background', 'text']];

describe('A11y Validator', () => {
  it('parses nested theme rules and validates functional colors', () => {
    const content = `
      @layer theme {
        [data-theme='test'][data-mode='light'] {
          --lufa-semantic-text: hsl(0 0% 0%);
          --lufa-semantic-background: rgb(255 255 255);
        }
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result).toMatchObject({
      valid: true,
      totalViolations: 0,
      errors: [],
      modes: [{ mode: 'light', valid: true, totalChecks: 1, skipped: 0 }],
    });
  });

  it('resolves var() whitespace and fallbacks', () => {
    const content = `
      [data-theme='test'] {
        --lufa-semantic-text: var( --missing , var(--local-text) );
        --local-text: #000;
        --lufa-semantic-background: var(--missing-background, #fff);
      }
    `;

    expect(validateA11yContent(content, new Map(), pairs).valid).toBe(true);
  });

  it('merges the base token values for each mode independently', () => {
    const baseTokens = {
      light: new Map([
        ['--lufa-semantic-text', '#000'],
        ['--lufa-semantic-background', '#fff'],
      ]),
      dark: new Map([
        ['--lufa-semantic-text', '#fff'],
        ['--lufa-semantic-background', '#000'],
      ]),
      'high-contrast': new Map([
        ['--lufa-semantic-text', '#fff'],
        ['--lufa-semantic-background', '#000'],
      ]),
    };
    const content = `[data-theme='test'] { --lufa-semantic-background: #fff; }`;

    const result = validateA11yContent(content, baseTokens, pairs);

    expect(result.modes.find((mode) => mode.mode === 'light')?.violations).toEqual([]);
    expect(result.modes.find((mode) => mode.mode === 'dark')?.violations).toHaveLength(1);
    expect(result.modes.find((mode) => mode.mode === 'high-contrast')?.violations).toHaveLength(1);
  });

  it('preserves base selector specificity when merging theme declarations', () => {
    const darkBaseTokens: CSSCustomProperty[] = [
      {
        name: '--lufa-semantic-text',
        value: '#fff',
        line: 1,
        specificity: [0, 2, 0],
        sourceOrder: 0,
      },
      {
        name: '--lufa-semantic-background',
        value: '#000',
        line: 2,
        specificity: [0, 2, 0],
        sourceOrder: 1,
      },
    ];
    const baseTokens = { dark: darkBaseTokens };
    const content = `
      [data-theme='test'] {
        --lufa-semantic-text: #000;
        --lufa-semantic-background: #000;
      }
    `;

    const result = validateA11yContent(content, baseTokens, pairs);

    expect(result.modes.find((mode) => mode.mode === 'dark')?.violations).toEqual([]);
  });

  it('applies shared theme declarations to every mode before mode overrides', () => {
    const content = `
      [data-theme='test'] {
        --lufa-semantic-text: #000;
        --lufa-semantic-background: #fff;
      }
      [data-theme='test'][data-mode='dark'] {
        --lufa-semantic-text: #fff;
        --lufa-semantic-background: #000;
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result.modes.map((mode) => mode.mode)).toEqual(['light', 'dark', 'high-contrast']);
    expect(result.modes.every((mode) => mode.valid)).toBe(true);
  });

  it('keeps mode-specific declarations above later shared declarations', () => {
    const content = `
      [data-theme='test'][data-mode='dark'] {
        --lufa-semantic-text: #fff;
        --lufa-semantic-background: #000;
      }
      [data-theme='test'] {
        --lufa-semantic-text: #ccc;
        --lufa-semantic-background: #fff;
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result.modes.find((mode) => mode.mode === 'dark')?.violations).toEqual([]);
  });

  it('honors selector specificity before later source order', () => {
    const content = `
      [data-theme='test'][data-mode='light'].specific {
        --lufa-semantic-text: #aaa;
        --lufa-semantic-background: #fff;
      }
      [data-theme='test'][data-mode='light'] {
        --lufa-semantic-text: #000;
        --lufa-semantic-background: #fff;
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result.valid).toBe(false);
    expect(result.modes[0].violations).toHaveLength(1);
  });

  it('preserves source order between shared and mode-specific declarations with equal specificity', () => {
    const content = `
      [data-theme='test'][data-mode='dark'] {
        --lufa-semantic-text: #fff;
        --lufa-semantic-background: #000;
      }
      .shared[data-theme='test'] {
        --lufa-semantic-text: #aaa;
        --lufa-semantic-background: #fff;
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result.modes.find((mode) => mode.mode === 'dark')?.violations).toHaveLength(1);
  });

  it('honors important custom property declarations', () => {
    const content = `
      [data-theme='test'][data-mode='light'] {
        --lufa-semantic-text: #000 !important;
        --lufa-semantic-text: #fff;
        --lufa-semantic-background: #fff;
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result.valid).toBe(true);
    expect(result.modes[0].violations).toEqual([]);
  });

  it('reports a cyclic foreground token even when its declaration has a fallback', () => {
    const content = `
      [data-theme='test'][data-mode='light'] {
        --lufa-semantic-text: var(--lufa-semantic-text, #000);
        --lufa-semantic-background: #fff;
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result.modes[0].skippedChecks[0].reason).toContain('circular');
  });

  it('applies normal cascade layer order instead of source order', () => {
    const content = `
      @layer weak, strong;
      @layer strong {
        [data-theme='test'][data-mode='light'] {
          --lufa-semantic-text: #000;
          --lufa-semantic-background: #fff;
        }
      }
      @layer weak {
        [data-theme='test'][data-mode='light'] {
          --lufa-semantic-text: #ccc;
        }
      }
    `;

    expect(validateA11yContent(content, new Map(), pairs).modes[0].violations).toEqual([]);
  });

  it('reverses cascade layer order for important declarations', () => {
    const content = `
      @layer weak, strong;
      @layer weak {
        [data-theme='test'][data-mode='light'] {
          --lufa-semantic-text: #000 !important;
          --lufa-semantic-background: #fff;
        }
      }
      @layer strong {
        [data-theme='test'][data-mode='light'] {
          --lufa-semantic-text: #ccc !important;
        }
      }
    `;

    expect(validateA11yContent(content, new Map(), pairs).modes[0].violations).toEqual([]);
  });

  it('keeps nested sublayers within their parent layer precedence', () => {
    const content = `
      @layer weak, strong;
      @layer strong {
        [data-theme='test'][data-mode='light'] {
          --lufa-semantic-text: #000;
          --lufa-semantic-background: #fff;
        }
      }
      @layer weak {
        @layer nested {
          [data-theme='test'][data-mode='light'] {
            --lufa-semantic-text: #ccc;
          }
        }
      }
    `;

    expect(validateA11yContent(content, new Map(), pairs).modes[0].violations).toEqual([]);
  });

  it('reports unresolved and unsupported colors as skipped checks', () => {
    const content = `
      [data-theme='test'] {
        --lufa-semantic-text: var(--missing);
        --lufa-semantic-background: color(display-p3 1 1 1);
      }
    `;

    const result = validateA11yContent(content, new Map(), pairs);

    expect(result.valid).toBe(true);
    expect(result.modes[0].skippedChecks).toHaveLength(1);
    expect(result.modes[0].skippedChecks[0]).toMatchObject({
      foreground: '--lufa-semantic-text',
      background: '--lufa-semantic-background',
    });
    expect(result.modes[0].skippedChecks[0].reason).toContain('unresolved');
  });

  it('fails with an explicit error when no supported theme rules exist', () => {
    const result = validateA11yContent(':root { --color: #fff; }', new Map(), pairs);

    expect(result.valid).toBe(false);
    expect(result.errors).toEqual(['No supported [data-theme] rules found']);
  });
});
