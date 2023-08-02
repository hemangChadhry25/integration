import { Meta, StoryObj } from "@storybook/react";

import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  AvatarFallback,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  ScrollArea,
} from "@/components/ui";

const meta: Meta = {
  title: "AvatarGroup",
  component: AvatarGroup,
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    excessClassName: {
      table: {
        disable: true,
      },
    },
    max: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-193974&mode=dev",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Xs: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <AvatarGroup {...args}>
              <Avatar className="border-2 border-white hover:ring-0">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </TooltipTrigger>
          <TooltipContent className="p-0" size="md">
            <ScrollArea className="h-[192px] p-3">
              <div className="space-y-3">
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
              </div>
            </ScrollArea>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export const Sm: Story = {
  args: {
    size: "sm",
  },
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <AvatarGroup {...args}>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </TooltipTrigger>
          <TooltipContent className="p-0" size="md">
            <ScrollArea className="h-[192px] p-3">
              <div className="space-y-3">
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
              </div>
            </ScrollArea>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export const Md: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <AvatarGroup {...args}>
              <Avatar className="border-2 border-white hover:ring-0" size="md">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="md">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="md">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="md">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="md">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="md">
                <AvatarImage src="/woman.jpg" alt="Woman" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </TooltipTrigger>

          <TooltipContent className="p-0" size="md">
            <ScrollArea className="h-[192px] p-3">
              <div className="space-y-3">
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Avatar className="hover:ring-0">
                    <AvatarImage src="/woman.jpg" alt="Woman" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium leading-5">Woman</span>
                </div>
              </div>
            </ScrollArea>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
