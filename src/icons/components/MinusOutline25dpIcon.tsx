import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MinusOutline25dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.75 10.75C20.4404 10.75 21 11.3096 21 12C21 12.6904 20.4404 13.25 19.75 13.25H4.25C3.55964 13.25 3 12.6904 3 12C3 11.3096 3.55964 10.75 4.25 10.75H19.75Z" fill="currentColor"/>
  </svg>
);

export default MinusOutline25dpIcon;
