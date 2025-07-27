import React from "react";
import Skills from "@/components/ui/skills";

export default function TechStackSection() {
  return (
    <section className="relative top-24 md:top-44 container mx-auto w-auto">
      <div className="">
        <h2
          id="skills-title"
          className="font-custom text-foreground text-2xl font-bold"
          title="skills"
          aria-label="skills"
          role="heading"
        >
          Skills & Technologies
        </h2>

        <p className="text-muted-foreground text-sm mt-2">
          Here are some of the technologies I've been working with:
        </p>
      </div>

      <div>
        <Skills />
      </div>
    </section>
  );
}
