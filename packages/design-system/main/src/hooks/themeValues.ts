/** All available theme names in Lufa Design System. */
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

/** Available theme names. */
export type ThemeName = (typeof THEME_NAMES)[number];

/** Color modes supported by the shared theme controller. */
export const THEME_MODES = ['light', 'dark', 'auto', 'high-contrast'] as const;

/** Shared color mode. */
export type ThemeMode = (typeof THEME_MODES)[number];

export function isThemeName(value: unknown): value is ThemeName {
  return typeof value === 'string' && (THEME_NAMES as readonly string[]).includes(value);
}

export function isThemeMode(value: unknown): value is ThemeMode {
  return typeof value === 'string' && (THEME_MODES as readonly string[]).includes(value);
}
