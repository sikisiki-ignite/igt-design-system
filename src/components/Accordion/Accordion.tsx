import { useState } from 'react'
import type { AccordionItemProps } from '../../types/components'
import './Accordion.css'

export function Accordion({
  type = 'contained',
  size = 'md',
  state = 'collapsed',
  title,
  children,
}: AccordionItemProps) {
  const [expanded, setExpanded] = useState(state === 'expanded')
  const isDisabled = state === 'disabled'

  const handleToggle = () => {
    if (!isDisabled) {
      setExpanded((prev) => !prev)
    }
  }

  return (
    <div
      className={[
        'igt-accordion',
        `igt-accordion--type-${type}`,
        `igt-accordion--size-${size}`,
        expanded && 'igt-accordion--expanded',
        isDisabled && 'igt-accordion--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        className="igt-accordion__trigger"
        onClick={handleToggle}
        disabled={isDisabled}
        aria-expanded={expanded}
      >
        <span className="igt-accordion__title">{title}</span>
        <span className="igt-accordion__icon" aria-hidden="true">
          {expanded ? '▲' : '▼'}
        </span>
      </button>
      {expanded && (
        <div className="igt-accordion__content">{children}</div>
      )}
    </div>
  )
}
