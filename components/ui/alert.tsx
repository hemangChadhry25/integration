import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { X2 } from "../icons";

const alertVariants = cva(
  "relative w-full [&>svg~*]:pl-12 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 rounded-lg border py-4",
  {
    variants: {
      variant: {
        default: "bg-gray-25 border-gray-300 text-gray-500",
        primary: "bg-primary-50 border-primary-300 text-primary-500",
        error: "bg-error-25 border-error-300 text-error-500",
        warning: "bg-warning-25 border-warning-300 text-warning-500",
        success: "bg-success-25 border-success-300 text-success-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, className }))}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-1 text-sm", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

const CloseButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={cn(
      "absolute right-2 top-2 flex h-9 w-9 items-center justify-center focus-visible:outline-none",
      className
    )}
    {...props}
    ref={ref}
  >
    <X2 />
  </button>
));

CloseButton.displayName = "CloseButton";

export { Alert, AlertTitle, AlertDescription, CloseButton };
