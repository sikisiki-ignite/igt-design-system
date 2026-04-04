import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowUpSolid2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.0539 3.54356C11.643 3.06308 12.5115 3.09697 13.0607 3.6461L19.3537 9.93907C20.2979 10.884 19.6291 12.4994 18.2931 12.4996H13.0002V19.9996C12.9998 20.5515 12.5521 20.9995 12.0002 20.9996C11.4481 20.9996 11.0005 20.5516 11.0002 19.9996V12.4996H5.70719C4.371 12.4996 3.70206 10.884 4.64665 9.93907L10.9396 3.6461L11.0539 3.54356Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowUpSolid2dpIcon;
