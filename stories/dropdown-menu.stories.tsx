import { Meta, StoryObj } from "@storybook/react";

import {
  Belling,
  ChevronDown,
  Copy,
  HelpCircle,
  LogOut,
  MoreHorizontal,
  Settings,
  Trash,
  User,
  UserPlus,
  Zap,
  PencilLine,
} from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckItem,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";

const meta: Meta = {
  title: "DropdownMenu",
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const IconsDefault: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-6 px-1.5 py-1 text-gray-500"
          visual="gray"
          variant="ghost"
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy /> Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Zap /> Run Test
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem visual="destructive">
          <Trash /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const ChevronDownDefault = () => {
  const [state, setState] = React.useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckItem
          checked={state.option1}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, option1: checked }))
          }
        >
          Option 1
        </DropdownMenuCheckItem>
        <DropdownMenuCheckItem
          checked={state.option2}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, option2: checked }))
          }
        >
          Option 2
        </DropdownMenuCheckItem>
        <DropdownMenuCheckItem
          checked={state.option3}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, option3: checked }))
          }
        >
          Option 3
        </DropdownMenuCheckItem>
        <DropdownMenuCheckItem
          checked={state.option4}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, option4: checked }))
          }
        >
          Option 4
        </DropdownMenuCheckItem>
        <DropdownMenuCheckItem
          checked={state.option5}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, option5: checked }))
          }
        >
          Option 5
        </DropdownMenuCheckItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const IconsDetailedAvatarDefault: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-normal" size="md">
          <div className="inline-flex items-center gap-x-3">
            <Avatar size="md">
              <AvatarImage src="/man.jpg" alt="Man" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700">
                Christopher Torres
              </span>
              <span className="text-sm text-gray-500">
                chris@blendmetrics.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <User />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPlus />
          Invite Team members
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Belling />
          Belling
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle />
          Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const ShortcutsCheckbox = () => {
  const [state, setState] = React.useState({
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
    select6: false,
    select7: false,
    select8: false,
    select9: false,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuCheckboxItem
          checked={state.select1}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select1: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select2}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select2: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select3}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select3: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select4}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select4: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={state.select5}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select5: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select6}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select6: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select7}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select7: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select8}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select8: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={state.select9}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select9: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const IconsShortcutsDefault: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>
        <Button
          className="h-6 px-1.5 py-1 text-gray-500"
          visual="gray"
          variant="ghost"
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem visual="destructive">
          <Trash /> Delete <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const MoreHorizontalIconsDefault: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>
        <Button
          className="h-6 px-1.5 py-1 text-gray-500"
          visual="gray"
          variant="ghost"
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine /> Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem visual="destructive">
          <Trash /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const Checkbox = () => {
  const [state, setState] = React.useState({
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
    select6: false,
    select7: false,
    select8: false,
    select9: false,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuCheckboxItem
          checked={state.select1}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select1: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select2}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select2: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select3}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select3: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select4}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select4: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={state.select5}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select6: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select6}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select7: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select7}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select7: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.select8}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select8: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={state.select9}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select9: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const CircularCheckbox = () => {
  const [state, setState] = React.useState({
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
    select6: false,
    select7: false,
    select8: false,
    select9: false,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuCheckboxItem
          circular
          checked={state.select1}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select1: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select2}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select2: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select3}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select3: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select4}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select4: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          circular
          checked={state.select5}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select5: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select6}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select6: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select7}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select7: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select8}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select8: checked }))
          }
        >
          Select
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          circular
          checked={state.select9}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select9: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const RadioButton = () => {
  const [value, setValue] = React.useState("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="Select 1">Select</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 2">Select</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 3">Select</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 4">Select</DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="Select 5">Select</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 6">Select</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 7">Select</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 8">Select</DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="Select 9">
            Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const OutlinedDefault: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuItem>Viewer</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Viewer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const CircularShortcutsCheckbox = () => {
  const [state, setState] = React.useState({
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
    select6: false,
    select7: false,
    select8: false,
    select9: false,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuCheckboxItem
          circular
          checked={state.select1}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select1: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select2}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select2: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select3}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select3: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select4}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select4: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          circular
          checked={state.select5}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select5: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select6}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select6: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select7}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select7: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          circular
          checked={state.select8}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select8: checked }))
          }
        >
          Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          circular
          checked={state.select9}
          onCheckedChange={(checked) =>
            setState((prevState) => ({ ...prevState, select9: checked }))
          }
        >
          Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const ShortcutsRadioButton = () => {
  const [value, setValue] = React.useState("");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="Select 1">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 2">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 3">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 4">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="Select 5">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 6">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 7">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Select 8">
            Select<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="Select 9">
            Select <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const AvatarsOutlinedDefault: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>
        <Button variant="outlined" visual="gray">
          Editor
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[11.25rem]">
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Avatar size="xs">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Christopher Torres
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
