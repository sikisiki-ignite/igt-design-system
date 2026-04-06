import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md'] },
    value: { control: 'select', options: [0, 1, 2, 3, 4, 5] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: { value: 3, size: 'md' },
}

export const AllValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Rating value={4} size="xs" />
      <Rating value={4} size="sm" />
      <Rating value={4} size="md" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { value: 3, disabled: true },
}
