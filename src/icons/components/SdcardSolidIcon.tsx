import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const SdcardSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V8.32812C3.00008 7.53258 3.31637 6.76957 3.87891 6.20703L7.20703 2.87891C7.76957 2.31637 8.53258 2.00008 9.32812 2H18ZM10 5.5C9.44772 5.5 9 5.94772 9 6.5V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6.5C11 5.94772 10.5523 5.5 10 5.5ZM13.5 5.5C12.9477 5.5 12.5 5.94772 12.5 6.5V9C12.5 9.55228 12.9477 10 13.5 10C14.0523 10 14.5 9.55228 14.5 9V6.5C14.5 5.94772 14.0523 5.5 13.5 5.5ZM17 5.5C16.4477 5.5 16 5.94772 16 6.5V9C16 9.55228 16.4477 10 17 10C17.5523 10 18 9.55228 18 9V6.5C18 5.94772 17.5523 5.5 17 5.5Z" fill="currentColor"/>
  </svg>
);

export default SdcardSolidIcon;
