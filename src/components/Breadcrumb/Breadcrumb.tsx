import type { BreadcrumbProps } from '../../types/components'
import './Breadcrumb.css'

const SEPARATOR_CHAR: Record<NonNullable<BreadcrumbProps['separator']>, string> = {
  chevron: '›',
  dot: '·',
  slash: '/',
}

export function Breadcrumb({
  separator = 'chevron',
  leading = 'none',
  items,
}: BreadcrumbProps) {
  const sepChar = SEPARATOR_CHAR[separator]

  return (
    <nav className="igt-breadcrumb" aria-label="breadcrumb">
      {leading === 'home' && (
        <span className="igt-breadcrumb__home" aria-hidden="true">🏠</span>
      )}
      <ol className="igt-breadcrumb__list">
        {items.map((item, i) => (
          <li key={i} className="igt-breadcrumb__item">
            {item.href ? (
              <a className="igt-breadcrumb__link" href={item.href}>
                {item.label}
              </a>
            ) : (
              <span className="igt-breadcrumb__current" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span className="igt-breadcrumb__separator" aria-hidden="true">
                {sepChar}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
