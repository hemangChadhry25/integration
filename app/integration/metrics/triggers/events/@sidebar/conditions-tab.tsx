"use client";

import { ChevronDown, Plus2, TwoBranch } from "@/components/icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  Button,
  DisclosureContent,
  Label,
  inputVariants,
} from "@/components/ui";
import { useToggle } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const ConditionsTab = () => {
  const [getStarted, { off }] = useToggle(true);
  const [show, { on }] = useToggle();

  if (getStarted) {
    return (
      <div className="p-6">
        <div className="rounded-xl p-6 shadow-xl">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
            <TwoBranch className="text-primary-500" />
          </div>
          <h1 className="mt-2 text-center text-lg font-semibold text-gray-900">
            Set Conditional Logic
          </h1>
          <p className="text-center text-sm text-gray-500">
            You can show or hide any element based on conditional logic.
          </p>
          <p className="mt-3 text-center text-sm text-gray-500">
            Change visibility of field(s) depending on state conditions.
          </p>
          <Button className="mt-6 w-full" onClick={off}>
            Get Started
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-5">
        <p className="text-sm text-gray-500">
          Set conditional logic to show and hide fields, based on prior inputs
          or external data.
        </p>

        {show && (
          <div className="mt-6">
            <div className="flex items-center gap-x-3">
              <select
                className={cn(
                  inputVariants({
                    className: "h-8 w-20 px-2 py-1 text-sm leading-6",
                  })
                )}
              >
                <option value="">Show</option>
                <option value="">Hide</option>
              </select>
              <Label className="leading-6 text-gray-900" size="sm">
                this field when
              </Label>
            </div>
            <div className="mt-3 flex items-center gap-x-3">
              <select
                className={cn(
                  inputVariants({
                    className: "h-8 w-20 px-2 py-1 text-sm leading-6",
                  })
                )}
              >
                <option value="">All</option>
                <option value="">Any</option>
              </select>
              <Label className="leading-6 text-gray-900" size="sm">
                of the following conditions match
              </Label>
            </div>

            <Accordion className="mt-5" type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="rounded-lg border border-gray-300 bg-gray-50 p-3"
              >
                <AccordionTrigger className="flex w-full items-center justify-between gap-x-3 text-sm font-medium text-gray-900">
                  Select Condition
                  <ChevronDown className="flex-none text-gray-500 transition-transform group-data-[state=open]/trigger:rotate-180" />
                </AccordionTrigger>
                <DisclosureContent className="pt-4">
                  <div className="space-y-1.5">
                    <Label
                      className="text-gray-700"
                      htmlFor="field-name"
                      size="sm"
                    >
                      Field Name
                    </Label>
                    <select className={inputVariants()} id="field-name">
                      <option value="">Select a field</option>
                    </select>
                  </div>

                  <div className="mt-3 space-y-1.5">
                    <Label
                      className="text-gray-700"
                      htmlFor="field-state"
                      size="sm"
                    >
                      Field State
                    </Label>
                    <select className={inputVariants()} id="field-state">
                      <option value="">Select a field state</option>
                    </select>
                  </div>
                </DisclosureContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
        <Button
          className="mt-6 w-full"
          onClick={on}
          variant="outlined"
          visual="gray"
        >
          <Plus2 className="text-gray-500" />
          Add Condition
        </Button>
      </div>
    </div>
  );
};

export default ConditionsTab;
