import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ProhibitionSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.7402 5.66895C21.1523 7.39322 22 9.59747 22 12C22 17.5228 17.5228 22 12 22C9.59747 22 7.39322 21.1523 5.66895 19.7402C5.68137 19.729 5.69505 19.719 5.70703 19.707L19.707 5.70703C19.719 5.69505 19.729 5.68136 19.7402 5.66895Z" fill="currentColor"/>
<path d="M12 2C14.402 2 16.606 2.84729 18.3301 4.25879C18.3177 4.27002 18.3049 4.28101 18.293 4.29297L4.29297 18.293C4.28101 18.3049 4.27002 18.3177 4.25879 18.3301C2.84729 16.606 2 14.402 2 12C2 6.47715 6.47715 2 12 2Z" fill="currentColor"/>
  </svg>
);

export default ProhibitionSolidIcon;
