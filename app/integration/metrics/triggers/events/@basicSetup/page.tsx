"use client";

import { Plus2 } from "@/components/icons";
import { Button } from "@/components/ui";

export default function BasicSetup() {
  return (
    <div className="h-[472px] rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-sm font-medium text-gray-700">Basic Setup</h2>
      <p className="mt-2 text-sm text-gray-500">
        Provide basic settings that are top priority when users set up your
        trigger.
      </p>
      <Button className="mt-6 w-full" variant="outlined" visual="gray">
        <Plus2 />
        Add field
      </Button>
    </div>
  );
}
