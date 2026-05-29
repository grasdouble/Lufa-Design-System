import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import styles from './Link.module.css';

/**
 * Link Component - Inline Anchor Element
 *
 * A flexible, polymorphic inline link component for embedding styled anchors
 * inside text content. Uses DS tokens exclusively and inherits font properties
 * from the surrounding context.
 *
 * Features:
 * - Three visual variants (default, subtle, plain)
 * - Four functional colors (primary, secondary, tertiary, inverse)
 * - Animated border-bottom on hover (default and subtle variants)
 * - Accessible: native `<a>` semantics with visible focus ring
 * - Auto `rel="noopener noreferrer"` when `target="_blank"`
 * - Polymorphic `as` prop for router link integration
 * - Inherits font-size and font-weight from parent context
 * - Token-based design (semantic layer tokens)
 *
 * @example
 * ```tsx
 * // Default inline link
 * <Link href="https://github.com/noofreuuuh" target="_blank">
 *   noofreuuuh
 * </Link>
 *
 * // Inside a Text component
 * <Text as="p" variant="body-large" color="secondary">
 *   My work is split between{' '}
 *   <Link href="https://github.com/noofreuuuh" target="_blank">noofreuuuh</Link>
 *   {' '}and{' '}
 *   <Link href="https://github.com/smouillour" target="_blank">smouillour</Link>.
 * </Text>
 *
 * // Subtle variant (secondary color by default)
 * <Link href="/about" variant="subtle">About us</Link>
 *
 * // Plain variant (no underline)
 * <Link href="/home" variant="plain" color="primary">Home</Link>
 *
 * // Router link integration
 * <Link as={RouterLink} to="/about">About</Link>
 * ```
 */

// ============================================
// TYPES
// ============================================

/**
 * Link variant values — controls visual style
 * - `underline`: colored text + animated border-bottom on hover
 * - `plain`:     no underline, color only
 */
type VariantValue = 'underline' | 'plain';

/**
 * Link color values — functional link colors
 * - `primary`:   brand link color (--lufa-semantic-interactive-link-default)
 * - `secondary`: subdued link for de-emphasized content
 * - `tertiary`:  very subtle, for footer-style links
 * - `inverse`:   white link for use on dark/primary backgrounds
 */
type ColorValue = 'primary' | 'secondary' | 'tertiary' | 'inverse';

/**
 * Link component props
 *
 * Generic type T allows proper typing when using `as` prop
 */
export type LinkProps<T extends ElementType = 'a'> = {
  /**
   * HTML element or component to render
   * @default 'a'
   */
  as?: T;

  /**
   * Destination URL
   */
  href?: string;

  /**
   * Link target — where to open the URL
   * @default '_self'
   */
  target?: '_self' | '_blank';

  /**
   * Rel attribute — defaults to "noopener noreferrer" when target="_blank"
   */
  rel?: string;

  /**
   * Visual style variant
   * @default 'underline'
   */
  variant?: VariantValue;

  /**
   * Text color
   * - `primary` (default): brand link color, visually distinct from surrounding text
   * - `secondary`: subdued
   * - `tertiary`: very subtle
   * - `inverse`: white, for use on dark/primary-colored backgrounds
   */
  color?: ColorValue;

  /**
   * Additional CSS classes
   * @default undefined
   */
  className?: string;

  /**
   * Link content
   */
  children?: React.ReactNode;
};

/**
 * Combined props type including element-specific props
 */
type LinkComponentProps<T extends ElementType> = LinkProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof LinkProps<T>>;

// ============================================
// COMPONENT
// ============================================

/**
 * Link component with ref forwarding
 */
const LinkImpl = <T extends ElementType = 'a'>(
  {
    as,
    href,
    target = '_self',
    rel,
    variant = 'underline',
    color,
    className,
    children,
    ...htmlProps
  }: LinkComponentProps<T>,
  ref: React.ForwardedRef<Element>
) => {
  // Determine the element to render
  const Component = as ?? 'a';

  // Resolve color — defaults to 'primary' when not specified
  const resolvedColor = color ?? 'primary';

  // Auto-apply rel="noopener noreferrer" when target="_blank" for security
  const resolvedRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

  // Build className from utility props
  const linkClassName = clsx(
    // Base link class
    styles.link,

    // Variant utilities
    styles[`variant-${variant}`],

    // Color utilities
    styles[`color-${resolvedColor}`],

    // Custom className
    className
  );

  // Spread anchor props only when rendering as a native <a> or a custom component.
  // Native non-anchor elements (e.g. span, button) must not receive href/target/rel.
  const isNativeAnchor = typeof Component === 'string' ? Component === 'a' : true;
  const anchorProps = isNativeAnchor && href !== undefined ? { href, target, rel: resolvedRel } : {};

  // Default type="button" for native <button> to prevent accidental form submission.
  const buttonProps = Component === 'button' && !('type' in htmlProps) ? { type: 'button' as const } : {};

  return (
    <Component ref={ref as React.Ref<never>} className={linkClassName} {...buttonProps} {...anchorProps} {...htmlProps}>
      {children}
    </Component>
  );
};

// Forward ref with generic type support and displayName
export const Link = forwardRef(LinkImpl) as (<T extends ElementType = 'a'>(
  props: LinkComponentProps<T> & { ref?: React.Ref<React.ComponentRef<T>> }
) => React.ReactElement) & { displayName?: string };
Link.displayName = 'Link';
