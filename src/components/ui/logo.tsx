import { cn } from "@/lib/utils";
import { Lobster } from "next/font/google";

const lobster = Lobster({
    weight: '400',
    subsets: ['latin'],
  })

function Logo({ className }: { className?: string }) {
  return (
    <div className="cursor-pointer rounded-full p-2 border-0 bg-[#ffdfb0] hover:bg-[#f7ddb7] dark:bg-[#393128] hover:dark:bg-[#393128]">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-auto text-neutral-900 dark:text-neutral-100 transition-colors duration-300",
          className
        )}
        role="img"
        aria-label="Logo"
        aria-hidden="true"
        name="logo"
        focusable="false"
      >
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          fontSize="80"
          fontWeight="bold"
          fill="currentColor"
          className={`${lobster.className} font-extrabold`}
        >
          A
        </text>
      </svg>
    </div>
  );
}

export default Logo;
