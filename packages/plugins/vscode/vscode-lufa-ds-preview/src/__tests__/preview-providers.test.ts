import { describe, expect, it, vi } from 'vitest';
import { CompletionItemKind } from 'vscode';

import {
  createCompletionProvider,
  createDocumentColorProvider,
  createHoverProvider,
  MAX_DOCUMENT_COLORS,
  MAX_DOCUMENT_SCAN_CHARACTERS,
} from '../preview-providers';

vi.mock('vscode', () => {
  class MarkdownString {
    value = '';
    supportHtml = false;

    appendMarkdown(text: string) {
      this.value += text;
    }
  }

  class Hover {
    constructor(
      public contents: MarkdownString,
      public range: unknown
    ) {}
  }

  class Color {
    constructor(
      public r: number,
      public g: number,
      public b: number,
      public alpha: number
    ) {}
  }

  class Range {
    constructor(
      public start: unknown,
      public end: unknown
    ) {}
  }

  class ColorInformation {
    constructor(
      public range: Range,
      public color: Color
    ) {}
  }

  class CompletionItem {
    detail?: string;
    documentation?: MarkdownString;
    insertText?: string;
    range?: Range;
    filterText?: string;

    constructor(
      public label: string,
      public kind?: number
    ) {}
  }

  const CompletionItemKind = {
    Variable: 1,
    Constant: 2,
    Color: 3,
  };

  return {
    MarkdownString,
    Hover,
    Color,
    Range,
    ColorInformation,
    CompletionItem,
    CompletionItemKind,
  };
});

const createMap = () => ({
  version: 1,
  css: {
    '--lufa-core-color-brand-500': 'rgb(255 0 0)',
  },
  paths: {
    'primitive.color.red.500': 'rgb(0 255 0)',
    'tokens.color.text.primary': 'rgb(0 0 255)',
    'tokens.spacing["sm-md"]': '0.5rem',
  },
});

describe('createDocumentColorProvider', () => {
  it('should return no colors or presentations when the map is unavailable', () => {
    const provider = createDocumentColorProvider({
      loadValuesMap: () => null,
      isDebugEnabled: () => false,
      getOutputChannel: () => null,
    });
    const document = {
      getText: () => 'var(--lufa-core-color-brand-500)',
    };

    expect(provider.provideDocumentColors(document as never)).toEqual([]);
    expect(provider.provideColorPresentations?.({} as never, {} as never)).toEqual([]);
  });

  it('should return colors for CSS vars and token paths', () => {
    const provider = createDocumentColorProvider({
      loadValuesMap: () => createMap(),
      isDebugEnabled: () => false,
      getOutputChannel: () => null,
    });

    const document = {
      fileName: 'styles.css',
      languageId: 'css',
      getText: () =>
        'color: var(--lufa-core-color-brand-500); background: tokens.color.text.primary; border: primitive.color.red.500; box-shadow: 0 0 0 2px oklch(70% 0.1 200 / 0.5);',
      positionAt: (offset: number) => ({ line: 0, character: offset }),
    };

    const colors = provider.provideDocumentColors(document as never);

    expect(colors).toHaveLength(4);
  });

  it('should cap the number of color decorations returned for a document', () => {
    const provider = createDocumentColorProvider({
      loadValuesMap: () => createMap(),
      isDebugEnabled: () => false,
      getOutputChannel: () => null,
    });
    const token = 'var(--lufa-core-color-brand-500);';
    const text = token.repeat(MAX_DOCUMENT_COLORS + 1);
    const document = {
      fileName: 'many-colors.css',
      languageId: 'css',
      getText: () => text,
      positionAt: (offset: number) => ({ line: 0, character: offset }),
    };

    const colors = provider.provideDocumentColors(document as never);

    expect(colors).toHaveLength(MAX_DOCUMENT_COLORS);
  });

  it('should skip documents above the safe scan size', () => {
    const appendLine = vi.fn();
    const provider = createDocumentColorProvider({
      loadValuesMap: () => createMap(),
      isDebugEnabled: () => true,
      getOutputChannel: () => ({ appendLine }) as never,
    });
    const document = {
      fileName: 'generated.css',
      languageId: 'css',
      getText: () => 'x'.repeat(MAX_DOCUMENT_SCAN_CHARACTERS + 1),
      positionAt: (offset: number) => ({ line: 0, character: offset }),
    };

    const colors = provider.provideDocumentColors(document as never);

    expect(colors).toEqual([]);
    expect(appendLine).toHaveBeenCalledWith(expect.stringContaining('Skipping color scan'));
  });

  it('should log unresolved and invalid color references in debug mode', () => {
    const appendLine = vi.fn();
    const provider = createDocumentColorProvider({
      loadValuesMap: () => ({
        version: 1,
        css: {
          '--lufa-core-color-invalid': 'not-a-color',
        },
        paths: {},
      }),
      isDebugEnabled: () => true,
      getOutputChannel: () => ({ appendLine }) as never,
    });
    const document = {
      fileName: 'invalid.css',
      languageId: 'css',
      getText: () =>
        'color: var(--lufa-core-color-missing); background: var(--lufa-core-color-invalid); tokens.color.missing;',
      positionAt: (offset: number) => ({ line: 0, character: offset }),
    };

    expect(provider.provideDocumentColors(document as never)).toEqual([]);
    expect(appendLine).toHaveBeenCalledWith(expect.stringContaining('CSS var not found'));
    expect(appendLine).toHaveBeenCalledWith(expect.stringContaining('Failed to parse color'));
    expect(appendLine).toHaveBeenCalledWith(expect.stringContaining('Color path not found'));
  });
});

describe('createHoverProvider', () => {
  it('should provide hover content for matching tokens', () => {
    const provider = createHoverProvider({
      loadValuesMap: () => createMap(),
    });

    const range = { start: { line: 0, character: 0 }, end: { line: 0, character: 10 } };
    const document = {
      getWordRangeAtPosition: () => range,
      getText: () => 'tokens.color.text.primary',
    };

    const hover = provider.provideHover(document as never, {} as never);

    expect(hover).toBeTruthy();
  });

  it('should return no hover when the range or token value is missing', () => {
    const provider = createHoverProvider({
      loadValuesMap: () => createMap(),
    });

    expect(
      provider.provideHover(
        {
          getWordRangeAtPosition: () => undefined,
        } as never,
        {} as never
      )
    ).toBeUndefined();

    expect(
      provider.provideHover(
        {
          getWordRangeAtPosition: () => ({ start: {}, end: {} }),
          getText: () => 'tokens.color.missing',
        } as never,
        {} as never
      )
    ).toBeUndefined();
  });
});

describe('createCompletionProvider', () => {
  it('should return no completions when the map or completion context is missing', () => {
    const noMapProvider = createCompletionProvider({
      loadValuesMap: () => null,
    });
    const noMatchProvider = createCompletionProvider({
      loadValuesMap: () => createMap(),
    });
    const document = {
      lineAt: () => ({ text: 'const value = plainText' }),
    };
    const position = { line: 0, character: 23 };

    expect(noMapProvider.provideCompletionItems(document as never, position as never)).toBeUndefined();
    expect(noMatchProvider.provideCompletionItems(document as never, position as never)).toBeUndefined();
  });

  it('should provide completion details for css vars', () => {
    const provider = createCompletionProvider({
      loadValuesMap: () => createMap(),
    });

    const text = 'color: var(--lufa-core-color-brand-';
    const document = {
      lineAt: () => ({ text }),
      positionAt: (offset: number) => ({ line: 0, character: offset }),
    };

    const items = provider.provideCompletionItems(document as never, { line: 0, character: text.length } as never);

    const match = (
      items as { label: string; detail?: string; kind?: number; documentation?: { value: string } }[]
    ).find((item) => item.label === '--lufa-core-color-brand-500');

    expect(match?.kind).toBe(CompletionItemKind.Color);
    expect(match?.documentation?.value).toContain('background:');
    expect(match?.detail).toBe('rgb(255 0 0)');
  });

  it('should respect quote preference for path tokens', () => {
    const provider = createCompletionProvider({
      loadValuesMap: () => createMap(),
    });

    const text = "const gap = tokens.spacing['";
    const document = {
      lineAt: () => ({ text }),
      positionAt: (offset: number) => ({ line: 0, character: offset }),
    };

    const items = provider.provideCompletionItems(document as never, { line: 0, character: text.length } as never);

    const match = (items as { label: string; detail?: string }[]).find(
      (item) => item.label === "tokens.spacing['sm-md']"
    );

    expect(match?.detail).toBe('0.5rem');
  });

  it('should respect double-quote preference and preserve non-color completion kinds', () => {
    const provider = createCompletionProvider({
      loadValuesMap: () => createMap(),
    });
    const text = 'const gap = tokens.spacing["';
    const document = {
      lineAt: () => ({ text }),
    };

    const items = provider.provideCompletionItems(
      document as never,
      {
        line: 0,
        character: text.length,
      } as never
    );
    const match = (items as { label: string; detail?: string; kind?: number }[]).find(
      (item) => item.label === 'tokens.spacing["sm-md"]'
    );

    expect(match).toMatchObject({
      detail: '0.5rem',
      kind: CompletionItemKind.Constant,
    });
  });

  it('should cap large completion result sets', () => {
    const css = Object.fromEntries(
      Array.from({ length: 205 }, (_, index) => [`--lufa-core-color-${index}`, 'rgb(255 0 0)'])
    );
    const provider = createCompletionProvider({
      loadValuesMap: () => ({ version: 1, css, paths: {} }),
    });
    const text = '--lufa-core-color-';
    const document = {
      lineAt: () => ({ text }),
    };

    const items = provider.provideCompletionItems(
      document as never,
      {
        line: 0,
        character: text.length,
      } as never
    );

    expect(items).toHaveLength(200);
  });

  it('should inspect only the current line for completion context', () => {
    const provider = createCompletionProvider({
      loadValuesMap: () => createMap(),
    });
    const line = 'color: var(--lufa-core-color-brand-';
    const document = {
      getText: vi.fn(() => {
        throw new Error('full document read');
      }),
      lineAt: vi.fn(() => ({ text: line })),
      positionAt: (offset: number) => ({ line: 4, character: offset }),
    };

    const items = provider.provideCompletionItems(
      document as never,
      {
        line: 4,
        character: line.length,
      } as never
    );

    expect(items).toHaveLength(1);
    expect(document.getText).not.toHaveBeenCalled();
    expect(document.lineAt).toHaveBeenCalledWith(4);
  });
});
