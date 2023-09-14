import { cn } from "@/lib/utils";

export const UserPlus = ({
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
      <g clipPath="url(#clip0_1470_4625)">
        <path
          d="M10.8666 13.9999V12.6666C10.8666 11.9594 10.5857 11.2811 10.0856 10.781C9.58549 10.2809 8.90722 9.99995 8.19998 9.99995H3.53335C2.82611 9.99995 2.14784 10.2809 1.64774 10.781C1.14765 11.2811 0.866699 11.9594 0.866699 12.6666V13.9999M13.5333 5.33331V9.33328M15.5333 7.3333H11.5333M8.53331 4.66665C8.53331 6.1394 7.33941 7.3333 5.86667 7.3333C4.39392 7.3333 3.20002 6.1394 3.20002 4.66665C3.20002 3.1939 4.39392 2 5.86667 2C7.33941 2 8.53331 3.1939 8.53331 4.66665Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1470_4625">
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
