import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ThumbUpSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 22H4C2.89543 22 2 21.1046 2 20V13C2.0001 11.8955 2.89549 11 4 11H5V22Z" fill="currentColor"/>
<path d="M11.8018 2.5C13.0155 2.5 13.9999 3.4845 14 4.69824V9.11621L18.6533 9.03906C20.4912 9.00833 21.924 10.6231 21.6758 12.4443L20.7266 19.4053C20.5239 20.8917 19.2541 22 17.7539 22H7V10.5869L9.76953 3.86133C10.1086 3.03802 10.9114 2.50017 11.8018 2.5Z" fill="currentColor"/>
  </svg>
);

export default ThumbUpSolidIcon;
