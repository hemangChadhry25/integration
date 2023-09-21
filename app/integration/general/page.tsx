"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AlertCircle, Check } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  Dropzone,
  DropzoneState,
  HelperText,
  Input,
  Label,
  Textarea,
} from "@/components/ui";
import { getPreview } from "@/lib/dom";
import { RemainCharacters } from "@/components/remain-characters";

const schema = z.object({
  name: z.string().max(50),
  description: z.string().max(200),
  categories: z.string().max(10),
  tags: z.string().max(10),
  logo: z.object({
    file: z.any(),
    name: z.string(),
    size: z.string(),
    progress: z.number(),
    hasError: z.boolean(),
    type: z.enum(["img", "doc", "video", "other"]),
  }),
  additionalImage: z.object({
    file: z.any(),
    name: z.string(),
    size: z.string(),
    progress: z.number(),
    hasError: z.boolean(),
    type: z.enum(["img", "doc", "video", "other"]),
  }),
});

type FormValues = {
  name: string;
  description: string;
  categories: string;
  tags: string;
  logo: DropzoneState;
  additionalImage: DropzoneState;
};

function General() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const [preview, setPreview] = React.useState<string>();
  const logo = useWatch({ control, name: "logo" });

  React.useEffect(() => {
    const cleanup = getPreview(logo?.file, setPreview);
    return cleanup;
  }, [logo]);

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <div className="px-[88px] py-8">
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">General Information</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can make changes to general information about
            your integration such as its name, description, categories, tags,
            logo, and images/screenshots. These details are required in order to
            publish your integration to our marketplace
          </AlertDescription>
          <Link
            className="mt-3 inline-block text-sm font-semibold text-gray-500 hover:underline"
            href="#"
          >
            Learn more
          </Link>
        </AlertContent>
        <CloseButton />
      </Alert>

      <form
        className="mt-6 space-y-6 rounded-lg border border-gray-200 bg-white p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="name" size="sm">
            Name
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              This name will appear in our marketplace.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="name" max={50} />
            </HelperText>
          </div>
          <Input {...register("name")} id="name" />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="desc" size="sm">
            Description
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              Provide a short description that describes what this integration
              does.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters
                control={control}
                name="description"
                max={200}
              />
            </HelperText>
          </div>
          <Textarea
            {...register("description")}
            className="h-[102px]"
            id="desc"
            placeholder="This will be the description user see in our marketplace..."
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="categories" size="sm">
            Categories
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              Provide categories that describe this integration.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="categories" max={10} />
            </HelperText>
          </div>
          <Input
            {...register("categories")}
            id="categories"
            placeholder="Add categories"
          />
        </div>

        <div className="space-y-2.5">
          <Label className="text-gray-700" size="sm">
            Logo
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              A square logo that will be used to identify your integration.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="logo" max={1} />
            </HelperText>
          </div>
          <div className="flex gap-x-2.5">
            <div className="flex h-[74px] w-[74px] flex-none items-center justify-center self-center overflow-hidden rounded-lg border border-gray-200">
              {preview ? (
                <img
                  className="h-full w-full object-cover"
                  src={preview}
                  alt="Logo preview"
                />
              ) : (
                <div className="relative h-[32px] w-[32px]">
                  <Image
                    className="object-contain"
                    src="/preview-placeholder.png"
                    alt="Placeholder"
                    sizes="50vw"
                    fill
                  />
                </div>
              )}
            </div>
            <Controller
              control={control}
              name="logo"
              render={({ field: { onChange, value, onBlur } }) => (
                <Dropzone
                  className="flex-auto"
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
        </div>

        <div className="space-y-2.5">
          <Label className="text-gray-700" size="sm">
            Additional Images/Screenshots
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              Provide at least 1 image/screenshot to preview this integration in
              our marketplace.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters
                control={control}
                name="additionalImage"
                max={10}
              />
            </HelperText>
          </div>
          <Controller
            control={control}
            name="additionalImage"
            render={({ field: { onChange, value, onBlur } }) => (
              <Dropzone onChange={onChange} value={value} onBlur={onBlur} />
            )}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button type="submit" disabled={!isValid}>
            <Check className="h-[15px] w-[15px]" />
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default General;
