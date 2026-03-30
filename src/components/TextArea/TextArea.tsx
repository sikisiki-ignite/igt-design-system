import type { TextAreaProps } from '../../types/components'
import './TextArea.css'

export function TextArea({
  variant = 'fill',
  size = 'md',
  state = 'normal',
  value,
  placeholder,
  label,
  helperText,
  invalid = false,
  onChange,
}: TextAreaProps) {
  const isDisabled = state === 'disabled'
  const isReadOnly = state === 'readOnly'

  return (
    <div
      className={[
        'igt-textarea',
        `igt-textarea--variant-${variant}`,
        `igt-textarea--size-${size}`,
        invalid && 'igt-textarea--invalid',
        isDisabled && 'igt-textarea--disabled',
        isReadOnly && 'igt-textarea--readonly',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <label className="igt-textarea__label">{label}</label>
      )}
      <div className="igt-textarea__input-wrap">
        <textarea
          className="igt-textarea__input"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          onChange={e => onChange?.(e.target.value)}
        />
      </div>
      {helperText && (
        <span className="igt-textarea__helper">{helperText}</span>
      )}
    </div>
  )
}
