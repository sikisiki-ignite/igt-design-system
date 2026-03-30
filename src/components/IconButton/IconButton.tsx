import type { IconButtonProps } from '../../types/components'
import './IconButton.css'

export function IconButton({
  tone = 'neutral',
  variant = 'ghost',
  size = 'md',
  state = 'normal',
  density = 'STANDARD',
  icon,
  'aria-label': ariaLabel,
  onClick,
}: IconButtonProps) {
  const isDisabled = state === 'disabled'
  const isLoading = state === 'loading'

  return (
    <button
      className={[
        'igt-iconbutton',
        `igt-iconbutton--tone-${tone}`,
        `igt-iconbutton--variant-${variant}`,
        `igt-iconbutton--size-${size}`,
        `igt-iconbutton--density-${density.toLowerCase()}`,
        isDisabled && 'igt-iconbutton--disabled',
        isLoading && 'igt-iconbutton--loading',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="igt-iconbutton__spinner" aria-hidden />
      ) : (
        <span className="igt-iconbutton__icon" aria-hidden>
          {icon}
        </span>
      )}
    </button>
  )
}
