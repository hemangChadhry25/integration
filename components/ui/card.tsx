import { cn } from "@/lib/utils";

export const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg border border-gray-200 bg-white drop-shadow hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out",
        className
      )}
      {...props}
    />
  );
};
