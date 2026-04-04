import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronUpSmallOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.0537 7.33591C11.6429 6.85579 12.5115 6.8904 13.0606 7.43942L18.0606 12.4394C18.6463 13.0252 18.6463 13.9747 18.0606 14.5605C17.4748 15.1463 16.5252 15.1463 15.9395 14.5605L12 10.6211L8.06056 14.5605C7.47477 15.1463 6.52525 15.1463 5.93946 14.5605C5.35368 13.9747 5.35368 13.0252 5.93946 12.4394L10.9395 7.43942L11.0537 7.33591Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronUpSmallOutline3dpIcon;
