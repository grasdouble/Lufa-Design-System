import { useEffect, useMemo, useRef } from 'react';

import { hydrateStoredMode } from './themeController.js';
import { isThemeMode } from './themeValues.js';
import { useTheme } from './useTheme.js';

/** Accessibility modes supported by the compatibility adapter. */
export type ThemeMode = 'light' | 'dark' | 'high-contrast';

/** System preference detected from media queries. */
export type SystemPreference = ThemeMode | null;

/** Configuration options for `useThemeMode`. */
export type UseThemeModeOptions = {
  /** Initial explicit mode. */
  defaultMode?: ThemeMode;
  /** Enables automatic system preference detection. */
  autoDetect?: boolean;
  /**
   * Legacy mode storage key.
   * @default 'lufa-theme-mode'
   */
  storageKey?: string;
  /** Enables localStorage persistence. */
  enableStorage?: boolean;
};

/** Return value from `useThemeMode`. */
export type UseThemeModeReturn = {
  /** Current resolved accessibility mode. */
  mode: ThemeMode;
  /** Updates the shared color-mode controller. */
  setMode: (mode: ThemeMode) => void;
  /** Whether the system requests a dark color scheme. */
  systemPrefersDark: boolean;
  /** Whether the system requests increased contrast. */
  systemPrefersContrast: boolean;
  /** Detected system preference, or `null` when detection is disabled. */
  systemPreference: SystemPreference;
};

/**
 * Compatibility adapter for the shared `useTheme` color-mode controller.
 *
 * @deprecated Prefer `useTheme`, which now includes `high-contrast` and is the
 * only owner of `data-mode` and theme persistence. This adapter remains
 * backward compatible and delegates all writes to that shared controller.
 */
export function useThemeMode(options: UseThemeModeOptions = {}): UseThemeModeReturn {
  const { defaultMode = 'light', autoDetect = true, storageKey = 'lufa-theme-mode', enableStorage = true } = options;
  const theme = useTheme({
    defaultMode: autoDetect ? 'auto' : defaultMode,
    modeStorageKey: storageKey,
    enableStorage,
  });
  const { mode: sharedMode, setMode: setSharedMode } = theme;
  const appliedConfiguration = useRef<string | null>(null);
  useEffect(() => {
    const configuration = `${storageKey}:${enableStorage}:${autoDetect}:${defaultMode}`;
    if (appliedConfiguration.current === configuration) return;
    appliedConfiguration.current = configuration;

    const storedMode = enableStorage && typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null;
    if (isThemeMode(storedMode) && storedMode !== 'auto') {
      hydrateStoredMode(storedMode, storageKey);
    } else if (!autoDetect && sharedMode === 'auto') {
      setSharedMode(defaultMode);
    }
  }, [autoDetect, defaultMode, enableStorage, setSharedMode, sharedMode, storageKey]);

  const systemPreference = useMemo<SystemPreference>(() => {
    if (!autoDetect) return null;
    if (theme.systemPrefersContrast) return 'high-contrast';
    return theme.systemPrefersDark ? 'dark' : 'light';
  }, [autoDetect, theme.systemPrefersContrast, theme.systemPrefersDark]);

  const mode: ThemeMode = sharedMode === 'auto' ? (systemPreference ?? defaultMode) : sharedMode;

  return {
    mode,
    setMode: setSharedMode,
    systemPrefersDark: autoDetect && theme.systemPrefersDark,
    systemPrefersContrast: autoDetect && theme.systemPrefersContrast,
    systemPreference,
  };
}
