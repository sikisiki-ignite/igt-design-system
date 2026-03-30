import type { TabProps } from '../../types/components'
import './Tab.css'

export function Tab({
  variant = 'underline',
  layout = 'fixed',
  size = 'md',
  value,
  tabs,
  onChange,
}: TabProps) {
  return (
    <div
      className={[
        'igt-tab',
        `igt-tab--variant-${variant}`,
        `igt-tab--size-${size}`,
        `igt-tab--layout-${layout}`,
      ].join(' ')}
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={[
            'igt-tab__item',
            tab.value === value && 'igt-tab__item--active',
          ]
            .filter(Boolean)
            .join(' ')}
          role="tab"
          aria-selected={tab.value === value}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
