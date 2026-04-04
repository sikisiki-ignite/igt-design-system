import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const BookmarkOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.5264 14.418C11.8209 14.1777 12.2557 14.1951 12.5303 14.4697L18.3232 20.2627C18.4807 20.42 18.7499 20.3085 18.75 20.0859V5C18.75 4.86193 18.6381 4.75 18.5 4.75H5.5C5.36193 4.75 5.25 4.86193 5.25 5V20.0859C5.25012 20.3085 5.51929 20.42 5.67676 20.2627L11.4697 14.4697L11.5264 14.418ZM20.25 20.0859C20.2499 21.6449 18.3651 22.4255 17.2627 21.3232L12 16.0605L6.7373 21.3232C5.63489 22.4255 3.75012 21.6449 3.75 20.0859V5C3.75 4.0335 4.5335 3.25 5.5 3.25H18.5C19.4665 3.25 20.25 4.0335 20.25 5V20.0859Z" fill="currentColor"/>
  </svg>
);

export default BookmarkOutline1dpIcon;
