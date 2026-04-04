import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronUpOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.3693 6.22438C11.762 5.90402 12.341 5.92662 12.7072 6.29273L20.7072 14.2927C21.0974 14.6833 21.0976 15.3164 20.7072 15.7068C20.3167 16.0972 19.6836 16.0971 19.2931 15.7068L12.0001 8.41383L4.70716 15.7068C4.31671 16.0972 3.68362 16.0971 3.2931 15.7068C2.9026 15.3163 2.90265 14.6833 3.2931 14.2927L11.2931 6.29273L11.3693 6.22438Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronUpOutline2dpIcon;
