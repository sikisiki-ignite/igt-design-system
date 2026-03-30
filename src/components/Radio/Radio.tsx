import type { RadioProps } from '../../types/components'
import './Radio.css'

export function Radio({
  selected = false,
  size = 'md',
  disabled = false,
  readOnly = false,
  invalid = false,
  label,
  onChange,
}: RadioProps) {
  function handleChange() {
    if (disabled || readOnly || !onChange) return
    onChange(true)
  }

  return (
    <label
      className={[
        'igt-radio',
        `igt-radio--size-${size}`,
        selected && 'igt-radio--selected',
        disabled && 'igt-radio--disabled',
        readOnly && 'igt-radio--readonly',
        invalid && 'igt-radio--invalid',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="igt-radio__control" aria-hidden>
        {selected && <span className="igt-radio__dot" aria-hidden />}
      </span>
      {label && <span className="igt-radio__label">{label}</span>}
      <input
        type="radio"
        className="igt-radio__input"
        checked={selected}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleChange}
      />
    </label>
  )
}
