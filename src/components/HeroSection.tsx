"use client";

import React, { useEffect } from "react";
import { SITE } from "@/constants/constants";
import Image from "next/image";
import ResumeDownloadCmdP from "./ResumeDownloadCmdP";
import debounce from "lodash.debounce";
import WrapButton from "@/components/skiperui/wrap-button";
import { Globe } from "lucide-react";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const isPrintShortcut =
        (isMac && e.metaKey && e.key.toLowerCase() === "p") ||
        (!isMac && e.ctrlKey && e.key.toLowerCase() === "p");

      if (isPrintShortcut) {
        e.preventDefault(); // Stop the print dialog
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      const isMobileView = window.matchMedia("(max-width: 1024px)").matches;
      setIsMobile(isMobileView);
    }, 100);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

          <div
            className="mt-4 flex items-center justify-center md:justify-normal gap-2"
            aria-label="location"
          >
            <span className="bg-[#63493e] dark:bg-[#fcdfc1] text-primary-foreground ring-primary/30 rounded-full px-3 py-1 text-sm font-thin ring-1">
              I&apos;m from
            </span>

            <span> {SITE.location}</span>

            <span className="text-2xl">🇮🇳</span>
          </div>

          <p
            className="text-md text-neutral-700 dark:text-gray-400 font-[200] mt-4 text-justify px-2"
            title="description"
            aria-label="description"
          >
            {SITE.description}
          </p>

          {/* Resume Download Options : */}
          <div className="mt-3 xl:mt-4 ml-2">
            {isMobile ? (
              <div className="flex justify-center md:justify-start">
                <WrapButton
                  href="public/Amith-Resume.pdf"
                >
                  <Globe className="animate-spin " />
                  Download Resume
                </WrapButton>
              </div>
            ) : (
              <ResumeDownloadCmdP open={open} setOpen={setOpen} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
