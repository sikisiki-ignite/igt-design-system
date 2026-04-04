import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PlusOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9951 3C12.4093 3.00007 12.7451 3.33583 12.7451 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.7451V20.25C12.7451 20.6642 12.4093 20.9999 11.9951 21C11.5809 21 11.2451 20.6642 11.2451 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.2451V3.75C11.2451 3.33579 11.5809 3 11.9951 3Z" fill="currentColor"/>
  </svg>
);

export default PlusOutline1dpIcon;
