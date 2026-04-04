import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DocumentPaperSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 7C12 9.20914 13.7909 11 16 11H21V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12V7Z" fill="currentColor"/>
<path d="M14.1172 2.07617C14.4909 1.92139 14.921 2.00697 15.207 2.29297L20.707 7.79297C20.993 8.07897 21.0786 8.50914 20.9238 8.88281C20.769 9.25641 20.4044 9.5 20 9.5H16C14.6193 9.5 13.5 8.38071 13.5 7V3C13.5 2.59558 13.7436 2.23098 14.1172 2.07617Z" fill="currentColor"/>
  </svg>
);

export default DocumentPaperSolidIcon;
