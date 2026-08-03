import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import type { SemanticSpacing } from '../../utils/component-values';
import type { PolymorphicProps, PolymorphicPropsWithRef } from '../../utils/polymorphic';
import type { ResponsiveVisibilityProps } from '../../utils/responsive-visibility';
import { getResponsiveVisibilityClasses } from '../../utils/responsive-visibility';
import styles from './Container.module.css';

// Breakpoint keys matching the tokens
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ContainerOwnProps = {
  /**
   * If true, the container will take 100% width (no max-width).
   * @default false
   */
  fluid?: boolean;
  /**
   * The maximum size of the container, matching a breakpoint.
   * Useful to constrain the container to a smaller size than the viewport.
   */
  size?: Breakpoint;
  /**
   * Vertical padding (top + bottom) using spacing tokens.
   * Maps to: --lufa-semantic-ui-spacing-{value}
   * @default undefined (no vertical padding)
   */
  paddingBlock?: SemanticSpacing;
  /**
   * Horizontal padding (left + right) using spacing tokens.
   * Overrides the default horizontal gutter padding.
   * Maps to: --lufa-semantic-ui-spacing-{value}
   * @default undefined (uses component token default)
   */
  paddingInline?: SemanticSpacing;
  /**
   * The content to render.
   */
  children?: React.ReactNode;
  /**
   * Additional CSS classes.
   */
  className?: string;
} & ResponsiveVisibilityProps;

export type ContainerProps<T extends ElementType = 'div'> = PolymorphicProps<T, ContainerOwnProps>;

/**
 * Container Component
 *
 * A layout primitive that centers content horizontally and constrains its max-width.
 * It uses the responsive breakpoints defined in the Design Tokens.
 *
 * Accessibility contract: choose a semantic `as` element appropriate for the
 * represented region. Container adds no role or keyboard behavior.
 *
 * @example
 * ```tsx
 * // Standard responsive container
 * <Container>Content</Container>
 *
 * // Fluid container (100% width)
 * <Container fluid>Full width content</Container>
 *
 * // Constrained container
 * <Container size="md">Narrow content</Container>
 *
 * // Page section with vertical padding
 * <Container as="section" size="lg" paddingBlock="spacious">
 *   Hero section
 * </Container>
 *
 * // Full padding control
 * <Container paddingBlock="comfortable" paddingInline="spacious">
 *   Custom padded content
 * </Container>
 *
 * // Responsive visibility
 * <Container hideFrom="xl" size="lg">
 *   Narrow container for smaller screens
 * </Container>
 * ```
 */
const ContainerImpl = <T extends ElementType = 'div'>(
  {
    as,
    fluid = false,
    size,
    paddingBlock,
    paddingInline,
    // Responsive visibility props
    show,
    hide,
    hideFrom,
    showFrom,
    // Standard props
    children,
    className,
    ...props
  }: ContainerProps<T>,
  ref: React.ForwardedRef<Element>
) => {
  const Component = as ?? 'div';

  // Get responsive visibility classes
  const visibilityClasses = getResponsiveVisibilityClasses({
    show,
    hide,
    hideFrom,
    showFrom,
  });

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={clsx(
        styles.container,
        fluid && styles.fluid,
        size && styles[`size-${size}`],
        paddingBlock && styles[`paddingBlock-${paddingBlock}`],
        paddingInline && styles[`paddingInline-${paddingInline}`],
        ...visibilityClasses,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Container = forwardRef(ContainerImpl) as (<T extends ElementType = 'div'>(
  props: PolymorphicPropsWithRef<T, ContainerOwnProps>
) => React.ReactElement) & { displayName?: string };

Container.displayName = 'Container';
