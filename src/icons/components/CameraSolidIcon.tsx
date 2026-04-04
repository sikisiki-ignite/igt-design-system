import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const CameraSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 9C13.933 9 15.5 10.567 15.5 12.5C15.5 14.433 13.933 16 12 16C10.067 16 8.5 14.433 8.5 12.5C8.5 10.567 10.067 9 12 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0635 2.5C14.9537 2.50007 15.7982 2.89523 16.3682 3.5791L17.9688 5.5H19.5C21.1569 5.5 22.5 6.84315 22.5 8.5V18C22.5 19.6569 21.1569 21 19.5 21H4.5C2.84315 21 1.5 19.6569 1.5 18V8.5C1.5 6.84315 2.84315 5.5 4.5 5.5H6.03125L7.63184 3.5791C8.20177 2.89523 9.0463 2.50007 9.93652 2.5H14.0635ZM12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5Z" fill="currentColor"/>
  </svg>
);

export default CameraSolidIcon;
