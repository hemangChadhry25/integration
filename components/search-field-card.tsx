import { Search as SearchSettings, SettingsMachineContext } from "@/machines";
import { Copy, GridVertical3, MoreHorizontal, Search, Trash } from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
} from "./ui";

interface SearchFieldCardProps extends SearchSettings {
  isAdvanced: boolean;
}

export const SearchFieldCard = ({
  isAdvanced,
  id,
  ...props
}: SearchFieldCardProps) => {
  const [, send] = SettingsMachineContext.useActor();

  const handleClick = () => {
    send({ type: "EDIT-SEARCH", isAdvanced, settingId: id });
  };

  const handleRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    send({ type: "REMOVE", isAdvanced, settingId: id });
  };

  return (
    <article
      className="flex h-[116px] items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] transition duration-300 hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3"
      onClick={handleClick}
    >
      <button className="flex-none select-none text-gray-400 focus-visible:outline-none">
        <GridVertical3 />
      </button>

      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <Label className="flex items-start gap-x-1 text-gray-700" size="sm">
            Search
          </Label>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
              <MoreHorizontal className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[182px]">
              <DropdownMenuItem>
                <Copy /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem visual="destructive" onClick={handleRemove}>
                <Trash /> Delete Field
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <InputGroup className="mt-3">
          <Input placeholder="Type to search" />
          <InputLeftElement>
            <Search className="h-5 w-5 text-gray-500" />
          </InputLeftElement>
        </InputGroup>
      </div>
    </article>
  );
};
