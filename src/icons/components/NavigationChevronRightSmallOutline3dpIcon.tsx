import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronRightSmallOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.6641 11.0536C17.1442 11.6427 17.1096 12.5114 16.5606 13.0604L11.5606 18.0604C10.9748 18.6462 10.0252 18.6462 9.43946 18.0604C8.85368 17.4746 8.85368 16.5251 9.43946 15.9393L13.3789 11.9999L9.43946 8.06043C8.85368 7.47465 8.85368 6.52513 9.43946 5.93934C10.0252 5.35355 10.9748 5.35355 11.5606 5.93934L16.5606 10.9393L16.6641 11.0536Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronRightSmallOutline3dpIcon;
