import React, { useEffect, useId, useRef, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './PlaygroundThemeSwitcher.module.css';

type ThemeName =
  | 'default'
  | 'ocean'
  | 'forest'
  | 'matrix'
  | 'cyberpunk'
  | 'sunset'
  | 'nordic'
  | 'volcano'
  | 'coffee'
  | 'volt'
  | 'steampunk';

type Theme = {
  name: ThemeName;
  label: string;
  icon: string;
  description: string;
};

const THEMES: Theme[] = [
  { name: 'default', label: 'Default', icon: '📘', description: 'Clean blue theme' },
  { name: 'ocean', label: 'Ocean', icon: '🌊', description: 'Marine-inspired' },
  { name: 'forest', label: 'Forest', icon: '🌲', description: 'Organic natural' },
  { name: 'matrix', label: 'Matrix', icon: '💾', description: 'Digital cyber' },
  { name: 'cyberpunk', label: 'Cyberpunk', icon: '🎆', description: 'Futuristic neon' },
  { name: 'sunset', label: 'Sunset', icon: '🌅', description: 'Warm elegant' },
  { name: 'nordic', label: 'Nordic', icon: '❄️', description: 'Minimalist arctic' },
  { name: 'volcano', label: 'Volcano', icon: '🌋', description: 'Powerful intense' },
  { name: 'coffee', label: 'Coffee', icon: '☕', description: 'Retro vintage' },
  { name: 'volt', label: 'Volt', icon: '⚡', description: 'Industrial high-vis' },
  { name: 'steampunk', label: 'Steampunk', icon: '⚙️', description: 'Victorian industrial' },
];

type PlaygroundThemeSwitcherProps = {
  /**
   * Ref to the playground container element where theme will be applied
   */
  containerRef: React.RefObject<HTMLDivElement | null>;
};

/**
 * Isolated ThemeSwitcher for the playground.
 * Applies the color theme to the playground container only.
 * Color mode (light/dark) is driven by Docusaurus's own toggle in the navbar.
 *
 * The trigger follows the disclosure pattern. Enter/Space use native button
 * behavior, Escape closes the options and restores trigger focus, and each
 * theme button exposes its selected state with `aria-pressed`.
 */
export default function PlaygroundThemeSwitcher({ containerRef }: PlaygroundThemeSwitcherProps): React.JSX.Element {
  const switcherRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownId = useId();
  const titleId = useId();
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') return 'default';
    const stored = localStorage.getItem('lufa-playground-theme');
    if (stored && THEMES.some((t) => t.name === stored)) return stored as ThemeName;
    return 'default';
  });
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  const applyTheme = (theme: ThemeName) => {
    if (!containerRef.current) return;
    if (theme === 'default' || !theme) {
      containerRef.current.setAttribute('data-theme', '');
    } else {
      containerRef.current.setAttribute('data-theme', theme);
    }
  };

  // Sync data-mode with Docusaurus color mode
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.setAttribute('data-mode', colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode, containerRef]);

  // Apply initial theme
  useEffect(() => {
    applyTheme(currentTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  const handleThemeChange = (theme: ThemeName) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('lufa-playground-theme', theme);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Escape' || !isOpen) return;

    event.preventDefault();
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const currentThemeData = THEMES.find((t) => t.name === currentTheme) || THEMES[0];

  return (
    <div ref={switcherRef} className={styles.themeSwitcher} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        aria-label={`${currentThemeData.label} theme - Switch playground theme`}
        title={`Current theme: ${currentThemeData.label}. Click to switch theme.`}
      >
        <span className={styles.icon} aria-hidden="true">
          {currentThemeData.icon}
        </span>
        <span className={styles.label}>{currentThemeData.label}</span>
        <span className={styles.arrow} aria-hidden="true">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div id={dropdownId} className={styles.dropdown} role="group" aria-labelledby={titleId}>
          <div className={styles.section}>
            <h4 id={titleId} className={styles.sectionTitle}>
              Color theme
            </h4>
            <div className={styles.themeGrid}>
              {THEMES.map((theme) => {
                const isSelected = currentTheme === theme.name;

                return (
                  <button
                    key={theme.name}
                    type="button"
                    className={`${styles.themeOption} ${isSelected ? styles.active : ''}`}
                    onClick={() => handleThemeChange(theme.name)}
                    aria-pressed={isSelected}
                    title={theme.description}
                  >
                    <span className={styles.themeIcon} aria-hidden="true">
                      {theme.icon}
                    </span>
                    <span className={styles.themeName}>{theme.label}</span>
                    {isSelected && (
                      <span className={styles.selectedIndicator} aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
