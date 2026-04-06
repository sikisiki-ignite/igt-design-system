import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: { layout: 'centered' },
  argTypes: {
    tone: { control: 'select', options: ['brand', 'neutral'] },
    underline: { control: 'select', options: ['always', 'auto', 'none'] },
    state: { control: 'select', options: ['normal', 'hover', 'pressed', 'disabled'] },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: { children: '링크 텍스트', href: '#', tone: 'brand', underline: 'auto' },
}

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Link href="#" tone="brand">Brand 링크</Link>
      <Link href="#" tone="neutral">Neutral 링크</Link>
    </div>
  ),
}

export const AllUnderlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Link href="#" underline="always">항상 밑줄</Link>
      <Link href="#" underline="auto">자동 밑줄</Link>
      <Link href="#" underline="none">밑줄 없음</Link>
    </div>
  ),
}

export const Disabled: Story = {
  args: { children: '비활성 링크', href: '#', state: 'disabled' },
}
