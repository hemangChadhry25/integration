"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { EVENTS_PAGE_PATHNAME } from "@/lib/constants";
import { isNull } from "@/lib/utils";

export default function Layout({
  children,
  generalTab,
  testTab,
}: {
  children: React.ReactNode;
  generalTab: React.ReactNode;
  testTab: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const layout = searchParams.get("layout");
  const tab = searchParams.get("tab");

  const onValueChange = (value: string) => {
    return value === "events"
      ? push("/integration/metrics/triggers/events")
      : push(`/integration/metrics/triggers?layout=form&tab=${value}`);
  };

  if (pathname === EVENTS_PAGE_PATHNAME) {
    return (
      <div className="px-[88px] py-8">
        <h1 className="text-base font-semibold text-gray-600">New Trigger</h1>
        <Tabs className="mt-3" value="events" onValueChange={onValueChange}>
          <TabsList className="w-full justify-start px-0">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="test">Test</TabsTrigger>
          </TabsList>
          <TabsContent className="pt-6" value="general">
            {generalTab}
          </TabsContent>
          <TabsContent className="pt-6" value="events">
            {children}
          </TabsContent>
          <TabsContent className="pt-6" value="test">
            {testTab}
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <>
      {layout === "form" ? (
        <div className="px-[88px] py-8">
          <h1 className="text-base font-semibold text-gray-600">New Trigger</h1>
          <Tabs
            className="mt-3"
            value={isNull(tab) ? "general" : tab}
            onValueChange={onValueChange}
          >
            <TabsList className="w-full justify-start px-0">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="test">Test</TabsTrigger>
            </TabsList>
            <TabsContent className="pt-6" value="general">
              {generalTab}
            </TabsContent>
            <TabsContent className="pt-6" value="events"></TabsContent>
            <TabsContent className="pt-6" value="test">
              {testTab}
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
