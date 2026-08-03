/**
 * Semantic spacing values shared by layout components.
 */
export type SemanticSpacing = 'none' | 'tight' | 'compact' | 'default' | 'comfortable' | 'spacious';

/**
 * Standard component size values.
 */
export type ComponentSize = 'sm' | 'md' | 'lg';

/**
 * Semantic icon size values.
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Maps control sizes to their visually balanced icon sizes.
 */
export const CONTROL_ICON_SIZE: Record<ComponentSize, IconSize> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};
