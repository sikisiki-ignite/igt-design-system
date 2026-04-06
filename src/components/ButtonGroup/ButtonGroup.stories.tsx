import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'centered' },
  argTypes: {
    layout: { control: 'select', options: ['inline', 'stack'] },
    distribution: { control: 'select', options: ['content', 'equal'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Inline: Story = {
  render: () => (
    <ButtonGroup layout="inline">
      <Button tone="secondary" variant="outline">취소</Button>
      <Button tone="primary">확인</Button>
    </ButtonGroup>
  ),
}

export const Stack: Story = {
  render: () => (
    <div style={{ width: '280px' }}>
      <ButtonGroup layout="stack" distribution="equal">
        <Button tone="secondary" variant="outline">취소</Button>
        <Button tone="primary">확인</Button>
      </ButtonGroup>
    </div>
  ),
}

export const ThreeButtons: Story = {
  render: () => (
    <ButtonGroup layout="inline">
      <Button tone="secondary" variant="ghost">더보기</Button>
      <Button tone="secondary" variant="outline">취소</Button>
      <Button tone="primary">저장</Button>
    </ButtonGroup>
  ),
}
