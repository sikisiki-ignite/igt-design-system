import type { Meta, StoryObj } from '@storybook/react'
import { FilterBarBlock } from './FilterBarBlock'

const FILTERS = [
  {
    key: 'status',
    placeholder: '전체 상태',
    tagColor: 'blue' as const,
    options: [
      { value: 'active', label: '활성' },
      { value: 'inactive', label: '비활성' },
    ],
  },
  {
    key: 'role',
    placeholder: '전체 역할',
    tagColor: 'purple' as const,
    options: [
      { value: 'admin', label: '관리자' },
      { value: 'editor', label: '편집자' },
      { value: 'viewer', label: '뷰어' },
    ],
  },
]

const meta: Meta = {
  title: 'Blocks/FilterBarBlock',
  parameters: { layout: 'padded' },
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <FilterBarBlock
      filters={FILTERS}
      onChange={(state) => console.log('필터:', state)}
    />
  ),
}

export const SearchOnly: StoryObj = {
  render: () => (
    <FilterBarBlock searchPlaceholder="이름, 이메일 검색" onChange={console.log} />
  ),
}

export const FiltersOnly: StoryObj = {
  render: () => (
    <FilterBarBlock searchable={false} filters={FILTERS} onChange={console.log} />
  ),
}
