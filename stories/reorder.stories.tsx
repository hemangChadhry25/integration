import * as React from "react";
import { Meta } from "@storybook/react";
import { AnimatePresence, motion } from "framer-motion";

import { Badge, ReorderGroup, ReorderItem } from "@/components/ui";
import { GridVertical2, GripVertical, X } from "@/components/icons";
import { chunk, isEmpty, isNotEmpty } from "@/lib/utils";
import { EXIT_ANIMATION } from "@/lib/constants";

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
  const [state, setState] = React.useState([
    "🍅 Tomato",
    "🥒 Cucumber",
    "🧀 Cheese",
    "🥬 Lettuce",
  ]);
  const itemsArr = chunk(state);
  const showClearAll = isNotEmpty(itemsArr);

  const setItems = (newOrder: string[], index: number) => {
    const newItemsArr = itemsArr.map((chunk, i) =>
      i === index ? newOrder : chunk
    );
    setState(newItemsArr.flat(1));
  };

  const removeItem = (index: number, removalIndex: number) => {
    const items = itemsArr[index];
    const filteredItems = items.filter((item, i) => i !== removalIndex);

    if (isEmpty(filteredItems)) {
      const filteredItemsArr = itemsArr.filter((chunk, i) => i !== index);
      setState(filteredItemsArr.flat(1));
    } else {
      const newChunkMetrics = itemsArr.map((chunk, i) =>
        i === index ? filteredItems : chunk
      );
      setState(newChunkMetrics.flat(1));
    }
  };

  const clearAll = () => setState([]);

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {itemsArr.map((items, index) => (
          <div className="flex items-center" key={index}>
            <motion.span
              className="mr-1.5 select-none text-sm text-gray-500"
              exit={EXIT_ANIMATION}
            >
              {index + 1}
            </motion.span>

            <ReorderGroup
              className="flex flex-wrap items-center gap-x-1.5"
              onReorder={(newOrder) => setItems(newOrder, index)}
              values={items}
            >
              {items.map((item, i) => (
                <React.Fragment key={item}>
                  <ReorderItem layout drag value={item}>
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
                    exit={EXIT_ANIMATION}
                  />
                </React.Fragment>
              ))}
            </ReorderGroup>
          </div>
        ))}
        {showClearAll && (
          <motion.button
            className="mt-4 inline-flex text-sm font-semibold text-primary-500 focus-visible:outline-none"
            exit={EXIT_ANIMATION}
            onClick={clearAll}
          >
            Clear all
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TwoWays = () => {
  const [state, setState] = React.useState([
    "🍅 Tomato",
    "🥒 Cucumber",
    "🧀 Cheese",
    "🥬 Lettuce",
  ]);
  const itemsArr = chunk(state);
  const showClearAll = isNotEmpty(itemsArr);

  const setItemsArr = (newOrder: string[][]) => {
    setState(newOrder.flat(1));
  };

  const setItems = (newOrder: string[], index: number) => {
    const newItemsArr = itemsArr.map((chunk, i) =>
      i === index ? newOrder : chunk
    );
    setState(newItemsArr.flat(1));
  };

  const removeItem = (index: number, removalIndex: number) => {
    const items = itemsArr[index];
    const filteredItems = items.filter((item, i) => i !== removalIndex);

    if (isEmpty(filteredItems)) {
      const filteredItemsArr = itemsArr.filter((chunk, i) => i !== index);
      setState(filteredItemsArr.flat(1));
    } else {
      const newChunkMetrics = itemsArr.map((chunk, i) =>
        i === index ? filteredItems : chunk
      );
      setState(newChunkMetrics.flat(1));
    }
  };

  const clearAll = () => setState([]);

  return (
    <ReorderGroup
      values={itemsArr}
      onReorder={setItemsArr}
      className="space-y-3"
    >
      <AnimatePresence>
        {itemsArr.map((items, index) => (
          <ReorderItem className="flex items-center" value={items} key={index}>
            <motion.span
              className="flex-none select-none"
              exit={EXIT_ANIMATION}
            >
              <GridVertical2 className="text-gray-500" />
            </motion.span>

            <motion.span
              className="mr-1.5 select-none text-sm text-gray-500"
              exit={EXIT_ANIMATION}
            >
              {index + 1}
            </motion.span>

            <ReorderGroup
              className="flex flex-grow flex-wrap items-center gap-x-1.5 gap-y-3"
              onReorder={(newOrder) => setItems(newOrder, index)}
              values={items}
            >
              {items.map((item, i) => (
                <React.Fragment key={item}>
                  <ReorderItem layout drag value={item}>
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
                    exit={EXIT_ANIMATION}
                  />
                </React.Fragment>
              ))}
            </ReorderGroup>
          </ReorderItem>
        ))}
        {showClearAll && (
          <motion.button
            className="mt-4 inline-flex text-sm font-semibold text-primary-500 focus-visible:outline-none"
            exit={EXIT_ANIMATION}
            onClick={clearAll}
          >
            Clear all
          </motion.button>
        )}
      </AnimatePresence>
    </ReorderGroup>
  );
};
