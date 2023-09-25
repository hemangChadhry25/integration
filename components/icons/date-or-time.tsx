import { cn } from "@/lib/utils";

export const DateOrTime = ({
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
        d="M17.499 6.66602H2.49902M13.3324 1.66602V4.16602M6.66569 1.66602V4.16602M9.99902 14.9993V9.99935M7.49902 12.4993H12.499M6.49902 18.3327H13.499C14.8992 18.3327 15.5992 18.3327 16.134 18.0602C16.6044 17.8205 16.9869 17.4381 17.2265 16.9677C17.499 16.4329 17.499 15.7328 17.499 14.3327V7.33268C17.499 5.93255 17.499 5.23249 17.2265 4.69771C16.9869 4.2273 16.6044 3.84485 16.134 3.60517C15.5992 3.33268 14.8992 3.33268 13.499 3.33268H6.49902C5.09889 3.33268 4.39883 3.33268 3.86405 3.60517C3.39364 3.84485 3.01119 4.2273 2.77151 4.69771C2.49902 5.23249 2.49902 5.93255 2.49902 7.33268V14.3327C2.49902 15.7328 2.49902 16.4329 2.77151 16.9677C3.01119 17.4381 3.39364 17.8205 3.86405 18.0602C4.39883 18.3327 5.09889 18.3327 6.49902 18.3327Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
