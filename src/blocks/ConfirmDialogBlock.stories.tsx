import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ConfirmDialogBlock } from './ConfirmDialogBlock'
import { Button } from '../components/Button'

const meta: Meta = {
  title: 'Blocks/ConfirmDialogBlock',
  parameters: { layout: 'centered' },
}

export default meta

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button tone="primary" variant="fill" size="md" onClick={() => setOpen(true)}>
          다이얼로그 열기
        </Button>
        <ConfirmDialogBlock
          open={open}
          title="변경 사항 저장"
          description="변경된 내용을 저장하시겠습니까?"
          confirmLabel="저장"
          onConfirm={async () => {
            await new Promise((r) => setTimeout(r, 1000))
            setOpen(false)
          }}
          onClose={() => setOpen(false)}
        />
      </>
    )
  },
}

export const Danger: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button tone="danger" variant="outline" size="md" onClick={() => setOpen(true)}>
          삭제 다이얼로그
        </Button>
        <ConfirmDialogBlock
          open={open}
          title="항목 삭제"
          description="이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
          confirmLabel="삭제"
          danger
          onConfirm={async () => {
            await new Promise((r) => setTimeout(r, 1000))
            setOpen(false)
          }}
          onClose={() => setOpen(false)}
        />
      </>
    )
  },
}
