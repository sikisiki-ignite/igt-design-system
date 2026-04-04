import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const QnaA2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 4C12.389 4.00003 12.7431 4.22615 12.9071 4.5791L19.4071 18.5791C19.6394 19.0799 19.4215 19.6747 18.9207 19.9072C18.4199 20.1394 17.8251 19.9216 17.5926 19.4209L15.7723 15.5H8.22737L6.40706 19.4209C6.1745 19.9216 5.57976 20.1395 5.07893 19.9072C4.57829 19.6746 4.36034 19.0799 4.5926 18.5791L11.0926 4.5791C11.2565 4.22617 11.6107 4.00011 11.9998 4ZM9.15608 13.5H14.8436L11.9998 7.37402L9.15608 13.5Z" fill="currentColor"/>
  </svg>
);

export default QnaA2dpIcon;
