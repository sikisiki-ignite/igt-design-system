import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowUpOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.3695 3.22434C11.7623 2.90406 12.3413 2.92661 12.7074 3.2927L20.2074 10.7927C20.5976 11.1832 20.5978 11.8164 20.2074 12.2068C19.817 12.5971 19.1839 12.5969 18.7933 12.2068L13.0004 6.41379V19.9997C13.0002 20.5517 12.5524 20.9996 12.0004 20.9997C11.4482 20.9997 11.0006 20.5518 11.0004 19.9997V6.41379L5.20741 12.2068C4.817 12.5971 4.18388 12.5969 3.79335 12.2068C3.40285 11.8163 3.40289 11.1832 3.79335 10.7927L11.2933 3.2927L11.3695 3.22434Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowUpOutline2dpIcon;
