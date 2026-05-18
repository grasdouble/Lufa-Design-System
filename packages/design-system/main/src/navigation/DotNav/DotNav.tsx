import type { ComponentPropsWithoutRef } from 'react';

import styles from './DotNav.module.css';

/**
 * Represents a single navigable section in the DotNav.
 */
export interface DotNavSection {
  /** Unique identifier matching the target element's `id` attribute */
  id: string;
  /** Human-readable label shown as a tooltip on hover (and always for the active section) */
  label: string;
}

/**
 * Props for the DotNav component.
 */
export interface DotNavProps extends Omit<ComponentPropsWithoutRef<'nav'>, 'onSelect'> {
  /** List of sections to display as dots */
  sections: DotNavSection[];
  /** The `id` of the currently active section */
  activeId: string;
  /** Called when a dot is clicked, receives the section `id` */
  onSelect: (id: string) => void;
  /**
   * Side of the viewport to attach the nav to
   * @default 'right'
   */
  position?: 'left' | 'right';
  /**
   * Accessible label for the nav landmark
   * @default 'Page sections'
   */
  ariaLabel?: string;
}

/**
 * DotNav - Vertical dot navigation for multi-section SPAs
 *
 * A fixed, vertically-centered navigation component made of small clickable dots.
 * Each dot corresponds to a full-screen section. The active section's label is
 * always visible; other labels appear on hover.
 *
 * Pair with `useScrollSpy` to automatically track the active section as the
 * user scrolls.
 *
 * @example
 * ```tsx
 * <DotNav
 *   sections={[
 *     { id: 'hero', label: 'Home' },
 *     { id: 'about', label: 'About' },
 *   ]}
 *   activeId="hero"
 *   onSelect={(id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
 * />
 * ```
 */
export const DotNav = ({
  sections,
  activeId,
  onSelect,
  position = 'right',
  ariaLabel = 'Page sections',
  ...rest
}: DotNavProps) => (
  <nav
    className={`${styles['dot-nav']} ${styles[`dot-nav--${position}`]}`}
    aria-label={ariaLabel}
    {...rest}
  >
    {sections.map(({ id, label }) => {
      const isActive = activeId === id;
      return (
        <div
          key={id}
          className={`${styles['dot-nav-item']}${isActive ? ` ${styles['dot-nav-item--active']}` : ''}`}
        >
          <span className={styles['dot-nav-label']}>{label}</span>
          <button
            className={`${styles['dot-nav-dot']}${isActive ? ` ${styles['dot-nav-dot--active']}` : ''}`}
            onClick={() => onSelect(id)}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
          />
        </div>
      );
    })}
  </nav>
);

DotNav.displayName = 'DotNav';
