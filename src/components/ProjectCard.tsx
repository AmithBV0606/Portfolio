import { ProjectDataType } from "@/types";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function ProjectCard({
  project,
}: {
  project: ProjectDataType;
}) {
  return (
    <div
      className="group h-full max-w-md transition-all duration-300 hover:translate-y-[-4px]"
    >
      <Link
        className="flex flex-col h-full w-full rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border border-card-foreground/10"
        href={`/projects/${project.name.toLowerCase()}`}
      >
        {/* Card Image : */}
        <div className="aspect-[16/10] w-full overflow-hidden">
          <Image
            alt={project.name}
            src={project.image}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={600}
            height={375}
          />
        </div>

        {/* Card Info (Title, Description, etc) : */}
        <div className="flex flex-col justify-between p-5 flex-grow">
          <div>
            <h3 className="text-xl text-start font-medium text-foreground mb-2">
              {project.name}
            </h3>

            <p className="text-sm text-gray-400 text-justify line-clamp-2 mb-4">
              {project.description ||
                "An innovative project showcasing creativity and technical skills"}
            </p>
          </div>

          <div className="flex justify-between items-center mt-auto pt-6 border-t border-border/40">
            <div className="flex flex-wrap gap-2 w-auto">
              {project.tags?.slice(0, 3).map((tag, index) => (
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium text-[#fcdfc1] bg-[#2e2c29]"
                  key={index}
                >
                  {tag}
                </span>
              ))}

              {project.tags?.length > 4 && (
                <span className="text-xs px-2 py-1 rounded-full bg-secondary/80 text-[#fcdfc1] font-medium">
                  +{project.tags.length - project.tags?.slice(0, 3).length}
                </span>
              )}
            </div>

            <p className="text-xs font-medium text-muted-foreground flex justify-end items-center w-auto">
              <DynamicIcon name="calendar" className="h-3 w-3 mr-1" />

              {project.endDate
                ? `${months[new Date(project.endDate).getMonth()]}, ${new Date(
                    project.endDate
                  ).getFullYear()}`
                : "Ongoing"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
