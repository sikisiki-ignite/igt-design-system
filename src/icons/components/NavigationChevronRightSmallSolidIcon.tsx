import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationChevronRightSmallSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 8.55278C9.00055 7.28784 10.471 6.59162 11.4502 7.39262L15.6602 10.837C16.3479 11.3996 16.3909 12.4211 15.7891 13.0411L15.6602 13.1592L11.4502 16.6036C10.4709 17.4048 9.00034 16.7086 9 15.4434V8.55278Z" fill="currentColor"/>
  </svg>
);

export default NavigationChevronRightSmallSolidIcon;
