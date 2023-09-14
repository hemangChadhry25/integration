import { isUndefined } from "./utils";

export function getPreview<T extends File>(
  file: T | undefined,
  onComplete: (dataUrl?: string) => void
) {
  if (isUndefined(file)) {
    onComplete(undefined);
    return () => {};
  }

  const onLoadEnd = (
    reader: FileReader,
    onComplete: (dataUrl?: string) => void
  ) => {
    return () => {
      const result = reader.result;
      if (result) {
        onComplete(result as string);
      } else {
        onComplete(undefined);
      }
    };
  };

  const reader = new FileReader();
  const handleLoadEnd = onLoadEnd(reader, onComplete);
  reader.addEventListener("loadend", handleLoadEnd);
  reader.readAsDataURL(file);

  return () => reader.removeEventListener("loadend", handleLoadEnd);
}
