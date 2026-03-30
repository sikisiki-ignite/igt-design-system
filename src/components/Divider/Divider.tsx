import type { DividerProps } from '../../types/components'
import './Divider.css'

export function Divider({
  direction = 'horizontal',
  emphasis = 'default',
}: DividerProps) {
  return (
    <hr
      className={[
        'igt-divider',
        `igt-divider--${direction}`,
        `igt-divider--${emphasis}`,
      ]
        .filter(Boolean)
        .join(' ')}
      role="separator"
    />
  )
}
