import { useEffect } from 'react';

import type { ThemeName } from '@grasdouble/lufa_design-system';
import { Button, Typography, useTheme } from '@grasdouble/lufa_design-system';

import styles from './ThemeSwitcher.module.css';

export type ThemeSwitcherProps = {
  /**
   * Default theme to use (Phase 6 - currently not functional)
   * @default 'default'
   */
  defaultTheme?: ThemeName;
  /**
   * Default mode to use
   * @default 'light'
   */
  defaultMode?: 'light' | 'dark' | 'high-contrast';
  /**
   * Callback when theme changes (Phase 6 - currently not functional)
   */
  onThemeChange?: (theme: ThemeName) => void;
  /**
   * Callback when mode changes
   */
  onModeChange?: (mode: 'light' | 'dark' | 'high-contrast') => void;
  /**
   * Button variant style
   * @default 'button'
   */
  variant?: 'button' | 'select' | 'tabs';
  /**
   * Show theme name label
   * @default true
   */
  showLabel?: boolean;
  /**
   * Show mode switcher (light/dark/high-contrast)
   * @default true
   */
  showModeSwitcher?: boolean;
};

/**
 * ThemeSwitcher component allows users to switch between different accessibility modes.
 * Modes (light/dark/high-contrast) are applied by setting the data-mode attribute.
 *
 * Note: Theme variants (ocean/forest) are placeholders for Phase 6.
 */
export function ThemeSwitcher({
  defaultTheme: _defaultTheme = 'default',
  defaultMode = 'light',
  onThemeChange: _onThemeChange,
  onModeChange,
  variant = 'button',
  showLabel = true,
  showModeSwitcher = true,
}: ThemeSwitcherProps) {
  const {
    mode: configuredMode,
    setMode,
    effectiveMode,
  } = useTheme({
    defaultMode,
    enableStorage: true,
  });
  const mode = configuredMode === 'auto' ? effectiveMode : configuredMode;

  // Notify parent components of changes
  useEffect(() => {
    if (onModeChange) {
      onModeChange(mode);
    }
  }, [mode, onModeChange]);

  const handleModeChange = (newMode: 'light' | 'dark' | 'high-contrast') => {
    setMode(newMode);
  };

  if (variant === 'select') {
    return (
      <div className={styles.container}>
        {showModeSwitcher && (
          <>
            {showLabel && (
              <Typography variant="bodySmall" color="secondary" weight="medium">
                Mode:
              </Typography>
            )}
            <select
              id="mode-select"
              aria-label="Select mode"
              className={styles.select}
              value={mode}
              onChange={(e) => handleModeChange(e.target.value as 'light' | 'dark' | 'high-contrast')}
            >
              <option value="light">☀️ Light</option>
              <option value="dark">🌙 Dark</option>
              <option value="high-contrast">◐ High Contrast</option>
            </select>
          </>
        )}
      </div>
    );
  }

  if (variant === 'tabs') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        {showModeSwitcher && (
          <>
            <div className={styles.tabs}>
              <Button
                appearance={mode === 'light' ? 'solid' : 'ghost'}
                size="sm"
                onClick={() => handleModeChange('light')}
                title="Light mode"
              >
                ☀️ Light
              </Button>
              <Button
                appearance={mode === 'dark' ? 'solid' : 'ghost'}
                size="sm"
                onClick={() => handleModeChange('dark')}
                title="Dark mode"
              >
                🌙 Dark
              </Button>
              <Button
                appearance={mode === 'high-contrast' ? 'solid' : 'ghost'}
                size="sm"
                onClick={() => handleModeChange('high-contrast')}
                title="High contrast mode"
              >
                ◐ High Contrast
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }

  // Default: button variant
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {showModeSwitcher && (
        <>
          <div className={styles.buttonGroup}>
            {showLabel && (
              <Typography variant="bodySmall" color="secondary" weight="medium">
                Mode:
              </Typography>
            )}
            <Button
              appearance={mode === 'light' ? 'solid' : 'outline'}
              size="sm"
              onClick={() => handleModeChange('light')}
              title="Light mode"
            >
              ☀️ Light
            </Button>
            <Button
              appearance={mode === 'dark' ? 'solid' : 'outline'}
              size="sm"
              onClick={() => handleModeChange('dark')}
              title="Dark mode"
            >
              🌙 Dark
            </Button>
            <Button
              appearance={mode === 'high-contrast' ? 'solid' : 'outline'}
              size="sm"
              onClick={() => handleModeChange('high-contrast')}
              title="High contrast mode"
            >
              ◐ High Contrast
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
