import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { webApplicationProjects } from "@/constants/projects";
import { ProjectDataType } from "@/types";
import React from "react";
import "@/app/typography.css";
import TableOfContent from "@/components/TableOfContent";
import ProjectInfoCard from "@/components/ProjectInfoCard";
import IndividualProjectHeroSection from "@/components/IndividualProjectHeroSection";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Link from "next/link";

const project: ProjectDataType[] = webApplicationProjects.filter(
  (project) => project.name.toLowerCase() === "ping"
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

export default async function PingPage() {
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
                <li className="pl-4">
                  🔐 Secure user authentication with NextAuth
                </li>
                <li className="pl-4">💬 Real-time messaging via Socket.io</li>
                <li className="pl-4">
                  📬 Messaging queue powered by QStash for scalable message
                  delivery
                </li>
                <li className="pl-4">
                  🧠 Form validation with Zod & React Hook Form
                </li>
                <li className="pl-4">
                  🌈 Beautiful UI powered by TailwindCSS and popular UI kits
                </li>
                <li className="pl-4">
                  🧩 Scalable architecture using Redis pub/sub and streams
                </li>
                <li className="pl-4">
                  ⚡ Optimistic UI and smooth transitions with Framer Motion
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Tech-Stack : */}
          <div className="mb-12" id="tech-stack">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold font-custom">
              {headings[2]}
            </h1>

            {/* Frontend : */}
            <div>
              <h3 className="text-lg font-bold mb-4 pl-2 font-custom">
                Frontend :
              </h3>

              <ul className="mb-4 list-disc max-sm:text-sm text-neutral-500 dark:text-neutral-400 pl-10 space-y-4">
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Framework
                  </strong>{" "}
                  : Next.js + TypeScript
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Authentication
                  </strong>{" "}
                  : Next-Auth
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Forms & Validation
                  </strong>{" "}
                  : React Hook Form + Zod
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Styling
                  </strong>{" "}
                  : Tailwind CSS, Shadcn UI, Aceternity UI, Magic UI
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Animation
                  </strong>{" "}
                  : Framer Motion
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Realtime Client
                  </strong>{" "}
                  : Socket.io-client
                </li>
              </ul>
            </div>

            {/* Backend : */}
            <div>
              <h3 className="text-lg font-bold mb-4 pl-2 font-custom">
                Backend :
              </h3>

              <ul className="mb-4 list-disc max-sm:text-sm text-neutral-500 dark:text-neutral-400 pl-10 space-y-4">
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Server
                  </strong>{" "}
                  : Node.js + Express + TypeScript
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    ORM
                  </strong>{" "}
                  : Prisma
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Databse
                  </strong>{" "}
                  : PostgreSQL (hosted on Supabase)
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    WebSocket Server
                  </strong>{" "}
                  : Socket.io
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Messaging Queue
                  </strong>{" "}
                  : QStash from Upstash
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Redis
                  </strong>{" "}
                  : ioredis + Upstash Redis with
                  <Badge variant={"secondary"} className="ml-2">
                    @socket.io/redis-streams-adapter
                  </Badge>
                </li>
                <li className="pl-4">
                  <strong className="font-extrabold dark:text-white text-black underline">
                    Auth
                  </strong>{" "}
                  : JSON Web Tokens (JWT)
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
                videoSrc="https://www.youtube.com/embed/7e3ZjhShbF4?si=UHYZ5svIjiL8s-N1"
                thumbnailSrc="/thumbnails/Ping-Thumbnail.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/7e3ZjhShbF4?si=UHYZ5svIjiL8s-N1"
                thumbnailSrc="/thumbnails/Ping-Thumbnail.png"
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
              the Ping&apos;s{" "}
              <Link
                href="https://github.com/AmithBV0606/Ping"
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
                <li className="pl-4">Add the profile page for the user.</li>
                <li className="pl-4">
                  Users will be able to send Images and Videos.
                </li>
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
