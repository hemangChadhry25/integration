import { cn } from "@/lib/utils";

export const Address = ({
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
        d="M9.99968 10.8327C11.3804 10.8327 12.4997 9.71339 12.4997 8.33268C12.4997 6.95197 11.3804 5.83268 9.99968 5.83268C8.61896 5.83268 7.49967 6.95197 7.49967 8.33268C7.49967 9.71339 8.61896 10.8327 9.99968 10.8327Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99968 18.3327C13.333 14.9993 16.6663 12.0146 16.6663 8.33268C16.6663 4.65078 13.6816 1.66602 9.99968 1.66602C6.31778 1.66602 3.33301 4.65078 3.33301 8.33268C3.33301 12.0146 6.66634 14.9993 9.99968 18.3327Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
