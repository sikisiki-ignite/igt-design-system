import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const CheckCircleIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.707 8.79297C16.3165 8.40252 15.6835 8.40247 15.293 8.79297L11 13.0859L8.70703 10.793C8.3165 10.4025 7.68347 10.4025 7.29297 10.793C6.90247 11.1835 6.90252 11.8165 7.29297 12.207L10.293 15.207C10.6835 15.5975 11.3165 15.5975 11.707 15.207L16.707 10.207C17.0975 9.81653 17.0975 9.1835 16.707 8.79297Z" fill="currentColor"/>
  </svg>
);

export default CheckCircleIcon;
