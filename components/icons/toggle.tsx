import { cn } from "@/lib/utils";

export const Toggle = ({
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
        d="M1.66699 10C1.66699 7.23858 3.90557 5 6.66699 5H13.3337C16.0951 5 18.3337 7.23858 18.3337 10C18.3337 12.7614 16.0951 15 13.3337 15H6.66699C3.90557 15 1.66699 12.7614 1.66699 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 12.0833C7.81759 12.0833 8.75033 11.1506 8.75033 10C8.75033 8.84941 7.81759 7.91667 6.66699 7.91667C5.5164 7.91667 4.58366 8.84941 4.58366 10C4.58366 11.1506 5.5164 12.0833 6.66699 12.0833Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
