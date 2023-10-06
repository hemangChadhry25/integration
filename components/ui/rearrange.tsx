"use client";

import * as React from "react";
import { Reorder, useDragControls } from "framer-motion";

import {
  cn,
  createContext,
  flatten,
  get2DArray,
  isEmpty,
  isNotEmpty,
} from "@/lib/utils";
import { useControllableState } from "@/lib/hooks";

const [RearrangeProvider, useRearrangeContext] = createContext<{
  clear: () => void;
}>({
  displayName: "RearrangeProvider",
  errorMessage: `useRearrangeContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rearrange />"`,
});

const Rearrange = <T, K extends T[]>({
  values,
  children,
  className,
  track,
  onValueChange,
  button,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  values: K;
  children: (options: {
    remove: (index: number) => void;
    patch: (value: K) => void;
    value: K;
  }) => React.ReactNode;
  track?: (value: number) => React.ReactNode;
  onValueChange?: (values: K) => void;
  button?: React.ReactNode;
}) => {
  const [twoDimensions, setTwoDimensions] = useControllableState<K[]>({
    value: onValueChange ? get2DArray(values) : undefined,
    defaultValue: get2DArray(values),
    onChange: (value) => {
      onValueChange?.(flatten(value) as K);
    },
  });

  const remove = React.useCallback(
    (topIndex: number) => (index: number) => {
      setTwoDimensions((prev) => {
        const item = prev[topIndex];
        const newItem = item.filter((value, i) => i !== index);

        return isEmpty(newItem)
          ? prev.filter((item, i) => i !== topIndex)
          : (prev.map((item, i) => (i === topIndex ? newItem : item)) as K[]);
      });
    },
    [setTwoDimensions]
  );

  const patch = React.useCallback(
    (index: number) => (value: K) => {
      setTwoDimensions((prev) =>
        prev.map((item, i) => (i === index ? value : item))
      );
    },
    [setTwoDimensions]
  );

  const clear = React.useCallback(
    () => setTwoDimensions([]),
    [setTwoDimensions]
  );

  const value = React.useMemo(() => ({ clear }), [clear]);

  return (
    <RearrangeProvider value={value}>
      {twoDimensions.map((value, index) => (
        <div
          className={cn("flex items-center gap-x-1.5", className)}
          {...props}
          key={index}
        >
          {track?.(index + 1)}
          {children({ value, remove: remove(index), patch: patch(index) })}
        </div>
      ))}

      {isNotEmpty(twoDimensions) && button}
    </RearrangeProvider>
  );
};

const RearrangeTrack = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("select-none text-sm text-gray-500", className)}
      {...props}
    />
  );
};

const RearrangeGroup = <T extends any[]>({
  onRearrange,
  className,
  ...props
}: {
  values: T;
  className?: string;
  onRearrange: (newValues: T) => void;
  children?: React.ReactNode;
}) => {
  const handleReorder = (newValues: any[]) => {
    onRearrange(newValues as T);
  };

  return (
    <Reorder.Group
      className={cn("flex flex-wrap items-center gap-x-1.5", className)}
      onReorder={handleReorder}
      {...props}
    />
  );
};

const RearrangeItem = <T,>({
  children,
  className,
  ...props
}: {
  value: T;
  className?: string;
  children: (
    start: (event: React.PointerEvent<Element>) => void
  ) => React.ReactNode;
}) => {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      className={cn("relative", className)}
      dragControls={dragControls}
      dragListener={false}
      drag
      {...props}
    >
      {children((event) => dragControls.start(event))}
    </Reorder.Item>
  );
};

const RearrangeButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { clear } = useRearrangeContext();

  return (
    <button
      className={cn("text-sm font-semibold text-primary-500")}
      onClick={clear}
      ref={ref}
      {...props}
    />
  );
});

RearrangeButton.displayName = "RearrangeButton";

export {
  Rearrange,
  RearrangeGroup,
  RearrangeItem,
  RearrangeButton,
  RearrangeTrack,
};
