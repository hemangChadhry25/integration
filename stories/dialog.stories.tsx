import * as React from "react";
import { Meta } from "@storybook/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  AlertCircle,
  AlertCircle2,
  ChevronDown,
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
} from "@/components/ui";
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
import { first, nope } from "@/lib/utils";
import { useDebounce } from "@/lib/hooks";

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

          <div className="flex flex-col gap-x-2">
            <DialogTitle>Delete Analyst Role?</DialogTitle>
            <DialogDescription>
              The role will be deleted for the following user:
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-5 inline-flex items-center gap-x-3">
          <Avatar size="md">
            <AvatarImage src="/Man.jpg" alt="Man" />
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

  const onSubmit: SubmitHandler<FormState> = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-error-50 bg-error-100">
            <AlertCircle2 className="h-5 w-5 text-error-600" />
          </div>

          <div className="flex flex-col gap-x-2">
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

      <DialogContent>
        <DialogHeader>
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-error-50 bg-error-100">
            <AlertCircle2 className="h-5 w-5 text-error-600" />
          </div>

          <div className="flex flex-col gap-x-2">
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
          <div className="mt-5 space-y-3">
            <div className="inline-flex items-center gap-x-3">
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
            <div className="inline-flex items-center gap-x-3">
              <Avatar size="md">
                <AvatarImage src="/Man.jpg" alt="Man" />
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
            <div className="inline-flex items-center gap-x-3">
              <Avatar size="md">
                <AvatarImage src="/Man.jpg" alt="Man" />
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
            <div className="inline-flex items-center gap-x-3">
              <Avatar size="md">
                <AvatarImage src="/Man.jpg" alt="Man" />
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
            <div className="inline-flex items-center gap-x-3">
              <Avatar size="md">
                <AvatarImage src="/Man.jpg" alt="Man" />
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
            <AvatarImage src="/Man.jpg" alt="Man" />
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
      <DialogContent className="px-1.5">
        <DialogHeader className="px-[18px]">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-8 border-primary-25 bg-primary-50">
            <Users className="h-5 w-5 text-primary-600" />
          </div>

          <div className="flex flex-col gap-x-2">
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
