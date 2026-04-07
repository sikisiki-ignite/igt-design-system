import { useState } from 'react'
import { Tab } from '../components/Tab'

interface TabDef {
  value: string
  label: string
  content: React.ReactNode
}

interface TabPageBlockProps {
  tabs: TabDef[]
  defaultTab?: string
  variant?: 'underline' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  /** 탭 하단 콘텐츠 영역 padding */
  contentPadding?: string
  /** 외부에서 탭 제어 */
  value?: string
  onChange?: (value: string) => void
}

export function TabPageBlock({
  tabs,
  defaultTab,
  variant = 'underline',
  size = 'md',
  contentPadding = 'var(--spacing-24)',
  value: controlledValue,
  onChange,
}: TabPageBlockProps) {
  const [internalValue, setInternalValue] = useState(defaultTab ?? tabs[0]?.value ?? '')
  const isControlled = controlledValue !== undefined
  const activeTab = isControlled ? controlledValue : internalValue

  const handleChange = (v: string) => {
    if (!isControlled) setInternalValue(v)
    onChange?.(v)
  }

  const activeContent = tabs.find((t) => t.value === activeTab)?.content

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* 탭 헤더 */}
      <div style={{ flexShrink: 0, borderBottom: 'var(--borderWidth-1) solid var(--sys-border-neutral-subtle)' }}>
        <Tab
          variant={variant}
          layout="scrollable"
          size={size}
          value={activeTab}
          tabs={tabs.map(({ value, label }) => ({ value, label }))}
          onChange={handleChange}
        />
      </div>

      {/* 탭 콘텐츠 */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: contentPadding }}>
        {activeContent}
      </div>
    </div>
  )
}
