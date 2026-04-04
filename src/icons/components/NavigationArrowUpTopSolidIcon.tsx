import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowUpTopSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.3691 7.72461C11.7619 7.40427 12.3409 7.42686 12.707 7.79297L18.707 13.793C18.993 14.079 19.0786 14.5091 18.9238 14.8828C18.769 15.2564 18.4044 15.5 18 15.5H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V15.5H6C5.59559 15.5 5.23099 15.2564 5.07617 14.8828C4.92139 14.5091 5.00697 14.079 5.29297 13.793L11.293 7.79297L11.3691 7.72461Z" fill="currentColor"/>
<path d="M19 3C19.5523 3 20 3.44772 20 4C20 4.55228 19.5523 5 19 5H5C4.44772 5 4 4.55228 4 4C4 3.44772 4.44772 3 5 3H19Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowUpTopSolidIcon;
