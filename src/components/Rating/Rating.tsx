import type { RatingProps, RatingValue } from '../../types/components'
import './Rating.css'

const STARS = [1, 2, 3, 4, 5] as const

export function Rating({
  size = 'md',
  value = 0,
  disabled = false,
  onChange,
}: RatingProps) {
  return (
    <div
      className={[
        'igt-rating',
        `igt-rating--size-${size}`,
        disabled && 'igt-rating--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
      role="radiogroup"
    >
      {STARS.map((star) => (
        <button
          key={star}
          type="button"
          className={[
            'igt-rating__star',
            star <= value && 'igt-rating__star--filled',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => {
            if (!disabled && onChange) {
              onChange(star as RatingValue)
            }
          }}
          disabled={disabled}
          aria-label={`${star}점`}
          aria-pressed={star <= value}
        >
          ★
        </button>
      ))}
    </div>
  )
}
