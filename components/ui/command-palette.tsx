"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogProps, DialogContentProps } from "@radix-ui/react-dialog";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Command as CommandPalettePrimitive } from "cmdk";
import { VariantProps } from "class-variance-authority";

import { cn, createContext } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui";
import { inputVariants } from "./input";

const [CommandPaletteProvider, useCommandPaletteContext] = createContext<{
  open: boolean;
  on: () => void;
  off: () => void;
}>({
  errorMessage: `useCommandPaletteContext returned is 'undefined'. Seems you forgot to wrap the components in "<CommandPaletteDialog />"`,
  displayName: "CommandPaletteContext",
});

const CommandPaletteDialogClose = DialogPrimitive.Close;

const CommandPaletteDialogTrigger = DialogPrimitive.Trigger;

const CommandPalette = React.forwardRef<
  React.ElementRef<typeof CommandPalettePrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPalettePrimitive>
>(({ className, ...props }, ref) => (
  <CommandPalettePrimitive
    ref={ref}
    className={cn(
      "w-full max-w-[728px] rounded-xl bg-white pt-6 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}
  />
));
CommandPalette.displayName = CommandPalettePrimitive.displayName;

interface CommandPaletteDialogProps extends DialogProps {}

const CommandPaletteDialog = (props: CommandPaletteDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const on = React.useCallback(() => setOpen(true), []);
  const off = React.useCallback(() => setOpen(false), []);
  const value = React.useMemo(() => ({ open, off, on }), [open, off, on]);

  return (
    <CommandPaletteProvider value={value}>
      <Dialog open={open} onOpenChange={setOpen} {...props} />
    </CommandPaletteProvider>
  );
};

interface CommandPaletteDialogContentProps extends DialogContentProps {}

const CommandPaletteDialogContent = ({
  className,
  ...props
}: CommandPaletteDialogContentProps) => {
  return (
    <DialogContent
      className={cn("max-w-[728px] p-0 shadow-none", className)}
      {...props}
    />
  );
};

const CommandPaletteHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <div
      className="flex items-center justify-between px-6"
      ref={ref}
      {...props}
    />
  );
});

CommandPaletteHeader.displayName = "CommandPaletteHeader";

const CommandPaletteTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentProps<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    className={cn("text-lg font-semibold text-gray-900", className)}
    ref={ref}
    {...props}
  />
));

CommandPaletteTitle.displayName = "CommandPaletteTitle";

const CommandPaletteInput = React.forwardRef<
  React.ElementRef<typeof CommandPalettePrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPalettePrimitive.Input> &
    VariantProps<typeof inputVariants>
>(({ className, variant, ...props }, ref) => (
  <div className="mt-8 px-6">
    <div className="relative" cmdk-input-wrapper="">
      <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
      <CommandPalettePrimitive.Input
        ref={ref}
        className={cn(
          inputVariants({ variant, className: "pl-[42px]" }),
          className
        )}
        {...props}
      />
    </div>
  </div>
));

CommandPaletteInput.displayName = CommandPalettePrimitive.Input.displayName;

const CommandPaletteList = React.forwardRef<
  React.ElementRef<typeof CommandPalettePrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPalettePrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPalettePrimitive.List
    ref={ref}
    className={cn(
      "mt-6 max-h-[524px] overflow-y-auto overflow-x-hidden px-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg",
      className
    )}
    {...props}
  />
));

CommandPaletteList.displayName = CommandPalettePrimitive.List.displayName;

const CommandPaletteEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPalettePrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPalettePrimitive.Empty>
>((props, ref) => (
  <CommandPalettePrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm text-gray-900"
    {...props}
  />
));

CommandPaletteEmpty.displayName = CommandPalettePrimitive.Empty.displayName;

const CommandPaletteGroup = React.forwardRef<
  React.ElementRef<typeof CommandPalettePrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPalettePrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPalettePrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden pb-6 [&_[cmdk-group-heading]]:mb-3 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.02em] [&_[cmdk-group-heading]]:text-gray-500 [&_[cmdk-group-items]]:grid [&_[cmdk-group-items]]:gap-3 [&_[cmdk-group-items]]:md:grid-cols-2",
      className
    )}
    {...props}
  />
));

CommandPaletteGroup.displayName = CommandPalettePrimitive.Group.displayName;

const CommandPaletteSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPalettePrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPalettePrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPalettePrimitive.Separator
    ref={ref}
    className={cn("bg-border -mx-1 h-px", className)}
    {...props}
  />
));
CommandPaletteSeparator.displayName =
  CommandPalettePrimitive.Separator.displayName;

const CommandPaletteItem = React.forwardRef<
  React.ElementRef<typeof CommandPalettePrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPalettePrimitive.Item>
>(({ className, onClick, ...props }, ref) => {
  const { off } = useCommandPaletteContext();
  return (
    <CommandPalettePrimitive.Item
      ref={ref}
      onSelect={off}
      className={cn(
        "flex h-[68px] cursor-pointer select-none items-center gap-x-3 rounded-lg border border-gray-200 p-[13px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)] outline-none transition duration-300 hover:border-2 hover:border-gray-300 hover:p-3",
        className
      )}
      {...props}
    />
  );
});

CommandPaletteItem.displayName = CommandPalettePrimitive.Item.displayName;

const CommandPaletteShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
};
CommandPaletteShortcut.displayName = "CommandPaletteShortcut";

export {
  CommandPalette,
  CommandPaletteTitle,
  CommandPaletteDialog,
  CommandPaletteHeader,
  CommandPaletteDialogClose,
  CommandPaletteDialogTrigger,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteEmpty,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteShortcut,
  CommandPaletteSeparator,
  CommandPaletteDialogContent,
};
