import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonRect } from './SkeletonRect'
import { SkeletonCircle } from './SkeletonCircle'
import { SkeletonText } from './SkeletonText'

const meta: Meta = {
  title: 'Components/Skeleton',
  parameters: { layout: 'padded' },
}

export default meta

export const Rect: StoryObj<typeof SkeletonRect> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '280px' }}>
      <SkeletonRect size="sm" />
      <SkeletonRect size="md" />
      <SkeletonRect size="lg" />
    </div>
  ),
}

export const Circle: StoryObj<typeof SkeletonCircle> = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <SkeletonCircle size="xs" />
      <SkeletonCircle size="sm" />
      <SkeletonCircle size="md" />
      <SkeletonCircle size="lg" />
      <SkeletonCircle size="xl" />
    </div>
  ),
}

export const Text: StoryObj<typeof SkeletonText> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '280px' }}>
      <SkeletonText size="sm" />
      <SkeletonText size="md" />
      <SkeletonText size="lg" />
    </div>
  ),
}

export const CardSkeleton: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px', border: '1px solid #eee', borderRadius: '8px', width: '320px' }}>
      <SkeletonCircle size="md" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <SkeletonText size="md" />
        <SkeletonText size="sm" />
        <SkeletonRect size="sm" />
      </div>
    </div>
  ),
}
