/**
 * Pattern 03 — Form Page
 * TextField + TextArea + Select + Checkbox + Button 조합
 * 데이터 입력/편집 페이지 표준 패턴
 */
import { useState } from 'react'
import { TextField } from '../components/TextField'
import { TextArea } from '../components/TextArea'
import { Select } from '../components/Select'
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'
import { Alert } from '../components/Alert'
import type { CheckboxValue } from '../types/components'

const ROLE_OPTIONS = [
  { value: 'admin', label: '관리자' },
  { value: 'editor', label: '편집자' },
  { value: 'viewer', label: '뷰어' },
]

export function FormPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    bio: '',
    notify: 'unchecked' as CheckboxValue,
  })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [submitError, setSubmitError] = useState('')

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = () => {
    const newErrors: Partial<typeof form> = {}
    if (!form.name) newErrors.name = '이름을 입력하세요'
    if (!form.email) newErrors.email = '이메일을 입력하세요'
    if (!form.role) newErrors.role = '역할을 선택하세요'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    // API 호출
  }

  return (
    <div style={{ maxWidth: 640 }}>
      {/* 에러 알럿 */}
      {submitError && (
        <div style={{ marginBottom: 'var(--spacing-16)' }}>
          <Alert type="danger">{submitError}</Alert>
        </div>
      )}

      {/* 폼 필드 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
        <TextField
          variant="fill"
          size="md"
          label="이름"
          placeholder="이름을 입력하세요"
          value={form.name}
          invalid={!!errors.name}
          helperText={errors.name}
          onChange={set('name')}
        />

        <TextField
          variant="fill"
          size="md"
          label="이메일"
          placeholder="email@example.com"
          value={form.email}
          invalid={!!errors.email}
          helperText={errors.email}
          onChange={set('email')}
        />

        <div>
          <label style={{
            display: 'block',
            marginBottom: 'var(--spacing-6)',
            fontSize: 'var(--label-md-medium-fontSize)',
            fontWeight: 'var(--label-md-medium-fontWeight)',
            lineHeight: 'var(--label-md-medium-lineHeight)',
            color: 'var(--sys-content-neutral-strong)',
          }}>
            역할
          </label>
          <Select
            type="filled"
            size="md"
            placeholder="역할 선택"
            options={ROLE_OPTIONS}
            value={form.role}
            state={errors.role ? 'error' : 'default'}
            onChange={set('role')}
          />
        </div>

        <TextArea
          variant="fill"
          size="md"
          label="소개"
          placeholder="간단한 소개를 입력하세요"
          value={form.bio}
          onChange={set('bio')}
        />

        <Checkbox
          size="md"
          value={form.notify}
          label="이메일 알림 수신"
          onChange={(v) => setForm((prev) => ({ ...prev, notify: v }))}
        />
      </div>

      {/* 액션 버튼 */}
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-8)',
        justifyContent: 'flex-end',
        marginTop: 'var(--spacing-32)',
        paddingTop: 'var(--spacing-20)',
        borderTop: 'var(--borderWidth-1) solid var(--sys-border-neutral-subtle)',
      }}>
        <Button tone="secondary" variant="ghost" size="md">취소</Button>
        <Button tone="primary" variant="fill" size="md" onClick={handleSubmit}>저장</Button>
      </div>
    </div>
  )
}
