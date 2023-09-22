"use client";

import * as React from "react";

import { Plus2 } from "@/components/icons";
import { Button } from "@/components/ui";
import { useToggle } from "@/lib/hooks";
import { Transition } from "@headlessui/react";

const ConditionsTab = () => {
  const [open, { on, off }] = useToggle();

  return (
    <div className="p-5">
      <p className="text-sm font-medium text-gray-800">Only continue if:</p>

      <Button className="mt-3 h-5 p-0" onClick={on} variant="link">
        <Plus2 className="h-[15] w-[15px]" />
        Add Condition
      </Button>

      <Transition
        show={open}
        as={React.Fragment}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 -translate-y-0"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      ></Transition>
    </div>
  );
};

export default ConditionsTab;
