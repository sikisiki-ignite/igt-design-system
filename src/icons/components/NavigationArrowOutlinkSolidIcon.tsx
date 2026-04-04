import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowOutlinkSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.5 3C10.0523 3 10.5 3.44772 10.5 4C10.5 4.55228 10.0523 5 9.5 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14.5C19 13.9477 19.4477 13.5 20 13.5C20.5523 13.5 21 13.9477 21 14.5V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3H9.5Z" fill="currentColor"/>
<path d="M20 3C20.5523 3.00002 21 3.44772 21 4V9.5C21 9.90441 20.7564 10.269 20.3828 10.4238C20.0091 10.5786 19.579 10.493 19.293 10.207L17.25 8.16406L12.707 12.707C12.3165 13.0976 11.6835 13.0976 11.293 12.707C10.9024 12.3165 10.9024 11.6835 11.293 11.293L15.8359 6.75L13.793 4.70703C13.507 4.42103 13.4214 3.99086 13.5762 3.61719C13.731 3.24359 14.0956 3 14.5 3H20Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowOutlinkSolidIcon;
