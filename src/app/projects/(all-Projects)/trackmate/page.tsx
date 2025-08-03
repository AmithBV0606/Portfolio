import FooterSection from "@/components/FooterSection";
import IndividualProjectHeroSection from "@/components/IndividualProjectHeroSection";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import ProjectInfoCard from "@/components/ProjectInfoCard";
import TableOfContent from "@/components/TableOfContent";
import { mobileApplicationProjects } from "@/constants/projects";
import { ProjectDataType } from "@/types";
import Link from "next/link";
import React from "react";

const project: ProjectDataType[] = mobileApplicationProjects.filter(
  (project) => project.name.toLowerCase() === "trackmate"
);

const headings = [
  "🔍 Overview",
  "✨ Features",
  "⚙️ Tech-Stack",
  "🎥 Demo",
  "🚀 Installation",
  "👩‍🚒 Future Improvements",
  "👨‍💻 Author",
];

export default function TrackMatePage() {
  return (
    <>
      <IndividualProjectHeroSection project={project} />

      <div className="grid grid-cols-12 relative container top-28 md:top-36 w-full max-w-[calc(100vw-2rem)] mx-auto px-0 md:px-4">
        {/* Left Side Block : */}
        <TableOfContent headings={headings} />

        {/* Content inbetween : */}
        <article className="prose col-span-12 xl:col-span-8 max-w-none pt-10 text-justify xl:px-14">
          {/* 1. Overview : */}
          <div className="mb-12" id="overview">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[0]}
            </h1>

            <p className="mb-4 max-sm:text-sm text-neutral-500 dark:text-neutral-400">
              {project[0].description}
            </p>
          </div>

          {/* 2. Features : */}
          <div className="mb-12" id="features">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[1]}
            </h1>

            <div>
              <ul className="mb-4 list-disc max-sm:text-sm text-neutral-500 dark:text-neutral-400 pl-10 space-y-4">
                <li className="pl-4">✅ Add, edit, and delete habits.</li>
                <li className="pl-4">
                  🗓️ Add habits based on frequency (Daily, Weekly, Monthly).
                </li>
                <li className="pl-4">📊 Visual indicators for completion.</li>
                <li className="pl-4">
                  🔐 Secure authentication using Appwrite.
                </li>
                <li className="pl-4">
                  🧠 Minimalistic and intuitive UI using React Native Paper.
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Tech-Stack : */}
          <div className="mb-12" id="tech-stack">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[2]}
            </h1>

            <div>
              <ul className="mb-4 list-disc max-sm:text-sm text-neutral-500 dark:text-neutral-400 pl-10 space-y-4">
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Framework
                  </strong>{" "}
                  : React-Native + Expo
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Authentication
                  </strong>{" "}
                  : Appwrite-Auth
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Type Safety
                  </strong>{" "}
                  : TypeScript
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Styling
                  </strong>{" "}
                  : React Native Paper
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Backend
                  </strong>{" "}
                  : Appwrite(Backend-as-a-Service)
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Database
                  </strong>{" "}
                  : Appwrite Database
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Demo : */}
          <div className="mb-12" id="demo">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[3]}
            </h1>

            <div className="relative mb-4 px-6">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/M-nxgYafjhQ?si=equ0E1zeGFTiooAf"
                thumbnailSrc="/projects/RN-2.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/M-nxgYafjhQ?si=equ0E1zeGFTiooAf"
                thumbnailSrc="/projects/RN-2.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>

          {/* 5. Installation : */}
          <div className="mb-12" id="installation">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[4]}
            </h1>

            <p className="mb-4 max-sm:text-sm text-neutral-500 dark:text-neutral-400">
              For detailed installation and configuration steps, please visit
              the TrackMate&apos;s{" "}
              <Link
                href="https://github.com/AmithBV0606/TrackMate"
                target="_blank"
                className="text-[#ffdfb0] dark:text-[#fcdfc1] underline"
              >
                GitHub repository
              </Link>
              .
            </p>
          </div>

          {/* 6. Folder Structure : */}
          <div className="mb-12" id="future">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[5]}
            </h1>

            <div>
              <ul className="mb-4 list-disc max-sm:text-sm text-neutral-500 dark:text-neutral-400 pl-10 space-y-4">
                <li className="pl-4">Notifications for missed habits</li>
                <li className="pl-4">Streak calendar view</li>
                <li className="pl-4">Analytics dashboard</li>
              </ul>
            </div>
          </div>

          {/* 7. Author : */}
          <div className="mb-12" id="author">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[6]}
            </h1>

            <div className="mb-4">
              <p className="mb-4 max-sm:text-sm text-neutral-500 dark:text-neutral-400">
                Made with 💚 by{" "}
                <Link
                  href={"https://github.com/AmithBV0606"}
                  target="_blank"
                  className="text-[#ffdfb0] dark:text-[#fcdfc1] underline"
                >
                  Amith B V
                </Link>
              </p>
            </div>
          </div>
        </article>

        {/* Right Side Block : */}
        <ProjectInfoCard project={project} />
      </div>

      {/* Footer :*/}
      <div className="relative top-60 xl:top-72 container mx-auto w-full max-w-5xl border-t border-gray-800">
        <FooterSection />
      </div>
    </>
  );
}
