import type { OverlayActionProps } from '../../types/components'
import './OverlayAction.css'

export function OverlayAction({
  tone = 'default',
  size = 'md',
  state = 'normal',
  icon,
  'aria-label': ariaLabel,
  onClick,
}: OverlayActionProps) {
  const isDisabled = state === 'disabled'
  const isLoading = state === 'loading'

  return (
    <button
      className={[
        'igt-overlay-action',
        `igt-overlay-action--tone-${tone}`,
        `igt-overlay-action--size-${size}`,
        isDisabled && 'igt-overlay-action--disabled',
        isLoading && 'igt-overlay-action--loading',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="igt-overlay-action__spinner" aria-hidden />
      ) : (
        <span className="igt-overlay-action__icon" aria-hidden>
          {icon}
        </span>
      )}
    </button>
  )
}
