import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const BuildingOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 20V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V20H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M10 12C11.3668 12 12.6332 12 14 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M10 9C11.3668 9 12.6332 9 14 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M17 20V12H19C20.1046 12 21 12.8954 21 14V20H17Z" stroke="currentColor" stroke-width="2"/>
<path d="M7 20V12H5C3.89543 12 3 12.8954 3 14V20H7Z" stroke="currentColor" stroke-width="2"/>
<path d="M12 20V16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
);

export default BuildingOutline2dpIcon;
