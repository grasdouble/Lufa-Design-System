import type { Meta, StoryObj } from '@storybook/react-vite';

import { Center } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { STORY_COLORS } from '../../constants/storyColors';

const meta = {
  title: '4. Foundation/Center',
  component: Center,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    inline: {
      control: 'boolean',
      description: 'If true, sets display to inline-flex',
    },
    children: {
      control: 'text',
      description: 'Content to center',
    },
  },
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof Center>;

const generateCode = (variant: 'block' | 'inline') => {
  if (variant === 'inline') {
    return `<Center inline>
  ?
</Center>`;
  }

  return `<Center>
  <Icon />
</Center>`;
};

export const PropCentering: Story = {
  name: 'Prop: centering',
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
            <PropCard label="Block Center">
              <div
                style={{
                  height: '200px',
                  backgroundColor: STORY_COLORS.themed.background.surface,
                  border: `2px dashed ${STORY_COLORS.primary.blue.main}`,
                }}
              >
                <Center style={{ height: '100%', width: '100%' }}>
                  <div
                    style={{
                      backgroundColor: STORY_COLORS.primary.blue.main,
                      color: STORY_COLORS.neutral.white,
                      padding: '1rem',
                      borderRadius: '50%',
                      width: '4rem',
                      height: '4rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                    }}
                  >
                    X
                  </div>
                </Center>
              </div>
            </PropCard>
            <PropCard label="Inline Center">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span>Text</span>
                <Center
                  inline
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: STORY_COLORS.primary.violet.main,
                    borderRadius: '50%',
                    color: STORY_COLORS.neutral.white,
                  }}
                >
                  ?
                </Center>
                <span>Text</span>
              </div>
            </PropCard>
          </div>

          <CodeBlock code={generateCode('block')} language="jsx" title="JSX" subtitle="default" />
        </div>
      </StoryContainer>
    );
  },
};
