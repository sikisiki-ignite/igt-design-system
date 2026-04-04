import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MailEnvelopeSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V8.3916L9.18359 13.29C10.8826 14.4482 13.1174 14.4483 14.8164 13.29L22 8.3916V17Z" fill="currentColor"/>
<path d="M19 4C20.3325 4 21.4604 4.8693 21.8516 6.07129L13.6904 11.6377C12.671 12.3328 11.329 12.3328 10.3096 11.6377L2.14746 6.07129C2.53858 4.86915 3.6674 4 5 4H19Z" fill="currentColor"/>
  </svg>
);

export default MailEnvelopeSolidIcon;
