/**
 * Pattern 10 — Status Row
 * Avatar + 이름/이메일 + Tag(상태) + StatusIndicator 조합
 * 테이블 셀, 목록 행, 카드 내 사용자/항목 상태 표시에 사용
 */
import { Avatar } from '../components/Avatar'
import { Tag } from '../components/Tag'
import { StatusIndicator } from '../components/StatusIndicator'
import { Badge } from '../components/Badge'

interface UserStatusRowProps {
  name: string
  email: string
  role: string
  status: 'online' | 'offline' | 'busy'
  badge?: number
}

/** 사용자 상태 행 — 테이블 셀 내 사용 */
export function UserStatusRow({ name, email, role, status, badge }: UserStatusRowProps) {
  const statusTone = {
    online: 'active',
    offline: 'inactive',
    busy: 'attention',
  }[status] as 'active' | 'inactive' | 'attention'

  const statusLabel = { online: '온라인', offline: '오프라인', busy: '자리비움' }[status]

  const roleColor = {
    admin: 'purple',
    editor: 'blue',
    viewer: 'grey',
  }[role] as 'purple' | 'blue' | 'grey' | undefined ?? 'grey'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
      {/* 아바타 + 뱃지 */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Avatar size="md" shape="circle" />
        {badge !== undefined && badge > 0 && (
          <div style={{ position: 'absolute', top: -4, right: -4 }}>
            <Badge kind="count" tone="urgent" count={badge > 99 ? 99 : badge} />
          </div>
        )}
      </div>

      {/* 이름 + 이메일 */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        <span style={{
          fontSize: 'var(--label-md-semibold-fontSize)',
          fontWeight: 'var(--label-md-semibold-fontWeight)',
          lineHeight: 'var(--label-md-semibold-lineHeight)',
          color: 'var(--sys-content-neutral-strong)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {name}
        </span>
        <span style={{
          fontSize: 'var(--caption-lg-regular-fontSize)',
          fontWeight: 'var(--caption-lg-regular-fontWeight)',
          lineHeight: 'var(--caption-lg-regular-lineHeight)',
          color: 'var(--sys-content-neutral-subtle)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {email}
        </span>
      </div>

      {/* 역할 태그 */}
      <Tag color={roleColor} tone="soft" size="sm">{role}</Tag>

      {/* 온라인 상태 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', flexShrink: 0 }}>
        <StatusIndicator size="sm" tone={statusTone} />
        <span style={{
          fontSize: 'var(--caption-lg-regular-fontSize)',
          fontWeight: 'var(--caption-lg-regular-fontWeight)',
          lineHeight: 'var(--caption-lg-regular-lineHeight)',
          color: 'var(--sys-content-neutral-subtle)',
        }}>
          {statusLabel}
        </span>
      </div>
    </div>
  )
}

/** 사용 예시 */
export function StatusRowExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
      <UserStatusRow name="김민준" email="minjun@example.com" role="admin" status="online" badge={3} />
      <UserStatusRow name="이서연" email="seoyeon@example.com" role="editor" status="busy" />
      <UserStatusRow name="박지후" email="jihoo@example.com" role="viewer" status="offline" />
    </div>
  )
}
