"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button, HelperText, Input, Label, Textarea } from "@/components/ui";
import { RemainCharacters } from "@/components/remain-characters";

interface FormValues {
  name: string;
  longDescription: string;
  shortDescription: string;
  hintText: string;
}

export default function GeneralTab() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(
      z.object({
        name: z.string().max(30),
        longDescription: z.string().max(130),
        shortDescription: z.string().max(40),
        hintText: z.string().max(50),
      })
    ),
  });
  const { push } = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (variables) => {
    push("/integration/metrics/triggers/events");
  };

  return (
    <form
      className="space-y-6 rounded-lg border border-gray-200 bg-white p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="name" size="sm">
          Name
        </Label>
        <div className="flex justify-between">
          <HelperText size="sm">
            Enter a user friendly name for this trigger that describes what
            makes it run.
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters control={control} name="name" max={30} />
          </HelperText>
        </div>
        <Input
          className="text-sm"
          id="name"
          placeholder="e.g. New Order Trigger"
          {...register("name")}
        />
      </div>

      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="long-description" size="sm">
          Long Description
        </Label>
        <div className="flex justify-between">
          <HelperText size="sm">
            Describe clearly the purpose of this trigger in a complete sentence
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters
              control={control}
              name="longDescription"
              max={130}
            />
          </HelperText>
        </div>
        <Textarea
          className="h-[102px] text-sm"
          id="long-description"
          placeholder="e.g. Triggers when a new order is created."
          {...register("longDescription")}
        />
      </div>

      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="short-description" size="sm">
          Short Description
        </Label>
        <div className="flex justify-between">
          <HelperText size="sm">
            Describe clearly the purpose of this trigger in a complete sentence
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters
              control={control}
              name="shortDescription"
              max={40}
            />
          </HelperText>
        </div>
        <Input
          className="text-sm"
          id="short-description"
          placeholder="e.g. Triggers when a new order is created."
          {...register("shortDescription")}
        />
      </div>

      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="hint-text" size="sm">
          Hint Text <span className="text-gray-400">(optional)</span>
        </Label>
        <div className="flex justify-between">
          <HelperText size="sm">
            Provide additional hint text to help guide users through the use of
            this trigger event.
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters control={control} name="hintText" max={50} />
          </HelperText>
        </div>
        <Input
          className="text-sm"
          id="hint-text"
          placeholder="This hint text will be displayed to users when they are setting up the trigger in the workflow builder."
          {...register("hintText")}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={!isValid}>
          Save & Continue
        </Button>
      </div>
    </form>
  );
}
