import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MenuOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 16.75C20.6904 16.75 21.25 17.3096 21.25 18C21.25 18.6904 20.6904 19.25 20 19.25H4C3.30964 19.25 2.75 18.6904 2.75 18C2.75 17.3096 3.30964 16.75 4 16.75H20Z" fill="currentColor"/>
<path d="M20 10.75C20.6904 10.75 21.25 11.3096 21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H20Z" fill="currentColor"/>
<path d="M20 4.75C20.6904 4.75 21.25 5.30964 21.25 6C21.25 6.69036 20.6904 7.25 20 7.25H4C3.30964 7.25 2.75 6.69036 2.75 6C2.75 5.30964 3.30964 4.75 4 4.75H20Z" fill="currentColor"/>
  </svg>
);

export default MenuOutline3dpIcon;
