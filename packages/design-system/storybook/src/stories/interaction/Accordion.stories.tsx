import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion, Stack, Text } from '@grasdouble/lufa_design-system';

const meta = {
  title: '4. Interaction/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  argTypes: {
    summary: { control: 'text', description: 'Visible disclosure label' },
    open: { control: 'boolean', description: 'Whether the disclosure starts open' },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FrequentlyAskedQuestions: Story = {
  args: { summary: 'Frequently asked questions', children: 'Answers to common questions.' },
  render: () => (
    <Stack spacing="none">
      <Accordion summary="How do I get my coordinates?">
        <Text>Allow your browser to access your location after choosing a location action.</Text>
      </Accordion>
      <Accordion summary="Is my position stored?">
        <Text>Your position remains in this browser unless you explicitly share it.</Text>
      </Accordion>
      <Accordion summary="Can several answers stay open?">
        <Text>Yes. Each disclosure is independent and uses native details behavior.</Text>
      </Accordion>
    </Stack>
  ),
};

export const Playground: Story = {
  args: { summary: 'What is an Accordion?', children: 'A native disclosure styled with Lufa tokens.' },
};
