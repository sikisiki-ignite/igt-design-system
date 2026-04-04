import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const CheckCircleOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.793 9.29297C15.1835 8.90244 15.8165 8.90245 16.207 9.29297C16.5976 9.68349 16.5976 10.3165 16.207 10.707L11.707 15.207C11.3165 15.5976 10.6835 15.5976 10.293 15.207L7.79297 12.707C7.40245 12.3165 7.40244 11.6835 7.79297 11.293C8.18349 10.9024 8.81651 10.9024 9.20703 11.293L11 13.0859L14.793 9.29297Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"/>
  </svg>
);

export default CheckCircleOutline2dpIcon;
