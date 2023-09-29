"use client";

import dynamic from "next/dynamic";

import { Plus2 } from "@/components/icons";
import { Button } from "@/components/ui";
import { Settings } from "./settings";
import { ToggleMachineContext } from "@/machines";

const CommandPaletteModal = dynamic(() => import("./command-palette-modal"));

export function BasicSetupSegment({ settings }: { settings: React.ReactNode }) {
  const [, send] = ToggleMachineContext.useActor();

  return (
    <div className="min-h-[472px] space-y-6 rounded-lg border border-gray-200 bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-gray-700">Basic Setup</h2>
        <p className="text-sm text-gray-500">
          Provide basic settings that are top priority when users set up your
          trigger.
        </p>
      </div>

      {settings}

      <Button
        className="w-full"
        variant="outlined"
        visual="gray"
        onClick={() => send("TOGGLE")}
      >
        <Plus2 />
        Add field
      </Button>

      <CommandPaletteModal />
    </div>
  );
}

export default function BasicSetup() {
  return (
    <ToggleMachineContext.Provider>
      <BasicSetupSegment settings={<Settings />} />
    </ToggleMachineContext.Provider>
  );
}
