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

export function first<T extends any[] | string>(arg: T) {
  return arg[0];
}

export function last(arg: string | string[]) {
  return arg[0];
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

export function verifyFileType(fileName: string, accepted: string[]): boolean {
  if (accepted.length === 0) {
    return false;
  }
  return fileName.endsWith(first(accepted))
    ? true
    : verifyFileType(fileName, accepted.slice(1));
}

export function convertToKbOrMb(bytes: number) {
  const kbs = bytes / 1000;
  return kbs < 1000 ? `${kbs.toFixed(2)}KB` : `${(kbs / 1000).toFixed(2)}MB`;
}
