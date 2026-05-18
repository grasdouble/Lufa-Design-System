import { useCallback, useEffect, useState } from 'react';

/**
 * All available theme names in Lufa Design System.
 * This serves as the single source of truth for the ThemeName type.
 * Includes 'default' plus 10 named theme variants.
 */
export const THEME_NAMES = [
  'default',
  'ocean',
  'forest',
  'matrix',
  'cyberpunk',
  'sunset',
  'nordic',
  'volcano',
  'coffee',
  'volt',
  'steampunk',
] as const;

/**
 * Available theme names
 * - default: Standard design system theme
 * - ocean: Blue/teal with smooth, flowing personality
 * - forest: Green/earth with organic, grounded personality
 * - matrix: Green-on-black digital rain aesthetic
 * - cyberpunk: Neon pink/cyan futuristic aesthetic
 * - sunset: Warm orange/red gradient aesthetic
 * - nordic: Cool grey/blue minimalist aesthetic
 * - volcano: Deep red/orange fiery aesthetic
 * - coffee: Warm brown/cream earthy aesthetic
 * - volt: Electric yellow/green high-energy aesthetic
 * - steampunk: Brass/brown Victorian-industrial aesthetic
 */
export type ThemeName = (typeof THEME_NAMES)[number];

/**
 * Type guard for ThemeName — mirrors isValidMode in useThemeMode.ts
 */
function isThemeName(value: unknown): value is ThemeName {
  return typeof value === 'string' && (THEME_NAMES as readonly string[]).includes(value);
}

/**
 * Theme mode for light/dark variants
 * - light: Light mode (default)
 * - dark: Dark mode
 * - auto: Automatically detect from system preference (prefers-color-scheme)
 */
export type ThemeMode = 'light' | 'dark' | 'auto';

/**
 * Return type for useTheme hook
 */
export type UseThemeReturn = {
  /** Current theme name */
  theme: ThemeName;
  /** Current mode setting (may be 'auto') */
  mode: ThemeMode;
  /** Resolved effective mode (light or dark, never 'auto') */
  effectiveMode: 'light' | 'dark';
  /** Change the theme */
  setTheme: (theme: ThemeName) => void;
  /** Change the mode */
  setMode: (mode: ThemeMode) => void;
  /** Check if system prefers dark mode */
  systemPrefersDark: boolean;
};

/**
 * Custom hook for managing theme and mode in the Lufa Design System
 *
 * Features:
 * - Theme selection (see {@link THEME_NAMES} for all available themes)
 * - Mode selection (light, dark, auto)
 * - Auto-detection of system preference
 * - Syncs with HTML data attributes
 * - Persistence support via localStorage (optional)
 *
 * @example
 * ```tsx
 * function ThemeSwitcher() {
 *   const { theme, mode, setTheme, setMode, effectiveMode } = useTheme();
 *
 *   return (
 *     <div>
 *       <p>Current: {theme} theme in {effectiveMode} mode</p>
 *
 *       <button onClick={() => setTheme('ocean')}>Ocean</button>
 *       <button onClick={() => setTheme('forest')}>Forest</button>
 *
 *       <button onClick={() => setMode('light')}>☀️ Light</button>
 *       <button onClick={() => setMode('dark')}>🌙 Dark</button>
 *       <button onClick={() => setMode('auto')}>🔄 Auto</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * @param options - Configuration options
 * @param options.defaultTheme - Initial theme (default: 'default')
 * @param options.defaultMode - Initial mode (default: 'auto')
 * @param options.storageKey - localStorage key for persistence (default: 'lufa-theme')
 * @param options.enableStorage - Enable localStorage persistence (default: true)
 * @returns Theme state and setter functions
 */
export function useTheme(options?: {
  defaultTheme?: ThemeName;
  defaultMode?: ThemeMode;
  storageKey?: string;
  enableStorage?: boolean;
}): UseThemeReturn {
  const {
    defaultTheme = 'default',
    defaultMode = 'auto',
    storageKey = 'lufa-theme',
    enableStorage = true,
  } = options ?? {};

  // Initialize from localStorage if enabled
  const getInitialTheme = (): ThemeName => {
    if (enableStorage && typeof window !== 'undefined') {
      const stored = localStorage.getItem(`${storageKey}-name`);
      if (stored && isThemeName(stored)) {
        return stored;
      }
    }
    return defaultTheme;
  };

  const getInitialMode = (): ThemeMode => {
    if (enableStorage && typeof window !== 'undefined') {
      const stored = localStorage.getItem(`${storageKey}-mode`);
      if (stored && ['light', 'dark', 'auto'].includes(stored)) {
        return stored as ThemeMode;
      }
    }
    return defaultMode;
  };

  const [theme, setThemeState] = useState<ThemeName>(getInitialTheme);
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode);
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(false);

  // Compute effective mode from current state (no useState needed)
  const effectiveMode: 'light' | 'dark' = mode === 'auto' ? (systemPrefersDark ? 'dark' : 'light') : mode;

  // Detect system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateSystemPreference = () => {
      setSystemPrefersDark(mediaQuery.matches);
    };

    // Initial check
    updateSystemPreference();

    // Listen for changes
    mediaQuery.addEventListener('change', updateSystemPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateSystemPreference);
    };
  }, []);

  // Sync with HTML data attributes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    // Set theme attribute
    if (theme === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }

    // Set mode attribute
    if (mode === 'auto') {
      // Remove data-mode to let @media (prefers-color-scheme) work
      root.removeAttribute('data-mode');
    } else {
      root.setAttribute('data-mode', mode);
    }
  }, [theme, mode]);

  // Persist to localStorage
  useEffect(() => {
    if (!enableStorage || typeof window === 'undefined') return;

    localStorage.setItem(`${storageKey}-name`, theme);
    localStorage.setItem(`${storageKey}-mode`, mode);
  }, [theme, mode, storageKey, enableStorage]);

  // Wrapped setters
  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  return {
    theme,
    mode,
    effectiveMode,
    setTheme,
    setMode,
    systemPrefersDark,
  };
}
