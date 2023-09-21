"use client";

import Link from "next/link";
import { useAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AlertCircle, ArrowLeft2, Check } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  HelperText,
  Input,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  inputVariants,
} from "@/components/ui";
import { goToPreviousAtom } from "@/lib/atom";
import { RemainCharacters } from "@/components/remain-characters";

interface FormValues {
  name: string;
  shortDescription: string;
  eventCategory: string;
  eventSource: string;
  specificEvent: string;
}

export default function Events() {
  const [, goToPrevious] = useAtom(goToPreviousAtom);
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(
      z.object({
        name: z.string().max(40),
        shortDescription: z.string().max(100),
        eventCategory: z.string(),
        eventSource: z.string(),
        specificEvent: z.string(),
      })
    ),
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <>
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">What is the Event?</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can create specific events that will trigger
            workflows through your integration. Connect the API endpoint that
            you will use for each trigger, set them up, and configure/design the
            settings users will fill out.
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

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="inline-flex flex-none items-center gap-x-3 text-base font-semibold text-gray-600 focus-visible:outline-none"
                  type="button"
                  onClick={goToPrevious}
                >
                  <ArrowLeft2 className="flex-none" /> New Event
                </button>
              </TooltipTrigger>
              <TooltipContent align="start" side="bottom">
                Back
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button type="submit" disabled={!isValid}>
            <Check /> Save
          </Button>
        </div>

        <div className="mt-6 space-y-6 rounded-lg border border-gray-200 bg-white p-6">
          <div className="space-y-1.5">
            <Label className="text-gray-700" htmlFor="name" size="sm">
              Name
            </Label>
            <div className="flex items-start justify-between">
              <HelperText size="sm">
                Enter a user friendly name for this event that describes what
                makes it run.
              </HelperText>
              <HelperText className="leading-5">
                <RemainCharacters control={control} name="name" max={40} />
              </HelperText>
            </div>
            <Input
              className="text-sm"
              id="name"
              placeholder="e.g. Name of Event"
              {...register("name")}
            />
          </div>

          <div className="space-y-1.5">
            <Label
              className="text-gray-700"
              htmlFor="short-description"
              size="sm"
            >
              Short Description
            </Label>
            <div className="flex items-start justify-between">
              <HelperText size="sm">
                Describe clearly the purpose of this event in a complete
                sentence.
              </HelperText>
              <HelperText className="leading-5">
                <RemainCharacters
                  control={control}
                  name="shortDescription"
                  max={100}
                />
              </HelperText>
            </div>
            <Input
              className="text-sm"
              id="short-description"
              placeholder="This will be the description user see"
              {...register("shortDescription")}
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-gray-700" htmlFor="event-category" size="sm">
              Event Category
            </Label>
            <HelperText size="sm">
              Select which category you want to use.
            </HelperText>
            <select
              className={inputVariants({ className: "text-sm" })}
              id="event-category"
              {...register("eventCategory")}
            >
              <option value="">Select Event Categoty</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-gray-700" htmlFor="event-source" size="sm">
              Event Source
            </Label>
            <div className="flex items-start justify-between">
              <HelperText size="sm">Select API Endoint.</HelperText>
              <HelperText className="leading-5" size="sm">
                Can’t find your event?{" "}
                <Link className="font-semibold text-primary-500" href="#">
                  Change data set
                </Link>
              </HelperText>
            </div>
            <select
              className={inputVariants({ className: "text-sm" })}
              id="event-source"
              {...register("eventSource")}
            >
              <option value="">Select Event Source</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-gray-700" htmlFor="specific-event" size="sm">
              Specific Event
            </Label>
            <HelperText size="sm">
              A specific event from your event source.
            </HelperText>
            <select
              className={inputVariants({ className: "text-sm" })}
              id="specific-event"
              {...register("specificEvent")}
            >
              <option value="">Select Specific Event</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
}
