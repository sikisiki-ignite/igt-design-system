import type { Meta, StoryObj } from '@storybook/react'
import { SearchField } from './SearchField'

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'md', 'lg'] },
    state: { control: 'select', options: ['normal', 'hover', 'focus', 'disabled', 'readOnly'] },
    density: { control: 'select', options: ['STANDARD', 'COMPACT'] },
  },
}

export default meta
type Story = StoryObj<typeof SearchField>

export const Default: Story = {
  args: { placeholder: '검색', size: 'md', state: 'normal' },
}

export const WithValue: Story = {
  args: { placeholder: '검색', value: '검색어 입력됨', size: 'md' },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '280px' }}>
      <SearchField placeholder="XSmall" size="xs" />
      <SearchField placeholder="Medium" size="md" />
      <SearchField placeholder="Large" size="lg" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { placeholder: '검색 불가', state: 'disabled' },
}
