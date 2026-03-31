/**
 * IGT Design System — recharts / SVG용 색상 토큰
 *
 * CSS 변수(--sys-*)는 recharts 내부에서 직접 참조 불가.
 * primitives.css의 --ref-* 값을 그대로 매핑해 단일 소스로 관리.
 */

export const IGT = {
  // ── 브랜드 ──────────────────────────────────────
  blue50:   '#e8f3ff',
  blue100:  '#c9e2ff',
  blue200:  '#90c2ff',
  blue400:  '#4593fc',
  blue500:  '#3182f6',   // brand default (--sys-container-brand-solid-default)
  blue600:  '#2272eb',
  blue700:  '#1b64da',

  // ── 성공 ─────────────────────────────────────────
  green100: '#aeefd5',
  green300: '#3fd599',
  green500: '#03b26c',   // success default
  green600: '#02a262',

  // ── 위험 ─────────────────────────────────────────
  red100:   '#ffd4d6',
  red200:   '#feafb4',
  red300:   '#fb8890',
  red500:   '#f04452',   // danger default
  red600:   '#e42939',

  // ── 경고 ─────────────────────────────────────────
  orange100: '#ffcd80',
  orange400: '#ffa927',
  orange500: '#fe9800',  // warning default
  orange600: '#fb8800',

  // ── 보조 ─────────────────────────────────────────
  purple300: '#c770e4',
  purple400: '#b44bd7',

  teal300:  '#58c7c7',
  teal400:  '#30b6b6',

  // ── 중립 ─────────────────────────────────────────
  grey100:  '#f2f4f6',
  grey200:  '#e5e8eb',
  grey400:  '#b0b8c1',
  grey500:  '#8b95a1',
  grey700:  '#4e5968',
  grey900:  '#191f28',
} as const

/**
 * 차트 시리즈 기본 팔레트 (순서대로 사용)
 */
export const CHART_COLORS = [
  IGT.blue500,
  IGT.green500,
  IGT.orange500,
  IGT.purple400,
  IGT.red500,
  IGT.teal400,
] as const

/**
 * 차트 공통 스타일 props
 */
export const CHART_STYLE = {
  grid: { strokeDasharray: '3 3', stroke: IGT.grey200, vertical: false },
  axis: { tick: { fontSize: 12, fill: IGT.grey500 }, axisLine: false, tickLine: false },
  axisY: { tick: { fontSize: 11, fill: IGT.grey500 }, axisLine: false, tickLine: false, width: 48 },
} as const
