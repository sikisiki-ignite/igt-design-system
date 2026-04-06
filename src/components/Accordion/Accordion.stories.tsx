import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'select', options: ['contained', 'plain'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    state: { control: 'select', options: ['collapsed', 'expanded', 'disabled'] },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Collapsed: Story = {
  args: {
    title: '자주 묻는 질문',
    state: 'collapsed',
    children: '여기에 답변 내용이 표시됩니다.',
  },
}

export const Expanded: Story = {
  args: {
    title: '자주 묻는 질문',
    state: 'expanded',
    children: '여기에 답변 내용이 표시됩니다.',
  },
}

export const Plain: Story = {
  args: {
    title: 'Plain 타입',
    type: 'plain',
    children: 'Plain 스타일의 아코디언입니다.',
  },
}

export const Multiple: Story = {
  render: () => (
    <div style={{ width: '480px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Accordion title="배송은 얼마나 걸리나요?">영업일 기준 2~3일 소요됩니다.</Accordion>
      <Accordion title="반품 정책은 어떻게 되나요?" state="expanded">구매 후 7일 이내 반품 가능합니다.</Accordion>
      <Accordion title="비활성 항목" state="disabled">이 항목은 비활성 상태입니다.</Accordion>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ width: '480px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Accordion title="Small" size="sm" state="expanded">Small 사이즈 콘텐츠</Accordion>
      <Accordion title="Medium" size="md" state="expanded">Medium 사이즈 콘텐츠</Accordion>
      <Accordion title="Large" size="lg" state="expanded">Large 사이즈 콘텐츠</Accordion>
    </div>
  ),
}
