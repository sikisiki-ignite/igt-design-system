import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowLeftOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.9695 3.96966C11.2624 3.67677 11.7372 3.67679 12.0301 3.96966C12.323 4.26255 12.323 4.73731 12.0301 5.0302L5.81037 11.2499H19.9998C20.414 11.2499 20.7498 11.5857 20.7498 11.9999C20.7498 12.4141 20.414 12.7499 19.9998 12.7499H5.81037L12.0301 18.9697C12.323 19.2625 12.323 19.7373 12.0301 20.0302C11.7372 20.323 11.2624 20.3231 10.9695 20.0302L3.46955 12.5302C3.195 12.2556 3.17756 11.8209 3.41779 11.5263L3.46955 11.4697L10.9695 3.96966Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowLeftOutline1dpIcon;
