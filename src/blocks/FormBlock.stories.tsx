import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FormBlock } from './FormBlock'
import { TextField } from '../components/TextField'
import { Select } from '../components/Select'
import { TextArea } from '../components/TextArea'
import { Checkbox } from '../components/Checkbox'
import type { CheckboxValue } from '../types/components'

const ROLE_OPTIONS = [
  { value: 'admin', label: '관리자' },
  { value: 'editor', label: '편집자' },
  { value: 'viewer', label: '뷰어' },
]

const meta: Meta = {
  title: 'Blocks/FormBlock',
  parameters: { layout: 'padded' },
}

export default meta

export const Default: StoryObj = {
  render: () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [bio, setBio] = useState('')
    const [notify, setNotify] = useState<CheckboxValue>('unchecked')

    return (
      <FormBlock onSubmit={() => alert('저장')} onCancel={() => alert('취소')}>
        <TextField variant="fill" size="md" label="이름" value={name} onChange={setName} />
        <TextField variant="fill" size="md" label="이메일" value={email} onChange={setEmail} />
        <div>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>역할</label>
          <Select type="filled" size="md" placeholder="역할 선택" options={ROLE_OPTIONS} value={role} onChange={setRole} />
        </div>
        <TextArea variant="fill" size="md" label="소개" value={bio} onChange={setBio} />
        <Checkbox size="md" value={notify} label="이메일 알림 수신" onChange={setNotify} />
      </FormBlock>
    )
  },
}

export const LoadingState: StoryObj = {
  render: () => (
    <FormBlock loading submitLabel="저장 중...">
      <TextField variant="fill" size="md" label="이름" value="김민준" onChange={() => {}} />
      <TextField variant="fill" size="md" label="이메일" value="minjun@example.com" onChange={() => {}} />
    </FormBlock>
  ),
}

export const DangerSubmit: StoryObj = {
  render: () => (
    <FormBlock submitLabel="삭제" submitTone="danger" cancelLabel="취소" onSubmit={() => alert('삭제')}>
      <TextField variant="fill" size="md" label="삭제 확인 (항목명 입력)" onChange={() => {}} />
    </FormBlock>
  ),
}
