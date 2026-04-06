import type { Meta, StoryObj } from '@storybook/react'
import { TextButton } from './TextButton'

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['plain', 'underline', 'chevron'] },
    tone: { control: 'select', options: ['accent', 'danger', 'neutral', 'neutralMuted'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    state: { control: 'select', options: ['normal', 'hover', 'pressed', 'disabled'] },
  },
}

export default meta
type Story = StoryObj<typeof TextButton>

export const Default: Story = {
  args: { children: 'Text Button', variant: 'plain', tone: 'accent', size: 'md' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <TextButton variant="plain">Plain</TextButton>
      <TextButton variant="underline">Underline</TextButton>
      <TextButton variant="chevron">Chevron</TextButton>
    </div>
  ),
}

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <TextButton tone="accent">Accent</TextButton>
      <TextButton tone="danger">Danger</TextButton>
      <TextButton tone="neutral">Neutral</TextButton>
      <TextButton tone="neutralMuted">Muted</TextButton>
    </div>
  ),
}

export const Disabled: Story = {
  args: { children: 'Disabled', state: 'disabled' },
}
