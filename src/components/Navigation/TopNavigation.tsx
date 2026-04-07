import type { TopNavigationProps } from '../../types/components'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Avatar } from '../Avatar'
import './Navigation.css'

const DEFAULT_ITEMS: NonNullable<TopNavigationProps['items']> = [
  { label: '서비스', href: '#' },
  { label: '현황',   href: '#' },
  { label: '관리',   href: '#' },
  { label: '설정',   href: '#' },
]

const DEFAULT_TRAILING_BUTTON: NonNullable<TopNavigationProps['trailingButton']> = {
  label: '로그인',
}

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 10L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M8 2C5.79 2 4 3.79 4 6v4l-1 1h10l-1-1V6c0-2.21-1.79-4-4-4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 13.5a1.5 1.5 0 003 0"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

export function TopNavigation({
  logo,
  breakpoint = 'full',
  items = DEFAULT_ITEMS,
  trailingButton = DEFAULT_TRAILING_BUTTON,
  isLoggedIn = false,
  userSrc,
  userAlt = '',
  hasNotification = false,
  onLoginClick,
  onSearchClick,
  onBellClick,
  onUserClick,
}: TopNavigationProps) {
  return (
    <header
      className={[
        'igt-topnav',
        `igt-topnav--breakpoint-${breakpoint}`,
      ].join(' ')}
    >
      <div className="igt-topnav__inner">
        {/* Leading: 로고 + 메뉴 */}
        <div className="igt-topnav__leading">
          <a className="igt-topnav__brand" href="/" aria-label="홈으로 이동">
            {logo ?? 'IGT'}
          </a>

          {items.length > 0 && (
            <nav className="igt-topnav__nav" aria-label="주요 메뉴">
              <ul className="igt-topnav__menu" role="list">
                {items.map((item) => (
                  <li key={item.href} className="igt-topnav__menu-item-wrap">
                    <a
                      href={item.href}
                      className={[
                        'igt-topnav__menu-item',
                        item.active ? 'igt-topnav__menu-item--active' : '',
                      ].filter(Boolean).join(' ')}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Trailing: 로그인/로그아웃 상태 */}
        <div className="igt-topnav__trailing">
          {isLoggedIn ? (
            <>
              <IconButton
                variant="ghost"
                size="sm"
                aria-label="검색"
                icon={<SearchIcon />}
                onClick={onSearchClick}
              />

              <div className="igt-topnav__bell-wrap">
                <IconButton
                  variant="ghost"
                  size="sm"
                  aria-label={hasNotification ? '새 알림 있음' : '알림'}
                  icon={<BellIcon />}
                  onClick={onBellClick}
                />
                {hasNotification && (
                  <span className="igt-topnav__bell-badge" aria-hidden />
                )}
              </div>

              <button
                className="igt-topnav__avatar-btn"
                onClick={onUserClick}
                aria-label="사용자 메뉴 열기"
                type="button"
              >
                <Avatar size="xs" shape="circle" src={userSrc} alt={userAlt} />
              </button>
            </>
          ) : trailingButton ? (
            <Button
              tone="primary"
              variant="fill"
              size="sm"
              onClick={trailingButton.onClick ?? onLoginClick}
            >
              {trailingButton.label}
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  )
}
