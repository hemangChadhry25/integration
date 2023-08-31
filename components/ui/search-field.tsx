"use client";

import * as React from "react";
import { VariantProps } from "class-variance-authority";

import { comboboxButtonVariants, comboboxInputVariants } from "./combobox";
import { cn, createContext } from "@/lib/utils";

const [SearchFieldProvider, useSearchFieldContext] = createContext<string>({
  displayName: "SearchFieldContext",
  errorMessage: `useSearchFieldContext returned is 'undefined'. Seems you forgot to wrap the components in "<SearchField />"`,
});

const SearchField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div className={cn("relative w-[224px]", className)} ref={ref} {...props}>
    <SearchFieldProvider value={React.useId()}>{children}</SearchFieldProvider>
  </div>
));

SearchField.displayName = "SearchField";

const SearchFieldInput = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement> &
    VariantProps<typeof comboboxInputVariants>
>(({ size, visual, className, ...props }, ref) => {
  const id = useSearchFieldContext();
  return (
    <input
      className={cn(comboboxInputVariants({ size, visual, className }))}
      type="text"
      autoComplete="off"
      spellCheck="false"
      id={id}
      {...props}
      ref={ref}
    />
  );
});

SearchFieldInput.displayName = "SearchFieldInput";

const SearchFieldButton = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement> &
    VariantProps<typeof comboboxButtonVariants>
>(({ size, align, className, ...props }, ref) => {
  const id = useSearchFieldContext();
  return (
    <label
      aria-label="Search"
      className={cn(
        "cursor-pointer",
        comboboxButtonVariants({ align, size, className })
      )}
      htmlFor={id}
      {...props}
      ref={ref}
    />
  );
});
SearchFieldButton.displayName = "SearchFieldButton";

export { SearchField, SearchFieldInput, SearchFieldButton };
