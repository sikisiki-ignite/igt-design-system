import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronDoubleLeftOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.83591 11.0536C1.35579 11.6428 1.3904 12.5114 1.93942 13.0604L9.43942 20.5604C10.0252 21.1462 10.9747 21.1462 11.5605 20.5604C12.1463 19.9746 12.1463 19.0251 11.5605 18.4393L5.12106 11.9999L11.5605 5.56043C12.1463 4.97465 12.1463 4.02513 11.5605 3.43934C10.9747 2.85355 10.0252 2.85355 9.43942 3.43934L1.93942 10.9393L1.83591 11.0536Z" fill="currentColor"/>
<path d="M11.3359 11.0536C10.8558 11.6428 10.8904 12.5114 11.4394 13.0604L18.9394 20.5604C19.5252 21.1462 20.4747 21.1462 21.0605 20.5604C21.6463 19.9746 21.6463 19.0251 21.0605 18.4393L14.6211 11.9999L21.0605 5.56043C21.6463 4.97465 21.6463 4.02513 21.0605 3.43934C20.4747 2.85355 19.5252 2.85355 18.9394 3.43934L11.4394 10.9393L11.3359 11.0536Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronDoubleLeftOutline3dpIcon;
