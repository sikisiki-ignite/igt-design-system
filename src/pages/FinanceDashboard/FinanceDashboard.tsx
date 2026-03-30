import { useState } from 'react'

import { Button } from '../../components/Button'
import { ButtonGroup } from '../../components/ButtonGroup'
import { IconButton } from '../../components/IconButton'
import { TextButton } from '../../components/TextButton'
import { TextField } from '../../components/TextField'
import { Select } from '../../components/Select'
import { SearchField } from '../../components/SearchField'
import { Switch } from '../../components/Switch'
import { Tab } from '../../components/Tab'
import { SegmentedControl } from '../../components/SegmentedControl'
import { SelectChip } from '../../components/Chip'
import { Tag } from '../../components/Tag'
import { Badge } from '../../components/Badge'
import { Avatar } from '../../components/Avatar'
import { StatusIndicator } from '../../components/StatusIndicator'
import { Divider } from '../../components/Divider'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Pagination } from '../../components/Pagination'
import { Alert } from '../../components/Alert'
import { Toast } from '../../components/Toast'
import { Dialog } from '../../components/Dialog'
import { Tooltip } from '../../components/Tooltip'
import { Accordion } from '../../components/Accordion'
import { SideNavigation } from '../../components/Navigation'
import { SkeletonText } from '../../components/Skeleton'
import { Table, TableCellStrong } from '../../components/Table'
import type { TableColumnDef } from '../../types/components'

// ─── 타입 ─────────────────────────────────────────────────────────────

type TransactionStatus = 'completed' | 'pending' | 'failed'
type TransactionType = 'income' | 'expense' | 'transfer'

interface Transaction {
  id: string
  date: string
  description: string
  category: string
  amount: number
  type: TransactionType
  status: TransactionStatus
  account: string
}

// ─── 목(Mock) 데이터 ──────────────────────────────────────────────────

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'T001', date: '2026-03-26', description: '삼성전자 납품 대금', category: '매출', amount: 12500000, type: 'income', status: 'completed', account: '기업은행 110-**** ' },
  { id: 'T002', date: '2026-03-25', description: '서버 호스팅 비용', category: '인프라', amount: -340000, type: 'expense', status: 'completed', account: '국민카드' },
  { id: 'T003', date: '2026-03-25', description: 'LG전자 프로젝트 계약금', category: '매출', amount: 5000000, type: 'income', status: 'pending', account: '기업은행 110-****' },
  { id: 'T004', date: '2026-03-24', description: '사무실 임차료', category: '임차', amount: -2200000, type: 'expense', status: 'completed', account: '하나은행 188-****' },
  { id: 'T005', date: '2026-03-24', description: '마케팅 광고비', category: '마케팅', amount: -850000, type: 'expense', status: 'completed', account: '신한카드' },
  { id: 'T006', date: '2026-03-23', description: '현대모비스 컨설팅 수수료', category: '매출', amount: 3800000, type: 'income', status: 'completed', account: '기업은행 110-****' },
  { id: 'T007', date: '2026-03-23', description: '임직원 급여', category: '인건비', amount: -18500000, type: 'expense', status: 'completed', account: '하나은행 188-****' },
  { id: 'T008', date: '2026-03-22', description: '비품 구매 (노트북 2대)', category: '비품', amount: -3200000, type: 'expense', status: 'failed', account: '법인카드' },
  { id: 'T009', date: '2026-03-21', description: '소프트웨어 라이선스 갱신', category: '인프라', amount: -1200000, type: 'expense', status: 'completed', account: '신한카드' },
  { id: 'T010', date: '2026-03-20', description: '카카오 파트너십 계약금', category: '매출', amount: 8000000, type: 'income', status: 'completed', account: '기업은행 110-****' },
]

const KPI_DATA = [
  { label: '3월 총 매출', value: '₩ 29,300,000', change: '+12.4%', up: true, tooltip: '전월 대비 매출 증감률' },
  { label: '3월 총 비용', value: '₩ 26,290,000', change: '+5.1%', up: false, tooltip: '전월 대비 비용 증감률' },
  { label: '영업 이익', value: '₩ 3,010,000', change: '+38.2%', up: true, tooltip: '매출 - 비용' },
  { label: '현금 잔고', value: '₩ 142,800,000', change: '+2.3%', up: true, tooltip: '전 계좌 합산 잔고' },
]

// ─── 헬퍼 ─────────────────────────────────────────────────────────────

function statusToIndicator(s: TransactionStatus) {
  if (s === 'completed') return 'active' as const
  if (s === 'pending') return 'attention' as const
  return 'error' as const
}

function statusLabel(s: TransactionStatus) {
  if (s === 'completed') return '완료'
  if (s === 'pending') return '처리중'
  return '실패'
}

function typeToTagColor(t: TransactionType) {
  if (t === 'income') return 'semanticSuccess' as const
  if (t === 'expense') return 'semanticDanger' as const
  return 'blue' as const
}

function categoryColor(cat: string) {
  const map: Record<string, 'green' | 'blue' | 'orange' | 'red' | 'purple' | 'teal' | 'grey'> = {
    매출: 'green', 인프라: 'blue', 임차: 'orange', 마케팅: 'purple', 인건비: 'red', 비품: 'teal',
  }
  return map[cat] ?? 'grey'
}

// ─── 서브 컴포넌트 ────────────────────────────────────────────────────

function KpiCard({
  label, value, change, up, tooltip, loading,
}: {
  label: string; value: string; change: string; up: boolean; tooltip: string; loading?: boolean
}) {
  return (
    <div style={{
      flex: 1, minWidth: 200,
      background: 'var(--sys-surface-base)',
      border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-20) var(--spacing-24)',
    }}>
      {loading ? (
        <>
          <SkeletonText size="sm" />
          <div style={{ height: 'var(--spacing-8)' }} />
          <SkeletonText size="lg" />
          <div style={{ height: 'var(--spacing-8)' }} />
          <SkeletonText size="sm" />
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-8)' }}>
            <span style={{
              fontSize: 'var(--label-xs-medium-fontSize)',
              fontWeight: 'var(--label-xs-medium-fontWeight)',
              lineHeight: 'var(--label-xs-medium-lineHeight)',
              color: 'var(--sys-content-neutral-muted)',
            }}>{label}</span>
            <Tooltip density="compact" emphasis="neutral" placement="top" content={tooltip}>
              <span style={{
                fontSize: 'var(--caption-lg-regular-fontSize)',
                color: 'var(--sys-content-neutral-muted)',
                cursor: 'default',
              }}>ℹ</span>
            </Tooltip>
          </div>
          {/* KPI 값: 22px — 디자인 시스템 스케일 외 크기, 토큰 없음 */}
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--sys-content-neutral-strong)', marginBottom: 'var(--spacing-8)' }}>
            {value}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
            <span style={{
              fontSize: 'var(--label-xxs-strong-fontSize)',
              fontWeight: 'var(--label-xxs-strong-fontWeight)',
              lineHeight: 'var(--label-xxs-strong-lineHeight)',
              color: up ? 'var(--sys-content-semantic-success)' : 'var(--sys-content-semantic-danger)',
            }}>
              {up ? '▲' : '▼'} {change}
            </span>
            <span style={{
              fontSize: 'var(--caption-lg-regular-fontSize)',
              fontWeight: 'var(--caption-lg-regular-fontWeight)',
              color: 'var(--sys-content-neutral-muted)',
            }}>전월 대비</span>
          </div>
        </>
      )}
    </div>
  )
}

// ─── 메인 페이지 ──────────────────────────────────────────────────────

export function FinanceDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [period, setPeriod] = useState('month')
  const [searchVal, setSearchVal] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [page, setPage] = useState(1)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [detailTx, setDetailTx] = useState<Transaction | null>(null)
  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [autoRefresh, setAutoRefresh] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [alertDismissed, setAlertDismissed] = useState(false)
  const [loading] = useState(false)

  const [newTxDesc, setNewTxDesc] = useState('')
  const [newTxAmount, setNewTxAmount] = useState('')

  const filtered = MOCK_TRANSACTIONS.filter(tx => {
    const matchSearch = !searchVal || tx.description.includes(searchVal) || tx.category.includes(searchVal)
    const matchType = !typeFilter || tx.type === typeFilter
    const matchStatus = !statusFilter || tx.status === statusFilter
    return matchSearch && matchType && matchStatus
  })

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleAll = () => {
    if (selectedIds.size === filtered.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(filtered.map(t => t.id)))
    }
  }

  const handleAddTx = () => {
    setAddDialogOpen(false)
    setNewTxDesc('')
    setNewTxAmount('')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const txColumns: TableColumnDef<Transaction>[] = [
    {
      key: 'date',
      header: '날짜',
      width: 120,
      cell: (tx) => tx.date,
    },
    {
      key: 'description',
      header: '내용',
      cell: (tx) => (
        <TableCellStrong overline={tx.account} title={tx.description} />
      ),
    },
    {
      key: 'category',
      header: '카테고리',
      width: 110,
      cell: (tx) => (
        <Tag color={categoryColor(tx.category)} tone="soft" size="sm">{tx.category}</Tag>
      ),
    },
    {
      key: 'type',
      header: '유형',
      width: 80,
      cell: (tx) => (
        <Tag color={typeToTagColor(tx.type)} tone="soft" size="sm">
          {tx.type === 'income' ? '수입' : tx.type === 'expense' ? '지출' : '이체'}
        </Tag>
      ),
    },
    {
      key: 'amount',
      header: '금액',
      width: 150,
      align: 'right',
      cell: (tx) => {
        const isNeg = tx.amount < 0
        return (
          <span style={{
            fontSize: 'var(--label-sm-semibold-fontSize)',
            fontWeight: 'var(--label-sm-semibold-fontWeight)',
            color: isNeg ? 'var(--sys-content-semantic-danger)' : 'var(--sys-content-semantic-success)',
          }}>
            {isNeg ? '-' : '+'}₩ {Math.abs(tx.amount).toLocaleString()}
          </span>
        )
      },
    },
    {
      key: 'status',
      header: '상태',
      width: 100,
      cell: (tx) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
          <StatusIndicator size="xs" tone={statusToIndicator(tx.status)} />
          <span>{statusLabel(tx.status)}</span>
        </div>
      ),
    },
    {
      key: 'action',
      header: '',
      width: 60,
      cell: (tx) => (
        <TextButton variant="plain" tone="accent" size="xs" onClick={() => setDetailTx(tx)}>
          상세
        </TextButton>
      ),
    },
  ]

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'IGTSans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      background: 'var(--sys-background-base)',
      color: 'var(--sys-content-neutral-strong)',
    }}>

      {/* ── 사이드 네비게이션 ──────────────────────────── */}
      <aside style={{
        width: 220,
        flexShrink: 0,
        background: 'var(--sys-surface-base)',
        borderRight: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* 로고 영역 */}
        <div style={{
          padding: 'var(--spacing-20) var(--spacing-20) var(--spacing-16)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-8)',
          borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
        }}>
          {/* fontWeight 800 — 토큰 미정의 예외 허용 */}
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-md)',
            background: 'var(--sys-container-brand-default)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 'var(--label-sm-semibold-fontSize)', fontWeight: 800,
            color: 'var(--sys-content-on-brand-solid-default)',
          }}>
            F
          </div>
          <div>
            <div style={{
              fontSize: 'var(--label-sm-semibold-fontSize)',
              fontWeight: 'var(--label-sm-semibold-fontWeight)',
              lineHeight: 'var(--label-sm-semibold-lineHeight)',
              color: 'var(--sys-content-neutral-strong)',
            }}>FinanceOS</div>
            <div style={{
              fontSize: 'var(--caption-md-regular-fontSize)',
              fontWeight: 'var(--caption-md-regular-fontWeight)',
              lineHeight: 'var(--caption-md-regular-lineHeight)',
              color: 'var(--sys-content-neutral-muted)',
            }}>회계·재무 관리</div>
          </div>
        </div>

        {/* 네비 메뉴 */}
        <div style={{ flex: 1, padding: 'var(--spacing-12) 0' }}>
          <SideNavigation size="md" tone="accent" items={[
            { label: '대시보드', href: '#', depth: 1, state: 'current' },
            { label: '매출 관리', href: '#', depth: 1 },
            { label: '매출 현황', href: '#', depth: 2 },
            { label: '청구서', href: '#', depth: 2 },
            { label: '비용 관리', href: '#', depth: 1 },
            { label: '지출 현황', href: '#', depth: 2 },
            { label: '예산 계획', href: '#', depth: 2 },
            { label: '결산', href: '#', depth: 1 },
            { label: '월별 결산', href: '#', depth: 2 },
            { label: '세금 신고', href: '#', depth: 2 },
            { label: '보고서', href: '#', depth: 1 },
            { label: '설정', href: '#', depth: 1 },
          ]} />
        </div>

        {/* 사용자 프로필 */}
        <div style={{
          padding: 'var(--spacing-12) var(--spacing-16)',
          borderTop: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
          display: 'flex', alignItems: 'center', gap: 'var(--spacing-10)',
        }}>
          <Avatar size="sm" shape="circle" fallback="KM" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 'var(--body-xxs-semibold-fontSize)',
              fontWeight: 'var(--body-xxs-semibold-fontWeight)',
              lineHeight: 'var(--body-xxs-semibold-lineHeight)',
              color: 'var(--sys-content-neutral-strong)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>김민준</div>
            <div style={{
              fontSize: 'var(--caption-md-regular-fontSize)',
              fontWeight: 'var(--caption-md-regular-fontWeight)',
              lineHeight: 'var(--caption-md-regular-lineHeight)',
              color: 'var(--sys-content-neutral-muted)',
            }}>재무팀 팀장</div>
          </div>
          <Badge kind="dot" tone="accent" />
        </div>
      </aside>

      {/* ── 메인 콘텐츠 ───────────────────────────────── */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'auto' }}>

        {/* 상단 헤더 */}
        <header style={{
          padding: 'var(--spacing-16) var(--spacing-32)',
          background: 'var(--sys-surface-base)',
          borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 'var(--spacing-16)',
        }}>
          <div>
            <Breadcrumb
              separator="chevron"
              leading="home"
              items={[{ label: '홈', href: '#' }, { label: '재무 관리', href: '#' }, { label: '대시보드' }]}
            />
            <h1 style={{
              margin: 'var(--spacing-4) 0 0',
              fontSize: 'var(--heading-md-bold-fontSize)',
              fontWeight: 'var(--heading-md-bold-fontWeight)',
              lineHeight: 'var(--heading-md-bold-lineHeight)',
              color: 'var(--sys-content-neutral-strong)',
            }}>
              재무 대시보드
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
            <Switch
              size="sm"
              on={autoRefresh}
              onChange={setAutoRefresh}
              label="자동 새로고침"
            />
            <Divider direction="vertical" emphasis="weak" />
            <Tooltip density="compact" emphasis="neutral" placement="bottom" content="거래 내역 내보내기 (CSV/Excel)">
              <IconButton
                tone="neutral"
                variant="outline"
                size="sm"
                icon="↓"
                aria-label="내보내기"
              />
            </Tooltip>
            <Button tone="primary" variant="fill" size="sm" onClick={() => setAddDialogOpen(true)}>
              + 거래 추가
            </Button>
          </div>
        </header>

        {/* 콘텐츠 영역 */}
        <div style={{ padding: 'var(--spacing-24) var(--spacing-32)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>

          {/* 마감 알럿 */}
          {!alertDismissed && (
            <Alert type="warning" title="3월 결산 마감 임박" onDismiss={() => setAlertDismissed(true)}>
              3월 월말 결산이 3월 31일까지 완료되어야 합니다. 미처리 거래 2건이 있습니다.
            </Alert>
          )}

          {/* 탭 */}
          <Tab
            variant="underline"
            size="md"
            layout="fixed"
            value={activeTab}
            tabs={[
              { label: '개요', value: 'overview' },
              { label: '거래 내역', value: 'transactions' },
              { label: '비용 분석', value: 'expenses' },
              { label: '결산', value: 'settlement' },
            ]}
            onChange={setActiveTab}
          />

          {/* ── 개요 탭 ─── */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>

              {/* 기간 선택 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                  <SegmentedControl
                    size="sm"
                    content="text"
                    value={period}
                    segments={[
                      { label: '주간', value: 'week' },
                      { label: '월간', value: 'month' },
                      { label: '분기', value: 'quarter' },
                      { label: '연간', value: 'year' },
                    ]}
                    onChange={setPeriod}
                  />
                  <Select
                    type="outlined"
                    size="xs"
                    value="2026-03"
                    options={[
                      { label: '2026년 3월', value: '2026-03' },
                      { label: '2026년 2월', value: '2026-02' },
                      { label: '2026년 1월', value: '2026-01' },
                    ]}
                  />
                </div>
                <TextButton variant="chevron" tone="accent" size="sm">
                  상세 보고서 보기
                </TextButton>
              </div>

              {/* KPI 카드 */}
              <div style={{ display: 'flex', gap: 'var(--spacing-16)', flexWrap: 'wrap' }}>
                {KPI_DATA.map(kpi => (
                  <KpiCard key={kpi.label} {...kpi} loading={loading} />
                ))}
              </div>

              {/* 차트 영역 */}
              <div style={{
                background: 'var(--sys-surface-base)',
                border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-20) var(--spacing-24)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-16)' }}>
                  <span style={{
                    fontSize: 'var(--body-sm-semibold-fontSize)',
                    fontWeight: 'var(--body-sm-semibold-fontWeight)',
                    lineHeight: 'var(--body-sm-semibold-lineHeight)',
                    color: 'var(--sys-content-neutral-strong)',
                  }}>매출 / 비용 추이</span>
                  <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
                    <SelectChip selected size="sm">매출</SelectChip>
                    <SelectChip selected={false} size="sm">비용</SelectChip>
                    <SelectChip selected={false} size="sm">이익</SelectChip>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'flex-end', height: 160 }}>
                  {[65, 80, 55, 90, 72, 85, 95, 68, 78, 88, 92, 75].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: 'var(--sys-container-brand-tint-default)',
                        borderRadius: '4px 4px 0 0',
                        border: 'var(--border-defalut) solid var(--sys-border-brand-subtle)',
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-8)' }}>
                  {['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'].map(m => (
                    <span key={m} style={{
                      fontSize: 'var(--caption-md-regular-fontSize)',
                      fontWeight: 'var(--caption-md-regular-fontWeight)',
                      color: 'var(--sys-content-neutral-muted)',
                      flex: 1, textAlign: 'center',
                    }}>{m}</span>
                  ))}
                </div>
              </div>

              {/* 최근 거래 요약 */}
              <div style={{
                background: 'var(--sys-surface-base)',
                border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}>
                <div style={{ padding: 'var(--spacing-16) var(--spacing-20)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: 'var(--body-sm-semibold-fontSize)',
                    fontWeight: 'var(--body-sm-semibold-fontWeight)',
                    lineHeight: 'var(--body-sm-semibold-lineHeight)',
                  }}>최근 거래</span>
                  <TextButton variant="chevron" tone="accent" size="sm" onClick={() => setActiveTab('transactions')}>
                    전체 보기
                  </TextButton>
                </div>
                <Divider direction="horizontal" emphasis="weak" />
                {MOCK_TRANSACTIONS.slice(0, 5).map(tx => (
                  <div key={tx.id} style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)',
                    padding: 'var(--spacing-12) var(--spacing-20)',
                    borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                  }}>
                    <StatusIndicator size="sm" tone={statusToIndicator(tx.status)} />
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 'var(--label-sm-medium-fontSize)',
                        fontWeight: 'var(--label-sm-medium-fontWeight)',
                        lineHeight: 'var(--label-sm-medium-lineHeight)',
                        color: 'var(--sys-content-neutral-strong)',
                      }}>{tx.description}</div>
                      <div style={{
                        fontSize: 'var(--caption-lg-regular-fontSize)',
                        fontWeight: 'var(--caption-lg-regular-fontWeight)',
                        color: 'var(--sys-content-neutral-muted)',
                      }}>{tx.date}</div>
                    </div>
                    <Tag color={categoryColor(tx.category)} tone="soft" size="xs">{tx.category}</Tag>
                    <span style={{
                      fontSize: 'var(--label-sm-semibold-fontSize)',
                      fontWeight: 'var(--label-sm-semibold-fontWeight)',
                      minWidth: 120, textAlign: 'right',
                      color: tx.amount < 0 ? 'var(--sys-content-semantic-danger)' : 'var(--sys-content-semantic-success)',
                    }}>
                      {tx.amount < 0 ? '-' : '+'}₩ {Math.abs(tx.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ── 거래 내역 탭 ─── */}
          {activeTab === 'transactions' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>

              {/* 필터 바 */}
              <div style={{
                background: 'var(--sys-surface-base)',
                border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-16) var(--spacing-20)',
                display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)', flexWrap: 'wrap',
              }}>
                <SearchField
                  size="md"
                  value={searchVal}
                  placeholder="거래 내역 검색..."
                  onChange={setSearchVal}
                  onClear={() => setSearchVal('')}
                />
                <Select
                  type="outlined"
                  size="sm"
                  value={typeFilter}
                  placeholder="거래 유형"
                  options={[
                    { label: '전체', value: '' },
                    { label: '수입', value: 'income' },
                    { label: '지출', value: 'expense' },
                    { label: '이체', value: 'transfer' },
                  ]}
                  onChange={setTypeFilter}
                />
                <Select
                  type="outlined"
                  size="sm"
                  value={statusFilter}
                  placeholder="처리 상태"
                  options={[
                    { label: '전체', value: '' },
                    { label: '완료', value: 'completed' },
                    { label: '처리중', value: 'pending' },
                    { label: '실패', value: 'failed' },
                  ]}
                  onChange={setStatusFilter}
                />
                <Select
                  type="outlined"
                  size="sm"
                  value=""
                  placeholder="기간 선택"
                  options={[
                    { label: '이번 달', value: 'this-month' },
                    { label: '지난 달', value: 'last-month' },
                    { label: '최근 3개월', value: '3months' },
                    { label: '직접 입력', value: 'custom' },
                  ]}
                />
                <div style={{ flex: 1 }} />
                {selectedIds.size > 0 && (
                  <ButtonGroup layout="inline" size="sm">
                    <Button tone="secondary" variant="outline" size="sm"
                      onClick={() => setSelectedIds(new Set())}>
                      선택 해제 ({selectedIds.size})
                    </Button>
                    <Button tone="danger" variant="soft" size="sm">삭제</Button>
                  </ButtonGroup>
                )}
              </div>

              {/* 테이블 */}
              <div style={{
                border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}>
                <Table
                  columns={txColumns}
                  data={filtered}
                  size="md"
                  selectable
                  selectedKeys={selectedIds}
                  onSelectAll={toggleAll}
                  onSelectRow={toggleSelect}
                  getRowKey={tx => tx.id}
                  loading={loading}
                  empty="검색 결과가 없습니다."
                />
              </div>

              {/* 페이지네이션 */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination
                  variant="default"
                  size="md"
                  currentPage={page}
                  totalPages={Math.ceil(filtered.length / 10) || 1}
                  onChange={setPage}
                />
              </div>
            </div>
          )}

          {/* ── 비용 분석 탭 ─── */}
          {activeTab === 'expenses' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
              <Alert type="info" title="비용 분석">
                이번 달 비용이 예산 대비 8.3% 초과되었습니다. 인건비 항목을 확인해 주세요.
              </Alert>

              <div style={{ display: 'flex', gap: 'var(--spacing-16)' }}>
                {/* 카테고리별 비용 */}
                <div style={{
                  flex: 2,
                  background: 'var(--sys-surface-base)',
                  border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}>
                  <div style={{ padding: 'var(--spacing-16) var(--spacing-20)', borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)' }}>
                    <span style={{
                      fontSize: 'var(--body-sm-semibold-fontSize)',
                      fontWeight: 'var(--body-sm-semibold-fontWeight)',
                      lineHeight: 'var(--body-sm-semibold-lineHeight)',
                    }}>카테고리별 비용</span>
                  </div>
                  {[
                    { cat: '인건비', amount: 18500000, budget: 18000000, pct: 70 },
                    { cat: '임차', amount: 2200000, budget: 2200000, pct: 8 },
                    { cat: '마케팅', amount: 850000, budget: 1000000, pct: 3 },
                    { cat: '인프라', amount: 1540000, budget: 1500000, pct: 6 },
                    { cat: '비품', amount: 3200000, budget: 2000000, pct: 12 },
                  ].map(item => (
                    <div key={item.cat} style={{ padding: 'var(--spacing-14) var(--spacing-20)', borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-8)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                          <Tag color={categoryColor(item.cat)} tone="soft" size="sm">{item.cat}</Tag>
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'center' }}>
                          <span style={{
                            fontSize: 'var(--body-xxs-regular-fontSize)',
                            fontWeight: 'var(--body-xxs-regular-fontWeight)',
                            color: 'var(--sys-content-neutral-muted)',
                          }}>
                            예산 ₩{item.budget.toLocaleString()}
                          </span>
                          <span style={{
                            fontSize: 'var(--label-sm-semibold-fontSize)',
                            fontWeight: 'var(--label-sm-semibold-fontWeight)',
                            color: item.amount > item.budget
                              ? 'var(--sys-content-semantic-danger)'
                              : 'var(--sys-content-neutral-strong)',
                          }}>
                            ₩{item.amount.toLocaleString()}
                          </span>
                          {item.amount > item.budget && (
                            <Tag color="semanticDanger" tone="soft" size="xs">초과</Tag>
                          )}
                        </div>
                      </div>
                      {/* 프로그레스 바: height 6, borderRadius 3 — 구조적 크기, 토큰 없음 */}
                      <div style={{ height: 6, background: 'var(--sys-border-neutral-subtle)', borderRadius: 3 }}>
                        <div style={{
                          height: '100%',
                          width: `${Math.min(item.pct, 100)}%`,
                          background: item.amount > item.budget
                            ? 'var(--sys-container-semantic-danger-default)'
                            : 'var(--sys-container-brand-default)',
                          borderRadius: 3,
                        }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 비용 요약 + 아코디언 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <div style={{
                    background: 'var(--sys-surface-base)',
                    border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-16) var(--spacing-20)',
                  }}>
                    <div style={{
                      fontSize: 'var(--body-sm-semibold-fontSize)',
                      fontWeight: 'var(--body-sm-semibold-fontWeight)',
                      lineHeight: 'var(--body-sm-semibold-lineHeight)',
                      marginBottom: 'var(--spacing-16)',
                    }}>비용 요약</div>
                    {[
                      { label: '총 비용', value: '₩ 26,290,000', color: 'var(--sys-content-semantic-danger)' },
                      { label: '예산', value: '₩ 24,700,000', color: 'var(--sys-content-neutral-strong)' },
                      { label: '초과액', value: '₩ 1,590,000', color: 'var(--sys-content-semantic-danger)' },
                      { label: '예산 달성률', value: '106.4%', color: 'var(--sys-content-semantic-danger)' },
                    ].map(row => (
                      <div key={row.label} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: 'var(--spacing-8) 0',
                        borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                      }}>
                        <span style={{
                          fontSize: 'var(--body-xxs-regular-fontSize)',
                          fontWeight: 'var(--body-xxs-regular-fontWeight)',
                          color: 'var(--sys-content-neutral-muted)',
                        }}>{row.label}</span>
                        <span style={{
                          fontSize: 'var(--label-sm-semibold-fontSize)',
                          fontWeight: 'var(--label-sm-semibold-fontWeight)',
                          color: row.color,
                        }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <Accordion type="contained" size="md" state="collapsed" title="인건비 상세">
                    <div style={{
                      fontSize: 'var(--body-xxs-regular-fontSize)',
                      fontWeight: 'var(--body-xxs-regular-fontWeight)',
                      lineHeight: 'var(--body-xxs-regular-lineHeight)',
                      color: 'var(--sys-content-neutral-default)',
                    }}>
                      정규직 급여 ₩15,000,000<br />
                      계약직 급여 ₩2,500,000<br />
                      4대보험 ₩1,000,000
                    </div>
                  </Accordion>
                  <Accordion type="contained" size="md" state="collapsed" title="인프라 비용 상세">
                    <div style={{
                      fontSize: 'var(--body-xxs-regular-fontSize)',
                      fontWeight: 'var(--body-xxs-regular-fontWeight)',
                      lineHeight: 'var(--body-xxs-regular-lineHeight)',
                      color: 'var(--sys-content-neutral-default)',
                    }}>
                      AWS 서버 ₩890,000<br />
                      도메인/SSL ₩200,000<br />
                      소프트웨어 라이선스 ₩450,000
                    </div>
                  </Accordion>
                  <Accordion type="contained" size="md" state="collapsed" title="비품 비용 상세">
                    <div style={{
                      fontSize: 'var(--body-xxs-regular-fontSize)',
                      fontWeight: 'var(--body-xxs-regular-fontWeight)',
                      lineHeight: 'var(--body-xxs-regular-lineHeight)',
                      color: 'var(--sys-content-neutral-default)',
                    }}>
                      노트북 2대 ₩3,200,000<br />
                      <Tag color="semanticDanger" tone="soft" size="xs">예산 초과</Tag>
                    </div>
                  </Accordion>
                </div>
              </div>
            </div>
          )}

          {/* ── 결산 탭 ─── */}
          {activeTab === 'settlement' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                  fontSize: 'var(--body-sm-semibold-fontSize)',
                  fontWeight: 'var(--body-sm-semibold-fontWeight)',
                  lineHeight: 'var(--body-sm-semibold-lineHeight)',
                }}>2026년 3월 결산</div>
                <ButtonGroup layout="inline" size="sm">
                  <Button tone="secondary" variant="outline" size="sm">임시 저장</Button>
                  <Button tone="primary" variant="fill" size="sm">결산 확정</Button>
                </ButtonGroup>
              </div>

              <Alert type="warning" title="미처리 항목">
                결산 확정 전 미처리 거래 2건을 확인하고 처리해 주세요.
              </Alert>

              {/* 손익계산서 요약 */}
              <div style={{
                background: 'var(--sys-surface-base)',
                border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}>
                <div style={{
                  padding: 'var(--spacing-16) var(--spacing-24)',
                  borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                  fontSize: 'var(--body-sm-semibold-fontSize)',
                  fontWeight: 'var(--body-sm-semibold-fontWeight)',
                  lineHeight: 'var(--body-sm-semibold-lineHeight)',
                }}>
                  손익계산서 요약
                </div>
                {[
                  { label: '매출액', value: '₩ 29,300,000', indent: 0, bold: false },
                  { label: '매출원가', value: '(₩ 15,000,000)', indent: 1, bold: false },
                  { label: '매출총이익', value: '₩ 14,300,000', indent: 0, bold: true },
                  { label: '판매관리비', value: '(₩ 11,290,000)', indent: 1, bold: false },
                  { label: '영업이익', value: '₩ 3,010,000', indent: 0, bold: true },
                  { label: '영업외수익', value: '₩ 120,000', indent: 1, bold: false },
                  { label: '영업외비용', value: '(₩ 45,000)', indent: 1, bold: false },
                  { label: '세전이익', value: '₩ 3,085,000', indent: 0, bold: true },
                  { label: '법인세', value: '(₩ 308,500)', indent: 1, bold: false },
                  { label: '당기순이익', value: '₩ 2,776,500', indent: 0, bold: true },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: `var(--spacing-10) ${24 + row.indent * 20}px var(--spacing-10) var(--spacing-24)`,
                    borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
                    background: row.bold ? 'var(--sys-surface-subtle)' : 'transparent',
                  }}>
                    <span style={{
                      fontSize: row.bold ? 'var(--label-sm-semibold-fontSize)' : 'var(--body-xxs-regular-fontSize)',
                      fontWeight: row.bold ? 'var(--label-sm-semibold-fontWeight)' : 'var(--body-xxs-regular-fontWeight)',
                      lineHeight: row.bold ? 'var(--label-sm-semibold-lineHeight)' : 'var(--body-xxs-regular-lineHeight)',
                      color: row.bold ? 'var(--sys-content-neutral-strong)' : 'var(--sys-content-neutral-default)',
                    }}>
                      {row.label}
                    </span>
                    <span style={{
                      fontSize: row.bold ? 'var(--label-sm-semibold-fontSize)' : 'var(--body-xxs-regular-fontSize)',
                      fontWeight: row.bold ? 'var(--label-sm-semibold-fontWeight)' : 'var(--body-xxs-regular-fontWeight)',
                      color: row.value.startsWith('(') ? 'var(--sys-content-semantic-danger)' : 'var(--sys-content-neutral-strong)',
                    }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ── 거래 상세 다이얼로그 ─── */}
      <Dialog
        size="md (modal)"
        open={detailTx !== null}
        title="거래 상세 정보"
        onClose={() => setDetailTx(null)}
      >
        {detailTx && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
              <Tag color={typeToTagColor(detailTx.type)} tone="soft" size="sm">
                {detailTx.type === 'income' ? '수입' : detailTx.type === 'expense' ? '지출' : '이체'}
              </Tag>
              <Tag color={categoryColor(detailTx.category)} tone="soft" size="sm">{detailTx.category}</Tag>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginLeft: 'var(--spacing-4)' }}>
                <StatusIndicator size="xs" tone={statusToIndicator(detailTx.status)} />
                <span style={{
                  fontSize: 'var(--caption-lg-regular-fontSize)',
                  fontWeight: 'var(--caption-lg-regular-fontWeight)',
                  color: 'var(--sys-content-neutral-muted)',
                }}>{statusLabel(detailTx.status)}</span>
              </div>
            </div>
            <Divider direction="horizontal" emphasis="weak" />
            {[
              { label: '거래 ID', value: detailTx.id },
              { label: '날짜', value: detailTx.date },
              { label: '내용', value: detailTx.description },
              { label: '계좌', value: detailTx.account },
              { label: '금액', value: `${detailTx.amount < 0 ? '-' : '+'}₩ ${Math.abs(detailTx.amount).toLocaleString()}` },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{
                  fontSize: 'var(--body-xxs-regular-fontSize)',
                  fontWeight: 'var(--body-xxs-regular-fontWeight)',
                  color: 'var(--sys-content-neutral-muted)',
                  minWidth: 80,
                }}>{row.label}</span>
                <span style={{
                  fontSize: 'var(--label-sm-medium-fontSize)',
                  fontWeight: 'var(--label-sm-medium-fontWeight)',
                  color: 'var(--sys-content-neutral-strong)',
                }}>{row.value}</span>
              </div>
            ))}
            <Divider direction="horizontal" emphasis="weak" />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-8)' }}>
              <Button tone="secondary" variant="outline" size="sm" onClick={() => setDetailTx(null)}>닫기</Button>
              <Button tone="danger" variant="soft" size="sm">삭제</Button>
              <Button tone="primary" variant="fill" size="sm">수정</Button>
            </div>
          </div>
        )}
      </Dialog>

      {/* ── 거래 추가 다이얼로그 ─── */}
      <Dialog
        size="md (modal)"
        open={addDialogOpen}
        title="새 거래 추가"
        onClose={() => setAddDialogOpen(false)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <TextField
            variant="outline"
            size="md"
            label="거래 내용"
            placeholder="예: 삼성전자 납품 대금"
            value={newTxDesc}
            onChange={setNewTxDesc}
          />
          <TextField
            variant="outline"
            size="md"
            label="금액"
            placeholder="예: 5000000"
            value={newTxAmount}
            onChange={setNewTxAmount}
            helperText="수입은 양수, 지출은 음수로 입력하세요"
          />
          <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
            <div style={{ flex: 1 }}>
              <Select
                type="outlined"
                size="md"
                placeholder="거래 유형"
                options={[
                  { label: '수입', value: 'income' },
                  { label: '지출', value: 'expense' },
                  { label: '이체', value: 'transfer' },
                ]}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Select
                type="outlined"
                size="md"
                placeholder="카테고리"
                options={[
                  { label: '매출', value: '매출' },
                  { label: '인건비', value: '인건비' },
                  { label: '인프라', value: '인프라' },
                  { label: '마케팅', value: '마케팅' },
                  { label: '임차', value: '임차' },
                  { label: '비품', value: '비품' },
                ]}
              />
            </div>
          </div>
          <Divider direction="horizontal" emphasis="weak" />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-8)' }}>
            <Button tone="secondary" variant="outline" size="md" onClick={() => setAddDialogOpen(false)}>취소</Button>
            <Button
              tone="primary"
              variant="fill"
              size="md"
              onClick={handleAddTx}
              state={!newTxDesc || !newTxAmount ? 'disabled' : 'normal'}
            >
              추가
            </Button>
          </div>
        </div>
      </Dialog>

      {/* ── 토스트 ─── */}
      {showToast && (
        <div style={{ position: 'fixed', bottom: 'var(--spacing-24)', right: 'var(--spacing-24)', zIndex: 9999 }}>
          <Toast
            type="success"
            message="거래가 성공적으로 추가되었습니다."
            dismissible
            onDismiss={() => setShowToast(false)}
          />
        </div>
      )}
    </div>
  )
}
