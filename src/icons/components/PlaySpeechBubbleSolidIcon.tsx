import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const PlaySpeechBubbleSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 13.8215 21.5093 15.5295 20.6572 17.001L21.2686 19.4492C21.5429 20.5477 20.5476 21.5422 19.4492 21.2676L17.0029 20.6553C15.531 21.5081 13.8226 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM10.5244 8.04297C9.85838 7.63332 9.00054 8.11273 9 8.89453V15.1055C9.00054 15.8873 9.85838 16.3667 10.5244 15.957L15.5703 12.8516C16.2043 12.461 16.2043 11.539 15.5703 11.1484L10.5244 8.04297Z" fill="currentColor"/>
  </svg>
);

export default PlaySpeechBubbleSolidIcon;
