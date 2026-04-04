import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronDownSmallSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.4449 9C16.7101 9.00034 17.4063 10.4709 16.6051 11.4502L13.1608 15.6602L13.0426 15.7891C12.4227 16.3909 11.4012 16.3479 10.8385 15.6602L7.39416 11.4502C6.59323 10.471 7.28945 9.00062 8.55432 9H15.4449Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronDownSmallSolidIcon;
