import type { Meta, StoryObj } from '@storybook/react'
import { LoginFormBlock } from './LoginFormBlock'

const meta: Meta<typeof LoginFormBlock> = {
  title: 'Blocks/LoginFormBlock',
  component: LoginFormBlock,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof LoginFormBlock>

export const Default: Story = {
  args: {
    onSubmit: (email, password) => alert(`로그인: ${email}`),
    forgotPasswordHref: '#',
  },
}

export const WithError: Story = {
  args: {
    error: '이메일 또는 비밀번호가 올바르지 않습니다',
    onSubmit: () => {},
    forgotPasswordHref: '#',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: () => {},
  },
}

export const CustomTitle: Story = {
  args: {
    title: '관리자 로그인',
    onSubmit: (email) => alert(`로그인: ${email}`),
    forgotPasswordHref: '#',
  },
}
