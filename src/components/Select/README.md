# Select

드롭다운 단일 선택. `options` 배열 필수.

## Props

| Prop | Type | Default | Values |
|---|---|---|---|
| `type` | string | `'filled'` | `filled` · `outline` |
| `size` | string | `'md'` | `sm` · `md` · `lg` |
| `state` | string | `'default'` | `default` · `disabled` · `error` |
| `value` | string | — | 선택된 값 |
| `placeholder` | string | — | 미선택 시 표시 텍스트 |
| `options` | array | — | `{ value: string; label: string }[]` |
| `onChange` | function | — | `(value: string) => void` |

## 예시

```tsx
const options = [
  { value: 'active', label: '활성' },
  { value: 'inactive', label: '비활성' },
  { value: 'pending', label: '대기' },
]

// 기본
<Select
  type="filled"
  size="md"
  placeholder="상태 선택"
  options={options}
  value={status}
  onChange={setStatus}
/>

// 에러
<Select type="outline" size="md" state="error" options={options} value={status} onChange={setStatus} />

// 비활성
<Select type="filled" size="md" state="disabled" options={options} value="active" />
```

## 주의

- `options`는 반드시 전달 (빈 배열이라도)
- `placeholder` 없으면 첫 번째 option이 기본 선택됨
