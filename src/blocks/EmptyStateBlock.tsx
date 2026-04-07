import { Button } from '../components/Button'

type EmptyStateType = 'empty' | 'error' | 'no-results' | 'custom'

interface EmptyStateBlockProps {
  type?: EmptyStateType
  /** type="custom" 일 때 직접 지정 */
  title?: string
  description?: string
  /** 액션 버튼 */
  action?: {
    label: string
    onClick: () => void
    tone?: 'primary' | 'secondary'
  }
  /** 아이콘 또는 일러스트 */
  icon?: React.ReactNode
}

const DEFAULTS: Record<Exclude<EmptyStateType, 'custom'>, { title: string; description: string }> = {
  empty: {
    title: '데이터가 없습니다',
    description: '새 항목을 추가하여 시작하세요.',
  },
  error: {
    title: '오류가 발생했습니다',
    description: '잠시 후 다시 시도해 주세요.',
  },
  'no-results': {
    title: '검색 결과가 없습니다',
    description: '다른 검색어를 입력하거나 필터를 조정해 보세요.',
  },
}

export function EmptyStateBlock({
  type = 'empty',
  title,
  description,
  action,
  icon,
}: EmptyStateBlockProps) {
  const defaults = type !== 'custom' ? DEFAULTS[type] : { title: '', description: '' }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-48)',
      textAlign: 'center',
      gap: 'var(--spacing-12)',
    }}>
      {icon && (
        <div style={{ color: 'var(--sys-content-neutral-subtle)', marginBottom: 'var(--spacing-4)' }}>
          {icon}
        </div>
      )}

      <p style={{
        fontSize: 'var(--body-sm-semibold-fontSize)',
        fontWeight: 'var(--body-sm-semibold-fontWeight)',
        lineHeight: 'var(--body-sm-semibold-lineHeight)',
        color: 'var(--sys-content-neutral-strong)',
        margin: 0,
      }}>
        {title ?? defaults.title}
      </p>

      <p style={{
        fontSize: 'var(--label-md-regular-fontSize)',
        fontWeight: 'var(--label-md-regular-fontWeight)',
        lineHeight: 'var(--label-md-regular-lineHeight)',
        color: 'var(--sys-content-neutral-subtle)',
        margin: 0,
      }}>
        {description ?? defaults.description}
      </p>

      {action && (
        <div style={{ marginTop: 'var(--spacing-8)' }}>
          <Button
            tone={action.tone ?? 'primary'}
            variant="fill"
            size="md"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  )
}
