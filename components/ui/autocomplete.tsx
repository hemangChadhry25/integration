import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Combobox as AutocompletePrimitives } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { labelVariants } from "./label";
import { Checkbox } from "./checkbox";

const AutocompleteRoot = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives>,
  React.ComponentPropsWithoutRef<typeof AutocompletePrimitives> & {
    multiple?: boolean;
  }
>(({ className, as = "div", ...props }, ref) => (
  <AutocompletePrimitives
    className={cn("group", className)}
    ref={ref}
    as={as}
    {...props}
  />
));

AutocompleteRoot.displayName = "AutocompleteRoot";

const Autocomplete = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("relative w-[320px]", className)} ref={ref} {...props} />
));

Autocomplete.displayName = "Autocomplete";

const AutocompleteLabel = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Label>,
  React.ComponentProps<typeof AutocompletePrimitives.Label>
>(({ className, ...props }, ref) => (
  <AutocompletePrimitives.Label
    className={cn(labelVariants({ className }))}
    ref={ref}
    {...props}
  />
));

AutocompleteLabel.displayName = "AutocompleteLabel";

const AutocompleteTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("relative z-10", className)} ref={ref} {...props} />
));

AutocompleteTrigger.displayName = "AutocompleteTrigger";

const AutocompleteInput = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Input>,
  React.ComponentProps<typeof AutocompletePrimitives.Input>
>(({ className, ...props }, ref) => (
  <>
    <AutocompletePrimitives.Input
      className={cn(
        "peer h-11 w-full rounded-[5px] border-gray-300 bg-white px-3 py-2.5 text-sm leading-6 text-gray-black shadow-xs ui-open:rounded-b-none ui-open:rounded-t-lg ui-open:border-0 ui-open:border-b ui-open:pl-[42px] ui-open:shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] ui-not-open:pr-[42px] ui-open:hover:border-primary-200 focus:border-gray-300 focus:ring-0 ui-open:focus:border-primary-500",
        className
      )}
      ref={ref}
      {...props}
    />
    <span className="absolute inset-x-0 -bottom-0.5 hidden h-0.5 w-full bg-primary-100 peer-hover:peer-data-ui-open:block peer-focus:peer-data-ui-open:block" />
  </>
));

AutocompleteInput.displayName = "AutocompleteInput";

const AutocompleteButton = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Button>,
  React.ComponentProps<typeof AutocompletePrimitives.Button>
>(({ className, ...props }, ref) => (
  <AutocompletePrimitives.Button
    className={cn(
      "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-data-ui-open:left-3.5 group-data-ui-open:right-auto group-data-ui-open:text-gray-400",
      className
    )}
    ref={ref}
    {...props}
  />
));

AutocompleteButton.displayName = "AutocompleteButton";

const AutocompleteOptions = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Options>,
  React.ComponentProps<typeof AutocompletePrimitives.Options>
>(({ className, ...props }, ref) => (
  <AutocompletePrimitives.Options
    className={cn(
      "absolute top-full h-[320px] w-full overflow-y-auto rounded-b-lg bg-white shadow-xs scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-[13px] ui-open:shadow-[0px_8px_25px_0px_rgba(0,0,0,0.10)]",
      className
    )}
    ref={ref}
    {...props}
  />
));

AutocompleteOptions.displayName = "AutocompleteOptions";

const AutocompleteOption = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Option>,
  React.ComponentProps<typeof AutocompletePrimitives.Option> & {
    children: React.ReactNode;
  }
>(({ className, children, ...props }, ref) => (
  <AutocompletePrimitives.Option
    className={cn("h-10 px-3.5 py-2", className)}
    ref={ref}
    {...props}
  >
    {({ selected }) => (
      <LabelPrimitive.Root className="flex items-center gap-x-3 text-sm text-gray-500">
        <Checkbox checked={selected} />
        {children}
      </LabelPrimitive.Root>
    )}
  </AutocompletePrimitives.Option>
));

AutocompleteOption.displayName = "AutocompleteOption";

export {
  AutocompleteRoot,
  AutocompleteLabel,
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteInput,
  AutocompleteButton,
  AutocompleteOptions,
  AutocompleteOption,
};
