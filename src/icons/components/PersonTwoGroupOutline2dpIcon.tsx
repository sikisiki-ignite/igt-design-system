import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PersonTwoGroupOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 13C11.3137 13 14 15.6863 14 19C14 19.5523 13.5523 20 13 20C12.4477 20 12 19.5523 12 19C12 16.7909 10.2091 15 8 15C5.79086 15 4 16.7909 4 19C4 19.5523 3.55228 20 3 20C2.44772 20 2 19.5523 2 19C2 15.6863 4.68629 13 8 13Z" fill="currentColor"/>
<path d="M17 13C20.3137 13 23 15.6863 23 19C23 19.5523 22.5523 20 22 20C21.4477 20 21 19.5523 21 19C21 16.7909 19.2091 15 17 15C15.9757 15 15.0416 15.3854 14.334 16.0186C14.0444 15.4045 13.6687 14.8393 13.2217 14.3389C14.2532 13.5017 15.568 13 17 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4C19.2091 4 21 5.79086 21 8C21 10.2091 19.2091 12 17 12C14.7909 12 13 10.2091 13 8C13 5.79086 14.7909 4 17 4ZM17 6C15.8954 6 15 6.89543 15 8C15 9.10457 15.8954 10 17 10C18.1046 10 19 9.10457 19 8C19 6.89543 18.1046 6 17 6Z" fill="currentColor"/>
  </svg>
);

export default PersonTwoGroupOutline2dpIcon;
