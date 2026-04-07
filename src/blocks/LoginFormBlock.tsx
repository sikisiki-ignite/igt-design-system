import { useState } from 'react'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'
import { Link } from '../components/Link'
import { Alert } from '../components/Alert'

interface LoginFormBlockProps {
  /** 로고 또는 타이틀 영역 */
  logo?: React.ReactNode
  title?: string
  /** 에러 메시지 (외부에서 주입) */
  error?: string
  /** 로딩 상태 */
  loading?: boolean
  /** 비밀번호 찾기 링크 */
  forgotPasswordHref?: string
  onSubmit: (email: string, password: string) => void
}

export function LoginFormBlock({
  logo,
  title = '로그인',
  error,
  loading = false,
  forgotPasswordHref,
  onSubmit,
}: LoginFormBlockProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [localError, setLocalError] = useState('')

  const handleSubmit = () => {
    if (!email || !password) {
      setLocalError('이메일과 비밀번호를 입력하세요')
      return
    }
    setLocalError('')
    onSubmit(email, password)
  }

  const displayError = error || localError

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--sys-surface-subtle)' }}>
      <div style={{
        width: 400,
        padding: 'var(--spacing-40)',
        backgroundColor: 'var(--sys-surface-default)',
        borderRadius: 'var(--radius-lg)',
        border: 'var(--borderWidth-1) solid var(--sys-border-neutral-subtle)',
      }}>
        {/* 로고/타이틀 */}
        <div style={{ marginBottom: 'var(--spacing-32)', textAlign: 'center' }}>
          {logo ?? (
            <h1 style={{
              fontSize: 'var(--heading-md-bold-fontSize)',
              fontWeight: 'var(--heading-md-bold-fontWeight)',
              lineHeight: 'var(--heading-md-bold-lineHeight)',
              color: 'var(--sys-content-neutral-strong)',
              margin: 0,
            }}>
              {title}
            </h1>
          )}
        </div>

        {/* 에러 */}
        {displayError && (
          <div style={{ marginBottom: 'var(--spacing-16)' }}>
            <Alert type="danger">{displayError}</Alert>
          </div>
        )}

        {/* 입력 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <TextField
            variant="fill"
            size="md"
            label="이메일"
            placeholder="email@example.com"
            value={email}
            onChange={setEmail}
          />
          <TextField
            variant="fill"
            size="md"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={setPassword}
          />
        </div>

        {/* 제출 */}
        <div style={{ marginTop: 'var(--spacing-24)' }}>
          <Button
            tone="primary"
            variant="fill"
            size="lg"
            state={loading ? 'loading' : 'normal'}
            onClick={handleSubmit}
          >
            로그인
          </Button>
        </div>

        {/* 하단 링크 */}
        {forgotPasswordHref && (
          <div style={{ marginTop: 'var(--spacing-16)', textAlign: 'center' }}>
            <Link tone="primary" underline="always" href={forgotPasswordHref}>
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
