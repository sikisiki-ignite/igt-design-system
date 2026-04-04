import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DocumentOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.5 13C14.0523 13 14.5 13.4477 14.5 14C14.5 14.5523 14.0523 15 13.5 15H8.5C7.94772 15 7.5 14.5523 7.5 14C7.5 13.4477 7.94772 13 8.5 13H13.5Z" fill="currentColor"/>
<path d="M15.5 9C16.0523 9 16.5 9.44772 16.5 10C16.5 10.5523 16.0523 11 15.5 11H8.5C7.94772 11 7.5 10.5523 7.5 10C7.5 9.44772 7.94772 9 8.5 9H15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H18ZM6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V5C19 4.44772 18.5523 4 18 4H6Z" fill="currentColor"/>
  </svg>
);

export default DocumentOutline2dpIcon;
