import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowUploadOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 12.4998C21.5523 12.4998 22 12.9475 22 13.4998V19.4998C21.9999 20.6042 21.1045 21.4998 20 21.4998H4C2.89551 21.4998 2.00013 20.6042 2 19.4998V13.4998C2 12.9475 2.44772 12.4998 3 12.4998C3.55228 12.4998 4 12.9475 4 13.4998V19.4998H20V13.4998C20 12.9475 20.4477 12.4998 21 12.4998Z" fill="currentColor"/>
<path d="M11.3691 2.22437C11.7619 1.90402 12.3409 1.92662 12.707 2.29273L17.207 6.79273C17.5974 7.18327 17.5975 7.81631 17.207 8.2068C16.8165 8.59717 16.1835 8.59717 15.793 8.2068L13 5.41383V13.9998C12.9999 14.5519 12.5522 14.9998 12 14.9998C11.4478 14.9998 11.0001 14.5519 11 13.9998V5.41383L8.20703 8.2068C7.81654 8.59717 7.18346 8.59717 6.79297 8.2068C6.40248 7.81631 6.40256 7.18327 6.79297 6.79273L11.293 2.29273L11.3691 2.22437Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowUploadOutline2dpIcon;
