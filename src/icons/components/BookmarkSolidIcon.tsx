import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const BookmarkSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5 3C19.6046 3 20.5 3.89543 20.5 5V20.0859C20.4999 21.8676 18.3458 22.7598 17.0859 21.5L12 16.4141L6.91406 21.5C5.65416 22.7598 3.50012 21.8676 3.5 20.0859V5C3.5 3.89543 4.39543 3 5.5 3H18.5Z" fill="currentColor"/>
  </svg>
);

export default BookmarkSolidIcon;
