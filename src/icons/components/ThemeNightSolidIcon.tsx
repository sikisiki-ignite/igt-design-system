import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ThemeNightSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.36816 3.14501C8.02121 2.85253 8.7014 2.99579 9.18555 3.35692C9.68148 3.72703 10 4.33506 10 5.00145L10.0117 5.46434C10.2529 10.2196 14.1849 14.0015 19 14.0015C19.666 14.0015 20.2742 14.3199 20.6445 14.8159C21.0298 15.3324 21.167 16.0717 20.792 16.7632C19.1015 19.8801 15.8004 22.0015 12 22.0015C6.64991 22.0015 2.28081 17.7995 2.0127 12.5161L2 12.0015C2 8.20133 4.12074 4.9001 7.2373 3.20946L7.36816 3.14501Z" fill="currentColor"/>
  </svg>
);

export default ThemeNightSolidIcon;
