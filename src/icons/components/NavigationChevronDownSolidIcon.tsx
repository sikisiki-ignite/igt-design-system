import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronDownSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.3994 8C18.0831 8.00032 19.0128 9.95382 17.9512 11.2607L13.5518 16.6758C12.7514 17.6602 11.2486 17.6602 10.4483 16.6758L6.04884 11.2607C4.98725 9.95381 5.91687 8.0003 7.6006 8H16.3994Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronDownSolidIcon;
