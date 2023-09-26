import * as React from "react";
import { Meta } from "@storybook/react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
  ReorderGroup,
  ReorderItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import {
  Copy,
  EyeOff,
  GridVertical2,
  GridVertical3,
  GripVertical,
  HelpCircle,
  MoreHorizontal,
  Search,
  Trash,
  X,
} from "@/components/icons";
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

  const setItems = (newItems: string[], itemsIndex: number) => {
    const newItemsArr = itemsArr.map((items, index) =>
      index === itemsIndex ? newItems : items
    );
    setState(newItemsArr.flat(1));
  };

  const removeItem = (itemsIndex: number, itemIndex: number) => {
    const items = itemsArr[itemsIndex];
    const filteredItems = items.filter((item, i) => i !== itemIndex);

    if (isEmpty(filteredItems)) {
      const filteredItemsArr = itemsArr.filter((items, i) => i !== itemsIndex);
      setState(filteredItemsArr.flat(1));
    } else {
      const newItemsArr = itemsArr.map((items, i) =>
        i === itemsIndex ? filteredItems : items
      );
      setState(newItemsArr.flat(1));
    }
  };

  const clearAll = () => setState([]);

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {itemsArr.map((items, itemsIndex) => (
          <div className="flex items-center" key={itemsIndex}>
            <motion.span
              className="mr-1.5 select-none text-sm text-gray-500"
              exit={EXIT_ANIMATION}
            >
              {itemsIndex + 1}
            </motion.span>

            <ReorderGroup
              className="flex flex-wrap items-center gap-x-1.5"
              onReorder={(newOrder) => setItems(newOrder, itemsIndex)}
              values={items}
            >
              {items.map((item, itemIndex) => (
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
                          onClick={() => removeItem(itemsIndex, itemIndex)}
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

export const ReorderOnBothAxes = () => {
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

  const setItems = (newItems: string[], itemsIndex: number) => {
    const newItemsArr = itemsArr.map((items, i) =>
      i === itemsIndex ? newItems : items
    );
    setState(newItemsArr.flat(1));
  };

  const removeItem = (itemsIndex: number, itemIndex: number) => {
    const items = itemsArr[itemsIndex];
    const filteredItems = items.filter((item, i) => i !== itemIndex);

    if (isEmpty(filteredItems)) {
      const filteredItemsArr = itemsArr.filter(
        (items, index) => index !== itemsIndex
      );
      setState(filteredItemsArr.flat(1));
    } else {
      const newChunkMetrics = itemsArr.map((items, index) =>
        index === itemsIndex ? filteredItems : items
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
        {itemsArr.map((items, itemsIndex) => (
          <ReorderItem
            className="flex items-center"
            value={items}
            key={itemsIndex}
          >
            {({ dragControls }) => (
              <>
                <motion.span
                  className="flex-none cursor-pointer select-none"
                  exit={EXIT_ANIMATION}
                  onPointerDown={(event) => dragControls.start(event)}
                >
                  <GridVertical2 className="text-gray-500" />
                </motion.span>

                <motion.span
                  className="mr-1.5 select-none text-sm text-gray-500"
                  exit={EXIT_ANIMATION}
                >
                  {itemsIndex + 1}
                </motion.span>

                <ReorderGroup
                  className="flex flex-grow flex-wrap items-center gap-x-1.5 gap-y-3"
                  onReorder={(newItems) => setItems(newItems, itemsIndex)}
                  values={items}
                >
                  {items.map((item, itemIndex) => (
                    <React.Fragment key={item}>
                      <ReorderItem layout drag value={item}>
                        {({ dragControls }) => (
                          <Badge className="select-none" visual="primary">
                            <GripVertical
                              className="cursor-pointer opacity-60"
                              onPointerDown={(event) =>
                                dragControls.start(event)
                              }
                            />
                            {item}
                            <X
                              className="cursor-pointer opacity-60 transition-opacity duration-300 ease-out hover:opacity-100"
                              onClick={() => removeItem(itemsIndex, itemIndex)}
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
              </>
            )}
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

export const ReorderCards = () => {
  const [values, setValues] = React.useState([
    "Search 1",
    "Search 2",
    "Search 3",
  ]);
  return (
    <ReorderGroup
      className="space-y-6"
      values={values}
      onReorder={setValues}
      axis="y"
    >
      {values.map((value) => (
        <ReorderItem value={value} key={value}>
          {({ dragControls }) => (
            <article className="flex h-[116px] items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] transition duration-300 hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3">
              <button
                className="flex-none select-none text-gray-400 focus-visible:outline-none"
                onPointerDown={(event) => dragControls.start(event)}
              >
                <GridVertical3 />
              </button>

              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <Label
                    className="flex items-start gap-x-1 text-gray-700"
                    size="sm"
                  >
                    Search <span className="text-gray-400">(optional)</span>
                  </Label>

                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
                      <MoreHorizontal className="h-5 w-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[182px]">
                      <DropdownMenuItem>
                        <Copy /> Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem visual="destructive">
                        <Trash /> Delete Field
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <InputGroup className="mt-3">
                  <Input placeholder="Type to search" />
                  <InputLeftElement>
                    <Search className="h-5 w-5 text-gray-500" />
                  </InputLeftElement>
                </InputGroup>
              </div>
            </article>
          )}
        </ReorderItem>
      ))}
    </ReorderGroup>
  );
};

export const ReorderHelpCircleCards = () => {
  const [values, setValues] = React.useState([
    "Search 1",
    "Search 2",
    "Search 3",
  ]);
  return (
    <ReorderGroup
      className="space-y-6"
      values={values}
      onReorder={setValues}
      axis="y"
    >
      {values.map((value) => (
        <ReorderItem value={value} key={value}>
          {({ dragControls }) => (
            <article className="flex h-[142px] items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] transition duration-300 hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3">
              <button
                className="flex-none select-none text-gray-400 focus-visible:outline-none"
                onPointerDown={(event) => dragControls.start(event)}
              >
                <GridVertical3 />
              </button>

              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <Label
                    className="flex items-center gap-x-2 text-gray-700"
                    htmlFor="search"
                    size="sm"
                  >
                    Search <HelpCircle className="h-4 w-4 text-gray-400" />
                  </Label>

                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
                      <MoreHorizontal className="h-5 w-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[182px]">
                      <DropdownMenuItem>
                        <Copy /> Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem visual="destructive">
                        <Trash /> Delete Field
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <HelperText className="mt-1.5" size="sm">
                  Hint text lorem ipsum dolor sit amet, consectetur.
                </HelperText>
                <InputGroup className="mt-3">
                  <Input id="search" placeholder="Type to search" />
                  <InputLeftElement>
                    <Search className="h-5 w-5 text-gray-500" />
                  </InputLeftElement>
                </InputGroup>
              </div>
            </article>
          )}
        </ReorderItem>
      ))}
    </ReorderGroup>
  );
};

export const ReorderHiddenCards = () => {
  const [values, setValues] = React.useState([
    "Search 1",
    "Search 2",
    "Search 3",
  ]);
  return (
    <ReorderGroup
      className="space-y-6"
      values={values}
      onReorder={setValues}
      axis="y"
    >
      {values.map((value) => (
        <ReorderItem value={value} key={value}>
          {({ dragControls }) => (
            <article className="flex h-[116px] items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] transition duration-300 hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3">
              <button
                className="flex-none select-none text-gray-400 focus-visible:outline-none"
                onPointerDown={(event) => dragControls.start(event)}
              >
                <GridVertical3 />
              </button>

              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <Label
                    className="flex items-start gap-x-1 text-gray-700"
                    size="sm"
                  >
                    Search <span className="text-gray-400">(optional)</span>
                  </Label>

                  <div className="flex items-center gap-x-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="focus-visible:outline-none">
                          <Badge
                            className="h-5 gap-x-1 py-px pl-1.5 pr-2 transition duration-300 hover:bg-gray-200"
                            asChild
                          >
                            <span>
                              <EyeOff className="h-4 w-4 text-gray-500" />{" "}
                              Hidden
                            </span>
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          3 conditions are applied
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
                        <MoreHorizontal className="h-5 w-5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[182px]">
                        <DropdownMenuItem>
                          <Copy /> Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem visual="destructive">
                          <Trash /> Delete Field
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <InputGroup className="mt-3">
                  <Input placeholder="Type to search" />
                  <InputLeftElement>
                    <Search className="h-5 w-5 text-gray-500" />
                  </InputLeftElement>
                </InputGroup>
              </div>
            </article>
          )}
        </ReorderItem>
      ))}
    </ReorderGroup>
  );
};

export const ReorderHelpCircleHiddenCards = () => {
  const [values, setValues] = React.useState([
    "Search 1",
    "Search 2",
    "Search 3",
  ]);
  return (
    <ReorderGroup
      className="space-y-6"
      values={values}
      onReorder={setValues}
      axis="y"
    >
      {values.map((value) => (
        <ReorderItem value={value} key={value}>
          {({ dragControls }) => (
            <article className="flex h-[142px] items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] transition duration-300 hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3">
              <button
                className="flex-none select-none text-gray-400 focus-visible:outline-none"
                onPointerDown={(event) => dragControls.start(event)}
              >
                <GridVertical3 />
              </button>

              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <Label
                    className="flex items-center gap-x-2 text-gray-700"
                    htmlFor="search"
                    size="sm"
                  >
                    Search <HelpCircle className="h-4 w-4 text-gray-400" />
                  </Label>

                  <div className="flex items-center gap-x-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="focus-visible:outline-none">
                          <Badge
                            className="h-5 gap-x-1 py-px pl-1.5 pr-2 transition duration-300 hover:bg-gray-200"
                            asChild
                          >
                            <span>
                              <EyeOff className="h-4 w-4 text-gray-500" />{" "}
                              Hidden
                            </span>
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          3 conditions are applied
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
                        <MoreHorizontal className="h-5 w-5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[182px]">
                        <DropdownMenuItem>
                          <Copy /> Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem visual="destructive">
                          <Trash /> Delete Field
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <HelperText className="mt-1.5" size="sm">
                  Hint text lorem ipsum dolor sit amet, consectetur.
                </HelperText>
                <InputGroup className="mt-3">
                  <Input id="search" placeholder="Type to search" />
                  <InputLeftElement>
                    <Search className="h-5 w-5 text-gray-500" />
                  </InputLeftElement>
                </InputGroup>
              </div>
            </article>
          )}
        </ReorderItem>
      ))}
    </ReorderGroup>
  );
};
