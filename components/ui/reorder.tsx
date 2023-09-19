import * as React from "react";
import { Reorder, useDragControls, DragControls } from "framer-motion";

import { isFn } from "@/lib/utils";

const ReorderGroup = Reorder.Group;

const ReorderItem = React.forwardRef<
  React.ComponentRef<typeof Reorder.Item>,
  Omit<React.ComponentPropsWithoutRef<typeof Reorder.Item>, "children"> & {
    children:
      | (({ dragControls }: { dragControls: DragControls }) => React.ReactNode)
      | React.ReactNode;
  }
>(({ children, ...props }, ref) => {
  const dragControls = useDragControls();
  const shouldUseRenderProps = isFn(children);

  return (
    <Reorder.Item
      dragListener={shouldUseRenderProps ? false : undefined}
      dragControls={shouldUseRenderProps ? dragControls : undefined}
      {...props}
      ref={ref}
    >
      {shouldUseRenderProps ? children({ dragControls }) : children}
    </Reorder.Item>
  );
});

ReorderItem.displayName = "ReorderItem";

export { ReorderGroup, ReorderItem };
