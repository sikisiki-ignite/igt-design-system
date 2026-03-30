# IGT Design System

IGT Desktop 디자인 시스템 React 컴포넌트 라이브러리입니다.

---

## 시작하기 (팀원 온보딩)

### 1. 사전 준비

- [ ] [Node.js](https://nodejs.org) 설치 (v18 이상)
- [ ] [Claude Code](https://claude.ai/code) 설치
- [ ] 저장소 접근 권한 요청 (관리자에게 GitHub 계정 전달)

---

### 2. 프로젝트에 설치

새 프로젝트 또는 기존 프로젝트 폴더에서 실행:

```bash
npm install github:sikisiki-ignite/igt-design-system
```

> 설치 시 자동으로 빌드가 실행됩니다. 1~2분 소요될 수 있습니다.

---

### 3. Claude Code Skills 설치

```bash
npx igt-init
```

실행하면 현재 프로젝트의 `.claude/commands/` 에 IGT 전용 AI 커맨드가 설치됩니다.

---

### 4. CSS 토큰 불러오기

프로젝트 진입점(`main.tsx` 또는 `App.tsx`) 상단에 추가:

```tsx
import 'igt-design-system/styles'
```

---

### 5. 컴포넌트 사용

```tsx
import { Button, TextField, Tag, Select } from 'igt-design-system'

function Example() {
  return (
    <div>
      <TextField variant="outline" size="md" label="이름" />
      <Button tone="primary" variant="fill" size="md">저장</Button>
    </div>
  )
}
```

---

## Claude Code로 바이브코딩

`npx igt-init` 설치 후, Claude Code에서 원하는 화면을 자연어로 요청하면 됩니다.
IGT 컴포넌트를 자동으로 사용해 코드를 생성합니다.

```
로그인 페이지 만들어줘
```

```
사용자 목록 테이블 + 검색 + 페이지네이션 만들어줘
```

```
주문 상태 필터 바 만들어줘
```

컴포넌트 props가 궁금할 때는 `/igt` 커맨드를 사용할 수 있습니다:

```
/igt Button props 알려줘
```

---

## 컴포넌트 목록

| 카테고리 | 컴포넌트 |
|----------|----------|
| 액션 | Button, TextButton, IconButton, FloatingButton, ButtonGroup, Link |
| 입력 | TextField, TextArea, SearchField, Select, Checkbox, Radio, Switch, Rating, NumberStepper |
| 선택 | ActionChip, SelectChip, SegmentedControl, Tab |
| 피드백 | Toast, Alert, Dialog, Tooltip, Popover |
| 표시 | Badge, Tag, Avatar, Divider, StatusIndicator |
| 네비게이션 | TopNavigation, SideNavigation, Breadcrumb, Pagination, Accordion |
| 로딩 | SkeletonRect, SkeletonCircle, SkeletonText |
| 데이터 | Table |

---

## 주의사항

- 색상·간격·폰트는 반드시 디자인 토큰 사용 (`var(--sys-...)`, `var(--spacing-...)`)
- `<button>`, `<input>` 등 HTML 요소 직접 사용 금지 — 컴포넌트 사용
- props 허용값은 `/component 컴포넌트명` 으로 확인

---

## 디자인 원본

Figma: https://www.figma.com/design/f0pUEjS8joIDXShjcxBy0j
