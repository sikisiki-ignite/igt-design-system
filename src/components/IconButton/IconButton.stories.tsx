import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const PlusIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: { layout: 'centered' },
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'subtle'] },
    variant: { control: 'select', options: ['fill', 'outline', 'ghost'] },
    size: { control: 'select', options: ['xs', 'sm', 'md'] },
    state: { control: 'select', options: ['normal', 'hover', 'pressed', 'disabled', 'loading'] },
    density: { control: 'select', options: ['STANDARD', 'COMPACT'] },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    icon: <PlusIcon />,
    'aria-label': '추가',
    tone: 'neutral',
    variant: 'ghost',
    size: 'md',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <IconButton icon={<PlusIcon />} aria-label="fill" variant="fill" />
      <IconButton icon={<PlusIcon />} aria-label="outline" variant="outline" />
      <IconButton icon={<PlusIcon />} aria-label="ghost" variant="ghost" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <IconButton icon={<PlusIcon />} aria-label="xs" size="xs" />
      <IconButton icon={<PlusIcon />} aria-label="sm" size="sm" />
      <IconButton icon={<PlusIcon />} aria-label="md" size="md" />
    </div>
  ),
}

export const Loading: Story = {
  args: { icon: <PlusIcon />, 'aria-label': '로딩 중', state: 'loading' },
}

export const Disabled: Story = {
  args: { icon: <PlusIcon />, 'aria-label': '비활성', state: 'disabled' },
}
