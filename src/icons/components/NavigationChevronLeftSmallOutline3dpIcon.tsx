import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronLeftSmallOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.33591 11.0536C6.85579 11.6427 6.8904 12.5114 7.43942 13.0604L12.4394 18.0604C13.0252 18.6462 13.9747 18.6462 14.5605 18.0604C15.1463 17.4746 15.1463 16.5251 14.5605 15.9393L10.6211 11.9999L14.5605 8.06043C15.1463 7.47465 15.1463 6.52513 14.5605 5.93934C13.9747 5.35355 13.0252 5.35355 12.4394 5.93934L7.43942 10.9393L7.33591 11.0536Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronLeftSmallOutline3dpIcon;
