import type { Meta, StoryObj } from '@storybook/react'
import { TabPageBlock } from './TabPageBlock'

const TABS = [
  {
    value: 'overview',
    label: '개요',
    content: (
      <div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>개요</h3>
        <p style={{ margin: 0, color: '#666' }}>개요 탭 콘텐츠입니다.</p>
      </div>
    ),
  },
  {
    value: 'detail',
    label: '상세 정보',
    content: (
      <div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>상세 정보</h3>
        <p style={{ margin: 0, color: '#666' }}>상세 정보 탭 콘텐츠입니다.</p>
      </div>
    ),
  },
  {
    value: 'history',
    label: '변경 이력',
    content: (
      <div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>변경 이력</h3>
        <p style={{ margin: 0, color: '#666' }}>변경 이력 탭 콘텐츠입니다.</p>
      </div>
    ),
  },
  {
    value: 'settings',
    label: '설정',
    content: (
      <div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>설정</h3>
        <p style={{ margin: 0, color: '#666' }}>설정 탭 콘텐츠입니다.</p>
      </div>
    ),
  },
]

const meta: Meta = {
  title: 'Blocks/TabPageBlock',
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Underline: StoryObj = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <TabPageBlock tabs={TABS} variant="underline" />
    </div>
  ),
}

export const Filled: StoryObj = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <TabPageBlock tabs={TABS} variant="filled" />
    </div>
  ),
}
