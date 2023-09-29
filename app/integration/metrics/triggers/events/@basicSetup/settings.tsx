"use client";

import * as React from "react";

import { SearchFieldCard } from "@/components/search-field-card";
import { SettingsMachineContext } from "@/machines";

export const Settings = () => {
  const settings = SettingsMachineContext.useSelector(
    (state) => state.context.settings
  );

  const props = {
    isAdvanced: false,
  };

  return (
    <>
      {settings.map((setting) => (
        <React.Fragment key={setting.id}>
          {setting.for === "search" && (
            <SearchFieldCard {...props} {...setting} />
          )}
        </React.Fragment>
      ))}
    </>
  );
};
