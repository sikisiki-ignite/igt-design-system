import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const VideoFullscreenOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 14.5C19.4477 14.5 19 14.9477 19 15.5V18C19 18.5523 18.5523 19 18 19H15.5C14.9477 19 14.5 19.4477 14.5 20C14.5 20.5523 14.9477 21 15.5 21H18C19.6569 21 21 19.6569 21 18V15.5C21 14.9477 20.5523 14.5 20 14.5Z" fill="currentColor"/>
<path d="M4 14.5C3.44772 14.5 3 14.9477 3 15.5V18C3 19.6569 4.34315 21 6 21H8.5C9.05228 21 9.5 20.5523 9.5 20C9.5 19.4477 9.05228 19 8.5 19H6C5.44772 19 5 18.5523 5 18V15.5C5 14.9477 4.55228 14.5 4 14.5Z" fill="currentColor"/>
<path d="M15.5 3C14.9477 3 14.5 3.44772 14.5 4C14.5 4.55228 14.9477 5 15.5 5H18C18.5523 5 19 5.44772 19 6V8.5C19 9.05228 19.4477 9.5 20 9.5C20.5523 9.5 21 9.05228 21 8.5V6C21 4.34315 19.6569 3 18 3H15.5Z" fill="currentColor"/>
<path d="M6 3C4.34315 3 3 4.34315 3 6V8.5C3 9.05228 3.44772 9.5 4 9.5C4.55228 9.5 5 9.05228 5 8.5V6C5 5.44772 5.44772 5 6 5H8.5C9.05228 5 9.5 4.55228 9.5 4C9.5 3.44772 9.05228 3 8.5 3H6Z" fill="currentColor"/>
  </svg>
);

export default VideoFullscreenOutline2dpIcon;
