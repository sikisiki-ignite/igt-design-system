import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronDoubleLeftOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.293 3.29289C10.6835 2.90237 11.3165 2.90237 11.707 3.29289C12.0975 3.68342 12.0975 4.31645 11.707 4.70696L4.41406 11.9999L11.707 19.2929C12.0975 19.6834 12.0975 20.3164 11.707 20.707C11.3165 21.0974 10.6835 21.0974 10.293 20.707L2.29297 12.707C2.10545 12.5194 2.00002 12.2651 2 11.9999C2 11.7679 2.08075 11.5441 2.22656 11.3661L2.29297 11.2929L10.293 3.29289Z" fill="currentColor"/>
<path d="M19.793 3.29289C20.1835 2.90237 20.8165 2.90237 21.207 3.29289C21.5975 3.68342 21.5975 4.31645 21.207 4.70696L13.9141 11.9999L21.207 19.2929C21.5975 19.6834 21.5975 20.3164 21.207 20.707C20.8165 21.0974 20.1835 21.0974 19.793 20.707L11.793 12.707C11.6055 12.5194 11.5 12.2651 11.5 11.9999C11.5 11.7679 11.5808 11.5441 11.7266 11.3661L11.793 11.2929L19.793 3.29289Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronDoubleLeftOutline2dpIcon;
