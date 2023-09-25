import { cn } from "@/lib/utils";

export const Phone = ({
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
        d="M6.98259 7.37779C7.56259 8.58581 8.35324 9.71801 9.35456 10.7193C10.3559 11.7206 11.4881 12.5113 12.6961 13.0913C12.8 13.1412 12.852 13.1661 12.9177 13.1853C13.1513 13.2534 13.4382 13.2045 13.6361 13.0628C13.6917 13.0229 13.7394 12.9753 13.8346 12.88C14.126 12.5887 14.2716 12.443 14.4181 12.3478C14.9705 11.9886 15.6827 11.9886 16.2351 12.3478C16.3816 12.443 16.5272 12.5887 16.8186 12.88L16.981 13.0424C17.4238 13.4853 17.6453 13.7067 17.7656 13.9446C18.0048 14.4175 18.0048 14.9761 17.7656 15.449C17.6453 15.6869 17.4238 15.9083 16.981 16.3512L16.8496 16.4825C16.4083 16.9239 16.1876 17.1446 15.8876 17.3131C15.5546 17.5001 15.0376 17.6346 14.6557 17.6335C14.3116 17.6324 14.0764 17.5657 13.606 17.4322C11.0782 16.7147 8.69289 15.361 6.70291 13.371C4.71292 11.381 3.35919 8.99569 2.64172 6.46786C2.50821 5.99749 2.44146 5.76231 2.44044 5.41818C2.4393 5.03633 2.57377 4.51925 2.76079 4.18633C2.92933 3.88631 3.15 3.66563 3.59135 3.22428L3.72272 3.09292C4.16559 2.65005 4.38702 2.42861 4.62484 2.30833C5.09781 2.0691 5.65636 2.0691 6.12933 2.30832C6.36714 2.42861 6.58858 2.65005 7.03145 3.09292L7.19384 3.25531C7.48518 3.54665 7.63085 3.69231 7.72609 3.8388C8.08525 4.3912 8.08525 5.10336 7.72608 5.65576C7.63085 5.80225 7.48518 5.94792 7.19384 6.23925C7.09858 6.33451 7.05095 6.38214 7.01108 6.43782C6.86941 6.63568 6.82049 6.92256 6.88859 7.15619C6.90775 7.22193 6.9327 7.27389 6.98259 7.37779Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
