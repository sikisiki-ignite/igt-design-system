import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ShoppingBag2dpIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0005 2C14.4856 2.00026 16.5005 4.01488 16.5005 6.5V7H18.5386C19.6128 7.00042 20.4952 7.84938 20.5367 8.92285L20.9595 19.9229C21.0031 21.0565 20.0959 21.9997 18.9615 22H5.0396C3.90494 21.9999 2.99794 21.0567 3.04155 19.9229L3.4644 8.92285C3.50585 7.84925 4.38805 7.00019 5.46245 7H7.50053V6.5C7.50053 4.01472 9.51525 2 12.0005 2ZM12.0005 4C10.6198 4 9.50053 5.11929 9.50053 6.5V7H14.5005V6.5C14.5005 5.11945 13.381 4.00026 12.0005 4Z" fill="currentColor"/>
  </svg>
);

export default ShoppingBag2dpIcon;
