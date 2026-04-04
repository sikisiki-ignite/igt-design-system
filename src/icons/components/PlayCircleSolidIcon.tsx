import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PlayCircleSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM10.5244 8.04199C9.85855 7.63266 9.00088 8.11211 9 8.89355V15.1045C9.00018 15.8867 9.85822 16.366 10.5244 15.9561L15.5703 12.8506C16.2041 12.4599 16.2044 11.5379 15.5703 11.1475L10.5244 8.04199Z" fill="currentColor"/>
  </svg>
);

export default PlayCircleSolidIcon;
