import type { BadgeProps } from '../../types/components'
import './Badge.css'

export function Badge({
  kind = 'dot',
  tone = 'accent',
  count,
}: BadgeProps) {
  const displayCount = kind === 'count'
    ? (count !== undefined && count > 99 ? '99+' : count)
    : null

  return (
    <span
      className={[
        'igt-badge',
        `igt-badge--kind-${kind}`,
        `igt-badge--tone-${tone}`,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={kind === 'count' && count !== undefined ? String(count) : undefined}
    >
      {displayCount}
    </span>
  )
}
