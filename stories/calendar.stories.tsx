import { Meta } from "@storybook/react";
import { Calendar } from "@/components/ui";
import * as React from "react";
import { DateRange } from "react-day-picker";

const meta: Meta = {
  title: "Calendar",
};

export default meta;

export const Default = () => {
  const [range, setRange] = React.useState<Date>();
  return (
    <Calendar initialFocus mode="single" selected={range} onSelect={setRange} />
  );
};

export const Multiple = () => {
  const [dates, setDates] = React.useState<Date[]>();
  return (
    <Calendar
      initialFocus
      mode="multiple"
      selected={dates}
      onSelect={setDates}
    />
  );
};

export const Range = () => {
  const [range, setRange] = React.useState<DateRange>();
  return (
    <Calendar initialFocus mode="range" selected={range} onSelect={setRange} />
  );
};
