import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowLeftTopSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.99995 5.5C6.17156 5.50004 5.49995 6.1716 5.49995 7V15.793C5.50001 17.1292 7.11556 17.7983 8.0605 16.8535L11.75 13.1641L17.2929 18.707C17.6834 19.0975 18.3165 19.0975 18.707 18.707C19.0975 18.3165 19.0975 17.6835 18.707 17.293L13.164 11.75L16.8535 8.06055C17.7983 7.11561 17.1292 5.50006 15.7929 5.5H6.99995Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowLeftTopSolidIcon;
