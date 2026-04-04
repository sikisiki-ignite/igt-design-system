import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const UndoOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2.25C8.52524 2.25 5.47622 4.06784 3.75 6.80176V3.5C3.75 3.08579 3.41421 2.75 3 2.75C2.58579 2.75 2.25 3.08579 2.25 3.5V9C2.25 9.41421 2.58579 9.75 3 9.75H8.5C8.91421 9.75 9.25 9.41421 9.25 9C9.25 8.58579 8.91421 8.25 8.5 8.25H4.65137C6.01801 5.57768 8.79557 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C8.52715 20.25 5.55361 18.1036 4.33691 15.0625C4.18294 14.6782 3.74676 14.4917 3.3623 14.6455C2.97773 14.7994 2.79047 15.2355 2.94434 15.6201C4.38109 19.2111 7.89317 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25Z" fill="currentColor"/>
  </svg>
);

export default UndoOutline1dpIcon;
