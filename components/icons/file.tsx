import React from "react";
import { cn } from "@/lib/utils";

export const File = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-3", className)}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66666 1.33331H1.99999C1.64637 1.33331 1.30723 1.47379 1.05718 1.72384C0.807132 1.97389 0.666656 2.31302 0.666656 2.66665V13.3333C0.666656 13.6869 0.807132 14.0261 1.05718 14.2761C1.30723 14.5262 1.64637 14.6666 1.99999 14.6666H9.99999C10.3536 14.6666 10.6927 14.5262 10.9428 14.2761C11.1928 14.0261 11.3333 13.6869 11.3333 13.3333V5.99998M6.66666 1.33331L11.3333 5.99998M6.66666 1.33331V5.99998H11.3333"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  );
};
