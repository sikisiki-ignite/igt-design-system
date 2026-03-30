# IGT Design System — Claude Code Context

## 프로젝트 개요
이 프로젝트는 IGT Desktop 디자인 시스템의 React 컴포넌트 라이브러리입니다.
Figma 원본: https://www.figma.com/design/f0pUEjS8joIDXShjcxBy0j

## ❌ 절대 금지 패턴 — 코드 작성 전 반드시 확인

아래 패턴을 발견하거나 작성하려 할 경우 **즉시 중단하고 토큰/컴포넌트로 대체**해야 합니다.

### 금지: 하드코딩 색상
```tsx
// ❌ 금지
style={{ color: '#1a1a1a' }}
style={{ background: 'rgba(0,0,0,0.5)' }}
style={{ borderColor: 'white' }}

// ✅ 대체
style={{ color: 'var(--sys-content-neutral-strong)' }}
style={{ background: 'var(--sys-surface-overlay)' }}
style={{ borderColor: 'var(--sys-border-neutral-subtle)' }}
```

### 금지: 하드코딩 숫자 간격·크기
```tsx
// ❌ 금지
style={{ padding: '16px' }}
style={{ gap: '8px' }}
style={{ marginBottom: 24 }}
style={{ fontSize: 14 }}
style={{ fontWeight: 700 }}
style={{ borderRadius: 8 }}

// ✅ 대체
style={{ padding: 'var(--spacing-16)' }}
style={{ gap: 'var(--spacing-8)' }}
style={{ marginBottom: 'var(--spacing-24)' }}
// fontSize / fontWeight → 컴포넌트 내부 토큰 또는 Typography 컴포넌트 사용
style={{ borderRadius: 'var(--radius-md)' }}
```

### 금지: 하드코딩 타이포그래피
```tsx
// ❌ 금지
style={{ fontSize: 14, fontWeight: 600 }}
style={{ fontSize: 12 }}
style={{ fontWeight: 700 }}

// ✅ 대체 — role + size + weight 조합 토큰 사용 (fontSize, fontWeight, lineHeight 세트로)
style={{
  fontSize: 'var(--label-sm-semibold-fontSize)',     // 14px
  fontWeight: 'var(--label-sm-semibold-fontWeight)', // 600
  lineHeight: 'var(--label-sm-semibold-lineHeight)',
}}
```

주요 타이포그래피 토큰 (접두사에 `-fontSize` / `-fontWeight` / `-lineHeight` 붙여 사용):
| 토큰 접두사 | fontSize | fontWeight | 용도 |
|---|---|---|---|
| `--heading-md-bold` | 20px | 700 | 페이지 제목 |
| `--body-sm-semibold` | 15px | 600 | 섹션 타이틀 |
| `--label-sm-semibold` | 14px | 600 | 강조 라벨 |
| `--label-sm-medium` | 14px | 500 | 일반 라벨 |
| `--label-sm-regular` | 14px | 400 | 본문 라벨 |
| `--body-xxs-semibold` | 13px | 600 | 소형 강조 |
| `--label-xs-medium` | 13px | 500 | 소형 라벨 |
| `--body-xxs-regular` | 13px | 400 | 소형 본문 |
| `--label-xxs-strong` | 12px | 600 | 캡션 강조 |
| `--caption-lg-regular` | 12px | 400 | 캡션 |
| `--caption-md-regular` | 11px | 400 | 소형 캡션 |

예외 (토큰 없음, 하드코딩 허용):
- 22px 이상 디스플레이 숫자 (KPI 값 등 디자인 시스템 스케일 외 크기)
- `fontWeight: 800` (토큰 미정의)

### 금지: 하드코딩 border
```tsx
// ❌ 금지
style={{ border: '1px solid #e0e0e0' }}
style={{ border: '1px solid rgba(0,0,0,0.1)' }}

// ✅ 대체
style={{ border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)' }}
```

### 허용: 레이아웃 전용 속성 (토큰 없음)
아래는 토큰이 존재하지 않으므로 인라인 값 허용:
```tsx
style={{ display: 'flex' }}
style={{ flexDirection: 'column' }}
style={{ flex: 1 }}
style={{ overflow: 'hidden' }}
style={{ position: 'relative' }}
style={{ alignItems: 'center' }}
style={{ justifyContent: 'space-between' }}
style={{ width: '100%' }}
style={{ minHeight: '100vh' }}
style={{ maxWidth: 1080 }}   // 페이지 레이아웃 최대 너비
```

---

## 필수 규칙

### 컴포넌트 사용
- **모든 UI는 `src/components/` 의 컴포넌트만 사용**
- 직접 `<button>`, `<input>`, `<select>` 등 인터랙티브 HTML 요소 직접 사용 금지 — 반드시 컴포넌트 사용
- 래퍼 `<div>` 는 레이아웃 목적으로만 허용, 시각 스타일(색상·간격·폰트)은 토큰 사용

### 컴포넌트가 없는 경우 (Fallback)
`src/components/` 에 해당하는 컴포넌트가 없을 경우에만 아래 규칙을 따릅니다:
- **외부 라이브러리 또는 HTML 요소 직접 사용 허용** (AI가 적절한 구현을 선택)
- **단, 폰트(타이포그래피)는 반드시 IGT 디자인 시스템 토큰 사용** — 하드코딩 금지
  ```tsx
  // ✅ fallback 컴포넌트에서도 타이포그래피는 토큰 사용
  style={{
    fontSize: 'var(--label-sm-medium-fontSize)',
    fontWeight: 'var(--label-sm-medium-fontWeight)',
    lineHeight: 'var(--label-sm-medium-lineHeight)',
  }}
  ```
- 색상·간격·border 등 나머지 토큰 규칙도 동일하게 적용

### 타입 임포트
- 모든 컴포넌트 props는 `src/types/components.ts` 에 정의된 타입 사용
- 새 컴포넌트 추가 시 반드시 타입 파일에 타입 먼저 추가

---

## 컴포넌트 카탈로그

### Actions (액션)
| 컴포넌트 | 주요 Props | 설명 |
|----------|------------|------|
| `Button` | `tone`, `variant`, `size`, `density` | 기본 버튼 |
| `TextButton` | `variant`, `tone`, `size` | 텍스트 전용 버튼 |
| `IconButton` | `tone`, `variant`, `size`, `density` | 아이콘 전용 버튼 |
| `FloatingButton` | `layout`, `priority`, `size` | FAB 버튼 |
| `ButtonGroup` | `layout`, `distribution`, `size` | 버튼 묶음 |
| `Link` | `tone`, `underline` | 링크 |
| `OverlayAction` | `tone`, `size` | 오버레이 위 액션 |

### Button 사용 예시
```tsx
// ✅ 올바른 사용
<Button tone="primary" variant="fill" size="md">저장</Button>
<Button tone="danger" variant="outline" size="sm">삭제</Button>
<Button tone="secondary" variant="ghost" size="xs" density="COMPACT">취소</Button>

// ✅ tone 값: primary | secondary | danger | primaryInverse
// ✅ variant 값: fill | soft | outline | ghost
// ✅ size 값: xs | sm | md | lg
// ✅ density 값: STANDARD | COMPACT
```

### Form Inputs (입력)
| 컴포넌트 | 주요 Props | 설명 |
|----------|------------|------|
| `TextField` | `variant`, `size`, `density`, `invalid` | 텍스트 입력 |
| `TextArea` | `variant`, `size`, `invalid` | 여러 줄 입력 |
| `SearchField` | `size`, `density` | 검색 입력 |
| `Select` | `type`, `size`, `options` | 드롭다운 선택 |
| `Checkbox` | `value`, `size`, `disabled`, `readOnly` | 체크박스 |
| `Radio` | `selected`, `size`, `disabled` | 라디오 버튼 |
| `Switch` | `on`, `size` | 토글 스위치 |
| `Rating` | `value`, `size` | 별점 |
| `NumberStepper` | `emphasis`, `size`, `min`, `max` | 숫자 증감 |

### TextField 사용 예시
```tsx
// ✅ 올바른 사용
<TextField variant="fill" size="md" label="이름" placeholder="이름을 입력하세요" />
<TextField variant="outline" size="lg" invalid label="이메일" helperText="올바른 이메일을 입력하세요" />

// ✅ variant: fill | outline
// ✅ size: sm | md | lg
// ✅ density: STANDARD | COMPACT
// ✅ state: normal | hover | focused | disabled | readOnly
```

### Selection (선택)
| 컴포넌트 | 주요 Props | 설명 |
|----------|------------|------|
| `ActionChip` | `size`, `disabled` | 액션 칩 |
| `SelectChip` | `selected`, `variant`, `size` | 선택 칩 |
| `SegmentedControl` | `size`, `content`, `segments` | 세그먼트 컨트롤 |
| `Tab` | `variant`, `layout`, `size`, `tabs` | 탭 |

### Feedback (피드백)
| 컴포넌트 | 주요 Props | 설명 |
|----------|------------|------|
| `Toast` | `type`, `dismissible` | 토스트 메시지 |
| `Alert` | `type` | 인라인 알럿 |
| `Dialog` | `size`, `open` | 다이얼로그/모달 |
| `Tooltip` | `density`, `emphasis`, `placement` | 툴팁 |
| `Popover` | `emphasis`, `placement` | 팝오버 |

### Toast / Alert 사용 예시
```tsx
// ✅ type 값: neutral | info | success | warning | error (Toast)
// ✅ type 값: neutral | info | success | warning | danger (Alert)
<Toast type="success" dismissible message="저장되었습니다" />
<Alert type="warning" title="주의">변경사항이 저장되지 않습니다.</Alert>
```

### Display (표시)
| 컴포넌트 | 주요 Props | 설명 |
|----------|------------|------|
| `Badge` | `kind`, `tone` | 배지 |
| `Tag` | `size`, `color`, `tone` | 태그 |
| `Avatar` | `size`, `shape` | 아바타 |
| `Divider` | `direction`, `emphasis` | 구분선 |
| `StatusIndicator` | `size`, `tone` | 상태 표시 |

### Tag 사용 예시
```tsx
// ✅ color 값: grey | blue | green | orange | purple | red | teal | yellow
//              | semanticDanger | semanticInfo | semanticSuccess | semanticWarning
// ✅ tone 값: soft | outline
<Tag color="blue" tone="soft" size="md">신규</Tag>
<Tag color="semanticSuccess" tone="outline" size="sm">완료</Tag>
```

### Navigation (네비게이션)
| 컴포넌트 | 주요 Props | 설명 |
|----------|------------|------|
| `TopNavigation` | `breakpoint`, `isLoggedIn` | 상단 네비게이션 |
| `SideNavigation` | `size`, `tone` | 사이드 네비게이션 |
| `Breadcrumb` | `separator`, `leading` | 브레드크럼 |
| `Pagination` | `variant`, `size` | 페이지네이션 |
| `Accordion` | `type`, `size` | 아코디언 |

### Loading (로딩)
| 컴포넌트 | 주요 Props | 설명 |
|----------|------------|------|
| `SkeletonRect` | `size`, `radius` | 사각형 스켈레톤 |
| `SkeletonCircle` | `size` | 원형 스켈레톤 |
| `SkeletonText` | `size` | 텍스트 스켈레톤 |

---

## 컴포넌트 추가 가이드

새 컴포넌트를 만들 때 반드시 이 구조를 따르세요:

```
src/components/ComponentName/
  ComponentName.tsx  ← 컴포넌트 구현
  index.ts           ← export
```

```tsx
// ComponentName.tsx 기본 구조
import type { ComponentNameProps } from '../../types/components'

export function ComponentName({ prop1, prop2, ...rest }: ComponentNameProps) {
  return (
    // 구현
  )
}
```

---

## 파일 구조
```
src/
  components/     ← 컴포넌트 구현
  types/
    components.ts ← 모든 컴포넌트 타입 정의
  tokens/         ← 디자인 토큰 (색상, 스페이싱, 타이포그래피)
```

---

## 주의사항
- **Props 타입 확인**: 값을 사용하기 전 `src/types/components.ts` 에서 허용 값 확인
- **Density 사용**: 밀도가 높은 레이아웃(테이블, 폼 목록 등)에서는 `density="COMPACT"` 사용
- **State props**: 인터랙티브 상태는 직접 CSS 클래스 조작 대신 `state` prop으로 제어
- **코드 작성 전 자가 점검**: 생성하려는 코드에 위 ❌ 금지 패턴이 포함되어 있으면 작성하지 말고 토큰으로 대체할 것
