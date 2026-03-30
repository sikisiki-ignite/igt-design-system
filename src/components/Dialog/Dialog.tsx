import type { DialogProps } from '../../types/components'
import './Dialog.css'

export function Dialog({
  size = 'sm (confirm)',
  open,
  title,
  children,
  onClose,
}: DialogProps) {
  if (!open) return null

  const sizeKey = size === 'sm (confirm)' ? 'sm' : 'md'

  return (
    <div
      className="igt-dialog__overlay"
      onClick={onClose}
    >
      <div
        className={[
          'igt-dialog',
          `igt-dialog--size-${sizeKey}`,
        ]
          .filter(Boolean)
          .join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'igt-dialog-title' : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="igt-dialog__header">
          {title && (
            <h2 className="igt-dialog__title" id="igt-dialog-title">
              {title}
            </h2>
          )}
          <button
            className="igt-dialog__close"
            onClick={onClose}
            aria-label="닫기"
            type="button"
          >
            ✕
          </button>
        </div>
        <div className="igt-dialog__body">{children}</div>
      </div>
    </div>
  )
}
