"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      // className="bg-white dark:bg-[#121212] font-sans md:px-10 w-full"
      className="bg-white dark:bg-neutral-950 font-sans xl:px-10 w-full"
      ref={containerRef}
    >
      <div className="max-w-5xl mx-auto py-20 px-4 lg:px-8 xl:px-10">
        <h2 className="text-2xl md:text-3xl xl:text-4xl mb-3 text-black dark:text-white max-w-5xl font-custom">
          Changelog from my journey
        </h2>

        <p className="text-neutral-700 dark:text-gray-400 text-sm md:text-base max-w-5xl">
          From knowing nothing to becoming a Full-Stack Engineer specialized in
          the advanced MERN stack — it&apos;s been a transformative journey.
          Over the past 2 years, I&apos;ve worked on multiple real-world
          projects, and here&apos;s a timeline that captures that growth.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto -mt-16 md:-mt-28">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 xl:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-sm xl:w-full">
              {/* Pointer Ball : */}
              <div className="h-10 w-10 absolute left-3 md:left-3 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <h3 className="hidden xl:block text-2xl md:pl-15 xl:pl-20 xl:text-5xl font-bold text-neutral-500 dark:text-neutral-500 font-custom">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 xl:pl-4 w-full md:-top-5 xl:top-0">
              <h3 className="xl:hidden block text-4xl mb-4 text-left font-custom text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        {/* This is the line which moves as we scroll down : */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
