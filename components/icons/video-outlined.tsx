import { cn } from "@/lib/utils";

export const VideoOutlined = ({
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
      <g clipPath="url(#clip0_1343_54578)">
        <path
          d="M5.83366 1.66602V18.3327M14.167 1.66602V18.3327M1.66699 9.99935H18.3337M1.66699 5.83268H5.83366M1.66699 14.166H5.83366M14.167 14.166H18.3337M14.167 5.83268H18.3337M3.48366 1.66602H16.517C17.5203 1.66602 18.3337 2.47936 18.3337 3.48268V16.516C18.3337 17.5193 17.5203 18.3327 16.517 18.3327H3.48366C2.48034 18.3327 1.66699 17.5193 1.66699 16.516V3.48268C1.66699 2.47936 2.48034 1.66602 3.48366 1.66602Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1343_54578">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
