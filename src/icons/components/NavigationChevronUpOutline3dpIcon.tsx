import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronUpOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.0538 5.83589C11.643 5.35581 12.5117 5.39039 13.0607 5.9394L20.5607 13.4394C21.1464 14.0252 21.1464 14.9747 20.5607 15.5605C19.9749 16.1463 19.0254 16.1462 18.4396 15.5605L12.0001 9.12104L5.56068 15.5605C4.97491 16.1463 4.02538 16.1462 3.43958 15.5605C2.8538 14.9747 2.8538 14.0252 3.43958 13.4394L10.9396 5.9394L11.0538 5.83589Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronUpOutline3dpIcon;
