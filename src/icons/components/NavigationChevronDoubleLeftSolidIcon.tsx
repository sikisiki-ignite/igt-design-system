import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronDoubleLeftSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.73924 6.04897C9.0461 4.98755 10.9995 5.9172 11 7.60073V16.3996C10.9997 18.0833 9.04617 19.0129 7.73924 17.9513L2.3242 13.5519C1.33991 12.7515 1.3398 11.2487 2.3242 10.4484L7.73924 6.04897Z" fill="currentColor"/>
<path d="M18.2392 6.04897C19.5461 4.98755 21.4995 5.9172 21.5 7.60073V16.3996C21.4997 18.0833 19.5462 19.0129 18.2392 17.9513L12.8242 13.5519C11.8399 12.7515 11.8398 11.2487 12.8242 10.4484L18.2392 6.04897Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronDoubleLeftSolidIcon;
