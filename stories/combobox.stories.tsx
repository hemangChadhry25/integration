import { Meta, StoryObj } from "@storybook/react";

import {
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTrigger,
  Combobox,
  ScaleIn,
} from "@/components/ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "@/components/icons";
import * as React from "react";

const meta: Meta = {
  title: "Combobox",
};

export default meta;

export const Default = () => {
  const [users] = React.useState([
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
    { id: 7, name: "Chris Torres" },
    { id: 8, name: "Max" },
  ]);
  const [selected, setSelected] = React.useState(users[0]);
  const [query, setQuery] = React.useState("");

  const filteredPeople =
    query === ""
      ? users
      : users.filter((user) =>
          user.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <ComboboxTrigger>
        <ComboboxInput
          displayValue={(user: { id: number; name: string }) => user.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton>
          <Search />
        </ComboboxButton>
      </ComboboxTrigger>
      <ScaleIn afterLeave={() => setQuery("")}>
        <ComboboxOptions>
          <ScrollArea className="h-[304px]">
            {filteredPeople.map((user) => (
              <ComboboxOption key={user.id} value={user}>
                {user.name}
              </ComboboxOption>
            ))}
          </ScrollArea>
        </ComboboxOptions>
      </ScaleIn>
    </Combobox>
  );
};
