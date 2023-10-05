import * as React from "react";

import { DropdownSettings } from "@/machines";
import { Check2, ChevronDown, HelpCircle, Search, X } from "./icons";
import {
  DropdownCommand,
  DropdownCommandEmpty,
  DropdownCommandGroup,
  DropdownCommandInput,
  DropdownCommandItem,
  DropdownPopover,
  DropdownPopoverContent,
  DropdownPopoverTrigger,
  HelperText,
  InputGroup,
  InputLeftElement,
  Label,
} from "./ui";

interface Option {
  id: string;
  serviceName: string;
  serviceType: string;
  type: string;
  lastDateAndTime: string;
  countryCode: string;
  personal: string;
  service: string;
}

type Options = Option[];

const options: Options = [
  {
    id: "72255d4849af8ed6e0df1173",
    serviceName: "ALB WAF Service",
    serviceType: "Video streaming service",
    type: "Digital",
    service: "Software",
    lastDateAndTime: "08/05/2023 at 03:05:15 PM",
    countryCode: "UK",
    personal: "Personal",
  },
];

interface DropdownPreviewProps extends DropdownSettings {}

export const DropdownPreview = ({ settings }: DropdownPreviewProps) => {
  const { setup, source } = settings;
  const { fieldLabel, hint, optionalField } = setup || {};
  const { metrics = [] } = source || {};

  const [selected, setSelected] = React.useState<Option>();

  const hasServiceName = metrics.includes("Service Name");
  const hasPersonal = metrics.includes("Personal");
  const hasServiceType = metrics.includes("Service Type");
  const hasType = metrics.includes("Type");
  const hasId = metrics.includes("ID");
  const hasService = metrics.includes("Service");
  const hasLastDateAndTime = metrics.includes("Last Date & Time");
  const hasCountryCode = metrics.includes("Country Code");

  return (
    <div>
      <div className="space-y-1.5">
        <Label className="flex items-center gap-x-2 text-gray-700" size="sm">
          {fieldLabel ? fieldLabel : "Dropdown"}

          {optionalField && <HelpCircle className="text-gray-400" />}
        </Label>

        {hint && <HelperText size="sm">{hint}</HelperText>}

        <div className="mt-1.5">
          <DropdownPopover selected={selected} onSelectedChange={setSelected}>
            <DropdownPopoverTrigger>
              {selected ? (
                selected.serviceName
              ) : (
                <span className="text-gray-400">Select a tag</span>
              )}
              <ChevronDown className="ml-auto h-5 w-5 text-gray-500" />
            </DropdownPopoverTrigger>
            <DropdownPopoverContent>
              <DropdownCommand className="overflow-hidden">
                <InputGroup>
                  <InputLeftElement className="w-8">
                    <Search className="h-[15] w-[15] text-gray-500" />
                  </InputLeftElement>
                  <DropdownCommandInput
                    placeholder="Search..."
                    className="pl-8"
                  />
                </InputGroup>

                <DropdownCommandEmpty className="text-sm text-gray-900">
                  No framework found.
                </DropdownCommandEmpty>
                <DropdownCommandGroup>
                  {options.map((option) => (
                    <DropdownCommandItem key={option.id} itemValue={option}>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-x-1.5">
                          {hasServiceName && (
                            <span className="text-sm font-medium text-gray-700">
                              {option.serviceName}
                            </span>
                          )}

                          {hasPersonal && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-700" />
                              <span className="text-sm font-medium text-gray-700">
                                {option.personal}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          {hasServiceType && (
                            <span className="text-sm text-gray-500">
                              {option.serviceType}
                            </span>
                          )}

                          {hasType && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                              <span className="text-sm text-gray-500">
                                {option.type}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          {hasId && (
                            <span className="text-sm text-gray-500">
                              {option.id}
                            </span>
                          )}

                          {hasService && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                              <span className="text-sm text-gray-500">
                                {option.service}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          {hasLastDateAndTime && (
                            <span className="text-sm text-gray-500">
                              {option.lastDateAndTime}
                            </span>
                          )}

                          {hasCountryCode && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                              <span className="text-sm text-gray-500">
                                {option.countryCode}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <Check2 className="ml-auto text-primary-500 opacity-0 group-data-[state=selected]:opacity-100" />
                    </DropdownCommandItem>
                  ))}
                </DropdownCommandGroup>
              </DropdownCommand>
            </DropdownPopoverContent>
          </DropdownPopover>
        </div>
      </div>
    </div>
  );
};
