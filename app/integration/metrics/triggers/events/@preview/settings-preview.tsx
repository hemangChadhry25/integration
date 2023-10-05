import React from "react";

import { SearchFieldPreview } from "@/components/search-field-preview";
import { SettingsMachineContext } from "@/machines";
import { DropdownPreview } from "@/components/dropdown-preview";
import { TogglePreview } from "@/components/toggle-preview";

export const SettingsPreview = () => {
  const settings = SettingsMachineContext.useSelector(
    (state) => state.context.settings
  );

  return (
    <div className="space-y-6">
      {settings.map((setting) => (
        <React.Fragment key={setting.id}>
          {setting.for === "search" && <SearchFieldPreview {...setting} />}
          {setting.for === "dropdown" && <DropdownPreview {...setting} />}
          {setting.for === "toggle" && <TogglePreview {...setting} />}
        </React.Fragment>
      ))}
    </div>
  );
};
