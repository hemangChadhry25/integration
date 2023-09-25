import React from "react";

import { cn } from "@/lib/utils";

export const EmailOutlined = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.3337 5.00065C18.3337 4.08398 17.5837 3.33398 16.667 3.33398H3.33366C2.41699 3.33398 1.66699 4.08398 1.66699 5.00065M18.3337 5.00065V15.0007C18.3337 15.9173 17.5837 16.6673 16.667 16.6673H3.33366C2.41699 16.6673 1.66699 15.9173 1.66699 15.0007V5.00065M18.3337 5.00065L10.0003 10.834L1.66699 5.00065"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
