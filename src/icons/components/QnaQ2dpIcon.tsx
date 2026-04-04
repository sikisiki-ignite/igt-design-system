import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const QnaQ2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 13.9868 19.816 15.8125 18.6738 17.2598L19.707 18.293C20.0976 18.6835 20.0976 19.3165 19.707 19.707C19.3165 20.0976 18.6835 20.0976 18.293 19.707L17.2598 18.6738C15.8125 19.816 13.9868 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5ZM12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5C13.434 18.5 14.7581 18.0336 15.833 17.2471L13.793 15.207C13.4024 14.8165 13.4024 14.1835 13.793 13.793C14.1835 13.4024 14.8165 13.4024 15.207 13.793L17.2471 15.833C18.0336 14.7581 18.5 13.434 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5Z" fill="currentColor"/>
  </svg>
);

export default QnaQ2dpIcon;
