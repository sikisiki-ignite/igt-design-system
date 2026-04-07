/**
 * Pattern 01 — Page Layout
 * SideNavigation + 상단 헤더 + 스크롤 콘텐츠 영역
 * PC 전용 기본 레이아웃 (1280px+)
 */
import { useState } from 'react'
import { SideNavigation } from '../components/Navigation'
import type { SideNavItem } from '../types/components'

const NAV_ITEMS: SideNavItem[] = [
  { label: '대시보드', href: '/', icon: 'home', state: 'current' },
  { label: '사용자 관리', href: '/users', icon: 'person' },
  { label: '설정', href: '/settings', icon: 'settings' },
]

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* 사이드바 */}
      <SideNavigation
        width={240}
        size="md"
        tone="neutral"
        items={NAV_ITEMS}
      />

      {/* 메인 영역 */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        {/* 상단 헤더 */}
        <header style={{
          flexShrink: 0,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          padding: '0 var(--spacing-24)',
          borderBottom: 'var(--borderWidth-1) solid var(--sys-border-neutral-subtle)',
          backgroundColor: 'var(--sys-surface-default)',
        }}>
          <span style={{
            fontSize: 'var(--body-sm-semibold-fontSize)',
            fontWeight: 'var(--body-sm-semibold-fontWeight)',
            lineHeight: 'var(--body-sm-semibold-lineHeight)',
            color: 'var(--sys-content-neutral-strong)',
          }}>
            페이지 제목
          </span>
        </header>

        {/* 스크롤 콘텐츠 (단 하나의 overflow: auto) */}
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: 'var(--spacing-24)' }}>
          {children}
        </div>
      </main>
    </div>
  )
}
