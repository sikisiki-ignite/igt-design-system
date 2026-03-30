import type { TagProps } from '../../types/components'
import './Tag.css'

export function Tag({
  size = 'md',
  color = 'grey',
  tone = 'soft',
  children,
  onRemove,
}: TagProps) {
  // Normalize size class name (xl has a description appended in the type)
  const sizeKey = size.startsWith('xl') ? 'xl' : size

  return (
    <span
      className={[
        'igt-tag',
        `igt-tag--size-${sizeKey}`,
        `igt-tag--color-${color}`,
        `igt-tag--tone-${tone}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="igt-tag__label">{children}</span>
      {onRemove && (
        <button
          className="igt-tag__remove"
          onClick={onRemove}
          aria-label="remove"
          type="button"
        >
          ✕
        </button>
      )}
    </span>
  )
}
