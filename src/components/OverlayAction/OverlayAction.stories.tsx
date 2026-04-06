import type { Meta, StoryObj } from '@storybook/react'
import { OverlayAction } from './OverlayAction'

const HeartIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none">
    <path d="M8 13.5S2 9.5 2 5.5a3.5 3.5 0 0 1 6-2.45A3.5 3.5 0 0 1 14 5.5C14 9.5 8 13.5 8 13.5z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const meta: Meta<typeof OverlayAction> = {
  title: 'Components/OverlayAction',
  component: OverlayAction,
  parameters: { layout: 'centered' },
  argTypes: {
    tone: { control: 'select', options: ['default', 'inverse'] },
    size: { control: 'select', options: ['xs', 'sm', 'md'] },
    state: { control: 'select', options: ['normal', 'hover', 'pressed', 'disabled', 'loading'] },
  },
}

export default meta
type Story = StoryObj<typeof OverlayAction>

export const Default: Story = {
  args: { icon: <HeartIcon />, 'aria-label': '좋아요', tone: 'default', size: 'md' },
}

export const Inverse: Story = {
  render: () => (
    <div style={{ background: '#1a1a2e', padding: '24px', borderRadius: '8px' }}>
      <OverlayAction icon={<HeartIcon />} aria-label="좋아요" tone="inverse" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <OverlayAction icon={<HeartIcon />} aria-label="xs" size="xs" />
      <OverlayAction icon={<HeartIcon />} aria-label="sm" size="sm" />
      <OverlayAction icon={<HeartIcon />} aria-label="md" size="md" />
    </div>
  ),
}

export const Loading: Story = {
  args: { icon: <HeartIcon />, 'aria-label': '로딩 중', state: 'loading' },
}
