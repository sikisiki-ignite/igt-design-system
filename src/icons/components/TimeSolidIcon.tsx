import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const TimeSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM11.5 6.5C10.9477 6.5 10.5 6.94772 10.5 7.5V12C10.5 12.2652 10.6054 12.5195 10.793 12.707L13.793 15.707C14.1835 16.0976 14.8165 16.0976 15.207 15.707C15.5976 15.3165 15.5976 14.6835 15.207 14.293L12.5 11.5859V7.5C12.5 6.94772 12.0523 6.5 11.5 6.5Z" fill="currentColor"/>
  </svg>
);

export default TimeSolidIcon;
