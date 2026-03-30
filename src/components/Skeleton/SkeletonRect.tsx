import type { SkeletonRectProps } from '../../types/components'
import './Skeleton.css'

export function SkeletonRect({
  size = 'md',
  radius = 'sm',
}: SkeletonRectProps) {
  return (
    <span
      className={[
        'igt-skeleton-rect',
        `igt-skeleton-rect--size-${size}`,
        `igt-skeleton-rect--radius-${radius}`,
      ].join(' ')}
      aria-hidden="true"
    />
  )
}
