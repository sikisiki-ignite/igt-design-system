import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const RefreshOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2C15.2726 2 18.1764 3.57242 20 6V3.5C20 2.94772 20.4477 2.5 21 2.5C21.5523 2.5 22 2.94772 22 3.5V9C22 9.55228 21.5523 10 21 10H15.5C14.9477 10 14.5 9.55228 14.5 9C14.5 8.44772 14.9477 8 15.5 8H18.9297C17.5453 5.60721 14.9595 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C15.3672 20 18.2506 17.9192 19.4307 14.9697C19.6358 14.4571 20.2178 14.2081 20.7305 14.4131C21.2432 14.6182 21.4932 15.2002 21.2881 15.7129C19.8147 19.3956 16.2125 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="currentColor"/>
  </svg>
);

export default RefreshOutline2dpIcon;
