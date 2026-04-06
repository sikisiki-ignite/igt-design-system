import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Popover } from './Popover'
import { Button } from '../Button/Button'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  argTypes: {
    emphasis: { control: 'select', options: ['neutral', 'subtle'] },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right', 'none'] },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Popover
        open={open}
        content={
          <div style={{ padding: '8px' }}>
            <p>팝오버 내용입니다.</p>
            <Button size="sm" onClick={() => setOpen(false)}>닫기</Button>
          </div>
        }
      >
        <Button onClick={() => setOpen(!open)}>팝오버 열기</Button>
      </Popover>
    )
  },
}

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', padding: '64px' }}>
      <Popover open placement="top" content={<div style={{ padding: '8px' }}>Top</div>}><Button>Top</Button></Popover>
      <Popover open placement="bottom" content={<div style={{ padding: '8px' }}>Bottom</div>}><Button>Bottom</Button></Popover>
      <Popover open placement="left" content={<div style={{ padding: '8px' }}>Left</div>}><Button>Left</Button></Popover>
      <Popover open placement="right" content={<div style={{ padding: '8px' }}>Right</div>}><Button>Right</Button></Popover>
    </div>
  ),
}
