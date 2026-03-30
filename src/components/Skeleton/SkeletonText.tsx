import type { SkeletonTextProps } from '../../types/components'
import './Skeleton.css'

export function SkeletonText({ size = 'md' }: SkeletonTextProps) {
  return (
    <span
      className={[
        'igt-skeleton-text',
        `igt-skeleton-text--size-${size}`,
      ].join(' ')}
      aria-hidden="true"
    />
  )
}
