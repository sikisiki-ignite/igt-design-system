/**
 * Pattern 06 — Tab Page
 * Tab + 콘텐츠 패널 전환 패턴
 * 상세 페이지 내 섹션 전환에 사용
 */
import { useState } from 'react'
import { Tab } from '../components/Tab'

const TABS = [
  { value: 'overview', label: '개요' },
  { value: 'detail', label: '상세 정보' },
  { value: 'history', label: '변경 이력' },
  { value: 'settings', label: '설정' },
]

export function TabPage() {
  const [tab, setTab] = useState('overview')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* 탭 헤더 (고정) */}
      <div style={{ flexShrink: 0, borderBottom: 'var(--borderWidth-1) solid var(--sys-border-neutral-subtle)' }}>
        <Tab
          variant="underline"
          layout="scrollable"
          size="md"
          value={tab}
          tabs={TABS}
          onChange={setTab}
        />
      </div>

      {/* 탭 콘텐츠 (스크롤) */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: 'var(--spacing-24)' }}>
        {tab === 'overview' && <OverviewPanel />}
        {tab === 'detail' && <DetailPanel />}
        {tab === 'history' && <HistoryPanel />}
        {tab === 'settings' && <SettingsPanel />}
      </div>
    </div>
  )
}

function OverviewPanel() {
  return <div>개요 콘텐츠</div>
}

function DetailPanel() {
  return <div>상세 정보 콘텐츠</div>
}

function HistoryPanel() {
  return <div>변경 이력 콘텐츠</div>
}

function SettingsPanel() {
  return <div>설정 콘텐츠</div>
}
