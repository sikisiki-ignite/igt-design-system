import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PlusSmallOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9951 5.75C12.3832 5.75006 12.7026 6.04492 12.7412 6.42285L12.7451 6.5V11.25H17.5C17.9142 11.25 18.25 11.5858 18.25 12C18.25 12.4142 17.9142 12.75 17.5 12.75H12.7451V17.5C12.7451 17.9142 12.4093 18.2499 11.9951 18.25C11.5809 18.25 11.2451 17.9142 11.2451 17.5V12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H11.2451V6.5L11.249 6.42285C11.2877 6.04489 11.607 5.75 11.9951 5.75Z" fill="currentColor"/>
  </svg>
);

export default PlusSmallOutline1dpIcon;
