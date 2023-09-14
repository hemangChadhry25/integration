import { atom } from "jotai";

export const layoutAtom = atom<"previous" | "next">("previous");

export const goToNextAtom = atom(null, (_get, set) => set(layoutAtom, "next"));

export const goToPreviousAtom = atom(null, (_get, set) =>
  set(layoutAtom, "previous")
);
