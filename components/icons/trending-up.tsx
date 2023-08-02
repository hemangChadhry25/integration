import { cn } from "@/lib/utils";

export const TrendingUp = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[14px] w-[14px]", className)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.8337 4.0835L8.24362 8.67353C8.01261 8.90454 7.89711 9.02005 7.76392 9.06332C7.64676 9.10139 7.52056 9.10139 7.4034 9.06332C7.27021 9.02005 7.1547 8.90454 6.92369 8.67353L5.32696 7.0768C5.09595 6.84579 4.98044 6.73028 4.84725 6.687C4.73009 6.64894 4.60389 6.64894 4.48673 6.687C4.35354 6.73028 4.23804 6.84579 4.00703 7.0768L1.16699 9.91683M12.8337 4.0835H8.75033M12.8337 4.0835V8.16683"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
