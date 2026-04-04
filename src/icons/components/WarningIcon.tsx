import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const WarningIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97078 4.23438C10.319 1.90632 13.6813 1.90618 15.0294 4.23438L21.6934 15.7441C23.0442 18.0773 21.36 20.9976 18.6641 20.9981H5.33602C2.64024 20.9977 0.95612 18.0773 2.30672 15.7441L8.97078 4.23438ZM12.0001 14.7481C11.3098 14.7481 10.7502 15.3078 10.7501 15.9981C10.7501 16.6884 11.3097 17.2481 12.0001 17.2481C12.6904 17.248 13.2501 16.6884 13.2501 15.9981C13.25 15.3078 12.6903 14.7481 12.0001 14.7481ZM12.0001 7.99805C11.4479 7.99805 11.0002 8.44587 11.0001 8.99805V12.4981C11.0001 13.0503 11.4478 13.4981 12.0001 13.4981C12.5523 13.498 13.0001 13.0503 13.0001 12.4981V8.99805C13 8.44589 12.5523 7.99807 12.0001 7.99805Z" fill="currentColor"/>
  </svg>
);

export default WarningIcon;
