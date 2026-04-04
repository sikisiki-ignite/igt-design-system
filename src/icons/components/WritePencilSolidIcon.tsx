import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const WritePencilSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.5 3.00002C12.0522 3.00002 12.4999 3.44779 12.5 4.00002C12.5 4.5523 12.0523 5.00002 11.5 5.00002H6C5.44775 5.00002 5.00006 5.44779 5 6.00002V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12.5C19.0001 11.9478 19.4478 11.5 20 11.5C20.5522 11.5 20.9999 11.9478 21 12.5V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6.00002C3.00006 4.34322 4.34318 3.00002 6 3.00002H11.5Z" fill="currentColor"/>
<path d="M17.793 2.79299C18.7358 1.85025 20.2642 1.85026 21.207 2.79299C22.1498 3.73578 22.1498 5.26424 21.207 6.20705L11.707 15.707C11.5195 15.8946 11.2652 16 11 16H9C8.44772 16 8 15.5523 8 15V13C8.00003 12.7348 8.10546 12.4805 8.29297 12.293L17.793 2.79299Z" fill="currentColor"/>
  </svg>
);

export default WritePencilSolidIcon;
