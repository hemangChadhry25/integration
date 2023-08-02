import * as React from "react";
import { Combobox as ComboboxPrimitive, Transition } from "@headlessui/react";

import { cn } from "@/lib/utils";

const ComboboxLabel = ComboboxPrimitive.Label;

const Combobox = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive>
>(({ className, as = "div", ...props }, ref) => (
  <ComboboxPrimitive
    className={cn("relative w-[236px]", className)}
    as={as}
    {...props}
    ref={ref}
  />
));

Combobox.displayName = "Combobox";

const ComboboxTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("relative", className)} {...props} ref={ref} />
));

ComboboxTrigger.displayName = "ComboboxTrigger";

const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Input>
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Input
    className={cn(
      "peer w-full rounded-[5px] border border-gray-300 py-2.5 pl-[34px] pr-3 text-sm text-gray-black hover:border-primary-200 hover:ring hover:ring-primary-50 focus:border-primary-500 focus:ring focus:ring-primary-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-50 disabled:opacity-50 hover:disabled:border-gray-300 hover:disabled:ring-0",
      className
    )}
    {...props}
    ref={ref}
  />
));

ComboboxInput.displayName = "ComboboxInput";

const ComboboxButton = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Button>
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Button
    className={cn(
      "absolute inset-y-0 left-2.5 my-auto text-gray-400 focus-visible:outline-none peer-hover:text-gray-500 peer-focus:text-primary-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  />
));

ComboboxButton.displayName = "ComboboxButton";

const ComboboxOptions = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Options>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Options>
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Options
    className={cn(
      "absolute mt-1 w-full space-y-1 rounded-[5px] bg-white px-1 shadow-2xl",
      className
    )}
    {...props}
    ref={ref}
  />
));

ComboboxOptions.displayName = "ComboboxOptions";

const ComboboxOption = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Option>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Option>
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Option
    className={cn(
      "bg-white px-3 py-2.5 text-[13px] font-medium leading-none text-gray-500 ui-active:bg-gray-50 ui-active:text-gray-900",
      className
    )}
    {...props}
    ref={ref}
  />
));

ComboboxOption.displayName = "ComboboxOption";

const ScaleIn = React.forwardRef<
  React.ElementRef<typeof Transition>,
  React.ComponentPropsWithoutRef<typeof Transition>
>((props, ref) => (
  <Transition
    as={React.Fragment}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
    {...props}
    ref={ref}
  />
));

ScaleIn.displayName = "ScaleIn";

export {
  Combobox,
  ComboboxTrigger,
  ComboboxInput,
  ComboboxLabel,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ScaleIn,
};
