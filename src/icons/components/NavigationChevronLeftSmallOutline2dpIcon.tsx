import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronLeftSmallOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.293 5.79289C13.6835 5.40237 14.3165 5.40237 14.707 5.79289C15.0975 6.18342 15.0975 6.81645 14.707 7.20696L9.91406 11.9999L14.707 16.7929C15.0975 17.1834 15.0975 17.8164 14.707 18.207C14.3165 18.5974 13.6835 18.5974 13.293 18.207L7.79297 12.707C7.60545 12.5194 7.50002 12.2651 7.5 11.9999C7.5 11.7679 7.58076 11.5441 7.72656 11.3661L7.79297 11.2929L13.293 5.79289Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronLeftSmallOutline2dpIcon;
