import React from "react";
import { SITE } from "@/constants/constants";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative top-20 md:top-36 container mx-auto w-auto">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
        <div className="overflow-hidden sm:shrink-0 sm:overflow-hidden sm:rounded-lg my-auto">
          <Image
            src={"/images/Me.jpeg"}
            height={240}
            width={240}
            alt="Image"
            className="rounded-full object-contain"
          />
        </div>

        <div className="mt-10 sm:mt-0 sm:max-w-2xl">
          <h1 className="font-custom text-foreground text-center sm:text-start text-4xl font-extrabold sm:text-5xl">
            {SITE.title}
          </h1>

          <div className="mt-4 flex items-center justify-center md:justify-normal gap-2" aria-label="location">
            <span className="bg-[#63493e] dark:bg-[#fcdfc1] text-primary-foreground ring-primary/30 rounded-full px-3 py-1 text-sm font-thin ring-1">
              I'm from
            </span>

            <span className=""> {SITE.location}</span>

            <span className="text-2xl">🇮🇳</span>
          </div>

          <p
            className="text-md text-gray-400 font-[200] mt-4 text-justify px-2"
            title="description"
            aria-label="description"
          >
            {SITE.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
