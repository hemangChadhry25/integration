import { Meta, StoryObj } from "@storybook/react";

import { ArrowRight, ArrowUp, Dot, Plus, X } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage, Badge } from "@/components/ui";

const meta: Meta = {
  title: "Badge",
  component: Badge,
  argTypes: {
    visual: {
      control: "select",
      options: [
        "gray",
        "purple",
        "error",
        "warning",
        "success",
        "sky",
        "primary",
        "indigo",
        "pink",
        "rose",
        "orange",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["rounded", "circular"],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=2-25063&mode=design&t=r9TEGYqxlEOfyK72-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  render: (args) => {
    return <Badge {...args}>Label</Badge>;
  },
};

export const DotIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <Dot />
        Label
      </Badge>
    );
  },
};

export const ArrowRightIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        Label
        <ArrowRight />
      </Badge>
    );
  },
};

export const ArrowUpIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <ArrowUp />
        Label
      </Badge>
    );
  },
};

export const XIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        Label
        <X className="cursor-pointer" />
      </Badge>
    );
  },
};

export const PlusIcon: Story = {
  args: {
    variant: "circular",
  },
  render: (args) => {
    return (
      <Badge {...args}>
        <Plus />
      </Badge>
    );
  },
};

export const AvatarIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <Avatar className="h-4 w-4 hover:ring-0">
          <AvatarImage src="/woman.jpg" alt="Woman" />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        Label
      </Badge>
    );
  },
};
