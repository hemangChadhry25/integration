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
    active: "ACTIVATE";
    deactivate: "DEACTIVATE";
    duplicate: "DUPLICATE";
    insert: "INSERT";
    remove: "REMOVE";
    resetCurrent: "REMOVE" | "TOGGLE";
    setCurrent: "EDIT-SEARCH";
    update: "UPDATE";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    hasSameCurrentId: "REMOVE";
    ifSearch: "EDIT-SEARCH";
  };
  eventsCausingServices: {};
  matchesStates: "editing" | "editing search";
  tags: never;
}
