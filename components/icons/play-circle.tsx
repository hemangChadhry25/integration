import { cn } from "@/lib/utils";

export const PlayCircle = ({
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
        d="M7.5 14.25C10.9518 14.25 13.75 11.4518 13.75 8C13.75 4.54822 10.9518 1.75 7.5 1.75C4.04822 1.75 1.25 4.54822 1.25 8C1.25 11.4518 4.04822 14.25 7.5 14.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.9375 6.10333C5.9375 5.80503 5.9375 5.65588 5.99984 5.57261C6.05416 5.50005 6.13732 5.45465 6.22774 5.44819C6.33149 5.44078 6.45695 5.52143 6.70788 5.68274L9.65825 7.57941C9.87599 7.71939 9.98486 7.78938 10.0225 7.87837C10.0553 7.95613 10.0553 8.04387 10.0225 8.12163C9.98486 8.21063 9.87599 8.28061 9.65825 8.42059L6.70788 10.3173C6.45695 10.4786 6.33149 10.5592 6.22774 10.5518C6.13732 10.5454 6.05416 10.5 5.99984 10.4274C5.9375 10.3441 5.9375 10.195 5.9375 9.89667V6.10333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
