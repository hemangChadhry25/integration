import { createActorContext } from "@xstate/react";
import { createMachine } from "xstate";

export const previewMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QAcBOYBuBLMB3AdFgHYCGAxgC5YZgDEAggMIAqAkgGr3MCiA2gAwBdRCgD2sLFVFERIAB6IAjADZl+AEz8t-AMxaA7AA4ALIf0BWADQgAnkv3r8hwzp3qAnIveH3-d8YBfAOs0TBwCcioaWlYAOSY2Th4BYSQQZHFJLGlZBQQVNU1tPX4jUwtrO3z1HXxFF1dFfnV9RXrzQyCQ9Gw8fEjqMHwACywIYihaAGUACQB5AHUU2QyJKRk0vONW-HLzRWNlNx1lVqtbRCKNdxv3feU7zXd9LvSe8P7KQfxYYdFcCa0GasAAifCEK0y61yiFMtXMynU5n4hkUyPMxnMz0qSmR+Cxtwez30ehUQWCICIoggcBW7zwkLW2Q2oDyAFplDiEGz1MZ8NoBYKDK9Qr0CMQBjRGVkcptYeouYp1IYnKplBjnMo2kdOhTRR9JWBpdC5QgPO4NGZ9ipefsTFyjtdbiZvIZ1aURfSIl8aCMxhNjcyYQgdNtLRZtbb6sZFQjLa5NIYEQ59N5PWE+oafn8AUQoIHZazEB1FPydBH2g9QzpYyqjK5jvp+AiOuSAkA */
    id: "preview",
    initial: "inactive",
    states: {
      inactive: {
        on: {
          ACTIVATE: {
            target: "active",
          },
        },
      },
      active: {
        initial: "hiding",
        states: {
          hiding: {
            on: {
              SHOW: {
                target: "showing",
              },
            },
          },
          showing: {
            on: {
              HIDE: {
                target: "hiding",
              },
            },
          },
        },
        on: {
          INACTIVATE: {
            target: "inactive",
          },
        },
      },
    },
    schema: {
      events: {} as
        | { type: "HIDE" }
        | { type: "SHOW" }
        | { type: "ACTIVATE" }
        | { type: "INACTIVATE" },
    },
    tsTypes: {} as import("./preview-machine.typegen").Typegen0,
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {},
    services: {},
    guards: {},
    delays: {},
  }
);

export const PreviewMachineContext = createActorContext(previewMachine);
