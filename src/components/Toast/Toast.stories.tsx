import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'error'] },
    dismissible: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    type: 'info',
    message: '작업이 처리되었습니다.',
    dismissible: false,
  },
}

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '360px' }}>
      <Toast type="neutral" message="중립 메시지입니다." />
      <Toast type="info" message="정보를 안내합니다." />
      <Toast type="success" message="성공적으로 완료되었습니다." />
      <Toast type="warning" message="주의가 필요합니다." />
      <Toast type="error" message="오류가 발생했습니다." />
    </div>
  ),
}

export const Dismissible: Story = {
  args: {
    type: 'success',
    message: '저장되었습니다.',
    dismissible: true,
    onDismiss: () => {},
  },
}
