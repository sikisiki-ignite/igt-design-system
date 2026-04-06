import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'minimal'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return <Pagination currentPage={page} totalPages={10} onChange={setPage} />
  },
}

export const Minimal: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return <Pagination variant="minimal" currentPage={page} totalPages={10} onChange={setPage} />
  },
}

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(5)
    return <Pagination currentPage={page} totalPages={20} onChange={setPage} />
  },
}

export const Sizes: Story = {
  render: () => {
    const [p1, setP1] = useState(3)
    const [p2, setP2] = useState(3)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Pagination size="sm" currentPage={p1} totalPages={10} onChange={setP1} />
        <Pagination size="md" currentPage={p2} totalPages={10} onChange={setP2} />
      </div>
    )
  },
}
