import type { SVGProps } from 'react';
import { iconRegistry } from './registry';
import './Icon.css';

export type IconVariant = 'solid' | 'outline';
export type IconWeight = '1dp' | '1.5dp' | '2dp' | '3dp' | 'none';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** 카테고리-아이콘명. 예: "navigation-arrow-up" */
  name: string;
  /** solid | outline (기본: outline) */
  variant?: IconVariant;
  /** stroke 굵기 (기본: 2dp) */
  weight?: IconWeight;
  /** 토큰 사이즈 xs=14 sm=16 md=20 lg=24 xl=32 (기본: md) */
  size?: IconSize | number;
}

const SIZE_MAP: Record<IconSize, number> = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function Icon({ name, variant = 'outline', weight = '2dp', size = 'md', ...props }: IconProps) {
  const px = typeof size === 'number' ? size : SIZE_MAP[size];

  const candidates = iconRegistry.filter((m) => m.name === name);
  const exact =
    candidates.find((m) => m.style === variant && m.weight === weight) ??
    candidates.find((m) => m.style === variant) ??
    candidates[0];

  if (!exact) {
    return (
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" opacity="0.2" />
      </svg>
    );
  }

  const Comp = exact.component;
  return <Comp size={px} {...props} />;
}
