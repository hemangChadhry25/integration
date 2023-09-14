import React from "react";

import { cn } from "@/lib/utils";

export const Eye = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[15px]", className)}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.51258 8.44574C1.42746 8.31096 1.3849 8.24357 1.36108 8.13963C1.34318 8.06156 1.34318 7.93844 1.36108 7.86037C1.3849 7.75643 1.42746 7.68904 1.51258 7.55426C2.21596 6.44053 4.30963 3.625 7.50025 3.625C10.6909 3.625 12.7846 6.44053 13.4879 7.55426C13.573 7.68904 13.6156 7.75643 13.6394 7.86037C13.6573 7.93844 13.6573 8.06156 13.6394 8.13963C13.6156 8.24357 13.573 8.31096 13.4879 8.44574C12.7846 9.55947 10.6909 12.375 7.50025 12.375C4.30963 12.375 2.21596 9.55947 1.51258 8.44574Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50025 9.875C8.53579 9.875 9.37525 9.03553 9.37525 8C9.37525 6.96447 8.53579 6.125 7.50025 6.125C6.46472 6.125 5.62525 6.96447 5.62525 8C5.62525 9.03553 6.46472 9.875 7.50025 9.875Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
