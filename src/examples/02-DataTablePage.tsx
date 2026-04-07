/**
 * Pattern 02 — Data Table Page
 * SearchField + Select 필터 + Table + Pagination
 * 목록 조회 페이지 표준 패턴
 */
import { useState } from 'react'
import { SearchField } from '../components/SearchField'
import { Select } from '../components/Select'
import { Button } from '../components/Button'
import { Table } from '../components/Table'
import { Pagination } from '../components/Pagination'
import { Tag } from '../components/Tag'
import type { TableColumnDef } from '../types/components'

interface User {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive'
  role: string
}

const STATUS_OPTIONS = [
  { value: '', label: '전체 상태' },
  { value: 'active', label: '활성' },
  { value: 'inactive', label: '비활성' },
]

const COLUMNS: TableColumnDef<User>[] = [
  { key: 'name', header: '이름', cell: (row) => row.name },
  { key: 'email', header: '이메일', cell: (row) => row.email, width: 240 },
  { key: 'role', header: '역할', width: 120, cell: (row) => row.role },
  {
    key: 'status',
    header: '상태',
    width: 80,
    align: 'center',
    cell: (row) => (
      <Tag
        color={row.status === 'active' ? 'blue' : 'grey'}
        tone="soft"
        size="sm"
      >
        {row.status === 'active' ? '활성' : '비활성'}
      </Tag>
    ),
  },
]

export function DataTablePage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)
  const [selectedKeys, setSelectedKeys] = useState(new Set<string>())

  // 실제 구현에서는 API 호출
  const data: User[] = []
  const totalPages = 10

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
      {/* 필터 바 */}
      <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
        <SearchField
          size="md"
          value={search}
          placeholder="이름, 이메일 검색"
          onChange={setSearch}
        />
        <Select
          type="filled"
          size="md"
          options={STATUS_OPTIONS}
          value={status}
          onChange={setStatus}
        />
        <div style={{ flex: 1 }} />
        <Button tone="primary" variant="fill" size="md">
          사용자 추가
        </Button>
      </div>

      {/* 테이블 */}
      <Table
        columns={COLUMNS}
        data={data}
        size="md"
        getRowKey={(row) => row.id}
        selectable
        selectedKeys={selectedKeys}
        onSelectAll={(v: 'checked' | 'unchecked' | 'indeterminate') =>
          setSelectedKeys(v === 'checked' ? new Set(data.map((u) => u.id)) : new Set())
        }
        onSelectRow={(key) =>
          setSelectedKeys((prev) => {
            const next = new Set(prev)
            next.has(key) ? next.delete(key) : next.add(key)
            return next
          })
        }
        empty="등록된 사용자가 없습니다."
      />

      {/* 페이지네이션 */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          variant="default"
          size="md"
          currentPage={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  )
}
