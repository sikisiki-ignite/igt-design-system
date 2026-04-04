import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowDownSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0001 3C12.5523 3.00005 13.0001 3.44775 13.0001 4V11.5H18.293C19.6292 11.5001 20.2984 13.1156 19.3536 14.0605L13.0606 20.3535L12.9464 20.4561C12.3572 20.9365 11.4887 20.9026 10.9395 20.3535L4.64655 14.0605C3.70168 13.1156 4.37081 11.5001 5.7071 11.5H11.0001V4C11.0001 3.44772 11.4478 3 12.0001 3Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowDownSolidIcon;
