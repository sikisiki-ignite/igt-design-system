import type { Meta, StoryObj } from '@storybook/react'
import { ActionChip } from './ActionChip'
import { SelectChip } from './SelectChip'

const meta: Meta = {
  title: 'Components/Chip',
  parameters: { layout: 'centered' },
}

export default meta

export const ActionChipDefault: StoryObj<typeof ActionChip> = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <ActionChip>필터</ActionChip>
      <ActionChip selected>선택됨</ActionChip>
      <ActionChip disabled>비활성</ActionChip>
    </div>
  ),
}

export const ActionChipSizes: StoryObj<typeof ActionChip> = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <ActionChip size="xs">XS</ActionChip>
      <ActionChip size="sm">SM</ActionChip>
      <ActionChip size="md">MD</ActionChip>
    </div>
  ),
}

export const SelectChipDefault: StoryObj<typeof SelectChip> = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <SelectChip>미선택</SelectChip>
      <SelectChip selected>선택됨</SelectChip>
      <SelectChip disabled>비활성</SelectChip>
    </div>
  ),
}

export const SelectChipVariants: StoryObj<typeof SelectChip> = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <SelectChip variant="fill" selected>Fill 선택</SelectChip>
      <SelectChip variant="outline" selected>Outline 선택</SelectChip>
    </div>
  ),
}
