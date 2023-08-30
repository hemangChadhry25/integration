"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { isInvalid?: boolean }
>(({ className, isInvalid, ...props }, ref) => (
  <input
    className={cn(
      "rounded-y-[5px] peer flex h-11 w-full rounded-l-[var(--rounded-l,5px)] rounded-r-[var(--rounded-r,5px)] border border-gray-300 bg-white py-2.5 pl-[var(--pl,14px)] pr-[var(--pr,14px)] text-base text-gray-black shadow-xs placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      {
        "border-error-300 focus:border-error-300 focus:ring-error-100":
          isInvalid,
      },
      className
    )}
    ref={ref}
    {...props}
  />
));

(Input as any).id = "Input";

Input.displayName = "Input";
