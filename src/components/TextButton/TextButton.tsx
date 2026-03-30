import type { TextButtonProps } from '../../types/components'
import './TextButton.css'

export function TextButton({
  variant = 'plain',
  tone = 'accent',
  size = 'md',
  state = 'normal',
  children,
  onClick,
}: TextButtonProps) {
  const isDisabled = state === 'disabled'

  return (
    <button
      className={[
        'igt-textbutton',
        `igt-textbutton--variant-${variant}`,
        `igt-textbutton--tone-${tone}`,
        `igt-textbutton--size-${size}`,
        isDisabled && 'igt-textbutton--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled}
      onClick={onClick}
    >
      <span className="igt-textbutton__label">{children}</span>
      {variant === 'chevron' && (
        <span className="igt-textbutton__chevron" aria-hidden>›</span>
      )}
    </button>
  )
}
