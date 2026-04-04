import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PlusSmallOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9951 5C12.7717 5.00006 13.4105 5.59032 13.4873 6.34668L13.4951 6.5V10.5H17.5C18.3284 10.5 19 11.1716 19 12C19 12.8284 18.3284 13.5 17.5 13.5H13.4951V17.5C13.4951 18.3284 12.8235 18.9999 11.9951 19C11.1667 19 10.4951 18.3284 10.4951 17.5V13.5H6.5C5.67157 13.5 5 12.8284 5 12C5 11.1716 5.67157 10.5 6.5 10.5H10.4951V6.5L10.5029 6.34668C10.5797 5.59028 11.2185 5 11.9951 5Z" fill="currentColor"/>
  </svg>
);

export default PlusSmallOutline3dpIcon;
