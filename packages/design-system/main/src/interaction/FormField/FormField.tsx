import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { forwardRef, useId, useMemo } from 'react';
import { clsx } from 'clsx';

import { Label } from '../Label';
import styles from './FormField.module.css';
import { FormFieldContext } from './FormFieldContext';

/** Props for the accessible `FormField` composition. */
export type FormFieldProps = {
  /** Visible label associated with the nested `Input`. */
  label: ReactNode;
  /** Optional supporting text associated through `aria-describedby`. */
  description?: ReactNode;
  /** Optional validation message associated through `aria-describedby`. */
  errorMessage?: ReactNode;
  /** Stable input identifier; generated automatically when omitted. */
  inputId?: string;
  /** Marks the nested `Input` as required. */
  required?: boolean;
  /** Form control rendered inside the field. */
  children: ReactNode;
  /** Additional CSS classes. */
  className?: string;
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

/**
 * Composes a visible label, supporting text, validation message, and form control.
 *
 * Accessibility contract: a nested Lufa `Input` consumes the generated IDs,
 * receives `aria-invalid` when an error is present, and is associated with the
 * visible label and descriptions. Consumers overriding the input ID must pass
 * the same value through `inputId`.
 */
export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, description, errorMessage, inputId, required = false, children, className, ...props }, ref) => {
    const generatedId = useId();
    const resolvedInputId = inputId ?? `lufa-field-${generatedId}`;
    const descriptionId = description ? `${resolvedInputId}-description` : undefined;
    const errorId = errorMessage ? `${resolvedInputId}-error` : undefined;
    const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined;
    const contextValue = useMemo(
      () => ({
        inputId: resolvedInputId,
        describedBy,
        invalid: Boolean(errorMessage),
        required,
      }),
      [describedBy, errorMessage, required, resolvedInputId]
    );

    return (
      <FormFieldContext.Provider value={contextValue}>
        <div ref={ref} className={clsx(styles.field, className)} {...props}>
          <Label htmlFor={resolvedInputId}>
            {label}
            {required && <span aria-hidden="true"> *</span>}
          </Label>
          {children}
          {description && (
            <p id={descriptionId} className={styles.description}>
              {description}
            </p>
          )}
          {errorMessage && (
            <p id={errorId} className={styles.error}>
              {errorMessage}
            </p>
          )}
        </div>
      </FormFieldContext.Provider>
    );
  }
);

FormField.displayName = 'FormField';
