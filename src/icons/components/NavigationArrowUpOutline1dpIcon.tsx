import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowUpOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.5264 3.41803C11.821 3.17781 12.2557 3.19524 12.5303 3.46979L20.0303 10.9698C20.3232 11.2627 20.3231 11.7374 20.0303 12.0303C19.7374 12.3232 19.2627 12.3232 18.9698 12.0303L12.7501 5.81061V20.0001C12.7501 20.4143 12.4142 20.75 12.0001 20.7501C11.5858 20.7501 11.2501 20.4143 11.2501 20.0001V5.81061L5.03032 12.0303C4.73743 12.3232 4.26267 12.3232 3.96978 12.0303C3.67691 11.7374 3.67689 11.2627 3.96978 10.9698L11.4698 3.46979L11.5264 3.41803Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowUpOutline1dpIcon;
