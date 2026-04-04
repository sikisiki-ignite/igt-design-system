import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowRightOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9697 3.96967C12.2626 3.67678 12.7374 3.67678 13.0303 3.96967L20.5303 11.4697L20.582 11.5263C20.8223 11.8209 20.8049 12.2556 20.5303 12.5302L13.0303 20.0302C12.7374 20.3231 12.2626 20.3231 11.9697 20.0302C11.6768 19.7373 11.6769 19.2626 11.9697 18.9697L18.1895 12.7499H4C3.58581 12.7499 3.25003 12.4141 3.25 11.9999C3.25 11.5857 3.58579 11.2499 4 11.2499H18.1895L11.9697 5.03022C11.6768 4.73733 11.6769 4.26257 11.9697 3.96967Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowRightOutline1dpIcon;
