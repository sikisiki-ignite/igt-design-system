import type { ButtonProps } from '../../types/components'
import './Button.css'

export function Button({
  tone = 'primary',
  variant = 'fill',
  size = 'md',
  state = 'normal',
  density = 'STANDARD',
  children,
  onClick,
}: ButtonProps) {
  const isDisabled = state === 'disabled'
  const isLoading = state === 'loading'

  return (
    <button
      className={[
        'igt-button',
        `igt-button--tone-${tone}`,
        `igt-button--variant-${variant}`,
        `igt-button--size-${size}`,
        `igt-button--density-${density.toLowerCase()}`,
        isDisabled && 'igt-button--disabled',
        isLoading && 'igt-button--loading',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <span className="igt-button__spinner" aria-hidden /> : null}
      <span className="igt-button__label">{children}</span>
    </button>
  )
}
