import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowRightOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.793 3.79289C12.1835 3.40237 12.8165 3.40237 13.207 3.79289L20.707 11.2929L20.7754 11.3691C21.0957 11.7618 21.0731 12.3409 20.707 12.707L13.207 20.207C12.8165 20.5974 12.1835 20.5974 11.793 20.207C11.4025 19.8164 11.4025 19.1834 11.793 18.7929L17.5859 12.9999H4C3.44774 12.9999 3.00003 12.5522 3 11.9999C3 11.4476 3.44772 10.9999 4 10.9999H17.5859L11.793 5.20696C11.4025 4.81644 11.4025 4.18342 11.793 3.79289Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowRightOutline2dpIcon;
