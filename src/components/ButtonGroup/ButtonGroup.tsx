import type { ButtonGroupProps } from '../../types/components'
import './ButtonGroup.css'

export function ButtonGroup({
  layout = 'inline',
  distribution = 'content',
  size = 'md',
  children,
}: ButtonGroupProps) {
  return (
    <div
      className={[
        'igt-buttongroup',
        `igt-buttongroup--layout-${layout}`,
        `igt-buttongroup--distribution-${distribution}`,
        `igt-buttongroup--size-${size}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
