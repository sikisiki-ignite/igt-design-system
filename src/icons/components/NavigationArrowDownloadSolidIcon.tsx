import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowDownloadSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 12.5C21.5523 12.5 22 12.9477 22 13.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V13.5C2 12.9477 2.44772 12.5 3 12.5C3.55228 12.5 4 12.9477 4 13.5V19.5H20V13.5C20 12.9477 20.4477 12.5 21 12.5Z" fill="currentColor"/>
<path d="M12 2C12.5523 2 13 2.44772 13 3V8.5H16.5C16.9044 8.5 17.269 8.74359 17.4238 9.11719C17.5786 9.49086 17.493 9.92103 17.207 10.207L12.707 14.707L12.6309 14.7754C12.2381 15.0957 11.6591 15.0731 11.293 14.707L6.79297 10.207C6.50697 9.92103 6.42139 9.49086 6.57617 9.11719C6.73098 8.74359 7.09558 8.5 7.5 8.5H11V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowDownloadSolidIcon;
