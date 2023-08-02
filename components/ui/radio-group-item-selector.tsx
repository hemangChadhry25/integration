import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const radioGroupItemSelectorVariants = cva(
  "group flex items-center gap-x-5 rounded-[7px] border border-gray-200 text-left data-[state=checked]:border-primary-500 data-[state=checked]:ring-1 data-[state=checked]:ring-primary-500 hover:border-gray-300 hover:ring-1 hover:ring-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 data-[state=checked]:hover:border-primary-500 data-[state=checked]:hover:ring-primary-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:opacity-50 disabled:data-[state=checked]:border-gray-200 disabled:data-[state=checked]:ring-0 disabled:hover:border-gray-200 disabled:hover:ring-0",
  {
    variants: {
      size: {
        sm: "px-5 py-2",
        md: "px-5 py-2.5",
        lg: "px-[22px] py-3",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const radioGroupItemVariants = cva(
  "inline-flex flex-none items-center justify-center rounded-full border-[1.5px] border-gray-300 group-hover:border-primary-400 group-hover:ring group-hover:ring-primary-50 group-focus:ring group-focus:ring-primary-50 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 group-disabled:group-data-[state=checked]:text-gray-200 group-disabled:border-gray-200 group-disabled:group-hover:border-gray-200 group-disabled:group-hover:ring-0 group-disabled:group-data-[state=checked]:bg-gray-50 group-disabled:group-data-[state=checked]:border-gray-200",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const iconVariants = cva("fill-current text-current", {
  variants: {
    size: {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2.5 w-2.5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const RadioGroupItemSelector = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof radioGroupItemSelectorVariants>
>(({ className, children, size, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    className={cn(radioGroupItemSelectorVariants({ size, className }))}
    {...props}
    ref={ref}
  >
    <span className={radioGroupItemVariants({ size, className })}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className={iconVariants({ size })} />
      </RadioGroupPrimitive.Indicator>
    </span>
    <div className="flex flex-auto flex-col">{children}</div>
  </RadioGroupPrimitive.Item>
));

RadioGroupItemSelector.displayName = "RadioGroupItemSelector";

export { RadioGroupItemSelector };
