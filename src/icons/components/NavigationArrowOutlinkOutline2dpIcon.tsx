import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowOutlinkOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.5 3C10.0523 3 10.5 3.44772 10.5 4C10.5 4.55228 10.0523 5 9.5 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14.5C19 13.9477 19.4477 13.5 20 13.5C20.5523 13.5 21 13.9477 21 14.5V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3H9.5Z" fill="currentColor"/>
<path d="M20 3C20.5523 3 21 3.44772 21 4V9.5C21 10.0523 20.5523 10.5 20 10.5C19.4477 10.5 19 10.0523 19 9.5V6.41406L12.707 12.707C12.3165 13.0976 11.6835 13.0976 11.293 12.707C10.9024 12.3165 10.9024 11.6835 11.293 11.293L17.5859 5H14.5C13.9477 5 13.5 4.55228 13.5 4C13.5 3.44772 13.9477 3 14.5 3H20Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowOutlinkOutline2dpIcon;
