import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MapLocationMyOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.75 6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6V3.53418C7.15247 3.89247 3.89017 7.15669 3.53418 11.2549H6C6.41412 11.2549 6.74993 11.5908 6.75 12.0049C6.75 12.4191 6.41416 12.7548 6 12.7549H3.53516C3.89549 16.8485 7.15577 20.1068 11.25 20.4648V18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18V20.4648C16.8446 20.1068 20.1049 16.8479 20.4648 12.7539L17.999 12.75C17.5849 12.7493 17.2495 12.4131 17.25 11.999C17.2508 11.585 17.5869 11.2495 18.001 11.25L20.4648 11.2539C20.1084 7.15621 16.8472 3.89244 12.75 3.53418V6Z" fill="currentColor"/>
  </svg>
);

export default MapLocationMyOutline1dpIcon;
