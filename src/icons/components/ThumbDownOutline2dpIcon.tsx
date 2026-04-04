import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ThumbDownOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7968 21.5C10.2522 21.5 8.99993 20.2477 8.99993 18.7031L8.99993 15H5.29095C3.47314 14.9999 2.07274 13.3959 2.31829 11.5947L3.27337 4.59473C3.47606 3.10827 4.74581 2 6.24602 2L19.9999 2C21.1045 2 21.9999 2.89543 21.9999 4V11C21.9999 12.1046 21.1045 13 19.9999 13H17.1699L14.3827 19.7686C13.9512 20.8162 12.9299 21.4999 11.7968 21.5ZM11.7968 19.5C12.1195 19.4999 12.4102 19.3052 12.5331 19.0068L15.4999 11.8018L15.4999 4L6.24602 4C5.74595 4 5.32238 4.36975 5.25481 4.86524L4.30071 11.8652C4.21903 12.4655 4.68517 12.9999 5.29095 13H9.99993C10.5522 13 10.9999 13.4477 10.9999 14V18.7031C10.9999 19.1432 11.3568 19.5 11.7968 19.5ZM19.9999 11V4L17.4999 4L17.4999 11H19.9999Z" fill="currentColor"/>
  </svg>
);

export default ThumbDownOutline2dpIcon;
