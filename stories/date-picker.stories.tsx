import { DatePicker } from "@/components/ui/date-picker";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "DatePicker",
};

export default meta;

export const Default: StoryObj = {
  render: () => <DatePicker />,
};
