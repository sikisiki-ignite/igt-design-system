import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DragDotOutline3dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.5 16.5C9.60457 16.5 10.5 17.3954 10.5 18.5C10.5 19.6046 9.60457 20.5 8.5 20.5C7.39543 20.5 6.5 19.6046 6.5 18.5C6.5 17.3954 7.39543 16.5 8.5 16.5Z" fill="currentColor"/>
<path d="M15.5 16.5C16.6046 16.5 17.5 17.3954 17.5 18.5C17.5 19.6046 16.6046 20.5 15.5 20.5C14.3954 20.5 13.5 19.6046 13.5 18.5C13.5 17.3954 14.3954 16.5 15.5 16.5Z" fill="currentColor"/>
<path d="M8.5 10C9.60457 10 10.5 10.8954 10.5 12C10.5 13.1046 9.60457 14 8.5 14C7.39543 14 6.5 13.1046 6.5 12C6.5 10.8954 7.39543 10 8.5 10Z" fill="currentColor"/>
<path d="M15.5 10C16.6046 10 17.5 10.8954 17.5 12C17.5 13.1046 16.6046 14 15.5 14C14.3954 14 13.5 13.1046 13.5 12C13.5 10.8954 14.3954 10 15.5 10Z" fill="currentColor"/>
<path d="M8.5 3.5C9.60457 3.5 10.5 4.39543 10.5 5.5C10.5 6.60457 9.60457 7.5 8.5 7.5C7.39543 7.5 6.5 6.60457 6.5 5.5C6.5 4.39543 7.39543 3.5 8.5 3.5Z" fill="currentColor"/>
<path d="M15.5 3.5C16.6046 3.5 17.5 4.39543 17.5 5.5C17.5 6.60457 16.6046 7.5 15.5 7.5C14.3954 7.5 13.5 6.60457 13.5 5.5C13.5 4.39543 14.3954 3.5 15.5 3.5Z" fill="currentColor"/>
  </svg>
);

export default DragDotOutline3dpIcon;
