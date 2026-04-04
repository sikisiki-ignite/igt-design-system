import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PersonSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.451 15.5C17.0682 15.5 19.3168 17.3578 19.8114 19.9277C20.0181 21.0026 19.195 21.9997 18.1004 22H5.99889C4.84053 21.9997 3.99122 20.9095 4.27428 19.7861L4.33873 19.5527C5.05147 17.1578 7.2574 15.5 9.77525 15.5H14.451Z" fill="currentColor"/>
<path d="M11.9999 2C15.3136 2.00002 17.9999 4.6863 17.9999 8C17.9999 11.3137 15.3136 14 11.9999 14C8.68621 13.9999 5.99986 11.3137 5.99986 8C5.99986 4.68633 8.68621 2.00006 11.9999 2Z" fill="currentColor"/>
  </svg>
);

export default PersonSolidIcon;
