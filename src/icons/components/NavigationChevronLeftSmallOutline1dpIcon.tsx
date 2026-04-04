import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronLeftSmallOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.75 11.9999C7.75 12.1989 7.82907 12.3896 7.96973 12.5302L13.4697 18.0302C13.7626 18.3231 14.2374 18.3231 14.5303 18.0302C14.8232 17.7373 14.8232 17.2626 14.5303 16.9697L9.56055 11.9999L14.5303 7.03022C14.8232 6.73732 14.8232 6.26256 14.5303 5.96967C14.2374 5.67678 13.7626 5.67678 13.4697 5.96967L7.96973 11.4697L7.87598 11.5839C7.79445 11.7062 7.75 11.8508 7.75 11.9999Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronLeftSmallOutline1dpIcon;
