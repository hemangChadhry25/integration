import { HelpCircle } from "@/components/icons";
import { HelperText, Input, Label } from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { isUndefined } from "@/lib/utils";
import { SettingsMachineContext } from "@/machines";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  fieldLabel: z.string().max(30),
  hint: z.string().max(30),
  tooltip: z.string().max(50),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  fieldLabel: "",
  hint: "",
  tooltip: "",
};

export default function SetupTab() {
  const [, send] = SettingsMachineContext.useActor();
  const { currentAdvanced, currentId } = SettingsMachineContext.useSelector(
    (state) => ({
      currentId: state.context.currentId,
      currentAdvanced: state.context.currentAdvanced,
    })
  );
  const settings = SettingsMachineContext.useSelector((state) =>
    currentAdvanced ? state.context.advancedSettings : state.context.settings
  );

  const setting = settings.find((setting) => setting.id === currentId);
  const values = setting
    ? setting.for === "toggle"
      ? setting.settings
      : {}
    : {};

  const { register, handleSubmit, control, getValues } = useForm<FormValues>({
    resolver: zodResolver(schema),
    values: values.setup || defaultValues,
  });

  useEnhancedWatch({
    control,
    onChange: () => {
      const shouldNotUpdate =
        isUndefined(currentId) || isUndefined(currentAdvanced);

      if (shouldNotUpdate) return;

      send({
        type: "UPDATE",
        advanced: currentAdvanced,
        value: {
          id: currentId,
          for: "toggle",
          settings: {
            setup: getValues(),
          },
        },
      });
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1.5 p-5">
        <Label className="text-gray-700" htmlFor="field-label" size="sm">
          Field Label
        </Label>
        <div className="flex items-center justify-between">
          <HelperText size="sm">Enter a user friendly name.</HelperText>
          <HelperText className="leading-5">0/30</HelperText>
        </div>
        <Input id="field-label" {...register("fieldLabel")} />
      </div>

      <div className="border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="hint-text" size="sm">
            Hint Text <span className="text-gray-400">(optional)</span>
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">
              Add a short prompt about the field.
            </HelperText>
            <HelperText className="leading-5">0/30</HelperText>
          </div>
          <Input id="hint-text" {...register("hint")} />
        </div>
      </div>

      <div className="border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" htmlFor="tooltip" size="sm">
              Tooltip <span className="text-gray-400">(optional)</span>
            </Label>
            <HelpCircle className="flex-none text-gray-400" />
          </div>

          <div className="flex items-center justify-between">
            <HelperText size="sm">
              Add a short prompt about the field.
            </HelperText>
            <HelperText className="leading-5">0/50</HelperText>
          </div>
          <Input id="tooltip" {...register("tooltip")} />
        </div>
      </div>
    </form>
  );
}
