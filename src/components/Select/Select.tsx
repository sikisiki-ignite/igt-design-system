import type { SelectProps } from '../../types/components'
import './Select.css'

export function Select({
  type = 'filled',
  size = 'md',
  state = 'default',
  value,
  placeholder,
  options,
  onChange,
}: SelectProps) {
  const isDisabled = state === 'disabled'

  return (
    <div
      className={[
        'igt-select',
        `igt-select--type-${type}`,
        `igt-select--size-${size}`,
        isDisabled && 'igt-select--disabled',
        state === 'error' && 'igt-select--error',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <select
        className="igt-select__native"
        value={value}
        disabled={isDisabled}
        onChange={e => onChange?.(e.target.value)}
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <span className="igt-select__arrow" aria-hidden>
        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}
