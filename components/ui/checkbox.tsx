"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer shrink-0 border-[1.5px] border-gray-300 hover:border-primary-400 hover:ring hover:ring-primary-50 focus:ring focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-200 disabled:hover:ring-0 data-[state=checked]:border-primary-500 data-[state=checked]:hover:border-primary-500 data-[state=checked]:bg-primary-500 data-[state=checked]:text-white data-[state=checked]:disabled:border-gray-200 data-[state=checked]:disabled:bg-gray-50 data-[state=checked]:disabled:text-gray-200 data-[state=indeterminate]:border-primary-500 data-[state=indeterminate]:hover:border-primary-500 data-[state=indeterminate]:bg-primary-500 data-[state=indeterminate]:text-white data-[state=indeterminate]:disabled:border-gray-200 data-[state=indeterminate]:disabled:bg-gray-50 data-[state=indeterminate]:disabled:text-gray-200",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      variant: {
        rounded: "rounded-[5px]",
        circular: "rounded-full",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "rounded",
    },
  }
);

const checkIconVariants = cva(
  "hidden stroke-[2.5px] group-data-[state=checked]:inline-flex",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-3.5 w-3.5",
        lg: "h-4 w-4",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const minusIconVariants = cva(
  "hidden stroke-[2.5px] group-data-[state=indeterminate]:inline-flex",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-3.5 w-3.5",
        lg: "h-4 w-4",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, variant, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      className={cn(checkboxVariants({ size, variant, className }))}
      {...props}
      ref={ref}
    >
      <CheckboxPrimitive.Indicator className="group flex items-center justify-center text-current">
        <Check className={checkIconVariants({ size })} />
        <Minus className={minusIconVariants({ size })} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
