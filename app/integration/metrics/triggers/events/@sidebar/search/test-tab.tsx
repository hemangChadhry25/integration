"use client";

import Link from "next/link";

import { CheckCircle, ChevronDown } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@/components/ui";
import { useToggle } from "@/lib/hooks";

const TestTab = () => {
  const [show, { on }] = useToggle();

  return (
    <div className="p-5">
      <p className="text-sm text-gray-500">
        Before testing, make sure that you have configured ALL required fields
        and have sample data inputted into the setting.
      </p>
      <Button className="mt-6" onClick={on}>
        {show ? "Test Again" : "Test Setting"}
      </Button>
      {show && (
        <Alert className="mt-6" variant="success">
          <AlertIcon>
            <CheckCircle className="h-5 w-5" />
          </AlertIcon>
          <AlertContent>
            <AlertTitle>Test Successful</AlertTitle>
            <AlertDescription className="text-gray-500">
              All required fields for each step have been filled out! All
              inputted data has also passed to the correct API endpoint(s) and
              is working as expected.
            </AlertDescription>
            <div className="mt-3">
              <Link
                className="inline-flex items-center gap-x-2 text-sm font-semibold text-gray-500 hover:underline focus-visible:outline-none"
                href="/"
              >
                Learn more
                <ChevronDown />
              </Link>
            </div>
          </AlertContent>
        </Alert>
      )}
    </div>
  );
};

export default TestTab;
