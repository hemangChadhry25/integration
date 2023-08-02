import { cn } from "@/lib/utils";

export const ArrowRightLeft = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[15px]", className)}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 11.125H2.5M2.5 11.125L5 8.625M2.5 11.125L5 13.625M2.5 4.875H12.5M12.5 4.875L10 2.375M12.5 4.875L10 7.375"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
