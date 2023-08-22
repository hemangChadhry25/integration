import { Meta, StoryObj } from "@storybook/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  AvatarFallbackIcon,
} from "@/components/ui";

const meta: Meta = {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    isOnline: {
      control: "boolean",
    },
    badgeClassName: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    isOnline: true,
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Xs: Story = {
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=397-201204&mode=design&t=0pofMbZEfin42GC7-4",
    },
  },
};

export const Sm: Story = {
  args: {
    size: "sm",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    ...Xs.parameters,
  },
};

export const Md: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    ...Xs.parameters,
  },
};

export const Lg: Story = {
  args: {
    size: "lg",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    ...Xs.parameters,
  },
};

export const Xl: Story = {
  args: {
    size: "xl",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    ...Xs.parameters,
  },
};

export const DoubleXl: Story = {
  args: {
    size: "2xl",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    ...Xs.parameters,
  },
};

export const Fallback: Story = {
  render: (args) => {
    return (
      <Avatar className="hover:ring-0 active:ring-primary-100" {...args}>
        <AvatarImage src="/boy.jpg" alt="Boy" />
        <AvatarFallbackIcon />
      </Avatar>
    );
  },
  parameters: {
    ...Xs.parameters,
  },
};

export const TooltipVariant: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar {...args}>
              <AvatarImage src="/man.jpg" alt="Man" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent className="text-xs font-semibold leading-[18px]">
            This is a tooltip
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=297-201536&mode=design&t=yD9NNpLMSJVswdhY-4",
    },
  },
};

export const XsDetailed: Story = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return (
      <div className="inline-flex items-center gap-x-2">
        <Avatar {...args}>
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-xs font-semibold leading-[15px] text-gray-700">
            Christopher Torres
          </span>
          <span className="text-[9px] leading-[14px] text-gray-500">
            chris@blendmetrics.com
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=329-201105&mode=design&t=yD9NNpLMSJVswdhY-4",
    },
  },
};

export const SmDetailed: Story = {
  args: {
    size: "sm",
  },
  argTypes: {
    ...XsDetailed.argTypes,
  },
  render: (args) => {
    return (
      <div className="inline-flex items-center gap-x-2.5">
        <Avatar {...args}>
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">
            Christopher Torres
          </span>
          <span className="text-xs leading-[18px] text-gray-500">
            chris@blendmetrics.com
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    ...XsDetailed.parameters,
  },
};

export const MdDetailed: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    ...XsDetailed.argTypes,
  },
  render: (args) => {
    return (
      <div className="inline-flex items-center gap-x-3">
        <Avatar {...args}>
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">
            Christopher Torres
          </span>
          <span className="text-sm text-gray-500">chris@blendmetrics.com</span>
        </div>
      </div>
    );
  },
  parameters: {
    ...XsDetailed.parameters,
  },
};

export const LgDetailed: Story = {
  args: {
    size: "lg",
  },
  argTypes: {
    ...XsDetailed.argTypes,
  },
  render: (args) => {
    return (
      <div className="inline-flex items-center gap-x-3">
        <Avatar {...args}>
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-700">
            Christopher Torres
          </span>
          <span className="text-base text-gray-500">
            chris@blendmetrics.com
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    ...XsDetailed.parameters,
  },
};

export const XlDetailed: Story = {
  args: {
    size: "xl",
  },
  argTypes: {
    ...XsDetailed.argTypes,
  },
  render: (args) => {
    return (
      <div className="inline-flex items-center gap-x-3">
        <Avatar {...args}>
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold leading-7 text-gray-700">
            Christopher Torres
          </span>
          <span className="text-[18px] leading-6 text-gray-500">
            chris@blendmetrics.com
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    ...XsDetailed.parameters,
  },
};
