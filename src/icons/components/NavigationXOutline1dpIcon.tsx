import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationXOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.4698 4.46967C18.7627 4.17678 19.2374 4.17678 19.5303 4.46967C19.8232 4.76257 19.8232 5.23734 19.5303 5.53022L13.0606 11.9999L19.5303 18.4697C19.8232 18.7626 19.8232 19.2373 19.5303 19.5302C19.2375 19.8231 18.7627 19.8231 18.4698 19.5302L12.0001 13.0605L5.53034 19.5302C5.23746 19.8231 4.76269 19.8231 4.46979 19.5302C4.1769 19.2373 4.1769 18.7626 4.46979 18.4697L10.9395 11.9999L4.46979 5.53022C4.1769 5.23732 4.1769 4.76256 4.46979 4.46967C4.76268 4.17678 5.23745 4.17678 5.53034 4.46967L12.0001 10.9394L18.4698 4.46967Z" fill="currentColor"/>
  </svg>
);

export default NavigationXOutline1dpIcon;
