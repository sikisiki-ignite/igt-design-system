import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const SearchOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4868 18.316 14.3125 17.1738 15.7598L21.207 19.793C21.5976 20.1835 21.5976 20.8165 21.207 21.207C20.8165 21.5976 20.1835 21.5976 19.793 21.207L15.7598 17.1738C14.3125 18.316 12.4868 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2ZM10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17C14.0899 17 17 14.0899 17 10.5C17 6.91015 14.0899 4 10.5 4Z" fill="currentColor"/>
  </svg>
);

export default SearchOutline2dpIcon;
