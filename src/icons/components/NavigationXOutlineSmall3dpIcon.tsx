import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationXOutlineSmall3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.4396 6.43934C16.0254 5.85355 16.9749 5.85355 17.5607 6.43934C18.1464 7.02513 18.1464 7.97468 17.5607 8.56043L14.1212 11.9999L17.5607 15.4393C18.1464 16.0251 18.1464 16.9747 17.5607 17.5604C16.9749 18.1462 16.0254 18.1461 15.4396 17.5604L12.0001 14.121L8.56068 17.5604C7.97493 18.1462 7.02538 18.1461 6.43958 17.5604C5.8538 16.9746 5.8538 16.0251 6.43958 15.4393L9.87904 11.9999L6.43958 8.56043C5.8538 7.97465 5.8538 7.02513 6.43958 6.43934C7.02537 5.85355 7.97489 5.85355 8.56068 6.43934L12.0001 9.87879L15.4396 6.43934Z" fill="currentColor"/>
  </svg>
);

export default NavigationXOutlineSmall3dpIcon;
