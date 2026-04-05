import type { SideNavigationProps, SideNavItem, NavSectionDef } from '../../types/components'
import { Icon } from '../../icons/Icon'
import { IconButton } from '../IconButton'
import './Navigation.css'

interface NavItemsProps {
  items: SideNavItem[]
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
                {item.icon && (
                  <span className="igt-sidenav__link-icon" aria-hidden>
                    <Icon name={item.icon} size="sm" />
                  </span>
                )}
                {item.label}
              </a>
            ) : (
              <span className="igt-sidenav__link">
                {item.icon && (
                  <span className="igt-sidenav__link-icon" aria-hidden>
                    <Icon name={item.icon} size="sm" />
                  </span>
                )}
                {item.label}
              </span>
            )}
            {item.children && item.children.length > 0 && (
              <ul className="igt-sidenav__sublist">
                {item.children.map((child, j) => {
                  const childDepth = child.depth ?? ((depth + 1) as 1 | 2 | 3)
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
                          {child.icon && (
                            <span className="igt-sidenav__link-icon" aria-hidden>
                              <Icon name={child.icon} size="sm" />
                            </span>
                          )}
                          {child.label}
                        </a>
                      ) : (
                        <span className="igt-sidenav__link">
                          {child.icon && (
                            <span className="igt-sidenav__link-icon" aria-hidden>
                              <Icon name={child.icon} size="sm" />
                            </span>
                          )}
                          {child.label}
                        </span>
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

interface NavSectionProps {
  section: NavSectionDef
  size: NonNullable<SideNavigationProps['size']>
  tone: NonNullable<SideNavigationProps['tone']>
}

function NavSection({ section, size, tone }: NavSectionProps) {
  return (
    <div className="igt-sidenav__section">
      <div className="igt-sidenav__section-header">
        <span className="igt-sidenav__section-label">{section.label}</span>
        {section.onAdd && (
          <IconButton
            tone="neutral"
            variant="ghost"
            size="xs"
            icon={<Icon name="plus-outline-2dp" size="sm" />}
            aria-label="섹션 항목 추가"
            onClick={section.onAdd}
          />
        )}
      </div>
      <NavItems items={section.items} size={size} tone={tone} />
    </div>
  )
}

export function SideNavigation({
  size = 'md',
  tone = 'neutral',
  width,
  sections,
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
      {sections
        ? sections.map((section, i) => (
            <NavSection key={i} section={section} size={size} tone={tone} />
          ))
        : items && <NavItems items={items} size={size} tone={tone} />}
    </nav>
  )
}
