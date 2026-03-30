import type { PopoverProps } from '../../types/components'
import './Popover.css'

export function Popover({
  emphasis = 'neutral',
  open,
  placement = 'bottom',
  content,
  children,
}: PopoverProps) {
  return (
    <span className="igt-popover-wrap">
      {children}
      {open && (
        <div
          className={[
            'igt-popover',
            `igt-popover--emphasis-${emphasis}`,
            `igt-popover--placement-${placement}`,
          ]
            .filter(Boolean)
            .join(' ')}
          role="dialog"
        >
          {content}
        </div>
      )}
    </span>
  )
}
