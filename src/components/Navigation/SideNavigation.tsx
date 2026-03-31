import type { SideNavigationProps } from '../../types/components'
import './Navigation.css'

type NavItem = SideNavigationProps['items'][number]

interface NavItemsProps {
  items: NavItem[]
  size: NonNullable<SideNavigationProps['size']>
  tone: NonNullable<SideNavigationProps['tone']>
}

function NavItems({ items, size, tone }: NavItemsProps) {
  return (
    <ul className="igt-sidenav__list">
      {items.map((item, i) => {
        const depth = item.depth ?? 1
        const isCurrent = item.state === 'current'
        const isDisabled = item.state === 'disabled'

        return (
          <li
            key={i}
            className={[
              'igt-sidenav__item',
              `igt-sidenav__item--depth-${depth}`,
              isCurrent && 'igt-sidenav__item--current',
              isDisabled && 'igt-sidenav__item--disabled',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {item.href ? (
              <a
                className="igt-sidenav__link"
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : (
              <span className="igt-sidenav__link">{item.label}</span>
            )}
            {item.children && item.children.length > 0 && (
              <ul className="igt-sidenav__sublist">
                {item.children.map((child, j) => {
                  const childDepth = child.depth ?? (depth + 1) as 1 | 2 | 3
                  const childIsCurrent = child.state === 'current'
                  const childIsDisabled = child.state === 'disabled'

                  return (
                    <li
                      key={j}
                      className={[
                        'igt-sidenav__item',
                        `igt-sidenav__item--depth-${childDepth}`,
                        childIsCurrent && 'igt-sidenav__item--current',
                        childIsDisabled && 'igt-sidenav__item--disabled',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {child.href ? (
                        <a
                          className="igt-sidenav__link"
                          href={child.href}
                          aria-current={childIsCurrent ? 'page' : undefined}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <span className="igt-sidenav__link">{child.label}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export function SideNavigation({
  size = 'md',
  tone = 'neutral',
  width,
  items,
}: SideNavigationProps) {
  return (
    <nav
      className={[
        'igt-sidenav',
        `igt-sidenav--size-${size}`,
        `igt-sidenav--tone-${tone}`,
      ].join(' ')}
      style={width !== undefined ? { width } : undefined}
    >
      <NavItems items={items} size={size} tone={tone} />
    </nav>
  )
}
