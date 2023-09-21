"use client";

import { Controller, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Button,
  Dropzone,
  DropzoneState,
  HelperText,
  Input,
  Label,
  RadioGroup,
  RadioGroupItemSelector,
  inputVariants,
} from "@/components/ui";
import { isUndefined } from "@/lib/utils";

const schema = z
  .object({
    value: z.enum(["API-URL", "DATASETS", "API-FILE"]),
    url: z.string().url().optional(),
    selected: z.string().optional(),
    file: z
      .object({
        file: z.any(),
        name: z.string(),
        size: z.string(),
        progress: z.number(),
        hasError: z.boolean(),
        type: z.enum(["img", "doc", "video", "other"]),
      })
      .optional(),
  })
  .superRefine(({ value, file, url, selected }, ctx) => {
    if (value === "API-URL" && isUndefined(url)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Must provide an API url",
        path: ["url"],
      });
    } else if (value === "DATASETS" && isUndefined(selected)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Must select one option",
        path: ["selected"],
      });
    } else if (value === "API-FILE" && isUndefined(file)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Must select a file",
        path: ["files"],
      });
    }
  });

type FormState = Omit<z.infer<typeof schema>, "file"> & {
  file: DropzoneState;
};

export default function FirstTab() {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
    watch,
  } = useForm<FormState>({
    resolver: zodResolver(schema),
  });
  const { push } = useRouter();
  const value = watch("value");

  const onSubmit: SubmitHandler<FormState> = (variables) => {
    push("/integration/metrics/connect?tab=second");
  };

  return (
    <form
      className="border border-gray-200 p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-base font-semibold text-gray-900">Connect Data</h3>
      <p className="mt-1 text-sm text-gray-500">
        In this section, you can connect the API endpoints that your integration
        will use, configure their authentications, and test them.
      </p>

      <div className="mt-6">
        <Label
          className="leading-[16.94px] text-gray-900"
          size="sm"
          htmlFor="sourceData"
        >
          Import from...
        </Label>

        <Controller
          control={control}
          name="value"
          render={({ field: { onChange, ...props } }) => (
            <RadioGroup
              className="mt-3 grid-cols-3 gap-x-2"
              onValueChange={onChange}
              {...props}
            >
              <RadioGroupItemSelector value="API-URL">
                <Label>API URL</Label>
                <HelperText>Import data from an API URL.</HelperText>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="DATASETS">
                <Label>My Datasets</Label>
                <HelperText>Import data from your datasets.</HelperText>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="API-FILE">
                <Label>API File</Label>
                <HelperText>Import data from an API file.</HelperText>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />
      </div>

      {value === "API-URL" && (
        <div className="mt-6 space-y-1.5">
          <Label className="uppercase" size="sm" htmlFor="url">
            API url
          </Label>
          <Input
            {...register("url")}
            id="url"
            placeholder="e.g. https://example.com"
          />
        </div>
      )}

      {value === "DATASETS" && (
        <div className="mt-6 space-y-1.5">
          <Label size="sm" htmlFor="selected">
            My datasets
          </Label>
          <HelperText size="sm">Select API Endpoint</HelperText>
          <select
            className={inputVariants()}
            {...register("selected")}
            id="selected"
          >
            <option value="">Choose Metric</option>
          </select>
        </div>
      )}

      {value === "API-FILE" && (
        <Controller
          control={control}
          name="file"
          render={({ field: { onChange, onBlur, value } }) => (
            <div className="mt-6 space-y-1.5">
              <Label size="sm" htmlFor="file">
                API File
              </Label>
              <Dropzone onBlur={onBlur} value={value} onChange={onChange} />
            </div>
          )}
        />
      )}

      <div className="mt-6 flex justify-end">
        <Button type="submit" disabled={!isValid}>
          Save & Continue
        </Button>
      </div>
    </form>
  );
}
