import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DataTableBlock } from './DataTableBlock'
import { Tag } from '../components/Tag'
import type { TableColumn } from '../types/components'

interface User {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const USERS: User[] = [
  { id: '1', name: '김민준', email: 'minjun@example.com', role: '관리자', status: 'active' },
  { id: '2', name: '이서연', email: 'seoyeon@example.com', role: '편집자', status: 'active' },
  { id: '3', name: '박지후', email: 'jihoo@example.com', role: '뷰어', status: 'inactive' },
  { id: '4', name: '최유나', email: 'yuna@example.com', role: '편집자', status: 'active' },
  { id: '5', name: '정하린', email: 'harin@example.com', role: '뷰어', status: 'active' },
]

const COLUMNS: TableColumn<User>[] = [
  { key: 'name', header: '이름', cell: (row) => row.name },
  { key: 'email', header: '이메일', cell: (row) => row.email, width: 220 },
  { key: 'role', header: '역할', width: 100, cell: (row) => row.role },
  {
    key: 'status',
    header: '상태',
    width: 80,
    align: 'center',
    cell: (row) => (
      <Tag color={row.status === 'active' ? 'blue' : 'grey'} tone="soft" size="sm">
        {row.status === 'active' ? '활성' : '비활성'}
      </Tag>
    ),
  },
]

const FILTERS = [
  {
    key: 'status',
    placeholder: '전체 상태',
    options: [
      { value: 'active', label: '활성' },
      { value: 'inactive', label: '비활성' },
    ],
  },
]

const meta: Meta = {
  title: 'Blocks/DataTableBlock',
  parameters: { layout: 'padded' },
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <DataTableBlock
      columns={COLUMNS}
      data={USERS}
      getRowKey={(row) => row.id}
    />
  ),
}

export const WithFilters: StoryObj = {
  render: () => (
    <DataTableBlock
      columns={COLUMNS}
      data={USERS}
      getRowKey={(row) => row.id}
      filters={FILTERS}
      actionLabel="사용자 추가"
      onAction={() => alert('추가')}
    />
  ),
}

export const WithPagination: StoryObj = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <DataTableBlock
        columns={COLUMNS}
        data={USERS}
        getRowKey={(row) => row.id}
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
      />
    )
  },
}

export const Selectable: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState(new Set<string>())
    return (
      <DataTableBlock
        columns={COLUMNS}
        data={USERS}
        getRowKey={(row) => row.id}
        selectable
        selectedKeys={selected}
        onSelectAll={(v) =>
          setSelected(v === 'checked' ? new Set(USERS.map((u) => u.id)) : new Set())
        }
        onSelectRow={(key) =>
          setSelected((prev) => {
            const next = new Set(prev)
            next.has(key) ? next.delete(key) : next.add(key)
            return next
          })
        }
      />
    )
  },
}

export const Loading: StoryObj = {
  render: () => (
    <DataTableBlock
      columns={COLUMNS}
      data={[]}
      getRowKey={(row) => (row as User).id}
      loading
    />
  ),
}

export const Empty: StoryObj = {
  render: () => (
    <DataTableBlock
      columns={COLUMNS}
      data={[]}
      getRowKey={(row) => (row as User).id}
      empty="등록된 사용자가 없습니다."
    />
  ),
}
