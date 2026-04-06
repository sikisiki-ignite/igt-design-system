import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'select', options: ['unchecked', 'checked', 'indeterminate'] },
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Label',
    value: 'unchecked',
    size: 'md',
  },
}

export const Checked: Story = {
  args: {
    label: 'Checked',
    value: 'checked',
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    value: 'indeterminate',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox label="Unchecked" value="unchecked" />
      <Checkbox label="Checked" value="checked" />
      <Checkbox label="Indeterminate" value="indeterminate" />
      <Checkbox label="Disabled" value="unchecked" disabled />
      <Checkbox label="Disabled Checked" value="checked" disabled />
      <Checkbox label="Invalid" value="unchecked" invalid />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Checkbox label="Small" size="sm" value="checked" />
      <Checkbox label="Medium" size="md" value="checked" />
    </div>
  ),
}
