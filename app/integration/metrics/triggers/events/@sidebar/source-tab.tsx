"use client";

import * as React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowDownAZ,
  ChevronDown,
  GripVertical,
  Search,
  X,
} from "@/components/icons";
import {
  Autocomplete,
  AutocompleteButton,
  AutocompleteInput,
  AutocompleteOption,
  AutocompleteOptions,
  AutocompleteRoot,
  AutocompleteTrigger,
  Badge,
  HelperText,
  Label,
  ReorderGroup,
  ReorderItem,
  ScaleOutIn,
  inputVariants,
} from "@/components/ui";
import { chunk, cn, isEmpty, isNotEmpty } from "@/lib/utils";
import { EXIT_ANIMATION, METRICS_OPTIONS } from "@/lib/constants";

const schema = z.object({
  dataSet: z.string(),
  category: z.string(),
  metrics: z.array(
    z.enum([
      "Name",
      "Resource Type",
      "Description",
      "Tag Type",
      "ID",
      "Tag Category",
      "Creation Date",
      "Country",
    ])
  ),
  sortBy: z.enum(["asc", "desc"]),
});

interface FormValues {
  dataSet: string;
  category: string;
  metrics: string[];
  sortBy: string;
}

const SourceTab = () => {
  const { handleSubmit, register, control, watch, setValue } =
    useForm<FormValues>({
      shouldUnregister: true,
      resolver: zodResolver(schema),
      defaultValues: {
        sortBy: "asc",
        metrics: [],
      },
    });

  const dataSet = watch("dataSet");
  const category = watch("category");
  const metrics = watch("metrics");
  const isMetricsNotEmpty = metrics ? isNotEmpty(metrics) : false;
  const itemsArr = metrics ? chunk(metrics) : undefined;

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  const clearAll = () => setValue("metrics", []);

  const setItems = (newItems: string[], itemsIndex: number) => {
    if (!itemsArr) return;

    const newItemsArr = itemsArr.map((items, i) =>
      i === itemsIndex ? newItems : items
    );
    setValue("metrics", newItemsArr.flat(1));
  };

  const removeItem = (itemsIndex: number, itemIndex: number) => {
    if (!itemsArr) return;

    const items = itemsArr[itemsIndex];
    const filteredItems = items.filter((item, index) => index !== itemIndex);

    if (isEmpty(filteredItems)) {
      const filteredItemsArr = itemsArr.filter(
        (items, index) => index !== itemsIndex
      );
      setValue("metrics", filteredItemsArr.flat(1));
    } else {
      const newItemsArr = itemsArr.map((items, index) =>
        index === itemsIndex ? filteredItems : items
      );
      setValue("metrics", newItemsArr.flat(1));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-8">
      <div className="space-y-5 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="data-set" size="sm">
            Data Set
          </Label>
          <HelperText size="sm">
            Where do you want your data to come from?
          </HelperText>
          <select
            className={inputVariants()}
            id="data-set"
            {...register("dataSet")}
          >
            <option value="">Select Data Set</option>
            <option value="Data Set 1">Data Set 1</option>
          </select>
        </div>

        {dataSet && (
          <div className="space-y-1.5">
            <Label className="text-gray-700" htmlFor="category" size="sm">
              Category
            </Label>
            <HelperText size="sm">
              Select the category of data you want to see in the search field.
            </HelperText>
            <select
              className={inputVariants()}
              id="category"
              {...register("category")}
            >
              <option value="">Select Category</option>
              <option value="tags">Tags</option>
            </select>
          </div>
        )}

        {category && (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-gray-700" htmlFor="metrics" size="sm">
                  Metrics
                </Label>
                <HelperText className="leading-5" size="sm">
                  0/10
                </HelperText>
              </div>
              <HelperText size="sm">
                Where do you want search result to come from?
              </HelperText>

              <Controller
                control={control}
                name="metrics"
                render={({ field: { value, onChange, name } }) => (
                  <Combobox
                    value={value}
                    onChange={onChange}
                    name={name}
                    options={METRICS_OPTIONS}
                  />
                )}
              />
            </div>

            <div className="flex w-full flex-col space-y-[5px]">
              <AnimatePresence>
                {itemsArr?.map((items, itemsIndex) => (
                  <ReorderGroup
                    className="flex w-full max-w-[320px] flex-grow flex-wrap items-center gap-x-1.5 gap-y-3"
                    key={itemsIndex}
                    onReorder={(newItems) => setItems(newItems, itemsIndex)}
                    values={items}
                  >
                    <motion.span
                      className="text-sm text-gray-500"
                      exit={EXIT_ANIMATION}
                    >
                      {itemsIndex + 1}
                    </motion.span>

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
                                onClick={() =>
                                  removeItem(itemsIndex, itemIndex)
                                }
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
                ))}
                {isMetricsNotEmpty && (
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
          </div>
        )}
      </div>

      {isMetricsNotEmpty && (
        <div className="space-y-1.5 border-y border-gray-200 p-5">
          <Label className="text-gray-700" htmlFor="sort-by" size="sm">
            Sort by <span className="text-gray-400">(optional)</span>
          </Label>
          <HelperText size="sm">
            How do you want to sort your list of items?
          </HelperText>
          <div className="relative">
            <div className="absolute inset-y-0 left-3.5 inline-flex items-center justify-center">
              <ArrowDownAZ className="flex-none text-gray-700" />
            </div>
            <select
              className={cn(inputVariants({ className: "pl-[46px]" }))}
              id="sort-by"
              {...register("sortBy")}
            >
              <option value="asc">Default - A to Z</option>
              <option value="desc">Descending - Z to A</option>
            </select>
          </div>
        </div>
      )}
    </form>
  );
};

const Combobox = ({
  onChange,
  value,
  name,
  options,
}: {
  onChange: (...args: any[]) => any;
  value: string[];
  name: string;
  options: string[];
}) => {
  const [query, setQuery] = React.useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  const resetQuery = () => setQuery("");

  const onAutocompleteInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setQuery(event.target.value);

  const props = { multiple: true } as unknown as { multiple?: false };

  return (
    <AutocompleteRoot value={value} onChange={onChange} name={name} {...props}>
      {({ open }) => (
        <Autocomplete className="w-full">
          <AutocompleteTrigger>
            <AutocompleteInput
              // @ts-expect-error
              placeholder={open ? "Find metrics" : "Select Metrics"}
              onChange={onAutocompleteInputChange}
            />
            <AutocompleteButton>
              {({ open }) =>
                open ? <Search /> : <ChevronDown className="h-5 w-5" />
              }
            </AutocompleteButton>
          </AutocompleteTrigger>
          <ScaleOutIn afterLeave={resetQuery}>
            <AutocompleteOptions>
              {filteredOptions.map((option) => (
                <AutocompleteOption key={option} value={option}>
                  {option}
                </AutocompleteOption>
              ))}
            </AutocompleteOptions>
          </ScaleOutIn>
        </Autocomplete>
      )}
    </AutocompleteRoot>
  );
};

export default SourceTab;
