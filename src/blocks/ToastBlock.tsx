import { useState, useCallback } from 'react'
import { Toast } from '../components/Toast'
import type { ToastProps } from '../types/components'

interface ToastState {
  type: ToastProps['type']
  message: string
}

/**
 * Toast 상태 관리 훅
 *
 * @example
 * const { toast, showToast, dismissToast } = useToastBlock()
 * showToast('success', '저장되었습니다')
 */
export function useToastBlock(autoDismissMs = 3000) {
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = useCallback((type: ToastProps['type'], message: string) => {
    setToast({ type, message })
    if (autoDismissMs > 0) {
      setTimeout(() => setToast(null), autoDismissMs)
    }
  }, [autoDismissMs])

  const dismissToast = useCallback(() => setToast(null), [])

  return { toast, showToast, dismissToast }
}

interface ToastBlockProps {
  toast: ToastState | null
  onDismiss: () => void
  /** 화면 위치 (default: bottom-right) */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}

/** 앱 루트에 한 번만 배치 */
export function ToastBlock({ toast, onDismiss, position = 'bottom-right' }: ToastBlockProps) {
  if (!toast) return null

  const posStyle: React.CSSProperties = {
    'bottom-right': { bottom: 'var(--spacing-24)', right: 'var(--spacing-24)' },
    'bottom-left': { bottom: 'var(--spacing-24)', left: 'var(--spacing-24)' },
    'top-right': { top: 'var(--spacing-24)', right: 'var(--spacing-24)' },
    'top-left': { top: 'var(--spacing-24)', left: 'var(--spacing-24)' },
  }[position]

  return (
    <div style={{ position: 'fixed', zIndex: 9999, ...posStyle }}>
      <Toast
        type={toast.type}
        message={toast.message}
        dismissible
        onDismiss={onDismiss}
      />
    </div>
  )
}
