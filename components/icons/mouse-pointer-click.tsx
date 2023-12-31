import { cn } from "@/lib/utils";

export const MousePointerClick = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[18px] w-[18px]")}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3_62450)">
        <path
          d="M6.75 2.625V1.5M3.79549 3.7955L3 3M3.79549 9.75L3 10.5455M9.75 3.7955L10.5455 3M2.625 6.75H1.5M11.8984 12.1422L10.0296 15.6128C9.81606 16.0093 9.70931 16.2075 9.58087 16.2576C9.46942 16.3012 9.34389 16.2889 9.24298 16.2246C9.12671 16.1505 9.06042 15.9353 8.92786 15.5049L6.33389 7.08394C6.2256 6.73238 6.17145 6.5566 6.21502 6.43788C6.25297 6.33447 6.33446 6.25297 6.43787 6.21502C6.5566 6.17145 6.73238 6.2256 7.08394 6.33389L15.5049 8.92789C15.9353 9.06045 16.1504 9.12674 16.2245 9.24301C16.2888 9.34392 16.3011 9.46945 16.2576 9.58091C16.2075 9.70934 16.0092 9.81609 15.6127 10.0296L12.1422 11.8984C12.0833 11.9301 12.0538 11.9459 12.028 11.9663C12.0051 11.9844 11.9844 12.0051 11.9663 12.028C11.9459 12.0538 11.9301 12.0833 11.8984 12.1422Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_62450">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
