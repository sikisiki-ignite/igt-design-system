import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronDownSmallOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.7931 9.29289C17.1837 8.90237 17.8167 8.90237 18.2072 9.29289C18.5976 9.68343 18.5977 10.3165 18.2072 10.707L12.7072 16.207C12.3411 16.573 11.7621 16.5955 11.3693 16.2753L11.2931 16.207L5.79314 10.707C5.40261 10.3164 5.40261 9.68342 5.79314 9.29289C6.18366 8.90237 6.81668 8.90237 7.2072 9.29289L12.0002 14.0859L16.7931 9.29289Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronDownSmallOutline2dpIcon;
