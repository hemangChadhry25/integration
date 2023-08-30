import { Search } from "@/components/icons";
import {
  SearchField,
  SearchFieldButton,
  SearchFieldInput,
} from "@/components/ui";
import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "SearchField",
};

export default meta;

export const DefaultSm = () => {
  return (
    <SearchField>
      <SearchFieldInput />
      <SearchFieldButton>
        <Search />
      </SearchFieldButton>
    </SearchField>
  );
};

export const DefaultSmRightIcon = () => {
  return (
    <SearchField>
      <SearchFieldInput className="pl-3 pr-[34px]" />
      <SearchFieldButton align="right">
        <Search />
      </SearchFieldButton>
    </SearchField>
  );
};

export const DefaultLg = () => {
  return (
    <SearchField>
      <SearchFieldInput size="lg" />
      <SearchFieldButton size="lg">
        <Search className="h-5 w-5" />
      </SearchFieldButton>
    </SearchField>
  );
};

export const DefaultLgRightIcon = () => {
  return (
    <SearchField>
      <SearchFieldInput className="pl-3.5 pr-[42px]" size="lg" />
      <SearchFieldButton size="lg" align="right">
        <Search className="h-5 w-5" />
      </SearchFieldButton>
    </SearchField>
  );
};

export const GraySm = () => {
  return (
    <SearchField>
      <SearchFieldInput visual="gray" />
      <SearchFieldButton>
        <Search />
      </SearchFieldButton>
    </SearchField>
  );
};

export const GraySmRightIcon = () => {
  return (
    <SearchField>
      <SearchFieldInput className="pl-3 pr-[34px]" visual="gray" />
      <SearchFieldButton align="right">
        <Search />
      </SearchFieldButton>
    </SearchField>
  );
};

export const GrayLg = () => {
  return (
    <SearchField>
      <SearchFieldInput size="lg" visual="gray" />
      <SearchFieldButton size="lg">
        <Search className="h-5 w-5" />
      </SearchFieldButton>
    </SearchField>
  );
};

export const GrayLgRightIcon = () => {
  return (
    <SearchField>
      <SearchFieldInput className="pl-3.5 pr-[42px]" size="lg" visual="gray" />
      <SearchFieldButton size="lg" align="right">
        <Search className="h-5 w-5" />
      </SearchFieldButton>
    </SearchField>
  );
};
