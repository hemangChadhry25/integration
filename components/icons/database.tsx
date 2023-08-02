import { cn } from "@/lib/utils";

export const Database = ({
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
        d="M17.5 4.16675C17.5 5.54746 14.1421 6.66675 10 6.66675C5.85786 6.66675 2.5 5.54746 2.5 4.16675M17.5 4.16675C17.5 2.78604 14.1421 1.66675 10 1.66675C5.85786 1.66675 2.5 2.78604 2.5 4.16675M17.5 4.16675V15.8334C17.5 17.2167 14.1667 18.3334 10 18.3334C5.83333 18.3334 2.5 17.2167 2.5 15.8334V4.16675M17.5 8.10026C17.5 9.48359 14.1667 10.6003 10 10.6003C5.83333 10.6003 2.5 9.48359 2.5 8.10026M17.5 12.0334C17.5 13.4167 14.1667 14.5334 10 14.5334C5.83333 14.5334 2.5 13.4167 2.5 12.0334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
