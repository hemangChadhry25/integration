"use client";

import * as React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChevronUpDown, HelpCircle } from "@/components/icons";
import {
  HelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
  RadioGroup,
  RadioGroupItemSelector,
  Switch,
  inputVariants,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { SettingsMachineContext } from "@/machines";
import { cn, isUndefined } from "@/lib/utils";

const schema = z.object({
  fieldType: z.string().max(30),
  fieldLabel: z.string().max(30),
  singleOrMultiSelect: z.enum(["single", "multiple"]),
  limitSelections: z.boolean().optional(),
  optionalField: z.boolean(),
  placeholderOrDefaultValue: z.enum(["placeholder", "defaultValue"]),
  placeholder: z.string().max(30),
  hint: z.string().max(30),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  fieldType: "",
  singleOrMultiSelect: "single",
  optionalField: false,
  placeholder: "",
  hint: "",
  fieldLabel: "",
  placeholderOrDefaultValue: "placeholder",
};

export default function SetupTab() {
  const [, send] = SettingsMachineContext.useActor();
  const { currentId, currentAdvanced } = SettingsMachineContext.useSelector(
    (state) => ({
      currentId: state.context.currentId,
      currentAdvanced: state.context.currentAdvanced,
    })
  );
  const settings = SettingsMachineContext.useSelector((state) =>
    currentAdvanced ? state.context.advancedSettings : state.context.settings
  );

  const setting = settings.find((setting) => setting.id === currentId);
  const values = setting
    ? setting.for === "dropdown"
      ? setting.settings
      : {}
    : {};

  const { register, handleSubmit, watch, control, getValues } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      values: values.setup || defaultValues,
    });

  const singleOrMultiSelect = watch("singleOrMultiSelect");

  useEnhancedWatch({
    control,
    onChange: () => {
      const shouldNotUpdate =
        isUndefined(currentAdvanced) || isUndefined(currentId);

      if (shouldNotUpdate) return;

      send({
        type: "UPDATE",
        advanced: currentAdvanced,
        value: {
          for: "dropdown",
          id: currentId,
          settings: {
            setup: getValues(),
          },
        },
      });
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1.5 p-5">
        <Label className="text-gray-700" htmlFor="field-type" size="sm">
          Field Type
        </Label>
        <HelperText size="sm">
          Change your field to any of the similar fields
        </HelperText>

        <InputGroup>
          <InputLeftElement className="left-3 w-auto">
            <ChevronUpDown className="h-[18px] w-[18px] text-gray-500" />
          </InputLeftElement>
          <select
            className={cn(
              inputVariants({ className: "pl-[38px] text-gray-900" })
            )}
            id="field-type"
            {...register("fieldType")}
          >
            <option value="dropdown">Dropdown</option>
          </select>
        </InputGroup>
      </div>

      <div className="space-y-5 border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="field-label" size="sm">
            Field label
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">Enter a user friendly name.</HelperText>
            <HelperText className="leading-5">0/30</HelperText>
          </div>
          <Input
            className="text-gray-black"
            id="field-label"
            {...register("fieldLabel")}
          />
        </div>

        <Controller
          control={control}
          name="singleOrMultiSelect"
          render={({ field: { value, onChange, onBlur, disabled } }) => (
            <RadioGroup
              className="mt-5 grid grid-cols-2 gap-2"
              value={value}
              onValueChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
            >
              <RadioGroupItemSelector className="gap-x-4" value="single">
                <Label asChild>
                  <span>Single Select</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="multiple">
                <Label asChild>
                  <span>Multiple Select</span>
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        {singleOrMultiSelect === "multiple" && (
          <div className="flex justify-between">
            <Label
              className="flex items-center gap-x-2"
              htmlFor="limit-selections"
            >
              Limit Selections
              <HelpCircle className="text-gray-400" />
            </Label>
            <Controller
              control={control}
              name="limitSelections"
              render={({ field: { value, onChange, onBlur } }) => (
                <Switch
                  id="limit-selections"
                  checked={value}
                  onCheckedChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
        )}

        <div className="flex justify-between">
          <Label className="flex items-center gap-x-2" htmlFor="optional-field">
            Optional Field
            <HelpCircle className="text-gray-400" />
          </Label>

          <Controller
            control={control}
            name="optionalField"
            render={({ field: { value, onChange, onBlur } }) => (
              <Switch
                id="optional-field"
                checked={value}
                onCheckedChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </div>
      </div>

      <div className="border-t border-gray-200 p-5">
        <Controller
          control={control}
          name="placeholderOrDefaultValue"
          render={({ field: { value, onBlur, onChange, disabled } }) => (
            <RadioGroup
              className="grid grid-cols-2 gap-2"
              value={value}
              onValueChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
            >
              <RadioGroupItemSelector className="gap-x-4" value="placeholder">
                <Label asChild>
                  <span>Placeholder</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="defaultValue">
                <Label asChild>
                  <span>Default Value</span>
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        <div className="mt-4 space-y-1.5">
          <Label size="sm">Placeholder Text</Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">Add a clear placeholder text.</HelperText>
            <HelperText className="leading-5">0/30</HelperText>
          </div>
          <Input {...register("placeholder")} />
        </div>
      </div>

      <div className="space-y-1.5 border-t border-gray-200 p-5">
        <Label size="sm">
          Hint text <span className="text-gray-400">(optional)</span>
        </Label>
        <div className="flex items-center justify-between">
          <HelperText size="sm">Add a short prompt about the field.</HelperText>
          <HelperText className="leading-5">0/30</HelperText>
        </div>
        <Input {...register("hint")} id="hint-text" />
      </div>
    </form>
  );
}
