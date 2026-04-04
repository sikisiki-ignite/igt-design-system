import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowLeftOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.7933 3.79284C11.1839 3.40243 11.8169 3.40235 12.2074 3.79284C12.5977 4.18334 12.5977 4.81643 12.2074 5.2069L6.41444 10.9999H20.0004C20.5525 11 21.0004 11.4477 21.0004 11.9999C21.0003 12.552 20.5525 12.9997 20.0004 12.9999H6.41444L12.2074 18.7928C12.5977 19.1833 12.5977 19.8164 12.2074 20.2069C11.817 20.5974 11.1839 20.5972 10.7933 20.2069L3.29334 12.7069C2.92723 12.3408 2.90463 11.7618 3.22499 11.369L3.29334 11.2928L10.7933 3.79284Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowLeftOutline2dpIcon;
