import type { AvatarProps } from '../../types/components'
import './Avatar.css'

export function Avatar({
  size = 'md',
  shape = 'circle',
  src,
  alt = '',
  fallback,
}: AvatarProps) {
  return (
    <span
      className={[
        'igt-avatar',
        `igt-avatar--size-${size}`,
        `igt-avatar--shape-${shape}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {src ? (
        <img className="igt-avatar__img" src={src} alt={alt} />
      ) : (
        <span className="igt-avatar__fallback" aria-hidden={!fallback}>
          {fallback ? fallback.slice(0, 2).toUpperCase() : '?'}
        </span>
      )}
    </span>
  )
}
