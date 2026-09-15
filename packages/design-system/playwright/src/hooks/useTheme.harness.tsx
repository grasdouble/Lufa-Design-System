import { useTheme, useThemeMode } from '@grasdouble/lufa_design-system';

export function ThemeHarness() {
  const theme = useTheme();

  return (
    <div>
      <output data-testid="theme">{theme.theme}</output>
      <output data-testid="mode">{theme.mode}</output>
      <output data-testid="effective-mode">{theme.effectiveMode}</output>
      <button type="button" onClick={() => theme.setTheme('ocean')}>
        Ocean
      </button>
      <button type="button" onClick={() => theme.setMode('dark')}>
        Dark
      </button>
      <button type="button" onClick={() => theme.setMode('auto')}>
        Auto
      </button>
    </div>
  );
}

export function SharedThemeHarness() {
  const theme = useTheme();
  const legacyMode = useThemeMode();

  return (
    <div>
      <output data-testid="theme-mode">{theme.mode}</output>
      <output data-testid="legacy-mode">{legacyMode.mode}</output>
      <button type="button" onClick={() => legacyMode.setMode('dark')}>
        Legacy dark
      </button>
      <button type="button" onClick={() => legacyMode.setMode('high-contrast')}>
        Legacy contrast
      </button>
    </div>
  );
}

export function OrderedThemeOptionsHarness() {
  const theme = useTheme();
  const legacyMode = useThemeMode({ autoDetect: false, defaultMode: 'dark' });

  return (
    <div>
      <output data-testid="theme-mode">{theme.mode}</output>
      <output data-testid="legacy-mode">{legacyMode.mode}</output>
      <output data-testid="legacy-prefers-dark">{String(legacyMode.systemPrefersDark)}</output>
      <output data-testid="legacy-prefers-contrast">{String(legacyMode.systemPrefersContrast)}</output>
    </div>
  );
}

export function OrderedThemeStorageHarness() {
  const theme = useTheme();
  const legacyMode = useThemeMode({ storageKey: 'custom-mode' });

  return (
    <div>
      <output data-testid="theme-mode">{theme.mode}</output>
      <output data-testid="legacy-mode">{legacyMode.mode}</output>
    </div>
  );
}

export function OrderedThemeNameStorageHarness() {
  const primaryTheme = useTheme({ storageKey: 'primary-theme' });
  const secondaryTheme = useTheme({ storageKey: 'secondary-theme' });

  return (
    <div>
      <output data-testid="primary-theme">{primaryTheme.theme}</output>
      <output data-testid="secondary-theme">{secondaryTheme.theme}</output>
    </div>
  );
}
