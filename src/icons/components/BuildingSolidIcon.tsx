import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const BuildingSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.75 20.75H2.25V13C2.25 12.0335 3.0335 11.25 4 11.25H4.75V20.75ZM15 3.25C16.5188 3.25 17.75 4.48122 17.75 6V20.75H12.75V17.5C12.75 17.0858 12.4142 16.75 12 16.75C11.5858 16.75 11.25 17.0858 11.25 17.5V20.75H6.25V6C6.25 4.48122 7.48122 3.25 9 3.25H15ZM20 11.25C20.9665 11.25 21.75 12.0335 21.75 13V20.75H19.25V11.25H20ZM10 11.25C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H10ZM10 8.25C9.58579 8.25 9.25 8.58579 9.25 9C9.25 9.41421 9.58579 9.75 10 9.75H14C14.4142 9.75 14.75 9.41421 14.75 9C14.75 8.58579 14.4142 8.25 14 8.25H10Z" fill="currentColor"/>
  </svg>
);

export default BuildingSolidIcon;
