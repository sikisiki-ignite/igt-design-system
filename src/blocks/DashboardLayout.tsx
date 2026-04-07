import { SideNavigation } from '../components/Navigation'
import { TopNavigation } from '../components/Navigation'
import type { SideNavItem, NavSectionDef, TopNavigationProps } from '../types/components'

interface DashboardLayoutProps {
  /** 사이드바 flat 목록 (sections 없을 때) */
  navItems?: SideNavItem[]
  /** 사이드바 섹션 그룹 (navItems 대신) */
  navSections?: NavSectionDef[]
  /** TopNavigation 표시 여부 (default: true) */
  showTopNav?: boolean
  /** TopNavigation props */
  topNavProps?: Partial<TopNavigationProps>
  /** 메인 콘텐츠 */
  children: React.ReactNode
}

/**
 * 기본 대시보드 레이아웃
 *
 * 구조 (Figma 기준):
 * ┌─────────────────────────────┐
 * │  TopNavigation (56px, 전체) │
 * ├───────────┬─────────────────┤
 * │ 사이드바  │  메인 콘텐츠    │
 * │  (280px)  │  (flex: 1)      │
 * └───────────┴─────────────────┘
 */
export function DashboardLayout({
  navItems,
  navSections,
  showTopNav = true,
  topNavProps,
  children,
}: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* TopNavigation — 전체 너비, 최상단 고정 */}
      {showTopNav && (
        <div style={{ flexShrink: 0 }}>
          <TopNavigation {...topNavProps} />
        </div>
      )}

      {/* 사이드바 + 콘텐츠 */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0, overflow: 'hidden' }}>
        {/* 사이드바 컨테이너 — Figma: 280px, bg: rgba(246,247,249) */}
        <div style={{
          width: 268,
          flexShrink: 0,
          backgroundColor: 'var(--sys-background-subtle)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--spacing-32) var(--spacing-24) 0',
        }}>
          <SideNavigation
            width="100%"
            size="md"
            tone="neutral"
            items={navItems}
            sections={navSections}
          />
        </div>

        {/* 메인 콘텐츠 — 스크롤 */}
        <main style={{ flex: 1, minWidth: 0, overflow: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  )
}
