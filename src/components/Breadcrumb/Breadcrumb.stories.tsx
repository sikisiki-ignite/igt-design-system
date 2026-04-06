import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

const ITEMS = [
  { label: '홈', href: '#' },
  { label: '카테고리', href: '#' },
  { label: '상품 목록', href: '#' },
  { label: '상품 상세' },
]

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'padded' },
  argTypes: {
    separator: { control: 'select', options: ['chevron', 'dot', 'slash'] },
    leading: { control: 'select', options: ['none', 'home'] },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: { items: ITEMS, separator: 'chevron', leading: 'none' },
}

export const AllSeparators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Breadcrumb items={ITEMS} separator="chevron" />
      <Breadcrumb items={ITEMS} separator="dot" />
      <Breadcrumb items={ITEMS} separator="slash" />
    </div>
  ),
}

export const WithHome: Story = {
  args: { items: ITEMS, leading: 'home' },
}
