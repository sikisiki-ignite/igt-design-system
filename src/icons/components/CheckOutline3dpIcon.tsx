import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const CheckOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.9396 6.43934C18.5254 5.85355 19.4749 5.85355 20.0607 6.43934C20.6463 7.02514 20.6464 7.97469 20.0607 8.56043L11.0607 17.5604C10.4749 18.1462 9.52538 18.1461 8.93958 17.5604L3.93958 12.5604C3.3538 11.9746 3.3538 11.0251 3.93958 10.4393C4.52537 9.85355 5.47489 9.85355 6.06068 10.4393L10.0001 14.3788L17.9396 6.43934Z" fill="currentColor"/>
  </svg>
);

export default CheckOutline3dpIcon;
