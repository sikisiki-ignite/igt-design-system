import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowReplyOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 3C5.55228 3 6 3.44772 6 4V9.5C6 11.1569 7.34315 12.5 9 12.5H17.0859L13.293 8.70703C12.9024 8.31651 12.9024 7.68349 13.293 7.29297C13.6835 6.90244 14.3165 6.90244 14.707 7.29297L20.207 12.793C20.5976 13.1835 20.5976 13.8165 20.207 14.207L14.707 19.707C14.3165 20.0976 13.6835 20.0976 13.293 19.707C12.9024 19.3165 12.9024 18.6835 13.293 18.293L17.0859 14.5H9C6.23858 14.5 4 12.2614 4 9.5V4C4 3.44772 4.44772 3 5 3Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowReplyOutline2dpIcon;
