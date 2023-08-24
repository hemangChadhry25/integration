import * as React from "react";
import { Meta } from "@storybook/react";

import {
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTrigger,
  Combobox,
  ScaleOutIn,
} from "@/components/ui";
import { ScrollArea } from "@/components/ui";
import { Search } from "@/components/icons";
import { first } from "@/lib/utils";

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
    { id: 8, name: "David" },
    { id: 9, name: "Logan" },
    { id: 10, name: "Andrew" },
  ]);
  const [selected, setSelected] = React.useState({});
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
      <ScaleOutIn afterLeave={() => setQuery("")}>
        <ComboboxOptions>
          <ScrollArea className="h-[304px]">
            {filteredPeople.map((user) => (
              <ComboboxOption key={user.id} value={user}>
                {user.name}
              </ComboboxOption>
            ))}
          </ScrollArea>
        </ComboboxOptions>
      </ScaleOutIn>
    </Combobox>
  );
};

export const Gray = () => {
  const [users] = React.useState([
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
    { id: 7, name: "Chris Torres" },
    { id: 8, name: "Max" },
    { id: 8, name: "David" },
    { id: 9, name: "Logan" },
    { id: 10, name: "Andrew" },
  ]);
  const [selected, setSelected] = React.useState({});
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
          visual="gray"
          displayValue={(user: { id: number; name: string }) => user.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton>
          <Search />
        </ComboboxButton>
      </ComboboxTrigger>
      <ScaleOutIn afterLeave={() => setQuery("")}>
        <ComboboxOptions>
          <ScrollArea className="h-[304px]">
            {filteredPeople.map((user) => (
              <ComboboxOption key={user.id} value={user}>
                {user.name}
              </ComboboxOption>
            ))}
          </ScrollArea>
        </ComboboxOptions>
      </ScaleOutIn>
    </Combobox>
  );
};
