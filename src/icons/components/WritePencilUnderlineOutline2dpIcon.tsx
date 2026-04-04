import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const WritePencilUnderlineOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8789 3.70665C15.0504 2.53528 16.9496 2.53528 18.1211 3.70665L19.293 4.87853C20.4642 6.05007 20.4643 7.94922 19.293 9.12072L8.70703 19.7067C8.51951 19.8941 8.26516 19.9996 8 19.9996H4C3.44779 19.9996 3.00013 19.5518 3 18.9996V14.9996C3 14.7345 3.10551 14.4801 3.29297 14.2926L13.8789 3.70665ZM5 15.4137V17.9996H7.58594L15.5859 9.99962L13 7.41368L5 15.4137ZM16.707 5.12072C16.3165 4.73039 15.6835 4.73039 15.293 5.12072L14.4141 5.99962L17 8.58556L17.8789 7.70665C18.2692 7.31621 18.2691 6.68309 17.8789 6.29259L16.707 5.12072Z" fill="currentColor"/>
<path d="M21 17.9996C21.5523 17.9996 22 18.4473 22 18.9996C21.9999 19.5518 21.5522 19.9996 21 19.9996H13C12.4478 19.9996 12.0001 19.5518 12 18.9996C12 18.4473 12.4477 17.9996 13 17.9996H21Z" fill="currentColor"/>
  </svg>
);

export default WritePencilUnderlineOutline2dpIcon;
