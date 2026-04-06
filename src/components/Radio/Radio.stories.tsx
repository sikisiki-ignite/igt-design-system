import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: { label: '옵션 1', selected: false, size: 'md' },
}

export const Selected: Story = {
  args: { label: '선택됨', selected: true },
}

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Radio label="옵션 A" selected={true} />
      <Radio label="옵션 B" selected={false} />
      <Radio label="옵션 C (비활성)" selected={false} disabled />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Radio label="Normal" selected={false} />
      <Radio label="Selected" selected={true} />
      <Radio label="Disabled" selected={false} disabled />
      <Radio label="Disabled Selected" selected={true} disabled />
      <Radio label="Invalid" selected={false} invalid />
    </div>
  ),
}
