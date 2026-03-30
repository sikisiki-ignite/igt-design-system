import { useEffect, useState } from 'react'
import type { TopNavigationProps } from '../../types/components'
import './Navigation.css'

function useClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export function TopNavigation({
  breakpoint = 'xl',
  isLoggedIn = false,
}: TopNavigationProps) {
  const now = useClock()

  const dateStr = now.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const timeStr = now.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  return (
    <header
      className={[
        'igt-topnav',
        `igt-topnav--breakpoint-${breakpoint}`,
      ].join(' ')}
    >
      <div className="igt-topnav__inner">
        <a className="igt-topnav__brand" href="/">
          Brand
        </a>
        <nav className="igt-topnav__nav" aria-label="main navigation" />
        <div className="igt-topnav__actions">
          <span className="igt-topnav__clock">{dateStr} {timeStr}</span>
          {isLoggedIn ? (
            <span className="igt-topnav__user">User</span>
          ) : (
            <span className="igt-topnav__auth">Login</span>
          )}
        </div>
      </div>
    </header>
  )
}
