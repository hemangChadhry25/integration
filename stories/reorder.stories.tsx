import * as React from "react";
import { Fragment } from "react";
import { Meta } from "@storybook/react";
import { AnimatePresence, motion } from "framer-motion";

import { Badge, ReorderGroup, ReorderItem } from "@/components/ui";
import { GripVertical, X } from "@/components/icons";
import { add, chunk } from "@/lib/utils";
import { useToggle } from "@/lib/hooks";

const meta: Meta = {
  title: "Reorder",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-90308&mode=design&t=bvOGFGTydafQJUbm-4",
    },
  },
};

export default meta;

export const Default = () => {
  const [itemsArr, setItemsArr] = React.useState(() =>
    chunk(["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"], 2)
  );
  const [show, { on, off }] = useToggle();

  React.useEffect(() => {
    const isNotEmpty = itemsArr.length > 0;

    if (isNotEmpty) {
      on();
    } else {
      off();
    }
  }, [itemsArr, on, off]);

  const setItems = (newOrder: any[], index: number) => {
    const clone = [...itemsArr];
    clone[index] = newOrder;
    setItemsArr(clone);
  };

  const removeItem = (index: number, removalIndex: number) => {
    let clone = [...itemsArr];

    const items = clone[index];
    const filteredItems = items.filter((item, index) => index !== removalIndex);
    const isEmpty = filteredItems.length === 0;

    if (isEmpty) {
      clone = clone.filter((value, i) => i !== index);
    } else {
      clone[index] = filteredItems;
    }

    setItemsArr(clone);
  };

  const clearAll = () => {
    setItemsArr([]);
  };

  return (
    <div className="flex w-full flex-col space-y-[5px]">
      <AnimatePresence>
        {itemsArr.map((items, index) => (
          <ReorderGroup
            className="flex w-full max-w-[320px] flex-grow items-center gap-x-1.5 gap-y-3"
            onReorder={(newOrder) => setItems(newOrder, index)}
            values={items}
            key={index}
            exit={{ opacity: 0 }}
          >
            <motion.span
              className="text-sm text-gray-500"
              exit={{ opacity: 0 }}
            >
              {add(index, 1)}
            </motion.span>

            {items.map((item, i) => (
              <Fragment key={item}>
                <ReorderItem layout drag value={item} exit={{ opacity: 0 }}>
                  {({ dragControls }) => (
                    <Badge className="select-none" visual="primary">
                      <GripVertical
                        className="cursor-pointer opacity-60"
                        onPointerDown={(event) => dragControls.start(event)}
                      />
                      {item}
                      <X
                        className="cursor-pointer opacity-60 transition-opacity duration-300 ease-out hover:opacity-100"
                        onClick={() => removeItem(index, i)}
                      />
                    </Badge>
                  )}
                </ReorderItem>
                <motion.span
                  className="inline-block h-1 w-1 flex-none rounded-full bg-gray-400 last-of-type:hidden"
                  exit={{ opacity: 0 }}
                />
              </Fragment>
            ))}
          </ReorderGroup>
        ))}
        {show && (
          <motion.button
            className="mt-4 inline-flex text-sm font-semibold text-primary-500 focus-visible:outline-none"
            exit={{ opacity: 0 }}
            onClick={clearAll}
          >
            Clear all
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
