import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    kind: { control: 'select', options: ['count', 'dot'] },
    tone: { control: 'select', options: ['accent', 'neutral', 'urgent'] },
    count: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Dot: Story = {
  args: {
    kind: 'dot',
    tone: 'accent',
  },
}

export const Count: Story = {
  args: {
    kind: 'count',
    tone: 'accent',
    count: 5,
  },
}

export const CountOverflow: Story = {
  args: {
    kind: 'count',
    tone: 'urgent',
    count: 120,
  },
}

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge kind="count" tone="accent" count={3} />
      <Badge kind="count" tone="neutral" count={3} />
      <Badge kind="count" tone="urgent" count={3} />
    </div>
  ),
}

export const DotTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge kind="dot" tone="accent" />
      <Badge kind="dot" tone="neutral" />
      <Badge kind="dot" tone="urgent" />
    </div>
  ),
}
