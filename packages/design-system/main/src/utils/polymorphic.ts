import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

/**
 * Ref type inferred from a polymorphic component's rendered element.
 */
export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

/**
 * Combines component-owned props with the props of the element selected through `as`.
 */
export type PolymorphicProps<T extends ElementType, OwnProps = object> = OwnProps & {
  /** HTML element or React component to render. */
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof OwnProps | 'as'>;

/**
 * Polymorphic props including a ref inferred from the selected element.
 */
export type PolymorphicPropsWithRef<T extends ElementType, OwnProps = object> = PolymorphicProps<T, OwnProps> & {
  /** Ref forwarded to the rendered element. */
  ref?: PolymorphicRef<T>;
};
