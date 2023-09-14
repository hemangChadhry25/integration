import { cn } from "@/lib/utils";

export const TwoBranch = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-6 w-[25px]", className)}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.52734 3V13.2C3.52734 14.8802 3.52734 15.7202 3.85432 16.362C4.14194 16.9265 4.60089 17.3854 5.16537 17.673C5.80711 18 6.64719 18 8.32734 18H15.5273M15.5273 18C15.5273 19.6569 16.8705 21 18.5273 21C20.1842 21 21.5273 19.6569 21.5273 18C21.5273 16.3431 20.1842 15 18.5273 15C16.8705 15 15.5273 16.3431 15.5273 18ZM3.52734 8L15.5273 8M15.5273 8C15.5273 9.65686 16.8705 11 18.5273 11C20.1842 11 21.5273 9.65686 21.5273 8C21.5273 6.34315 20.1842 5 18.5273 5C16.8705 5 15.5273 6.34315 15.5273 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
