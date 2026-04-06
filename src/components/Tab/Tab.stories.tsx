import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tab } from './Tab'

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: { control: 'select', options: ['filled', 'underline'] },
    layout: { control: 'select', options: ['fixed', 'scrollable'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof Tab>

const TABS = [
  { label: '개요', value: 'overview' },
  { label: '상세', value: 'detail' },
  { label: '리뷰', value: 'review' },
  { label: '관련 상품', value: 'related' },
]

export const Underline: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return <Tab variant="underline" tabs={TABS} value={value} onChange={setValue} />
  },
}

export const Filled: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return <Tab variant="filled" tabs={TABS} value={value} onChange={setValue} />
  },
}

export const AllSizes: Story = {
  render: () => {
    const [v1, setV1] = useState('overview')
    const [v2, setV2] = useState('overview')
    const [v3, setV3] = useState('overview')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Tab size="sm" tabs={TABS} value={v1} onChange={setV1} />
        <Tab size="md" tabs={TABS} value={v2} onChange={setV2} />
        <Tab size="lg" tabs={TABS} value={v3} onChange={setV3} />
      </div>
    )
  },
}
