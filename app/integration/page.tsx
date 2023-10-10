"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";

import {
  AlertCircle,
  BarChartSquare,
  Belling,
  ChevronDown,
  Clock,
  HelpCircle,
  Home,
  LifeBouy,
  LogOut,
  Logo,
  MoreHorizontal,
  Plus2,
  Search,
  Settings,
  ShieldCharged,
  ThreeLayers,
  User,
  UserPlus,
  Users,
  X2,
} from "@/components/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  HelperText,
  Input,
  Label,
  SearchField,
  SearchFieldButton,
  SearchFieldInput,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  IconButton,
  InputGroup,
  InputRightElement,
  ErrorMessage,
} from "@/components/ui";
import { RemainCharacters } from "@/components/remain-characters";
import { hookFormHasError } from "@/lib/utils";

const schema = z.object({
  name: z.string().max(30, "Must contain at most 30 character(s)"),
  description: z.string().max(200, "Must contain at most 200 character(s)"),
});

interface FormValues {
  name: string;
  description: string;
}

function Overview() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {
    console.log(variables);
    // make a function to in redux toolkit to create the integration in the database later we we make a interceptor
  };

  return (
    <>
      <nav className="fixed inset-x-0 left-[70px] z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px] py-[15px]">
        <Breadcrumb spacing="0.5rem">
          <BreadcrumbItem>
            <BreadcrumbLink href="/integrations">Integrations</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/integrations/overview">
              My Integrations
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="flex items-center gap-x-3">
          <span className="text-sm font-semibold text-gray-800">Sort by</span>
          <Button
            className="w-[148px] justify-between"
            visual="gray"
            variant="outlined"
          >
            Name <ChevronDown className="h-5 w-5" />
          </Button>
          <Button
            className="w-[200px] justify-between"
            visual="gray"
            variant="outlined"
          >
            All Integrations <ChevronDown className="h-5 w-5" />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus2 />
                Create Integration
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[726px]">
              <DialogHeader className="flex-row justify-between">
                <DialogTitle className="text-gray-900">
                  New integration
                </DialogTitle>

                <DialogClose asChild>
                  <IconButton
                    className="h-6 w-6 text-gray-500"
                    variant="ghost"
                    visual="gray"
                  >
                    <X2 />
                  </IconButton>
                </DialogClose>
              </DialogHeader>

              <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-1.5">
                  <Label className="text-gray-700" htmlFor="name" size="sm">
                    Name
                  </Label>
                  <div className="flex items-center justify-between">
                    <HelperText className="leading-5">
                      This name will appear in our marketplace.
                    </HelperText>
                    <HelperText className="leading-5">
                      <RemainCharacters
                        control={control}
                        name="name"
                        max={30}
                      />
                    </HelperText>
                  </div>
                  <InputGroup>
                    <Input
                      id="name"
                      isInvalid={hookFormHasError({ errors, name: "name" })}
                      {...register("name")}
                    />
                    <InputRightElement>
                      {hookFormHasError({ errors, name: "name" }) && (
                        <AlertCircle className="text-error-500" />
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <HookFormErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => (
                      <ErrorMessage size="sm">{message}</ErrorMessage>
                    )}
                  />
                </div>

                <div className="mt-6 space-y-1.5">
                  <Label className="text-gray-700" htmlFor="desc" size="sm">
                    Description{" "}
                    <span className="text-gray-400">(optional)</span>
                  </Label>
                  <div className="flex items-center justify-between">
                    <HelperText className="leading-5">
                      Provide a short description that describes what this
                      integration does.
                    </HelperText>
                    <HelperText className="leading-5">
                      <RemainCharacters
                        control={control}
                        name="description"
                        max={200}
                      />
                    </HelperText>
                  </div>
                  <Textarea
                    className="h-[116px]"
                    id="desc"
                    isInvalid={hookFormHasError({
                      errors,
                      name: "description",
                    })}
                    {...register("description")}
                  />
                  <HookFormErrorMessage
                    errors={errors}
                    name="description"
                    render={({ message }) => (
                      <ErrorMessage size="sm">{message}</ErrorMessage>
                    )}
                  />
                </div>

                <div className="mt-12 flex justify-end">
                  <Button type="submit" disabled={!isValid}>
                    Create Integration
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-[70px] top-[70px] z-20 w-[224px] overflow-y-auto border-r border-gray-200 bg-gray-50 p-[15px] pb-0 scrollbar-thin scrollbar-thumb-rounded-lg">
        <ul className="grid gap-2">
          <li>
            <Link
              className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 focus-visible:outline-none"
              href="/dashboard"
            >
              <ShieldCharged />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md bg-primary-50 px-3 py-2 text-sm font-semibold leading-6 text-primary-500 focus-visible:outline-none"
              href="/integration"
            >
              <ShieldCharged />
              My Integrations
            </Link>
          </li>
        </ul>
      </nav>

      <main className="scrollbar-rounded-lg relative min-h-screen overflow-y-auto bg-gray-50 pl-[294px] pt-[70px] scrollbar-thin">
        <div className="p-8">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-base font-semibold text-gray-600">
                3 Integrations
              </h2>
              <p className="text-sm text-gray-500">Description text here</p>
            </div>

            <SearchField className="w-[248px]">
              <SearchFieldInput size="lg" visual="gray" placeholder="Search" />
              <SearchFieldButton size="lg">
                <Search className="h-5 w-5" />
              </SearchFieldButton>
            </SearchField>
          </div>

          <div className="mt-6">
            <table className="w-full table-fixed border-separate border-spacing-y-2.5">
              <caption className="sr-only">Integration</caption>
              <tbody>
                <tr className="h-20 rounded-lg bg-white shadow-xs">
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    <div className="relative h-10 w-10 overflow-hidden rounded-[4px] border border-gray-200 bg-white">
                      <Image src="/image.png" sizes="50vw" alt="Image" fill />
                    </div>
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    MyIntegration1
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    Version 1.0.0
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    <Badge visual="warning">
                      <Clock className="h-3 w-3" />
                      In Review
                    </Badge>
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm text-gray-500 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    16 hours ago
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm text-gray-500 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <IconButton
                            className="h-8 w-8 text-gray-500"
                            variant="ghost"
                            visual="gray"
                          >
                            <MoreHorizontal />
                          </IconButton>
                        </TooltipTrigger>
                        <TooltipContent className="font-semibold">
                          Options
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                </tr>

                <tr className="h-20 rounded-lg bg-white shadow-xs">
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    <div className="relative h-10 w-10 overflow-hidden rounded-[4px] border border-gray-200 bg-white">
                      <Image src="/image.png" sizes="50vw" alt="Image" fill />
                    </div>
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    MyIntegration1
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    Version 1.0.0
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm font-medium text-gray-900 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    <Badge visual="warning">
                      <Clock className="h-3 w-3" />
                      In Review
                    </Badge>
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm text-gray-500 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    16 hours ago
                  </td>
                  <td className="border-y border-gray-200 px-3 align-middle text-sm text-gray-500 first:rounded-l-lg first:border-l first:pl-6 last:rounded-r-lg last:border-r last:pr-6 last:text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <IconButton
                            className="h-8 w-8 text-gray-500"
                            variant="ghost"
                            visual="gray"
                          >
                            <MoreHorizontal />
                          </IconButton>
                        </TooltipTrigger>
                        <TooltipContent className="font-semibold">
                          Options
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default Overview;
