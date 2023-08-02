"use client";

import * as React from "react";

import { createContext, getValidChildren } from "@/lib/utils";

const [InputGroupProvider, useInputGroupContext] = createContext<{
  [key: string]: string;
}>({
  displayName: "InputGroupProvider",
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />"`,
});

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { fieldHeight?: string }
>(({ children, fieldHeight = "2.75rem", ...props }, ref) => {
  const validChildren = getValidChildren(children);
  let fieldStyles: { [key: string]: string } = {};

  validChildren.forEach((child: any) => {
    const id = child.type.id;
    if (id === "InputLeftElement") {
      fieldStyles = {
        ...fieldStyles,
        paddingLeft: fieldHeight,
      };
    }
    if (id === "InputRightElement") {
      fieldStyles = {
        ...fieldStyles,
        paddingRight: fieldHeight,
      };
    }
    if (id === "InputLeftAddon") {
      fieldStyles = {
        ...fieldStyles,
        borderTopLeftRadius: "0rem",
        borderBottomLeftRadius: "0rem",
      };
    }
    if (id === "InputRightAddon") {
      fieldStyles = {
        ...fieldStyles,
        borderTopRightRadius: "0rem",
        borderBottomRightRadius: "0rem",
      };
    }
  });

  const clones = validChildren.map((child: any) => {
    return child.type.id === "Input"
      ? React.cloneElement(child, { style: { ...fieldStyles } })
      : child;
  });

  return (
    <InputGroupProvider value={{ fieldHeight }}>
      <div className="relative flex items-center" ref={ref} {...props}>
        {clones}
      </div>
    </InputGroupProvider>
  );
});

InputGroup.displayName = "InputGroup";

export { InputGroup, InputGroupProvider, useInputGroupContext };
