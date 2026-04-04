import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronLeftSmallSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5495 7.39271C13.5287 6.59153 14.9991 7.28785 14.9997 8.55287V15.4435C14.9993 16.7087 13.5288 17.4049 12.5495 16.6037L8.33951 13.1593L8.2106 13.0412C7.60892 12.4213 7.65192 11.3997 8.33951 10.837L12.5495 7.39271Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronLeftSmallSolidIcon;
