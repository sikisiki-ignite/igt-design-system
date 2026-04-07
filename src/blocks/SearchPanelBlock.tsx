import { useState } from 'react'
import { Select } from '../components/Select'
import { TextField } from '../components/TextField'
import { SelectChip } from '../components/Chip'
import { Tag } from '../components/Tag'
import { Radio } from '../components/Radio'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'

// ─── Types ────────────────────────────────────────────────────

export interface SearchPanelOption {
  value: string
  label: string
}

export type SearchPanelFieldType =
  | 'text'
  | 'select'
  | 'multi-select'
  | 'toggle-group'
  | 'radio-group'
  | 'date-range'
  | 'search-combo'

export interface SearchPanelField {
  key: string
  label: string
  type: SearchPanelFieldType
  placeholder?: string
  /** select / multi-select / toggle-group / radio-group 에서 사용 */
  options?: SearchPanelOption[]
  /** search-combo 전용: 좌측 Select 옵션 */
  typeOptions?: SearchPanelOption[]
  /** half(기본): 행의 절반 점유 / full: 행 전체 점유 */
  span?: 'half' | 'full'
}

export interface SearchPanelBlockProps {
  fields: SearchPanelField[]
  onSearch: (values: Record<string, string | string[]>) => void
  onReset?: () => void
  searchLabel?: string
  resetLabel?: string
  loading?: boolean
  defaultValues?: Record<string, string | string[]>
}

// ─── Row 구조 계산 ────────────────────────────────────────────

type Row =
  | { kind: 'full'; field: SearchPanelField }
  | { kind: 'pair'; left: SearchPanelField; right?: SearchPanelField }

function buildRows(fields: SearchPanelField[]): Row[] {
  const rows: Row[] = []
  let i = 0
  while (i < fields.length) {
    const f = fields[i]
    if (f.span === 'full') {
      rows.push({ kind: 'full', field: f })
      i++
    } else {
      const next = fields[i + 1]
      if (next && next.span !== 'full') {
        rows.push({ kind: 'pair', left: f, right: next })
        i += 2
      } else {
        rows.push({ kind: 'pair', left: f })
        i++
      }
    }
  }
  return rows
}

// ─── 초기값 생성 ──────────────────────────────────────────────

function buildInitValues(
  fields: SearchPanelField[],
  defaultValues?: Record<string, string | string[]>,
): Record<string, string | string[]> {
  const init: Record<string, string | string[]> = {}
  fields.forEach((f) => {
    if (f.type === 'multi-select') {
      init[f.key] = (defaultValues?.[f.key] as string[]) ?? []
    } else if (f.type === 'date-range') {
      init[`${f.key}_start`] = (defaultValues?.[`${f.key}_start`] as string) ?? ''
      init[`${f.key}_end`] = (defaultValues?.[`${f.key}_end`] as string) ?? ''
    } else if (f.type === 'search-combo') {
      init[f.key] = (defaultValues?.[f.key] as string) ?? ''
      init[`${f.key}_type`] =
        (defaultValues?.[`${f.key}_type`] as string) ?? (f.typeOptions?.[0]?.value ?? '')
    } else {
      init[f.key] = (defaultValues?.[f.key] as string) ?? ''
    }
  })
  return init
}

// ─── 컨트롤 렌더 ──────────────────────────────────────────────

interface ControlProps {
  field: SearchPanelField
  values: Record<string, string | string[]>
  update: (key: string, val: string | string[]) => void
  disabled: boolean
}

function FieldControl({ field, values, update, disabled }: ControlProps) {
  const { key, type, placeholder, options = [], typeOptions = [] } = field

  switch (type) {
    case 'text':
      return (
        <TextField
          variant="fill"
          size="md"
          value={values[key] as string}
          placeholder={placeholder}
          state={disabled ? 'disabled' : 'normal'}
          onChange={(v) => update(key, v)}
        />
      )

    case 'select':
      return (
        <Select
          type="filled"
          size="md"
          value={values[key] as string}
          placeholder={placeholder ?? '선택'}
          options={options}
          state={disabled ? 'disabled' : 'default'}
          onChange={(v) => update(key, v)}
        />
      )

    case 'multi-select': {
      const selected = values[key] as string[]
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          <Select
            type="filled"
            size="md"
            value=""
            placeholder={placeholder ?? '선택'}
            options={options.filter((o) => !selected.includes(o.value))}
            state={disabled ? 'disabled' : 'default'}
            onChange={(v) => {
              if (v && !selected.includes(v)) {
                update(key, [...selected, v])
              }
            }}
          />
          {selected.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)' }}>
              {selected.map((val) => {
                const label = options.find((o) => o.value === val)?.label ?? val
                return (
                  <Tag
                    key={val}
                    size="sm"
                    color="grey"
                    tone="soft"
                    onRemove={
                      disabled
                        ? undefined
                        : () => update(key, selected.filter((s) => s !== val))
                    }
                  >
                    {label}
                  </Tag>
                )
              })}
            </div>
          )}
        </div>
      )
    }

    case 'toggle-group':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)' }}>
          {options.map((opt) => (
            <SelectChip
              key={opt.value}
              size="md"
              selected={values[key] === opt.value}
              disabled={disabled}
              onClick={() =>
                update(key, values[key] === opt.value ? '' : opt.value)
              }
            >
              {opt.label}
            </SelectChip>
          ))}
        </div>
      )

    case 'radio-group':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)' }}>
          {options.map((opt) => (
            <Radio
              key={opt.value}
              size="md"
              label={opt.label}
              selected={values[key] === opt.value}
              disabled={disabled}
              onChange={() => update(key, opt.value)}
            />
          ))}
        </div>
      )

    case 'date-range':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <TextField
            variant="fill"
            size="md"
            value={values[`${key}_start`] as string}
            placeholder="YYYY-MM-DD"
            state={disabled ? 'disabled' : 'normal'}
            onChange={(v) => update(`${key}_start`, v)}
          />
          <span
            style={{
              flexShrink: 0,
              color: 'var(--sys-content-neutral-muted)',
              fontSize: 'var(--label-md-regular-fontSize)',
              fontWeight: 'var(--label-md-regular-fontWeight)',
              lineHeight: 'var(--label-md-regular-lineHeight)',
            }}
          >
            ~
          </span>
          <TextField
            variant="fill"
            size="md"
            value={values[`${key}_end`] as string}
            placeholder="YYYY-MM-DD"
            state={disabled ? 'disabled' : 'normal'}
            onChange={(v) => update(`${key}_end`, v)}
          />
        </div>
      )

    case 'search-combo':
      return (
        <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
          <div style={{ flexShrink: 0, width: 140 }}>
            <Select
              type="filled"
              size="md"
              value={values[`${key}_type`] as string}
              options={typeOptions}
              state={disabled ? 'disabled' : 'default'}
              onChange={(v) => update(`${key}_type`, v)}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <TextField
              variant="fill"
              size="md"
              value={values[key] as string}
              placeholder={placeholder}
              state={disabled ? 'disabled' : 'normal'}
              onChange={(v) => update(key, v)}
            />
          </div>
        </div>
      )

    default:
      return null
  }
}

// ─── Label ────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="igt-search-panel__label"
      style={{
        display: 'flex',
        alignItems: 'center',
        minWidth: 120,
        paddingTop: 'var(--spacing-10)',
        fontSize: 'var(--label-md-medium-fontSize)',
        fontWeight: 'var(--label-md-medium-fontWeight)',
        lineHeight: 'var(--label-md-medium-lineHeight)',
        color: 'var(--sys-content-neutral-default)',
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  )
}

// ─── SearchPanelBlock ─────────────────────────────────────────

export function SearchPanelBlock({
  fields,
  onSearch,
  onReset,
  searchLabel = 'Search',
  resetLabel = 'Reset',
  loading = false,
  defaultValues,
}: SearchPanelBlockProps) {
  const [values, setValues] = useState<Record<string, string | string[]>>(() =>
    buildInitValues(fields, defaultValues),
  )

  const update = (key: string, val: string | string[]) => {
    setValues((prev) => ({ ...prev, [key]: val }))
  }

  const handleSearch = () => {
    if (!loading) onSearch(values)
  }

  const handleReset = () => {
    const fresh = buildInitValues(fields)
    setValues(fresh)
    onReset?.()
  }

  const rows = buildRows(fields)
  const disabled = loading

  return (
    <div
      className="igt-search-panel"
      style={{
        background: 'var(--sys-background-subtle)',
        border: 'var(--borderWidth-1) solid var(--sys-border-neutral-default)',
        borderRadius: 'var(--radius-8)',
        padding: 'var(--spacing-24)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-16)',
      }}
      // Enter 키 이벤트를 컨테이너에서 캐치 (TextField 내부 input에서 버블링)
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleSearch()
      }}
    >
      {/* 필드 그리드 */}
      <div
        className="igt-search-panel__grid"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}
      >
        {rows.map((row, idx) => {
          if (row.kind === 'full') {
            return (
              <div
                key={idx}
                className="igt-search-panel__row igt-search-panel__row--full"
                style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'flex-start' }}
              >
                <FieldLabel>{row.field.label}</FieldLabel>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <FieldControl
                    field={row.field}
                    values={values}
                    update={update}
                    disabled={disabled}
                  />
                </div>
              </div>
            )
          }

          // pair row
          return (
            <div
              key={idx}
              className="igt-search-panel__row"
              style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'flex-start' }}
            >
              {/* 왼쪽 */}
              <FieldLabel>{row.left.label}</FieldLabel>
              <div style={{ flex: 1, minWidth: 0 }}>
                <FieldControl
                  field={row.left}
                  values={values}
                  update={update}
                  disabled={disabled}
                />
              </div>

              {/* 오른쪽 (없으면 빈 공간) */}
              {row.right ? (
                <>
                  <FieldLabel>{row.right.label}</FieldLabel>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <FieldControl
                      field={row.right}
                      values={values}
                      update={update}
                      disabled={disabled}
                    />
                  </div>
                </>
              ) : (
                /* 오른쪽 절반 빈 공간 유지 */
                <div style={{ flex: 2, minWidth: 0 }} aria-hidden />
              )}
            </div>
          )
        })}
      </div>

      {/* 구분선 + 버튼 행 */}
      <Divider direction="horizontal" emphasis="weak" />
      <div
        className="igt-search-panel__actions"
        style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-8)' }}
      >
        <Button
          tone="secondary"
          variant="outline"
          size="md"
          state={disabled ? 'disabled' : 'normal'}
          onClick={handleReset}
        >
          {resetLabel}
        </Button>
        <Button
          tone="primary"
          variant="fill"
          size="md"
          state={loading ? 'loading' : 'normal'}
          onClick={handleSearch}
        >
          {searchLabel}
        </Button>
      </div>
    </div>
  )
}
