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
        {isChecked && <span className="igt-checkbox__check" aria-hidden />}
        {isIndeterminate && <span className="igt-checkbox__dash" aria-hidden />}
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
