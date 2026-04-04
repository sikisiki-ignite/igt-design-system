import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowOutlinkOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.5 3.25C9.91421 3.25 10.25 3.58579 10.25 4C10.25 4.41421 9.91421 4.75 9.5 4.75H6C5.30964 4.75 4.75 5.30964 4.75 6V18C4.75 18.6904 5.30964 19.25 6 19.25H18C18.6904 19.25 19.25 18.6904 19.25 18V14.5C19.25 14.0858 19.5858 13.75 20 13.75C20.4142 13.75 20.75 14.0858 20.75 14.5V18C20.75 19.5188 19.5188 20.75 18 20.75H6C4.48122 20.75 3.25 19.5188 3.25 18V6C3.25 4.48122 4.48122 3.25 6 3.25H9.5Z" fill="currentColor"/>
<path d="M20 3.25C20.4142 3.25 20.75 3.58579 20.75 4V9.5C20.75 9.91421 20.4142 10.25 20 10.25C19.5858 10.25 19.25 9.91421 19.25 9.5V5.81055L12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303C11.1768 12.2374 11.1768 11.7626 11.4697 11.4697L18.1895 4.75H14.5C14.0858 4.75 13.75 4.41421 13.75 4C13.75 3.58579 14.0858 3.25 14.5 3.25H20Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowOutlinkOutline1dpIcon;
