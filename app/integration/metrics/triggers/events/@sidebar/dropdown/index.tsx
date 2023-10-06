import { ChevronLeft, PlayCircle, Search } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { SettingsMachineContext } from "@/machines";
import SetupTab from "./setup-tab";
import SourceTab from "./source-tab";
import TestTab from "./test-tab";

function Panels({
  sourceTab,
  setupTab,
  testTab,
}: {
  sourceTab?: React.ReactNode;
  setupTab?: React.ReactNode;
  testTab?: React.ReactNode;
}) {
  const [, send] = SettingsMachineContext.useActor();

  return (
    <Tabs
      className="relative h-[calc(theme(height.full)-52px)]"
      defaultValue="source"
    >
      <TabsList className="grid h-11 w-full grid-cols-3 justify-between">
        <TabsTrigger value="source">Source</TabsTrigger>
        <TabsTrigger value="setup">Setup</TabsTrigger>
        <TabsTrigger value="test">Test</TabsTrigger>
      </TabsList>
      <button
        className="absolute -right-4 top-7 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white shadow-xs transition duration-200 hover:border-2 focus-visible:outline-none"
        onClick={() => send("TOGGLE")}
      >
        <ChevronLeft className="flex-none text-gray-500" />
      </button>
      <TabsContent
        className="scrollbar-thumb h-[calc(theme(height.full)-theme(height.11))] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
        value="source"
      >
        {sourceTab}
      </TabsContent>
      <TabsContent
        className="scrollbar-thumb h-[calc(theme(height.full)-theme(height.11))] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
        value="setup"
      >
        {setupTab}
      </TabsContent>
      <TabsContent
        className="scrollbar-thumb h-[calc(theme(height.full)-theme(height.11))] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
        value="test"
      >
        {testTab}
      </TabsContent>
    </Tabs>
  );
}

export default function Page() {
  const [state] = SettingsMachineContext.useActor();

  const show = state.matches("editing dropdown");

  return (
    show && (
      <div className="fixed inset-y-0 left-0 top-[70px] z-40 h-[calc(theme(height.full)-70px)] w-[370px] border-r border-gray-200 bg-white">
        <div className="flex items-center justify-between p-5 pb-2">
          <div className="inline-flex flex-none items-center gap-x-2 text-base font-medium text-gray-900 focus-visible:outline-none">
            <Search className="h-[18px] w-[18px] flex-none" />
            Search
          </div>
          <button className="inline-flex items-center justify-center gap-x-2 text-sm font-semibold text-primary-500 focus-visible:outline-none">
            <PlayCircle className="h-[15px] w-[15px]" />
            Overview
          </button>
        </div>
        <Panels
          setupTab={<SetupTab />}
          sourceTab={<SourceTab />}
          testTab={<TestTab />}
        />
      </div>
    )
  );
}
