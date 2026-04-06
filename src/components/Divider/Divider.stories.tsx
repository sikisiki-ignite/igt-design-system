import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
  argTypes: {
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    emphasis: { control: 'select', options: ['weak', 'default', 'strong'] },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>위 콘텐츠</p>
      <Divider direction="horizontal" />
      <p>아래 콘텐츠</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', height: '40px' }}>
      <span>좌측</span>
      <Divider direction="vertical" />
      <span>우측</span>
    </div>
  ),
}

export const AllEmphasis: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Divider emphasis="weak" />
      <Divider emphasis="default" />
      <Divider emphasis="strong" />
    </div>
  ),
}
