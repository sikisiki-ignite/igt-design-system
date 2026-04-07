import { useState } from 'react'
import { Dialog } from '../components/Dialog'
import { Button } from '../components/Button'

interface ConfirmDialogBlockProps {
  open: boolean
  title: string
  description: string
  confirmLabel?: string
  cancelLabel?: string
  /** danger(빨강) 또는 primary(기본) */
  danger?: boolean
  onConfirm: () => void | Promise<void>
  onClose: () => void
}

export function ConfirmDialogBlock({
  open,
  title,
  description,
  confirmLabel = '확인',
  cancelLabel = '취소',
  danger = false,
  onConfirm,
  onClose,
}: ConfirmDialogBlockProps) {
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
          {cancelLabel}
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
