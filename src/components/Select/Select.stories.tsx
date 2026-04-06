import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const OPTIONS = [
  { label: '옵션 1', value: 'option1' },
  { label: '옵션 2', value: 'option2' },
  { label: '옵션 3', value: 'option3' },
]

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: ['filled', 'outlined', 'plain'] },
    size: { control: 'select', options: ['xs', 'sm', 'md'] },
    state: { control: 'select', options: ['default', 'hover', 'pressed', 'disabled', 'error', 'read only'] },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    options: OPTIONS,
    placeholder: '선택하세요',
    type: 'filled',
    size: 'md',
    state: 'default',
  },
}

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Select options={OPTIONS} placeholder="Filled" type="filled" />
      <Select options={OPTIONS} placeholder="Outlined" type="outlined" />
      <Select options={OPTIONS} placeholder="Plain" type="plain" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Select options={OPTIONS} placeholder="XSmall" size="xs" />
      <Select options={OPTIONS} placeholder="Small" size="sm" />
      <Select options={OPTIONS} placeholder="Medium" size="md" />
    </div>
  ),
}

export const ErrorState: Story = {
  args: {
    options: OPTIONS,
    placeholder: '선택하세요',
    state: 'error',
  },
}

export const Disabled: Story = {
  args: {
    options: OPTIONS,
    placeholder: '선택 불가',
    state: 'disabled',
  },
}
