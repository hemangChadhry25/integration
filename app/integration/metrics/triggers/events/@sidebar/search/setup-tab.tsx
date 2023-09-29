"use client";

import * as React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { HelpCircle } from "@/components/icons";
import {
  HelperText,
  Input,
  Label,
  RadioGroup,
  RadioGroupItemSelector,
  Switch,
} from "@/components/ui";
import { useUpdateEffect } from "@/lib/hooks";

const schema = z.object({
  label: z.string().max(30),
  singleOrMultiSelect: z.enum(["single", "multiple"]),
  optionalField: z.boolean(),
  placeholder: z.string().max(30),
  hint: z.string().max(30),
  tooltip: z.string().max(50),
  limitSelections: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function SetupTab() {
  const { register, handleSubmit, watch, control, setValue } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: {
        label: "",
        singleOrMultiSelect: "single",
        optionalField: false,
        placeholder: "",
        hint: "",
        tooltip: "",
      },
    });
  const singleOrMultiSelect = watch("singleOrMultiSelect");

  useUpdateEffect(() => {
    if (singleOrMultiSelect === "multiple") {
      setValue("limitSelections", false);
    } else {
      setValue("limitSelections", undefined);
    }
  }, [singleOrMultiSelect]);

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="field-label" size="sm">
            Field Label
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">Enter a user friendly name.</HelperText>
            <HelperText size="xs">0/30</HelperText>
          </div>
          <Input {...register("label")} id="field-label" placeholder="Search" />
        </div>

        <Controller
          control={control}
          name="singleOrMultiSelect"
          render={({ field: { onChange, ...props } }) => (
            <RadioGroup
              className="grid-cols-2 gap-x-2"
              onValueChange={onChange}
              {...props}
            >
              <RadioGroupItemSelector value="single">
                <Label className="leading-4" size="xs">
                  Single Select
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="multiple">
                <Label className="leading-4" size="xs">
                  Multiple Select
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        <div className="space-y-5">
          {singleOrMultiSelect === "multiple" && (
            <div className="flex items-start justify-between">
              <Label
                className="inline-flex items-center gap-x-2 text-gray-700"
                htmlFor="limit-selections"
                size="sm"
              >
                Limit Selections{" "}
                <span className="text-gray-400">
                  <HelpCircle />
                </span>
              </Label>
              <Controller
                control={control}
                name="limitSelections"
                render={({ field: { value, onChange, ...props } }) => (
                  <Switch
                    checked={value}
                    onCheckedChange={onChange}
                    id="limit-selections"
                    {...props}
                  />
                )}
              />
            </div>
          )}
          <div className="flex items-start justify-between">
            <Label
              className="inline-flex items-center gap-x-2 text-gray-700"
              htmlFor="optional-field"
              size="sm"
            >
              Optional Field{" "}
              <span className="text-gray-400">
                <HelpCircle />
              </span>
            </Label>
            <Controller
              control={control}
              name="optionalField"
              render={({ field: { value, onChange, ...props } }) => (
                <Switch
                  checked={value}
                  onCheckedChange={onChange}
                  id="optional-field"
                  {...props}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="space-y-5 border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="placeholder-text" size="sm">
            Placeholder Text
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">Add a clear placeholder text.</HelperText>
            <HelperText className="leading-5">0/30</HelperText>
          </div>
          <Input {...register("placeholder")} id="placeholder-text" />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="hint-text" size="sm">
            Hint Text <span className="text-gray-400">(optional)</span>
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">
              Add a short prompt about the field.
            </HelperText>
            <HelperText className="leading-5">0/30</HelperText>
          </div>
          <Input {...register("hint")} id="hint-text" />
        </div>

        <div className="space-y-1.5">
          <Label
            className="flex items-center gap-x-2 text-gray-700"
            htmlFor="tooltip"
            size="sm"
          >
            <span>
              Tooltip <span className="text-gray-400">(optional)</span>
            </span>
            <HelpCircle className="text-gray-400" />
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">
              Add additional information about the field.
            </HelperText>
            <HelperText className="leading-5">0/50</HelperText>
          </div>
          <Input {...register("tooltip")} id="tooltip" />
        </div>
      </div>
    </form>
  );
}
