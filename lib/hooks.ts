import * as React from "react";

export function useDebounce<TValue>(value: TValue, delay?: number) {
  const [state, setState] = React.useState(value);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setState(value), delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return state;
}
