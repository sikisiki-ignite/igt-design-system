import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    tone: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'primaryInverse'],
    },
    variant: {
      control: 'select',
      options: ['fill', 'soft', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    state: {
      control: 'select',
      options: ['normal', 'hover', 'pressed', 'disabled', 'loading'],
    },
    density: {
      control: 'select',
      options: ['STANDARD', 'COMPACT'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    tone: 'primary',
    variant: 'fill',
    size: 'md',
    state: 'normal',
    children: '버튼',
  },
}

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button tone="primary" variant="fill">Primary</Button>
      <Button tone="secondary" variant="soft">Secondary</Button>
      <Button tone="danger" variant="fill">Danger</Button>
      <Button tone="primaryInverse" variant="soft">Inverse</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button tone="primary" variant="fill">Fill</Button>
      <Button tone="primary" variant="soft">Soft</Button>
      <Button tone="primary" variant="outline">Outline</Button>
      <Button tone="primary" variant="ghost">Ghost</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const Loading: Story = {
  args: {
    tone: 'primary',
    variant: 'fill',
    size: 'md',
    state: 'loading',
    children: '저장 중...',
  },
}

export const Disabled: Story = {
  args: {
    tone: 'primary',
    variant: 'fill',
    size: 'md',
    state: 'disabled',
    children: '비활성화',
  },
}
