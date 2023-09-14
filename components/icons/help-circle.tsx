import { cn } from "@/lib/utils";

export const HelpCircle = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[17px]", className)}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1470_4472)">
        <path
          d="M6.25984 6.00013C6.41657 5.55458 6.72594 5.17887 7.13314 4.93956C7.54033 4.70025 8.01909 4.61277 8.48461 4.69261C8.95012 4.77246 9.37236 5.01449 9.67653 5.37582C9.9807 5.73715 10.1472 6.19448 10.1465 6.66679C10.1465 8.00012 8.14649 8.66678 8.14649 8.66678M8.19982 11.3334H8.20649M14.8664 8.00012C14.8664 11.682 11.8817 14.6667 8.19982 14.6667C4.51795 14.6667 1.5332 11.682 1.5332 8.00012C1.5332 4.31824 4.51795 1.3335 8.19982 1.3335C11.8817 1.3335 14.8664 4.31824 14.8664 8.00012Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1470_4472">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.199951)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
