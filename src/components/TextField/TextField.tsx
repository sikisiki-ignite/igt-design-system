import type { TextFieldProps } from '../../types/components'
import './TextField.css'

export function TextField({
  variant = 'fill',
  size = 'md',
  state = 'normal',
  density = 'STANDARD',
  value,
  placeholder,
  label,
  helperText,
  invalid = false,
  onChange,
}: TextFieldProps) {
  const isDisabled = state === 'disabled'
  const isReadOnly = state === 'readOnly'
  const densityKey = density === 'COMPACT' ? 'compact' : 'standard'

  return (
    <div
      className={[
        'igt-textfield',
        `igt-textfield--variant-${variant}`,
        `igt-textfield--size-${size}`,
        `igt-textfield--density-${densityKey}`,
        invalid && 'igt-textfield--invalid',
        isDisabled && 'igt-textfield--disabled',
        isReadOnly && 'igt-textfield--readonly',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <label className="igt-textfield__label">{label}</label>
      )}
      <div className="igt-textfield__input-wrap">
        <input
          className="igt-textfield__input"
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          onChange={e => onChange?.(e.target.value)}
        />
      </div>
      {helperText && (
        <span className="igt-textfield__helper">{helperText}</span>
      )}
    </div>
  )
}
