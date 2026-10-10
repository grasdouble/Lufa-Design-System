import type { Breakpoint, ResponsiveValue } from './responsive-visibility';

type ResponsiveLayoutComponent = 'grid' | 'stack';
type ResponsiveLayoutProperty = 'columns' | 'direction';

const BREAKPOINT_ORDER: readonly Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

/** Build namespaced global utility classes for responsive layout values. */
export function getResponsiveLayoutClasses<T extends string | number>(
  component: ResponsiveLayoutComponent,
  property: ResponsiveLayoutProperty,
  value: ResponsiveValue<T> | undefined
): string[] {
  if (typeof value !== 'object' || value === null) return [];

  const baseValue = value.base ?? (component === 'stack' && property === 'direction' ? ('vertical' as T) : undefined);
  const baseClass = baseValue === undefined ? [] : [`lufa-${component}-${property}-base-${baseValue}`];

  return baseClass.concat(
    BREAKPOINT_ORDER.flatMap((breakpoint) => {
      const breakpointValue = value[breakpoint];
      return breakpointValue === undefined ? [] : [`lufa-${component}-${property}-${breakpoint}-${breakpointValue}`];
    })
  );
}
