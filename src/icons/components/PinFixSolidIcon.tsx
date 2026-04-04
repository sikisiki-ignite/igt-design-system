import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PinFixSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.3824 2.5C17.8688 2.50033 18.8361 4.06491 18.1715 5.39453L17.0006 7.73633V10.209L19.3658 13.9258C20.2127 15.257 19.2569 16.9994 17.6793 17H13.0006V21.5C13.0006 22.0521 12.5527 22.4998 12.0006 22.5C11.4483 22.5 11.0006 22.0523 11.0006 21.5V17H6.32185C4.7439 16.9997 3.78811 15.2571 4.63533 13.9258L7.00056 10.209V7.73633L5.82966 5.39453C5.16476 4.06473 6.13196 2.5 7.61872 2.5H16.3824Z" fill="currentColor"/>
  </svg>
);

export default PinFixSolidIcon;
