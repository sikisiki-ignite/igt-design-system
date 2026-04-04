import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ThumbUpOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2031 2.75C13.6096 2.75 14.75 3.89035 14.75 5.29688V9.25H18.709C20.3752 9.25013 21.6584 10.7202 21.4336 12.3711L20.4785 19.3711C20.2927 20.7337 19.1291 21.75 17.7539 21.75H4C3.0335 21.75 2.25 20.9665 2.25 20V13C2.25 12.0335 3.0335 11.25 4 11.25H6.99805L9.84863 4.32715C10.2416 3.37294 11.1712 2.75006 12.2031 2.75ZM12.2031 4.25C11.779 4.25006 11.3968 4.50627 11.2354 4.89844L8.25 12.1475V20.25H17.7539C18.379 20.25 18.9087 19.7883 18.9932 19.1689L19.9473 12.1689C20.0496 11.4185 19.4664 10.7501 18.709 10.75H14C13.5858 10.75 13.25 10.4142 13.25 10V5.29688C13.25 4.71878 12.7812 4.25 12.2031 4.25ZM4 12.75C3.86193 12.75 3.75 12.8619 3.75 13V20C3.75 20.1381 3.86193 20.25 4 20.25H6.75V12.75H4Z" fill="currentColor"/>
  </svg>
);

export default ThumbUpOutline1dpIcon;
