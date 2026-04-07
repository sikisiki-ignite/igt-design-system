import type { Meta, StoryObj } from '@storybook/react'
import { PageHeaderBlock } from './PageHeaderBlock'
import { Button } from '../components/Button'

const meta: Meta = {
  title: 'Blocks/PageHeaderBlock',
  parameters: { layout: 'padded' },
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <PageHeaderBlock title="사용자 관리" />
  ),
}

export const WithDescription: StoryObj = {
  render: () => (
    <PageHeaderBlock
      title="사용자 관리"
      description="시스템에 등록된 사용자를 조회하고 관리합니다."
    />
  ),
}

export const WithActions: StoryObj = {
  render: () => (
    <PageHeaderBlock
      title="사용자 관리"
      description="시스템에 등록된 사용자를 조회하고 관리합니다."
      actions={
        <>
          <Button tone="secondary" variant="outline" size="md">내보내기</Button>
          <Button tone="primary" variant="fill" size="md">사용자 추가</Button>
        </>
      }
    />
  ),
}

export const WithBreadcrumb: StoryObj = {
  render: () => (
    <PageHeaderBlock
      title="사용자 상세"
      breadcrumb={{
        items: [
          { label: '홈', href: '#' },
          { label: '사용자 관리', href: '#' },
          { label: '김민준' },
        ],
      }}
      actions={
        <Button tone="danger" variant="outline" size="md">삭제</Button>
      }
    />
  ),
}
