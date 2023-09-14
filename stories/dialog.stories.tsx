import * as React from "react";
import { Meta } from "@storybook/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  AlertCircle,
  AlertCircle2,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  MoveLeftRight,
  Search,
  Users,
} from "@/components/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  Button,
  DialogClose,
  DialogTrigger,
  InputGroup,
  Input,
  InputRightElement,
  Label,
  ScrollArea,
  Checkbox,
  InputLeftElement,
  RadioGroup,
  RadioGroupItemSelector,
  HelperText,
  Badge,
} from "@/components/ui";
import { first, nope } from "@/lib/utils";
import { useDebounce, useToggle } from "@/lib/hooks";

const meta: Meta = {
  title: "Dialog",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=112-202450&mode=design&t=wZEsVBHb30vSp1s1-4",
    },
  },
};

export default meta;

export const SaveChangesExit = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-warning-50 bg-warning-100">
            <AlertTriangle className="h-5 w-5 text-warning-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <DialogTitle>Save Changes and Exit?</DialogTitle>
            <DialogDescription>
              If you leave, any changes you’ve made will be lost.
            </DialogDescription>
          </div>
        </DialogHeader>

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray">
              Exit without saving
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button>Yes, save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const DeleteAnalystRole = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-error-50 bg-error-100">
            <AlertCircle2 className="h-5 w-5 text-error-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <DialogTitle>Delete Analyst Role?</DialogTitle>
            <DialogDescription>
              The role will be deleted for the following user:
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-5 inline-flex items-center gap-x-3">
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

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray">
              Cancel
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button visual="error">Yes, delete</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const schema = z.object({
  confirm: z.literal("DELETE"),
});

type FormState = z.infer<typeof schema>;

export const DeleteAnalystRoleConfirmation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormState>({
    resolver: zodResolver(schema),
  });

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    reset();
  };

  const onSubmit: SubmitHandler<FormState> = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-error-50 bg-error-100">
            <AlertCircle2 className="h-5 w-5 text-error-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <DialogTitle>Delete Analyst Role?</DialogTitle>
            <DialogDescription>
              Confirm that you want to delete this role
            </DialogDescription>
          </div>
        </DialogHeader>

        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <Label size="sm" className="font-medium">
            Type <span className="font-bold">DELETE</span> (in all caps) to
            confirm deletion
          </Label>

          <InputGroup className="mt-1.5">
            <Input
              {...register("confirm")}
              type="text"
              isInvalid={!!errors.confirm}
            />
            {!!errors.confirm && (
              <InputRightElement>
                <AlertCircle className="text-error-500" />
              </InputRightElement>
            )}
          </InputGroup>

          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button variant="outlined" visual="gray">
                Cancel
              </Button>
            </DialogClose>

            <Button visual="error" type="submit">
              Yes, delete
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const DeleteWriteRole = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>

      <DialogContent className="max-w-[520px]">
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-error-50 bg-error-100">
            <AlertCircle2 className="h-5 w-5 text-error-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <DialogTitle>Delete Writer Role?</DialogTitle>
            <DialogDescription>
              All users will be reassigned to the role:{" "}
              <span className="inline-flex items-center gap-x-1 font-medium text-gray-black">
                Viewer <ChevronDown className="text-gray-500" />
              </span>
            </DialogDescription>
          </div>
        </DialogHeader>

        <ScrollArea className="mt-5 h-[248px]">
          <div className="space-y-3">
            <div className="flex items-center gap-x-3">
              <Avatar size="md">
                <AvatarImage src="/woman.jpg" alt="Man" />
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
            <div className="flex items-center gap-x-3">
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
            <div className="flex items-center gap-x-3">
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
            <div className="flex items-center gap-x-3">
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
            <div className="flex items-center gap-x-3">
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
          </div>
        </ScrollArea>

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button visual="error">Yes, delete</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface User {
  photo: string;
  fullName: string;
  email: string;
  role: string;
}

const users: User[] = [
  {
    email: "znylen@gmail.com",
    fullName: "Zachary Nylen",
    photo: "/man.jpg",
    role: "Zachary Nylen",
  },
  {
    email: "znylen@gmail.com",
    fullName: "Zachary Nylen",
    photo: "/man.jpg",
    role: "Zachary Nylen",
  },
  {
    email: "znylen@gmail.com",
    fullName: "Zachary Nylen",
    photo: "/man.jpg",
    role: "Zachary Nylen",
  },
  {
    email: "znylen@gmail.com",
    fullName: "Zachary Nylen",
    photo: "/man.jpg",
    role: "Zachary Nylen",
  },
  {
    email: "znylen@gmail.com",
    fullName: "Zachary Nylen",
    photo: "/man.jpg",
    role: "Zachary Nylen",
  },
  {
    email: "znylen@gmail.com",
    fullName: "Zachary Nylen",
    photo: "/man.jpg",
    role: "Zachary Nylen",
  },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.display({
    id: "checkboxes",
    header: ({ table }) => (
      <Checkbox
        {...{
          checked: table.getIsSomePageRowsSelected()
            ? "indeterminate"
            : table.getIsAllPageRowsSelected(),
          onCheckedChange: (value) =>
            value !== "indeterminate"
              ? table.toggleAllRowsSelected(value)
              : nope,
        }}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        {...{
          checked: row.getIsSelected(),
          onCheckedChange: (value) => row.toggleSelected(!!value),
          disabled: !row.getCanSelect(),
        }}
      />
    ),
    enableGlobalFilter: false,
  }),
  columnHelper.accessor((user) => user, {
    id: "users",
    header: () => (
      <div className="text-sm font-medium text-gray-700">Select All</div>
    ),
    cell: (info) => (
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-x-3">
          <Avatar size="md">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>{first(info.getValue().fullName)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700">
              {info.getValue().fullName}
            </span>
            <span className="text-sm text-gray-500">
              {info.getValue().email}
            </span>
          </div>
        </div>
        <span className="text-xs font-medium leading-[18px] text-gray-500">
          {info.getValue().role}
        </span>
      </div>
    ),
  }),
];

export const AssignUsers = () => {
  const [data] = React.useState(users);
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const debouncedGlobalFilter = useDebounce(globalFilter, 200);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      rowSelection,
      globalFilter: debouncedGlobalFilter,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[520px] px-1.5">
        <DialogHeader className="px-[18px]">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-primary-25 bg-primary-50">
            <Users className="h-5 w-5 text-primary-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <DialogTitle>Assign Users</DialogTitle>
            <DialogDescription>
              Select users you want to assign the{" "}
              <span className="font-bold">Writer</span> role:
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-5 px-[18px]">
          <InputGroup fieldHeight="2.25rem">
            <InputLeftElement>
              <Search className="text-gray-400" />
            </InputLeftElement>
            <Input
              className="h-9 py-1.5 text-sm leading-6"
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Find users"
              value={globalFilter}
            />
          </InputGroup>
        </div>

        <div className="mt-3 h-[280px] overflow-y-auto pl-[18px] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg">
          <table className="w-full table-auto">
            <caption className="sr-only">Users</caption>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className="px-1 py-1.5 text-left [&:has([role=checkbox])]:pl-0"
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  className="data-[state=selected]:bg-gray-50"
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : ""}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="px-1.5 py-1.5 [&:has([role=checkbox])]:pl-0"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DialogFooter className="mt-8 px-[18px]">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Assign</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ChangeRole = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[630px]">
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-primary-25 bg-primary-50">
            <MoveLeftRight className="h-5 w-5 text-primary-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <DialogTitle>Change Role</DialogTitle>
            <DialogDescription>
              Short description text that explain the assigning role process.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-5">
          <h3 className="text-sm font-medium leading-6 text-gray-black">
            Select the role you want to assign
          </h3>

          <RadioGroup className="mt-3 gap-y-2">
            <RadioGroupItemSelector value="Administrator">
              <Label>Administrator</Label>
              <HelperText>Can manage the content they have created</HelperText>
            </RadioGroupItemSelector>
            <RadioGroupItemSelector value="Super Administrator">
              <Label>Super Administrator</Label>
              <HelperText>Can create, update and delete content</HelperText>
            </RadioGroupItemSelector>
            <RadioGroupItemSelector value="Editor">
              <Label>Editor</Label>
              <HelperText>Can create, update and delete content</HelperText>
            </RadioGroupItemSelector>
            <RadioGroupItemSelector value="Analyst">
              <Label>Analyst</Label>
              <HelperText>Can create, update and delete content</HelperText>
            </RadioGroupItemSelector>
          </RadioGroup>
        </div>

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Assign</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const AssignAdministratorRole = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[630px]">
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-warning-50 bg-warning-100">
            <AlertTriangle className="h-5 w-5 text-warning-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <DialogTitle>Change Role</DialogTitle>
            <DialogDescription>
              Short description text that explain the assigning role process.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-2 h-[268px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-xl">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="pt-3 text-left text-xs font-medium leading-5 text-gray-500">
                  Feature
                </th>
                <th className="pt-3 text-left text-xs font-medium leading-5 text-gray-500">
                  Old Permissions
                </th>
                <th className="pt-3 text-left text-xs font-medium leading-5 text-gray-500">
                  New Permissions
                </th>
              </tr>
              <tr>
                <th className="pt-3 text-left text-xs font-medium leading-5 text-gray-500">
                  Administrative
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">
                    Save, Read, Write, Delete
                  </Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">Read</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">Save, Delete</Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">Save, Read, Delete</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">
                    Save, Read, Write, Delete
                  </Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">Save, Read, Delete</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">Read, Write, Delete</Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">No Access</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">Save, Delete</Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">Save</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">
                    Save, Read, Write, Delete
                  </Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">Save, Read, Delete</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">
                    Save, Read, Write, Delete
                  </Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">Save, Read, Delete</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  Feature Name
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge className="line-through">
                    Save, Read, Write, Delete
                  </Badge>
                </td>
                <td className="py-1.5 pr-4 text-xs font-medium leading-5 text-gray-800">
                  <Badge visual="success">Save, Read, Delete</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Assign</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const Congratulations = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="items-center">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-success-100">
            <CheckCircle className="h-5 w-5 text-success-600" />
          </div>

          <div className="mx-auto flex max-w-sm flex-col gap-y-2">
            <DialogTitle className="text-center">
              Congratulations, custom role has been created!
            </DialogTitle>
            <DialogDescription className="text-center">
              Your role is ready and now you are able to assign your users to
              this role.
            </DialogDescription>
          </div>
        </DialogHeader>

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray">
              Go Back To Role
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button>Assign Users</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
