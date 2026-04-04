import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ThumbUpOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2031 2.5C13.7477 2.5 15 3.75228 15 5.29688V9H18.709C20.5268 9.00013 21.9272 10.6041 21.6816 12.4053L20.7266 19.4053C20.5237 20.8916 19.254 22 17.7539 22H4C2.89555 22 2.00019 21.1044 2 20V13C2 11.8954 2.89543 11 4 11H6.83008L9.61719 4.23145C10.0488 3.18376 11.07 2.50006 12.2031 2.5ZM4 20H6.5V13H4V20ZM12.2031 4.5C11.8804 4.50006 11.5898 4.69482 11.4668 4.99316L8.5 12.1982V20H17.7539C18.2539 20 18.6774 19.6301 18.7451 19.1348L19.6992 12.1348C19.7809 11.5345 19.3148 11.0001 18.709 11H14C13.4478 11 13.0002 10.5521 13 10V5.29688C13 4.85685 12.6432 4.5 12.2031 4.5Z" fill="currentColor"/>
  </svg>
);

export default ThumbUpOutline2dpIcon;
