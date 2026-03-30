import type { ActionChipProps } from '../../types/components'
import './ActionChip.css'

export function ActionChip({
  size = 'md',
  disabled = false,
  selected = false,
  children,
  onClick,
}: ActionChipProps) {
  return (
    <button
      className={[
        'igt-actionchip',
        `igt-actionchip--size-${size}`,
        selected && 'igt-actionchip--selected',
        disabled && 'igt-actionchip--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
    >
      {children}
    </button>
  )
}
