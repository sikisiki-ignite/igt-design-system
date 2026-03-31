// ============================================================
// IGT Design System — Component Types
// Auto-generated from Figma: IGT Desktop (renew)
// Source: https://www.figma.com/design/f0pUEjS8joIDXShjcxBy0j
// ============================================================

// ─── Shared ──────────────────────────────────────────────────

export type Density = 'STANDARD' | 'COMPACT'

export type InteractionState = 'normal' | 'hover' | 'pressed' | 'disabled' | 'loading' | 'focused' | 'readOnly'

// ─── Button ──────────────────────────────────────────────────

export type ButtonTone = 'primary' | 'secondary' | 'danger' | 'primaryInverse'
export type ButtonVariant = 'fill' | 'soft' | 'outline' | 'ghost'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonState = 'normal' | 'hover' | 'pressed' | 'disabled' | 'loading'

export interface ButtonProps {
  tone?: ButtonTone
  variant?: ButtonVariant
  size?: ButtonSize
  state?: ButtonState
  density?: Density
  children: React.ReactNode
  onClick?: () => void
}

// ─── TextButton ──────────────────────────────────────────────

export type TextButtonVariant = 'plain' | 'underline' | 'chevron'
export type TextButtonTone = 'accent' | 'danger' | 'neutral' | 'neutralMuted'
export type TextButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type TextButtonState = 'normal' | 'hover' | 'pressed' | 'disabled'

export interface TextButtonProps {
  variant?: TextButtonVariant
  tone?: TextButtonTone
  size?: TextButtonSize
  state?: TextButtonState
  children: React.ReactNode
  onClick?: () => void
}

// ─── IconButton ──────────────────────────────────────────────

export type IconButtonTone = 'neutral' | 'subtle'
export type IconButtonVariant = 'fill' | 'outline' | 'ghost'
export type IconButtonSize = 'xs' | 'sm' | 'md'
export type IconButtonState = 'normal' | 'hover' | 'pressed' | 'disabled' | 'loading'

export interface IconButtonProps {
  tone?: IconButtonTone
  variant?: IconButtonVariant
  size?: IconButtonSize
  state?: IconButtonState
  density?: Density
  icon: React.ReactNode
  'aria-label': string
  onClick?: () => void
}

// ─── FloatingButton ──────────────────────────────────────────

export type FloatingButtonLayout = 'standard' | 'extended'
export type FloatingButtonPriority = 'brand' | 'neutral' | 'subtle'
export type FloatingButtonSize = 'md' | 'lg'
export type FloatingButtonState = 'normal' | 'hover' | 'pressed' | 'disabled' | 'loading'

export interface FloatingButtonProps {
  layout?: FloatingButtonLayout
  priority?: FloatingButtonPriority
  size?: FloatingButtonSize
  state?: FloatingButtonState
  icon: React.ReactNode
  label?: string // required when layout='extended'
  onClick?: () => void
}

// ─── ButtonGroup ─────────────────────────────────────────────

export type ButtonGroupLayout = 'inline' | 'stack'
export type ButtonGroupDistribution = 'content' | 'equal'
export type ButtonGroupSize = 'xs' | 'sm' | 'md' | 'lg'

export interface ButtonGroupProps {
  layout?: ButtonGroupLayout
  distribution?: ButtonGroupDistribution
  size?: ButtonGroupSize
  children: React.ReactNode
}

// ─── Link ────────────────────────────────────────────────────

export type LinkTone = 'brand' | 'neutral'
export type LinkUnderline = 'always' | 'auto' | 'none'
export type LinkState = 'normal' | 'hover' | 'pressed' | 'disabled'

export interface LinkProps {
  tone?: LinkTone
  underline?: LinkUnderline
  state?: LinkState
  href: string
  children: React.ReactNode
}

// ─── TextField ───────────────────────────────────────────────

export type TextFieldVariant = 'fill' | 'outline'
export type TextFieldSize = 'sm' | 'md' | 'lg'
export type TextFieldState = 'normal' | 'hover' | 'focused' | 'disabled' | 'readOnly'

export interface TextFieldProps {
  variant?: TextFieldVariant
  size?: TextFieldSize
  state?: TextFieldState
  density?: Density
  value?: string
  placeholder?: string
  label?: string
  helperText?: string
  invalid?: boolean
  onChange?: (value: string) => void
}

// ─── TextArea ────────────────────────────────────────────────

export type TextAreaVariant = 'fill' | 'outline'
export type TextAreaSize = 'md' | 'lg'
export type TextAreaState = 'normal' | 'hover' | 'focused' | 'disabled' | 'readOnly'

export interface TextAreaProps {
  variant?: TextAreaVariant
  size?: TextAreaSize
  state?: TextAreaState
  value?: string
  placeholder?: string
  label?: string
  helperText?: string
  invalid?: boolean
  onChange?: (value: string) => void
}

// ─── SearchField ─────────────────────────────────────────────

export type SearchFieldSize = 'xs' | 'md' | 'lg'
export type SearchFieldState = 'normal' | 'hover' | 'focus' | 'disabled' | 'readOnly'

export interface SearchFieldProps {
  size?: SearchFieldSize
  state?: SearchFieldState
  density?: Density
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  onClear?: () => void
}

// ─── Select ──────────────────────────────────────────────────

export type SelectTriggerType = 'filled' | 'outlined' | 'plain'
export type SelectTriggerState = 'default' | 'hover' | 'pressed' | 'disabled' | 'error' | 'read only'
export type SelectSize = 'xs' | 'sm' | 'md'

export interface SelectProps {
  type?: SelectTriggerType
  size?: SelectSize
  state?: SelectTriggerState
  value?: string
  placeholder?: string
  options: { label: string; value: string }[]
  onChange?: (value: string) => void
}

// ─── Checkbox ────────────────────────────────────────────────

export type CheckboxValue = 'checked' | 'unchecked' | 'indeterminate'
export type CheckboxSize = 'sm' | 'md'

export interface CheckboxProps {
  value?: CheckboxValue
  size?: CheckboxSize
  disabled?: boolean
  readOnly?: boolean
  invalid?: boolean
  label?: string
  onChange?: (value: CheckboxValue) => void
}

// ─── Radio ───────────────────────────────────────────────────

export type RadioSize = 'sm' | 'md'

export interface RadioProps {
  selected?: boolean
  size?: RadioSize
  disabled?: boolean
  readOnly?: boolean
  invalid?: boolean
  label?: string
  onChange?: (selected: boolean) => void
}

// ─── Switch ──────────────────────────────────────────────────

export type SwitchSize = 'sm' | 'md'
export type SwitchState = 'normal' | 'hover' | 'pressed' | 'disabled'

export interface SwitchProps {
  on?: boolean
  size?: SwitchSize
  state?: SwitchState
  label?: string
  onChange?: (on: boolean) => void
}

// ─── Badge ───────────────────────────────────────────────────

export type BadgeKind = 'count' | 'dot'
export type BadgeTone = 'accent' | 'neutral' | 'urgent'

export interface BadgeProps {
  kind?: BadgeKind
  tone?: BadgeTone
  count?: number // used when kind='count'
}

// ─── Tag ─────────────────────────────────────────────────────

export type TagSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl (Hero section Only)'
export type TagColor =
  | 'grey' | 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal' | 'yellow'
  | 'semanticDanger' | 'semanticInfo' | 'semanticSuccess' | 'semanticWarning'
export type TagTone = 'soft' | 'outline'

export interface TagProps {
  size?: TagSize
  color?: TagColor
  tone?: TagTone
  children: React.ReactNode
  onRemove?: () => void
}

// ─── Avatar ──────────────────────────────────────────────────

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'rounded'

export interface AvatarProps {
  size?: AvatarSize
  shape?: AvatarShape
  src?: string
  alt?: string
  fallback?: string // initials
}

// ─── Toast ───────────────────────────────────────────────────

export type ToastType = 'neutral' | 'info' | 'success' | 'warning' | 'error'

export interface ToastProps {
  type?: ToastType
  dismissible?: boolean
  message: string
  onDismiss?: () => void
}

// ─── Alert ───────────────────────────────────────────────────

export type AlertType = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps {
  type?: AlertType
  title?: string
  children: React.ReactNode
  onDismiss?: () => void
}

// ─── Dialog ──────────────────────────────────────────────────

export type DialogSize = 'sm (confirm)' | 'md (modal)'

export interface DialogProps {
  size?: DialogSize
  open: boolean
  title?: string
  children: React.ReactNode
  onClose: () => void
}

// ─── Tooltip ─────────────────────────────────────────────────

export type TooltipDensity = 'compact' | 'rich'
export type TooltipEmphasis = 'neutral' | 'subtle' | 'accent'
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right' | 'none'

export interface TooltipProps {
  density?: TooltipDensity
  emphasis?: TooltipEmphasis
  placement?: TooltipPlacement
  arrow?: boolean
  content: React.ReactNode
  children: React.ReactNode
}

// ─── Divider ─────────────────────────────────────────────────

export type DividerDirection = 'horizontal' | 'vertical'
export type DividerEmphasis = 'weak' | 'default' | 'strong'

export interface DividerProps {
  direction?: DividerDirection
  emphasis?: DividerEmphasis
}

// ─── Accordion ───────────────────────────────────────────────

export type AccordionType = 'contained' | 'plain'
export type AccordionSize = 'sm' | 'md' | 'lg'
export type AccordionState = 'collapsed' | 'expanded' | 'disabled'

export interface AccordionItemProps {
  type?: AccordionType
  size?: AccordionSize
  state?: AccordionState
  title: string
  children: React.ReactNode
}

// ─── Chip ────────────────────────────────────────────────────

export type ChipSize = 'xs' | 'sm' | 'md'

export interface ActionChipProps {
  size?: ChipSize
  disabled?: boolean
  selected?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export type SelectChipVariant = 'fill' | 'outline'

export interface SelectChipProps {
  selected?: boolean
  variant?: SelectChipVariant
  size?: ChipSize
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

// ─── Rating ──────────────────────────────────────────────────

export type RatingSize = 'xs' | 'sm' | 'md'
export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

export interface RatingProps {
  size?: RatingSize
  value?: RatingValue
  disabled?: boolean
  onChange?: (value: RatingValue) => void
}

// ─── Skeleton ────────────────────────────────────────────────

export type SkeletonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SkeletonRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg'

export interface SkeletonRectProps {
  size?: SkeletonSize
  radius?: SkeletonRadius
}

export interface SkeletonCircleProps {
  size?: SkeletonSize
}

export interface SkeletonTextProps {
  size?: SkeletonSize
}

// ─── SegmentedControl ────────────────────────────────────────

export type SegmentedControlSize = 'xs' | 'sm' | 'md'
export type SegmentedControlContent = 'text' | 'icon' | 'iconText'

export interface SegmentedControlProps {
  size?: SegmentedControlSize
  content?: SegmentedControlContent
  value: string
  segments: { label: string; value: string; icon?: React.ReactNode }[]
  onChange: (value: string) => void
}

// ─── Tab ─────────────────────────────────────────────────────

export type TabVariant = 'filled' | 'underline'
export type TabLayout = 'fixed' | 'scrollable'
export type TabSize = 'sm' | 'md' | 'lg'

export interface TabProps {
  variant?: TabVariant
  layout?: TabLayout
  size?: TabSize
  value: string
  tabs: { label: string; value: string }[]
  onChange: (value: string) => void
}

// ─── Breadcrumb ──────────────────────────────────────────────

export type BreadcrumbSeparator = 'chevron' | 'dot' | 'slash'
export type BreadcrumbLeading = 'none' | 'home'

export interface BreadcrumbProps {
  separator?: BreadcrumbSeparator
  leading?: BreadcrumbLeading
  items: { label: string; href?: string }[]
}

// ─── Pagination ──────────────────────────────────────────────

export type PaginationVariant = 'default' | 'minimal'
export type PaginationSize = 'sm' | 'md'

export interface PaginationProps {
  variant?: PaginationVariant
  size?: PaginationSize
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}

// ─── Navigation ──────────────────────────────────────────────

export type SideNavigationSize = 'sm' | 'md'
export type SideNavigationTone = 'neutral' | 'accent'

export interface SideNavigationProps {
  size?: SideNavigationSize
  tone?: SideNavigationTone
  items: {
    label: string
    href?: string
    depth?: 1 | 2 | 3
    state?: 'default' | 'current' | 'disabled'
    children?: SideNavigationProps['items']
  }[]
}

export type TopNavigationBreakpoint = 'md-lg' | 'xl'

export interface TopNavigationProps {
  breakpoint?: TopNavigationBreakpoint
  isLoggedIn?: boolean
}

// ─── Popover ─────────────────────────────────────────────────

export type PopoverEmphasis = 'neutral' | 'subtle'

export interface PopoverProps {
  emphasis?: PopoverEmphasis
  open: boolean
  placement?: TooltipPlacement
  content: React.ReactNode
  children: React.ReactNode
}

// ─── StatusIndicator ─────────────────────────────────────────

export type StatusIndicatorSize = 'xs' | 'sm' | 'md' | 'lg'
export type StatusIndicatorTone = 'active' | 'inactive' | 'attention' | 'error'

export interface StatusIndicatorProps {
  size?: StatusIndicatorSize
  tone?: StatusIndicatorTone
}

// ─── NumberStepper ───────────────────────────────────────────

export type NumberStepperEmphasis = 'fill' | 'outline'
export type NumberStepperSize = 'xs' | 'sm' | 'md'

export interface NumberStepperProps {
  emphasis?: NumberStepperEmphasis
  size?: NumberStepperSize
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
}

// ─── OverlayAction ───────────────────────────────────────

export type OverlayActionTone = 'default' | 'inverse'
export type OverlayActionSize = 'xs' | 'sm' | 'md'
export type OverlayActionState = 'normal' | 'hover' | 'pressed' | 'disabled' | 'loading'

export interface OverlayActionProps {
  tone?: OverlayActionTone
  size?: OverlayActionSize
  state?: OverlayActionState
  icon: React.ReactNode
  'aria-label': string
  onClick?: () => void
}

// ─── Table ───────────────────────────────────────────────────

export type TableSize = 'sm' | 'md' | 'lg'

export interface TableColumnDef<T = unknown> {
  key: string
  header: React.ReactNode
  width?: number | string
  align?: 'left' | 'right' | 'center'
  cell: (row: T, rowIndex: number) => React.ReactNode
}

export interface TableProps<T = unknown> {
  columns: TableColumnDef<T>[]
  data: T[]
  size?: TableSize
  selectable?: boolean
  selectedKeys?: Set<string>
  onSelectAll?: () => void
  onSelectRow?: (key: string) => void
  getRowKey: (row: T) => string
  loading?: boolean
  empty?: React.ReactNode
  onRowClick?: (row: T) => void
}

export interface TableCellStrongProps {
  overline: React.ReactNode
  title: React.ReactNode
}
