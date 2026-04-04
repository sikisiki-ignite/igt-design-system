import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const VideoPause4dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.5 2.5C15.3954 2.5 14.5 3.39543 14.5 4.5V19.5C14.5 20.6046 15.3954 21.5 16.5 21.5C17.6046 21.5 18.5 20.6046 18.5 19.5V4.5C18.5 3.39543 17.6046 2.5 16.5 2.5Z" fill="currentColor"/>
<path d="M7.5 2.5C6.39543 2.5 5.5 3.39543 5.5 4.5V19.5L5.51074 19.7041C5.613 20.7128 6.46435 21.5 7.5 21.5C8.53565 21.5 9.387 20.7128 9.48926 19.7041L9.5 19.5V4.5C9.5 3.39543 8.60457 2.5 7.5 2.5Z" fill="currentColor"/>
  </svg>
);

export default VideoPause4dpIcon;
