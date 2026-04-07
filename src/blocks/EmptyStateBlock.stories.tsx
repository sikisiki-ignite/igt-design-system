import type { Meta, StoryObj } from '@storybook/react'
import { EmptyStateBlock } from './EmptyStateBlock'

const meta: Meta<typeof EmptyStateBlock> = {
  title: 'Blocks/EmptyStateBlock',
  component: EmptyStateBlock,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof EmptyStateBlock>

export const Empty: Story = {
  args: {
    type: 'empty',
    action: { label: '항목 추가', onClick: () => alert('추가') },
  },
}

export const NoResults: Story = {
  args: { type: 'no-results' },
}

export const Error: Story = {
  args: {
    type: 'error',
    action: { label: '다시 시도', onClick: () => alert('재시도') },
  },
}

export const Custom: Story = {
  args: {
    type: 'custom',
    title: '권한이 없습니다',
    description: '이 페이지에 접근할 수 있는 권한이 없습니다. 관리자에게 문의하세요.',
    action: { label: '홈으로', onClick: () => alert('홈'), tone: 'secondary' },
  },
}
