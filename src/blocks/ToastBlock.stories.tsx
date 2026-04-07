import type { Meta, StoryObj } from '@storybook/react'
import { ToastBlock, useToastBlock } from './ToastBlock'
import { Button } from '../components/Button'

const meta: Meta = {
  title: 'Blocks/ToastBlock',
  parameters: { layout: 'centered' },
}

export default meta

export const AllTypes: StoryObj = {
  render: () => {
    const { toast, showToast, dismissToast } = useToastBlock()
    return (
      <>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button tone="primary" variant="fill" size="md" onClick={() => showToast('success', '저장되었습니다')}>
            Success
          </Button>
          <Button tone="secondary" variant="outline" size="md" onClick={() => showToast('error', '오류가 발생했습니다')}>
            Error
          </Button>
          <Button tone="secondary" variant="outline" size="md" onClick={() => showToast('warning', '주의가 필요합니다')}>
            Warning
          </Button>
          <Button tone="secondary" variant="outline" size="md" onClick={() => showToast('info', '정보를 확인하세요')}>
            Info
          </Button>
          <Button tone="secondary" variant="ghost" size="md" onClick={() => showToast('neutral', '완료되었습니다')}>
            Neutral
          </Button>
        </div>
        <ToastBlock toast={toast} onDismiss={dismissToast} />
      </>
    )
  },
}

export const Positions: StoryObj = {
  render: () => {
    const br = useToastBlock()
    const bl = useToastBlock()
    const tr = useToastBlock()
    return (
      <>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button tone="primary" variant="fill" size="sm" onClick={() => br.showToast('success', 'bottom-right')}>bottom-right</Button>
          <Button tone="primary" variant="outline" size="sm" onClick={() => bl.showToast('info', 'bottom-left')}>bottom-left</Button>
          <Button tone="secondary" variant="fill" size="sm" onClick={() => tr.showToast('warning', 'top-right')}>top-right</Button>
        </div>
        <ToastBlock toast={br.toast} onDismiss={br.dismissToast} position="bottom-right" />
        <ToastBlock toast={bl.toast} onDismiss={bl.dismissToast} position="bottom-left" />
        <ToastBlock toast={tr.toast} onDismiss={tr.dismissToast} position="top-right" />
      </>
    )
  },
}
