import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isInvalid, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-[128px] w-full resize-none rounded-[5px] border border-gray-300 bg-transparent px-[14px] py-1.5 text-base text-gray-black shadow-xs placeholder:text-gray-500 focus:border-primary-300 focus:ring-2 focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-50",
          {
            "border-error-500 focus:border-error-500 focus:ring-error-100":
              isInvalid,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
