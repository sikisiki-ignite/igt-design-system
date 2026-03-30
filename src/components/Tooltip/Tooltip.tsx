import type { TooltipProps } from '../../types/components'
import './Tooltip.css'

export function Tooltip({
  density = 'compact',
  emphasis = 'neutral',
  placement = 'top',
  arrow = false,
  content,
  children,
}: TooltipProps) {
  return (
    <span className="igt-tooltip-wrap">
      {children}
      <span
        className={[
          'igt-tooltip',
          `igt-tooltip--density-${density}`,
          `igt-tooltip--emphasis-${emphasis}`,
          `igt-tooltip--placement-${placement}`,
        ]
          .filter(Boolean)
          .join(' ')}
        role="tooltip"
      >
        {content}
        {arrow && <span className="igt-tooltip__arrow" aria-hidden="true" />}
      </span>
    </span>
  )
}
