# Button

기본 액션 버튼. 텍스트 레이블 필수.

## Props

| Prop | Type | Default | Values |
|---|---|---|---|
| `tone` | string | `'primary'` | `primary` · `secondary` · `danger` · `primaryInverse` |
| `variant` | string | `'fill'` | `fill` · `soft` · `outline` · `ghost` |
| `size` | string | `'md'` | `xs` · `sm` · `md` · `lg` |
| `density` | string | `'STANDARD'` | `STANDARD` · `COMPACT` |
| `state` | string | `'normal'` | `normal` · `disabled` · `loading` |
| `onClick` | function | — | `() => void` |
| `children` | ReactNode | — | 버튼 레이블 |

## 예시

```tsx
// 기본
<Button tone="primary" variant="fill" size="md">저장</Button>

// 위험 액션
<Button tone="danger" variant="outline" size="sm">삭제</Button>

// 취소 (공간 좁을 때)
<Button tone="secondary" variant="ghost" size="xs" density="COMPACT">취소</Button>

// 로딩 중
<Button tone="primary" variant="fill" state="loading">처리 중</Button>

// 비활성
<Button tone="primary" variant="fill" state="disabled">저장</Button>
```

## 조합 패턴

```tsx
// 확인/취소 버튼 쌍
<div style={{ display: 'flex', gap: 'var(--spacing-8)', justifyContent: 'flex-end' }}>
  <Button tone="secondary" variant="ghost" size="md">취소</Button>
  <Button tone="primary" variant="fill" size="md">확인</Button>
</div>
```

## 주의

- 아이콘만 있는 버튼은 `IconButton` 사용
- 텍스트만(밑줄) 링크형은 `TextButton` 사용
- `density="COMPACT"`: 테이블·목록 내 인라인 버튼에 사용
