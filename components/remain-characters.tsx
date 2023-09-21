"use client";

import { countCharacters } from "@/lib/utils";
import { Control, FieldPath, useWatch } from "react-hook-form";

export const RemainCharacters = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  control,
  name,
  max,
}: {
  control: Control<TFormValues>;
  name: FieldPath<TFormValues>;
  max: number;
}) => {
  const value = useWatch({ control, name });
  return (
    <>
      {countCharacters(value)}/{max}
    </>
  );
};
