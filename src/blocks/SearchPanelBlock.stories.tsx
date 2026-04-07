import type { Meta, StoryObj } from '@storybook/react'
import { SearchPanelBlock } from './SearchPanelBlock'

const meta: Meta<typeof SearchPanelBlock> = {
  title: 'Blocks/SearchPanelBlock',
  component: SearchPanelBlock,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof SearchPanelBlock>

// ─── Default: 딜러 관리 화면 ──────────────────────────────────

export const Default: Story = {
  name: 'Dealer Management (기본)',
  args: {
    fields: [
      {
        key: 'search',
        label: 'Search',
        type: 'search-combo',
        placeholder: '검색어를 입력하세요',
        typeOptions: [
          { value: 'dealerNo', label: 'Dealer No.' },
          { value: 'dealerName', label: 'Dealer Name' },
          { value: 'companyNo', label: 'Company No.' },
        ],
        span: 'full',
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Select',
        options: [
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
          { value: 'pending', label: 'Pending' },
        ],
      },
      {
        key: 'businessEndingIn',
        label: 'Business ending in',
        type: 'toggle-group',
        options: [
          { value: '60', label: '60days' },
          { value: '90', label: '90days' },
        ],
      },
      {
        key: 'zone',
        label: 'Zone',
        type: 'multi-select',
        placeholder: 'Select',
        options: [
          { value: 'zone1', label: 'Zone A' },
          { value: 'zone2', label: 'Zone B' },
          { value: 'zone3', label: 'Zone C' },
          { value: 'zone4', label: 'Zone D' },
        ],
      },
      {
        key: 'district',
        label: 'District',
        type: 'multi-select',
        placeholder: 'Select',
        options: [
          { value: 'dist1', label: 'Seoul' },
          { value: 'dist2', label: 'Busan' },
          { value: 'dist3', label: 'Incheon' },
          { value: 'dist4', label: 'Daegu' },
        ],
      },
    ],
    onSearch: (values) => console.log('Search:', values),
    onReset: () => console.log('Reset'),
  },
}

// ─── AllFieldTypes: 7가지 타입 전체 ───────────────────────────

export const AllFieldTypes: Story = {
  name: 'All Field Types',
  args: {
    fields: [
      {
        key: 'searchCombo',
        label: 'search-combo',
        type: 'search-combo',
        placeholder: '검색어 입력',
        typeOptions: [
          { value: 'name', label: '이름' },
          { value: 'id', label: 'ID' },
        ],
        span: 'full',
      },
      {
        key: 'textField',
        label: 'text',
        type: 'text',
        placeholder: '텍스트 입력',
      },
      {
        key: 'selectField',
        label: 'select',
        type: 'select',
        placeholder: '선택',
        options: [
          { value: 'a', label: '옵션 A' },
          { value: 'b', label: '옵션 B' },
          { value: 'c', label: '옵션 C' },
        ],
      },
      {
        key: 'multiSelect',
        label: 'multi-select',
        type: 'multi-select',
        placeholder: '복수 선택',
        options: [
          { value: 'tag1', label: 'Tag 1' },
          { value: 'tag2', label: 'Tag 2' },
          { value: 'tag3', label: 'Tag 3' },
          { value: 'tag4', label: 'Tag 4' },
        ],
      },
      {
        key: 'toggleGroup',
        label: 'toggle-group',
        type: 'toggle-group',
        options: [
          { value: '7d', label: '7days' },
          { value: '30d', label: '30days' },
          { value: '90d', label: '90days' },
        ],
      },
      {
        key: 'dateRange',
        label: 'date-range',
        type: 'date-range',
        span: 'full',
      },
      {
        key: 'radioGroup',
        label: 'radio-group',
        type: 'radio-group',
        options: [
          { value: 'all', label: '전체' },
          { value: 'active', label: '활성' },
          { value: 'inactive', label: '비활성' },
        ],
        span: 'full',
      },
    ],
    onSearch: (values) => console.log('Search:', values),
    onReset: () => console.log('Reset'),
  },
}

// ─── Loading 상태 ─────────────────────────────────────────────

export const Loading: Story = {
  name: 'Loading State',
  args: {
    ...Default.args,
    loading: true,
  },
}
