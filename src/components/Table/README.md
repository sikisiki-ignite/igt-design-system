# Table

데이터 테이블. 제네릭 타입 `T`로 행 데이터 타입 지정.

## Props

| Prop | Type | Default | 설명 |
|---|---|---|---|
| `columns` | `TableColumn<T>[]` | — | 컬럼 정의 배열 |
| `data` | `T[]` | — | 행 데이터 배열 |
| `size` | string | `'md'` | `sm` · `md` |
| `getRowKey` | function | — | `(row: T) => string` — 고유 키 추출 |
| `selectable` | boolean | `false` | 체크박스 선택 활성화 |
| `selectedKeys` | `Set<string>` | — | 선택된 키 집합 |
| `onSelectAll` | function | — | `(value: CheckboxValue) => void` |
| `onSelectRow` | function | — | `(key: string) => void` |
| `onRowClick` | function | — | `(row: T) => void` |
| `loading` | boolean | `false` | 스켈레톤 로딩 표시 |
| `empty` | ReactNode | `'데이터가 없습니다.'` | 빈 상태 메시지 |

### TableColumn\<T\>

```ts
{
  key: string
  header: ReactNode
  cell: (row: T, index: number) => ReactNode
  width?: number | string   // 고정 너비. 없으면 flex: 1
  align?: 'left' | 'center' | 'right'
}
```

## 예시

```tsx
interface User {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive'
}

const columns: TableColumn<User>[] = [
  { key: 'name', header: '이름', cell: (row) => row.name },
  { key: 'email', header: '이메일', cell: (row) => row.email, width: 240 },
  {
    key: 'status',
    header: '상태',
    width: 80,
    align: 'center',
    cell: (row) => (
      <Tag color={row.status === 'active' ? 'blue' : 'grey'} tone="soft" size="sm">
        {row.status === 'active' ? '활성' : '비활성'}
      </Tag>
    ),
  },
]

// 기본 테이블
<Table columns={columns} data={users} getRowKey={(row) => row.id} />

// 로딩
<Table columns={columns} data={[]} loading getRowKey={(row) => row.id} />

// 행 선택
const [selectedKeys, setSelectedKeys] = useState(new Set<string>())

<Table
  columns={columns}
  data={users}
  getRowKey={(row) => row.id}
  selectable
  selectedKeys={selectedKeys}
  onSelectAll={(v) => setSelectedKeys(v === 'checked' ? new Set(users.map(u => u.id)) : new Set())}
  onSelectRow={(key) => setSelectedKeys(prev => {
    const next = new Set(prev)
    next.has(key) ? next.delete(key) : next.add(key)
    return next
  })}
/>
```

## 주의

- `getRowKey` 필수 — 반드시 각 행의 고유 ID 반환
- `width` 지정 컬럼은 `flex: 0 0 auto`, 미지정 컬럼은 `flex: 1`로 남은 너비 분배
- `TableCellStrong`으로 overline + title 2줄 셀 구성 가능
