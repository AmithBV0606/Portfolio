import React from "react";
import { SITE } from "@/constants/constants";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative top-20 md:top-36 container mx-auto w-auto">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left md:pl-16">
        <div className="overflow-hidden sm:shrink-0 sm:overflow-hidden sm:rounded-lg">
          <Image
            src={"/images/Me.jpeg"}
            height={245}
            width={245}
            alt="Image"
            className="rounded-full object-contain"
          />
        </div>

        <div className="mt-10 sm:mt-0 sm:max-w-xl">
          <h1 className="font-custom text-foreground text-center sm:text-start text-4xl font-extrabold sm:text-5xl">
            {SITE.title}
          </h1>

          <div className="mt-4 flex items-center justify-center md:justify-normal gap-2" aria-label="location">
            <span className="bg-[#fcdfc1] text-primary-foreground ring-primary/30 rounded-full px-3 py-1 text-sm font-thin ring-1">
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
