"use client";

import * as React from "react";

import { SettingsMachineContext } from "@/machines";
import { ReorderGroup, ReorderItem } from "@/components/ui";
import { SearchFieldDraggableCard } from "@/components/search-field-draggable-card";
import { DropdownDraggableCard } from "@/components/dropdown-draggable-card";
import { ToggleDraggableCard } from "@/components/toggle-draggable-card";

export const Settings = (props: { advanced: boolean }) => {
  const settings = SettingsMachineContext.useSelector((state) =>
    props.advanced ? state.context.advancedSettings : state.context.settings
  );
  const [, send] = SettingsMachineContext.useActor();

  return (
    <ReorderGroup
      className="space-y-6"
      values={settings}
      onReorder={(values) =>
        send({ type: "REORDER", advanced: props.advanced, settings: values })
      }
    >
      {settings.map((setting) => (
        <ReorderItem value={setting} key={setting.id}>
          {({ dragControls }) => (
            <>
              {setting.for === "search" && (
                <SearchFieldDraggableCard
                  onDrag={(event) => dragControls.start(event)}
                  {...props}
                  {...setting}
                />
              )}
              {setting.for === "dropdown" && (
                <DropdownDraggableCard
                  onDrag={(event) => dragControls.start(event)}
                  {...props}
                  {...setting}
                />
              )}
              {setting.for === "toggle" && (
                <ToggleDraggableCard
                  onDrag={(event) => dragControls.start(event)}
                  {...props}
                  {...setting}
                />
              )}
            </>
          )}
        </ReorderItem>
      ))}
    </ReorderGroup>
  );
};
