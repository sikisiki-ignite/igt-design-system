import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowDownloadOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 12.5C21.5523 12.5 22 12.9477 22 13.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V13.5C2 12.9477 2.44772 12.5 3 12.5C3.55228 12.5 4 12.9477 4 13.5V19.5H20V13.5C20 12.9477 20.4477 12.5 21 12.5Z" fill="currentColor"/>
<path d="M12 2C12.5523 2 13 2.44772 13 3V11.5859L15.793 8.79297C16.1835 8.40244 16.8165 8.40244 17.207 8.79297C17.5976 9.18349 17.5976 9.81651 17.207 10.207L12.707 14.707L12.6309 14.7754C12.2381 15.0957 11.6591 15.0731 11.293 14.707L6.79297 10.207C6.40244 9.81651 6.40244 9.18349 6.79297 8.79297C7.18349 8.40245 7.81651 8.40244 8.20703 8.79297L11 11.5859V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowDownloadOutline2dpIcon;
