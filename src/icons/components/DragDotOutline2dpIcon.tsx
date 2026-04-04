import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DragDotOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.5 16.75C9.4665 16.75 10.25 17.5335 10.25 18.5C10.25 19.4665 9.4665 20.25 8.5 20.25C7.5335 20.25 6.75 19.4665 6.75 18.5C6.75 17.5335 7.5335 16.75 8.5 16.75Z" fill="currentColor"/>
<path d="M15.5 16.75C16.4665 16.75 17.25 17.5335 17.25 18.5C17.25 19.4665 16.4665 20.25 15.5 20.25C14.5335 20.25 13.75 19.4665 13.75 18.5C13.75 17.5335 14.5335 16.75 15.5 16.75Z" fill="currentColor"/>
<path d="M8.5 10.25C9.4665 10.25 10.25 11.0335 10.25 12C10.25 12.9665 9.4665 13.75 8.5 13.75C7.5335 13.75 6.75 12.9665 6.75 12C6.75 11.0335 7.5335 10.25 8.5 10.25Z" fill="currentColor"/>
<path d="M15.5 10.25C16.4665 10.25 17.25 11.0335 17.25 12C17.25 12.9665 16.4665 13.75 15.5 13.75C14.5335 13.75 13.75 12.9665 13.75 12C13.75 11.0335 14.5335 10.25 15.5 10.25Z" fill="currentColor"/>
<path d="M8.5 3.75C9.4665 3.75 10.25 4.5335 10.25 5.5C10.25 6.4665 9.4665 7.25 8.5 7.25C7.5335 7.25 6.75 6.4665 6.75 5.5C6.75 4.5335 7.5335 3.75 8.5 3.75Z" fill="currentColor"/>
<path d="M15.5 3.75C16.4665 3.75 17.25 4.5335 17.25 5.5C17.25 6.4665 16.4665 7.25 15.5 7.25C14.5335 7.25 13.75 6.4665 13.75 5.5C13.75 4.5335 14.5335 3.75 15.5 3.75Z" fill="currentColor"/>
  </svg>
);

export default DragDotOutline2dpIcon;
