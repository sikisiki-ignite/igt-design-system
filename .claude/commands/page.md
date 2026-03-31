# IGT 디자인 시스템 — 페이지 생성

아래 설명을 보고 **IGT Design System 컴포넌트만 사용**해 완성된 페이지 컴포넌트를 생성하세요.

요청: $ARGUMENTS

---

## 반드시 지켜야 할 규칙

- `src/components/` 의 컴포넌트만 사용
- 직접 HTML 태그에 인라인 스타일 금지
- 하드코딩 색상/px 값 금지
- 레이아웃도 가능한 한 컴포넌트 props로 표현

---

## 컴포넌트 레퍼런스

### 레이아웃/네비게이션
```
TopNavigation    isLoggedIn?  breakpoint: md-lg|xl
SideNavigation   size: sm|md  tone: neutral|accent
                 items: { label, href?, depth?: 1|2|3, state?: default|current|disabled, children? }[]
Breadcrumb       separator: chevron|dot|slash  leading: none|home
                 items: { label, href? }[]
Pagination       variant: default|minimal  size: sm|md  currentPage totalPages onChange
Tab              variant: filled|underline  layout: fixed|scrollable  size: sm|md|lg
                 value  tabs: { label, value }[]  onChange   ← value/tabs/onChange 필수
Accordion        type: contained|plain  size: sm|md|lg  title  (children: 내용)
Divider          direction: horizontal|vertical  emphasis: weak|default|strong
```

### 폼 입력
```
TextField      variant: fill|outline  size: sm|md|lg  density: STANDARD|COMPACT  invalid? label? helperText?
TextArea       variant: fill|outline  size: md|lg  invalid? label? helperText?
SearchField    size: xs|md|lg  density: STANDARD|COMPACT
Select         type: filled|outlined|plain  size: xs|sm|md  options[]
Checkbox       value: checked|unchecked|indeterminate  size: sm|md  label?
Radio          selected?  size: sm|md  label?
Switch         on?  size: sm|md  label?
NumberStepper  emphasis: fill|outline  size: xs|sm|md  value min? max?
```

### 액션
```
Button         tone: primary|secondary|danger|primaryInverse  variant: fill|soft|outline|ghost  size: xs|sm|md|lg
TextButton     variant: plain|underline|chevron  tone: accent|danger|neutral|neutralMuted
IconButton     tone: neutral|subtle  variant: fill|outline|ghost  size: xs|sm|md
ButtonGroup    layout: inline|stack  distribution: content|equal
```

### 선택
```
SegmentedControl  size: xs|sm|md  content: text|icon|iconText
                  value  segments: { label, value, icon? }[]  onChange   ← value/segments/onChange 필수
```

### 표시
```
Badge          kind: count|dot  tone: accent|neutral|urgent  count?  ← kind=count일 때 count 필수
Tag            size: xs|sm|md|lg  tone: soft|outline
               color: grey|blue|green|orange|purple|red|teal|yellow|semanticDanger|semanticInfo|semanticSuccess|semanticWarning
Avatar         size: xs|sm|md|lg|xl  shape: circle|rounded  src?  fallback?
StatusIndicator  size: xs|sm|md|lg  tone: active|inactive|attention|error
```

### 테이블
```
Table          size: sm|md|lg  data[]  getRowKey  selectable?  loading?  empty?  onRowClick?
               columns: { key, header, width?, align?: left|right|center, cell: (row, i) => ReactNode }[]
               ← columns/data/getRowKey 필수

TableCellStrong  overline  title   ← overline/title 모두 필수, children 방식 아님
```

### 피드백
```
Toast          type: neutral|info|success|warning|error  message  dismissible?
Alert          type: neutral|info|success|warning|danger  title?
Dialog         size: "sm (confirm)"|"md (modal)"  open  onClose
Tooltip        density: compact|rich  placement: top|bottom|left|right
```

### 로딩 상태
```
SkeletonRect   size: xs|sm|md|lg|xl  radius: none|xs|sm|md|lg
SkeletonCircle size: xs|sm|md|lg|xl
SkeletonText   size: xs|sm|md|lg|xl
```

---

## 출력 형식

완성된 페이지 컴포넌트 파일 전체:

```tsx
import React, { useState } from 'react'
import { ... } from '../../components'

export function PageName() {
  // state, handlers

  return (
    // 전체 페이지 JSX
  )
}
```

마지막에 페이지 구조 요약 (어떤 섹션으로 구성됐는지) 한 줄씩.
