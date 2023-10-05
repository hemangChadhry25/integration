import React from "react";

import { PreviewMachineContext, SettingsMachineContext } from "@/machines";
import { isEmpty } from "@/lib/utils";
import { SearchFieldPreview } from "@/components/search-field-preview";
import { DropdownPreview } from "@/components/dropdown-preview";
import { TogglePreview } from "@/components/toggle-preview";

export const AdvancedSettingsPreview = () => {
  const [state, send] = PreviewMachineContext.useActor();
  const settings = SettingsMachineContext.useSelector(
    (state) => state.context.advancedSettings
  );

  if (isEmpty(settings)) {
    return null;
  }

  if (state.matches("active.hiding")) {
    return (
      <button
        className="text-sm font-semibold text-primary-500 focus:outline-none"
        onClick={() => send("SHOW")}
      >
        Show Advanced
      </button>
    );
  }

  return (
    <div className="space-y-6">
      {settings.map((setting) => (
        <React.Fragment key={setting.id}>
          {setting.for === "search" && <SearchFieldPreview {...setting} />}
          {setting.for === "dropdown" && <DropdownPreview {...setting} />}
          {setting.for === "toggle" && <TogglePreview {...setting} />}
        </React.Fragment>
      ))}
      <button
        className="text-sm font-semibold text-primary-500 focus:outline-none"
        onClick={() => send("HIDE")}
      >
        Hide
      </button>
    </div>
  );
};
