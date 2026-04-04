import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationXOutlineSmall1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.4698 6.46967C16.7627 6.17678 17.2374 6.17678 17.5303 6.46967C17.8232 6.76257 17.8232 7.23734 17.5303 7.53022L13.0606 11.9999L17.5303 16.4697C17.8232 16.7626 17.8232 17.2373 17.5303 17.5302C17.2375 17.8231 16.7627 17.8231 16.4698 17.5302L12.0001 13.0605L7.53034 17.5302C7.23746 17.8231 6.76269 17.8231 6.46979 17.5302C6.1769 17.2373 6.1769 16.7626 6.46979 16.4697L10.9395 11.9999L6.46979 7.53022C6.1769 7.23732 6.1769 6.76256 6.46979 6.46967C6.76268 6.17678 7.23745 6.17678 7.53034 6.46967L12.0001 10.9394L16.4698 6.46967Z" fill="currentColor"/>
  </svg>
);

export default NavigationXOutlineSmall1dpIcon;
