import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[26px] w-[26px]", className)}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.84079 10.4864V16.8127L2.77489 12.789C1.9744 7.26261 5.07703 2.124 7.45297 0.5C4.78666 6.89903 6.65305 9.8804 7.84079 10.4864Z"
        fill="currentColor"
      />
      <path
        d="M9.18732 7.84117H15.5136C16.1196 6.65342 19.101 4.78704 25.5 7.45335C23.876 5.07741 18.7374 1.97478 13.211 2.77527L9.18732 7.84117Z"
        fill="currentColor"
      />
      <path
        d="M16.8127 18.1594H10.4864C9.8804 19.3471 6.89903 21.2135 0.5 18.5472C2.124 20.9232 7.26261 24.0258 12.789 23.2253L16.8127 18.1594Z"
        fill="currentColor"
      />
      <path
        d="M18.159 9.18732V15.5136C19.3468 16.1196 21.2132 19.101 18.5468 25.5C20.9228 23.876 24.0254 18.7374 23.2249 13.211L18.159 9.18732Z"
        fill="currentColor"
      />
    </svg>
  );
};
