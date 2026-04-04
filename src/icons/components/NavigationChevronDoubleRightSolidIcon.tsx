import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronDoubleRightSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.2607 6.04897C14.9539 4.98755 13.0005 5.9172 13 7.60073V16.3996C13.0003 18.0833 14.9538 19.0129 16.2607 17.9513L21.6758 13.5519C22.6601 12.7515 22.6602 11.2487 21.6758 10.4484L16.2607 6.04897Z" fill="currentColor"/>
<path d="M5.76074 6.04897C4.45388 4.98755 2.5005 5.9172 2.5 7.60073V16.3996C2.5003 18.0833 4.45381 19.0129 5.76074 17.9513L11.1758 13.5519C12.1601 12.7515 12.1602 11.2487 11.1758 10.4484L5.76074 6.04897Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronDoubleRightSolidIcon;
