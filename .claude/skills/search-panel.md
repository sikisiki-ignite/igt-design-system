---
name: "search-panel"
description: "SearchPanelBlock 사용 가이드. 검색 패널이 필요한 화면 구현 시 요건을 수집하고 fields를 구성한다."
version: "1.0.0"
---

# SearchPanelBlock 스킬

## 역할

리스트/테이블 상단의 검색 조건 패널 구현 시:
1. PM/기획자에게 요건을 질문한다
2. 답변을 SearchPanelBlock fields 배열로 변환한다
3. igt-dev가 코드를 생성한다

---

## 발동 조건

igt-dev가 아래 상황을 감지하면 이 스킬을 참조한다:
- "목록 페이지", "검색", "조회 화면", "필터" 키워드가 포함된 요청
- SearchPanelBlock이 필요한 레이아웃

---

## Step 1: 요건 수집 질문

검색 패널 구현 전 다음 항목을 순서대로 확인한다.
항목이 이미 요청 메시지에 포함되어 있으면 해당 질문은 건너뛴다.

### Q1. 검색 대상 (어떤 필드를 검색하나?)
```
다음 중 검색 대상을 선택해주세요. (복수 선택 가능)
- [ ] 제목 (title)
- [ ] 본문 (body)
- [ ] 작성자 (author)
- [ ] 직접 입력: ___
```

### Q2. 날짜 필터가 필요한가?
```
등록일/수정일 기간 검색이 필요한가요?
- [ ] 예 → 어떤 날짜? (등록일 / 수정일 / 기타)
- [ ] 아니오
```

### Q3. 추가 필터가 있나? (있으면 각 필터에 대해)
```
추가 필터를 입력해주세요.
필터명 / 선택 옵션 목록 / 단일 선택 or 다중 선택
예: 상태 / 활성·비활성·대기 / 단일
```

### Q4. 검색 버튼 레이블
```
버튼 텍스트를 지정해주세요. (기본값: 조회 / 초기화)
```

---

## Step 2: 요건 → fields 변환 규칙

| 요건 | SearchPanelField type | 비고 |
|------|-----------------------|------|
| 검색 대상 2개 이상 | `search-combo` | typeOptions에 대상 나열, `span: 'full'` |
| 검색 대상 1개 | `text` | `span: 'full'` 권장 |
| 날짜 필터 | `date-range` | `span: 'full'` 필수 |
| 고정 옵션 3개 이하 | `toggle-group` 또는 `radio-group` | |
| 고정 옵션 4개 이상 | `select` | |
| 다중 선택 필터 | `multi-select` | |
| 정렬 기준 | SearchPanelBlock 외부 처리 | DataTableBlock `sortable` 사용 |
| 페이지네이션 | SearchPanelBlock 외부 처리 | DataTableBlock으로 처리 |

---

## Step 3: 코드 생성 예시

```tsx
import { SearchPanelBlock } from 'igt-design-system'

// 검색 대상: 제목+본문, 날짜 필터, 상태 필터(단일) 예시
<SearchPanelBlock
  fields={[
    {
      key: 'keyword',
      label: '검색어',
      type: 'search-combo',
      span: 'full',
      typeOptions: [
        { value: 'title', label: '제목' },
        { value: 'body', label: '본문' },
      ],
    },
    {
      key: 'status',
      label: '상태',
      type: 'toggle-group',
      options: [
        { value: 'active', label: '활성' },
        { value: 'inactive', label: '비활성' },
      ],
    },
    {
      key: 'createdAt',
      label: '등록일',
      type: 'date-range',
      span: 'full',
    },
  ]}
  onSearch={(values) => handleSearch(values)}
  onReset={() => handleReset()}
  searchLabel="조회"
  resetLabel="초기화"
/>
```

---

## 컴포넌트 위치

```
claudecode_designlibraries/src/blocks/SearchPanelBlock.tsx
```

## Props 요약

| Prop | 타입 | 설명 |
|------|------|------|
| `fields` | `SearchPanelField[]` | 검색 필드 목록 |
| `onSearch` | `(values) => void` | 검색 실행 콜백 |
| `onReset` | `() => void` | 초기화 콜백 |
| `searchLabel` | `string` | 검색 버튼 텍스트 (기본: Search) |
| `resetLabel` | `string` | 초기화 버튼 텍스트 (기본: Reset) |
| `loading` | `boolean` | 로딩 상태 |
| `defaultValues` | `Record<string, ...>` | 초기값 |
