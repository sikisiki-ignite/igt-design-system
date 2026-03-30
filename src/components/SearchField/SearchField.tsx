import type { SearchFieldProps } from '../../types/components'
import './SearchField.css'

export function SearchField({
  size = 'md',
  state = 'normal',
  density = 'STANDARD',
  value,
  placeholder,
  onChange,
  onClear,
}: SearchFieldProps) {
  const isDisabled = state === 'disabled'
  const densityKey = density === 'COMPACT' ? 'compact' : 'standard'

  return (
    <div
      className={[
        'igt-searchfield',
        `igt-searchfield--size-${size}`,
        `igt-searchfield--density-${densityKey}`,
        isDisabled && 'igt-searchfield--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="igt-searchfield__icon" aria-hidden>
        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <input
        className="igt-searchfield__input"
        type="search"
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={e => onChange?.(e.target.value)}
      />
      {value && !isDisabled && (
        <button
          className="igt-searchfield__clear"
          type="button"
          aria-label="clear"
          onClick={onClear}
        >
          <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 4.5L11.5 11.5M4.5 11.5L11.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
