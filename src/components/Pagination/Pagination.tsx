import type { PaginationProps } from '../../types/components'
import './Pagination.css'

function getPageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | '...')[] = []

  if (current <= 4) {
    pages.push(1, 2, 3, 4, 5, '...', total)
  } else if (current >= total - 3) {
    pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
  } else {
    pages.push(1, '...', current - 1, current, current + 1, '...', total)
  }

  return pages
}

export function Pagination({
  variant = 'default',
  size = 'md',
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  const pages = getPageNumbers(currentPage, totalPages)

  return (
    <nav
      className={[
        'igt-pagination',
        `igt-pagination--size-${size}`,
        `igt-pagination--variant-${variant}`,
      ].join(' ')}
      aria-label="pagination"
    >
      <button
        className="igt-pagination__prev"
        disabled={currentPage <= 1}
        onClick={() => onChange(currentPage - 1)}
        aria-label="Previous page"
      >
        ‹
      </button>

      {variant === 'default' &&
        pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="igt-pagination__ellipsis">
              …
            </span>
          ) : (
            <button
              key={p}
              className={[
                'igt-pagination__page',
                p === currentPage && 'igt-pagination__page--active',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onChange(p as number)}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </button>
          )
        )}

      {variant === 'minimal' && (
        <span className="igt-pagination__info">
          {currentPage} / {totalPages}
        </span>
      )}

      <button
        className="igt-pagination__next"
        disabled={currentPage >= totalPages}
        onClick={() => onChange(currentPage + 1)}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  )
}
