import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowRightTopLeftDownOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.46973 13.4697C9.76262 13.1768 10.2374 13.1768 10.5303 13.4697C10.8232 13.7626 10.8232 14.2374 10.5303 14.5303L5.81055 19.25H9.5C9.91421 19.25 10.25 19.5858 10.25 20C10.25 20.4142 9.91421 20.75 9.5 20.75H4C3.80109 20.75 3.61038 20.6709 3.46973 20.5303C3.32907 20.3896 3.25 20.1989 3.25 20V14.5C3.25 14.0858 3.58579 13.75 4 13.75C4.41421 13.75 4.75 14.0858 4.75 14.5V18.1895L9.46973 13.4697Z" fill="currentColor"/>
<path d="M20 3.25C20.4142 3.25 20.75 3.58579 20.75 4V9.5C20.75 9.91421 20.4142 10.25 20 10.25C19.5858 10.25 19.25 9.91421 19.25 9.5V5.81055L14.5303 10.5303C14.2374 10.8232 13.7626 10.8232 13.4697 10.5303C13.1768 10.2374 13.1768 9.76262 13.4697 9.46973L18.1895 4.75H14.5C14.0858 4.75 13.75 4.41421 13.75 4C13.75 3.58579 14.0858 3.25 14.5 3.25H20Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowRightTopLeftDownOutline1dpIcon;
