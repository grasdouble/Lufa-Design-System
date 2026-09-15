import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import { useFormFieldContext } from '../FormField/FormFieldContext';
import styles from './Input.module.css';

/**
 * Input Component - Text Input Field
 *
 * A versatile text input component with support for different states (focus, error, disabled).
 *
 * @example
 * ```tsx
 * // Basic input
 * <Input placeholder="Enter your name" />
 *
 * // Input with error
 * <Input error placeholder="Invalid email" />
 *
 * // Disabled input
 * <Input disabled value="Cannot change this" />
 * ```
 */

export type InputProps = {
  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Full width input
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'size'>; // Omit size to avoid conflict with potential size prop

/**
 * Renders a native text input and forwards its ref.
 *
 * Accessibility contract: consumers must provide a visible label or `aria-label`.
 * `error` sets `aria-invalid`; native `aria-describedby` is supported directly.
 * Inside `FormField`, label, description, error, required, and invalid state are
 * connected automatically.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error = false,
      fullWidth,
      disabled,
      id,
      required,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const field = useFormFieldContext();
    const describedBy = [field?.describedBy, ariaDescribedBy].filter(Boolean).join(' ') || undefined;
    const invalid = ariaInvalid ?? (error || field?.invalid ? true : undefined);

    return (
      <input
        ref={ref}
        id={id ?? field?.inputId}
        required={required ?? field?.required}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={invalid}
        className={clsx(
          styles.input,
          (error || field?.invalid) && styles.error,
          fullWidth && styles.fullWidth,
          disabled && styles.disabled,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
