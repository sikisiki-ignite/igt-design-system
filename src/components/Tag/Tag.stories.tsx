import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl (Hero section Only)'] },
    color: {
      control: 'select',
      options: ['grey', 'blue', 'green', 'orange', 'purple', 'red', 'teal', 'yellow',
        'semanticDanger', 'semanticInfo', 'semanticSuccess', 'semanticWarning'],
    },
    tone: { control: 'select', options: ['soft', 'outline'] },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    children: 'Tag',
    color: 'blue',
    tone: 'soft',
    size: 'md',
  },
}

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', maxWidth: '480px' }}>
      {(['grey', 'blue', 'green', 'orange', 'purple', 'red', 'teal', 'yellow'] as const).map(color => (
        <Tag key={color} color={color}>{color}</Tag>
      ))}
    </div>
  ),
}

export const SemanticColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      <Tag color="semanticDanger">Danger</Tag>
      <Tag color="semanticInfo">Info</Tag>
      <Tag color="semanticSuccess">Success</Tag>
      <Tag color="semanticWarning">Warning</Tag>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', maxWidth: '480px' }}>
      {(['grey', 'blue', 'green', 'orange', 'purple', 'red'] as const).map(color => (
        <Tag key={color} color={color} tone="outline">{color}</Tag>
      ))}
    </div>
  ),
}

export const WithRemove: Story = {
  args: {
    children: 'Removable',
    color: 'blue',
    onRemove: () => {},
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
      <Tag size="xs" color="blue">XS</Tag>
      <Tag size="sm" color="blue">SM</Tag>
      <Tag size="md" color="blue">MD</Tag>
      <Tag size="lg" color="blue">LG</Tag>
    </div>
  ),
}
