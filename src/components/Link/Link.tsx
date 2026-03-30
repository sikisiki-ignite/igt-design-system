import type { LinkProps } from '../../types/components'
import './Link.css'

export function Link({
  tone = 'brand',
  underline = 'auto',
  state = 'normal',
  href,
  children,
}: LinkProps) {
  const isDisabled = state === 'disabled'

  return (
    <a
      href={isDisabled ? undefined : href}
      className={[
        'igt-link',
        `igt-link--tone-${tone}`,
        `igt-link--underline-${underline}`,
        isDisabled && 'igt-link--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-disabled={isDisabled || undefined}
    >
      {children}
    </a>
  )
}
