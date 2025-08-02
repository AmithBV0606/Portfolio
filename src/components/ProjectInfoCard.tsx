import { ProjectDataType } from "@/types";
import React from "react";

export default function ProjectInfoCard({ project }: { project: ProjectDataType[] }) {
  return (
    <aside className="group col-span-12 xl:col-span-2 rounded-xl border p-4 xl:sticky xl:top-26 xl:-ml-2 xl:h-[calc(100vh-5rem)] xl:w-[285px] xl:rounded-none xl:border-none xl:p-0 mt-10 xl:mt-0">
      <div className="flex flex-col gap-4 rounded-xl border bg-card p-4 shadow-md transition-all duration-300 group-hover:shadow-lg xl:group-hover:shadow-none">
        <h2 className="text-lg font-bold font-custom">Project Details</h2>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p>
            Ping is a real-time chat application enabling users to send and
            receive instant messages with a seamless, responsive UI and fast
            communication powered by WebSockets.
          </p>
        </div>

        <hr className="my-4 border-t" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <h3 className="text-base font-semibold">Project Links</h3>
          <ul className="list-disc pl-4">
            <li>
              <a
                href={project[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project[0].link}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
