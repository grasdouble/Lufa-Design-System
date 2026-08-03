import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import type { SemanticSpacing } from '../../utils/component-values';
import styles from './Cluster.module.css';

/**
 * Cluster Component - Flexible Layout Primitive for Wrapping Collections
 *
 * A specialized layout component for grouping collections of elements with
 * intelligent wrapping behavior. Cluster is designed for tags, badges, buttons,
 * and other compact elements that need to flow naturally and wrap responsively.
 *
 * **Pattern Origin**: Based on "The Cluster" pattern by Heydon Pickering
 * from Every Layout (https://every-layout.dev/layouts/cluster/)
 *
 * **Semantic equivalent of Chakra UI's Wrap component.**
 *
 * Features:
 * - Automatic wrapping (flex-wrap: wrap by default)
 * - Gap-based spacing (using semantic tokens)
 * - Flexbox alignment (align-items and justify-content)
 * - Polymorphic `as` prop for semantic HTML elements
 * - Performance-optimized (CSS classes, not inline styles)
 * - No wrapper components needed (unlike Chakra's WrapItem)
 *
 * @example
 * ```tsx
 * // Tag collection
 * <Cluster spacing="compact">
 *   <Badge>React</Badge>
 *   <Badge>TypeScript</Badge>
 *   <Badge>Next.js</Badge>
 * </Cluster>
 *
 * // Button group with custom alignment
 * <Cluster spacing="default" align="center" justify="flex-end">
 *   <Button variant="secondary">Cancel</Button>
 *   <Button variant="primary">Submit</Button>
 * </Cluster>
 *
 * // Responsive badge list
 * <Cluster spacing="tight" justify="center">
 *   {tags.map(tag => <Badge key={tag.id}>{tag.name}</Badge>)}
 * </Cluster>
 * ```
 */

// ============================================
// TYPES
// ============================================

/**
 * Spacing values based on semantic tokens
 * Maps to: gap using --semantic-ui-spacing-{value}
 */
/**
 * Alignment of children on cross-axis
 * Maps to: align-items
 */
type AlignValue = 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';

/**
 * Justification of children on main-axis
 * Maps to: justify-content
 */
type JustifyValue = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';

/**
 * Cluster component props
 *
 * Generic type T allows proper typing when using `as` prop
 */
export type ClusterProps<T extends ElementType = 'div'> = {
  /**
   * HTML element to render
   * @default 'div'
   */
  as?: T;

  /**
   * Spacing between children (uses gap property)
   * @default 'default'
   */
  spacing?: Exclude<SemanticSpacing, 'none'>;

  /**
   * Alignment of children on cross-axis
   * @default 'center'
   */
  align?: AlignValue;

  /**
   * Justification of children on main-axis
   * @default 'flex-start'
   */
  justify?: JustifyValue;

  /**
   * Additional CSS classes
   * @default undefined
   */
  className?: string;

  /**
   * Whether the Cluster should grow to fill all available space in its parent.
   * Applies `flex: 1 1 auto`, `height: 100%`, `min-height: 0`, and `min-width: 0`.
   * Useful when Cluster is inside a height-constrained flex container.
   *
   * **Note:** When using the `as` prop with a custom component that also accepts a `grow` prop,
   * this component's `grow` is consumed here and will **not** be forwarded to the rendered element.
   * @default false
   */
  grow?: boolean;

  /**
   * Children elements
   */
  children?: React.ReactNode;
};
/**
 * Combined props type including element-specific props
 */
type ClusterComponentProps<T extends ElementType> = ClusterProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ClusterProps<T>>;

// ============================================
// COMPONENT
// ============================================

/**
 * Cluster component with ref forwarding.
 *
 * Accessibility contract: choose a semantic `as` element for the collection.
 * Cluster adds no role or keyboard behavior.
 */
const ClusterImpl = <T extends ElementType = 'div'>(
  {
    as,
    spacing = 'default',
    align = 'center',
    justify = 'flex-start',
    grow = false,
    className,
    children,
    ...htmlProps
  }: ClusterComponentProps<T>,
  ref: React.ForwardedRef<Element>
) => {
  // Determine the element to render
  const Component = as ?? 'div';

  // Build className from utility props
  const clusterClassName = clsx(
    // Base flexbox display with wrap (always present)
    styles.cluster,

    // Spacing utilities (gap)
    spacing && styles[`spacing-${spacing}`],

    // Alignment utilities
    align && styles[`align-${align}`],

    // Justification utilities
    justify && styles[`justify-${justify}`],

    // Fill available space when requested
    grow && styles.grow,

    // Custom className
    className
  );

  return (
    <Component ref={ref as React.Ref<never>} className={clusterClassName} {...htmlProps}>
      {children}
    </Component>
  );
};

// Forward ref with generic type support and displayName
export const Cluster = forwardRef(ClusterImpl) as (<T extends ElementType = 'div'>(
  props: ClusterComponentProps<T> & { ref?: React.Ref<React.ComponentRef<T>> }
) => React.ReactElement) & { displayName?: string };
Cluster.displayName = 'Cluster';
