import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ListAlignRightOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.5 9.25C19.9142 9.25 20.25 9.58579 20.25 10C20.25 10.4142 19.9142 10.75 19.5 10.75H9.5C9.08579 10.75 8.75 10.4142 8.75 10C8.75 9.58579 9.08579 9.25 9.5 9.25H19.5Z" fill="currentColor"/>
<path d="M19.5 17.25C19.9142 17.25 20.25 17.5858 20.25 18C20.25 18.4142 19.9142 18.75 19.5 18.75H9.5C9.08579 18.75 8.75 18.4142 8.75 18C8.75 17.5858 9.08579 17.25 9.5 17.25H19.5Z" fill="currentColor"/>
<path d="M19.5 13.25C19.9142 13.25 20.25 13.5858 20.25 14C20.25 14.4142 19.9142 14.75 19.5 14.75H4.5C4.08579 14.75 3.75 14.4142 3.75 14C3.75 13.5858 4.08579 13.25 4.5 13.25H19.5Z" fill="currentColor"/>
<path d="M19.5 5.25C19.9142 5.25 20.25 5.58579 20.25 6C20.25 6.41421 19.9142 6.75 19.5 6.75H4.5C4.08579 6.75 3.75 6.41421 3.75 6C3.75 5.58579 4.08579 5.25 4.5 5.25H19.5Z" fill="currentColor"/>
  </svg>
);

export default ListAlignRightOutline1dpIcon;
