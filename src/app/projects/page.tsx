"use client";

import GenericBreadCrumbs from "@/components/GenericBreadCrumbs";
import React, { useState } from "react";
import { Folder } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import {
  mobileApplicationProjects,
  webApplicationProjects,
} from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [projectType, setProjectType] = useState("Web Apps");
  const [activePath, setActivePath] = useState("Web Apps");

  return (
    <div className="relative container top-28 md:top-32 w-full mx-auto text-center max-w-5xl xl:max-w-4xl">
      <div className="w-full">
        {/* Breadcrumbs */}
        <div className="mx-4 xl:mx-0">
          <GenericBreadCrumbs
            items={[{ label: "Projects", href: "/projects", icon: Folder }]}
          />
        </div>

        {/* Intro about the projects I've worked on :  */}
        <div className="flex flex-row items-center justify-between mb-8 relative top-12 mx-4 xl:mx-0">
          <div>
            <div className="flex w-fit items-center gap-2 text-primary">
              <DynamicIcon
                name="star"
                className="h-4 w-4 text-yellow-500 animate-pulse"
              />

              <p className="shimmer word-spacing font-mono text-sm uppercase leading-none font-normal text-[#b48b61] dark:text-[#fcdfc1]">
                My Work
              </p>
            </div>

            <h2 className="font-custom text-foreground text-4xl font-bold mt-2 text-start">
              Projects
            </h2>

            <p className="text-gray-400 text-md w-full mt-3 text-justify">
              Here are some of the projects I have worked on. I am always
              looking for new challenges and opportunities to learn and grow as
              a developer. If you have a project in mind, feel free to reach
              out!
            </p>
          </div>
        </div>

        {/* Project Type Menu : */}
        <div className="flex items-center gap-2 md:gap-4 top-10 mx-4 xl:mx-0 mt-16">
          <nav
            className="flex items-center gap-6 md:flex"
            aria-label="Main navigation"
            role="navigation"
          >
            {["Web Apps", "Mobile Apps"].map((item, index) => {
              const isActive = activePath.startsWith(item);
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <span
                    className={cn(
                      "text-sm font-medium capitalize transition-colors duration-200 cursor-pointer",
                      "relative py-1 px-1",
                      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300",
                      "hover:after:w-full hover:text-foreground",
                      isActive
                        ? "text-foreground after:w-full after:bg-primary"
                        : "text-foreground/70"
                    )}
                    onClick={() => {
                      setProjectType(item);
                      setActivePath(item);
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Project Cards : */}
        <div className="mt-9 grid grid-cols-1 py-sm sm:grid-cols-2 gap-x-8 mb-16 gap-y-8 px-4 xl:px-0">
          {projectType === "Web Apps" ? (
            <>
              {webApplicationProjects.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </>
          ) : (
            <>
              {mobileApplicationProjects.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="relative top-12 md:top-28 container mx-auto w-full max-w-5xl border-t border-gray-800">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
