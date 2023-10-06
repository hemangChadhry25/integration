"use client";

import * as React from "react";

import {
  Copy,
  GridVertical3,
  HelpCircle,
  MoreHorizontal,
  Trash,
} from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HelperText,
  Label,
  inputVariants,
} from "./ui";
import { DropdownSettings, SettingsMachineContext } from "@/machines";
import { getId } from "@/lib/utils";

interface DropdownDraggableCardProps extends DropdownSettings {
  onDrag?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  advanced: boolean;
}

export const DropdownDraggableCard = ({
  onDrag,
  settings,
  advanced,
  id: settingId,
}: DropdownDraggableCardProps) => {
  const { setup } = settings;
  const { fieldLabel, hint, optionalField } = setup || {};

  const id = React.useId();
  const [, send] = SettingsMachineContext.useActor();

  const options = {
    advanced,
    settingId,
  };

  const handleClick = () => {
    send({
      ...options,
      type: "EDIT-DROPDOWN",
    });
  };

  const handleDelete = () => {
    send({
      ...options,
      type: "DELETE",
    });
  };

  const handleDuplicate = () => {
    send({
      ...options,
      targetSettingId: settingId,
      settingId: getId(),
      type: "DUPLICATE",
    });
  };

  return (
    <article
      className="flex cursor-pointer items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] hover:border-2 hover:p-5 hover:pl-3 active:border-2 active:border-primary-500 active:p-5 active:pl-3"
      onClick={handleClick}
    >
      <button
        className="flex-none focus-visible:outline-none"
        onPointerDown={onDrag}
      >
        <GridVertical3 className="text-gray-400" />
      </button>
      <div className="flex-grow">
        <div className="flex justify-between">
          <div className="flex flex-grow items-center gap-x-2">
            <Label className="text-gray-700" size="sm" htmlFor={id}>
              {fieldLabel ? fieldLabel : "Dropdown"}
            </Label>

            {optionalField && <HelpCircle className="text-gray-400" />}
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

        {hint && (
          <HelperText className="mt-1.5" size="sm">
            {hint}
          </HelperText>
        )}

        <div className="pointer-events-none mt-3">
          <select className={inputVariants()} id={id}>
            <option value="">Select a tag</option>
          </select>
        </div>
      </div>
    </article>
  );
};
