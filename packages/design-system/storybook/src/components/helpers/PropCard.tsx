import React from 'react';

/**
 * PropCard
 *
 * Helper component for displaying individual prop examples with a label.
 * The label is displayed BELOW the content to ensure visual alignment across cards,
 * even when labels wrap to multiple lines.
 *
 * @example
 * ```tsx
 * <PropCard label='variant="primary"'>
 *   <Button variant="primary">Click me</Button>
 * </PropCard>
 * ```
 */
export const PropCard = ({
  label,
  children,
}: {
  /** Label text displayed below the content */
  label: string;
  /** Component or elements to display */
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '16px',
        borderRadius: '12px',
      }}
    >
      {children}
      <div
        style={{
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: 'var(--lufa-semantic-ui-text-secondary)',
          fontFamily: 'monospace',
          textAlign: 'center',
          paddingTop: '8px',
          borderTop: '1px solid var(--lufa-semantic-ui-border-default)',
        }}
      >
        {label}
      </div>
    </div>
  );
};
