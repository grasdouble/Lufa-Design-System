import type { CompletionItemProvider, DocumentColorProvider, ExtensionContext, HoverProvider } from 'vscode';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { activate, deactivate } from '../index';

const vscodeMocks = vi.hoisted(() => {
  const createMockOutputChannel = () => ({
    appendLine: vi.fn<(message: string) => void>(),
    dispose: vi.fn<() => void>(),
  });
  let outputChannel: ReturnType<typeof createMockOutputChannel> | null = null;
  let configurationListener: ((event: { affectsConfiguration: (section: string) => boolean }) => void) | null = null;

  const createOutputChannel = vi.fn(() => {
    outputChannel = createMockOutputChannel();

    return outputChannel;
  });

  const registerColorProvider = vi.fn((_selector: unknown, _provider: DocumentColorProvider) => ({
    dispose: vi.fn(),
  }));
  const registerHoverProvider = vi.fn((_selector: unknown, _provider: HoverProvider) => ({ dispose: vi.fn() }));
  const registerCompletionItemProvider = vi.fn((_selector: unknown, _provider: CompletionItemProvider) => ({
    dispose: vi.fn(),
  }));
  const onDidChangeConfiguration = vi.fn(
    (listener: (event: { affectsConfiguration: (section: string) => boolean }) => void) => {
      configurationListener = listener;
      return { dispose: vi.fn() };
    }
  );
  const createFileSystemWatcher = vi.fn(() => ({
    onDidChange: vi.fn(),
    onDidCreate: vi.fn(),
    onDidDelete: vi.fn(),
    dispose: vi.fn(),
  }));
  const getConfiguration = vi.fn(() => ({
    get: () => undefined,
  }));

  const reset = () => {
    createOutputChannel.mockClear();
    registerColorProvider.mockClear();
    registerHoverProvider.mockClear();
    registerCompletionItemProvider.mockClear();
    onDidChangeConfiguration.mockClear();
    createFileSystemWatcher.mockClear();
    getConfiguration.mockClear();
    outputChannel = null;
    configurationListener = null;
  };

  return {
    createOutputChannel,
    registerColorProvider,
    registerHoverProvider,
    registerCompletionItemProvider,
    onDidChangeConfiguration,
    createFileSystemWatcher,
    getConfiguration,
    getOutputChannel: () => outputChannel,
    getConfigurationListener: () => configurationListener,
    reset,
  };
});

const valuesMapStoreMocks = vi.hoisted(() => {
  const store = {
    loadValuesMap: vi.fn(() => ({
      version: 1,
      css: { '--lufa-core-color-brand-500': 'rgb(255 0 0)' },
      paths: { 'tokens.color.text.primary': 'rgb(0 0 255)' },
    })),
    setupMapWatchers: vi.fn(),
    resetAllCache: vi.fn(),
    dispose: vi.fn(),
    setExtensionRootPath: vi.fn(),
    isDebugEnabled: vi.fn(() => true),
  };
  const createValuesMapStore = vi.fn(() => store);

  const reset = () => {
    createValuesMapStore.mockClear();
    Object.values(store).forEach((mock) => mock.mockClear());
    store.loadValuesMap.mockImplementation(() => ({
      version: 1,
      css: { '--lufa-core-color-brand-500': 'rgb(255 0 0)' },
      paths: { 'tokens.color.text.primary': 'rgb(0 0 255)' },
    }));
    store.isDebugEnabled.mockReturnValue(true);
  };

  return { createValuesMapStore, reset, store };
});

vi.mock('vscode', () => ({
  workspace: {
    workspaceFolders: [],
    getConfiguration: vscodeMocks.getConfiguration,
    createFileSystemWatcher: vscodeMocks.createFileSystemWatcher,
    onDidChangeConfiguration: vscodeMocks.onDidChangeConfiguration,
  },
  window: {
    createOutputChannel: vscodeMocks.createOutputChannel,
  },
  languages: {
    registerColorProvider: vscodeMocks.registerColorProvider,
    registerHoverProvider: vscodeMocks.registerHoverProvider,
    registerCompletionItemProvider: vscodeMocks.registerCompletionItemProvider,
  },
  MarkdownString: class {
    appendMarkdown(markdown: string) {
      void markdown;
      return this;
    }
  },
  Hover: class {
    constructor(...args: unknown[]) {
      void args;
    }
  },
  Color: class {
    constructor(...args: unknown[]) {
      void args;
    }
  },
  Range: class {
    constructor(...args: unknown[]) {
      void args;
    }
  },
  ColorInformation: class {
    constructor(...args: unknown[]) {
      void args;
    }
  },
  CompletionItem: class {
    constructor(...args: unknown[]) {
      void args;
    }
  },
  CompletionItemKind: {
    Variable: 1,
    Constant: 2,
    Color: 3,
  },
}));

vi.mock('../values-map-store', () => ({
  createValuesMapStore: valuesMapStoreMocks.createValuesMapStore,
}));

const createContext = (): ExtensionContext => {
  return {
    subscriptions: [],
    extensionPath: '/__missing__',
  } as ExtensionContext;
};

describe('extension activation', () => {
  beforeEach(() => {
    vscodeMocks.reset();
    valuesMapStoreMocks.reset();
  });

  afterEach(() => {
    deactivate();
  });

  it('should register color and hover providers with expected selectors', () => {
    const context = createContext();

    activate(context);

    expect(vscodeMocks.createOutputChannel).toHaveBeenCalledWith('Lufa DS Preview');
    expect(vscodeMocks.registerColorProvider).toHaveBeenCalledTimes(1);
    expect(vscodeMocks.registerHoverProvider).toHaveBeenCalledTimes(1);
    expect(vscodeMocks.registerCompletionItemProvider).toHaveBeenCalledTimes(1);

    const expectedSelector = [
      { scheme: 'file', language: 'css' },
      { scheme: 'file', language: 'scss' },
      { scheme: 'file', language: 'postcss' },
      { scheme: 'file', language: 'typescript' },
      { scheme: 'file', language: 'typescriptreact' },
    ];

    const [colorSelector, colorProvider] = vscodeMocks.registerColorProvider.mock.calls[0];
    const [hoverSelector, hoverProvider] = vscodeMocks.registerHoverProvider.mock.calls[0];
    const [completionSelector, completionProvider] = vscodeMocks.registerCompletionItemProvider.mock.calls[0];

    expect(colorSelector).toEqual(expectedSelector);
    expect(hoverSelector).toEqual(expectedSelector);
    expect(completionSelector).toEqual(expectedSelector);
    expect(typeof colorProvider.provideDocumentColors).toBe('function');
    expect(typeof hoverProvider.provideHover).toBe('function');
    expect(typeof completionProvider.provideCompletionItems).toBe('function');
    expect(context.subscriptions.length).toBe(5);
    expect(valuesMapStoreMocks.store.setExtensionRootPath).toHaveBeenCalledWith('/__missing__');
    expect(valuesMapStoreMocks.store.setupMapWatchers).toHaveBeenCalledWith(context);
  });

  it('should wire provider callbacks to the shared map store and output channel', () => {
    const context = createContext();
    activate(context);

    const [, colorProvider] = vscodeMocks.registerColorProvider.mock.calls[0];
    const [, hoverProvider] = vscodeMocks.registerHoverProvider.mock.calls[0];
    const [, completionProvider] = vscodeMocks.registerCompletionItemProvider.mock.calls[0];
    const range = { start: {}, end: {} };

    colorProvider.provideDocumentColors({
      fileName: 'tokens.css',
      languageId: 'css',
      getText: () => '',
    } as never);
    hoverProvider.provideHover(
      {
        getWordRangeAtPosition: () => range,
        getText: () => 'tokens.color.text.primary',
      } as never,
      {} as never
    );
    completionProvider.provideCompletionItems(
      {
        lineAt: () => ({ text: '--lufa-core-color-brand-' }),
      } as never,
      { line: 0, character: 24 } as never
    );

    expect(valuesMapStoreMocks.store.loadValuesMap).toHaveBeenCalledTimes(3);
    expect(valuesMapStoreMocks.store.isDebugEnabled).toHaveBeenCalledTimes(1);
    expect(vscodeMocks.getOutputChannel()?.appendLine).toHaveBeenCalledWith(
      expect.stringContaining('Processing tokens.css')
    );
  });

  it('should reset watchers only for relevant configuration changes and deduplicate status logs', () => {
    const context = createContext();
    activate(context);

    const listener = vscodeMocks.getConfigurationListener();
    expect(listener).not.toBeNull();

    listener?.({ affectsConfiguration: () => false });
    expect(valuesMapStoreMocks.store.resetAllCache).not.toHaveBeenCalled();

    listener?.({ affectsConfiguration: (section) => section === 'lufaDsPreview' });
    listener?.({ affectsConfiguration: (section) => section === 'lufaDsPreview' });

    expect(valuesMapStoreMocks.store.resetAllCache).toHaveBeenCalledTimes(2);
    expect(valuesMapStoreMocks.store.setupMapWatchers).toHaveBeenCalledTimes(3);

    const configurationMessages = vscodeMocks
      .getOutputChannel()
      ?.appendLine.mock.calls.filter(([message]) => message.includes('Configuration changed'));
    expect(configurationMessages).toHaveLength(1);
  });

  it('should dispose the map store and output channel on deactivate', () => {
    const context = createContext();

    activate(context);

    const outputChannel = vscodeMocks.getOutputChannel();
    expect(outputChannel).not.toBeNull();

    deactivate();

    expect(valuesMapStoreMocks.store.dispose).toHaveBeenCalledTimes(1);
    expect(outputChannel?.dispose).toHaveBeenCalledTimes(1);
  });
});
