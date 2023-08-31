import { cn } from "@/lib/utils";

export const AlertCircle = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1406_175112)">
        <path
          d="M8.00001 5.33325V7.99992M8.00001 10.6666H8.00668M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6818 1.33334 7.99992C1.33334 4.31802 4.31811 1.33325 8.00001 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1406_175112">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
