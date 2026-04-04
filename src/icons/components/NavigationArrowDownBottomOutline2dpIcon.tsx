import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowDownBottomOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.6309 16.2754C12.2381 16.5957 11.6591 16.5731 11.293 16.207L5.29297 10.207C4.90245 9.81651 4.90245 9.18349 5.29297 8.79297C5.68349 8.40245 6.31651 8.40245 6.70703 8.79297L11 13.0859L11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44771 13 3L13 13.0859L17.293 8.79297C17.6835 8.40245 18.3165 8.40245 18.707 8.79297C19.0976 9.18349 19.0976 9.81651 18.707 10.207L12.707 16.207L12.6309 16.2754Z" fill="currentColor"/>
<path d="M5 21C4.44772 21 4 20.5523 4 20C4 19.4477 4.44771 19 5 19H19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowDownBottomOutline2dpIcon;
