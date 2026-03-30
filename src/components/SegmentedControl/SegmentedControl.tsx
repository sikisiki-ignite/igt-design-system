import type { SegmentedControlProps } from '../../types/components'
import './SegmentedControl.css'

export function SegmentedControl({
  size = 'md',
  content = 'text',
  value,
  segments,
  onChange,
}: SegmentedControlProps) {
  return (
    <div
      className={[
        'igt-segmentedcontrol',
        `igt-segmentedcontrol--size-${size}`,
        `igt-segmentedcontrol--content-${content}`,
      ].join(' ')}
      role="radiogroup"
    >
      {segments.map((seg) => (
        <button
          key={seg.value}
          className={[
            'igt-segmentedcontrol__segment',
            seg.value === value && 'igt-segmentedcontrol__segment--selected',
          ]
            .filter(Boolean)
            .join(' ')}
          role="radio"
          aria-checked={seg.value === value}
          onClick={() => onChange(seg.value)}
        >
          {(content === 'icon' || content === 'iconText') && seg.icon && (
            <span className="igt-segmentedcontrol__icon" aria-hidden>
              {seg.icon}
            </span>
          )}
          {(content === 'text' || content === 'iconText') && (
            <span className="igt-segmentedcontrol__label">{seg.label}</span>
          )}
        </button>
      ))}
    </div>
  )
}
