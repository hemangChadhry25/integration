import { Meta, StoryObj } from "@storybook/react";
import NextLink from "next/link";

import {
  FolderClosed,
  GoogleSheet,
  History,
  PenSquare,
  Edit,
  Copy,
  MoreHorizontal,
  UserPlus,
  Zap,
  Trash,
  User,
  ArrowDownToLine,
  Link,
  Star,
  GoogleMeet,
  Check,
  Plus2,
  Clock,
  Database,
  ChevronDown,
  CheckCircle,
  Download,
  AlertTriangle,
  ArrowDown,
  AlertCircle,
  PlayCircle,
  TrendingUp,
  AlertCircle2,
} from "@/components/icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Button,
  Card,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Label,
  ScrollArea,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  CloseButton,
  AlertTitle,
  AlertDescription,
} from "@/components/ui";

const meta: Meta = {
  title: "Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const GoogleSheetIconVariant: Story = {
  render: (args) => (
    <Card className="p-3" {...args}>
      <div className="inline-flex gap-x-3">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-gray-200">
          <GoogleSheet />
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-sm font-medium text-gray-800">
            Google Sheets
          </span>
          <span className="text-sm text-gray-600">9 Granted Permissions</span>
        </div>
      </div>

      <div className="flex gap-x-3">
        <Switch size="md" />
        <Label size="sm">Enable All Permissions</Label>
      </div>
    </Card>
  ),
};

export const AvatarGroupDefaultVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[17px]" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <div className="text-sm font-medium text-gray-800">Administrator</div>
          <Badge>Default</Badge>
        </div>
        <div className="text-sm text-gray-500">
          Can manage the content they have created
        </div>
      </div>

      <div className="inline-flex items-center gap-x-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AvatarGroup size="sm">
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </TooltipTrigger>

            <TooltipContent className="p-0" size="md">
              <ScrollArea className="h-[192px] p-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <Avatar>
                      <AvatarImage src="/woman.jpg" alt="Woman" />
                      <AvatarFallback>W</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium leading-5">Woman</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Avatar>
                      <AvatarImage src="/woman.jpg" alt="Woman" />
                      <AvatarFallback>W</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium leading-5">Woman</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Avatar>
                      <AvatarImage src="/woman.jpg" alt="Woman" />
                      <AvatarFallback>W</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium leading-5">Woman</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Avatar>
                      <AvatarImage src="/woman.jpg" alt="Woman" />
                      <AvatarFallback>W</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium leading-5">Woman</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Avatar>
                      <AvatarImage src="/woman.jpg" alt="Woman" />
                      <AvatarFallback>W</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium leading-5">Woman</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Avatar>
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

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="h-8 px-1.5 py-1 text-gray-500"
              visual="gray"
              variant="ghost"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem>
              <Edit />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Zap />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PenSquare />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FolderClosed />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowDownToLine />
              Option 8
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem visual="destructive">
              <Trash />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const NoAssignedUsersDefaultVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-5" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <div className="text-sm font-medium text-gray-800">Administrator</div>
          <Badge>Default</Badge>
        </div>
        <div className="text-sm text-gray-500">
          Can manage the content they have created
        </div>
      </div>

      <div className="inline-flex items-center gap-x-[25px]">
        <span className="text-sm text-gray-500">No assigned users</span>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="h-8 px-1.5 py-1 text-gray-500"
              visual="gray"
              variant="ghost"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem>
              <Edit />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Zap />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PenSquare />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FolderClosed />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowDownToLine />
              Option 8
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem visual="destructive">
              <Trash />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const AvatarIndividualVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[17px]" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <div className="text-sm font-medium text-gray-800">Analyst</div>
          <Badge visual="primary">Individual</Badge>
        </div>
        <div className="text-sm text-gray-500">
          Can create, update and delete content
        </div>
      </div>

      <div className="inline-flex items-center gap-x-[116px]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AvatarGroup size="sm">
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </TooltipTrigger>

            <TooltipContent
              className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg max-h-[192px] space-y-3 overflow-y-auto"
              size="md"
            >
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="h-8 px-1.5 py-1 text-gray-500"
              visual="gray"
              variant="ghost"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem>
              <Edit />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Zap />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PenSquare />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FolderClosed />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowDownToLine />
              Option 8
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem visual="destructive">
              <Trash />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const NoAssignedUsersIndividualVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-5" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <div className="text-sm font-medium text-gray-800">Editor</div>
          <Badge visual="primary">Default</Badge>
        </div>
        <div className="text-sm text-gray-500">
          Can create, update and delete content
        </div>
      </div>

      <div className="inline-flex items-center gap-x-[25px]">
        <span className="text-sm text-gray-500">No assigned users</span>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="h-8 px-1.5 py-1 text-gray-500"
              visual="gray"
              variant="ghost"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem>
              <Edit />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Zap />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PenSquare />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FolderClosed />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowDownToLine />
              Option 8
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem visual="destructive">
              <Trash />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const AvatarGroupCustomVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[17px]" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <div className="text-sm font-medium text-gray-800">Editor</div>
          <Badge visual="primary">Custom</Badge>
        </div>
        <div className="text-sm text-gray-500">
          Can manage the content they have created
        </div>
      </div>

      <div className="inline-flex items-center gap-x-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AvatarGroup size="sm">
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
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

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="h-8 px-1.5 py-1 text-gray-500"
              visual="gray"
              variant="ghost"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem>
              <Edit />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Zap />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PenSquare />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FolderClosed />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowDownToLine />
              Option 8
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem visual="destructive">
              <Trash />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const NoAssignedUsersCustomVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-5" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <div className="text-sm font-medium text-gray-800">Administrator</div>
          <Badge visual="primary">Custom</Badge>
        </div>
        <div className="text-sm text-gray-500">
          Can manage the content they have created
        </div>
      </div>

      <div className="inline-flex items-center gap-x-[25px]">
        <span className="text-sm text-gray-500">No assigned users</span>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="h-8 px-1.5 py-1 text-gray-500"
              visual="gray"
              variant="ghost"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem>
              <Edit />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Zap />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PenSquare />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FolderClosed />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowDownToLine />
              Option 8
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem visual="destructive">
              <Trash />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const AvatarDetailedDefaultVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[18px]" {...args}>
      <div className="inline-flex items-center gap-x-3">
        <Avatar size="md">
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">Test Name</span>
          <span className="text-sm text-gray-500">test@gmail.com</span>
        </div>
      </div>

      <span className="text-sm font-medium text-gray-900">Administrator</span>

      <Badge>Default</Badge>

      <div className="flex flex-col gap-y-1">
        <span className="text-sm font-medium text-gray-900">
          Accepted Team Invite
        </span>
        <span className="text-sm text-gray-500">3 days ago</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            className="h-6 px-1.5 py-1 text-gray-500"
            visual="gray"
            variant="ghost"
          >
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[182px]">
          <DropdownMenuItem>
            <Edit />
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy />
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Zap />
            Option 4
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PenSquare />
            Option 5
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FolderClosed />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <History />
            Option 7
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowDownToLine />
            Option 8
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem visual="destructive">
            <Trash />
            Delete item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  ),
};

export const AvatarFallbackDefaultVariant: Story = {
  render: () => (
    <Card className="px-6 py-[18px]">
      <div className="inline-flex gap-x-3">
        <Avatar size="md">
          <AvatarImage src="/boy.jpg" alt="Boy" />
          <AvatarFallback>
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-900">Test Name</h3>
          <p className="text-sm text-gray-500">test@gmail.com</p>
        </div>
      </div>

      <span className="text-sm font-medium text-gray-900">Administrator</span>

      <Badge>Default</Badge>

      <span className="text-sm text-gray-500">Pending Invitation</span>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            className="h-6 px-1.5 py-1 text-gray-500"
            visual="gray"
            variant="ghost"
          >
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[182px]">
          <DropdownMenuItem>
            <Edit />
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy />
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Zap />
            Option 4
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PenSquare />
            Option 5
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FolderClosed />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <History />
            Option 7
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowDownToLine />
            Option 8
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem visual="destructive">
            <Trash />
            Delete item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  ),
};

export const GoogleMeetConnected: Story = {
  render: (args) => (
    <Card
      className="flex-col items-stretch gap-y-4 p-4 lg:flex-row lg:items-center lg:px-6 lg:py-5"
      {...args}
    >
      <div className="flex flex-auto items-center justify-between lg:contents">
        <div className="contents gap-x-3 lg:flex">
          <GoogleMeet className="flex-none" />
          <div className="hidden flex-col gap-y-0.5 lg:flex">
            <span className="text-sm font-semibold text-gray-800">
              Google Meet
            </span>
            <span className="text-xs leading-[18px] text-gray-500">
              account@gmail.com
            </span>
            <span className="text-sm text-gray-500">
              Users can record meetings and connect with team members.
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-x-2 lg:flex">
          <Badge size="md" visual="primary">
            3 Triggers
          </Badge>
          <Badge size="md" visual="primary">
            3 Triggers
          </Badge>
          <Badge size="md" visual="primary">
            3 Triggers
          </Badge>
        </div>

        <div className="flex items-center gap-x-6">
          <Button variant="outlined" visual="gray">
            <Check className="text-success-500" />
            Connected
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                className="h-6 px-1.5 py-1 text-gray-500"
                visual="gray"
                variant="ghost"
              >
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-[182px]">
              <DropdownMenuItem>
                <Edit />
                Option 1
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy />
                Option 2
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link />
                Option 3
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus />
                Option 3
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Zap />
                Option 4
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PenSquare />
                Option 5
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star />
                Option 6
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FolderClosed />
                Option 6
              </DropdownMenuItem>
              <DropdownMenuItem>
                <History />
                Option 7
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArrowDownToLine />
                Option 8
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem visual="destructive">
                <Trash />
                Delete item
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col gap-y-0.5 lg:hidden">
        <span className="text-sm font-semibold text-gray-800">Google Meet</span>
        <span className="text-xs leading-[18px] text-gray-500">
          account@gmail.com
        </span>
        <span className="text-sm text-gray-500">
          Users can record meetings and connect with team members.
        </span>
      </div>

      <div className="flex items-center gap-x-2 lg:hidden">
        <Badge size="md" visual="primary">
          3 Triggers
        </Badge>
        <Badge size="md" visual="primary">
          3 Triggers
        </Badge>
        <Badge size="md" visual="primary">
          3 Triggers
        </Badge>
      </div>
    </Card>
  ),
};

export const GoogleMeetConnect: Story = {
  render: (args) => (
    <Card
      className="flex-col items-stretch gap-y-4 p-4 lg:flex-row lg:items-center lg:px-6 lg:py-5"
      {...args}
    >
      <div className="flex flex-auto items-center justify-between lg:contents">
        <div className="contents gap-x-3 lg:flex">
          <GoogleMeet className="flex-none" />
          <div className="hidden flex-col gap-y-0.5 lg:flex">
            <span className="text-sm font-semibold text-gray-800">
              Google Meet
            </span>
            <span className="text-xs leading-[18px] text-gray-500">
              account@gmail.com
            </span>
            <span className="text-sm text-gray-500">
              Users can record meetings and connect with team members.
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-x-2 lg:flex">
          <Badge size="md" visual="primary">
            3 Triggers
          </Badge>
          <Badge size="md" visual="primary">
            3 Triggers
          </Badge>
          <Badge size="md" visual="primary">
            3 Triggers
          </Badge>
        </div>

        <div className="flex items-center gap-x-6">
          <Button variant="outlined" visual="gray">
            <Plus2 className="text-gray-500" />
            Connect
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                className="h-6 px-1.5 py-1 text-gray-500"
                visual="gray"
                variant="ghost"
              >
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-[182px]">
              <DropdownMenuItem>
                <Edit />
                Option 1
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy />
                Option 2
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link />
                Option 3
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus />
                Option 3
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Zap />
                Option 4
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PenSquare />
                Option 5
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star />
                Option 6
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FolderClosed />
                Option 6
              </DropdownMenuItem>
              <DropdownMenuItem>
                <History />
                Option 7
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArrowDownToLine />
                Option 8
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem visual="destructive">
                <Trash />
                Delete item
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col gap-y-0.5 lg:hidden">
        <span className="text-sm font-semibold text-gray-800">Google Meet</span>
        <span className="text-xs leading-[18px] text-gray-500">
          account@gmail.com
        </span>
        <span className="text-sm text-gray-500">
          Users can record meetings and connect with team members.
        </span>
      </div>

      <div className="flex items-center gap-x-2 lg:hidden">
        <Badge size="md" visual="primary">
          3 Triggers
        </Badge>
        <Badge size="md" visual="primary">
          3 Triggers
        </Badge>
        <Badge size="md" visual="primary">
          3 Triggers
        </Badge>
      </div>
    </Card>
  ),
};

export const DetailedAvatarFullAccess: Story = {
  render: (args) => (
    <Card className="px-6 py-[18px]" {...args}>
      <div className="inline-flex items-center gap-x-3">
        <Avatar size="md">
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">Test Name</span>
          <span className="text-sm text-gray-500">test@gmail.com</span>
        </div>
      </div>

      <span className="text-sm font-medium text-gray-900">Administrator</span>

      <span className="text-sm font-medium text-gray-800">Full Access</span>

      <div className="flex flex-col gap-y-1">
        <span className="text-sm font-medium text-gray-900">
          Accepted Team Invite
        </span>
        <span className="text-sm text-gray-500">3 days ago</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            className="h-6 px-1.5 py-1 text-gray-500"
            visual="gray"
            variant="ghost"
          >
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[182px]">
          <DropdownMenuItem>
            <Edit />
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy />
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Zap />
            Option 4
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PenSquare />
            Option 5
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FolderClosed />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <History />
            Option 7
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowDownToLine />
            Option 8
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem visual="destructive">
            <Trash />
            Delete item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  ),
};

export const AccordionPassed = () => {
  return (
    <Accordion type="single" collapsible className="space-y-6 p-5">
      <AccordionItem value="1">
        <div className="flex items-center justify-between rounded-lg border border-gray-200 px-6 py-[18px] group-data-[state=closed]:rounded-b-lg group-data-[state=open]:rounded-b-none">
          <Checkbox size="md" />

          <div className="flex items-center gap-x-3">
            <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-success-100 text-success-500">
              <CheckCircle className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-black">Passed</span>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-800">
              Transform Sales Data
            </div>
            <div className="text-xs leading-[18px] text-gray-500">
              123456789
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <Clock />
            <span className="text-sm font-medium text-gray-800">1 min ago</span>
          </div>

          <div className="flex items-center gap-x-2">
            <GoogleMeet />
            <span className="text-sm font-medium text-gray-800">
              Google Meet
            </span>
          </div>

          <div className="flex items-center gap-x-2">
            <Database className="text-gray-400" />
            <span className="text-sm font-medium text-gray-800">200kb</span>
          </div>

          <Avatar size="sm">
            <AvatarImage src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>

          <AccordionTrigger>
            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="text-sm text-gray-800">
              <span className="font-medium">Run Time:</span> 30 seconds
            </div>

            <div className="mt-1 text-sm text-gray-800">
              <span className="font-medium">Description</span> This task
              processes incoming data from the customer database
            </div>

            <div className="mt-3">
              <Button variant="outlined" visual="gray">
                Rerun Task
              </Button>
            </div>

            <div className="mt-4">
              <Tabs defaultValue="Input Data">
                <TabsList className="border-b-transparent px-0">
                  <TabsTrigger value="Input Data">Input Data</TabsTrigger>
                  <TabsTrigger value="Output Data">Output Data</TabsTrigger>
                </TabsList>
                <TabsContent className="mt-4" value="Input Data">
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Download</span>{" "}
                    <span className="inline-flex items-center gap-x-1 text-primary-500">
                      customer_data.csv <Download />
                    </span>
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Data Source</span> Customer
                    Database
                  </div>
                </TabsContent>
                <TabsContent className="mt-4" value="Output Data">
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Download</span>{" "}
                    <span className="inline-flex items-center gap-x-1 text-primary-500">
                      customer_data.csv <Download />
                    </span>
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Data Source</span> Customer
                    Database
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <Alert className="mt-4" variant="success">
            <CheckCircle className="h-5 w-5 text-success-600" />
            <AlertTitle className="text-success-700">
              Test Successful
            </AlertTitle>
            <AlertDescription className="mt-1 text-gray-500">
              All required fields for each step have been filled out! All
              inputted data has also passed to the correct API endpoint(s) and
              is working as expected.
            </AlertDescription>

            <div className="mt-3">
              <NextLink
                className="flex items-center gap-x-2 text-sm font-semibold text-success-700 focus-visible:outline-none "
                href="/"
              >
                View Data
                <ChevronDown />
              </NextLink>
            </div>
          </Alert>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const AccordionError = () => {
  return (
    <Accordion type="single" collapsible className="space-y-6 p-5">
      <AccordionItem value="1">
        <div className="flex items-center justify-between rounded-lg border border-gray-200 px-6 py-[18px] group-data-[state=closed]:rounded-b-lg group-data-[state=open]:rounded-b-none">
          <Checkbox size="md" />

          <div className="flex items-center gap-x-3">
            <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-error-100 text-error-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-black">
                Failed
              </span>
              <span className="text-xs leading-[18px] text-gray-500">
                Error 404
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-800">
              Transform Sales Data
            </div>
            <div className="text-xs leading-[18px] text-gray-500">
              123456789
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <Clock />
            <span className="text-sm font-medium text-gray-800">1 min ago</span>
          </div>

          <div className="flex items-center gap-x-2">
            <GoogleMeet />
            <span className="text-sm font-medium text-gray-800">
              Google Meet
            </span>
          </div>

          <div className="flex items-center gap-x-2">
            <Database className="text-gray-400" />
            <span className="text-sm font-medium text-gray-800">200kb</span>
          </div>

          <Avatar size="sm">
            <AvatarImage src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>

          <AccordionTrigger>
            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="text-sm text-gray-800">
              <span className="font-medium">Run Time:</span> 30 seconds
            </div>

            <div className="mt-1 text-sm text-gray-800">
              <span className="font-medium">Description</span> This task
              processes incoming data from the customer database
            </div>

            <div className="mt-3">
              <Button variant="outlined" visual="gray">
                Rerun Task
              </Button>
            </div>

            <div className="mt-4">
              <Tabs defaultValue="Input Data">
                <TabsList className="border-b-transparent px-0">
                  <TabsTrigger value="Input Data">Input Data</TabsTrigger>
                  <TabsTrigger value="Output Data">Output Data</TabsTrigger>
                </TabsList>
                <TabsContent className="mt-4" value="Input Data">
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Download</span>{" "}
                    <span className="inline-flex items-center gap-x-1 text-primary-500">
                      customer_data.csv <Download />
                    </span>
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Data Source</span> Customer
                    Database
                  </div>
                </TabsContent>
                <TabsContent className="mt-4" value="Output Data">
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Download</span>{" "}
                    <span className="inline-flex items-center gap-x-1 text-primary-500">
                      customer_data.csv <Download />
                    </span>
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-medium">Data Source</span> Customer
                    Database
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <Alert className="mt-4" variant="error">
            <NextLink
              className="absolute right-4 top-4 inline-flex gap-x-2 text-sm font-semibold"
              href="/"
            >
              Learn More <Link className="h-[15px] w-[15px]" />
            </NextLink>
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Error 404</AlertTitle>
            <AlertDescription>
              Failed to transform data - Invalid JSON format (can be available
              in a hover screen)
            </AlertDescription>

            <div className="mt-3 text-sm text-gray-700">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Dorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.Dorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.Dorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per.
            </div>

            <div className="mt-4 flex items-center gap-x-4">
              <Button visual="error">Fix Error</Button>
              <NextLink
                className="flex items-center gap-x-2 text-sm font-semibold text-error-500 focus-visible:outline-none"
                href="/"
              >
                <PlayCircle />
                Show me how
              </NextLink>
            </div>
          </Alert>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const CompletedTasks: Story = {
  render: (args) => (
    <Card className="px-6 py-[18px]" {...args}>
      <div className="inline-flex items-center gap-x-3">
        <Avatar size="md">
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">Test Name</span>
          <span className="text-sm text-gray-500">test@gmail.com</span>
        </div>
      </div>

      <Badge size="sm" visual="success">
        Active
      </Badge>

      <span className="text-sm font-medium text-gray-800">
        7 tasks completed this month
      </span>

      <div className="flex gap-x-2">
        <Database className="text-gray-400" />
        <span className="text-sm text-gray-700">50kb</span>
      </div>

      <div className="text-sm text-gray-500">
        Last Active{" "}
        <span className="font-medium text-gray-800">30 min ago</span>
      </div>

      <AlertCircle className="h-5 w-5 text-error-500" />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            className="h-6 px-1.5 py-1 text-gray-500"
            visual="gray"
            variant="ghost"
          >
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[182px]">
          <DropdownMenuItem>
            <Edit />
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy />
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Zap />
            Option 4
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PenSquare />
            Option 5
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FolderClosed />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem>
            <History />
            Option 7
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowDownToLine />
            Option 8
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem visual="destructive">
            <Trash />
            Delete item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  ),
};

export const SuccessRate = () => {
  return (
    <div className="max-w-[233.25px] rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:ring-1 hover:ring-gray-300">
      <div className="flex items-center gap-x-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-primary-500">
          <TrendingUp />
        </div>
        <span className="text-sm leading-4 text-gray-500">Success Rate</span>
      </div>

      <div className="mt-3 text-[18px] font-semibold leading-[21.78px] text-gray-800">
        90%
      </div>
    </div>
  );
};

export const TasksCompleted = () => {
  return (
    <div className="max-w-[233.25px] rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:ring-1 hover:ring-gray-300">
      <div className="flex items-center gap-x-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success-50 text-success-500">
          <CheckCircle className="h-3.5 w-3.5" />
        </div>
        <span className="text-sm leading-4 text-gray-500">Tasks Completed</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[18px] font-semibold leading-[21.78px] text-gray-800">
          20.8k
        </span>
        <NextLink href="/" className="text-sm font-semibold text-gray-500">
          view all
        </NextLink>
      </div>
    </div>
  );
};

export const TasksFailed = () => {
  return (
    <div className="max-w-[233.25px] rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:ring-1 hover:ring-gray-300">
      <div className="flex items-center gap-x-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-error-50 text-error-500">
          <AlertCircle2 className="h-3.5 w-3.5" />
        </div>
        <span className="text-sm leading-4 text-gray-500">Tasks Failed</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[18px] font-semibold leading-[21.78px] text-gray-800">
          10.3k
        </span>
        <NextLink href="/" className="text-sm font-semibold text-gray-500">
          view all
        </NextLink>
      </div>
    </div>
  );
};
