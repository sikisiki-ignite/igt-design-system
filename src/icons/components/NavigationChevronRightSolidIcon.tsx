import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronRightSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.5 7.6007C8.5005 5.91719 10.4539 4.98757 11.7607 6.04895L17.1758 10.4484C18.1602 11.2487 18.1601 12.7515 17.1758 13.5519L11.7607 17.9513C10.4538 19.0129 8.5003 18.0833 8.5 16.3995V7.6007Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronRightSolidIcon;
