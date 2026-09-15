import type { ThemeMode, ThemeName } from './themeValues.js';
import { isThemeMode, isThemeName } from './themeValues.js';

type ThemeSnapshot = {
  theme: ThemeName;
  mode: ThemeMode;
};

export type ThemeControllerOptions = {
  defaultTheme: ThemeName;
  defaultMode: ThemeMode;
  themeStorageKey: string;
  modeStorageKey: string;
  enableStorage: boolean;
};

const listeners = new Set<() => void>();
const themeStorageKeys = new Set<string>();
const modeStorageKeys = new Set<string>();
let activeDocument: Document | null = null;
let themeInitializationSource: 'default' | 'document' | 'storage' | 'controlled' = 'default';
let modeInitializationSource: 'default' | 'document' | 'storage' | 'controlled' = 'default';
let snapshot: ThemeSnapshot = {
  theme: 'default',
  mode: 'auto',
};

function readStoredValue(key: string): string | null {
  return window.localStorage.getItem(key);
}

function writeStoredValue(key: string, value: string): void {
  window.localStorage.setItem(key, value);
}

function registerStorageKeys(options: ThemeControllerOptions, syncTheme: boolean, syncMode: boolean): void {
  if (!options.enableStorage) return;
  themeStorageKeys.add(options.themeStorageKey);
  modeStorageKeys.add(options.modeStorageKey);
  if (syncTheme) writeStoredValue(options.themeStorageKey, snapshot.theme);
  if (syncMode) writeStoredValue(options.modeStorageKey, snapshot.mode);
}

function persistTheme(theme: ThemeName): void {
  themeStorageKeys.forEach((key) => writeStoredValue(key, theme));
}

function persistMode(mode: ThemeMode): void {
  modeStorageKeys.forEach((key) => writeStoredValue(key, mode));
}

function syncDocument(nextSnapshot: ThemeSnapshot): void {
  if (typeof document === 'undefined') return;

  document.documentElement.setAttribute('data-theme', nextSnapshot.theme === 'default' ? '' : nextSnapshot.theme);

  if (nextSnapshot.mode === 'auto') {
    if (window.matchMedia('(prefers-contrast: more)').matches) {
      document.documentElement.setAttribute('data-mode', 'high-contrast');
    } else {
      document.documentElement.setAttribute(
        'data-mode',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      );
    }
  } else {
    document.documentElement.setAttribute('data-mode', nextSnapshot.mode);
  }
}

export function refreshThemeDocument(): void {
  syncDocument(snapshot);
}

export function initializeThemeController(options: ThemeControllerOptions): void {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  if (activeDocument === document) {
    registerStorageKeys(
      options,
      themeInitializationSource === 'storage' || themeInitializationSource === 'controlled',
      modeInitializationSource === 'storage' || modeInitializationSource === 'controlled'
    );
    return;
  }

  activeDocument = document;
  themeStorageKeys.clear();
  modeStorageKeys.clear();
  registerStorageKeys(options, false, false);

  const documentTheme = document.documentElement.getAttribute('data-theme');
  const documentMode = document.documentElement.getAttribute('data-mode');
  const storedTheme = options.enableStorage ? readStoredValue(options.themeStorageKey) : null;
  const storedMode = options.enableStorage ? readStoredValue(options.modeStorageKey) : null;

  snapshot = {
    theme: isThemeName(storedTheme) ? storedTheme : isThemeName(documentTheme) ? documentTheme : options.defaultTheme,
    mode: isThemeMode(storedMode) ? storedMode : isThemeMode(documentMode) ? documentMode : options.defaultMode,
  };
  themeInitializationSource = isThemeName(storedTheme)
    ? 'storage'
    : isThemeName(documentTheme)
      ? 'document'
      : 'default';
  modeInitializationSource = isThemeMode(storedMode) ? 'storage' : isThemeMode(documentMode) ? 'document' : 'default';
  syncDocument(snapshot);
}

export function subscribeThemeController(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getThemeSnapshot(): ThemeSnapshot {
  return snapshot;
}

function updateSnapshot(nextSnapshot: ThemeSnapshot): void {
  if (nextSnapshot.theme === snapshot.theme && nextSnapshot.mode === snapshot.mode) return;
  snapshot = nextSnapshot;
  syncDocument(snapshot);
  listeners.forEach((listener) => listener());
}

export function setControlledTheme(theme: ThemeName, options: ThemeControllerOptions): void {
  registerStorageKeys(options, false, false);
  themeInitializationSource = 'controlled';
  updateSnapshot({ ...snapshot, theme });
  if (typeof window !== 'undefined') persistTheme(theme);
}

export function setControlledMode(mode: ThemeMode, options: ThemeControllerOptions): void {
  registerStorageKeys(options, false, false);
  modeInitializationSource = 'controlled';
  updateSnapshot({ ...snapshot, mode });
  if (typeof window !== 'undefined') persistMode(mode);
}

export function hydrateStoredMode(mode: ThemeMode, storageKey: string): void {
  modeStorageKeys.add(storageKey);
  if (modeInitializationSource === 'storage' || modeInitializationSource === 'controlled') {
    persistMode(snapshot.mode);
    return;
  }

  modeInitializationSource = 'storage';
  updateSnapshot({ ...snapshot, mode });
  persistMode(mode);
}
