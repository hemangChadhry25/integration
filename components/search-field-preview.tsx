import * as React from "react";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTrigger,
  HelperText,
  Label,
  ScaleOutIn,
  ScrollArea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { HelpCircle, Search } from "./icons";
import { SearchSettings } from "@/machines";

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

interface SearchFieldPreview extends SearchSettings {}

export const SearchFieldPreview = ({ settings }: SearchSettings) => {
  const { setup, source } = settings;
  const { label, hint, placeholder, tooltip } = setup || {};
  const { metrics = [] } = source || {};

  const [selected, setSelected] = React.useState<Option>();
  const [query, setQuery] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const resetQuery = () => setQuery("");

  const filetedOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.serviceName.toLowerCase().includes(query.toLowerCase())
        );

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
      <Label className="flex items-center gap-x-2 text-gray-700" size="sm">
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
        <HelperText className="mt-1.5 text-gray-500" size="sm">
          {hint}
        </HelperText>
      )}

      <Combobox className="mt-3 w-full" value={selected} onChange={setSelected}>
        <ComboboxTrigger>
          <ComboboxInput
            size="lg"
            as={React.Fragment}
            displayValue={(option: Option) => option.serviceName}
            onChange={handleChange}
          >
            <input placeholder={placeholder ? placeholder : "Type to search"} />
          </ComboboxInput>
          <ComboboxButton className="peer-focus:text-gray-400" size="lg">
            <Search className="h-5 w-5" />
          </ComboboxButton>
        </ComboboxTrigger>
        <ScaleOutIn afterLeave={resetQuery}>
          <ComboboxOptions className="z-10">
            <ScrollArea className="h-[304px]">
              {filetedOptions.map((option) => (
                <ComboboxOption
                  className="space-y-1.5"
                  key={option.id}
                  value={option}
                >
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
                      <span className="text-sm text-gray-500">{option.id}</span>
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
                </ComboboxOption>
              ))}
            </ScrollArea>
          </ComboboxOptions>
        </ScaleOutIn>
      </Combobox>
    </div>
  );
};
