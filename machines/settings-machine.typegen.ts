// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    delete: "DELETE";
    duplicate: "DUPLICATE";
    insert: "INSERT";
    reorder: "REORDER";
    resetCurrent: "DELETE" | "TOGGLE";
    setCurrent: "EDIT-DROPDOWN" | "EDIT-SEARCH" | "EDIT-TOGGLE";
    update: "UPDATE";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    hasSameCurrentId: "DELETE";
    ifDropdown: "EDIT-DROPDOWN";
    ifSearch: "EDIT-SEARCH";
    ifToggle: "EDIT-TOGGLE";
  };
  eventsCausingServices: {};
  matchesStates:
    | "editing"
    | "editing dropdown"
    | "editing search"
    | "editing toggle";
  tags: never;
}
