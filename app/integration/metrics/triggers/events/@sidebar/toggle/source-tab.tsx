import { HelperText, Label, inputVariants } from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { isUndefined } from "@/lib/utils";
import { SettingsMachineContext } from "@/machines";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  dataset: z.string(),
  category: z.string(),
  metric: z.string(),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  dataset: "",
  category: "",
  metric: "",
};

export default function SourceTab() {
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
    defaultValues: values.source || defaultValues,
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
            source: getValues(),
          },
        },
      });
    },
  });

  const dataset = getValues("dataset");
  const category = getValues("category");

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form className="space-y-6 p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1.5">
        <Label className="text-gray-700" htmlFor="dataset" size="sm">
          Data Set
        </Label>
        <HelperText size="sm">
          Where do you want your data to come from?
        </HelperText>
        <select
          className={inputVariants()}
          id="dataset"
          {...register("dataset")}
        >
          <option value="">Select Data Set</option>
        </select>
      </div>

      {dataset && (
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="category" size="sm">
            Category
          </Label>
          <HelperText size="sm">
            Select the category of data you want to see in the toggle.
          </HelperText>
          <select
            className={inputVariants()}
            id="category"
            {...register("category")}
          >
            <option value="">Select Category</option>
          </select>
        </div>
      )}

      {category && (
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="metric" size="sm">
            Metric
          </Label>
          <HelperText size="sm">
            Where do you want list of items to come from?
          </HelperText>
          <select
            className={inputVariants()}
            id="metric"
            {...register("metric")}
          >
            <option value="">Select Metrics</option>
          </select>
        </div>
      )}
    </form>
  );
}
