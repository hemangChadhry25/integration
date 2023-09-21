"use client";

import Image from "next/image";

import { AlertCircle2, ArrowLeft2, Eye, Plus2, Tag } from "@/components/icons";
import {
  Button,
  HelperText,
  Label,
  RadioGroup,
  RadioGroupItemSelector,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { useToggle } from "@/lib/hooks";

export default function Preview() {
  const [preview, { on, off }] = useToggle(true);

  return preview ? (
    <div className="h-[666px] rounded-lg bg-gray-50 p-6 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
      <div className="rounded-xl bg-white p-6 shadow-xl">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
          <Eye className="h-6 w-6 flex-none text-success-500" />
        </div>
        <h1 className="mt-2 text-center text-lg font-semibold text-gray-900">
          Preview Event Here
        </h1>
        <p className="mt-2 text-center text-sm text-gray-500">
          See how your event settings fields will look in real life.
        </p>
        <p className="mt-4 text-center text-sm text-gray-500">
          You’ll see changes in real-time.
        </p>
        <Button className="mt-6 w-full" onClick={off}>
          Get Started
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex h-[666px] flex-col rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between p-5">
        <div className="flex items-center">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border-2 border-gray-200 text-primary-500">
            <Tag className="h-8 w-8 flex-none" />
          </div>
          <div className="ml-[15px]">
            <h3 className="text-base font-medium text-gray-900">Tag/Untag</h3>
            <p className="text-xs leading-[14.52px] text-gray-500">
              Assign or Remove Tags
            </p>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="inline-flex items-center gap-x-1 text-sm font-semibold text-primary-500"
                disabled
                onClick={on}
              >
                <ArrowLeft2 className="flex-none" />
                Back
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start">
              Button is disabled in a preview mode
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Tabs defaultValue="setup" className="flex flex-auto flex-col">
        <TabsList className="w-full justify-between border-t">
          <TabsTrigger value="setup">
            Setup <AlertCircle2 className="text-error-500" />
          </TabsTrigger>
          <TabsTrigger value="filters">Filters</TabsTrigger>
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
          <TabsTrigger value="test">Test</TabsTrigger>
        </TabsList>
        <TabsContent className="flex flex-auto flex-col p-5" value="setup">
          <h3 className="text-sm font-medium text-gray-900">
            What action will you do?
          </h3>

          <RadioGroup className="mt-3 gap-y-2" defaultValue="Option 1">
            <RadioGroupItemSelector value="Option 1">
              <Label>Assign a Tag</Label>
              <HelperText>Add a tag in the workflow</HelperText>
            </RadioGroupItemSelector>
            <RadioGroupItemSelector value="Option 2">
              <Label>Unassign a Tag</Label>
              <HelperText>Remove a tag in the workflow</HelperText>
            </RadioGroupItemSelector>
          </RadioGroup>

          <div className="mt-auto">
            <h3 className="text-sm font-semibold text-gray-900">
              Connect your account
            </h3>

            <div className="mt-3 flex items-center justify-between gap-x-3 rounded-lg border border-gray-200 bg-white p-3 pr-[18px]">
              <div className="flex items-center gap-x-3">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <div className="relative h-6 w-6 flex-none">
                    <Image
                      className="object-contain"
                      fill
                      src="/typeform.png"
                      alt="Typeform"
                      sizes="50vw"
                    />
                  </div>
                </div>
                <h3 className="text-[13px] font-medium leading-4 text-gray-900">
                  Connect your Typeform account
                </h3>
              </div>

              <Button variant="outlined" visual="gray">
                <Plus2 />
                Connect
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="filters"></TabsContent>
        <TabsContent value="conditions"></TabsContent>
        <TabsContent value="test"></TabsContent>
      </Tabs>
    </div>
  );
}
