import * as React from "react";

import { SearchSettings, SettingsMachineContext } from "@/machines";
import {
  Copy,
  GridVertical3,
  HelpCircle,
  MoreHorizontal,
  Search,
  Trash,
} from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { getId } from "@/lib/utils";

interface SearchFieldDraggableCardProps extends SearchSettings {
  advanced: boolean;
  onDrag?: (e: React.PointerEvent<HTMLButtonElement>) => void;
}

export const SearchFieldDraggableCard = ({
  advanced,
  id,
  settings,
  onDrag,
}: SearchFieldDraggableCardProps) => {
  const { setup } = settings;
  const { label, tooltip, placeholder, hint } = setup || {};

  const [, send] = SettingsMachineContext.useActor();

  const options = {
    advanced,
    settingId: id,
  };

  const handleClick = () => {
    send({ ...options, type: "EDIT-SEARCH" });
  };

  const handleDuplicate = () => {
    send({
      ...options,
      type: "DUPLICATE",
      targetSettingId: id,
      settingId: getId(),
    });
  };

  const handleDelete = () => {
    send({ ...options, type: "DELETE" });
  };

  return (
    <article
      className="flex cursor-pointer items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] transition duration-300 hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3"
      onClick={handleClick}
    >
      <button
        className="flex-none select-none text-gray-400 focus-visible:outline-none"
        onPointerDown={onDrag}
      >
        <GridVertical3 />
      </button>

      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <Label
              className="flex items-center gap-x-1 text-gray-700"
              size="sm"
            >
              {label ? label : "Search"}

              {tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>{tooltip}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </Label>

            {hint && (
              <HelperText className="mt-1.5" size="sm">
                {hint}
              </HelperText>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
              <MoreHorizontal className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[182px]">
              <DropdownMenuItem onSelect={handleDuplicate}>
                <Copy /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem visual="destructive" onSelect={handleDelete}>
                <Trash /> Delete Field
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <InputGroup className="mt-3">
          <InputLeftElement>
            <Search className="h-5 w-5 text-gray-500" />
          </InputLeftElement>
          <Input placeholder={placeholder ? placeholder : "Type to search"} />
        </InputGroup>
      </div>
    </article>
  );
};
