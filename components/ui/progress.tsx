"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import {
  cn,
  computeCircumference,
  computePercentage,
  getSize,
} from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const LinearProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value?: number;
  }
>(({ className, value = 0, ...props }, ref) => {
  const indicatorRef =
    React.useRef<React.ElementRef<typeof ProgressPrimitive.Indicator>>(null);
  const [alignOffset, setAlignOffset] = React.useState<number>();

  React.useEffect(() => {
    const indicator = indicatorRef.current;

    if (!indicator) return;

    const { width } = getSize(indicator);
    const offset = computePercentage(width, value);
    setAlignOffset(offset);
  }, [value]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ProgressPrimitive.Root
            ref={ref}
            className={cn(
              "relative h-2 w-full overflow-hidden rounded-full bg-gray-100",
              className
            )}
            {...props}
          >
            <ProgressPrimitive.Indicator
              className="h-full w-full flex-1 rounded-r-full bg-primary-500 transition-all"
              style={{ transform: `translateX(-${100 - value}%)` }}
              ref={indicatorRef}
            />
          </ProgressPrimitive.Root>
        </TooltipTrigger>
        <TooltipContent
          className="px-3 py-2"
          alignOffset={alignOffset}
          visual="white"
          align="start"
        >
          {value}%
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
LinearProgress.displayName = ProgressPrimitive.Root.displayName;

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  strokeWidth?: number;
  value?: number;
  trackClassName?: string;
}

const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(
  (
    {
      size = 58,
      value = 0,
      strokeWidth = 8,
      className,
      trackClassName,
      ...props
    },
    ref
  ) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = computeCircumference(radius);
    const offset = circumference - (value / 100) * circumference;

    return (
      <div
        className={cn(
          "relative inline-flex text-center text-sm font-medium text-gray-900",
          className
        )}
        {...props}
        ref={ref}
      >
        <svg width={size} height={size}>
          <circle
            className={cn("stroke-gray-200", trackClassName)}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
          />
          <circle
            className="stroke-primary-500"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {value}%
        </span>
      </div>
    );
  }
);

CircularProgress.displayName = "CircularProgress";

export { CircularProgress, LinearProgress };
