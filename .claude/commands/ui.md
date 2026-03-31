# IGT 디자인 시스템 — UI 생성

아래 설명을 보고 **IGT Design System 컴포넌트만 사용**해 React JSX 코드를 생성하세요.

요청: $ARGUMENTS

---

## 반드시 지켜야 할 규칙

- `src/components/` 의 컴포넌트만 사용 (직접 `<div>`, `<button>` 등 HTML 태그 금지)
- 하드코딩 색상(`#fff`, `rgba(...)`) 및 px 값 금지 — 토큰/props 사용
- 모든 props는 아래 허용값 중에서만 선택

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
SideNavigation   size: sm|md  tone: neutral|accent
                 items: { label, href?, depth?: 1|2|3, state?: default|current|disabled, children? }[]
Breadcrumb       separator: chevron|dot|slash  leading: none|home
                 items: { label, href? }[]
Pagination       variant: default|minimal  size: sm|md  currentPage totalPages onChange
Accordion        type: contained|plain  size: sm|md|lg  title
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
