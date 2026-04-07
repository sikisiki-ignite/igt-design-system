# TextField

한 줄 텍스트 입력. 레이블·헬퍼텍스트·에러 상태 포함.

## Props

| Prop | Type | Default | Values |
|---|---|---|---|
| `variant` | string | `'fill'` | `fill` · `outline` |
| `size` | string | `'md'` | `sm` · `md` · `lg` |
| `density` | string | `'STANDARD'` | `STANDARD` · `COMPACT` |
| `state` | string | `'normal'` | `normal` · `hover` · `focused` · `disabled` · `readOnly` |
| `invalid` | boolean | `false` | — |
| `label` | string | — | 입력 레이블 |
| `placeholder` | string | — | 플레이스홀더 |
| `helperText` | string | — | 하단 보조 텍스트 (에러 메시지 포함) |
| `value` | string | — | — |
| `onChange` | function | — | `(value: string) => void` |

## 예시

```tsx
// 기본
<TextField variant="fill" size="md" label="이름" placeholder="이름을 입력하세요" />

// 에러 상태
<TextField
  variant="outline"
  size="md"
  label="이메일"
  value={email}
  invalid
  helperText="올바른 이메일 형식이 아닙니다"
  onChange={setEmail}
/>

// 비활성
<TextField variant="fill" size="md" label="사번" value="EMP-001" state="disabled" />

// 읽기 전용
<TextField variant="fill" size="md" label="등록일" value="2026-04-06" state="readOnly" />
```

## 주의

- `invalid={true}` + `helperText`로 에러 메시지 표시
- 여러 줄 입력은 `TextArea` 사용
- 검색 입력은 `SearchField` 사용
