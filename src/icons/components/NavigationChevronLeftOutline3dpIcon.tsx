import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronLeftOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.33591 11.0536C4.85579 11.6428 4.8904 12.5114 5.43942 13.0604L12.9394 20.5604C13.5252 21.1462 14.4747 21.1462 15.0605 20.5604C15.6463 19.9746 15.6463 19.0251 15.0605 18.4393L8.62106 11.9999L15.0605 5.56043C15.6463 4.97465 15.6463 4.02513 15.0605 3.43934C14.4747 2.85355 13.5252 2.85355 12.9394 3.43934L5.43942 10.9393L5.33591 11.0536Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronLeftOutline3dpIcon;
