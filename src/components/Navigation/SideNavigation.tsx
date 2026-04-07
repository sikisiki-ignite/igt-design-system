import { useState } from 'react'
import type { SideNavigationProps, SideNavItem, NavSectionDef } from '../../types/components'
import { Icon } from '../../icons/Icon'
import { IconButton } from '../IconButton'
import './Navigation.css'

function hasCurrentDescendant(item: SideNavItem): boolean {
  return (item.children ?? []).some(
    c => c.state === 'current' || hasCurrentDescendant(c)
  )
}

interface NavItemRowProps {
  item: SideNavItem
  depth: 1 | 2 | 3
  size: NonNullable<SideNavigationProps['size']>
  tone: NonNullable<SideNavigationProps['tone']>
}

function NavItemRow({ item, depth, size, tone }: NavItemRowProps) {
  const hasChildren = (item.children ?? []).length > 0
  const isCurrent = item.state === 'current'
  const isDisabled = item.state === 'disabled'
  const isCurrentParent = hasChildren && hasCurrentDescendant(item)

  const [expanded, setExpanded] = useState(() => isCurrentParent)

  const handleToggle = () => {
    // 자식이 current인 경우 닫기 불가
    if (expanded && isCurrentParent) return
    setExpanded(prev => !prev)
  }

  const innerContent = (
    <>
      {item.icon && (
        <span className="igt-sidenav__link-icon" aria-hidden>
          <Icon name={item.icon} size="sm" />
        </span>
      )}
      <span className="igt-sidenav__link-label">{item.label}</span>
      {hasChildren && (
        <span
          className={[
            'igt-sidenav__chevron',
            expanded && 'igt-sidenav__chevron--expanded',
          ].filter(Boolean).join(' ')}
          aria-hidden
        >
          <Icon name="navigation-arrow-right" size="sm" />
        </span>
      )}
    </>
  )

  return (
    <li
      className={[
        'igt-sidenav__item',
        `igt-sidenav__item--depth-${depth}`,
        isCurrent && 'igt-sidenav__item--current',
        isDisabled && 'igt-sidenav__item--disabled',
        isCurrentParent && 'igt-sidenav__item--current-parent',
      ].filter(Boolean).join(' ')}
    >
      {hasChildren ? (
        <button
          type="button"
          className="igt-sidenav__link igt-sidenav__link--parent"
          onClick={handleToggle}
          aria-expanded={expanded}
          disabled={isDisabled}
        >
          {innerContent}
        </button>
      ) : item.href ? (
        <a
          className="igt-sidenav__link"
          href={item.href}
          aria-current={isCurrent ? 'page' : undefined}
        >
          {innerContent}
        </a>
      ) : (
        <span className="igt-sidenav__link">
          {innerContent}
        </span>
      )}

      {hasChildren && expanded && (
        <ul className="igt-sidenav__sublist">
          {item.children!.map((child, j) => (
            <NavItemRow
              key={j}
              item={child}
              depth={Math.min(child.depth ?? depth + 1, 3) as 1 | 2 | 3}
              size={size}
              tone={tone}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

interface NavItemsProps {
  items: SideNavItem[]
  size: NonNullable<SideNavigationProps['size']>
  tone: NonNullable<SideNavigationProps['tone']>
}

function NavItems({ items, size, tone }: NavItemsProps) {
  return (
    <ul className="igt-sidenav__list">
      {items.map((item, i) => (
        <NavItemRow
          key={i}
          item={item}
          depth={(item.depth ?? 1) as 1 | 2 | 3}
          size={size}
          tone={tone}
        />
      ))}
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
