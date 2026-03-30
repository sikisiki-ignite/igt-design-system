import type { StatusIndicatorProps } from '../../types/components'
import './StatusIndicator.css'

export function StatusIndicator({
  size = 'md',
  tone = 'active',
}: StatusIndicatorProps) {
  return (
    <span
      className={[
        'igt-statusindicator',
        `igt-statusindicator--size-${size}`,
        `igt-statusindicator--tone-${tone}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="igt-statusindicator__dot" aria-hidden />
    </span>
  )
}
