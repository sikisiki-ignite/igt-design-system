import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const NavigationArrowUpTopOutline1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.5264 7.91797C11.8209 7.67766 12.2557 7.69512 12.5303 7.96973L18.5303 13.9697C18.8232 14.2626 18.8232 14.7374 18.5303 15.0303C18.2374 15.3232 17.7626 15.3232 17.4697 15.0303L12.75 10.3105V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V10.3105L6.53027 15.0303C6.23738 15.3232 5.76262 15.3232 5.46973 15.0303C5.17684 14.7374 5.17684 14.2626 5.46973 13.9697L11.4697 7.96973L11.5264 7.91797Z" fill="currentColor"/>
<path d="M19 3.25C19.4142 3.25 19.75 3.58579 19.75 4C19.75 4.41421 19.4142 4.75 19 4.75H5C4.58579 4.75 4.25 4.41421 4.25 4C4.25 3.58579 4.58579 3.25 5 3.25H19Z" fill="currentColor"/>
  </svg>
);

export default NavigationArrowUpTopOutline1dpIcon;
