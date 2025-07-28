import { buttonVariants } from "@/components/ui/button";
import FuzzyText from "@/components/ui/FuzzyText";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <section className="flex w-full flex-col items-center justify-center gap-y-4 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={150}
            fontWeight={"950"}
          >
            404
          </FuzzyText>

          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={40}
          >
            Page Not Found!
          </FuzzyText>

          <p className="prose max-w-96 text-sm text-gray-400">
            Oops! The page you're looking for doesn't exist. It might have been
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
