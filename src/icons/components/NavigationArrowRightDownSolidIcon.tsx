import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowRightDownSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.29302 5.29289C5.68354 4.90237 6.31656 4.90237 6.70708 5.29289L12.25 10.8359L15.9395 7.1464C16.8844 6.20153 18.5 6.87066 18.5 8.20695V16.9999C18.5 17.0941 18.4893 17.1859 18.4727 17.2753C18.5473 17.5999 18.4599 17.9541 18.2071 18.207C17.9542 18.4598 17.6 18.5472 17.2754 18.4726C17.1861 18.4892 17.0942 18.4999 17 18.4999H8.20708C6.87079 18.4999 6.20167 16.8843 7.14653 15.9394L10.836 12.2499L5.29302 6.70695C4.90249 6.31643 4.90249 5.68341 5.29302 5.29289Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowRightDownSolidIcon;
