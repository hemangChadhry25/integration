import { SettingsMachineContext, ToggleSettings } from "@/machines";
import {
  Copy,
  GridVertical3,
  HelpCircle,
  MoreHorizontal,
  Trash,
} from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HelperText,
  Label,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { getId } from "@/lib/utils";

interface ToggleDraggableCardProps extends ToggleSettings {
  advanced: boolean;
  onDrag?: (event: React.PointerEvent<HTMLButtonElement>) => void;
}

export const ToggleDraggableCard = ({
  onDrag,
  settings,
  advanced,
  id,
}: ToggleDraggableCardProps) => {
  const { setup } = settings;
  const { fieldLabel, hint, tooltip } = setup || {};

  const [, send] = SettingsMachineContext.useActor();

  const handleClick = () => {
    send({
      advanced,
      type: "EDIT-TOGGLE",
      settingId: id,
    });
  };

  const handleDuplicate = () => {
    send({
      advanced,
      type: "DUPLICATE",
      settingId: getId(),
      targetSettingId: id,
    });
  };

  const handleDelete = () => {
    send({
      advanced,
      type: "DELETE",
      settingId: id,
    });
  };

  return (
    <article
      className="flex cursor-pointer items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] hover:border-2 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3"
      onClick={handleClick}
    >
      <button
        className="flex-none focus-visible:outline-none"
        onPointerDown={onDrag}
      >
        <GridVertical3 className="text-gray-400" />
      </button>
      <div className="flex-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" size="sm">
              {fieldLabel ? fieldLabel : "Toggle"}
            </Label>

            {tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>{tooltip}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
              <MoreHorizontal className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[182px]">
              <DropdownMenuItem onSelect={handleDuplicate}>
                <Copy /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem visual="destructive" onSelect={handleDelete}>
                <Trash /> Delete Field
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {hint && (
          <HelperText className="mt-1.5" size="sm">
            {hint}
          </HelperText>
        )}

        <div className="mt-3 flex items-start gap-x-2">
          <Switch size="md" />
          <div>
            <Label className="text-gray-700" size="sm">
              Remember me
            </Label>
            <HelperText size="sm">
              Save my login details for next time.
            </HelperText>
          </div>
        </div>
      </div>
    </article>
  );
};
