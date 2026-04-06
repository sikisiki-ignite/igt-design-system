import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'danger'] },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    type: 'info',
    title: '알림 제목',
    children: '알림 내용이 여기에 표시됩니다.',
  },
}

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '480px' }}>
      <Alert type="neutral" title="Neutral">중립적인 정보를 전달합니다.</Alert>
      <Alert type="info" title="Info">추가 정보를 안내합니다.</Alert>
      <Alert type="success" title="Success">작업이 성공적으로 완료되었습니다.</Alert>
      <Alert type="warning" title="Warning">주의가 필요한 상황입니다.</Alert>
      <Alert type="danger" title="Danger">오류가 발생했습니다.</Alert>
    </div>
  ),
}

export const Dismissible: Story = {
  args: {
    type: 'info',
    title: '닫기 가능한 알림',
    children: '오른쪽 버튼으로 닫을 수 있습니다.',
    onDismiss: () => {},
  },
}

export const WithoutTitle: Story = {
  args: {
    type: 'warning',
    children: '제목 없이 내용만 있는 알림입니다.',
  },
}
