import { useState } from 'react'
import { Table } from '../components/Table'
import { SearchField } from '../components/SearchField'
import { Select } from '../components/Select'
import { Pagination } from '../components/Pagination'
import { Button } from '../components/Button'
import type { TableColumnDef } from '../types/components'

interface FilterOption {
  value: string
  label: string
}

interface FilterDef {
  key: string
  placeholder: string
  options: FilterOption[]
}

interface DataTableBlockProps<T> {
  columns: TableColumnDef<T>[]
  data: T[]
  getRowKey: (row: T) => string
  /** 검색창 표시 */
  searchable?: boolean
  searchPlaceholder?: string
  onSearchChange?: (value: string) => void
  /** 드롭다운 필터 목록 */
  filters?: FilterDef[]
  onFilterChange?: (key: string, value: string) => void
  /** 우측 상단 액션 버튼 */
  actionLabel?: string
  onAction?: () => void
  /** 페이지네이션 */
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
  /** 행 선택 */
  selectable?: boolean
  selectedKeys?: Set<string>
  onSelectAll?: (value: 'checked' | 'unchecked' | 'indeterminate') => void
  onSelectRow?: (key: string) => void
  /** 행 클릭 */
  onRowClick?: (row: T) => void
  /** 로딩 */
  loading?: boolean
  /** 빈 상태 */
  empty?: React.ReactNode
  size?: 'sm' | 'md'
}

export function DataTableBlock<T>({
  columns,
  data,
  getRowKey,
  searchable = true,
  searchPlaceholder = '검색',
  onSearchChange,
  filters = [],
  onFilterChange,
  actionLabel,
  onAction,
  currentPage,
  totalPages,
  onPageChange,
  selectable = false,
  selectedKeys,
  onSelectAll,
  onSelectRow,
  onRowClick,
  loading = false,
  empty,
  size = 'md',
}: DataTableBlockProps<T>) {
  const [search, setSearch] = useState('')

  const handleSearch = (v: string) => {
    setSearch(v)
    onSearchChange?.(v)
  }

  const hasToolbar = searchable || filters.length > 0 || actionLabel
  const hasPagination = totalPages !== undefined && totalPages > 1

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
      {/* 툴바 */}
      {hasToolbar && (
        <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
          {searchable && (
            <SearchField
              size="md"
              value={search}
              placeholder={searchPlaceholder}
              onChange={handleSearch}
            />
          )}
          {filters.map((f) => (
            <Select
              key={f.key}
              type="filled"
              size="md"
              placeholder={f.placeholder}
              options={[{ value: '', label: f.placeholder }, ...f.options]}
              value=""
              onChange={(v) => onFilterChange?.(f.key, v)}
            />
          ))}
          <div style={{ flex: 1 }} />
          {actionLabel && onAction && (
            <Button tone="primary" variant="fill" size="md" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </div>
      )}

      {/* 테이블 */}
      <Table
        columns={columns}
        data={data}
        size={size}
        getRowKey={getRowKey}
        selectable={selectable}
        selectedKeys={selectedKeys}
        onSelectAll={onSelectAll}
        onSelectRow={onSelectRow}
        onRowClick={onRowClick}
        loading={loading}
        empty={empty}
      />

      {/* 페이지네이션 */}
      {hasPagination && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            variant="default"
            size="md"
            currentPage={currentPage!}
            totalPages={totalPages!}
            onChange={onPageChange!}
          />
        </div>
      )}
    </div>
  )
}
