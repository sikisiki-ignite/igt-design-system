/**
 * Pattern 09 — Filter Bar
 * SearchField + 다중 Select 필터 + 초기화 버튼
 * 목록 상단 필터 영역 표준 패턴
 */
import { useState } from 'react'
import { SearchField } from '../components/SearchField'
import { Select } from '../components/Select'
import { TextButton } from '../components/TextButton'
import { Tag } from '../components/Tag'

const STATUS_OPTIONS = [
  { value: '', label: '전체 상태' },
  { value: 'active', label: '활성' },
  { value: 'inactive', label: '비활성' },
]

const ROLE_OPTIONS = [
  { value: '', label: '전체 역할' },
  { value: 'admin', label: '관리자' },
  { value: 'editor', label: '편집자' },
  { value: 'viewer', label: '뷰어' },
]

interface Filters {
  search: string
  status: string
  role: string
}

const DEFAULT_FILTERS: Filters = { search: '', status: '', role: '' }

export function FilterBar({ onChange }: { onChange?: (filters: Filters) => void }) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)

  const update = (key: keyof Filters) => (value: string) => {
    const next = { ...filters, [key]: value }
    setFilters(next)
    onChange?.(next)
  }

  const reset = () => {
    setFilters(DEFAULT_FILTERS)
    onChange?.(DEFAULT_FILTERS)
  }

  const hasFilters = Object.values(filters).some(Boolean)
  const activeCount = Object.values(filters).filter(Boolean).length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      {/* 필터 컨트롤 */}
      <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
        <SearchField
          size="md"
          value={filters.search}
          placeholder="검색"
          onChange={update('search')}
        />
        <Select
          type="filled"
          size="md"
          options={STATUS_OPTIONS}
          value={filters.status}
          onChange={update('status')}
        />
        <Select
          type="filled"
          size="md"
          options={ROLE_OPTIONS}
          value={filters.role}
          onChange={update('role')}
        />
        {hasFilters && (
          <TextButton tone="neutral" size="md" onClick={reset}>
            초기화
          </TextButton>
        )}
      </div>

      {/* 활성 필터 태그 */}
      {hasFilters && (
        <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
          <span style={{
            fontSize: 'var(--label-sm-regular-fontSize)',
            fontWeight: 'var(--label-sm-regular-fontWeight)',
            lineHeight: 'var(--label-sm-regular-lineHeight)',
            color: 'var(--sys-content-neutral-subtle)',
          }}>
            필터 {activeCount}개 적용됨
          </span>
          {filters.status && (
            <Tag color="blue" tone="soft" size="sm">
              {STATUS_OPTIONS.find((o) => o.value === filters.status)?.label}
            </Tag>
          )}
          {filters.role && (
            <Tag color="purple" tone="soft" size="sm">
              {ROLE_OPTIONS.find((o) => o.value === filters.role)?.label}
            </Tag>
          )}
        </div>
      )}
    </div>
  )
}
