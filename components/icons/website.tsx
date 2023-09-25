import { cn } from "@/lib/utils";

export const Website = ({
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
      <g clipPath="url(#clip0_1343_15727)">
        <path
          d="M18.3337 9.99935C18.3337 14.6017 14.6027 18.3327 10.0003 18.3327M18.3337 9.99935C18.3337 5.39698 14.6027 1.66602 10.0003 1.66602M18.3337 9.99935H1.66699M10.0003 18.3327C5.39795 18.3327 1.66699 14.6017 1.66699 9.99935M10.0003 18.3327C12.0847 16.0507 13.2693 13.0893 13.3337 9.99935C13.2693 6.90938 12.0847 3.94798 10.0003 1.66602M10.0003 18.3327C7.91593 16.0507 6.73137 13.0893 6.66699 9.99935C6.73137 6.90938 7.91593 3.94798 10.0003 1.66602M1.66699 9.99935C1.66699 5.39698 5.39795 1.66602 10.0003 1.66602"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1343_15727">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
