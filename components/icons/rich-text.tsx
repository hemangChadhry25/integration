import { cn } from "@/lib/utils";

export const RichText = ({
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
        d="M4.23226 14.3223V5.67179H2.91146L1 7.16734V8.54199L2.84508 7.11535H2.91258V14.3223H4.23339H4.23226ZM7.84705 8.1684V8.09223C7.84705 7.34506 8.34207 6.6789 9.19261 6.6789C9.95314 6.6789 10.5134 7.21086 10.5134 8.01607C10.5134 8.77049 10.0409 9.34719 9.6055 9.86102L6.61399 13.4228V14.3223H11.9917V13.1254H8.4737V13.0419L10.4617 10.6408C11.1929 9.76551 11.8533 9.03043 11.8533 7.89637C11.8522 6.52656 10.8138 5.50011 9.22186 5.50011C7.45215 5.50011 6.56674 6.7865 6.56674 8.09949V8.1684H7.84705ZM15.2262 10.445H16.1105C17.0364 10.445 17.6563 11.0265 17.662 11.8704C17.6732 12.7252 17.0432 13.3406 16.0633 13.3333C15.197 13.3273 14.5715 12.8267 14.5118 12.1811H13.2799C13.3272 13.4542 14.3352 14.5 16.052 14.5C17.7148 14.5 19.0244 13.4856 18.9997 11.9079C18.9772 10.526 17.9624 9.9118 17.2547 9.83563V9.75946C17.8566 9.65065 18.7701 8.96151 18.7465 7.73074C18.7173 6.45765 17.6968 5.48802 16.0925 5.50011C14.405 5.50616 13.4858 6.56404 13.4509 7.79482H14.7065C14.7425 7.19273 15.2667 6.65351 16.0633 6.65351C16.8542 6.65351 17.4201 7.17943 17.4201 7.94715C17.4257 8.72092 16.8531 9.28432 16.07 9.28432H15.2262V10.445Z"
        fill="currentColor"
      />
    </svg>
  );
};