import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DeleteOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58579 16.25 9.25 15.9142 9.25 15.5V11C9.25 10.5858 9.58579 10.25 10 10.25Z" fill="currentColor"/>
<path d="M14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V15.5C14.75 15.9142 14.4142 16.25 14 16.25C13.5858 16.25 13.25 15.9142 13.25 15.5V11C13.25 10.5858 13.5858 10.25 14 10.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.75C14.7426 1.75 15.75 2.75736 15.75 4V5.25H20.5C20.9142 5.25 21.25 5.58579 21.25 6C21.25 6.41421 20.9142 6.75 20.5 6.75H19.75V18.5C19.75 20.0188 18.5188 21.25 17 21.25H7C5.48122 21.25 4.25 20.0188 4.25 18.5V6.75H3.5C3.08579 6.75 2.75 6.41421 2.75 6C2.75 5.58579 3.08579 5.25 3.5 5.25H8.25V4C8.25 2.75736 9.25736 1.75 10.5 1.75H13.5ZM5.75 18.5C5.75 19.1904 6.30964 19.75 7 19.75H17C17.6904 19.75 18.25 19.1904 18.25 18.5V6.75H5.75V18.5ZM10.5 3.25C10.0858 3.25 9.75 3.58579 9.75 4V5.25H14.25V4C14.25 3.58579 13.9142 3.25 13.5 3.25H10.5Z" fill="currentColor"/>
  </svg>
);

export default DeleteOutline1dpIcon;
