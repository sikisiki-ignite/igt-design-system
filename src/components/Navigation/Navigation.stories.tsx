import type { Meta, StoryObj } from '@storybook/react'
import { SideNavigation } from './SideNavigation'
import { TopNavigation } from './TopNavigation'

const NAV_ITEMS = [
  { label: '대시보드', href: '#', state: 'current' as const, depth: 1 as const },
  { label: '분석', href: '#', depth: 1 as const },
  {
    label: '설정',
    depth: 1 as const,
    children: [
      { label: '프로필', href: '#', depth: 2 as const },
      { label: '알림', href: '#', depth: 2 as const },
      { label: '보안', href: '#', depth: 2 as const },
    ],
  },
  { label: '도움말', href: '#', depth: 1 as const, state: 'disabled' as const },
]

const TOP_ITEMS = [
  { label: '홈', href: '#', active: true },
  { label: '서비스', href: '#' },
  { label: '요금제', href: '#' },
  { label: '고객센터', href: '#' },
]

const meta: Meta = {
  title: 'Components/Navigation',
  parameters: { layout: 'fullscreen' },
}

export default meta

export const SideNav: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', height: '400px' }}>
      <SideNavigation items={NAV_ITEMS} />
      <div style={{ padding: '24px', flex: 1 }}>메인 콘텐츠 영역</div>
    </div>
  ),
}

export const SideNavWithSections: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', height: '400px' }}>
      <SideNavigation
        sections={[
          { label: '메인', items: NAV_ITEMS.slice(0, 2) },
          { label: '관리', items: NAV_ITEMS.slice(2) },
        ]}
      />
      <div style={{ padding: '24px', flex: 1 }}>메인 콘텐츠 영역</div>
    </div>
  ),
}

export const SideNavTones: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', height: '300px' }}>
      <SideNavigation items={NAV_ITEMS} tone="neutral" />
      <SideNavigation items={NAV_ITEMS} tone="accent" />
    </div>
  ),
}

export const TopNav: StoryObj = {
  render: () => (
    <TopNavigation items={TOP_ITEMS} isLoggedIn={false} />
  ),
}

export const TopNavLoggedIn: StoryObj = {
  render: () => (
    <TopNavigation items={TOP_ITEMS} isLoggedIn={true} hasNotification={true} />
  ),
}

// ── 기본 사용 (default props 그대로) ────────────────────────────
export const Default: StoryObj = {
  name: 'Default (기본 사용)',
  render: () => <TopNavigation />,
}

// ── 활성 메뉴 아이템 ─────────────────────────────────────────────
export const WithActiveItem: StoryObj = {
  name: 'With Active Item',
  render: () => (
    <TopNavigation
      items={[
        { label: '서비스', href: '#' },
        { label: '현황',   href: '#', active: true },
        { label: '관리',   href: '#' },
        { label: '설정',   href: '#' },
      ]}
    />
  ),
}

// ── trailing 버튼 없음 ───────────────────────────────────────────
export const NoTrailingButton: StoryObj = {
  name: 'No Trailing Button',
  render: () => (
    <TopNavigation trailingButton={undefined} />
  ),
}
