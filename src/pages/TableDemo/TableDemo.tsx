import React, { useState } from 'react'
import { Table, TableCellStrong } from '../../components/Table'
import { Tag } from '../../components/Tag'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'
import { IconButton } from '../../components/IconButton'
import { StatusIndicator } from '../../components/StatusIndicator'
import { Avatar } from '../../components/Avatar'
import type { TableColumnDef } from '../../types/components'

// ── 목 데이터 ────────────────────────────────────────────────

interface User {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  plan: 'free' | 'pro' | 'enterprise'
  joined: string
  lastSeen: string
}

const USERS: User[] = [
  { id: 'u1', name: '김민준', email: 'minjun.kim@example.com', role: '개발자', status: 'active', plan: 'pro', joined: '2024-01-12', lastSeen: '2026-03-26' },
  { id: 'u2', name: '이서연', email: 'seoyeon.lee@example.com', role: '디자이너', status: 'active', plan: 'enterprise', joined: '2023-11-05', lastSeen: '2026-03-25' },
  { id: 'u3', name: '박지호', email: 'jiho.park@example.com', role: '기획자', status: 'pending', plan: 'free', joined: '2026-03-20', lastSeen: '2026-03-21' },
  { id: 'u4', name: '최예린', email: 'yerin.choi@example.com', role: '개발자', status: 'inactive', plan: 'pro', joined: '2023-08-14', lastSeen: '2025-12-10' },
  { id: 'u5', name: '정우진', email: 'woojin.jung@example.com', role: '마케터', status: 'active', plan: 'free', joined: '2024-06-30', lastSeen: '2026-03-24' },
]

// ── 헬퍼 ────────────────────────────────────────────────────

function statusTone(s: User['status']): 'active' | 'inactive' | 'attention' {
  if (s === 'active') return 'active'
  if (s === 'pending') return 'attention'
  return 'inactive'
}

function statusLabel(s: User['status']) {
  if (s === 'active') return '활성'
  if (s === 'pending') return '대기'
  return '비활성'
}

function planColor(p: User['plan']): 'grey' | 'blue' | 'purple' {
  if (p === 'enterprise') return 'purple'
  if (p === 'pro') return 'blue'
  return 'grey'
}

// ── Section 헤더 ─────────────────────────────────────────────

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 'var(--spacing-16)' }}>
      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--sys-content-neutral-strong)', marginBottom: 'var(--spacing-4)' }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--sys-content-neutral-muted)' }}>{sub}</div>
    </div>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-16)',
    }}>
      {children}
    </section>
  )
}

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid var(--sys-border-neutral-subtle)',
      borderRadius: 'var(--radius-radius-8)',
      overflow: 'hidden',
    }}>
      {children}
    </div>
  )
}

// ── 공통 컬럼 정의 ───────────────────────────────────────────

const baseColumns: TableColumnDef<User>[] = [
  {
    key: 'user',
    header: '사용자',
    cell: (u) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-10)' }}>
        <Avatar size="sm" shape="circle" />
        <TableCellStrong overline={u.email} title={u.name} />
      </div>
    ),
  },
  {
    key: 'role',
    header: '역할',
    width: 110,
    cell: (u) => u.role,
  },
  {
    key: 'plan',
    header: '플랜',
    width: 120,
    cell: (u) => (
      <Tag color={planColor(u.plan)} tone="soft" size="sm">
        {u.plan === 'enterprise' ? 'Enterprise' : u.plan === 'pro' ? 'Pro' : 'Free'}
      </Tag>
    ),
  },
  {
    key: 'status',
    header: '상태',
    width: 100,
    cell: (u) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
        <StatusIndicator size="xs" tone={statusTone(u.status)} />
        <span>{statusLabel(u.status)}</span>
      </div>
    ),
  },
  {
    key: 'joined',
    header: '가입일',
    width: 110,
    cell: (u) => u.joined,
  },
]

// ── 메인 ─────────────────────────────────────────────────────

export function TableDemo() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const toggleAll = () => {
    setSelectedIds(prev =>
      prev.size === USERS.length ? new Set() : new Set(USERS.map(u => u.id))
    )
  }

  const toggleRow = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--sys-background-base)',
      fontFamily: "'IGTSans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      color: 'var(--sys-content-neutral-strong)',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: 'var(--spacing-40) var(--spacing-24)' }}>

        {/* 페이지 타이틀 */}
        <div style={{ marginBottom: 'var(--spacing-40)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-10)', marginBottom: 'var(--spacing-8)' }}>
            <Badge kind="dot" tone="accent" />
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, marginBottom: 'var(--spacing-8)' }}>Table</h1>
          <p style={{ fontSize: 14, color: 'var(--sys-content-neutral-muted)', margin: 0 }}>
            Figma node-id: 373-7635 · Building block / body &amp; header
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>

          {/* ── Size variants ── */}
          <Section>
            <SectionTitle title="Size" sub="sm · md (default) · lg" />

            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--sys-content-neutral-muted)', marginBottom: 'var(--spacing-8)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>sm</div>
              <TableWrapper>
                <Table columns={baseColumns} data={USERS.slice(0, 3)} size="sm" getRowKey={u => u.id} />
              </TableWrapper>
            </div>

            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--sys-content-neutral-muted)', marginBottom: 'var(--spacing-8)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>md</div>
              <TableWrapper>
                <Table columns={baseColumns} data={USERS.slice(0, 3)} size="md" getRowKey={u => u.id} />
              </TableWrapper>
            </div>

            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--sys-content-neutral-muted)', marginBottom: 'var(--spacing-8)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>lg</div>
              <TableWrapper>
                <Table columns={baseColumns} data={USERS.slice(0, 3)} size="lg" getRowKey={u => u.id} />
              </TableWrapper>
            </div>
          </Section>

          {/* ── Cell States ── */}
          <Section>
            <SectionTitle title="Cell States" sub="default · strong · tag · button · iconButton" />
            <TableWrapper>
              <Table
                getRowKey={u => u.id}
                data={USERS}
                size="md"
                columns={[
                  {
                    key: 'default',
                    header: 'default',
                    width: 130,
                    cell: (u) => u.name,
                  },
                  {
                    key: 'strong',
                    header: 'strong',
                    cell: (u) => <TableCellStrong overline={u.email} title={u.name} />,
                  },
                  {
                    key: 'tag',
                    header: 'tag',
                    width: 130,
                    cell: (u) => (
                      <Tag color={planColor(u.plan)} tone="soft" size="sm">
                        {u.plan}
                      </Tag>
                    ),
                  },
                  {
                    key: 'button',
                    header: 'button',
                    width: 130,
                    cell: () => (
                      <Button tone="secondary" variant="outline" size="sm" density="COMPACT">편집</Button>
                    ),
                  },
                  {
                    key: 'iconButton',
                    header: 'iconButton',
                    width: 80,
                    cell: () => (
                      <IconButton tone="neutral" variant="ghost" size="sm" icon="⋯" aria-label="더보기" />
                    ),
                  },
                  {
                    key: 'textButton',
                    header: 'textButton',
                    width: 80,
                    cell: () => (
                      <TextButton variant="plain" tone="accent" size="sm">상세</TextButton>
                    ),
                  },
                ]}
              />
            </TableWrapper>
          </Section>

          {/* ── Selectable ── */}
          <Section>
            <SectionTitle title="Selectable" sub="체크박스 선택 · 전체 선택 · indeterminate" />
            {selectedIds.size > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                <Tag color="blue" tone="soft" size="sm">{selectedIds.size}개 선택됨</Tag>
                <TextButton variant="plain" tone="neutral" size="sm" onClick={() => setSelectedIds(new Set())}>
                  선택 해제
                </TextButton>
              </div>
            )}
            <TableWrapper>
              <Table
                columns={baseColumns}
                data={USERS}
                size="md"
                selectable
                selectedKeys={selectedIds}
                onSelectAll={toggleAll}
                onSelectRow={toggleRow}
                getRowKey={u => u.id}
              />
            </TableWrapper>
          </Section>

          {/* ── Loading ── */}
          <Section>
            <SectionTitle title="Loading" sub="loading={true} 상태에서 skeleton 표시" />
            <TableWrapper>
              <Table columns={baseColumns} data={[]} size="md" getRowKey={u => u.id} loading />
            </TableWrapper>
          </Section>

          {/* ── Empty ── */}
          <Section>
            <SectionTitle title="Empty" sub="데이터가 없을 때 empty 슬롯 표시" />
            <TableWrapper>
              <Table
                columns={baseColumns}
                data={[]}
                size="md"
                getRowKey={u => u.id}
                empty="조건에 맞는 사용자가 없습니다."
              />
            </TableWrapper>
          </Section>

        </div>
      </div>
    </div>
  )
}
