import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from '../Button/Button'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  argTypes: {
    density: { control: 'select', options: ['compact', 'rich'] },
    emphasis: { control: 'select', options: ['neutral', 'subtle', 'accent'] },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right', 'none'] },
    arrow: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: '툴팁 내용',
    density: 'compact',
    emphasis: 'neutral',
    placement: 'top',
    children: <Button>호버해 보세요</Button>,
  },
}

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', padding: '48px' }}>
      <Tooltip content="Top" placement="top"><Button>Top</Button></Tooltip>
      <Tooltip content="Bottom" placement="bottom"><Button>Bottom</Button></Tooltip>
      <Tooltip content="Left" placement="left"><Button>Left</Button></Tooltip>
      <Tooltip content="Right" placement="right"><Button>Right</Button></Tooltip>
    </div>
  ),
}

export const AllEmphasis: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip content="Neutral" emphasis="neutral"><Button>Neutral</Button></Tooltip>
      <Tooltip content="Subtle" emphasis="subtle"><Button>Subtle</Button></Tooltip>
      <Tooltip content="Accent" emphasis="accent"><Button>Accent</Button></Tooltip>
    </div>
  ),
}

export const WithArrow: Story = {
  args: {
    content: '화살표 있는 툴팁',
    arrow: true,
    placement: 'top',
    children: <Button>Arrow</Button>,
  },
}
