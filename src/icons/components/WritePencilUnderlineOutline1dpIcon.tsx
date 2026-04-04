import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const WritePencilUnderlineOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0557 3.88343C15.1296 2.80969 16.8704 2.80969 17.9443 3.88343L19.1162 5.05531C20.1898 6.12922 20.1899 7.87013 19.1162 8.94398L8.53027 19.5299C8.38964 19.6705 8.19883 19.7496 8 19.7496H4C3.5859 19.7496 3.25019 19.4137 3.25 18.9996V14.9996C3.25 14.8008 3.32919 14.61 3.46973 14.4694L14.0557 3.88343ZM4.75 15.3102V18.2496H7.68945L15.9395 9.99964L13 7.06019L4.75 15.3102ZM16.8838 4.94398C16.3957 4.45602 15.6043 4.45602 15.1162 4.94398L14.0605 5.99964L17 8.93909L18.0557 7.88343C18.5436 7.39537 18.5434 6.60398 18.0557 6.11585L16.8838 4.94398Z" fill="currentColor"/>
<path d="M21 18.2496C21.4142 18.2496 21.75 18.5854 21.75 18.9996C21.7498 19.4137 21.4141 19.7496 21 19.7496H13C12.5859 19.7496 12.2502 19.4137 12.25 18.9996C12.25 18.5854 12.5858 18.2496 13 18.2496H21Z" fill="currentColor"/>
  </svg>
);

export default WritePencilUnderlineOutline1dpIcon;
