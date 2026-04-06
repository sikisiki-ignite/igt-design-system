import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    state: { control: 'select', options: ['normal', 'hover', 'pressed', 'disabled'] },
    on: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Off: Story = {
  args: { label: '알림', on: false, size: 'md' },
}

export const On: Story = {
  args: { label: '알림', on: true, size: 'md' },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="Off" on={false} />
      <Switch label="On" on={true} />
      <Switch label="Disabled Off" on={false} state="disabled" />
      <Switch label="Disabled On" on={true} state="disabled" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Switch label="Small" on={true} size="sm" />
      <Switch label="Medium" on={true} size="md" />
    </div>
  ),
}
