import { useState } from 'react'
import { SearchField } from '../components/SearchField'
import { Select } from '../components/Select'
import { TextButton } from '../components/TextButton'
import { Tag } from '../components/Tag'

export interface FilterDef {
  key: string
  placeholder: string
  options: { value: string; label: string }[]
  tagColor?: 'grey' | 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal' | 'yellow'
}

interface FilterBarBlockProps {
  searchable?: boolean
  searchPlaceholder?: string
  filters?: FilterDef[]
  onChange?: (state: { search: string; [key: string]: string }) => void
}

export function FilterBarBlock({
  searchable = true,
  searchPlaceholder = '검색',
  filters = [],
  onChange,
}: FilterBarBlockProps) {
  const initState = () =>
    filters.reduce<{ search: string; [key: string]: string }>(
      (acc, f) => ({ ...acc, [f.key]: '' }),
      { search: '' },
    )

  const [state, setState] = useState(initState)

  const update = (key: string, value: string) => {
    const next = { ...state, [key]: value }
    setState(next)
    onChange?.(next)
  }

  const reset = () => {
    const next = initState()
    setState(next)
    onChange?.(next)
  }

  const hasActive = Object.values(state).some(Boolean)
  const activeFilters = filters.filter((f) => state[f.key])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-10)' }}>
      {/* 컨트롤 */}
      <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
        {searchable && (
          <SearchField
            size="md"
            value={state.search}
            placeholder={searchPlaceholder}
            onChange={(v) => update('search', v)}
          />
        )}
        {filters.map((f) => (
          <Select
            key={f.key}
            type="filled"
            size="md"
            placeholder={f.placeholder}
            options={[{ value: '', label: f.placeholder }, ...f.options]}
            value={state[f.key]}
            onChange={(v) => update(f.key, v)}
          />
        ))}
        {hasActive && (
          <TextButton tone="neutral" size="md" onClick={reset}>
            초기화
          </TextButton>
        )}
      </div>

      {/* 활성 필터 태그 */}
      {activeFilters.length > 0 && (
        <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
          <span style={{
            fontSize: 'var(--label-sm-regular-fontSize)',
            fontWeight: 'var(--label-sm-regular-fontWeight)',
            lineHeight: 'var(--label-sm-regular-lineHeight)',
            color: 'var(--sys-content-neutral-subtle)',
          }}>
            필터 {activeFilters.length}개 적용
          </span>
          {activeFilters.map((f) => {
            const label = f.options.find((o) => o.value === state[f.key])?.label
            return (
              <Tag key={f.key} color={f.tagColor ?? 'blue'} tone="soft" size="sm">
                {label}
              </Tag>
            )
          })}
        </div>
      )}
    </div>
  )
}
