import { ToggleSettings } from "@/machines";
import { HelpCircle } from "./icons";
import {
  HelperText,
  Label,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";

interface TogglePreviewProps extends ToggleSettings {}

export const TogglePreview = ({ settings }: TogglePreviewProps) => {
  const { setup } = settings;
  const { fieldLabel, hint, tooltip } = setup || {};

  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm">
          {fieldLabel ? fieldLabel : "Toggle"}
        </Label>

        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>{tooltip}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {hint && (
        <HelperText className="mt-1.5" size="sm">
          Hint text lorem ipsum dolor sit amet, consectetur.
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
  );
};
