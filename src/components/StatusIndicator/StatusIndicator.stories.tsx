import type { Meta, StoryObj } from '@storybook/react'
import { StatusIndicator } from './StatusIndicator'

const meta: Meta<typeof StatusIndicator> = {
  title: 'Components/StatusIndicator',
  component: StatusIndicator,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    tone: { control: 'select', options: ['active', 'inactive', 'attention', 'error'] },
  },
}

export default meta
type Story = StoryObj<typeof StatusIndicator>

export const Default: Story = {
  args: { tone: 'active', size: 'md' },
}

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <StatusIndicator tone="active" /> Active
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <StatusIndicator tone="inactive" /> Inactive
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <StatusIndicator tone="attention" /> Attention
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <StatusIndicator tone="error" /> Error
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <StatusIndicator size="xs" tone="active" />
      <StatusIndicator size="sm" tone="active" />
      <StatusIndicator size="md" tone="active" />
      <StatusIndicator size="lg" tone="active" />
    </div>
  ),
}
