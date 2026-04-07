/**
 * Pattern 08 — Toast Feedback
 * 액션 성공/실패 후 Toast 알림 패턴
 * 저장, 삭제, 복사 등 CRUD 피드백에 사용
 */
import { useState, useCallback } from 'react'
import { Toast } from '../components/Toast'
import { Button } from '../components/Button'
import type { ToastProps } from '../types/components'

interface ToastState {
  type: ToastProps['type']
  message: string
}

/** Toast 상태 관리 훅 */
export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null)

  const show = useCallback((type: ToastProps['type'], message: string) => {
    setToast({ type, message })
    // 3초 후 자동 닫기
    setTimeout(() => setToast(null), 3000)
  }, [])

  const dismiss = useCallback(() => setToast(null), [])

  return { toast, show, dismiss }
}

/** Toast 표시 영역 — 앱 루트에 한 번만 배치 */
export function ToastContainer({ toast, onDismiss }: {
  toast: ToastState | null
  onDismiss: () => void
}) {
  if (!toast) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 'var(--spacing-24)',
      right: 'var(--spacing-24)',
      zIndex: 9999,
    }}>
      <Toast
        type={toast.type}
        message={toast.message}
        dismissible
        onDismiss={onDismiss}
      />
    </div>
  )
}

/** 사용 예시 */
export function ToastFeedbackExample() {
  const { toast, show, dismiss } = useToast()

  const handleSave = async () => {
    try {
      // await saveData()
      show('success', '저장되었습니다')
    } catch {
      show('error', '저장에 실패했습니다. 다시 시도해 주세요.')
    }
  }

  const handleDelete = async () => {
    try {
      // await deleteData()
      show('success', '삭제되었습니다')
    } catch {
      show('error', '삭제에 실패했습니다')
    }
  }

  return (
    <>
      <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
        <Button tone="primary" variant="fill" size="md" onClick={handleSave}>저장</Button>
        <Button tone="danger" variant="outline" size="md" onClick={handleDelete}>삭제</Button>
        <Button tone="secondary" variant="ghost" size="md" onClick={() => show('info', '클립보드에 복사되었습니다')}>복사</Button>
      </div>

      <ToastContainer toast={toast} onDismiss={dismiss} />
    </>
  )
}
