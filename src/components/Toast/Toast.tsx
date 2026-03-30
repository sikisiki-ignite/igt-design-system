import type { ToastProps } from '../../types/components'
import './Toast.css'

export function Toast({
  type = 'neutral',
  dismissible = false,
  message,
  onDismiss,
}: ToastProps) {
  return (
    <div
      className={[
        'igt-toast',
        `igt-toast--type-${type}`,
      ]
        .filter(Boolean)
        .join(' ')}
      role="alert"
    >
      <span className="igt-toast__icon" aria-hidden="true" />
      <span className="igt-toast__message">{message}</span>
      {dismissible && (
        <button
          className="igt-toast__dismiss"
          onClick={onDismiss}
          aria-label="닫기"
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  )
}
