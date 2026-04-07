# Dialog

모달 다이얼로그. `open={true}` 시 렌더, 오버레이 클릭으로 닫기.

## Props

| Prop | Type | Default | Values |
|---|---|---|---|
| `open` | boolean | — | **필수** |
| `size` | string | `'sm (confirm)'` | `sm (confirm)` · `md` |
| `title` | string | — | 헤더 타이틀 |
| `onClose` | function | — | `() => void` |
| `children` | ReactNode | — | 다이얼로그 본문 |

## 예시

```tsx
const [open, setOpen] = useState(false)

// 확인 다이얼로그 (sm)
<Dialog open={open} size="sm (confirm)" title="삭제 확인" onClose={() => setOpen(false)}>
  <p>정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
  <div style={{ display: 'flex', gap: 'var(--spacing-8)', justifyContent: 'flex-end', marginTop: 'var(--spacing-16)' }}>
    <Button tone="secondary" variant="ghost" size="md" onClick={() => setOpen(false)}>취소</Button>
    <Button tone="danger" variant="fill" size="md" onClick={handleDelete}>삭제</Button>
  </div>
</Dialog>

// 콘텐츠 다이얼로그 (md)
<Dialog open={open} size="md" title="사용자 상세" onClose={() => setOpen(false)}>
  {/* 폼, 테이블 등 */}
</Dialog>
```

## 주의

- `open={false}`이면 DOM에 렌더되지 않음 (`null` 반환)
- 오버레이 클릭 시 `onClose` 호출 — 반드시 `open` 상태를 `false`로 변경
- 다이얼로그 내부 클릭은 이벤트 버블링 차단 처리됨

---

# Toast

알림 메시지. 화면 특정 위치에 고정 배치 필요.

## Props

| Prop | Type | Default | Values |
|---|---|---|---|
| `type` | string | `'neutral'` | `neutral` · `info` · `success` · `warning` · `error` |
| `message` | string | — | **필수** |
| `dismissible` | boolean | `false` | — |
| `onDismiss` | function | — | `() => void` |

## 예시

```tsx
// 성공
<Toast type="success" message="저장되었습니다" dismissible onDismiss={() => setToast(null)} />

// 에러
<Toast type="error" message="저장에 실패했습니다" dismissible onDismiss={() => setToast(null)} />

// 위치 고정 래퍼 예시
<div style={{ position: 'fixed', bottom: 'var(--spacing-24)', right: 'var(--spacing-24)', zIndex: 9999 }}>
  {toast && <Toast type={toast.type} message={toast.message} dismissible onDismiss={() => setToast(null)} />}
</div>
```

## 주의

- Toast 자체는 위치를 가지지 않음 — 부모에 `position: fixed` 설정 필요
- `Alert`는 인라인 (페이지 내 삽입), `Toast`는 플로팅 (화면 위 고정)
