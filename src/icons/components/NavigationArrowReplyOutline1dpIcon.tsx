import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowReplyOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 3.25C5.41421 3.25 5.75 3.58579 5.75 4V9.5C5.75 11.2949 7.20507 12.75 9 12.75H17.6895L13.4697 8.53027C13.1768 8.23738 13.1768 7.76262 13.4697 7.46973C13.7626 7.17683 14.2374 7.17684 14.5303 7.46973L20.0303 12.9697C20.3232 13.2626 20.3232 13.7374 20.0303 14.0303L14.5303 19.5303C14.2374 19.8232 13.7626 19.8232 13.4697 19.5303C13.1768 19.2374 13.1768 18.7626 13.4697 18.4697L17.6895 14.25H9C6.37665 14.25 4.25 12.1234 4.25 9.5V4C4.25 3.58579 4.58579 3.25 5 3.25Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowReplyOutline1dpIcon;
