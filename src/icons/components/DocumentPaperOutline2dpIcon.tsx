import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DocumentPaperOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 2C13.6908 2.00002 14.0722 2.15817 14.3535 2.43945L20.5605 8.64648C20.8418 8.92777 21 9.30923 21 9.70703V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H13.293ZM6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V11H15C13.3431 11 12 9.65685 12 8V4H6ZM14 8C14 8.55228 14.4477 9 15 9H18.0859L14 4.91406V8Z" fill="currentColor"/>
  </svg>
);

export default DocumentPaperOutline2dpIcon;
