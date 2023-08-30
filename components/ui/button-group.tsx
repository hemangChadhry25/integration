"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn, getValidChildren } from "@/lib/utils";

export const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
    direction?: "vertical" | "horizontal";
  }
>(({ asChild, className, direction = "vertical", children, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  const validChildren = getValidChildren(children);
  const count = validChildren.length;

  return (
    <Comp
      className={cn(
        "grid gap-3",
        direction === "horizontal" &&
          "grid-cols-[repeat(var(--grid-cols,2),1fr)]",
        className
      )}
      {...props}
      style={{
        ...props.style,
        ...{ "--grid-cols": count },
      }}
      ref={ref}
    >
      {children}
    </Comp>
  );
});

ButtonGroup.displayName = "ButtonGroup";
