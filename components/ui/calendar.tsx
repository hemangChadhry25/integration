"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("px-6 py-5", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-3",
        caption: "relative flex h-10 justify-center items-center",
        caption_label: "text-base font-semibold text-gray-700",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost", visual: "gray", size: "md" }),
          "p-0 w-10"
        ),
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell:
          "text-gray-700 flex items-center justify-between rounded-lg w-10 h-10 font-medium text-sm",
        row: "flex w-full mt-1",
        cell: cn(
          "relative text-center p-0 [&:has([aria-selected])]:bg-primary-50 focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-full [&:has(>.day-range-start)]:rounded-l-full first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full"
            : "[&:has([aria-selected])]:rounded-full"
        ),
        day: cn(
          buttonVariants({ variant: "ghost", visual: "gray", size: "md" }),
          "w-10 p-0 font-normal text-gray-700 rounded-full hover:bg-gray-50 focus:bg-gray-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary-500 text-white hover:bg-primary-500 hover:text-white focus:bg-primary-500 focus:text-white",
        day_today: "bg-gray-100 text-gray-500",
        day_outside: "text-gray-500/100",
        day_disabled: "text-gray-500/100",
        day_range_middle:
          "aria-selected:bg-primary-50 aria-selected:text-gray-700 hover:aria-selected:text-gray-700 hover:aria-selected:bg-primary-50 focus:aria-selected:text-gray-700 focus:aria-selected:bg-primary-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        ...components,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
