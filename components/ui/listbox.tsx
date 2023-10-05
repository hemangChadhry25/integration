import React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Listbox as ListboxPrimitive, Transition } from "@headlessui/react";

import { cn, createContext } from "@/lib/utils";
import { useControllableState } from "@/lib/hooks";

const [ListboxProvider, useListboxContext] = createContext<{
  selected: string;
}>({
  displayName: "ListboxProvider",
  errorMessage: `useListboxContext returned is 'undefined'. Seems you forgot to wrap the components in "<Listbox />"`,
});

export const Listbox = React.forwardRef<
  React.ElementRef<typeof ListboxPrimitive>,
  Omit<
    Omit<React.ComponentPropsWithoutRef<typeof ListboxPrimitive>, "value">,
    "onChange"
  > & {
    value?: string;
    onChange?: (value: string) => void;
  }
>(({ className, as = "div", value, onChange, ...props }, ref) => {
  const [selected, setSelected] = useControllableState({
    defaultValue: "",
    value,
    onChange,
  });

  return (
    <ListboxProvider value={{ selected }}>
      <ListboxPrimitive
        className={cn("relative w-full", className)}
        as={as}
        ref={ref}
        value={selected}
        onChange={setSelected}
        {...props}
      />
    </ListboxProvider>
  );
});

Listbox.displayName = "Listbox";

export const ListboxButton = React.forwardRef<
  React.ElementRef<typeof ListboxPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitive.Button> & {
    placeholder?: string;
    iconClassName?: string;
  }
>(({ className, placeholder, iconClassName, ...props }, ref) => {
  const { selected } = useListboxContext();

  return (
    <ListboxPrimitive.Button
      className="flex h-11 w-full items-center gap-x-2 rounded-[5px] border border-gray-300 bg-white px-2.5 py-2.5 text-base text-gray-black shadow-xs focus:border-primary-500 focus:ring-4 focus:ring-primary-50 focus-visible:outline-none"
      {...props}
      ref={ref}
    >
      {selected ? (
        selected
      ) : (
        <span className="text-gray-500">{placeholder}</span>
      )}
      <ChevronDown
        className={cn("ml-auto h-5 w-5 flex-none text-gray-500", iconClassName)}
      />
    </ListboxPrimitive.Button>
  );
});

ListboxButton.displayName = "ListboxButton";

export const ListboxOptions = React.forwardRef<
  React.ElementRef<typeof ListboxPrimitive.Options>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitive.Options>
>(({ className, ...props }, ref) => (
  <Transition
    as={React.Fragment}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <ListboxPrimitive.Options
      ref={ref}
      className={cn(
        "absolute mt-1 h-[206px] w-full space-y-1 overflow-y-auto rounded-md bg-white py-1 text-base shadow-lg scrollbar-thin scrollbar-track-gray-200 scrollbar-track-rounded-lg focus:outline-none sm:text-sm",
        className
      )}
      {...props}
    />
  </Transition>
));

ListboxOptions.displayName = "ListboxOptions";

export const ListboxOption = React.forwardRef<
  React.ElementRef<typeof ListboxPrimitive.Option>,
  Omit<
    Omit<
      React.ComponentPropsWithoutRef<typeof ListboxPrimitive.Option>,
      "value"
    >,
    "children"
  > & {
    value: string;
    children?: React.ReactNode;
  }
>(({ className, value, children, ...props }, ref) => (
  <ListboxPrimitive.Option
    className={cn(
      "flex cursor-pointer items-center gap-x-2 p-3 text-[13px] leading-[13.25px] text-gray-500 ui-active:bg-gray-50 ui-active:text-gray-black"
    )}
    ref={ref}
    value={value}
    {...props}
  >
    {({ selected }) => (
      <>
        {children}
        {selected && <Check className="ml-auto h-4 w-4 text-primary-500" />}
      </>
    )}
  </ListboxPrimitive.Option>
));

ListboxOption.displayName = "ListboxOption";
