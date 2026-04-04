import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DevicePcOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3.25C20.5188 3.25 21.75 4.48122 21.75 6V14.5C21.75 16.0188 20.5188 17.25 19 17.25H12.75V19.75H17C17.4142 19.75 17.75 20.0858 17.75 20.5C17.75 20.9142 17.4142 21.25 17 21.25H7C6.58579 21.25 6.25 20.9142 6.25 20.5C6.25 20.0858 6.58579 19.75 7 19.75H11.25V17.25H5C3.48122 17.25 2.25 16.0188 2.25 14.5V6C2.25 4.48122 3.48122 3.25 5 3.25H19ZM5 4.75C4.30964 4.75 3.75 5.30964 3.75 6V14.5C3.75 15.1904 4.30964 15.75 5 15.75H19C19.6904 15.75 20.25 15.1904 20.25 14.5V6C20.25 5.30964 19.6904 4.75 19 4.75H5Z" fill="currentColor"/>
  </svg>
);

export default DevicePcOutline1dpIcon;
