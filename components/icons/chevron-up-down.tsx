import { cn } from "@/lib/utils";

export const ChevronUpDown = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83301 12.5007L9.99967 16.6673L14.1663 12.5007M5.83301 7.50065L9.99967 3.33398L14.1663 7.50065"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
