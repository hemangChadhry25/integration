import { cn } from "@/lib/utils";

export const Lamp = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[18px] w-[18px]", className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 15C10.5 15.8284 9.82843 16.5 9 16.5C8.17157 16.5 7.5 15.8284 7.5 15M10.5 15C10.5 14.1716 9.82843 13.5 9 13.5M10.5 15H15.75M7.5 15C7.5 14.1716 8.17157 13.5 9 13.5M7.5 15H2.25M9 13.5V10.5M15.75 3.75C15.75 4.99264 12.7279 6 9 6C5.27208 6 2.25 4.99264 2.25 3.75M15.75 3.75C15.75 2.50736 12.7279 1.5 9 1.5C5.27208 1.5 2.25 2.50736 2.25 3.75M15.75 3.75V8.25C15.75 9.495 12.75 10.5 9 10.5M2.25 3.75V8.25C2.25 9.495 5.25 10.5 9 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
