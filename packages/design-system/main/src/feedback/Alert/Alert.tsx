import type { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import styles from './Alert.module.css';

/** Semantic feedback container for errors, warnings, information, and success. */
export type AlertVariant = 'error' | 'info' | 'success' | 'warning';

/**
 * Alert component for announced feedback and callouts.
 *
 * Accessibility contract: errors default to `role="alert"` and assertive
 * announcements; other variants default to `role="status"` and polite
 * announcements. Consumers may override `role` and `aria-live`. Content must
 * remain understandable without relying on the visual tone alone.
 */
export type AlertProps = Omit<ComponentPropsWithoutRef<'div'>, 'color'> & {
  /** Semantic feedback tone. Defaults to `info`. */
  variant?: AlertVariant;
};

const AlertImpl = (
  { variant = 'info', role, 'aria-live': ariaLive, className, children, ...props }: AlertProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const resolvedRole = role ?? (variant === 'error' ? 'alert' : 'status');
  const resolvedLive = ariaLive ?? (resolvedRole === 'alert' ? 'assertive' : 'polite');

  return (
    <div
      ref={ref}
      className={clsx(styles.alert, styles[`variant-${variant}`], className)}
      role={resolvedRole}
      aria-live={resolvedLive}
      {...props}
    >
      {children}
    </div>
  );
};

export const Alert = forwardRef(AlertImpl);
Alert.displayName = 'Alert';
