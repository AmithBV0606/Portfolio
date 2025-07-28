import React from "react";
import { SOCIAL_LINKS } from "@/constants/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

export default function FooterSection() {
  return (
    <div className="relative top-24 md:top-44 container mx-auto w-full max-w-5xl border-t border-gray-800">
      <div className="flex items-center justify-between py-6">
        <div>
          <ul className="flex flex-wrap gap-2 justify-around w-full mb-4 md:justify-center md:mb-0 md:w-auto">
            {SOCIAL_LINKS.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "group text-2xl size-14 lg:size-9 lg:text-base"
                    )}
                  >
                    <link.label />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2 text-center">
          <span
            className="text-muted-foreground text-sm"
            aria-label="copyright"
          >
            2025 - {new Date().getFullYear()} &copy; All rights reserved.
          </span>

          <Separator orientation="vertical" className="hidden h-4! sm:block" />

          <p
            className="text-muted-foreground text-sm space-x-1"
            aria-label="open-source description"
          >
            <Link
              href="https://github.com/AmithBV0606/Portfolio"
              className="text-foreground underline"
              target="_blank"
            >
              Open-source
            </Link>

            <span>under MIT license</span>
          </p>
        </div>
      </div>
    </div>
  );
}
