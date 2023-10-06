import * as React from "react";
import { Meta } from "@storybook/react";

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

const meta: Meta = {
  title: "Reorder",
};

export default meta;

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
