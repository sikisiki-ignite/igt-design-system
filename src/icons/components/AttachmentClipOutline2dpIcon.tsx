import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const AttachmentClipOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 15.75V6.5C9 5.94772 9.44772 5.5 10 5.5C10.5523 5.5 11 5.94772 11 6.5V15.75C11 16.1642 11.3358 16.5 11.75 16.5C12.1642 16.5 12.5 16.1642 12.5 15.75V6.5C12.5 5.11929 11.3807 4 10 4C8.61929 4 7.5 5.11929 7.5 6.5V15.75C7.5 18.0972 9.40279 20 11.75 20C14.0972 20 16 18.0972 16 15.75V6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6V15.75C18 19.2018 15.2018 22 11.75 22C8.29822 22 5.5 19.2018 5.5 15.75V6.5C5.5 4.01472 7.51472 2 10 2C12.4853 2 14.5 4.01472 14.5 6.5V15.75C14.5 17.2688 13.2688 18.5 11.75 18.5C10.2312 18.5 9 17.2688 9 15.75Z" fill="currentColor"/>
  </svg>
);

export default AttachmentClipOutline2dpIcon;
