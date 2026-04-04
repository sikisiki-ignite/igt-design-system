import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ListOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.75 17C4.44036 17 5 17.5596 5 18.25C5 18.9404 4.44036 19.5 3.75 19.5C3.05964 19.5 2.5 18.9404 2.5 18.25C2.5 17.5596 3.05964 17 3.75 17Z" fill="currentColor"/>
<path d="M20 17.25C20.5523 17.25 21 17.6977 21 18.25C21 18.8023 20.5523 19.25 20 19.25H8.5C7.94772 19.25 7.5 18.8023 7.5 18.25C7.5 17.6977 7.94772 17.25 8.5 17.25H20Z" fill="currentColor"/>
<path d="M3.75 10.75C4.44036 10.75 5 11.3096 5 12C5 12.6904 4.44036 13.25 3.75 13.25C3.05964 13.25 2.5 12.6904 2.5 12C2.5 11.3096 3.05964 10.75 3.75 10.75Z" fill="currentColor"/>
<path d="M20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8.5C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11H20Z" fill="currentColor"/>
<path d="M3.75 4.5C4.44036 4.5 5 5.05964 5 5.75C5 6.44036 4.44036 7 3.75 7C3.05964 7 2.5 6.44036 2.5 5.75C2.5 5.05964 3.05964 4.5 3.75 4.5Z" fill="currentColor"/>
<path d="M20 4.75C20.5523 4.75 21 5.19772 21 5.75C21 6.30228 20.5523 6.75 20 6.75H8.5C7.94772 6.75 7.5 6.30228 7.5 5.75C7.5 5.19772 7.94772 4.75 8.5 4.75H20Z" fill="currentColor"/>
  </svg>
);

export default ListOutline2dpIcon;
