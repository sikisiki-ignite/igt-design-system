import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const UnlockSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C14.7614 2 17 4.23858 17 7H15C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V9.5H17C18.6569 9.5 20 10.8431 20 12.5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V12.5C4 10.8431 5.34315 9.5 7 9.5V7C7 4.23858 9.23858 2 12 2ZM12 14C11.4477 14 11 14.4477 11 15V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V15C13 14.4477 12.5523 14 12 14Z" fill="currentColor"/>
  </svg>
);

export default UnlockSolidIcon;
