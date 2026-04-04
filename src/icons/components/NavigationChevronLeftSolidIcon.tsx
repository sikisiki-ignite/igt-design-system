import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronLeftSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.2392 6.04898C13.5461 4.98754 15.4995 5.91721 15.5 7.60073V16.3996C15.4997 18.0833 13.5462 19.0129 12.2392 17.9513L6.82419 13.5519C5.83991 12.7515 5.83979 11.2487 6.82419 10.4484L12.2392 6.04898Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronLeftSolidIcon;
