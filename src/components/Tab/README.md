# Tab

탭 네비게이션. `tabs` 배열과 `value`/`onChange` 상태 연동 필수.

## Props

| Prop | Type | Default | Values |
|---|---|---|---|
| `variant` | string | `'underline'` | `underline` · `filled` |
| `layout` | string | `'fixed'` | `scrollable` · `fixed` |
| `size` | string | `'md'` | `sm` · `md` · `lg` |
| `value` | string | — | 현재 선택된 탭 value |
| `tabs` | array | — | `{ value: string; label: string }[]` |
| `onChange` | function | — | `(value: string) => void` |

## 예시

```tsx
const [tab, setTab] = useState('overview')

// 기본 (underline, scrollable 권장)
<Tab
  variant="underline"
  layout="scrollable"
  size="md"
  value={tab}
  tabs={[
    { value: 'overview', label: '개요' },
    { value: 'detail', label: '상세' },
    { value: 'history', label: '이력' },
  ]}
  onChange={setTab}
/>

// 컨테이너 전체 너비 균등 분할
<Tab variant="filled" layout="fixed" size="md" value={tab} tabs={tabs} onChange={setTab} />
```

## 주의

- `layout="scrollable"` 기본 권장 — 탭 수가 늘어도 안전
- `layout="fixed"` 는 탭이 정확히 2~4개이고 컨테이너 너비를 균등 분할해야 할 때만 사용
- 탭 콘텐츠는 별도 조건부 렌더링으로 구현 (`{tab === 'overview' && <Overview />}`)
