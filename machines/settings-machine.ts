import { createActorContext } from "@xstate/react";
import { assign, createMachine } from "xstate";

interface Setting {
  id: number;
  preview: boolean;
}

export interface Search extends Setting {
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

export const settingsMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5SzAF1QSwHZVgYgEkA5AZQFEAlAFQG0AGAXUVAAcB7WDTNrZkAD0QBmAJwAmAHQB2ABxSALCLpj5ANgCsYseqkAaEAE9EYuvIlK6y1UKkn5QsQEYAvs-0p02XHgCqABQARAEEqMnomJBB2Tm5eSMEEIRkRCUcbRUU6R3k6JP0jBEc6GQl5dUs0xxlVZUdVFzcQD0wcfCCAYSoCADUQsMY+aK4MHj4EpLN5GUcVKtEs+XzEGdd3NBbvALIOrt7Q8MGOYdH44Sl1VMURGXtzoSF5OqWEGSEL23KRe6FVKRqxVZNdZefBkAIEKgAWnIQQo7QAEgdIkNYmNEFI9IZEOpshIbOV1DZZKoRJpAc0QXgwRDIQEKAB5QL0gDqRCRrCOqNOCAxz3qdAkMm0dFUJNU8ikdRE5OBrSp4KhVHpAHFlQAZfoRDkxEZxUAJXlYnl0KQSMTnYpZcpSJLqGWeOUUMgAWXp3U1hx1J316MxBRsAo0lglVXUqhuantG1gEkgwxwAAIUABDABOAGMABZ4JWqjXsqKc3VohDqHLSBQia6EyXFP3Y3H4ug14mkgGNCmtWMQeNQBMQVNsFgQNgAdywOZV6o9yKL3oE2PLGKuMhrRTkfKKguFopE4slJKjIO7vYTqDYUCgABswJO8zPtcc9QvS0vK9WbOv68bTebyjIrRNW1XEaLA2AgOA+E7XBPSfEsxBEZ4xFePFylyUl1AA8VVyPLs4w2WCuR9Y0UhUKsvikOg9xmGRnjLSQTEsWxLFeMRVHbNYHVwE8NiTMA0yzQji25fEJDrRRrFsOoRTomxBTQtRFCERwig4oEuJjfCvH7QdhzHZ8UWE4ifjMUxyPqbIpGo1Q+QePEKjqTRZBtGRcO4rTE3PS8byE+dxgUCQSXSeQlLSawbKNG0BQtE1kI0RxCTtECgA */
    context: {
      settings: [],
      advancedSettings: [],
      currentId: undefined,
      isCurrentAdvanced: undefined,
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
      ACTIVATE: {
        actions: "active",
        internal: true,
      },
      DEACTIVATE: {
        actions: "deactivate",
        internal: true,
      },
      DUPLICATE: {
        actions: "duplicate",
        internal: true,
      },
      "EDIT-SEARCH": {
        target: ".editing search",
        cond: "ifSearch",
        actions: "setCurrent",
        internal: true,
      },
      REMOVE: [
        {
          target: ".editing",
          cond: "hasSameCurrentId",
          actions: ["remove", "resetCurrent"],
          internal: true,
        },
        {
          actions: "remove",
          internal: true,
        },
      ],
    },
    schema: {
      events: {} as
        | { type: "" }
        | { type: "ACTIVATE"; settingId: number; isAdvanced: boolean }
        | { type: "DEACTIVATE"; settingId: number; isAdvanced: boolean }
        | {
            type: "DUPLICATE";
            targetSettingId: number;
            settingId: number;
            isAdvanced: boolean;
          }
        | {
            type: "INSERT";
            value: Omit<Omit<Search, "preview">, "settings">;
            isAdvanced: boolean;
          }
        | { type: "REMOVE"; settingId: number; isAdvanced: boolean }
        | { type: "TOGGLE" }
        | {
            type: "UPDATE";
            value: Omit<Search, "preview">;
            isAdvanced: boolean;
          }
        | {
            type: "EDIT-SEARCH";
            settingId: number;
            isAdvanced: boolean;
          },
      context: {} as {
        settings: Search[];
        advancedSettings: Search[];
        currentId: number | undefined;
        isCurrentAdvanced: boolean | undefined;
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
        isCurrentAdvanced: (context, event) => event.isAdvanced,
      }),

      resetCurrent: assign({
        currentId: undefined,
        isCurrentAdvanced: undefined,
      }),

      remove: assign({
        settings: (context, event) =>
          event.isAdvanced
            ? context.settings
            : context.settings.filter(
                (setting) => setting.id !== event.settingId
              ),
        advancedSettings: (context, event) =>
          event.isAdvanced
            ? context.advancedSettings.filter(
                (setting) => setting.id !== event.settingId
              )
            : context.advancedSettings,
      }),

      insert: assign({
        settings: (context, event) =>
          event.isAdvanced
            ? context.settings
            : [
                ...context.settings,
                { ...event.value, preview: true, settings: {} },
              ],
        advancedSettings: (context, event) =>
          event.isAdvanced
            ? [
                ...context.advancedSettings,
                { ...event.value, preview: true, settings: {} },
              ]
            : context.advancedSettings,
      }),

      active: assign({
        settings: (context, event) =>
          event.isAdvanced
            ? context.settings
            : context.settings.map((setting) =>
                setting.id === event.settingId
                  ? { ...setting, preview: true }
                  : setting
              ),
        advancedSettings: (context, event) =>
          event.isAdvanced
            ? context.advancedSettings.map((setting) =>
                setting.id === event.settingId
                  ? { ...setting, preview: true }
                  : setting
              )
            : context.advancedSettings,
      }),

      deactivate: assign({
        settings: (context, event) =>
          event.isAdvanced
            ? context.settings
            : context.settings.map((setting) =>
                setting.id === event.settingId
                  ? { ...setting, preview: false }
                  : setting
              ),
        advancedSettings: (context, event) =>
          event.isAdvanced
            ? context.advancedSettings.map((setting) =>
                setting.id === event.settingId
                  ? { ...setting, preview: false }
                  : setting
              )
            : context.advancedSettings,
      }),

      update: assign({
        settings: (context, event) =>
          event.isAdvanced
            ? context.settings
            : context.settings.map((setting) =>
                setting.id === event.value.id
                  ? { ...setting, ...event.value }
                  : setting
              ),
        advancedSettings: (context, event) =>
          event.isAdvanced
            ? context.advancedSettings.map((setting) =>
                setting.id === event.value.id
                  ? { ...setting, ...event.value }
                  : setting
              )
            : context.advancedSettings,
      }),

      duplicate: assign({
        settings: (context, event) => {
          if (event.isAdvanced) {
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
          if (event.isAdvanced) {
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
    },
    services: {},
    guards: {
      ifSearch: (context, event) => {
        if (event.isAdvanced) {
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

      hasSameCurrentId: (context, event) =>
        context.currentId === event.settingId,
    },
    delays: {},
  }
);

export const SettingsMachineContext = createActorContext(settingsMachine);
