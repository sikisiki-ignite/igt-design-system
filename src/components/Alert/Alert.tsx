import type { AlertProps } from '../../types/components'
import './Alert.css'

export function Alert({
  type = 'neutral',
  title,
  children,
  onDismiss,
}: AlertProps) {
  return (
    <div
      className={[
        'igt-alert',
        `igt-alert--type-${type}`,
      ]
        .filter(Boolean)
        .join(' ')}
      role="alert"
    >
      <span className="igt-alert__icon" aria-hidden="true" />
      <div className="igt-alert__content">
        {title && <p className="igt-alert__title">{title}</p>}
        <div className="igt-alert__body">{children}</div>
      </div>
      {onDismiss && (
        <button
          className="igt-alert__dismiss"
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
