import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NumberStepper } from './NumberStepper'

const meta: Meta<typeof NumberStepper> = {
  title: 'Components/NumberStepper',
  component: NumberStepper,
  parameters: { layout: 'centered' },
  argTypes: {
    emphasis: { control: 'select', options: ['fill', 'outline'] },
    size: { control: 'select', options: ['xs', 'sm', 'md'] },
  },
}

export default meta
type Story = StoryObj<typeof NumberStepper>

export const Default: Story = {
  render: () => {
    const [v, setV] = useState(1)
    return <NumberStepper value={v} onChange={setV} />
  },
}

export const WithMinMax: Story = {
  render: () => {
    const [v, setV] = useState(5)
    return <NumberStepper value={v} min={1} max={10} onChange={setV} />
  },
}

export const AllEmphasis: Story = {
  render: () => {
    const [v1, setV1] = useState(3)
    const [v2, setV2] = useState(3)
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <NumberStepper emphasis="fill" value={v1} onChange={setV1} />
        <NumberStepper emphasis="outline" value={v2} onChange={setV2} />
      </div>
    )
  },
}

export const AllSizes: Story = {
  render: () => {
    const [v1, setV1] = useState(1)
    const [v2, setV2] = useState(1)
    const [v3, setV3] = useState(1)
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <NumberStepper size="xs" value={v1} onChange={setV1} />
        <NumberStepper size="sm" value={v2} onChange={setV2} />
        <NumberStepper size="md" value={v3} onChange={setV3} />
      </div>
    )
  },
}
