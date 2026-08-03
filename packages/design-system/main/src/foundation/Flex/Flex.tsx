import type { ElementType } from 'react';
import { forwardRef } from 'react';
import type { BoxComponentProps } from '@foundation/Box/Box';
import { Box } from '@foundation/Box/Box';
import { clsx } from 'clsx';

import type { SemanticSpacing } from '../../utils/component-values';
import styles from './Flex.module.css';

export type FlexProps<T extends ElementType = 'div'> = BoxComponentProps<T> & {
  /**
   * Shorthand for flex-direction
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * Shorthand for flex-wrap
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * Shorthand for justify-content
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  /**
   * Shorthand for align-items
   */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
   * Shorthand for gap (using semantic spacing tokens)
   */
  gap?: SemanticSpacing;
  /**
   * If true, sets display to inline-flex
   */
  inline?: boolean;
};

/**
 * Flex Component
 *
 * A layout primitive that extends Box with Flexbox properties.
 * Inherits all Box props including responsive visibility controls.
 *
 * Accessibility contract: choose a semantic `as` element matching the content.
 * Flex adds no role or keyboard behavior, and neutralizes `grow` while wrapping
 * to prevent overflow.
 *
 * @example
 * ```tsx
 * <Flex justify="between" align="center">
 *   <div>Left</div>
 *   <div>Right</div>
 * </Flex>
 *
 * // Responsive visibility
 * <Flex showFrom="lg" justify="end">
 *   <DesktopToolbar />
 * </Flex>
 * ```
 */
const FlexImpl = <T extends ElementType = 'div'>(
  { direction, wrap, justify, align, gap, inline, className, grow, ...props }: FlexProps<T>,
  ref: React.ForwardedRef<Element>
) => {
  // `grow` is incompatible with wrapping flex containers: neutralise it in production
  // to prevent the known height-overflow bug, and still warn in development.
  const isWrapping = wrap && wrap !== 'nowrap';
  const effectiveGrow = grow === true && !isWrapping;

  if (import.meta.env.DEV && grow && isWrapping) {
    console.warn(
      '[Flex] Using `grow` together with `wrap` is unsupported. ' +
        'A wrapping flex container cannot reliably fill 100% height and may overflow its parent.'
    );
  }

  const flexClassName = clsx(
    styles.flex,
    direction && styles[`direction-${direction}`],
    wrap && styles[`wrap-${wrap}`],
    justify && styles[`justify-${justify}`],
    align && styles[`align-${align}`],
    gap && styles[`gap-${gap}`],
    inline && styles.inline,
    className
  );

  return (
    <Box<T>
      ref={ref as React.Ref<never>}
      className={flexClassName}
      grow={effectiveGrow}
      {...(props as BoxComponentProps<T>)}
    />
  );
};

export const Flex = forwardRef(FlexImpl) as (<T extends ElementType = 'div'>(
  props: FlexProps<T> & { ref?: React.Ref<React.ComponentRef<T>> }
) => React.ReactElement) & { displayName?: string };
Flex.displayName = 'Flex';
