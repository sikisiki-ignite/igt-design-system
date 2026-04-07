/**
 * Pattern 07 — Empty State
 * 데이터 없음 / 에러 / 검색 결과 없음 상태 UI
 * 빈 목록, 오류 화면에 사용
 */
import { Button } from '../components/Button'

interface EmptyStateProps {
  type?: 'empty' | 'error' | 'no-results'
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({
  type = 'empty',
  title,
  description,
  action,
}: EmptyStateProps) {
  const defaults = {
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
  }[type]

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
          <Button tone="primary" variant="fill" size="md" onClick={action.onClick}>
            {action.label}
          </Button>
        </div>
      )}
    </div>
  )
}

/** 사용 예시 */
export function EmptyStateExamples() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
      {/* 빈 목록 */}
      <EmptyState
        type="empty"
        action={{ label: '사용자 추가', onClick: () => {} }}
      />

      {/* 검색 결과 없음 */}
      <EmptyState type="no-results" />

      {/* 에러 */}
      <EmptyState
        type="error"
        action={{ label: '다시 시도', onClick: () => {} }}
      />
    </div>
  )
}
