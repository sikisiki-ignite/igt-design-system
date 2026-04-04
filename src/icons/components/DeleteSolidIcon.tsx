import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DeleteSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.5C14.8807 1.5 16 2.61929 16 4V5H20.5C21.0523 5 21.5 5.44772 21.5 6C21.5 6.55228 21.0523 7 20.5 7H20V18.5C20 20.1569 18.6569 21.5 17 21.5H7C5.34315 21.5 4 20.1569 4 18.5V7H3.5C2.94772 7 2.5 6.55228 2.5 6C2.5 5.44772 2.94772 5 3.5 5H8V4C8 2.61929 9.11929 1.5 10.5 1.5H13.5ZM9.5 10C8.94772 10 8.5 10.4477 8.5 11V15.5C8.5 16.0523 8.94772 16.5 9.5 16.5C10.0523 16.5 10.5 16.0523 10.5 15.5V11C10.5 10.4477 10.0523 10 9.5 10ZM14.5 10C13.9477 10 13.5 10.4477 13.5 11V15.5C13.5 16.0523 13.9477 16.5 14.5 16.5C15.0523 16.5 15.5 16.0523 15.5 15.5V11C15.5 10.4477 15.0523 10 14.5 10ZM10.5 3.5C10.2239 3.5 10 3.72386 10 4V5H14V4C14 3.72386 13.7761 3.5 13.5 3.5H10.5Z" fill="currentColor"/>
  </svg>
);

export default DeleteSolidIcon;
