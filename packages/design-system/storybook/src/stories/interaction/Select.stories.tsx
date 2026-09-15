import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { STORY_COLORS } from '../../constants/storyColors';

/**
 * Select Component - Native Select Dropdown
 *
 * A native select component for form inputs, consistent with the Input component styling.
 * Supports placeholder, error messages, disabled state, full width, and three sizes.
 *
 * ## Features
 * - ✅ States: Default, Focus, Error, Disabled
 * - ✅ Semantic token usage for borders and backgrounds
 * - ✅ Layout options: Full width or default
 * - ✅ Accessible focus rings
 * - ✅ Error message display with aria-describedby
 * - ✅ Three sizes: sm, md, lg
 * - ✅ Compound component: Select.Option
 */
const meta = {
  title: '6. Interaction/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no value is selected',
    },
    error: {
      control: 'text',
      description: 'Error message (also applies error styling)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to container width',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Select size',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// DEFAULT STORY
// ============================================

export const Default: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <PropCard label="Default Select">
            {/*
              💡 TOKEN EDUCATION:
              Background: var(--lufa-component-input-background-default)
              Text: var(--lufa-component-input-text-default)
              Border: var(--lufa-component-input-border-default)
              Focus Border: var(--lufa-component-input-border-focus)
              Border Radius: var(--lufa-component-input-border-radius)
            */}
            <Select id="default">
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
            </Select>
          </PropCard>

          <CodeBlock
            code={`<Select id="model">
  <Select.Option value="option1">Option 1</Select.Option>
  <Select.Option value="option2">Option 2</Select.Option>
  <Select.Option value="option3">Option 3</Select.Option>
</Select>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: PLACEHOLDER
// ============================================

export const Placeholder: Story = {
  name: 'Prop: placeholder',
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <PropCard label='placeholder="Select an option"'>
            <Select id="placeholder" placeholder="Select an option" defaultValue="">
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
            </Select>
          </PropCard>

          <CodeBlock
            code={`<Select id="model" placeholder="Select an option" defaultValue="">
  <Select.Option value="option1">Option 1</Select.Option>
  <Select.Option value="option2">Option 2</Select.Option>
</Select>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: STATES
// ============================================

export const States: Story = {
  name: 'States (Error / Disabled)',
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Error State */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Error State
            </h3>
            <PropCard label='error="Please select a valid option"'>
              <Select id="error" error="Please select a valid option">
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
              </Select>
            </PropCard>
          </div>

          {/* Disabled State */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Disabled State
            </h3>
            <PropCard label="disabled={true}">
              <Select id="disabled" disabled>
                <Select.Option value="option1">Option 1</Select.Option>
              </Select>
            </PropCard>
          </div>

          <CodeBlock
            code={`{/* Error state */}
<Select id="model" error="Please select a valid option">
  <Select.Option value="option1">Option 1</Select.Option>
</Select>

{/* Disabled state */}
<Select id="model" disabled>
  <Select.Option value="option1">Option 1</Select.Option>
</Select>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: SIZE
// ============================================

export const Size: Story = {
  name: 'Prop: size',
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {sizes.map((size) => (
            <PropCard key={size} label={`size="${size}"`}>
              <Select id={`size-${size}`} size={size}>
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
              </Select>
            </PropCard>
          ))}

          <CodeBlock
            code={`<Select id="sm" size="sm">
  <Select.Option value="option1">Option 1</Select.Option>
</Select>

<Select id="md" size="md">
  <Select.Option value="option1">Option 1</Select.Option>
</Select>

<Select id="lg" size="lg">
  <Select.Option value="option1">Option 1</Select.Option>
</Select>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: FULL WIDTH
// ============================================

export const FullWidth: Story = {
  name: 'Prop: fullWidth',
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <PropCard label="fullWidth={true}">
            <div
              style={{
                width: '100%',
                maxWidth: '500px',
                border: `1px dashed ${STORY_COLORS.themed.border.default}`,
                padding: '10px',
              }}
            >
              <Select id="fullwidth" fullWidth>
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
              </Select>
            </div>
          </PropCard>

          <CodeBlock
            code={`<div style={{ width: '500px' }}>
  <Select id="model" fullWidth>
    <Select.Option value="option1">Option 1</Select.Option>
  </Select>
</div>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};
