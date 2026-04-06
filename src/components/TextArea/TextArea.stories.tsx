import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['fill', 'outline'] },
    size: { control: 'select', options: ['md', 'lg'] },
    state: { control: 'select', options: ['normal', 'hover', 'focused', 'disabled', 'readOnly'] },
    invalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: { label: '내용', placeholder: '내용을 입력하세요.', variant: 'fill', size: 'md' },
}

export const WithHelperText: Story = {
  args: {
    label: '설명',
    placeholder: '최대 500자',
    helperText: '간략하게 설명해 주세요.',
  },
}

export const Invalid: Story = {
  args: {
    label: '내용',
    value: '잘못된 내용',
    helperText: '내용이 너무 짧습니다.',
    invalid: true,
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <TextArea label="Normal" placeholder="Normal" state="normal" />
      <TextArea label="Disabled" placeholder="Disabled" state="disabled" />
      <TextArea label="Read Only" value="읽기 전용 내용입니다." state="readOnly" />
    </div>
  ),
}
