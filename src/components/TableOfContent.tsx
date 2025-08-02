import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

export default function TableOfContent({ headings }: { headings: string[] }) {
  return (
    <details
      open
      className="group col-span-12 xl:col-span-2 rounded-xl border p-4 xl:sticky xl:top-26 xl:-mr-2 xl:h-[calc(100vh-5rem)] xl:rounded-none xl:border-none xl:w-[300px] xl:p-0"
    >
      <summary className="flex cursor-pointer items-center justify-between text-xl font-medium group-open:pb-4">
        <div>
          <hr className="mb-8 hidden md:block" />

          <h2
            id="skills-title"
            className="font-custom flex items-center justify-start gap-x-2 text-2xl font-bold text-neutral-900 dark:text-white"
          >
            Table of Contents{" "}
            <DynamicIcon
              name="chevron-down"
              className="size-5 shrink-0 transition-transform group-open:rotate-180"
            />
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            This is a list of all the sections in this post. Click on any of
            them to jump to that section.
          </p>
        </div>
      </summary>

      <ScrollArea
        className="flex max-h-64 flex-col overflow-y-auto xl:max-h-[calc(100vh-8rem)]"
        type="always"
      >
        <ul
          className="flex list-none flex-col gap-y-2 px-4 xl:mr-8 mt-2"
          id="table-of-contents"
        >
          {headings.map((heading, index) => (
            <li className="text-foreground/60 text-sm xl:p-0" key={index}>
              <Link
                href={`#${heading.split(" ")[1].toLowerCase()}`}
                className="marker:text-foreground/30 block list-disc px-3 py-2 underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit xl:list-none"
              >
                {heading}
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </details>
  );
}
