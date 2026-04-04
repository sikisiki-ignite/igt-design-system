import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowRightTopLeftDownSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.46973 13.4697C9.76262 13.1768 10.2374 13.1768 10.5303 13.4697C10.8232 13.7626 10.8232 14.2374 10.5303 14.5303L7.81055 17.25L9.60352 19.043C10.2334 19.6729 9.78735 20.75 8.89648 20.75H4.25C3.69773 20.75 3.25 20.3023 3.25 19.75V15.1035C3.25003 14.2126 4.32707 13.7666 4.95703 14.3965L6.75 16.1895L9.46973 13.4697Z" fill="currentColor"/>
<path d="M19.75 3.25C20.3023 3.25002 20.75 3.69772 20.75 4.25V8.89648C20.75 9.78735 19.6729 10.2334 19.043 9.60352L17.25 7.81055L14.5303 10.5303C14.2374 10.8232 13.7626 10.8232 13.4697 10.5303C13.1768 10.2374 13.1768 9.76262 13.4697 9.46973L16.1895 6.75L14.3965 4.95703C13.7666 4.32707 14.2126 3.25003 15.1035 3.25H19.75Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowRightTopLeftDownSolidIcon;
