import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const FolderOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 17.5V5.5C2 3.84315 3.34315 2.5 5 2.5H8.17188L8.46777 2.51465C9.15466 2.58278 9.80061 2.88655 10.293 3.37891L11.6211 4.70703C11.8086 4.8945 12.063 4.99992 12.3281 5H19C20.6569 5 22 6.34315 22 8V17.5C22 19.1569 20.6569 20.5 19 20.5H5C3.34315 20.5 2 19.1569 2 17.5ZM4 17.5C4 18.0523 4.44772 18.5 5 18.5H19C19.5523 18.5 20 18.0523 20 17.5V8C20 7.44772 19.5523 7 19 7H12.3281C11.5326 6.99992 10.7696 6.68363 10.207 6.12109L8.87891 4.79297C8.71484 4.6289 8.4994 4.52763 8.27051 4.50488L8.17188 4.5H5C4.44772 4.5 4 4.94772 4 5.5V17.5Z" fill="currentColor"/>
  </svg>
);

export default FolderOutline2dpIcon;
