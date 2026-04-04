import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const VideoPause1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 2.75C15.5858 2.75 15.25 3.08579 15.25 3.5V20.5C15.25 20.9142 15.5858 21.25 16 21.25C16.4142 21.25 16.75 20.9142 16.75 20.5V3.5C16.75 3.08579 16.4142 2.75 16 2.75Z" fill="currentColor"/>
<path d="M8 2.75C7.58579 2.75 7.25 3.08579 7.25 3.5V20.5C7.25 20.9142 7.58579 21.25 8 21.25C8.41421 21.25 8.75 20.9142 8.75 20.5V3.5C8.75 3.08579 8.41421 2.75 8 2.75Z" fill="currentColor"/>
  </svg>
);

export default VideoPause1dpIcon;
