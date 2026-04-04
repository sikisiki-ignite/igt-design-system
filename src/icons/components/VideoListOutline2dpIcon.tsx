import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const VideoListOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8C3.34315 8 2 9.34315 2 11V18C2 19.6569 3.34315 21 5 21H15C16.6569 21 18 19.6569 18 18V11C18 9.34315 16.6569 8 15 8H5ZM15 10C15.5523 10 16 10.4477 16 11V18C16 18.5523 15.5523 19 15 19H5C4.44772 19 4 18.5523 4 18V11C4 10.4477 4.44772 10 5 10H15Z" fill="currentColor"/>
<path d="M8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6H18C19.1046 6 20 6.89543 20 8V15C20 15.5523 20.4477 16 21 16C21.5523 16 22 15.5523 22 15V8C22 5.79086 20.2091 4 18 4H8Z" fill="currentColor"/>
  </svg>
);

export default VideoListOutline2dpIcon;
