/**
 * Pattern 05 — Confirm Dialog
 * 삭제/위험 액션 확인 다이얼로그 패턴
 * Dialog + Button 조합
 */
import { useState } from 'react'
import { Dialog } from '../components/Dialog'
import { Button } from '../components/Button'

interface ConfirmDialogProps {
  open: boolean
  title: string
  description: string
  confirmLabel?: string
  onConfirm: () => void | Promise<void>
  onClose: () => void
  danger?: boolean
}

/** 재사용 가능한 확인 다이얼로그 */
export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = '확인',
  onConfirm,
  onClose,
  danger = false,
}: ConfirmDialogProps) {
  const [loading, setLoading] = useState(false)

  const handleConfirm = async () => {
    setLoading(true)
    try {
      await onConfirm()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} size="sm (confirm)" title={title} onClose={onClose}>
      <p style={{
        fontSize: 'var(--body-sm-regular-fontSize)',
        fontWeight: 'var(--body-sm-regular-fontWeight)',
        lineHeight: 'var(--body-sm-regular-lineHeight)',
        color: 'var(--sys-content-neutral-default)',
        margin: '0 0 var(--spacing-24) 0',
      }}>
        {description}
      </p>

      <div style={{ display: 'flex', gap: 'var(--spacing-8)', justifyContent: 'flex-end' }}>
        <Button
          tone="secondary"
          variant="ghost"
          size="md"
          state={loading ? 'disabled' : 'normal'}
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          tone={danger ? 'danger' : 'primary'}
          variant="fill"
          size="md"
          state={loading ? 'loading' : 'normal'}
          onClick={handleConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </Dialog>
  )
}

/** 사용 예시 */
export function ConfirmDialogExample() {
  const [open, setOpen] = useState(false)

  const handleDelete = async () => {
    // API 호출
    await new Promise((r) => setTimeout(r, 1000))
    setOpen(false)
  }

  return (
    <>
      <Button tone="danger" variant="outline" size="md" onClick={() => setOpen(true)}>
        삭제
      </Button>

      <ConfirmDialog
        open={open}
        title="항목 삭제"
        description="이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
        confirmLabel="삭제"
        danger
        onConfirm={handleDelete}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
