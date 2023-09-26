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
import { chunk, cn, isEmptyArray, isNotEmptyArray, flatten } from "@/lib/utils";
import { EXIT_ANIMATION, METRICS_OPTIONS } from "@/lib/constants";
import { useWatched } from "@/lib/hooks";

const schema = z.object({
  dataset: z.string(),
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
  sort: z.enum(["asc", "desc"]),
});

interface FormValues {
  dataset: string;
  category: string;
  metrics: string[];
  sort: string;
}

const SourceTab = () => {
  const { handleSubmit, register, control, watch, setValue } =
    useForm<FormValues>({
      shouldUnregister: true,
      resolver: zodResolver(schema),
      defaultValues: {
        sort: "asc",
      },
    });

  const dataset = watch("dataset");
  const category = watch("category");
  const metrics = watch("metrics");

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  const clearAll = () => setValue("metrics", []);

  const isMetricsNotEmpty = metrics ? isNotEmptyArray(metrics) : false;
  const metricsArr = metrics ? chunk(metrics) : undefined;

  const setMetrics = (newMetrics: string[], metricsIndex: number) => {
    if (!metricsArr) return;

    const newMetricsArr = metricsArr.map((metrics, i) =>
      i === metricsIndex ? newMetrics : metrics
    );
    setValue("metrics", flatten(newMetricsArr));
  };

  const removeMetric = (metricsIndex: number, removalIndex: number) => {
    if (!metricsArr) return;

    const metrics = metricsArr[metricsIndex];
    const filteredMetrics = metrics.filter(
      (metrics, index) => index !== removalIndex
    );

    if (isEmptyArray(filteredMetrics)) {
      const filteredMetricsArr = metricsArr.filter(
        (metrics, index) => index !== metricsIndex
      );
      setValue("metrics", flatten(filteredMetricsArr));
    } else {
      const newMetricsArr = metricsArr.map((metrics, index) =>
        index === metricsIndex ? filteredMetrics : metrics
      );
      setValue("metrics", flatten(newMetricsArr));
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
            {...register("dataset")}
          >
            <option value="">Select Data Set</option>
            <option value="Data Set 1">Data Set 1</option>
          </select>
        </div>

        {dataset && (
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
                {metricsArr?.map((metrics, metricsIndex) => (
                  <ReorderGroup
                    className="flex w-full max-w-[320px] flex-grow flex-wrap items-center gap-x-1.5 gap-y-3"
                    key={metricsIndex}
                    onReorder={(newMetrics) =>
                      setMetrics(newMetrics, metricsIndex)
                    }
                    values={metrics}
                  >
                    <motion.span
                      className="text-sm text-gray-500"
                      exit={EXIT_ANIMATION}
                    >
                      {metricsIndex + 1}
                    </motion.span>

                    {metrics.map((metric, metricIndex) => (
                      <React.Fragment key={metric}>
                        <ReorderItem layout drag value={metric}>
                          {({ dragControls }) => (
                            <Badge className="select-none" visual="primary">
                              <GripVertical
                                className="cursor-pointer opacity-60"
                                onPointerDown={(event) =>
                                  dragControls.start(event)
                                }
                              />
                              {metric}
                              <X
                                className="cursor-pointer opacity-60 transition-opacity duration-300 ease-out hover:opacity-100"
                                onClick={() =>
                                  removeMetric(metricsIndex, metricIndex)
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
              {...register("sort")}
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
