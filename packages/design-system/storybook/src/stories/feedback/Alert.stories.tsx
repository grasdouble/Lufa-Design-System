import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert, Stack, Text } from '@grasdouble/lufa_design-system';

const meta = {
  title: '6. Feedback/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'info', 'success', 'warning'],
      description: 'Semantic feedback tone',
    },
    role: {
      control: 'select',
      options: ['alert', 'status'],
      description: 'Announcement role; defaults based on variant',
    },
    'aria-live': {
      control: 'select',
      options: ['assertive', 'polite', 'off'],
      description: 'Announcement politeness; defaults based on role',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <Stack spacing="default">
      <Alert variant="info">
        <Text>Optional address lookup information.</Text>
      </Alert>
      <Alert variant="success">
        <Text>Your coordinates were copied.</Text>
      </Alert>
      <Alert variant="warning">
        <Text>This position is approximate.</Text>
      </Alert>
      <Alert variant="error">
        <Text>The location request failed. Please retry.</Text>
      </Alert>
    </Stack>
  ),
};

export const Playground: Story = {
  args: { variant: 'info', children: 'A useful message for the user.' },
};
