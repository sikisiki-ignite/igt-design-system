import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const FailureSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 14.25C11.3096 14.25 10.75 14.8096 10.75 15.5C10.75 16.1904 11.3096 16.75 12 16.75C12.6904 16.75 13.25 16.1904 13.25 15.5C13.25 14.8096 12.6904 14.25 12 14.25ZM12 7.5C11.4477 7.5 11 7.94772 11 8.5V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V8.5C13 7.94772 12.5523 7.5 12 7.5Z" fill="currentColor"/>
  </svg>
);

export default FailureSolidIcon;
