import * as React from "react";

import { cn } from "@/lib/utils";

export const ArrowLeft = ({
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
      <path
        d="M12.6666 8.0001H3.33322M3.33322 8.0001L7.99989 12.6668M3.33322 8.0001L7.99989 3.33344"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
