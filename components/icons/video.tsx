import React from "react";
import { cn } from "@/lib/utils";

export const Video = ({
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
      <g clipPath="url(#clip0_2993_7243)">
        <path
          d="M4.66668 1.33333V14.6667M11.3333 1.33333V14.6667M1.33334 8H14.6667M1.33334 4.66666H4.66668M1.33334 11.3333H4.66668M11.3333 11.3333H14.6667M11.3333 4.66666H14.6667M2.78668 1.33333H13.2133C14.016 1.33333 14.6667 1.98401 14.6667 2.78666V13.2133C14.6667 14.016 14.016 14.6667 13.2133 14.6667H2.78668C1.98402 14.6667 1.33334 14.016 1.33334 13.2133V2.78666C1.33334 1.98401 1.98402 1.33333 2.78668 1.33333Z"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2993_7243">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
