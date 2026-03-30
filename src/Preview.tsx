import { useState, useEffect } from 'react'

// Actions
import { Button } from './components/Button'
import { TextButton } from './components/TextButton'
import { IconButton } from './components/IconButton'
import { FloatingButton } from './components/FloatingButton'
import { ButtonGroup } from './components/ButtonGroup'
import { Link } from './components/Link'

// Form Inputs
import { TextField } from './components/TextField'
import { TextArea } from './components/TextArea'
import { SearchField } from './components/SearchField'
import { Select } from './components/Select'

// Form Controls
import { Checkbox } from './components/Checkbox'
import { Radio } from './components/Radio'
import { Switch } from './components/Switch'
import { Rating } from './components/Rating'
import { NumberStepper } from './components/NumberStepper'

// Selection
import { ActionChip } from './components/Chip'
import { SelectChip } from './components/Chip'
import { SegmentedControl } from './components/SegmentedControl'
import { Tab } from './components/Tab'

// Display
import { Badge } from './components/Badge'
import { Tag } from './components/Tag'
import { Avatar } from './components/Avatar'
import { Divider } from './components/Divider'
import { StatusIndicator } from './components/StatusIndicator'

// Feedback
import { Toast } from './components/Toast'
import { Alert } from './components/Alert'
import { Dialog } from './components/Dialog'
import { Tooltip } from './components/Tooltip'
import { Popover } from './components/Popover'

// Loading
import { SkeletonRect, SkeletonCircle, SkeletonText } from './components/Skeleton'

// Navigation
import { Breadcrumb } from './components/Breadcrumb'
import { Pagination } from './components/Pagination'
import { Accordion } from './components/Accordion'
import { SideNavigation } from './components/Navigation'

// Table
import { Table, TableCellStrong } from './components/Table'
import type { TableColumnDef } from './types/components'

/* ── layout helpers ────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{
        margin: '0 0 4px',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--sys-content-neutral-muted)',
      }}>
        {title}
      </h2>
      <div style={{ height: 1, background: 'var(--sys-border-neutral-subtle)', marginBottom: 20 }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-start' }}>
        {children}
      </div>
    </section>
  )
}

function Col({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', ...style }}>{children}</div>
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>{children}</div>
}

type RadiusMode = 'formal' | 'neutral' | 'soft' | 'friendly' | 'playful'

/* ── Toolbar ───────────────────────────────────────────────── */

function Toolbar({
  theme, onTheme,
  radius, onRadius,
}: {
  theme: 'light' | 'dark'
  onTheme: (t: 'light' | 'dark') => void
  radius: RadiusMode
  onRadius: (r: RadiusMode) => void
}) {
  const radiusModes: RadiusMode[] = ['formal', 'neutral', 'soft', 'friendly', 'playful']
  const btn = (active: boolean): React.CSSProperties => ({
    padding: '4px 12px',
    borderRadius: 6,
    border: '1px solid',
    borderColor: active ? 'var(--sys-content-brand-default)' : 'var(--sys-border-neutral-subtle)',
    background: active ? 'var(--sys-container-brand-tint-default, #EFF6FF)' : 'transparent',
    color: active ? 'var(--sys-content-brand-default)' : 'var(--sys-content-neutral-default)',
    fontSize: 12,
    fontWeight: active ? 600 : 400,
    cursor: 'pointer',
    fontFamily: 'inherit',
  })

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '8px 24px',
      background: 'var(--sys-surface-base)',
      borderBottom: '1px solid var(--sys-border-neutral-subtle)',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    }}>
      {/* Logo */}
      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--sys-content-brand-default)', marginRight: 8 }}>
        IGT
      </span>

      {/* Theme */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 11, color: 'var(--sys-content-neutral-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>THEME</span>
        <button style={btn(theme === 'light')} onClick={() => onTheme('light')}>☀ Light</button>
        <button style={btn(theme === 'dark')} onClick={() => onTheme('dark')}>☾ Dark</button>
      </div>

      <div style={{ width: 1, height: 20, background: 'var(--sys-border-neutral-subtle)' }} />

      {/* Radius */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 11, color: 'var(--sys-content-neutral-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>RADIUS</span>
        {radiusModes.map(r => (
          <button key={r} style={btn(radius === r)} onClick={() => onRadius(r)}>
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Preview ───────────────────────────────────────────────── */

export function Preview() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [radius, setRadius] = useState<RadiusMode>('soft')

  const [checkboxVal, setCheckboxVal] = useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked')
  const [radioSelected, setRadioSelected] = useState(false)
  const [switchOn, setSwitchOn] = useState(false)
  const [rating, setRating] = useState<0|1|2|3|4|5>(3)
  const [stepper, setStepper] = useState(1)
  const [chipSelected, setChipSelected] = useState(false)
  const [selectChipSelected, setSelectChipSelected] = useState(false)
  const [segValue, setSegValue] = useState('a')
  const [tabValue, setTabValue] = useState('one')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const [page, setPage] = useState(1)
  const [tableSelectedKeys, setTableSelectedKeys] = useState<Set<string>>(new Set())

  // html 속성으로 모드 적용
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    document.documentElement.setAttribute('data-radius', radius)
  }, [theme, radius])

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'IGTSans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      background: 'var(--sys-background-base)',
      color: 'var(--sys-content-neutral-strong)',
      paddingTop: 41, // toolbar height
    }}>
      <Toolbar theme={theme} onTheme={setTheme} radius={radius} onRadius={setRadius} />

      {/* Sidebar */}
      <aside style={{
        width: 200,
        flexShrink: 0,
        padding: '24px 0',
        borderRight: '1px solid var(--sys-border-neutral-subtle)',
        background: 'var(--sys-surface-base)',
        position: 'sticky',
        top: 41,
        height: 'calc(100vh - 41px)',
        overflowY: 'auto',
      }}>
        <div style={{ padding: '0 16px 16px', fontSize: 14, fontWeight: 700, color: 'var(--sys-content-brand-default)' }}>
          IGT Design System
        </div>
        {[
          'Actions', 'Form Inputs', 'Form Controls',
          'Selection', 'Display', 'Feedback', 'Loading', 'Navigation', 'Table',
        ].map(s => (
          <a key={s} href={`#${s}`} style={{
            display: 'block', padding: '6px 16px',
            fontSize: 13, color: 'var(--sys-content-neutral-default)',
            textDecoration: 'none',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--sys-surface-subtle)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            {s}
          </a>
        ))}
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '40px 48px', maxWidth: 960 }}>
        <h1 style={{ margin: '0 0 40px', fontSize: 28, fontWeight: 700, color: 'var(--sys-content-neutral-strong)' }}>
          Component Gallery
        </h1>

        {/* ── Actions ── */}
        <div id="Actions">
          <Section title="Button">
            <Row>
              <Button tone="primary" variant="fill">Primary Fill</Button>
              <Button tone="primary" variant="soft">Primary Soft</Button>
              <Button tone="primary" variant="outline">Primary Outline</Button>
              <Button tone="primary" variant="ghost">Primary Ghost</Button>
            </Row>
            <Row>
              <Button tone="secondary" variant="fill">Secondary Fill</Button>
              <Button tone="secondary" variant="soft">Secondary Soft</Button>
              <Button tone="secondary" variant="outline">Secondary Outline</Button>
              <Button tone="secondary" variant="ghost">Secondary Ghost</Button>
            </Row>
            <Row>
              <Button tone="danger" variant="fill">Danger Fill</Button>
              <Button tone="danger" variant="soft">Danger Soft</Button>
              <Button tone="danger" variant="outline">Danger Outline</Button>
              <Button tone="danger" variant="ghost">Danger Ghost</Button>
            </Row>
            <Row>
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button size="md">MD</Button>
              <Button size="lg">LG</Button>
            </Row>
            <Row>
              <Button size="md" density="COMPACT">Compact MD</Button>
              <Button state="disabled">Disabled</Button>
              <Button state="loading">Loading</Button>
            </Row>
          </Section>

          <Section title="TextButton">
            <Row>
              <TextButton tone="accent" variant="plain">Accent Plain</TextButton>
              <TextButton tone="accent" variant="underline">Accent Underline</TextButton>
              <TextButton tone="accent" variant="chevron">Accent Chevron</TextButton>
            </Row>
            <Row>
              <TextButton tone="neutral">Neutral</TextButton>
              <TextButton tone="neutralMuted">Neutral Muted</TextButton>
              <TextButton tone="danger">Danger</TextButton>
            </Row>
          </Section>

          <Section title="IconButton">
            <Row>
              <IconButton tone="neutral" variant="fill" icon="★" aria-label="star fill" />
              <IconButton tone="neutral" variant="outline" icon="★" aria-label="star outline" />
              <IconButton tone="neutral" variant="ghost" icon="★" aria-label="star ghost" />
            </Row>
            <Row>
              <IconButton tone="neutral" variant="fill" size="xs" icon="★" aria-label="xs" />
              <IconButton tone="neutral" variant="fill" size="sm" icon="★" aria-label="sm" />
              <IconButton tone="neutral" variant="fill" size="md" icon="★" aria-label="md" />
            </Row>
          </Section>

          <Section title="FloatingButton">
            <Row>
              <FloatingButton priority="brand" layout="standard" icon="+" />
              <FloatingButton priority="neutral" layout="standard" icon="+" />
              <FloatingButton priority="subtle" layout="standard" icon="+" />
              <FloatingButton priority="brand" layout="extended" icon="+" label="새 항목 추가" />
            </Row>
          </Section>

          <Section title="ButtonGroup">
            <ButtonGroup layout="inline" size="md">
              <Button tone="secondary" variant="outline">취소</Button>
              <Button tone="primary" variant="fill">확인</Button>
            </ButtonGroup>
            <ButtonGroup layout="inline" distribution="equal" size="md">
              <Button tone="secondary" variant="outline">취소</Button>
              <Button tone="primary" variant="fill">저장</Button>
            </ButtonGroup>
          </Section>

          <Section title="Link">
            <Row>
              <Link href="#" tone="brand" underline="always">Brand Always</Link>
              <Link href="#" tone="brand" underline="auto">Brand Auto (hover)</Link>
              <Link href="#" tone="brand" underline="none">Brand None</Link>
            </Row>
            <Row>
              <Link href="#" tone="neutral" underline="always">Neutral Always</Link>
              <Link href="#" tone="neutral" underline="auto">Neutral Auto</Link>
            </Row>
          </Section>
        </div>

        {/* ── Form Inputs ── */}
        <div id="Form Inputs">
          <Section title="TextField">
            <Col>
              <TextField variant="fill" size="md" label="이름" placeholder="이름을 입력하세요" />
              <TextField variant="outline" size="md" label="이메일" placeholder="email@example.com" />
              <TextField variant="fill" size="md" label="에러 상태" invalid helperText="올바른 값을 입력하세요" />
              <TextField variant="fill" size="md" label="비활성화" state="disabled" value="비활성화 값" />
            </Col>
            <Col>
              <TextField variant="fill" size="sm" label="SM" placeholder="Small" />
              <TextField variant="fill" size="md" label="MD" placeholder="Medium" />
              <TextField variant="fill" size="lg" label="LG" placeholder="Large" />
            </Col>
          </Section>

          <Section title="TextArea">
            <Col>
              <TextArea variant="fill" size="md" label="내용" placeholder="내용을 입력하세요" />
              <TextArea variant="outline" size="md" label="내용 (outline)" placeholder="outline 스타일" />
              <TextArea variant="fill" size="md" label="에러" invalid helperText="내용을 입력해주세요" />
            </Col>
          </Section>

          <Section title="SearchField">
            <Col>
              <SearchField size="md" value={searchVal} placeholder="검색어를 입력하세요"
                onChange={setSearchVal} onClear={() => setSearchVal('')} />
              <SearchField size="lg" value={searchVal} placeholder="Large search"
                onChange={setSearchVal} onClear={() => setSearchVal('')} />
            </Col>
          </Section>

          <Section title="Select">
            <Col>
              <Select type="filled" size="md"
                options={[{label:'옵션 1',value:'1'},{label:'옵션 2',value:'2'},{label:'옵션 3',value:'3'}]}
                placeholder="선택하세요" />
              <Select type="outlined" size="md"
                options={[{label:'옵션 1',value:'1'},{label:'옵션 2',value:'2'}]}
                placeholder="outlined" />
              <Select type="plain" size="md"
                options={[{label:'옵션 1',value:'1'},{label:'옵션 2',value:'2'}]}
                placeholder="plain" />
            </Col>
          </Section>
        </div>

        {/* ── Form Controls ── */}
        <div id="Form Controls">
          <Section title="Checkbox">
            <Row>
              <Checkbox size="md" label="Unchecked" value="unchecked"
                onChange={v => setCheckboxVal(v as typeof checkboxVal)} />
              <Checkbox size="md" label="Checked" value="checked" />
              <Checkbox size="md" label="Indeterminate" value="indeterminate" />
              <Checkbox size="md" label="Disabled" value="unchecked" disabled />
              <Checkbox size="md" label="Invalid" value="unchecked" invalid />
            </Row>
            <Row>
              <Checkbox size="sm" label="SM" value={checkboxVal} onChange={v => setCheckboxVal(v as typeof checkboxVal)} />
              <Checkbox size="md" label="MD" value={checkboxVal} onChange={v => setCheckboxVal(v as typeof checkboxVal)} />
            </Row>
          </Section>

          <Section title="Radio">
            <Row>
              <Radio size="md" label="선택됨" selected={radioSelected} onChange={setRadioSelected} />
              <Radio size="md" label="미선택" selected={false} />
              <Radio size="md" label="Disabled" disabled />
              <Radio size="md" label="Invalid" invalid />
            </Row>
          </Section>

          <Section title="Switch">
            <Row>
              <Switch size="md" label="OFF" on={false} />
              <Switch size="md" label="ON" on={true} />
              <Switch size="md" label="Toggle" on={switchOn} onChange={setSwitchOn} />
              <Switch size="md" label="Disabled" state="disabled" />
            </Row>
            <Row>
              <Switch size="sm" label="SM" on={switchOn} onChange={setSwitchOn} />
              <Switch size="md" label="MD" on={switchOn} onChange={setSwitchOn} />
            </Row>
          </Section>

          <Section title="Rating">
            <Row>
              <Rating size="md" value={rating} onChange={v => setRating(v)} />
              <Rating size="sm" value={4} />
              <Rating size="xs" value={2} />
              <Rating size="md" value={0} disabled />
            </Row>
          </Section>

          <Section title="NumberStepper">
            <Row>
              <NumberStepper emphasis="fill" size="md" value={stepper} min={0} max={10} onChange={setStepper} />
              <NumberStepper emphasis="outline" size="md" value={stepper} min={0} max={10} onChange={setStepper} />
              <NumberStepper emphasis="fill" size="sm" value={stepper} min={0} max={10} onChange={setStepper} />
            </Row>
          </Section>
        </div>

        {/* ── Selection ── */}
        <div id="Selection">
          <Section title="ActionChip / SelectChip">
            <Row>
              <ActionChip size="md" onClick={() => setChipSelected(p => !p)} selected={chipSelected}>
                {chipSelected ? '선택됨' : '미선택'}
              </ActionChip>
              <ActionChip size="sm">Small Chip</ActionChip>
              <ActionChip size="xs">XS Chip</ActionChip>
              <ActionChip size="md" disabled>Disabled</ActionChip>
            </Row>
            <Row>
              <SelectChip selected={selectChipSelected} variant="fill" onClick={() => setSelectChipSelected(p => !p)}>
                Fill Chip
              </SelectChip>
              <SelectChip selected={false} variant="fill">Fill Unselected</SelectChip>
              <SelectChip selected={true} variant="outline">Outline Selected</SelectChip>
              <SelectChip selected={false} variant="outline">Outline Unselected</SelectChip>
            </Row>
          </Section>

          <Section title="SegmentedControl">
            <Col>
              <SegmentedControl size="md" content="text" value={segValue}
                segments={[{label:'옵션 A',value:'a'},{label:'옵션 B',value:'b'},{label:'옵션 C',value:'c'}]}
                onChange={setSegValue} />
              <SegmentedControl size="sm" content="text" value={segValue}
                segments={[{label:'A',value:'a'},{label:'B',value:'b'},{label:'C',value:'c'}]}
                onChange={setSegValue} />
            </Col>
          </Section>

          <Section title="Tab">
            <Col style={{ width: '100%' }}>
              <Tab variant="underline" size="md" layout="fixed" value={tabValue}
                tabs={[{label:'첫 번째',value:'one'},{label:'두 번째',value:'two'},{label:'세 번째',value:'three'}]}
                onChange={setTabValue} />
              <Tab variant="filled" size="md" layout="fixed" value={tabValue}
                tabs={[{label:'첫 번째',value:'one'},{label:'두 번째',value:'two'},{label:'세 번째',value:'three'}]}
                onChange={setTabValue} />
            </Col>
          </Section>
        </div>

        {/* ── Display ── */}
        <div id="Display">
          <Section title="Badge">
            <Row>
              <Badge kind="dot" tone="accent" />
              <Badge kind="dot" tone="neutral" />
              <Badge kind="dot" tone="urgent" />
              <Badge kind="count" tone="accent" count={3} />
              <Badge kind="count" tone="urgent" count={12} />
              <Badge kind="count" tone="neutral" count={99} />
              <Badge kind="count" tone="urgent" count={100} />
            </Row>
          </Section>

          <Section title="Tag">
            <Row>
              <Tag color="blue" tone="soft">Blue</Tag>
              <Tag color="green" tone="soft">Green</Tag>
              <Tag color="orange" tone="soft">Orange</Tag>
              <Tag color="red" tone="soft">Red</Tag>
              <Tag color="purple" tone="soft">Purple</Tag>
              <Tag color="teal" tone="soft">Teal</Tag>
              <Tag color="yellow" tone="soft">Yellow</Tag>
              <Tag color="grey" tone="soft">Grey</Tag>
            </Row>
            <Row>
              <Tag color="semanticSuccess" tone="soft">Success</Tag>
              <Tag color="semanticWarning" tone="soft">Warning</Tag>
              <Tag color="semanticDanger" tone="soft">Danger</Tag>
              <Tag color="semanticInfo" tone="soft">Info</Tag>
            </Row>
            <Row>
              <Tag color="blue" tone="outline">Outline</Tag>
              <Tag color="green" tone="outline" onRemove={() => {}}>Remove</Tag>
              <Tag color="red" tone="soft" size="xs">XS</Tag>
              <Tag color="blue" tone="soft" size="sm">SM</Tag>
              <Tag color="blue" tone="soft" size="md">MD</Tag>
              <Tag color="blue" tone="soft" size="lg">LG</Tag>
            </Row>
          </Section>

          <Section title="Avatar">
            <Row>
              <Avatar size="xs" shape="circle" fallback="AB" />
              <Avatar size="sm" shape="circle" fallback="CD" />
              <Avatar size="md" shape="circle" fallback="EF" />
              <Avatar size="lg" shape="circle" fallback="GH" />
              <Avatar size="xl" shape="circle" fallback="IJ" />
            </Row>
            <Row>
              <Avatar size="md" shape="circle" src="https://i.pravatar.cc/100?img=1" alt="user" />
              <Avatar size="md" shape="rounded" src="https://i.pravatar.cc/100?img=2" alt="user" />
              <Avatar size="md" shape="rounded" fallback="KL" />
            </Row>
          </Section>

          <Section title="Divider">
            <div style={{ width: 300 }}>
              <Divider direction="horizontal" emphasis="weak" />
              <div style={{ height: 8 }} />
              <Divider direction="horizontal" emphasis="default" />
              <div style={{ height: 8 }} />
              <Divider direction="horizontal" emphasis="strong" />
            </div>
            <div style={{ height: 60, display: 'flex', alignItems: 'stretch', gap: 8 }}>
              <span>A</span>
              <Divider direction="vertical" emphasis="default" />
              <span>B</span>
              <Divider direction="vertical" emphasis="default" />
              <span>C</span>
            </div>
          </Section>

          <Section title="StatusIndicator">
            <Row>
              <StatusIndicator tone="active" size="md" />
              <StatusIndicator tone="inactive" size="md" />
              <StatusIndicator tone="attention" size="md" />
              <StatusIndicator tone="error" size="md" />
            </Row>
            <Row>
              <StatusIndicator tone="active" size="xs" />
              <StatusIndicator tone="active" size="sm" />
              <StatusIndicator tone="active" size="md" />
              <StatusIndicator tone="active" size="lg" />
            </Row>
          </Section>
        </div>

        {/* ── Feedback ── */}
        <div id="Feedback">
          <Section title="Toast">
            <Col>
              <Toast type="neutral" message="중립 메시지입니다" dismissible onDismiss={() => {}} />
              <Toast type="info" message="정보 메시지입니다" dismissible onDismiss={() => {}} />
              <Toast type="success" message="저장되었습니다" dismissible onDismiss={() => {}} />
              <Toast type="warning" message="주의가 필요합니다" dismissible onDismiss={() => {}} />
              <Toast type="error" message="오류가 발생했습니다" dismissible onDismiss={() => {}} />
            </Col>
          </Section>

          <Section title="Alert">
            <Col style={{ width: '100%' }}>
              <Alert type="info" title="안내">변경사항이 저장되지 않을 수 있습니다.</Alert>
              <Alert type="success" title="완료">작업이 성공적으로 완료되었습니다.</Alert>
              <Alert type="warning" title="주의">이 작업은 되돌릴 수 없습니다.</Alert>
              <Alert type="danger" title="오류">서버 연결에 실패했습니다.</Alert>
            </Col>
          </Section>

          <Section title="Dialog">
            <Button tone="primary" variant="fill" onClick={() => setDialogOpen(true)}>
              Dialog 열기
            </Button>
            <Dialog size="sm (confirm)" open={dialogOpen} title="정말 삭제하시겠습니까?"
              onClose={() => setDialogOpen(false)}>
              <p style={{ margin: 0, color: 'var(--sys-content-neutral-default)' }}>
                이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end' }}>
                <Button tone="secondary" variant="outline" onClick={() => setDialogOpen(false)}>취소</Button>
                <Button tone="danger" variant="fill" onClick={() => setDialogOpen(false)}>삭제</Button>
              </div>
            </Dialog>
          </Section>

          <Section title="Tooltip">
            <Row>
              <Tooltip density="compact" emphasis="neutral" placement="top" content="Neutral tooltip" arrow>
                <Button tone="secondary" variant="outline" size="sm">Neutral</Button>
              </Tooltip>
              <Tooltip density="compact" emphasis="subtle" placement="top" content="Subtle tooltip" arrow>
                <Button tone="secondary" variant="outline" size="sm">Subtle</Button>
              </Tooltip>
              <Tooltip density="compact" emphasis="accent" placement="top" content="Accent tooltip" arrow>
                <Button tone="secondary" variant="outline" size="sm">Accent</Button>
              </Tooltip>
              <Tooltip density="rich" emphasis="neutral" placement="bottom" content="Rich density tooltip with more text" arrow>
                <Button tone="secondary" variant="outline" size="sm">Rich</Button>
              </Tooltip>
            </Row>
          </Section>

          <Section title="Popover">
            <Button tone="secondary" variant="outline" size="sm"
              onClick={() => setPopoverOpen(p => !p)}>
              Popover 토글
            </Button>
            <Popover emphasis="neutral" open={popoverOpen} placement="bottom"
              content={
                <div>
                  <p style={{ margin: '0 0 8px', fontWeight: 600 }}>팝오버 제목</p>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--sys-content-neutral-muted)' }}>
                    팝오버 내용입니다. 다양한 컨텐츠를 담을 수 있습니다.
                  </p>
                </div>
              }>
              <span />
            </Popover>
          </Section>
        </div>

        {/* ── Loading ── */}
        <div id="Loading">
          <Section title="Skeleton">
            <Col style={{ width: 300 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <SkeletonCircle size="md" />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <SkeletonText size="md" />
                  <SkeletonText size="sm" />
                </div>
              </div>
              <SkeletonRect size="lg" radius="sm" />
              <SkeletonRect size="xl" radius="md" />
            </Col>
            <Row>
              <SkeletonCircle size="xs" />
              <SkeletonCircle size="sm" />
              <SkeletonCircle size="md" />
              <SkeletonCircle size="lg" />
              <SkeletonCircle size="xl" />
            </Row>
          </Section>
        </div>

        {/* ── Navigation ── */}
        <div id="Navigation">
          <Section title="Breadcrumb">
            <Col>
              <Breadcrumb separator="chevron" leading="none"
                items={[{label:'홈',href:'#'},{label:'카테고리',href:'#'},{label:'현재 페이지'}]} />
              <Breadcrumb separator="slash" leading="home"
                items={[{label:'홈',href:'#'},{label:'제품',href:'#'},{label:'상세'}]} />
              <Breadcrumb separator="dot" leading="none"
                items={[{label:'A',href:'#'},{label:'B',href:'#'},{label:'C'}]} />
            </Col>
          </Section>

          <Section title="Pagination">
            <Col>
              <Pagination variant="default" size="md" currentPage={page} totalPages={10} onChange={setPage} />
              <Pagination variant="minimal" size="md" currentPage={page} totalPages={10} onChange={setPage} />
            </Col>
          </Section>

          <Section title="Accordion">
            <Col style={{ width: 480 }}>
              <Accordion type="contained" size="md" state="collapsed" title="질문 1: 이것은 무엇인가요?">
                <p style={{ margin: 0 }}>IGT 디자인 시스템의 아코디언 컴포넌트입니다.</p>
              </Accordion>
              <Accordion type="contained" size="md" state="expanded" title="질문 2: 어떻게 사용하나요?">
                <p style={{ margin: 0 }}>state="expanded" 로 기본 열린 상태로 설정할 수 있습니다.</p>
              </Accordion>
              <Accordion type="plain" size="md" state="collapsed" title="Plain 타입 아코디언">
                <p style={{ margin: 0 }}>테두리 없는 plain 스타일입니다.</p>
              </Accordion>
              <Accordion type="contained" size="md" state="disabled" title="비활성화된 아코디언">
                <p style={{ margin: 0 }}>이 내용은 표시되지 않습니다.</p>
              </Accordion>
            </Col>
          </Section>

          <Section title="SideNavigation">
            <div style={{ width: 240, border: '1px solid var(--sys-border-neutral-subtle)', borderRadius: 8, overflow: 'hidden' }}>
              <SideNavigation size="md" tone="accent" items={[
                { label: '대시보드', href: '#', depth: 1, state: 'current' },
                { label: '사용자 관리', href: '#', depth: 1 },
                { label: '설정', href: '#', depth: 1 },
                { label: '일반 설정', href: '#', depth: 2 },
                { label: '보안 설정', href: '#', depth: 2 },
                { label: '도움말', href: '#', depth: 1, state: 'disabled' },
              ]} />
            </div>
            <div style={{ width: 240, border: '1px solid var(--sys-border-neutral-subtle)', borderRadius: 8, overflow: 'hidden' }}>
              <SideNavigation size="md" tone="neutral" items={[
                { label: '홈', href: '#', depth: 1 },
                { label: '프로젝트', href: '#', depth: 1, state: 'current' },
                { label: '내 프로젝트', href: '#', depth: 2 },
                { label: '팀 프로젝트', href: '#', depth: 2 },
                { label: '보고서', href: '#', depth: 1 },
              ]} />
            </div>
          </Section>
        </div>

        {/* ── Table ── */}
        <div id="Table">
          {(() => {
            interface TR { id: string; name: string; email: string; role: string; status: 'active'|'inactive'|'pending' }
            const rows: TR[] = [
              { id: '1', name: '김민준', email: 'minjun@example.com', role: '개발자', status: 'active' },
              { id: '2', name: '이서연', email: 'seoyeon@example.com', role: '디자이너', status: 'active' },
              { id: '3', name: '박지호', email: 'jiho@example.com', role: '기획자', status: 'pending' },
              { id: '4', name: '최예린', email: 'yerin@example.com', role: '개발자', status: 'inactive' },
            ]
            const cols: TableColumnDef<TR>[] = [
              { key: 'user',   header: '사용자', cell: r => <TableCellStrong overline={r.email} title={r.name} /> },
              { key: 'role',   header: '역할',   width: 100, cell: r => r.role },
              { key: 'status', header: '상태',   width: 120, cell: r => (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <StatusIndicator size="xs" tone={r.status === 'active' ? 'active' : r.status === 'pending' ? 'attention' : 'inactive'} />
                  <span>{r.status === 'active' ? '활성' : r.status === 'pending' ? '대기' : '비활성'}</span>
                </div>
              )},
              { key: 'tag', header: '태그', width: 120, cell: r => (
                <Tag color={r.status === 'active' ? 'semanticSuccess' : r.status === 'pending' ? 'yellow' : 'grey'} tone="soft" size="sm">
                  {r.status}
                </Tag>
              )},
            ]
            return (
              <>
                <Section title="Table / Size">
                  <Col style={{ width: '100%' }}>
                    {(['sm', 'md', 'lg'] as const).map(s => (
                      <div key={s} style={{ width: '100%' }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--sys-content-neutral-muted)', marginBottom: 6, letterSpacing: '0.06em' }}>{s.toUpperCase()}</div>
                        <div style={{ border: '1px solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                          <Table columns={cols} data={rows.slice(0, 2)} size={s} getRowKey={r => r.id} />
                        </div>
                      </div>
                    ))}
                  </Col>
                </Section>

                <Section title="Table / Selectable">
                  <div style={{ width: '100%', border: '1px solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <Table
                      columns={cols}
                      data={rows}
                      size="md"
                      selectable
                      selectedKeys={tableSelectedKeys}
                      onSelectAll={() => setTableSelectedKeys(prev => prev.size === rows.length ? new Set() : new Set(rows.map(r => r.id)))}
                      onSelectRow={id => setTableSelectedKeys(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })}
                      getRowKey={r => r.id}
                    />
                  </div>
                </Section>

                <Section title="Table / Loading · Empty">
                  <Col style={{ width: '100%' }}>
                    <div style={{ width: '100%', border: '1px solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                      <Table columns={cols} data={[]} size="md" getRowKey={r => r.id} loading />
                    </div>
                    <div style={{ width: '100%', border: '1px solid var(--sys-border-neutral-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                      <Table columns={cols} data={[]} size="md" getRowKey={r => r.id} empty="조건에 맞는 데이터가 없습니다." />
                    </div>
                  </Col>
                </Section>
              </>
            )
          })()}
        </div>

        <div style={{ height: 80 }} />
      </main>
    </div>
  )
}
