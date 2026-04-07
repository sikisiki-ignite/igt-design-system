# SideNavigation

사이드바 네비게이션. `items` 또는 `sections` 중 하나 사용.

## Props

| Prop | Type | Default | Values |
|---|---|---|---|
| `size` | string | `'md'` | `sm` · `md` |
| `tone` | string | `'neutral'` | `neutral` · `accent` |
| `width` | number \| string | — | **필수** — 미지정 시 부모 너비 100% |
| `items` | array | — | `SideNavItem[]` (섹션 없이 flat 목록) |
| `sections` | array | — | `NavSectionDef[]` (섹션 그룹화) |

### SideNavItem

```ts
{
  label: string
  href?: string        // 링크. 없으면 <span>으로 렌더
  icon?: string        // Icon name
  state?: 'normal' | 'current' | 'disabled'
  depth?: 1 | 2 | 3   // 들여쓰기 깊이
  children?: SideNavItem[]
}
```

### NavSectionDef

```ts
{
  label: string
  items: SideNavItem[]
  onAdd?: () => void   // 섹션 우측 + 버튼
}
```

## 예시

```tsx
// flat items
<SideNavigation
  width={240}
  size="md"
  tone="neutral"
  items={[
    { label: '대시보드', href: '/', icon: 'home', state: 'current' },
    { label: '사용자', href: '/users', icon: 'person' },
    { label: '설정', href: '/settings', icon: 'settings' },
  ]}
/>

// 섹션 그룹화
<SideNavigation
  width={240}
  size="md"
  tone="neutral"
  sections={[
    {
      label: '관리',
      items: [
        { label: '사용자 관리', href: '/users', state: 'current' },
        { label: '권한 관리', href: '/roles' },
      ],
    },
    {
      label: '시스템',
      items: [
        { label: '설정', href: '/settings' },
      ],
    },
  ]}
/>
```

## 주의

- **`width` 반드시 지정** — CSS 내부가 `width: 100%`이므로 미지정 시 레이아웃 붕괴
- `items`와 `sections` 동시 사용 불가 — `sections`가 있으면 `sections`만 렌더
- 현재 페이지 항목에 `state: 'current'` 설정
