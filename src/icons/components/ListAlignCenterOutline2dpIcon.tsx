import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ListAlignCenterOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17 17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H7C6.44772 19 6 18.5523 6 18C6 17.4477 6.44772 17 7 17H17Z" fill="currentColor"/>
<path d="M19.5 13C20.0523 13 20.5 13.4477 20.5 14C20.5 14.5523 20.0523 15 19.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14C3.5 13.4477 3.94772 13 4.5 13H19.5Z" fill="currentColor"/>
<path d="M17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9H17Z" fill="currentColor"/>
<path d="M19.5 5C20.0523 5 20.5 5.44772 20.5 6C20.5 6.55228 20.0523 7 19.5 7H4.5C3.94772 7 3.5 6.55228 3.5 6C3.5 5.44772 3.94772 5 4.5 5H19.5Z" fill="currentColor"/>
  </svg>
);

export default ListAlignCenterOutline2dpIcon;
