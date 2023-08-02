import { cn } from "@/lib/utils";

export const Download = ({
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
        d="M13.1251 9.875V12.375C13.1251 12.7065 12.9934 13.0245 12.759 13.2589C12.5246 13.4933 12.2066 13.625 11.8751 13.625H3.12512C2.7936 13.625 2.47566 13.4933 2.24124 13.2589C2.00682 13.0245 1.87512 12.7065 1.87512 12.375V9.875M4.37512 6.75L7.50012 9.875M7.50012 9.875L10.6251 6.75M7.50012 9.875V2.375"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
