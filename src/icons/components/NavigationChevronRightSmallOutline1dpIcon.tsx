import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronRightSmallOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.2499 11.9999C16.2499 12.1989 16.1709 12.3896 16.0302 12.5302L10.5302 18.0302C10.2373 18.3231 9.76256 18.3231 9.46967 18.0302C9.17678 17.7373 9.17678 17.2626 9.46967 16.9697L14.4394 11.9999L9.46967 7.03022C9.17678 6.73732 9.17678 6.26256 9.46967 5.96967C9.76256 5.67678 10.2373 5.67678 10.5302 5.96967L16.0302 11.4697L16.124 11.5839C16.2055 11.7062 16.2499 11.8508 16.2499 11.9999Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronRightSmallOutline1dpIcon;
