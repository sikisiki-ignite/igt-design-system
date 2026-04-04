import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowDownOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0002 3C12.5524 3.00006 13.0002 3.44775 13.0002 4V17.5859L18.7931 11.793C19.1837 11.4025 19.8167 11.4025 20.2072 11.793C20.5977 12.1835 20.5977 12.8165 20.2072 13.207L12.7072 20.707L12.631 20.7754C12.2383 21.0957 11.6593 21.0731 11.2931 20.707L3.79314 13.207C3.40261 12.8165 3.40261 12.1835 3.79314 11.793C4.18366 11.4025 4.81669 11.4025 5.2072 11.793L11.0002 17.5859V4C11.0002 3.44772 11.4479 3 12.0002 3Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowDownOutline2dpIcon;
