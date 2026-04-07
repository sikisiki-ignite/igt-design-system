import { Button } from '../components/Button'

interface FormBlockProps {
  /** 폼 필드들 */
  children: React.ReactNode
  /** 제출 버튼 레이블 (default: '저장') */
  submitLabel?: string
  /** 취소 버튼 레이블 (default: '취소', false면 숨김) */
  cancelLabel?: string | false
  /** 제출 버튼 tone */
  submitTone?: 'primary' | 'danger'
  /** 로딩 상태 */
  loading?: boolean
  /** 폼 최대 너비 */
  maxWidth?: number
  onSubmit?: () => void
  onCancel?: () => void
}

export function FormBlock({
  children,
  submitLabel = '저장',
  cancelLabel = '취소',
  submitTone = 'primary',
  loading = false,
  maxWidth = 640,
  onSubmit,
  onCancel,
}: FormBlockProps) {
  return (
    <div style={{ maxWidth }}>
      {/* 필드 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
        {children}
      </div>

      {/* 액션 버튼 */}
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-8)',
        justifyContent: 'flex-end',
        marginTop: 'var(--spacing-32)',
        paddingTop: 'var(--spacing-20)',
        borderTop: 'var(--borderWidth-1) solid var(--sys-border-neutral-subtle)',
      }}>
        {cancelLabel !== false && (
          <Button
            tone="secondary"
            variant="ghost"
            size="md"
            state={loading ? 'disabled' : 'normal'}
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>
        )}
        <Button
          tone={submitTone}
          variant="fill"
          size="md"
          state={loading ? 'loading' : 'normal'}
          onClick={onSubmit}
        >
          {submitLabel}
        </Button>
      </div>
    </div>
  )
}
