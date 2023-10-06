import { createActorContext } from "@xstate/react";
import { assign, createMachine } from "xstate";

interface Setting {
  id: number;
}

export interface SearchSettings extends Setting {
  for: "search";
  settings: {
    source?: {
      dataset: string;
      category: string;
      metrics: string[];
      sort: "asc" | "desc";
    };
    setup?: {
      label: string;
      placeholder: string;
      tooltip: string;
      singleOrMultiSelect: "multiple" | "single";
      optionalField: boolean;
      hint: string;
      limitSelections?: boolean | undefined;
    };
  };
}

export interface DropdownSettings extends Setting {
  for: "dropdown";
  settings: {
    source?: {
      dataset: string;
      category: string;
      metrics: string[];
      sort: "asc" | "desc";
    };
    setup?: {
      fieldType: string;
      fieldLabel: string;
      singleOrMultiSelect: "single" | "multiple";
      optionalField: boolean;
      placeholderOrDefaultValue: "placeholder" | "defaultValue";
      placeholder: string;
      hint: string;
      limitSelections?: boolean;
    };
  };
}

export interface ToggleSettings extends Setting {
  for: "toggle";
  settings: {
    source?: {
      dataset: string;
      category: string;
      metric: string;
    };
    setup?: {
      fieldLabel: string;
      hint: string;
      tooltip: string;
    };
  };
}

export const settingsMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5SzAF1QSwHZVgYgEkA5AZQFEAlAFQG0AGAXUVAAcB7WDTNrZkAD0QBmAJwAmAHQB2ABxSALCLpj5ANgCsYseqkAaEAE9EYuvIlK6y1UKkn5QsQEYAvs-0p02XHgCqABQARAEEqMnomJBB2Tm5eSMEEIRkRCUcbRUU6R3k6JP0jBEc6GQl5dUs0xxlVZUdVFzcQD0wcfCCAYSoCADUQsMY+aK4MHj4EpLN5GUcVKtEs+XzEGdd3NBbvALIOrt7Q8MGOYdH44Sl1VMURGXtzoSF5OqWEGSEL23KRe6FVKRqxVZNdZefBkAIEKgAWnIQQo7QAEgdIkNYmNEFI9IZEOpshIbOV1DZZKoRJpAc0QXgwRDIQEKAB5QL0gDqRCRrCOqNOCAxz3qdAkMm0dFUJNU8ikdRE5OBrSp4KhVHpAHFlQAZfoRDkxEZxUAJXlYnl0KQSMTnYpZcpSJLqGWeOUUMgAWXp3U1hx1J316MxBRsAo0lglVXUqhuantG1gEkgwxwAAIUABDABOAGMABZ4JWqjXsqKc3VohDqHLSBQia6EyXFP3Y3H4ug14mkgGNCmtWMQeNQBMQVNsFgQNgAdywOZV6o9yKL3oE2PLGKuMhrRTkfKKguFopE4slJKjIO7vYTqDYUCgABswJO8zPtcc9QvS0vK9WbOv68bTebyjIrRNW1XEaLA2AgOA+E7XBPSfEsxBEZ4xFePFylyUl1AA8VVyPLs4w2WCuR9Y0UhUKsvikOg9xmGRnjLSQTEsWxLFeMRVHbNYHVwE8NiTMA0yzQji25fEJDrRRrFsOoRTomxBTQtRFCERwig4oEuJjfCvH7QdhzHZ8UWE4ifjMUxyPqbIpGo1Q+QePEKjqTRZBtGRcO4rTE3PS8byE+dxgUCQSXSeQlLSawbKNG0BQtE1kI0RxCTtECgA */
    context: {
      settings: [],
      advancedSettings: [],
      currentId: undefined,
      currentAdvanced: undefined,
    },
    id: "settings",
    initial: "editing",
    states: {
      editing: {},
      "editing search": {
        on: {
          TOGGLE: {
            target: "editing",
            actions: "resetCurrent",
          },
        },
        entry: "setCurrent",
      },
      "editing dropdown": {
        on: {
          TOGGLE: {
            target: "editing",
            actions: "resetCurrent",
          },
        },
        entry: "setCurrent",
      },
      "editing toggle": {
        on: {
          TOGGLE: {
            target: "editing",
            actions: "resetCurrent",
          },
        },
        entry: "setCurrent",
      },
    },
    on: {
      INSERT: {
        actions: "insert",
        internal: true,
      },
      UPDATE: {
        actions: "update",
        internal: true,
      },
      DUPLICATE: {
        actions: "duplicate",
        internal: true,
      },
      "EDIT-SEARCH": {
        target: ".editing search",
        cond: "ifSearch",
        internal: true,
      },
      "EDIT-DROPDOWN": {
        target: ".editing dropdown",
        cond: "ifDropdown",
        internal: true,
      },
      "EDIT-TOGGLE": {
        target: ".editing toggle",
        cond: "ifToggle",
        internal: true,
      },
      DELETE: [
        {
          target: ".editing",
          cond: "hasSameCurrentId",
          actions: ["delete", "resetCurrent"],
          internal: true,
        },
        {
          actions: "delete",
          internal: true,
        },
      ],
      REORDER: {
        actions: "reorder",
        internal: true,
      },
    },
    schema: {
      events: {} as
        | { type: "" }
        | {
            type: "DUPLICATE";
            targetSettingId: number;
            settingId: number;
            advanced: boolean;
          }
        | {
            type: "INSERT";
            value:
              | Omit<SearchSettings, "settings">
              | Omit<DropdownSettings, "settings">
              | Omit<ToggleSettings, "settings">;
            advanced: boolean;
          }
        | { type: "DELETE"; settingId: number; advanced: boolean }
        | { type: "TOGGLE" }
        | {
            type: "UPDATE";
            value: SearchSettings | DropdownSettings | ToggleSettings;
            advanced: boolean;
          }
        | {
            type: "EDIT-SEARCH";
            settingId: number;
            advanced: boolean;
          }
        | {
            type: "EDIT-DROPDOWN";
            settingId: number;
            advanced: boolean;
          }
        | {
            type: "EDIT-TOGGLE";
            settingId: number;
            advanced: boolean;
          }
        | {
            type: "REORDER";
            advanced: boolean;
            settings: (SearchSettings | DropdownSettings | ToggleSettings)[];
          },

      context: {} as {
        settings: (SearchSettings | DropdownSettings | ToggleSettings)[];
        advancedSettings: (
          | SearchSettings
          | DropdownSettings
          | ToggleSettings
        )[];
        currentId: number | undefined;
        currentAdvanced: boolean | undefined;
      },
    },
    tsTypes: {} as import("./settings-machine.typegen").Typegen0,
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {
      setCurrent: assign({
        currentId: (context, event) => event.settingId,
        currentAdvanced: (context, event) => event.advanced,
      }),
      resetCurrent: assign({
        currentId: undefined,
        currentAdvanced: undefined,
      }),

      delete: assign({
        settings: (context, event) =>
          event.advanced
            ? context.settings
            : context.settings.filter(
                (setting) => setting.id !== event.settingId
              ),
        advancedSettings: (context, event) =>
          event.advanced
            ? context.advancedSettings.filter(
                (setting) => setting.id !== event.settingId
              )
            : context.advancedSettings,
      }),

      insert: assign({
        settings: (context, event) =>
          event.advanced
            ? context.settings
            : [...context.settings, { ...event.value, settings: {} }],
        advancedSettings: (context, event) =>
          event.advanced
            ? [...context.advancedSettings, { ...event.value, settings: {} }]
            : context.advancedSettings,
      }),

      update: assign({
        settings: (context, event) =>
          event.advanced
            ? context.settings
            : (context.settings.map((setting) =>
                setting.id === event.value.id
                  ? {
                      ...setting,
                      ...event.value,
                      settings: {
                        ...setting.settings,
                        ...event.value.settings,
                      },
                    }
                  : setting
              ) as (DropdownSettings | SearchSettings | ToggleSettings)[]),
        advancedSettings: (context, event) =>
          event.advanced
            ? (context.advancedSettings.map((setting) =>
                setting.id === event.value.id
                  ? {
                      ...setting,
                      ...event.value,
                      settings: {
                        ...setting,
                        ...event.value.settings,
                      },
                    }
                  : setting
              ) as (DropdownSettings | SearchSettings | ToggleSettings)[])
            : context.advancedSettings,
      }),

      duplicate: assign({
        settings: (context, event) => {
          if (event.advanced) {
            return context.settings;
          }
          const setting = context.settings.find(
            (setting) => setting.id === event.targetSettingId
          );
          return setting
            ? [...context.settings, { ...setting, id: event.settingId }]
            : context.settings;
        },
        advancedSettings: (context, event) => {
          if (event.advanced) {
            const setting = context.advancedSettings.find(
              (setting) => setting.id === event.targetSettingId
            );
            return setting
              ? [
                  ...context.advancedSettings,
                  { ...setting, id: event.settingId },
                ]
              : context.advancedSettings;
          }
          return context.advancedSettings;
        },
      }),

      reorder: assign({
        advancedSettings: (context, event) =>
          event.advanced ? event.settings : context.advancedSettings,
        settings: (context, event) =>
          event.advanced ? context.settings : event.settings,
      }),
    },
    guards: {
      ifSearch: (context, event) => {
        if (event.advanced) {
          const setting = context.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.for === "search" : false;
        }

        const setting = context.settings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.for === "search" : false;
      },

      ifDropdown: (context, event) => {
        if (event.advanced) {
          const setting = context.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.for === "dropdown" : false;
        }

        const setting = context.settings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.for === "dropdown" : false;
      },

      ifToggle: (context, event) => {
        if (event.advanced) {
          const setting = context.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.for === "toggle" : false;
        }

        const setting = context.settings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.for === "toggle" : false;
      },

      hasSameCurrentId: (context, event) =>
        context.currentId === event.settingId,
    },
    delays: {},
  }
);

export const SettingsMachineContext = createActorContext(settingsMachine);
