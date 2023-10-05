import * as React from "react";
import { Meta } from "@storybook/react";

import {
  ListboxButton,
  Listbox,
  ListboxOptions,
  ListboxOption,
} from "@/components/ui";

const meta: Meta = {
  title: "Listbox",
};

export default meta;

interface Person {
  name: string;
}

type People = Person[];

const people: People = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const Default = () => {
  const [selected, setSelected] = React.useState<string>();

  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton placeholder="Select" />
      <ListboxOptions>
        {people.map((person) => (
          <ListboxOption key={person.name} value={person.name}>
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};
