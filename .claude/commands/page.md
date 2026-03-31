# IGT 디자인 시스템 — 페이지 생성

아래 설명을 보고 **IGT Design System 컴포넌트만 사용**해 완성된 페이지 컴포넌트를 생성하세요.

요청: $ARGUMENTS

---

## 반드시 지켜야 할 규칙

- `src/components/` 의 컴포넌트만 사용
- 하드코딩 색상(hex, rgb 등) 금지 — 반드시 **디자인 토큰(CSS 변수)** 사용
- 하드코딩 px 값 금지 — spacing/radius는 토큰, 레이아웃은 컴포넌트 props로 표현
- 차트가 필요한 경우 **recharts** 사용 (`src/igt-tokens.ts` 필수 참조)

---

## ⚠️ 레이아웃 필수 패턴

### 전체 페이지 레이아웃 뼈대
```tsx
// ✅ height: 100vh + overflow: hidden — minHeight 사용 금지 (이중 스크롤 발생)
<div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
  {/* 사이드바 */}
  <SideNavigation width={240} size="sm" tone="neutral" items={NAV_ITEMS} />

  {/* 메인 */}
  <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
    {/* 헤더 (고정) */}
    <header style={{ flexShrink: 0 }}>...</header>

    {/* 스크롤 영역 — 반드시 단 하나만 */}
    <div style={{ flex: 1, overflow: 'auto' }}>
      ...
    </div>
  </main>
</div>
```

### SideNavigation width 필수
`SideNavigation`은 내부 CSS가 `width: 100%`이므로 반드시 `width` prop 지정:
```tsx
<SideNavigation width={240} size="sm" tone="neutral" items={NAV_ITEMS} />
```

---

## 차트 (recharts + IGT 토큰)

차트가 필요하면 recharts를 사용. 반드시 `ResponsiveContainer`로 감쌀 것.
recharts는 CSS 변수를 직접 읽지 못하므로 **`src/igt-tokens.ts`의 `IGT`, `CHART_STYLE`, `CHART_COLORS`** 를 사용:

```tsx
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { IGT, CHART_STYLE, CHART_COLORS } from '../../igt-tokens'

// 바 차트
<ResponsiveContainer width="100%" height={220}>
  <BarChart data={data} barCategoryGap="30%" barGap={4}>
    <CartesianGrid {...CHART_STYLE.grid} />
    <XAxis dataKey="label" {...CHART_STYLE.axis} />
    <YAxis {...CHART_STYLE.axisY} />
    <Tooltip contentStyle={{ fontSize: 13 }} />
    <Legend iconType="square" iconSize={10} />
    <Bar dataKey="value" fill={IGT.blue500} radius={[4, 4, 0, 0]} />
  </BarChart>
</ResponsiveContainer>

// 도넛 차트
<ResponsiveContainer width="100%" height={200}>
  <PieChart>
    <Pie data={data} dataKey="value" nameKey="label" innerRadius={52} outerRadius={76} paddingAngle={2}>
      {data.map((entry, i) => <Cell key={entry.label} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
    </Pie>
    <Tooltip contentStyle={{ fontSize: 13 }} />
  </PieChart>
</ResponsiveContainer>

// 라인 차트
<ResponsiveContainer width="100%" height={220}>
  <LineChart data={data}>
    <CartesianGrid {...CHART_STYLE.grid} />
    <XAxis dataKey="label" {...CHART_STYLE.axis} />
    <YAxis {...CHART_STYLE.axisY} />
    <Tooltip contentStyle={{ fontSize: 13 }} />
    <Line type="monotone" dataKey="value" stroke={IGT.blue500} strokeWidth={2} dot={false} />
  </LineChart>
</ResponsiveContainer>
```

### 주요 IGT 색상 토큰 (recharts용)
```
IGT.blue500   #3182f6  브랜드/기본
IGT.green500  #03b26c  성공
IGT.red500    #f04452  위험
IGT.orange500 #fe9800  경고
IGT.purple400 #b44bd7  보조
IGT.teal400   #30b6b6  보조2
IGT.grey500   #8b95a1  중립/비활성
CHART_COLORS  위 6가지 색상을 순서대로 배열
CHART_STYLE   CartesianGrid, XAxis, YAxis 공통 props
```

---

## 디자인 토큰 (CSS 변수)

인라인 스타일에서 색상/배경이 필요할 때 반드시 이 변수명을 사용:

### 텍스트
```
--sys-content-neutral-strong      /* 제목, 강조 텍스트 */
--sys-content-neutral-default     /* 본문 기본 텍스트 */
--sys-content-neutral-muted       /* 보조 텍스트 */
--sys-content-neutral-subtle      /* 비활성/힌트 텍스트 */
--sys-content-neutral-disabled    /* 비활성 */
--sys-content-brand-default       /* 브랜드 컬러 텍스트 */
```

### 배경/서피스
```
--sys-background-base             /* 최하단 배경 */
--sys-background-subtle           /* 페이지 배경 */
--sys-surface-default             /* 카드, 패널 배경 */
--sys-surface-subtle              /* 살짝 구분되는 배경 */
--sys-surface-raised              /* 떠있는 요소 배경 */
```

### 테두리
```
--sys-border-neutral-default      /* 기본 테두리 */
--sys-border-neutral-strong       /* 강조 테두리 */
--sys-border-neutral-subtle       /* 약한 테두리 */
```

### 시맨틱 컨테이너 (배경색)
```
--sys-container-brand-solid-default    /* 브랜드 강조 배경 */
--sys-container-brand-tint-default     /* 브랜드 연한 배경 */
--sys-container-neutral-solid-default  /* 중립 강조 배경 */
--sys-container-status-success-tint-default  /* 성공 배경 */
--sys-container-status-danger-tint-default   /* 위험 배경 */
--sys-container-status-warning-tint-default  /* 경고 배경 */
```

---

## 컴포넌트 레퍼런스

### 레이아웃/네비게이션
```
TopNavigation    isLoggedIn?  breakpoint: md-lg|xl
SideNavigation   size: sm|md  tone: neutral|accent  width: number|string (필수)
                 items: { label, href?, depth?: 1|2|3, state?: default|current|disabled, children? }[]
                 ⚠️ width: 100% 고정 — 반드시 고정 너비 컨테이너로 감쌀 것:
                 <div style={{ width: '220px', flexShrink: 0 }}><SideNavigation .../></div>
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
// 차트 필요시:
import { ResponsiveContainer, BarChart, Bar, ... } from 'recharts'
import { IGT, CHART_STYLE, CHART_COLORS } from '../../igt-tokens'

export function PageName() {
  // state, handlers

  return (
    // 전체 페이지 JSX — 레이아웃 필수 패턴 사용
  )
}
```

마지막에 페이지 구조 요약 (어떤 섹션으로 구성됐는지) 한 줄씩.
