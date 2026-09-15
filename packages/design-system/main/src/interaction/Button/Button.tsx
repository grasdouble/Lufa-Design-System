import type { ElementType } from 'react';
import { forwardRef } from 'react';
import type { IconName } from '@content/Icon';
import { Icon } from '@content/Icon';
import { clsx } from 'clsx';

import type { ComponentSize } from '../../utils/component-values';
import type { PolymorphicProps, PolymorphicPropsWithRef } from '../../utils/polymorphic';
import { CONTROL_ICON_SIZE } from '../../utils/component-values';
import styles from './Button.module.css';

/**
 * Button Component - Interactive Action Element
 *
 * A versatile button component with multiple appearances, variants, sizes, and states.
 * Supports polymorphic rendering for both button and link elements.
 *
 * Features:
 * - Three appearances (solid, outline, ghost)
 * - Seven variants (primary, secondary, success, danger, warning, info, neutral)
 * - Three sizes (sm, md, lg) with semantic token-based dimensions
 * - Icon support (left, right, or icon-only)
 * - Loading state with spinner animation
 * - Disabled state with proper accessibility
 * - Full width option
 * - Polymorphic rendering (button or anchor element)
 * - WCAG 2.1 AA compliant
 * - Token-based design (component layer tokens)
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button appearance="solid" variant="primary" size="md">Click me</Button>
 *
 * // Outline button
 * <Button appearance="outline" variant="secondary">Outline</Button>
 *
 * // Button with icon
 * <Button appearance="solid" variant="success" iconLeft="check">Save</Button>
 *
 * // Loading state
 * <Button appearance="solid" variant="primary" loading>Saving...</Button>
 *
 * // As a link
 * <Button as="a" href="/home" appearance="ghost" variant="neutral">Home</Button>
 *
 * // Icon-only button
 * <Button appearance="ghost" variant="primary" iconLeft="search" aria-label="Search" />
 * ```
 */

// ============================================
// TYPES
// ============================================

/**
 * Button type values - visual style approach
 */
export type ButtonAppearance = 'solid' | 'outline' | 'ghost';

/** Native HTML button type values. */
export type ButtonNativeType = 'button' | 'submit' | 'reset';

/**
 * Button variant values - semantic color intention
 */
type VariantValue = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'neutral';

/**
 * Button size values
 */
type RadiusValue = 'none' | 'sm' | 'base' | 'md' | 'full';

/**
 * Button component props
 *
 * Generic type T allows proper typing when using `as` prop
 */
type ButtonOwnProps = {
  /**
   * Visual style.
   * @default 'solid'
   */
  appearance?: ButtonAppearance;

  /**
   * Native HTML button type.
   *
   * Legacy visual values (`solid`, `outline`, `ghost`) remain accepted during
   * migration and are interpreted as `appearance`.
   * @default 'button'
   */
  type?: ButtonNativeType | ButtonAppearance;

  /**
   * Semantic color variant
   * @default 'primary'
   */
  variant?: VariantValue;

  /**
   * Size variant
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Border radius variant
   * @default 'base' (inherited from base class)
   */
  radius?: RadiusValue;

  /**
   * Icon to display on the left side
   * @default undefined
   */
  iconLeft?: IconName;

  /**
   * Icon to display on the right side
   * @default undefined
   */
  iconRight?: IconName;

  /**
   * Loading state - shows spinner and disables interaction
   * @default false
   */
  loading?: boolean;

  /**
   * Disabled state - prevents interaction
   * @default false
   */
  disabled?: boolean;

  /**
   * Full width button (stretches to 100% of container)
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Button content (text or other React nodes)
   * Optional for icon-only buttons
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes
   * @default undefined
   */
  className?: string;
};

/**
 * Combined props type including element-specific props
 */
export type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<T, ButtonOwnProps>;

// ============================================
// COMPONENT
// ============================================

/**
 * Button component with ref forwarding.
 *
 * Accessibility contract: the default render is a native `<button>` with
 * `type="button"` to avoid accidental form submission. Icon-only buttons must
 * provide an accessible name. Loading and disabled states expose native and
 * ARIA state while preventing activation.
 */
const ButtonImpl = <T extends ElementType = 'button'>(
  {
    as,
    appearance: appearanceProp,
    type = 'button',
    variant = 'primary',
    size = 'md',
    radius,
    iconLeft,
    iconRight,
    loading = false,
    disabled = false,
    fullWidth = false,
    children,
    className,
    ...htmlProps
  }: ButtonProps<T>,
  ref: React.ForwardedRef<Element>
) => {
  // Determine the element to render
  const Component = as ?? 'button';
  const legacyAppearance = ['solid', 'outline', 'ghost'].includes(type) ? (type as ButtonAppearance) : undefined;
  const appearance = appearanceProp ?? legacyAppearance ?? 'solid';
  const nativeType = ['button', 'submit', 'reset'].includes(type) ? (type as ButtonNativeType) : 'button';

  // Compute final disabled state (disabled or loading)
  const isDisabled = disabled || loading;

  // Build className from utility props
  const buttonClassName = clsx(
    // Base button class
    styles.button,

    // Appearance utilities
    styles[`type-${appearance}`],

    // Variant utilities
    variant && styles[`variant-${variant}`],

    // Size utilities
    size && styles[`size-${size}`],

    // Radius utilities (optional override)
    radius && styles[`radius-${radius}`],

    // Full width
    fullWidth && styles.fullWidth,

    // States
    isDisabled && styles.disabled,
    loading && styles.loading,

    // Custom className
    className
  );

  // Determine proper button attributes based on element type
  const elementSpecificProps =
    Component === 'button'
      ? {
          type: nativeType,
          disabled: isDisabled,
        }
      : {};

  // Accessibility attributes
  const ariaProps = {
    'aria-disabled': isDisabled ? true : undefined,
    'aria-busy': loading ? true : undefined,
  };

  // Determine if this is an icon-only button (no text children)
  const isIconOnly = !children && (iconLeft ?? iconRight);

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={buttonClassName}
      {...elementSpecificProps}
      {...ariaProps}
      {...htmlProps}
    >
      {/* Loading spinner (replaces left icon) */}
      {loading && <Icon name="loader" size={CONTROL_ICON_SIZE[size]} aria-hidden="true" />}

      {/* Left icon (only if not loading) */}
      {!loading && iconLeft && <Icon name={iconLeft} size={CONTROL_ICON_SIZE[size]} aria-hidden="true" />}

      {/* Button text content */}
      {children && <span>{children}</span>}

      {/* Right icon */}
      {iconRight && <Icon name={iconRight} size={CONTROL_ICON_SIZE[size]} aria-hidden="true" />}

      {/* Screen reader text for icon-only buttons in loading state */}
      {isIconOnly && loading && <span className={styles['visually-hidden']}>Loading</span>}
    </Component>
  );
};

// Forward ref with generic type support
export const Button = forwardRef(ButtonImpl) as (<T extends ElementType = 'button'>(
  props: PolymorphicPropsWithRef<T, ButtonOwnProps>
) => React.ReactElement) & { displayName?: string };
Button.displayName = 'Button';
