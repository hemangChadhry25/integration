"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { isInvalid?: boolean }
>(({ className, isInvalid, ...props }, ref) => (
  <input
    className={cn(
      "peer flex h-11 w-full rounded-[5px] border border-gray-300 bg-white px-[14px] py-2.5 text-base text-gray-black shadow-xs placeholder:text-gray-500  invalid:pr-11 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
