import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PlusMinusOutline2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 18.999C18.5523 18.999 19 19.4467 19 19.999C19 20.5513 18.5523 20.999 18 20.999H6C5.44772 20.999 5 20.5513 5 19.999C5 19.4467 5.44772 18.999 6 18.999H18Z" fill="currentColor"/>
<path d="M11.9951 3.00391C12.5473 3.00397 12.9951 3.45171 12.9951 4.00391V8.99902H18C18.5523 8.99902 19 9.44674 19 9.99902C19 10.5513 18.5523 10.999 18 10.999H12.9951V16.0039C12.9951 16.5562 12.5473 17.0038 11.9951 17.0039C11.4428 17.0039 10.9951 16.5562 10.9951 16.0039V10.999H6C5.44772 10.999 5 10.5513 5 9.99902C5 9.44674 5.44772 8.99902 6 8.99902H10.9951V4.00391C10.9952 3.45167 11.4429 3.00391 11.9951 3.00391Z" fill="currentColor"/>
  </svg>
);

export default PlusMinusOutline2dpIcon;
