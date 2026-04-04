import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronLeftOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.75 11.9999C5.75 12.1989 5.82907 12.3896 5.96973 12.5302L13.9697 20.5302C14.2626 20.8231 14.7374 20.8231 15.0303 20.5302C15.3232 20.2373 15.3232 19.7626 15.0303 19.4697L7.56055 11.9999L15.0303 4.53022C15.3232 4.23732 15.3232 3.76256 15.0303 3.46967C14.7374 3.17678 14.2626 3.17678 13.9697 3.46967L5.96973 11.4697L5.87598 11.5839C5.79445 11.7062 5.75 11.8508 5.75 11.9999Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronLeftOutline1dpIcon;
