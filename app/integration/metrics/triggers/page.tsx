"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { AlertCircle, MoreHorizontal, Plus2 } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Badge,
  Button,
  CloseButton,
  IconButton,
} from "@/components/ui";

function Triggers() {
  const { push } = useRouter();

  return (
    <div className="px-[88px] py-8">
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">Triggers</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can create specific events that will trigger
            workflows through your integration. Connect the API endpoint that
            you will use for each trigger, set them up, and configure/design the
            settings users will fill out.
          </AlertDescription>
          <Link
            className="mt-3 inline-block text-sm font-semibold text-gray-500 hover:underline"
            href="#"
          >
            Learn more
          </Link>
        </AlertContent>
        <CloseButton />
      </Alert>

      <div className="mt-6 flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-gray-600">Triggers</h3>
          <p className="text-sm">View and manage your triggers</p>
        </div>

        <Button
          onClick={() => push("/integration/metrics/triggers?layout=form")}
        >
          <Plus2 />
          New Trigger
        </Button>
      </div>

      <table className="mt-6 w-full table-auto border-separate border-spacing-y-2.5">
        <tbody>
          <tr className="rounded-lg shadow-xs">
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="text-sm font-medium text-gray-900">
                Form Trigger 1
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                New form is submitted
              </p>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="text-sm font-medium text-gray-900">3 Events</h4>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <Badge visual="success">Test Successful</Badge>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <IconButton variant="ghost" visual="gray">
                <MoreHorizontal className="text-gray-500" />
              </IconButton>
            </td>
          </tr>
          <tr className="rounded-lg shadow-xs">
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="text-sm font-medium text-gray-900">
                Form Trigger 2
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                New form is submitted
              </p>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="text-sm font-medium text-gray-900">3 Events</h4>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <Badge visual="success">Test Successful</Badge>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <IconButton variant="ghost" visual="gray">
                <MoreHorizontal className="text-gray-500" />
              </IconButton>
            </td>
          </tr>
          <tr className="rounded-lg shadow-xs">
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="text-sm font-medium text-gray-900">
                Form Trigger 3
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                New form is submitted
              </p>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="text-sm font-medium text-gray-900">3 Events</h4>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <Badge visual="success">Test Successful</Badge>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <IconButton variant="ghost" visual="gray">
                <MoreHorizontal className="text-gray-500" />
              </IconButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Triggers;
