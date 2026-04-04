import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ThumbDownSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 2H20C21.1045 2.00001 22 2.89544 22 4V11C22 12.1046 21.1045 13 20 13H19V2Z" fill="currentColor"/>
<path d="M12.1982 21.5C10.9844 21.5 9.99998 20.5156 9.99998 19.3018V14.8838L5.34666 14.9609C3.50875 14.9917 2.07583 13.377 2.3242 11.5557L3.27342 4.59473C3.47611 3.10827 4.74586 2 6.24607 2H17V13.4131L14.2304 20.1387C13.8914 20.9621 13.0887 21.4998 12.1982 21.5Z" fill="currentColor"/>
  </svg>
);

export default ThumbDownSolidIcon;
