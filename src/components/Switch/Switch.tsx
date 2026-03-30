import type { SwitchProps } from '../../types/components'
import './Switch.css'

export function Switch({
  on = false,
  size = 'md',
  state = 'normal',
  label,
  onChange,
}: SwitchProps) {
  const isDisabled = state === 'disabled'

  function handleChange() {
    if (isDisabled || !onChange) return
    onChange(!on)
  }

  return (
    <label
      className={[
        'igt-switch',
        `igt-switch--size-${size}`,
        on && 'igt-switch--on',
        isDisabled && 'igt-switch--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="igt-switch__track" aria-hidden>
        <span className="igt-switch__thumb" />
      </span>
      {label && <span className="igt-switch__label">{label}</span>}
      <input
        type="checkbox"
        className="igt-switch__input"
        checked={on}
        disabled={isDisabled}
        onChange={handleChange}
        role="switch"
        aria-checked={on}
      />
    </label>
  )
}
