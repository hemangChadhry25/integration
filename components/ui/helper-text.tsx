"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const helperTextVariants = cva(
  "block text-gray-500 font-normal peer-disabled:opacity-50",
  {
    variants: {
      size: {
        xs: "text-xs leading-[18px]",
        sm: "text-sm",
        md: "text-base",
        lg: "text-[18px] leading-7",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

interface HelperTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof helperTextVariants> {}

const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>(
  ({ className, size, ...props }) => (
    <span className={cn(helperTextVariants({ size, className }))} {...props} />
  )
);

HelperText.displayName = "HelperText";

export { HelperText };
