import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const QnaA1dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 4.25C12.2916 4.25 12.5574 4.41985 12.6804 4.68457L19.1804 18.6846C19.3544 19.0602 19.1907 19.5063 18.8151 19.6807C18.4396 19.8546 17.9934 19.6909 17.819 19.3154L15.9313 15.25H8.06805L6.18036 19.3154C6.00597 19.6909 5.55983 19.8547 5.18426 19.6807C4.80891 19.5063 4.64507 19.0601 4.81903 18.6846L11.319 4.68457C11.4419 4.41987 11.7079 4.2501 11.9997 4.25ZM8.76434 13.75H15.235L11.9997 6.78125L8.76434 13.75Z" fill="currentColor"/>
  </svg>
);

export default QnaA1dpIcon;
