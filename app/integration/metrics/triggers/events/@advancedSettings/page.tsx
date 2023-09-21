"use client";

import { HelpCircle, Plus2 } from "@/components/icons";
import { Button } from "@/components/ui";

export default function AdvancedSettings() {
  return (
    <div className="mt-4 h-[472px] rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="flex items-center gap-x-2 text-sm font-medium text-gray-700">
        Advanced Settings
        <button className="flex-none text-gray-400 focus-visible:outline-none">
          <HelpCircle />
        </button>
        <span className="text-gray-400">(optional)</span>
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Provide advanced settings that users can access by clicking “Show
        Advanced Settings” when they set up your trigger.
      </p>
      <Button className="mt-6 w-full" variant="outlined" visual="gray">
        <Plus2 />
        Add field
      </Button>
    </div>
  );
}
