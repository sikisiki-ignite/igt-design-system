import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const HeartSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.2572 2.63281C19.2601 2.63293 21.1161 3.73134 22.2231 5.57324C23.5518 7.78419 23.5407 10.6203 22.1918 13.1592C20.2187 16.873 15.8319 20.1361 13.394 21.749C12.97 22.029 12.4854 22.1699 11.9994 22.1699C11.5136 22.1698 11.0297 22.0289 10.6059 21.749C8.16695 20.1361 3.78111 16.873 1.80803 13.1592C0.460102 10.6203 0.448003 7.78419 1.77678 5.57324C2.88472 3.73234 4.73972 2.63293 6.7426 2.63281C9.71113 2.63281 11.2913 4.49731 11.9994 5.69434C12.7075 4.49733 14.2884 2.63281 17.2572 2.63281Z" fill="currentColor"/>
  </svg>
);

export default HeartSolidIcon;
