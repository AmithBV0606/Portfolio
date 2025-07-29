import React from "react";
import Skills from "@/components/ui/skills";

export default function TechStackSection() {
  return (
    <section className="relative top-24 md:top-44 container mx-auto w-auto">
      <div className="md:-ml-5">
        <h2
          id="skills-title"
          className="font-custom text-foreground text-4xl font-bold"
          title="skills"
          aria-label="skills"
          role="heading"
        >
          Skills & Technologies
        </h2>

        <p 
          // className="text-gray-400 text-sm mt-2"
          className="text-md text-gray-400 font-[200] mt-2 text-justify"
        >
          Here are some of the technologies I've been working with:
        </p>
      </div>

      <div>
        <Skills />
      </div>
    </section>
  );
}
