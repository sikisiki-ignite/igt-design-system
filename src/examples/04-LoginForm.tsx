/**
 * Pattern 04 — Login Form
 * 중앙 정렬 로그인 카드 (TextField + Button + Link)
 * 인증 페이지 표준 패턴
 */
import { useState } from 'react'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'
import { Link } from '../components/Link'
import { Alert } from '../components/Alert'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    if (!email || !password) {
      setError('이메일과 비밀번호를 입력하세요')
      return
    }
    setLoading(true)
    setError('')
    try {
      // API 호출
    } catch {
      setError('이메일 또는 비밀번호가 올바르지 않습니다')
    } finally {
      setLoading(false)
    }
  }

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
          <h1 style={{
            fontSize: 'var(--heading-md-bold-fontSize)',
            fontWeight: 'var(--heading-md-bold-fontWeight)',
            lineHeight: 'var(--heading-md-bold-lineHeight)',
            color: 'var(--sys-content-neutral-strong)',
            margin: 0,
          }}>
            로그인
          </h1>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <div style={{ marginBottom: 'var(--spacing-16)' }}>
            <Alert type="danger">{error}</Alert>
          </div>
        )}

        {/* 입력 필드 */}
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

        {/* 로그인 버튼 */}
        <div style={{ marginTop: 'var(--spacing-24)' }}>
          <Button
            tone="primary"
            variant="fill"
            size="lg"
            state={loading ? 'loading' : 'normal'}
            onClick={handleLogin}
          >
            로그인
          </Button>
        </div>

        {/* 하단 링크 */}
        <div style={{ marginTop: 'var(--spacing-16)', textAlign: 'center' }}>
          <Link tone="primary" underline="always" href="/forgot-password">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    </div>
  )
}
