import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ShareDotSolidIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8114 10 14.7444 9.48123 14.0117 8.6582L9.90234 11.124C9.96537 11.406 10 11.699 10 12C10 12.3007 9.96524 12.5933 9.90234 12.875L14.0117 15.3408C14.7443 14.5181 15.8117 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6991 13.0337 17.406 13.0967 17.124L8.9873 14.6582C8.25467 15.4809 7.18833 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.18807 8 8.25469 8.51839 8.9873 9.34082L13.0967 6.875C13.0338 6.59334 13 6.30061 13 6C13 3.79086 14.7909 2 17 2Z" fill="currentColor"/>
  </svg>
);

export default ShareDotSolidIcon;
