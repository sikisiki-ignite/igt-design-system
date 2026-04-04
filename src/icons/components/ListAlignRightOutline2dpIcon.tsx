import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ListAlignRightOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.5 9C20.0523 9 20.5 9.44772 20.5 10C20.5 10.5523 20.0523 11 19.5 11H9.5C8.94772 11 8.5 10.5523 8.5 10C8.5 9.44772 8.94772 9 9.5 9H19.5Z" fill="currentColor"/>
<path d="M19.5 17C20.0523 17 20.5 17.4477 20.5 18C20.5 18.5523 20.0523 19 19.5 19H9.5C8.94772 19 8.5 18.5523 8.5 18C8.5 17.4477 8.94772 17 9.5 17H19.5Z" fill="currentColor"/>
<path d="M19.5 13C20.0523 13 20.5 13.4477 20.5 14C20.5 14.5523 20.0523 15 19.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14C3.5 13.4477 3.94772 13 4.5 13H19.5Z" fill="currentColor"/>
<path d="M19.5 5C20.0523 5 20.5 5.44772 20.5 6C20.5 6.55228 20.0523 7 19.5 7H4.5C3.94772 7 3.5 6.55228 3.5 6C3.5 5.44772 3.94772 5 4.5 5H19.5Z" fill="currentColor"/>
  </svg>
);

export default ListAlignRightOutline2dpIcon;
