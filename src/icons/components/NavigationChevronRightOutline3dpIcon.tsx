import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronRightOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.6641 11.0536C19.1442 11.6428 19.1096 12.5114 18.5606 13.0604L11.0606 20.5604C10.4748 21.1462 9.52525 21.1462 8.93946 20.5604C8.35368 19.9746 8.35368 19.0251 8.93946 18.4393L15.3789 11.9999L8.93946 5.56043C8.35368 4.97465 8.35368 4.02513 8.93946 3.43934C9.52525 2.85355 10.4748 2.85355 11.0606 3.43934L18.5606 10.9393L18.6641 11.0536Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronRightOutline3dpIcon;
