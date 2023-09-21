"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { AlertCircle } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { isNull } from "@/lib/utils";

export default function Layout({
  first,
  second,
  third,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
  third: React.ReactNode;
}) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const value = searchParams.get("tab");

  const onValueChange = (value: string) => {
    push(`/integration/metrics/connect?tab=${value}`);
  };

  return (
    <div className="px-[88px] py-8">
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">General Information</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can make changes to general information about
            your integration such as its name, description, categories, tags,
            logo, and images/screenshots. These details are required in order to
            publish your integration to our marketplace
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

      <Tabs
        className="mt-3"
        value={isNull(value) ? "first" : value}
        onValueChange={onValueChange}
      >
        <TabsList className="w-full justify-start px-0">
          <TabsTrigger value="first">Connect Data</TabsTrigger>
          <TabsTrigger value="second">Configure Authentication</TabsTrigger>
          <TabsTrigger value="third">Test Authentication</TabsTrigger>
        </TabsList>
        <TabsContent className="pt-6" value="first">
          {first}
        </TabsContent>
        <TabsContent className="pt-6" value="second">
          {second}
        </TabsContent>
        <TabsContent className="pt-6" value="third">
          {third}
        </TabsContent>
      </Tabs>
    </div>
  );
}
