import type { NumberStepperProps } from '../../types/components'
import './NumberStepper.css'

export function NumberStepper({
  emphasis = 'fill',
  size = 'md',
  value,
  min = -Infinity,
  max = Infinity,
  onChange,
}: NumberStepperProps) {
  function decrement() {
    if (value > min) onChange(value - 1)
  }

  function increment() {
    if (value < max) onChange(value + 1)
  }

  return (
    <div
      className={[
        'igt-numberstepper',
        `igt-numberstepper--emphasis-${emphasis}`,
        `igt-numberstepper--size-${size}`,
      ].join(' ')}
    >
      <button
        type="button"
        className="igt-numberstepper__decrement"
        onClick={decrement}
        disabled={value <= min}
        aria-label="감소"
      >
        −
      </button>
      <span className="igt-numberstepper__value">{value}</span>
      <button
        type="button"
        className="igt-numberstepper__increment"
        onClick={increment}
        disabled={value >= max}
        aria-label="증가"
      >
        +
      </button>
    </div>
  )
}
