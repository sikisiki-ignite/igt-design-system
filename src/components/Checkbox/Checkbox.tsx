import type { CheckboxProps, CheckboxValue } from '../../types/components'
import './Checkbox.css'

export function Checkbox({
  value = 'unchecked',
  size = 'md',
  disabled = false,
  readOnly = false,
  invalid = false,
  label,
  onChange,
}: CheckboxProps) {
  const isChecked = value === 'checked'
  const isIndeterminate = value === 'indeterminate'

  function handleChange() {
    if (disabled || readOnly || !onChange) return
    const next: CheckboxValue = isChecked ? 'unchecked' : 'checked'
    onChange(next)
  }

  return (
    <label
      className={[
        'igt-checkbox',
        `igt-checkbox--size-${size}`,
        isChecked && 'igt-checkbox--checked',
        isIndeterminate && 'igt-checkbox--indeterminate',
        disabled && 'igt-checkbox--disabled',
        readOnly && 'igt-checkbox--readonly',
        invalid && 'igt-checkbox--invalid',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="igt-checkbox__control" aria-hidden>
        {isChecked && (
          <svg className="igt-checkbox__check-icon" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {isIndeterminate && (
          <svg className="igt-checkbox__check-icon" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6H11" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" />
          </svg>
        )}
      </span>
      {label && <span className="igt-checkbox__label">{label}</span>}
      <input
        type="checkbox"
        className="igt-checkbox__input"
        checked={isChecked}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleChange}
        aria-checked={isIndeterminate ? 'mixed' : isChecked}
      />
    </label>
  )
}
