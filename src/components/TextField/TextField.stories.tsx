import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'select', options: ['fill', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    state: { control: 'select', options: ['normal', 'hover', 'focused', 'disabled', 'readOnly'] },
    density: { control: 'select', options: ['STANDARD', 'COMPACT'] },
    invalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    variant: 'fill',
    size: 'md',
    state: 'normal',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: '업무용 이메일을 입력하세요.',
  },
}

export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: '올바른 이메일 형식이 아닙니다.',
    invalid: true,
    value: 'not-an-email',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '280px' }}>
      <TextField label="Normal" placeholder="Normal" state="normal" />
      <TextField label="Focused" placeholder="Focused" state="focused" />
      <TextField label="Disabled" placeholder="Disabled" state="disabled" />
      <TextField label="Read Only" value="읽기 전용 값" state="readOnly" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', width: '580px' }}>
      <TextField label="Fill" placeholder="Fill variant" variant="fill" />
      <TextField label="Outline" placeholder="Outline variant" variant="outline" />
    </div>
  ),
}
