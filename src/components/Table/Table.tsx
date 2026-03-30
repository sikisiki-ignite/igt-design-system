import React from 'react'
import type { TableProps, TableCellStrongProps } from '../../types/components'
import { Checkbox } from '../Checkbox'
import { SkeletonRect, SkeletonText } from '../Skeleton'
import './Table.css'

// ── TableCellStrong ──────────────────────────────────────────
// Figma: Building block / body — State=strong
// overline: 12px / Regular / lh:16
// title:    14px / Semibold / lh:20

export function TableCellStrong({ overline, title }: TableCellStrongProps) {
  return (
    <div className="igt-table-cell__strong">
      <span className="igt-table-cell__overline">{overline}</span>
      <span className="igt-table-cell__title-strong">{title}</span>
    </div>
  )
}

// ── Table ────────────────────────────────────────────────────

function cellStyle<T>(col: { width?: number | string; align?: string }): React.CSSProperties {
  if (col.width !== undefined) {
    return {
      flex: '0 0 auto',
      width: typeof col.width === 'number' ? col.width : col.width,
      textAlign: col.align as React.CSSProperties['textAlign'],
    }
  }
  return {
    flex: 1,
    minWidth: 0,
    textAlign: col.align as React.CSSProperties['textAlign'],
  }
}

export function Table<T>({
  columns,
  data,
  size = 'md',
  selectable = false,
  selectedKeys,
  onSelectAll,
  onSelectRow,
  getRowKey,
  loading = false,
  empty,
  onRowClick,
}: TableProps<T>) {
  const allSelected = data.length > 0 && selectedKeys?.size === data.length
  const someSelected = (selectedKeys?.size ?? 0) > 0 && !allSelected

  return (
    <div className={`igt-table igt-table--size-${size}`} role="table">

      {/* ── 헤더 ── */}
      <div className="igt-table__head" role="row">
        {selectable && (
          <div className="igt-table__header-cell igt-table__cell--check" role="columnheader">
            <Checkbox
              size="sm"
              value={allSelected ? 'checked' : someSelected ? 'indeterminate' : 'unchecked'}
              onChange={onSelectAll}
            />
          </div>
        )}
        {columns.map(col => (
          <div
            key={col.key}
            className="igt-table__header-cell"
            style={cellStyle(col)}
            role="columnheader"
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* ── 바디 ── */}
      {loading ? (
        Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="igt-table__row igt-table__row--skeleton" role="row">
            <div className="igt-table__skeleton-inner">
              <SkeletonRect size="sm" radius="xs" />
              <div className="igt-table__skeleton-content">
                <SkeletonText size="md" />
                <SkeletonText size="sm" />
              </div>
            </div>
          </div>
        ))
      ) : data.length === 0 ? (
        <div className="igt-table__empty">
          {empty ?? '데이터가 없습니다.'}
        </div>
      ) : (
        data.map((row, rowIndex) => {
          const key = getRowKey(row)
          const isSelected = selectedKeys?.has(key) ?? false
          return (
            <div
              key={key}
              className={[
                'igt-table__row',
                isSelected && 'igt-table__row--selected',
                onRowClick && 'igt-table__row--clickable',
              ].filter(Boolean).join(' ')}
              role="row"
              onClick={() => onRowClick?.(row)}
            >
              {selectable && (
                <div
                  className="igt-table__cell igt-table__cell--check"
                  role="cell"
                  onClick={e => { e.stopPropagation(); onSelectRow?.(key) }}
                >
                  <Checkbox
                    size="sm"
                    value={isSelected ? 'checked' : 'unchecked'}
                    onChange={() => onSelectRow?.(key)}
                  />
                </div>
              )}
              {columns.map(col => (
                <div
                  key={col.key}
                  className="igt-table__cell"
                  style={cellStyle(col)}
                  role="cell"
                >
                  {col.cell(row, rowIndex)}
                </div>
              ))}
            </div>
          )
        })
      )}
    </div>
  )
}
