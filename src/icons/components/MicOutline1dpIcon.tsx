import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MicOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5 10.25C18.9142 10.25 19.25 10.5858 19.25 11C19.25 14.7508 16.4016 17.8356 12.75 18.2109V20.25H16C16.4142 20.25 16.75 20.5858 16.75 21C16.75 21.4142 16.4142 21.75 16 21.75H8C7.58579 21.75 7.25 21.4142 7.25 21C7.25 20.5858 7.58579 20.25 8 20.25H11.25V18.2109C7.59837 17.8356 4.75 14.7508 4.75 11C4.75 10.5858 5.08579 10.25 5.5 10.25C5.91421 10.25 6.25 10.5858 6.25 11C6.25 14.1756 8.82436 16.75 12 16.75C15.1756 16.75 17.75 14.1756 17.75 11C17.75 10.5858 18.0858 10.25 18.5 10.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C14.0711 2.25 15.75 3.92893 15.75 6V11C15.75 13.0711 14.0711 14.75 12 14.75C9.92893 14.75 8.25 13.0711 8.25 11V6C8.25 3.92893 9.92893 2.25 12 2.25ZM12 3.75C10.7574 3.75 9.75 4.75736 9.75 6V11C9.75 12.2426 10.7574 13.25 12 13.25C13.2426 13.25 14.25 12.2426 14.25 11V6C14.25 4.75736 13.2426 3.75 12 3.75Z" fill="currentColor"/>
  </svg>
);

export default MicOutline1dpIcon;
