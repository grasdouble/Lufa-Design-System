import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';

import type { ThemeMode, ThemeName } from './themeValues.js';
import {
  getThemeSnapshot,
  initializeThemeController,
  refreshThemeDocument,
  setControlledMode,
  setControlledTheme,
  subscribeThemeController,
} from './themeController.js';
import { THEME_NAMES } from './themeValues.js';

export { THEME_NAMES };
export type { ThemeMode, ThemeName };

/** Configuration for the shared theme controller. */
export type UseThemeOptions = {
  /** Initial theme when neither the document nor storage provides one. */
  defaultTheme?: ThemeName;
  /** Initial mode when neither the document nor storage provides one. */
  defaultMode?: ThemeMode;
  /**
   * Base localStorage key.
   * @default 'lufa-theme'
   */
  storageKey?: string;
  /**
   * Explicit mode storage key used by the `useThemeMode` compatibility adapter.
   * @default `${storageKey}-mode`
   */
  modeStorageKey?: string;
  /**
   * Enables persistence. Valid stored values initialize the controller before
   * existing document attributes.
   * @default true
   */
  enableStorage?: boolean;
};

/** Return type for `useTheme`. */
export type UseThemeReturn = {
  /** Current theme name. */
  theme: ThemeName;
  /** Current shared mode setting. */
  mode: ThemeMode;
  /** Resolved effective mode; never `auto`. */
  effectiveMode: Exclude<ThemeMode, 'auto'>;
  /** Change the theme. */
  setTheme: (theme: ThemeName) => void;
  /** Change the shared color mode. */
  setMode: (mode: ThemeMode) => void;
  /** Whether the system requests a dark color scheme. */
  systemPrefersDark: boolean;
  /** Whether the system requests increased contrast. */
  systemPrefersContrast: boolean;
};

/**
 * Manages the design-system theme and the single shared color-mode source of truth.
 *
 * The hook writes `data-theme` and `data-mode` on `<html>`. The default theme
 * uses an empty `data-theme` value, and `auto` mode resolves system color and
 * contrast preferences into the matching token selector. All hook instances,
 * including `useThemeMode`, subscribe to the same controller.
 *
 * Accessibility contract: consumers must expose controls that communicate their
 * selected state and remain keyboard operable; this hook does not render UI.
 */
export function useTheme(options: UseThemeOptions = {}): UseThemeReturn {
  const {
    defaultTheme = 'default',
    defaultMode = 'auto',
    storageKey = 'lufa-theme',
    modeStorageKey = `${storageKey}-mode`,
    enableStorage = true,
  } = options;

  const controllerOptions = useMemo(
    () => ({
      defaultTheme,
      defaultMode,
      themeStorageKey: `${storageKey}-name`,
      modeStorageKey,
      enableStorage,
    }),
    [defaultMode, defaultTheme, enableStorage, modeStorageKey, storageKey]
  );

  initializeThemeController(controllerOptions);

  const serverSnapshot = useMemo(() => ({ theme: defaultTheme, mode: defaultMode }), [defaultMode, defaultTheme]);
  const state = useSyncExternalStore(subscribeThemeController, getThemeSnapshot, () => serverSnapshot);
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);
  const [systemPrefersContrast, setSystemPrefersContrast] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const contrastQuery = window.matchMedia('(prefers-contrast: more)');
    const updateSystemPreference = () => {
      setSystemPrefersDark(darkQuery.matches);
      setSystemPrefersContrast(contrastQuery.matches);
      refreshThemeDocument();
    };
    updateSystemPreference();
    darkQuery.addEventListener('change', updateSystemPreference);
    contrastQuery.addEventListener('change', updateSystemPreference);
    return () => {
      darkQuery.removeEventListener('change', updateSystemPreference);
      contrastQuery.removeEventListener('change', updateSystemPreference);
    };
  }, []);

  const setTheme = useCallback(
    (theme: ThemeName) => {
      setControlledTheme(theme, controllerOptions);
    },
    [controllerOptions]
  );

  const setMode = useCallback(
    (mode: ThemeMode) => {
      setControlledMode(mode, controllerOptions);
    },
    [controllerOptions]
  );

  const effectiveMode: Exclude<ThemeMode, 'auto'> =
    state.mode === 'auto'
      ? systemPrefersContrast
        ? 'high-contrast'
        : systemPrefersDark
          ? 'dark'
          : 'light'
      : state.mode;

  return {
    ...state,
    effectiveMode,
    setTheme,
    setMode,
    systemPrefersDark,
    systemPrefersContrast,
  };
}
