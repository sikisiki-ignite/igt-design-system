# IGT 디자인 시스템 — UI 생성

아래 설명을 보고 **IGT Design System 컴포넌트만 사용**해 React JSX 코드를 생성하세요.

요청: $ARGUMENTS

---

## 반드시 지켜야 할 규칙

- `src/components/` 의 컴포넌트만 사용 (직접 `<div>`, `<button>` 등 HTML 태그 금지)
- 하드코딩 색상(`#fff`, `rgba(...)`) 및 px 값 금지 — 토큰/props 사용
- 모든 props는 아래 허용값 중에서만 선택

---

## 디자인 토큰 (CSS 변수)

인라인 스타일에서 색상/배경/타이포그래피가 필요할 때 반드시 이 변수명을 사용:

### 타이포그래피
접두사에 `-fontSize` / `-fontWeight` / `-lineHeight` 붙여 세트로 사용:
```
--heading-md-bold        20px 700  페이지 제목
--heading-md-semibold    20px 600  페이지 제목(세미볼드)
--body-sm-semibold       15px 600  섹션 타이틀
--body-sm-regular        15px 400  본문 텍스트
--label-md-semibold      14px 600  강조 라벨
--label-md-medium        14px 500  일반 라벨
--label-md-regular       14px 400  본문 라벨
--label-sm-semibold      14px 600  강조 라벨(sm)
--label-sm-medium        14px 500  일반 라벨(sm)
--label-sm-regular       14px 400  본문 라벨(sm)
--body-xxs-semibold      13px 600  소형 강조
--body-xxs-regular       13px 400  소형 본문
--label-xs-semibold      13px 600  소형 강조 라벨
--label-xs-medium        13px 500  소형 라벨
--label-xxs-strong       12px 600  캡션 강조
--caption-lg-semibold    12px 600  캡션 강조
--caption-lg-regular     12px 400  캡션
--caption-md-semibold    11px 600  소형 캡션 강조
--caption-md-regular     11px 400  소형 캡션
```

사용 예시:
```tsx
style={{
  fontSize: 'var(--label-sm-medium-fontSize)',
  fontWeight: 'var(--label-sm-medium-fontWeight)',
  lineHeight: 'var(--label-sm-medium-lineHeight)',
}}
```

예외 (하드코딩 허용): 22px 이상 KPI 숫자, `fontWeight: 800`

### 텍스트 색상
```
--sys-content-neutral-strong      제목, 강조 텍스트
--sys-content-neutral-default     본문 기본 텍스트
--sys-content-neutral-muted       보조 텍스트
--sys-content-neutral-subtle      비활성/힌트 텍스트
--sys-content-neutral-disabled    비활성
--sys-content-brand-default       브랜드 컬러 텍스트
```

### 배경/서피스
```
--sys-background-base             최하단 배경
--sys-background-subtle           페이지 배경 (연한 회색)
--sys-surface-base                카드, 패널 기본 배경
--sys-surface-raised              떠있는 요소 배경 (카드 위)
--sys-surface-overlay             오버레이/모달 배경
--sys-surface-grouped-default     그룹화된 섹션 배경
```

### 테두리
```
--sys-border-neutral-default      기본 테두리
--sys-border-neutral-strong       강조 테두리
--sys-border-neutral-subtle       약한 테두리
--borderWidth-1                   1px 테두리 두께
--borderWidth-2                   2px 테두리 두께
```

### 시맨틱 컨테이너 (배경색)
```
--sys-container-brand-solid-default
--sys-container-brand-tint-default
--sys-container-neutral-solid-default
--sys-container-status-success-tint-default
--sys-container-status-success-solid-default
--sys-container-status-danger-tint-default
--sys-container-status-danger-solid-default
--sys-container-status-warning-tint-default
--sys-container-status-warning-solid-default
--sys-container-status-info-tint-default
```

---

## 컴포넌트 레퍼런스

### Actions
```
Button         tone: primary|secondary|danger|primaryInverse  variant: fill|soft|outline|ghost  size: xs|sm|md|lg  density: STANDARD|COMPACT
TextButton     variant: plain|underline|chevron  tone: accent|danger|neutral|neutralMuted  size: xs|sm|md|lg
IconButton     tone: neutral|subtle  variant: fill|outline|ghost  size: xs|sm|md  density: STANDARD|COMPACT
FloatingButton layout: standard|extended  priority: brand|neutral|subtle  size: md|lg
ButtonGroup    layout: inline|stack  distribution: content|equal  size: xs|sm|md|lg
Link           tone: brand|neutral  underline: always|auto|none
```

### Form Inputs
```
TextField      variant: fill|outline  size: sm|md|lg  density: STANDARD|COMPACT  invalid?: boolean  label? helperText? placeholder?
TextArea       variant: fill|outline  size: md|lg  invalid?: boolean  label? helperText? placeholder?
SearchField    size: xs|md|lg  density: STANDARD|COMPACT
Select         type: filled|outlined|plain  size: xs|sm|md  options: {label, value}[]
Checkbox       value: checked|unchecked|indeterminate  size: sm|md  label?
Radio          selected?: boolean  size: sm|md  label?
Switch         on?: boolean  size: sm|md  label?
NumberStepper  emphasis: fill|outline  size: xs|sm|md  value min? max?
Rating         size: xs|sm|md  value: 0~5
```

### Selection
```
ActionChip     size: xs|sm|md  disabled?
SelectChip     selected?  variant: fill|outline  size: xs|sm|md
SegmentedControl  size: xs|sm|md  content: text|icon|iconText  value segments[] onChange
Tab            variant: filled|underline  layout: fixed|scrollable  size: sm|md|lg  value tabs[] onChange
```

### Feedback
```
Toast          type: neutral|info|success|warning|error  dismissible?  message
Alert          type: neutral|info|success|warning|danger  title?
Dialog         size: "sm (confirm)"|"md (modal)"  open  title?  onClose
Tooltip        density: compact|rich  emphasis: neutral|subtle|accent  placement: top|bottom|left|right|none
Popover        emphasis: neutral|subtle  open  placement?
```

### Display
```
Badge          kind: count|dot  tone: accent|neutral|urgent  count?
Tag            size: xs|sm|md|lg  color: grey|blue|green|orange|purple|red|teal|yellow|semanticDanger|semanticInfo|semanticSuccess|semanticWarning  tone: soft|outline
Avatar         size: xs|sm|md|lg|xl  shape: circle|rounded  src? alt? fallback?
Divider        direction: horizontal|vertical  emphasis: weak|default|strong
StatusIndicator  size: xs|sm|md|lg  tone: active|inactive|attention|error
```

### Navigation
```
TopNavigation    breakpoint: md-lg|xl  isLoggedIn?
SideNavigation   size: sm|md  tone: neutral|accent  width: number|string (필수 — 미지정 시 부모 100% 차지)
                 items: { label, href?, depth?: 1|2|3, state?: default|current|disabled, children? }[]
                 ✅ width prop으로 직접 지정:
                 <SideNavigation width={240} size="sm" tone="neutral" items={NAV_ITEMS} />
Breadcrumb       separator: chevron|dot|slash  leading: none|home
                 items: { label, href? }[]
Pagination       variant: default|minimal  size: sm|md  currentPage totalPages onChange
Accordion        type: contained|plain  size: sm|md|lg  state: collapsed|expanded|disabled  title  children
```

### Table
```
Table            size: sm|md|lg  data[]  getRowKey  selectable?  loading?  empty?  onRowClick?
                 columns: { key, header, width?, align?: left|right|center, cell: (row, i) => ReactNode }[]
                 ← columns/data/getRowKey 필수
TableCellStrong  overline  title   ← overline/title 필수 (children 방식 아님)
```

### Loading
```
SkeletonRect     size: xs|sm|md|lg|xl  radius: none|xs|sm|md|lg
SkeletonCircle   size: xs|sm|md|lg|xl
SkeletonText     size: xs|sm|md|lg|xl
```

---

## 출력 형식

1. 완성된 JSX 코드 (import 포함)
2. 사용된 컴포넌트 목록
3. 필요 시 사용 이유 간략 설명

import 예시:
```tsx
import { Button, TextField, Select } from './src/components'
```
