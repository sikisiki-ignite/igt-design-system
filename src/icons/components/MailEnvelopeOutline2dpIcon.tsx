import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MailEnvelopeOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0459 4C20.6774 4.00004 22 5.32261 22 6.9541C22 6.96062 21.9991 6.96712 21.999 6.97363C21.9991 6.98242 22 6.9912 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V6.9541C2.00004 5.32261 3.32261 4.00004 4.9541 4H19.0459ZM14.7734 13.3525C13.0939 14.4722 10.9061 14.4722 9.22656 13.3525L4 9.86816V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V9.86816L14.7734 13.3525ZM5 6C4.45686 6 4.01547 6.43302 4.00098 6.97266C4.00703 7.28462 4.16456 7.57451 4.4248 7.74805L10.3359 11.6885C11.3436 12.3603 12.6564 12.3603 13.6641 11.6885L19.5752 7.74805C19.8354 7.57452 19.992 7.28461 19.998 6.97266C19.9835 6.43303 19.5431 6 19 6H5Z" fill="currentColor"/>
  </svg>
);

export default MailEnvelopeOutline2dpIcon;
