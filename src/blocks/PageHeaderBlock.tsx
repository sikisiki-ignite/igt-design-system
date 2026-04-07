import { Breadcrumb } from '../components/Breadcrumb'
import type { BreadcrumbProps } from '../types/components'

interface PageHeaderBlockProps {
  /** 페이지 타이틀 */
  title: string
  /** 서브타이틀 */
  description?: string
  /** 브레드크럼 */
  breadcrumb?: BreadcrumbProps
  /** 우측 액션 영역 */
  actions?: React.ReactNode
}

export function PageHeaderBlock({ title, description, breadcrumb, actions }: PageHeaderBlockProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-8)',
      paddingBottom: 'var(--spacing-20)',
      borderBottom: 'var(--borderWidth-1) solid var(--sys-border-neutral-subtle)',
      marginBottom: 'var(--spacing-20)',
    }}>
      {breadcrumb && (
        <Breadcrumb {...breadcrumb} />
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-16)' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{
            fontSize: 'var(--heading-md-bold-fontSize)',
            fontWeight: 'var(--heading-md-bold-fontWeight)',
            lineHeight: 'var(--heading-md-bold-lineHeight)',
            color: 'var(--sys-content-neutral-strong)',
            margin: 0,
          }}>
            {title}
          </h1>
          {description && (
            <p style={{
              fontSize: 'var(--label-md-regular-fontSize)',
              fontWeight: 'var(--label-md-regular-fontWeight)',
              lineHeight: 'var(--label-md-regular-lineHeight)',
              color: 'var(--sys-content-neutral-subtle)',
              margin: 'var(--spacing-4) 0 0 0',
            }}>
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center', flexShrink: 0 }}>
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}
