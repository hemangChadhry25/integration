import * as React from "react";

import { cn } from "@/lib/utils";

export const Football = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2031_27388)">
        <path
          d="M6.09076 6.09074L3.28587 3.28586M3.28587 12.7139L6.1119 9.88792M9.9073 9.90906L12.7122 12.7139M12.7122 3.28586L9.88574 6.1123M14.6666 7.99989C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99989C1.33325 4.31799 4.31802 1.33322 7.99992 1.33322C11.6818 1.33322 14.6666 4.31799 14.6666 7.99989ZM10.6666 7.99989C10.6666 9.47265 9.47268 10.6666 7.99992 10.6666C6.52716 10.6666 5.33325 9.47265 5.33325 7.99989C5.33325 6.52713 6.52716 5.33322 7.99992 5.33322C9.47268 5.33322 10.6666 6.52713 10.6666 7.99989Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2031_27388">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
