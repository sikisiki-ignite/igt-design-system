import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Dialog } from './Dialog'
import { Button } from '../Button/Button'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm (confirm)', 'md (modal)'] },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Confirm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>확인 다이얼로그 열기</Button>
        <Dialog
          size="sm (confirm)"
          open={open}
          title="삭제하시겠습니까?"
          onClose={() => setOpen(false)}
        >
          <p>이 작업은 되돌릴 수 없습니다.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'flex-end' }}>
            <Button tone="secondary" variant="outline" onClick={() => setOpen(false)}>취소</Button>
            <Button tone="danger" onClick={() => setOpen(false)}>삭제</Button>
          </div>
        </Dialog>
      </>
    )
  },
}

export const Modal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Dialog
          size="md (modal)"
          open={open}
          title="설정"
          onClose={() => setOpen(false)}
        >
          <p>모달 내용이 여기에 표시됩니다. 더 많은 내용을 담을 수 있습니다.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'flex-end' }}>
            <Button tone="secondary" variant="outline" onClick={() => setOpen(false)}>취소</Button>
            <Button tone="primary" onClick={() => setOpen(false)}>저장</Button>
          </div>
        </Dialog>
      </>
    )
  },
}
