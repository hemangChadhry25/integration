import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

export function mergeRefs<T = any>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export function getSize<TElement extends Element>(element: TElement) {
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
}

export function computePercentage(value: number, percentage: number) {
  return (value * percentage) / 100;
}

export function computeCircumference(radius: number) {
  return 2 * Math.PI * radius;
}

export function nope() {}

export function isString(arg: any): arg is string {
  return typeof arg === "string";
}

export const createContext = <TValue>({
  displayName,
  value,
  errorMessage,
}: {
  value?: TValue;
  displayName?: string;
  errorMessage?: string;
} = {}) => {
  const Context = React.createContext(value);
  Context.displayName = displayName;

  const useContext = () => {
    const context = React.useContext(Context);
    if (!context) {
      throw new Error(errorMessage);
    }
    return context;
  };

  return [Context.Provider, useContext] as const;
};
