---
name: "search-panel"
description: "SearchPanelBlock 사용 가이드. 검색/필터 패널 구현 시 요건을 SearchPanelBlock fields로 변환한다."
version: "1.0.0"
---

# SearchPanelBlock 사용 가이드

## 언제 사용하나

리스트/테이블 상단에 검색 조건이 필요할 때. 기획 스킬에 검색 요건이 정의되어 있으면 아래 매핑 규칙으로 fields를 구성한다.

---

## 요건 → fields 변환 규칙

| 요건 | type | 비고 |
|------|------|------|
| 검색 대상 2개 이상 (title, body 등) | `search-combo` | typeOptions에 대상 나열, `span: 'full'` |
| 검색 대상 1개 | `text` | `span: 'full'` 권장 |
| 날짜 범위 필터 | `date-range` | `span: 'full'` 필수 |
| 고정 옵션 3개 이하 | `toggle-group` 또는 `radio-group` | |
| 고정 옵션 4개 이상 | `select` | |
| 다중 선택 필터 | `multi-select` | |
| 정렬 기준 | SearchPanelBlock 외부 처리 | DataTableBlock `sortable` 사용 |
| 페이지네이션 | SearchPanelBlock 외부 처리 | DataTableBlock으로 처리 |

---

## Props

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `fields` | `SearchPanelField[]` | 필수 | 검색 필드 목록 |
| `onSearch` | `(values) => void` | 필수 | 검색 실행 콜백 |
| `onReset` | `() => void` | - | 초기화 콜백 |
| `searchLabel` | `string` | `'Search'` | 검색 버튼 텍스트 |
| `resetLabel` | `string` | `'Reset'` | 초기화 버튼 텍스트 |
| `loading` | `boolean` | `false` | 로딩 상태 |
| `defaultValues` | `Record<string, ...>` | - | 초기값 |

---

## 코드 예시

```tsx
import { SearchPanelBlock } from 'igt-design-system'

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
src/blocks/SearchPanelBlock.tsx
```
