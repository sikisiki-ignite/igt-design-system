import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PersonOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.6311 15.5C17.6592 15.5 20.0891 18.0025 19.9992 21.0293C19.9828 21.5812 19.5217 22.0162 18.9699 22C18.4184 21.9831 17.9831 21.5222 17.9992 20.9707C18.0558 19.0711 16.5315 17.5 14.6311 17.5H9.63496C7.66853 17.5006 6.05799 19.0637 5.99921 21.0293C5.98277 21.5812 5.52174 22.0162 4.96992 22C4.41844 21.9831 3.98306 21.5222 3.99921 20.9707C4.08992 17.9239 6.58697 15.5006 9.63496 15.5H14.6311Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9992 2C15.3129 2 17.9992 4.68629 17.9992 8C17.9992 11.3137 15.3129 14 11.9992 14C8.68591 13.9995 5.99921 11.3134 5.99921 8C5.99921 4.68658 8.68591 2.00047 11.9992 2ZM11.9992 4C9.79048 4.00047 7.99921 5.79115 7.99921 8C7.99921 10.2088 9.79048 11.9995 11.9992 12C14.2084 12 15.9992 10.2091 15.9992 8C15.9992 5.79086 14.2084 4 11.9992 4Z" fill="currentColor"/>
  </svg>
);

export default PersonOutline2dpIcon;
