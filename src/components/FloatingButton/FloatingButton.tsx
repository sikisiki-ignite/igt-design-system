import type { FloatingButtonProps } from '../../types/components'
import './FloatingButton.css'

export function FloatingButton({
  layout = 'standard',
  priority = 'brand',
  size = 'md',
  state = 'normal',
  icon,
  label,
  onClick,
}: FloatingButtonProps) {
  const isDisabled = state === 'disabled'
  const isLoading = state === 'loading'

  return (
    <button
      className={[
        'igt-floatingbutton',
        `igt-floatingbutton--layout-${layout}`,
        `igt-floatingbutton--priority-${priority}`,
        `igt-floatingbutton--size-${size}`,
        isDisabled && 'igt-floatingbutton--disabled',
        isLoading && 'igt-floatingbutton--loading',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="igt-floatingbutton__spinner" aria-hidden />
      ) : (
        <span className="igt-floatingbutton__icon" aria-hidden>
          {icon}
        </span>
      )}
      {layout === 'extended' && label && (
        <span className="igt-floatingbutton__label">{label}</span>
      )}
    </button>
  )
}
