import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronUpOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.5263 6.41809C11.8209 6.17778 12.2556 6.19524 12.5302 6.46984L20.5302 14.4698C20.8231 14.7627 20.8231 15.2375 20.5302 15.5304C20.2373 15.8233 19.7626 15.8233 19.4697 15.5304L11.9999 8.06066L4.53022 15.5304C4.23732 15.8233 3.76256 15.8233 3.46967 15.5304C3.17678 15.2375 3.17678 14.7627 3.46967 14.4698L11.4697 6.46984L11.5263 6.41809Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronUpOutline1dpIcon;
