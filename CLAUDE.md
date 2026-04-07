# IGT Design System — Claude Code Context

## 절대 금지 — 코드 작성 전 확인

하드코딩 색상·간격·타이포그래피·border 금지. 반드시 토큰으로 대체.

```tsx
// ❌ color:'#1a1a1a'  padding:'16px'  fontSize:14  border:'1px solid #e0e0e0'
// ✅ color:'var(--sys-content-neutral-strong)'  padding:'var(--spacing-16)'
// ✅ fontSize:'var(--label-sm-semibold-fontSize)'  fontWeight:'var(--label-sm-semibold-fontWeight)'  lineHeight:'var(--label-sm-semibold-lineHeight)'
// ✅ border:'var(--borderWidth-1) solid var(--sys-border-neutral-default)'
```

레이아웃 전용 속성(display, flex, overflow, position, width, height)은 인라인 허용.

---

## 필수 규칙

- **모든 UI는 `src/components/` 컴포넌트만 사용** — `<button>` `<input>` `<select>` 직접 사용 금지
- 해당 컴포넌트 없을 때만 외부 라이브러리 허용, 단 토큰 규칙 동일 적용
- Props 타입은 `src/types/components.ts` 에서 확인
- 새 컴포넌트: 타입 먼저 추가 → `src/components/Name/Name.tsx` + `index.ts`

---

## 컴포넌트 카탈로그

### Actions
| 컴포넌트 | Props 요약 |
|---|---|
| `Button` | tone(primary\|secondary\|danger\|primaryInverse) · variant(fill\|soft\|outline\|ghost) · size(xs\|sm\|md\|lg) · density(STANDARD\|COMPACT) |
| `TextButton` | tone · variant · size |
| `IconButton` | tone · variant · size · density |
| `FloatingButton` | layout · priority · size |
| `ButtonGroup` | layout · distribution · size |
| `Link` | tone · underline |
| `OverlayAction` | tone(default\|inverse) · size(xs\|sm\|md) — 이미지/오버레이 위 전용 |

### Form Inputs
| 컴포넌트 | Props 요약 |
|---|---|
| `TextField` | variant(fill\|outline) · size(sm\|md\|lg) · density · invalid |
| `TextArea` | variant · size · invalid |
| `SearchField` | size · density |
| `Select` | type · size · options |
| `Checkbox` | value · size · disabled · readOnly |
| `Radio` | selected · size · disabled |
| `Switch` | on · size |
| `Rating` | value · size |
| `NumberStepper` | emphasis · size · min · max |

### Selection
| 컴포넌트 | Props 요약 |
|---|---|
| `ActionChip` | size · disabled |
| `SelectChip` | selected · variant · size |
| `SegmentedControl` | size · content · segments |
| `Tab` | variant(underline\|filled) · layout(scrollable\|fixed) · size · tabs |

### Feedback
| 컴포넌트 | Props 요약 |
|---|---|
| `Toast` | type(neutral\|info\|success\|warning\|error) · dismissible |
| `Alert` | type(neutral\|info\|success\|warning\|danger) |
| `Dialog` | size · open |
| `Tooltip` | density · emphasis · placement |
| `Popover` | emphasis · placement |

### Display
| 컴포넌트 | Props 요약 |
|---|---|
| `Badge` | kind · tone |
| `Tag` | size · color(grey\|blue\|green\|orange\|purple\|red\|teal\|yellow\|semantic*) · tone(soft\|outline) |
| `Avatar` | size · shape |
| `Divider` | direction · emphasis |
| `StatusIndicator` | size · tone |

### Navigation
| 컴포넌트 | Props 요약 |
|---|---|
| `TopNavigation` | breakpoint · isLoggedIn |
| `SideNavigation` | size(sm\|md) · tone(neutral\|accent) · **width 필수** |
| `Breadcrumb` | separator · leading |
| `Pagination` | variant · size |
| `Accordion` | type · size |

### Loading
`SkeletonRect` · `SkeletonCircle` · `SkeletonText` — size · radius

---

## 레이아웃 정책

- `src/global.css`: `html, body, #root { height: 100%; overflow: hidden; }` — 브라우저 스크롤 없음
- 페이지 루트: `height: '100vh'` + `overflow: 'hidden'` (`minHeight: '100vh'` 금지)
- 스크롤 영역: `flex: 1` + `minHeight: 0` + `overflow: 'auto'` (페이지에 단 하나)
- 최소 지원 너비: `1280px` (PC 전용, 모바일 대응 불필요)

레이아웃 패턴 예시 → `src/examples/` 참조
