"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn("flex flex-col gap-3", className)}
      {...props}
      ref={ref}
    />
  );
});

ButtonGroup.displayName = "ButtonGroup";
