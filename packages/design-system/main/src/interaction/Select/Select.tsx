import type { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import styles from './Select.module.css';

/**
 * SelectOption sub-component
 *
 * Renders a native `<option>` element inside a Select.
 *
 * @example
 * ```tsx
 * <Select.Option value="option1">Option 1</Select.Option>
 * ```
 */
const SelectOption = (props: ComponentPropsWithoutRef<'option'>) => <option {...props} />;
SelectOption.displayName = 'Select.Option';

/**
 * Select Component - Native Select Dropdown for Forms
 *
 * A native select component consistent with Input styling and design tokens.
 * Supports placeholder, error message, disabled state, full width, and three sizes.
 *
 * @example
 * ```tsx
 * // Basic select
 * <Select id="model" value={value} onChange={(v) => setValue(v)}>
 *   <Select.Option value="option1">Option 1</Select.Option>
 *   <Select.Option value="option2">Option 2</Select.Option>
 * </Select>
 *
 * // Select with placeholder and error
 * <Select
 *   id="model"
 *   placeholder="Select an option"
 *   error="Please select a value"
 *   fullWidth
 * >
 *   <Select.Option value="option1">Option 1</Select.Option>
 * </Select>
 *
 * // Disabled select
 * <Select disabled value="option1">
 *   <Select.Option value="option1">Option 1</Select.Option>
 * </Select>
 * ```
 */

export type SelectSizeValue = 'sm' | 'md' | 'lg';

export type SelectProps = {
  /**
   * Callback fired when the selected value changes.
   * Receives the new string value (not a ChangeEvent).
   */
  onChange?: (value: string) => void;

  /**
   * Placeholder text shown when no value is selected.
   * Rendered as a hidden disabled option.
   */
  placeholder?: string;

  /**
   * Error message. When provided, applies error styling and displays the message below the select.
   */
  error?: string;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Full width select
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Size variant
   * @default 'md'
   */
  size?: SelectSizeValue;

  /**
   * Additional CSS classes applied to the select element
   */
  className?: string;
} & Omit<ComponentPropsWithoutRef<'select'>, 'onChange' | 'size'>;

const SelectImpl = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, fullWidth, disabled, size = 'md', placeholder, onChange, id, children, ...props }, ref) => {
    const errorId = id ? `${id}-error` : undefined;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth)}>
        <select
          ref={ref}
          id={id}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error && errorId ? errorId : undefined}
          onChange={handleChange}
          className={clsx(
            styles.select,
            styles[`size-${size}`],
            error && styles.error,
            fullWidth && styles.fullWidth,
            disabled && styles.disabled,
            className
          )}
          {...props}
        >
          {placeholder !== undefined && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {error && (
          <span id={errorId} className={styles.errorMessage} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

SelectImpl.displayName = 'Select';

/**
 * Select — Compound component with Option sub-component.
 *
 * Usage:
 * ```tsx
 * <Select id="my-select" value={val} onChange={setVal}>
 *   <Select.Option value="a">Option A</Select.Option>
 * </Select>
 * ```
 */
export const Select = Object.assign(SelectImpl, {
  Option: SelectOption,
});
