import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronUpSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.4483 7.32426C11.2486 6.33984 12.7514 6.33982 13.5518 7.32426L17.9512 12.7393C19.0128 14.0462 18.0831 15.9997 16.3994 16H7.6006C5.91687 15.9997 4.98725 14.0462 6.04884 12.7393L10.4483 7.32426Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronUpSolidIcon;
