import React, { useState } from 'react'

import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'
import { IconButton } from '../../components/IconButton'
import { FloatingButton } from '../../components/FloatingButton'
import { ButtonGroup } from '../../components/ButtonGroup'
import { Link } from '../../components/Link'
import { TextField } from '../../components/TextField'
import { TextArea } from '../../components/TextArea'
import { SearchField } from '../../components/SearchField'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'
import { Radio } from '../../components/Radio'
import { Switch } from '../../components/Switch'
import { Rating } from '../../components/Rating'
import { NumberStepper } from '../../components/NumberStepper'
import { ActionChip, SelectChip } from '../../components/Chip'
import { SegmentedControl } from '../../components/SegmentedControl'
import { Tab } from '../../components/Tab'
import { Badge } from '../../components/Badge'
import { Tag } from '../../components/Tag'
import { Avatar } from '../../components/Avatar'
import { Divider } from '../../components/Divider'
import { StatusIndicator } from '../../components/StatusIndicator'
import { Toast } from '../../components/Toast'
import { Alert } from '../../components/Alert'
import { Dialog } from '../../components/Dialog'
import { Tooltip } from '../../components/Tooltip'
import { Popover } from '../../components/Popover'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Pagination } from '../../components/Pagination'
import { Accordion } from '../../components/Accordion'
import { SideNavigation } from '../../components/Navigation'
import { SkeletonRect, SkeletonText, SkeletonCircle } from '../../components/Skeleton'
import { Table, TableCellStrong } from '../../components/Table'
import type { TableColumnDef } from '../../types/components'

// ── Layout helpers ────────────────────────────────────────────

const CATEGORIES = [
  { id: 'actions',    label: 'Actions' },
  { id: 'inputs',     label: 'Form Inputs' },
  { id: 'selection',  label: 'Selection' },
  { id: 'display',    label: 'Display' },
  { id: 'feedback',   label: 'Feedback' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'loading',    label: 'Loading' },
  { id: 'table',      label: 'Table' },
]

function ComponentSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ scrollMarginTop: 24 }}>
      <div style={{
        fontSize: 20, fontWeight: 700,
        color: 'var(--sys-content-neutral-strong)',
        paddingBottom: 'var(--spacing-12)',
        marginBottom: 'var(--spacing-20)',
        borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
      }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
        {children}
      </div>
    </section>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--sys-content-neutral-muted)', marginBottom: 'var(--spacing-12)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {title}
      </div>
      <div style={{
        background: 'var(--sys-surface-base)',
        border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-20)',
      }}>
        {children}
      </div>
    </div>
  )
}

function Row({ children, wrap }: { children: React.ReactNode; wrap?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: wrap ? 'wrap' : undefined, alignItems: 'center', gap: 'var(--spacing-10)' }}>
      {children}
    </div>
  )
}

function Col({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-10)' }}>
      {children}
    </div>
  )
}

// ── Table mock data ────────────────────────────────────────────

interface TableRow { id: string; name: string; email: string; role: string; status: 'active' | 'inactive' | 'pending' }
const TABLE_DATA: TableRow[] = [
  { id: '1', name: '김민준', email: 'minjun@example.com', role: '개발자', status: 'active' },
  { id: '2', name: '이서연', email: 'seoyeon@example.com', role: '디자이너', status: 'active' },
  { id: '3', name: '박지호', email: 'jiho@example.com', role: '기획자', status: 'pending' },
  { id: '4', name: '최예린', email: 'yerin@example.com', role: '개발자', status: 'inactive' },
]

const TABLE_COLS: TableColumnDef<TableRow>[] = [
  { key: 'user', header: '사용자', cell: r => <TableCellStrong overline={r.email} title={r.name} /> },
  { key: 'role', header: '역할', width: 100, cell: r => r.role },
  { key: 'status', header: '상태', width: 110, cell: r => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
      <StatusIndicator size="xs" tone={r.status === 'active' ? 'active' : r.status === 'pending' ? 'attention' : 'inactive'} />
      <span>{ r.status === 'active' ? '활성' : r.status === 'pending' ? '대기' : '비활성' }</span>
    </div>
  )},
  { key: 'tag', header: '태그', width: 110, cell: r => (
    <Tag color={r.status === 'active' ? 'semanticSuccess' : r.status === 'pending' ? 'yellow' : 'grey'} tone="soft" size="sm">
      {r.status}
    </Tag>
  )},
]

// ── Main ──────────────────────────────────────────────────────

export function Showcase() {
  // Form inputs state
  const [textVal, setTextVal]       = useState('')
  const [searchVal, setSearchVal]   = useState('')
  const [textAreaVal, setTextAreaVal] = useState('')
  const [selectVal, setSelectVal]   = useState('')
  const [checkVal, setCheckVal]     = useState<'checked'|'unchecked'|'indeterminate'>('unchecked')
  const [radioVal, setRadioVal]     = useState(false)
  const [switchOn, setSwitchOn]     = useState(false)
  const [rating, setRating]         = useState<0|1|2|3|4|5>(3)
  const [stepVal, setStepVal]       = useState(1)

  // Selection state
  const [segVal, setSegVal]         = useState('overview')
  const [tabVal, setTabVal]         = useState('tab1')
  const [chipSel, setChipSel]       = useState(false)

  // Feedback state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)

  // Pagination state
  const [page, setPage]             = useState(1)

  // Table state
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'IGTSans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      background: 'var(--sys-background-base)',
      color: 'var(--sys-content-neutral-strong)',
    }}>

      {/* ── 사이드바 ─────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: 200,
        flexShrink: 0,
        background: 'var(--sys-surface-base)',
        borderRight: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)',
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--spacing-24) 0',
        overflowY: 'auto',
      }}>
        <div style={{ padding: '0 var(--spacing-20) var(--spacing-20)', borderBottom: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)', marginBottom: 'var(--spacing-12)' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--sys-content-neutral-strong)' }}>IGT Design</div>
          <div style={{ fontSize: 12, color: 'var(--sys-content-neutral-muted)', marginTop: 2 }}>Component Showcase</div>
        </div>
        {CATEGORIES.map(cat => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            style={{
              display: 'block',
              padding: 'var(--spacing-8) var(--spacing-20)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--sys-content-neutral-muted)',
              textDecoration: 'none',
              borderRadius: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--sys-content-neutral-strong)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--sys-content-neutral-muted)')}
          >
            {cat.label}
          </a>
        ))}
      </nav>

      {/* ── 메인 콘텐츠 ─────────────────────────────────────── */}
      <main style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-40) var(--spacing-40)' }}>
        <div style={{ maxWidth: 900, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-48)' }}>

          {/* 헤더 */}
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0, marginBottom: 'var(--spacing-6)' }}>Component Showcase</h1>
            <p style={{ fontSize: 14, color: 'var(--sys-content-neutral-muted)', margin: 0 }}>IGT Desktop Design System — 모든 컴포넌트 예시</p>
          </div>

          {/* ═══════════════════════════════════════════════════
              ACTIONS
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="actions" title="Actions">

            <Block title="Button — tone">
              <Row>
                <Button tone="primary" variant="fill">Primary</Button>
                <Button tone="secondary" variant="fill">Secondary</Button>
                <Button tone="danger" variant="fill">Danger</Button>
              </Row>
            </Block>

            <Block title="Button — variant">
              <Row>
                <Button tone="primary" variant="fill">Fill</Button>
                <Button tone="primary" variant="soft">Soft</Button>
                <Button tone="primary" variant="outline">Outline</Button>
                <Button tone="primary" variant="ghost">Ghost</Button>
              </Row>
            </Block>

            <Block title="Button — size">
              <Row>
                <Button size="xs">XSmall</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </Row>
            </Block>

            <Block title="Button — state">
              <Row>
                <Button state="normal">Normal</Button>
                <Button state="loading">Loading</Button>
                <Button state="disabled">Disabled</Button>
              </Row>
            </Block>

            <Block title="Button — density">
              <Row>
                <Button density="STANDARD">Standard</Button>
                <Button density="COMPACT">Compact</Button>
              </Row>
            </Block>

            <Block title="TextButton — variant · tone">
              <Col>
                <Row>
                  <TextButton variant="plain" tone="accent">Accent plain</TextButton>
                  <TextButton variant="underline" tone="accent">Accent underline</TextButton>
                  <TextButton variant="chevron" tone="accent">Accent chevron</TextButton>
                </Row>
                <Row>
                  <TextButton variant="plain" tone="neutral">Neutral</TextButton>
                  <TextButton variant="plain" tone="neutralMuted">NeutralMuted</TextButton>
                  <TextButton variant="plain" tone="danger">Danger</TextButton>
                </Row>
              </Col>
            </Block>

            <Block title="IconButton — variant">
              <Row>
                <IconButton variant="fill"    icon="★" aria-label="fill" />
                <IconButton variant="outline" icon="★" aria-label="outline" />
                <IconButton variant="ghost"   icon="★" aria-label="ghost" />
              </Row>
            </Block>

            <Block title="FloatingButton">
              <Row>
                <FloatingButton layout="standard" priority="brand"   icon="+" />
                <FloatingButton layout="standard" priority="neutral" icon="+" />
                <FloatingButton layout="standard" priority="subtle"  icon="+" />
                <FloatingButton layout="extended" priority="brand"   icon="+" label="추가" />
              </Row>
            </Block>

            <Block title="ButtonGroup">
              <Col>
                <ButtonGroup layout="inline" size="md">
                  <Button tone="secondary" variant="outline">취소</Button>
                  <Button tone="primary" variant="fill">저장</Button>
                </ButtonGroup>
                <ButtonGroup layout="stack" distribution="equal" size="md">
                  <Button tone="secondary" variant="outline">취소</Button>
                  <Button tone="primary" variant="fill">저장</Button>
                </ButtonGroup>
              </Col>
            </Block>

            <Block title="Link">
              <Row>
                <Link href="#" tone="brand" underline="always">Brand / always</Link>
                <Link href="#" tone="brand" underline="auto">Brand / auto</Link>
                <Link href="#" tone="neutral" underline="auto">Neutral / auto</Link>
              </Row>
            </Block>

          </ComponentSection>

          {/* ═══════════════════════════════════════════════════
              FORM INPUTS
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="inputs" title="Form Inputs">

            <Block title="TextField — variant">
              <Row>
                <TextField variant="fill"    size="md" label="이름" placeholder="Fill 입력" value={textVal} onChange={setTextVal} />
                <TextField variant="outline" size="md" label="이름" placeholder="Outline 입력" value={textVal} onChange={setTextVal} />
              </Row>
            </Block>

            <Block title="TextField — size">
              <Row>
                <TextField variant="outline" size="sm" placeholder="Small" />
                <TextField variant="outline" size="md" placeholder="Medium" />
                <TextField variant="outline" size="lg" placeholder="Large" />
              </Row>
            </Block>

            <Block title="TextField — invalid · helperText">
              <Row>
                <TextField variant="outline" size="md" label="이메일" placeholder="이메일 입력" invalid helperText="올바른 이메일을 입력하세요" />
                <TextField variant="outline" size="md" label="비밀번호" placeholder="비밀번호 입력" helperText="8자 이상 입력하세요" />
              </Row>
            </Block>

            <Block title="TextArea">
              <Row>
                <TextArea variant="fill"    size="md" label="내용" placeholder="Fill TextArea" value={textAreaVal} onChange={setTextAreaVal} />
                <TextArea variant="outline" size="md" label="내용" placeholder="Outline TextArea" value={textAreaVal} onChange={setTextAreaVal} />
              </Row>
            </Block>

            <Block title="SearchField">
              <Row>
                <SearchField size="md" placeholder="검색어를 입력하세요" value={searchVal} onChange={setSearchVal} />
                <SearchField size="md" density="COMPACT" placeholder="Compact" value={searchVal} onChange={setSearchVal} />
              </Row>
            </Block>

            <Block title="Select">
              <Row>
                <Select type="filled" size="md" value={selectVal} placeholder="선택하세요" options={[{ label: '옵션 1', value: '1' }, { label: '옵션 2', value: '2' }, { label: '옵션 3', value: '3' }]} onChange={setSelectVal} />
                <Select type="outlined" size="md" value={selectVal} placeholder="선택하세요" options={[{ label: '옵션 1', value: '1' }, { label: '옵션 2', value: '2' }]} onChange={setSelectVal} />
                <Select type="plain" size="md" value={selectVal} placeholder="선택하세요" options={[{ label: '옵션 1', value: '1' }, { label: '옵션 2', value: '2' }]} onChange={setSelectVal} />
              </Row>
            </Block>

            <Block title="Checkbox · Radio · Switch">
              <Row>
                <Checkbox size="md" value={checkVal} label="체크박스" onChange={v => setCheckVal(v as typeof checkVal)} />
                <Checkbox size="md" value="checked" label="Checked" />
                <Checkbox size="md" value="indeterminate" label="Indeterminate" />
                <Checkbox size="md" value="unchecked" label="Disabled" disabled />
              </Row>
              <div style={{ height: 'var(--spacing-12)' }} />
              <Row>
                <Radio size="md" selected={radioVal} label="라디오 버튼" onChange={setRadioVal} />
                <Radio size="md" selected={true}  label="Selected" />
                <Radio size="md" selected={false} label="Disabled" disabled />
              </Row>
              <div style={{ height: 'var(--spacing-12)' }} />
              <Row>
                <Switch on={switchOn} size="md" label="스위치" onChange={setSwitchOn} />
                <Switch on={true}  size="md" label="On" />
                <Switch on={false} size="md" label="Off" />
              </Row>
            </Block>

            <Block title="Rating">
              <Row>
                <Rating size="md" value={rating} onChange={v => setRating(v)} />
                <Rating size="sm" value={4} />
                <Rating size="xs" value={5} />
              </Row>
            </Block>

            <Block title="NumberStepper">
              <Row>
                <NumberStepper emphasis="fill"    size="md" value={stepVal} min={0} max={10} onChange={setStepVal} />
                <NumberStepper emphasis="outline" size="md" value={stepVal} min={0} max={10} onChange={setStepVal} />
                <NumberStepper emphasis="fill"    size="sm" value={stepVal} min={0} max={10} onChange={setStepVal} />
              </Row>
            </Block>

          </ComponentSection>

          {/* ═══════════════════════════════════════════════════
              SELECTION
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="selection" title="Selection">

            <Block title="ActionChip · SelectChip">
              <Row wrap>
                <ActionChip size="md">액션 칩</ActionChip>
                <ActionChip size="md" disabled>비활성</ActionChip>
                <SelectChip size="md" selected={chipSel} onClick={() => setChipSel(v => !v)}>선택 칩</SelectChip>
                <SelectChip size="md" selected variant="outline">Outline 선택됨</SelectChip>
                <SelectChip size="sm" selected>Small 선택됨</SelectChip>
              </Row>
            </Block>

            <Block title="SegmentedControl">
              <Col>
                <SegmentedControl
                  size="md"
                  content="text"
                  value={segVal}
                  segments={[{ label: '개요', value: 'overview' }, { label: '분석', value: 'analytics' }, { label: '보고서', value: 'reports' }]}
                  onChange={setSegVal}
                />
                <SegmentedControl
                  size="sm"
                  content="text"
                  value={segVal}
                  segments={[{ label: '일간', value: 'daily' }, { label: '주간', value: 'weekly' }, { label: '월간', value: 'monthly' }]}
                  onChange={setSegVal}
                />
              </Col>
            </Block>

            <Block title="Tab — underline · filled">
              <Col>
                <Tab
                  variant="underline"
                  size="md"
                  layout="fixed"
                  value={tabVal}
                  tabs={[{ label: '전체', value: 'tab1' }, { label: '진행중', value: 'tab2' }, { label: '완료', value: 'tab3' }, { label: '보류', value: 'tab4' }]}
                  onChange={setTabVal}
                />
                <Tab
                  variant="filled"
                  size="md"
                  layout="fixed"
                  value={tabVal}
                  tabs={[{ label: '전체', value: 'tab1' }, { label: '진행중', value: 'tab2' }, { label: '완료', value: 'tab3' }]}
                  onChange={setTabVal}
                />
              </Col>
            </Block>

          </ComponentSection>

          {/* ═══════════════════════════════════════════════════
              DISPLAY
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="display" title="Display">

            <Block title="Badge">
              <Row>
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <Button tone="secondary" variant="outline" size="sm">알림</Button>
                  <div style={{ position: 'absolute', top: -4, right: -4 }}><Badge kind="dot" tone="accent" /></div>
                </div>
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <Button tone="secondary" variant="outline" size="sm">메시지</Button>
                  <div style={{ position: 'absolute', top: -4, right: -4 }}><Badge kind="count" tone="urgent" count={12} /></div>
                </div>
                <Badge kind="dot" tone="accent" />
                <Badge kind="dot" tone="neutral" />
                <Badge kind="dot" tone="urgent" />
                <Badge kind="count" tone="accent" count={3} />
                <Badge kind="count" tone="urgent" count={99} />
              </Row>
            </Block>

            <Block title="Tag — color">
              <Row wrap>
                {(['grey','blue','green','orange','purple','red','teal','yellow'] as const).map(c => (
                  <Tag key={c} color={c} tone="soft" size="md">{c}</Tag>
                ))}
              </Row>
              <div style={{ height: 'var(--spacing-8)' }} />
              <Row wrap>
                {(['semanticDanger','semanticInfo','semanticSuccess','semanticWarning'] as const).map(c => (
                  <Tag key={c} color={c} tone="soft" size="md">{c}</Tag>
                ))}
              </Row>
            </Block>

            <Block title="Tag — tone · size">
              <Row>
                <Tag color="blue" tone="soft"    size="sm">Soft sm</Tag>
                <Tag color="blue" tone="outline" size="sm">Outline sm</Tag>
                <Tag color="blue" tone="soft"    size="md">Soft md</Tag>
                <Tag color="blue" tone="outline" size="md">Outline md</Tag>
                <Tag color="blue" tone="soft"    size="lg">Soft lg</Tag>
              </Row>
            </Block>

            <Block title="Avatar — size · shape">
              <Row>
                {(['xs','sm','md','lg','xl'] as const).map(s => (
                  <Avatar key={s} size={s} shape="circle" fallback="김" />
                ))}
              </Row>
              <div style={{ height: 'var(--spacing-8)' }} />
              <Row>
                {(['xs','sm','md','lg','xl'] as const).map(s => (
                  <Avatar key={s} size={s} shape="rounded" fallback="이" />
                ))}
              </Row>
            </Block>

            <Block title="Divider">
              <Col>
                <Divider direction="horizontal" emphasis="weak" />
                <Divider direction="horizontal" emphasis="default" />
                <Divider direction="horizontal" emphasis="strong" />
              </Col>
              <div style={{ height: 'var(--spacing-16)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-10)', height: 40 }}>
                <Divider direction="vertical" emphasis="default" />
                <span style={{ fontSize: 13, color: 'var(--sys-content-neutral-muted)' }}>vertical</span>
                <Divider direction="vertical" emphasis="strong" />
              </div>
            </Block>

            <Block title="StatusIndicator">
              <Row>
                {(['active','inactive','attention','error'] as const).map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
                    <StatusIndicator size="md" tone={t} />
                    <span style={{ fontSize: 13 }}>{t}</span>
                  </div>
                ))}
              </Row>
              <div style={{ height: 'var(--spacing-8)' }} />
              <Row>
                {(['xs','sm','md','lg'] as const).map(s => (
                  <StatusIndicator key={s} size={s} tone="active" />
                ))}
              </Row>
            </Block>

          </ComponentSection>

          {/* ═══════════════════════════════════════════════════
              FEEDBACK
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="feedback" title="Feedback">

            <Block title="Toast">
              <Col>
                {(['neutral','info','success','warning','error'] as const).map(t => (
                  <Toast key={t} type={t} message={`${t} 토스트 메시지입니다.`} />
                ))}
                <Toast type="success" dismissible message="닫기 가능한 토스트입니다." />
              </Col>
            </Block>

            <Block title="Alert">
              <Col>
                {(['neutral','info','success','warning','danger'] as const).map(t => (
                  <Alert key={t} type={t} title={`${t} 알럿`}>{t} 타입의 인라인 알럿입니다.</Alert>
                ))}
              </Col>
            </Block>

            <Block title="Tooltip">
              <Row>
                <Tooltip density="compact" emphasis="neutral" placement="top" content="상단 툴팁">
                  <Button tone="secondary" variant="outline" size="sm">Top</Button>
                </Tooltip>
                <Tooltip density="compact" emphasis="neutral" placement="bottom" content="하단 툴팁">
                  <Button tone="secondary" variant="outline" size="sm">Bottom</Button>
                </Tooltip>
                <Tooltip density="compact" emphasis="accent" placement="top" content="Accent 툴팁">
                  <Button tone="secondary" variant="outline" size="sm">Accent</Button>
                </Tooltip>
                <Tooltip density="rich" emphasis="neutral" placement="top" content="Rich 툴팁 — 더 긴 설명을 표시할 수 있습니다.">
                  <Button tone="secondary" variant="outline" size="sm">Rich</Button>
                </Tooltip>
              </Row>
            </Block>

            <Block title="Popover">
              <Row>
                <Popover
                  emphasis="neutral"
                  open={popoverOpen}
                  placement="bottom"
                  content={
                    <div style={{ padding: 'var(--spacing-4)', fontSize: 13 }}>
                      <div style={{ fontWeight: 600, marginBottom: 'var(--spacing-6)' }}>팝오버 제목</div>
                      <div style={{ color: 'var(--sys-content-neutral-muted)' }}>팝오버 설명 내용이 들어갑니다.</div>
                    </div>
                  }
                >
                  <Button tone="secondary" variant="outline" size="sm" onClick={() => setPopoverOpen(v => !v)}>
                    {popoverOpen ? '팝오버 닫기' : '팝오버 열기'}
                  </Button>
                </Popover>
              </Row>
            </Block>

            <Block title="Dialog">
              <Row>
                <Button tone="primary" variant="fill" size="sm" onClick={() => setDialogOpen(true)}>
                  Dialog 열기
                </Button>
              </Row>
              <Dialog
                size="sm (confirm)"
                open={dialogOpen}
                title="정말 삭제하시겠습니까?"
                onClose={() => setDialogOpen(false)}
              >
                <div style={{ fontSize: 14, color: 'var(--sys-content-neutral-muted)', marginBottom: 'var(--spacing-20)' }}>
                  이 작업은 되돌릴 수 없습니다. 삭제된 데이터는 복구할 수 없습니다.
                </div>
                <ButtonGroup layout="inline" size="md">
                  <Button tone="secondary" variant="outline" onClick={() => setDialogOpen(false)}>취소</Button>
                  <Button tone="danger" variant="fill" onClick={() => setDialogOpen(false)}>삭제</Button>
                </ButtonGroup>
              </Dialog>
            </Block>

          </ComponentSection>

          {/* ═══════════════════════════════════════════════════
              NAVIGATION
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="navigation" title="Navigation">

            <Block title="Breadcrumb — separator">
              <Col>
                <Breadcrumb separator="chevron" items={[{ label: '홈', href: '#' }, { label: '대시보드', href: '#' }, { label: '현재 페이지' }]} />
                <Breadcrumb separator="slash"   items={[{ label: '홈', href: '#' }, { label: '대시보드', href: '#' }, { label: '현재 페이지' }]} />
                <Breadcrumb separator="dot"     items={[{ label: '홈', href: '#' }, { label: '대시보드', href: '#' }, { label: '현재 페이지' }]} />
              </Col>
            </Block>

            <Block title="Pagination">
              <Col>
                <Pagination variant="default" size="md" currentPage={page} totalPages={10} onChange={setPage} />
                <Pagination variant="minimal" size="md" currentPage={page} totalPages={10} onChange={setPage} />
              </Col>
            </Block>

            <Block title="Accordion">
              <Col>
                <Accordion type="contained" size="md" title="아코디언 항목 1">
                  아코디언 펼쳐진 상태의 내용입니다. 여러 줄의 텍스트가 들어갈 수 있습니다.
                </Accordion>
                <Accordion type="contained" size="md" state="expanded" title="아코디언 항목 2 (expanded)">
                  미리 펼쳐진 아코디언의 내용입니다.
                </Accordion>
                <Accordion type="plain" size="md" title="Plain 아코디언">
                  Plain 타입의 아코디언 내용입니다.
                </Accordion>
              </Col>
            </Block>

            <Block title="SideNavigation">
              <div style={{ width: 220, border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <SideNavigation size="md" tone="accent" items={[
                  { label: '대시보드', href: '#', depth: 1, state: 'current' },
                  { label: '분석', href: '#', depth: 1 },
                  { label: '트래픽', href: '#', depth: 2 },
                  { label: '전환율', href: '#', depth: 2 },
                  { label: '보고서', href: '#', depth: 1 },
                  { label: '설정', href: '#', depth: 1, state: 'disabled' },
                ]} />
              </div>
            </Block>

          </ComponentSection>

          {/* ═══════════════════════════════════════════════════
              LOADING
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="loading" title="Loading">

            <Block title="SkeletonRect — size · radius">
              <Row>
                {(['xs','sm','md','lg','xl'] as const).map(s => (
                  <SkeletonRect key={s} size={s} radius="sm" />
                ))}
              </Row>
              <div style={{ height: 'var(--spacing-8)' }} />
              <Row>
                {(['none','xs','sm','md','lg'] as const).map(r => (
                  <SkeletonRect key={r} size="md" radius={r} />
                ))}
              </Row>
            </Block>

            <Block title="SkeletonText · SkeletonCircle">
              <Col>
                <Row>
                  {(['xs','sm','md','lg','xl'] as const).map(s => (
                    <SkeletonText key={s} size={s} />
                  ))}
                </Row>
                <Row>
                  {(['xs','sm','md','lg','xl'] as const).map(s => (
                    <SkeletonCircle key={s} size={s} />
                  ))}
                </Row>
              </Col>
            </Block>

            <Block title="카드 로딩 패턴">
              <Row>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{
                    flex: 1,
                    background: 'var(--sys-surface-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-16)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-10)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-10)' }}>
                      <SkeletonCircle size="sm" />
                      <SkeletonText size="sm" />
                    </div>
                    <SkeletonText size="lg" />
                    <SkeletonText size="md" />
                    <SkeletonRect size="sm" radius="xs" />
                  </div>
                ))}
              </Row>
            </Block>

          </ComponentSection>

          {/* ═══════════════════════════════════════════════════
              TABLE
          ═══════════════════════════════════════════════════ */}
          <ComponentSection id="table" title="Table">

            <Block title="Size — sm · md · lg">
              <Col>
                {(['sm','md','lg'] as const).map(s => (
                  <div key={s}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--sys-content-neutral-muted)', marginBottom: 'var(--spacing-6)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s}</div>
                    <div style={{ border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                      <Table columns={TABLE_COLS} data={TABLE_DATA.slice(0, 2)} size={s} getRowKey={r => r.id} />
                    </div>
                  </div>
                ))}
              </Col>
            </Block>

            <Block title="Selectable">
              <div style={{ border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Table
                  columns={TABLE_COLS}
                  data={TABLE_DATA}
                  size="md"
                  selectable
                  selectedKeys={selectedRows}
                  onSelectAll={() => setSelectedRows(prev => prev.size === TABLE_DATA.length ? new Set() : new Set(TABLE_DATA.map(r => r.id)))}
                  onSelectRow={id => setSelectedRows(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })}
                  getRowKey={r => r.id}
                />
              </div>
            </Block>

            <Block title="Loading · Empty">
              <Col>
                <div style={{ border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Table columns={TABLE_COLS} data={[]} size="md" getRowKey={r => r.id} loading />
                </div>
                <div style={{ border: 'var(--border-defalut) solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Table columns={TABLE_COLS} data={[]} size="md" getRowKey={r => r.id} empty="조건에 맞는 데이터가 없습니다." />
                </div>
              </Col>
            </Block>

          </ComponentSection>

        </div>
      </main>
    </div>
  )
}
