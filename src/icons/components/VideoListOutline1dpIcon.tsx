import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const VideoListOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.25C3.48122 8.25 2.25 9.48122 2.25 11V18C2.25 19.5188 3.48122 20.75 5 20.75H15C16.5188 20.75 17.75 19.5188 17.75 18V11C17.75 9.48122 16.5188 8.25 15 8.25H5ZM15 9.75C15.6904 9.75 16.25 10.3096 16.25 11V18C16.25 18.6904 15.6904 19.25 15 19.25H5C4.30964 19.25 3.75 18.6904 3.75 18V11C3.75 10.3096 4.30964 9.75 5 9.75H15Z" fill="currentColor"/>
<path d="M8 4.25C7.58579 4.25 7.25 4.58579 7.25 5C7.25 5.41421 7.58579 5.75 8 5.75H18C19.2426 5.75 20.25 6.75736 20.25 8V15C20.25 15.4142 20.5858 15.75 21 15.75C21.4142 15.75 21.75 15.4142 21.75 15V8C21.75 5.92893 20.0711 4.25 18 4.25H8Z" fill="currentColor"/>
  </svg>
);

export default VideoListOutline1dpIcon;
