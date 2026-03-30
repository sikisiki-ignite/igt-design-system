import type { SelectChipProps } from '../../types/components'
import './SelectChip.css'

export function SelectChip({
  selected = false,
  variant = 'fill',
  size = 'md',
  disabled = false,
  children,
  onClick,
}: SelectChipProps) {
  return (
    <button
      className={[
        'igt-selectchip',
        `igt-selectchip--size-${size}`,
        `igt-selectchip--variant-${variant}`,
        selected && 'igt-selectchip--selected',
        disabled && 'igt-selectchip--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
    >
      {selected && <span className="igt-selectchip__check" aria-hidden>✓ </span>}
      {children}
    </button>
  )
}
