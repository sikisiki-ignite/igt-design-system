import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const SdcardOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 6.5C9.55228 6.5 10 6.94772 10 7.5V10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10V7.5C8 6.94772 8.44772 6.5 9 6.5Z" fill="currentColor"/>
<path d="M12.5 6.5C13.0523 6.5 13.5 6.94772 13.5 7.5V10C13.5 10.5523 13.0523 11 12.5 11C11.9477 11 11.5 10.5523 11.5 10V7.5C11.5 6.94772 11.9477 6.5 12.5 6.5Z" fill="currentColor"/>
<path d="M16 6.5C16.5523 6.5 17 6.94772 17 7.5V10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V7.5C15 6.94772 15.4477 6.5 16 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V8.32812C3.00008 7.53258 3.31637 6.76957 3.87891 6.20703L7.20703 2.87891C7.76957 2.31637 8.53259 2.00008 9.32812 2H18ZM9.32812 4C9.06302 4.00008 8.80856 4.1055 8.62109 4.29297L5.29297 7.62109C5.1055 7.80856 5.00008 8.06302 5 8.32812V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V5C19 4.44772 18.5523 4 18 4H9.32812Z" fill="currentColor"/>
  </svg>
);

export default SdcardOutline2dpIcon;
