import type { Meta, StoryObj } from '@storybook/react-vite';

import { VisuallyHidden } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { STORY_COLORS } from '../../constants/storyColors';

const meta = {
  title: '8. Utility/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render',
      table: { defaultValue: { summary: 'span' } },
    },
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

const generateCode = (variant: 'button' | 'heading') => {
  if (variant === 'heading') {
    return `<h2>\n  Visible Title\n  <VisuallyHidden>(Screen reader only)</VisuallyHidden>\n</h2>`;
  }

  return `<button>\n  <Icon name="notification" />\n  <VisuallyHidden>View notifications</VisuallyHidden>\n</button>`;
};

export const PropAccessibility: Story = {
  name: 'Prop: accessibility',
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <PropCard label="Icon-only button">
              <button
                aria-label="Notifications"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: `1px solid ${STORY_COLORS.themed.border.default}`,
                  backgroundColor: STORY_COLORS.themed.background.surface,
                  cursor: 'pointer',
                }}
              >
                <span aria-hidden="true" style={{ fontSize: '20px' }}>
                  🔔
                </span>
                <VisuallyHidden>View notifications</VisuallyHidden>
              </button>
            </PropCard>
            <PropCard label="Supplemental text">
              <h2 style={{ margin: 0, color: STORY_COLORS.themed.text.primary }}>
                Visible Title
                <VisuallyHidden> (Screen reader only)</VisuallyHidden>
              </h2>
            </PropCard>
          </div>

          <CodeBlock code={generateCode('button')} language="jsx" title="JSX" subtitle="button" />
        </div>
      </StoryContainer>
    );
  },
};
