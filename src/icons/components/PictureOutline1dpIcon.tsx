import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PictureOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 6.25C10.1307 6.25 11.25 7.36929 11.25 8.75C11.25 10.1307 10.1307 11.25 8.75 11.25C7.36929 11.25 6.25 10.1307 6.25 8.75C6.25 7.36929 7.36929 6.25 8.75 6.25ZM8.75 7.75C8.19772 7.75 7.75 8.19772 7.75 8.75C7.75 9.30228 8.19772 9.75 8.75 9.75C9.30228 9.75 9.75 9.30228 9.75 8.75C9.75 8.19772 9.30228 7.75 8.75 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 2.75C19.5711 2.75 21.25 4.42893 21.25 6.5V17.5C21.25 19.5711 19.5711 21.25 17.5 21.25H6.5C4.42893 21.25 2.75 19.5711 2.75 17.5V6.5C2.75 4.42893 4.42893 2.75 6.5 2.75H17.5ZM17.3838 10.9443C16.8957 10.4564 16.1043 10.4564 15.6162 10.9443L6.81055 19.75H17.5C18.7426 19.75 19.75 18.7426 19.75 17.5V13.3105L17.3838 10.9443ZM6.5 4.25C5.25736 4.25 4.25 5.25736 4.25 6.5V17.5C4.25 18.2332 4.60172 18.8832 5.14453 19.2939L14.5557 9.88379C15.6296 8.81005 17.3704 8.81005 18.4443 9.88379L19.75 11.1895V6.5C19.75 5.25736 18.7426 4.25 17.5 4.25H6.5Z" fill="currentColor"/>
  </svg>
);

export default PictureOutline1dpIcon;
