import { createActorContext } from "@xstate/react";
import { createMachine } from "xstate";

export const toggleMachine = createMachine(
  {
    id: "Toggle",
    initial: "turned off",
    states: {
      "turned off": {
        on: {
          TOGGLE: {
            target: "turned on",
          },
        },
      },
      "turned on": {
        on: {
          TOGGLE: {
            target: "turned off",
          },
        },
      },
    },
    schema: { events: {} as { type: "TOGGLE" } },
    tsTypes: {} as import("./toggle-machine.typegen").Typegen0,
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

export const ToggleMachineContext = createActorContext(toggleMachine);
