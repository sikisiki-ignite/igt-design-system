import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Table, TableCellStrong } from './Table'
import type { TableColumnDef } from '../../types/components'

interface User {
  id: string
  name: string
  email: string
  role: string
  status: string
}

const USERS: User[] = [
  { id: '1', name: '김민준', email: 'minjun@example.com', role: '관리자', status: '활성' },
  { id: '2', name: '이서연', email: 'seoyeon@example.com', role: '편집자', status: '활성' },
  { id: '3', name: '박지호', email: 'jiho@example.com', role: '뷰어', status: '비활성' },
  { id: '4', name: '최수아', email: 'sua@example.com', role: '편집자', status: '활성' },
  { id: '5', name: '정도윤', email: 'doyun@example.com', role: '뷰어', status: '활성' },
]

const COLUMNS: TableColumnDef<User>[] = [
  {
    key: 'name',
    header: '이름',
    cell: (row) => (
      <TableCellStrong overline={row.role} title={row.name} />
    ),
  },
  { key: 'email', header: '이메일', cell: (row) => row.email },
  { key: 'status', header: '상태', align: 'center', width: 80, cell: (row) => row.status },
]

const meta: Meta = {
  title: 'Components/Table',
  parameters: { layout: 'padded' },
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <Table
      columns={COLUMNS}
      data={USERS}
      getRowKey={(row) => row.id}
    />
  ),
}

export const Selectable: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set())

    function handleSelectAll() {
      if (selected.size === USERS.length) {
        setSelected(new Set())
      } else {
        setSelected(new Set(USERS.map(u => u.id)))
      }
    }

    function handleSelectRow(key: string) {
      const next = new Set(selected)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      setSelected(next)
    }

    return (
      <Table
        columns={COLUMNS}
        data={USERS}
        getRowKey={(row) => row.id}
        selectable
        selectedKeys={selected}
        onSelectAll={handleSelectAll}
        onSelectRow={handleSelectRow}
      />
    )
  },
}

export const Loading: StoryObj = {
  render: () => (
    <Table
      columns={COLUMNS}
      data={[]}
      getRowKey={(row) => (row as User).id}
      loading
    />
  ),
}

export const Empty: StoryObj = {
  render: () => (
    <Table
      columns={COLUMNS}
      data={[]}
      getRowKey={(row) => (row as User).id}
      empty={<div style={{ padding: '32px', textAlign: 'center', color: '#999' }}>데이터가 없습니다.</div>}
    />
  ),
}

export const AllSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Table columns={COLUMNS} data={USERS.slice(0, 2)} getRowKey={r => r.id} size="sm" />
      <Table columns={COLUMNS} data={USERS.slice(0, 2)} getRowKey={r => r.id} size="md" />
      <Table columns={COLUMNS} data={USERS.slice(0, 2)} getRowKey={r => r.id} size="lg" />
    </div>
  ),
}
