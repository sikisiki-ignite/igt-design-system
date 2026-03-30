import type { SkeletonCircleProps } from '../../types/components'
import './Skeleton.css'

export function SkeletonCircle({ size = 'md' }: SkeletonCircleProps) {
  return (
    <span
      className={[
        'igt-skeleton-circle',
        `igt-skeleton-circle--size-${size}`,
      ].join(' ')}
      aria-hidden="true"
    />
  )
}
