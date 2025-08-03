"use client";

import { buttonVariants } from "@/components/ui/button";
import FuzzyText from "@/components/ui/FuzzyText";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

export default function NotFound() {
  const { theme } = useTheme();
  return (
    <div className="relative container mx-2 md:mx-auto top-80 md:top-72 sm:px-8 lg:px-16">
      <section className="flex flex-col items-center justify-center gap-y-4 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={150}
            fontWeight={"950"}
            color={theme === "dark" ? "#fff" : "#000"}
          >
            404
          </FuzzyText>

          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={40}
            color={theme === "dark" ? "#fff" : "#000"}
          >
            Page Not Found!
          </FuzzyText>

          <p className="prose max-w-72 md:max-w-96 text-sm text-justify text-gray-500 dark:text-gray-400">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "flex gap-x-1.5 group"
          )}
        >
          <span className="transition-transform group-hover:-translate-x-1">
            &larr;
          </span>{" "}
          Go to home page
        </Link>
      </section>
    </div>
  );
}
