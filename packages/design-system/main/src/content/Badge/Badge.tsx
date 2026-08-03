import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import type { ComponentSize } from '../../utils/component-values';
import type { PolymorphicProps, PolymorphicPropsWithRef } from '../../utils/polymorphic';
import styles from './Badge.module.css';

/**
 * Badge Component - Status and Label Indicator
 *
 * A compact indicator component for displaying status, labels, counts, or notifications.
 * Built using composition pattern with Box primitive for styling.
 *
 * Features:
 * - Five semantic variants (default, success, danger, warning, info)
 * - Three sizes (sm, md, lg) with token-based dimensions
 * - Optional dot indicator for notifications
 * - Token-based design (component layer tokens)
 * - WCAG 2.1 AA compliant contrast ratios
 * - Polymorphic rendering (span by default, configurable)
 *
 * @example
 * ```tsx
 * // Basic badge
 * <Badge variant="default" size="md">New</Badge>
 *
 * // Success badge
 * <Badge variant="success">Active</Badge>
 *
 * // Badge with dot
 * <Badge variant="danger" dot>3 notifications</Badge>
 *
 * // Small badge for inline use
 * <Badge variant="info" size="sm">Beta</Badge>
 *
 * // As a different element
 * <Badge as="div" variant="warning">Warning</Badge>
 * ```
 */

// ============================================
// TYPES
// ============================================

/**
 * Badge variant values - semantic color intention
 */
type VariantValue = 'default' | 'success' | 'danger' | 'warning' | 'info';

/**
 * Badge size values
 */
/**
 * Valid HTML elements for polymorphic rendering
 */
type ValidBadgeElements = 'span' | 'div' | 'label';

/**
 * Badge component props
 *
 * Generic type T allows proper typing when using `as` prop
 */
type BadgeOwnProps = {
  /**
   * Semantic color variant
   * @default 'default'
   */
  variant?: VariantValue;

  /**
   * Size variant
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Show dot indicator (for notifications/status)
   * @default false
   */
  dot?: boolean;

  /**
   * Badge content (text, number, etc.)
   */
  children?: React.ReactNode;

  /**
   * Custom CSS class
   */
  className?: string;
};

/**
 * Infer props from the element type
 */
export type BadgeProps<T extends ValidBadgeElements = 'span'> = PolymorphicProps<T, BadgeOwnProps>;

// ============================================
// COMPONENT
// ============================================

/**
 * Badge Component
 *
 * A versatile badge component for status, labels, and notifications.
 * Uses CSS utility classes generated from badge.utilities.config.cjs.
 *
 * Accessibility contract: the dot is decorative and hidden from assistive
 * technology; consumers must provide textual status content. Choose `as="label"`
 * only when the badge labels a form control.
 */
const BadgeImpl = <T extends ValidBadgeElements = 'span'>(
  { variant = 'default', size = 'md', dot = false, children, className, as, ...props }: BadgeProps<T>,
  ref: React.ForwardedRef<Element>
) => {
  // Determine the element to render
  const Component = (as ?? 'span') as ElementType;

  // Build className
  const badgeClassName = clsx(
    styles.badge,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    {
      [styles['badge-with-dot']]: dot,
    },
    className
  );

  return (
    <Component ref={ref as React.Ref<never>} className={badgeClassName} {...props}>
      {dot && <span className={styles['badge-dot']} aria-hidden="true" />}
      <span className={styles['badge-content']}>{children}</span>
    </Component>
  );
};

export const Badge = forwardRef(BadgeImpl) as (<T extends ValidBadgeElements = 'span'>(
  props: PolymorphicPropsWithRef<T, BadgeOwnProps>
) => React.ReactElement) & { displayName?: string };

// Set displayName for React DevTools
Badge.displayName = 'Badge';
