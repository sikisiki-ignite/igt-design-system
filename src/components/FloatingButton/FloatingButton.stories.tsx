import type { Meta, StoryObj } from '@storybook/react'
import { FloatingButton } from './FloatingButton'

const PlusIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const meta: Meta<typeof FloatingButton> = {
  title: 'Components/FloatingButton',
  component: FloatingButton,
  parameters: { layout: 'centered' },
  argTypes: {
    layout: { control: 'select', options: ['standard', 'extended'] },
    priority: { control: 'select', options: ['brand', 'neutral', 'subtle'] },
    size: { control: 'select', options: ['md', 'lg'] },
    state: { control: 'select', options: ['normal', 'hover', 'pressed', 'disabled', 'loading'] },
  },
}

export default meta
type Story = StoryObj<typeof FloatingButton>

export const Standard: Story = {
  args: { icon: <PlusIcon />, layout: 'standard', priority: 'brand', size: 'md' },
}

export const Extended: Story = {
  args: { icon: <PlusIcon />, layout: 'extended', label: '새 항목 추가', priority: 'brand', size: 'md' },
}

export const AllPriorities: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <FloatingButton icon={<PlusIcon />} priority="brand" />
      <FloatingButton icon={<PlusIcon />} priority="neutral" />
      <FloatingButton icon={<PlusIcon />} priority="subtle" />
    </div>
  ),
}
