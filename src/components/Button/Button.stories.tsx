import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
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
    children: 'Button TEST',
    tone: 'primary',
    variant: 'fill',
    size: 'md',
    state: 'normal',
    density: 'STANDARD',
  },
}

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button tone="primary">Primary</Button>
      <Button tone="secondary">Secondary</Button>
      <Button tone="danger">Danger</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="fill">Fill</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button state="normal">Normal</Button>
      <Button state="disabled">Disabled</Button>
      <Button state="loading">Loading</Button>
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button density="STANDARD">Standard</Button>
      <Button density="COMPACT">Compact</Button>
    </div>
  ),
}
