import type { Meta, StoryObj } from '@storybook/react'
import { DashboardLayout } from './DashboardLayout'

const NAV_ITEMS = [
  { label: '대시보드', href: '#', state: 'current' as const, depth: 1 as const },
  { label: '사용자 관리', href: '#', depth: 1 as const },
  { label: '콘텐츠', href: '#', depth: 1 as const },
  { label: '설정', href: '#', depth: 1 as const },
]

const NAV_SECTIONS = [
  {
    label: '관리',
    items: [
      { label: '대시보드', href: '#', state: 'current' as const, depth: 1 as const },
      { label: '사용자', href: '#', depth: 1 as const },
    ],
  },
  {
    label: '시스템',
    items: [
      { label: '설정', href: '#', depth: 1 as const },
      { label: '로그', href: '#', depth: 1 as const },
    ],
  },
]

const meta: Meta<typeof DashboardLayout> = {
  title: 'Blocks/DashboardLayout',
  component: DashboardLayout,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof DashboardLayout>

export const Default: Story = {
  render: () => (
    <DashboardLayout
      navItems={NAV_ITEMS}
      topNavProps={{ isLoggedIn: true, hasNotification: true }}
    >
      <div style={{ padding: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>페이지 콘텐츠</h2>
        <p style={{ color: '#666' }}>DashboardLayout 내부 콘텐츠 영역입니다.</p>
      </div>
    </DashboardLayout>
  ),
}

export const WithSections: Story = {
  render: () => (
    <DashboardLayout
      navSections={NAV_SECTIONS}
      topNavProps={{ isLoggedIn: true }}
    >
      <div style={{ padding: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>섹션 네비게이션</h2>
      </div>
    </DashboardLayout>
  ),
}

export const WithoutTopNav: Story = {
  render: () => (
    <DashboardLayout navItems={NAV_ITEMS} showTopNav={false}>
      <div style={{ padding: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>TopNav 없는 레이아웃</h2>
      </div>
    </DashboardLayout>
  ),
}

export const LoggedOut: Story = {
  render: () => (
    <DashboardLayout
      navItems={NAV_ITEMS}
      topNavProps={{ isLoggedIn: false }}
    >
      <div style={{ padding: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>비로그인 상태</h2>
      </div>
    </DashboardLayout>
  ),
}
