/**
 * Live examples for Link component documentation
 * These components are imported and rendered in Link.mdx
 */

import React from 'react';

import type { LinkProps } from '@grasdouble/lufa_design-system';
import { Link, Text } from '@grasdouble/lufa_design-system';

/**
 * Basic demo showing default Link usage
 */
export function LiveDemo() {
  return (
    <Text as="p" variant="body">
      Visit the{' '}
      <Link href="https://github.com/grasdouble/Lufa-Design-System" target="_blank">
        Lufa Design System
      </Link>{' '}
      on GitHub.
    </Text>
  );
}

/**
 * All variant demonstrations
 */
export function AllVariants() {
  const variants: { value: LinkProps['variant']; label: string; description: string; color?: LinkProps['color'] }[] = [
    {
      value: 'default',
      label: 'Default',
      description: 'Colored text with animated border-bottom on hover',
      color: 'primary',
    },
    {
      value: 'subtle',
      label: 'Subtle',
      description: 'Secondary text color, same animated border behavior',
    },
    {
      value: 'plain',
      label: 'Plain',
      description: 'No underline, color only — for use inside buttons or badges',
      color: 'primary',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--lufa-semantic-ui-spacing-comfortable)',
        padding: 'var(--lufa-semantic-ui-spacing-default)',
        border: '1px solid var(--lufa-semantic-ui-border-default)',
        borderRadius: 'var(--lufa-primitive-radius-scale-base)',
      }}
    >
      {variants.map(({ value, label, description, color }) => (
        <div
          key={value}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--lufa-semantic-ui-spacing-default)',
            padding: 'var(--lufa-semantic-ui-spacing-compact)',
            border: '1px solid var(--lufa-semantic-ui-border-default)',
            borderRadius: 'var(--lufa-primitive-radius-scale-sm)',
            backgroundColor: 'var(--lufa-semantic-ui-background-surface-default)',
          }}
        >
          <div style={{ minWidth: '140px' }}>
            <Text as="p" variant="body">
              <Link href="https://example.com" variant={value} color={color}>
                {label} link
              </Link>
            </Text>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: 'var(--lufa-primitive-typography-font-size-sm)',
                fontWeight: 'var(--lufa-primitive-typography-font-weight-semibold)',
                color: 'var(--lufa-semantic-ui-text-primary)',
              }}
            >
              variant="{value}"
            </span>
            <span
              style={{
                fontSize: 'var(--lufa-primitive-typography-font-size-xs)',
                color: 'var(--lufa-semantic-ui-text-secondary)',
              }}
            >
              {description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Inline usage inside Text paragraphs
 */
export function InlineUsage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--lufa-semantic-ui-spacing-comfortable)',
        padding: 'var(--lufa-semantic-ui-spacing-default)',
        border: '1px solid var(--lufa-semantic-ui-border-default)',
        borderRadius: 'var(--lufa-primitive-radius-scale-base)',
      }}
    >
      <Text as="p" variant="body-large">
        My work is split between{' '}
        <Link href="https://github.com/noofreuuuh" target="_blank">
          noofreuuuh
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/smouillour" target="_blank">
          smouillour
        </Link>
        .
      </Text>

      <Text as="p" variant="body" color="secondary">
        Built with{' '}
        <Link href="https://react.dev" target="_blank" color="secondary">
          React
        </Link>{' '}
        and the{' '}
        <Link href="https://github.com/grasdouble/Lufa-Design-System" target="_blank" color="secondary">
          Lufa Design System
        </Link>
        .
      </Text>

      <Text as="p" variant="body-small">
        Read the{' '}
        <Link href="#" variant="plain">
          documentation
        </Link>{' '}
        or check the{' '}
        <Link href="#" variant="plain">
          changelog
        </Link>
        .
      </Text>
    </div>
  );
}

/**
 * External link behavior — auto rel
 */
export function ExternalLinks() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--lufa-semantic-ui-spacing-comfortable)',
        padding: 'var(--lufa-semantic-ui-spacing-default)',
        border: '1px solid var(--lufa-semantic-ui-border-default)',
        borderRadius: 'var(--lufa-primitive-radius-scale-base)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--lufa-semantic-ui-spacing-default)',
          padding: 'var(--lufa-semantic-ui-spacing-compact)',
          border: '1px solid var(--lufa-semantic-ui-border-default)',
          borderRadius: 'var(--lufa-primitive-radius-scale-sm)',
          backgroundColor: 'var(--lufa-semantic-ui-background-surface-default)',
        }}
      >
        <Text as="p" variant="body">
          <Link href="https://github.com" target="_blank">
            GitHub
          </Link>{' '}
          (opens new tab, rel auto-set)
        </Text>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--lufa-semantic-ui-spacing-default)',
          padding: 'var(--lufa-semantic-ui-spacing-compact)',
          border: '1px solid var(--lufa-semantic-ui-border-default)',
          borderRadius: 'var(--lufa-primitive-radius-scale-sm)',
          backgroundColor: 'var(--lufa-semantic-ui-background-surface-default)',
        }}
      >
        <Text as="p" variant="body">
          <Link href="/about">About page</Link> (same tab, no rel)
        </Text>
      </div>
    </div>
  );
}
