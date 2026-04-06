import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SegmentedControl } from './SegmentedControl'

const GridIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const ListIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none">
    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const SEGMENTS = [
  { label: '그리드', value: 'grid' },
  { label: '리스트', value: 'list' },
  { label: '카드', value: 'card' },
]

const ICON_SEGMENTS = [
  { label: '그리드', value: 'grid', icon: <GridIcon /> },
  { label: '리스트', value: 'list', icon: <ListIcon /> },
]

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md'] },
    content: { control: 'select', options: ['text', 'icon', 'iconText'] },
  },
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

export const Text: Story = {
  render: () => {
    const [v, setV] = useState('grid')
    return <SegmentedControl segments={SEGMENTS} value={v} onChange={setV} content="text" />
  },
}

export const IconOnly: Story = {
  render: () => {
    const [v, setV] = useState('grid')
    return <SegmentedControl segments={ICON_SEGMENTS} value={v} onChange={setV} content="icon" />
  },
}

export const IconText: Story = {
  render: () => {
    const [v, setV] = useState('grid')
    return <SegmentedControl segments={ICON_SEGMENTS} value={v} onChange={setV} content="iconText" />
  },
}

export const AllSizes: Story = {
  render: () => {
    const [v1, setV1] = useState('grid')
    const [v2, setV2] = useState('grid')
    const [v3, setV3] = useState('grid')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <SegmentedControl segments={SEGMENTS} value={v1} onChange={setV1} size="xs" />
        <SegmentedControl segments={SEGMENTS} value={v2} onChange={setV2} size="sm" />
        <SegmentedControl segments={SEGMENTS} value={v3} onChange={setV3} size="md" />
      </div>
    )
  },
}
