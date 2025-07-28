import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimeLineSection() {
  const data = [
    {
      title: "September 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            This was the month I took my first step toward becoming a Software
            Engineer by enrolling in the "DSA with Java" course from Apna
            College on September 17th.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/leetcode/leetcode-1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <Image
              src="/leetcode/leetcode-2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>
        </div>
      ),
    },
    {
      title: "December 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            After spending two months learning various Java concepts and diving
            into DSA, I started to feel burnt out. I hit a wall — it felt like
            DSA just wasn&apos;t for me. In fact, I began to genuinely dislike
            it.
          </p>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            That&apos;s when I came across a YouTuber named Harkirat Singh, who
            had recently landed a remote role at Backpack with a $500K offer. I
            was Intrigued and started learning more about him. At the time, he
            was running Full-Stack Developer cohorts, and the first batch had
            just concluded in October. With Cohort 2 set to begin on December
            17th, I didn&apos;t overthink it — I signed up without hesitation
            and became a part of "100xdevs" community.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/cohort/HKS-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/cohort/HKS-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            Since the Full-Stack cohort didn&apos;t have any prerequisites, I
            thought it would be a good idea to build some foundational knowledge
            beforehand. So, on December 17th itself, I created my GitHub account
            and began learning HTML and CSS. I even built my very first project
            using just HTML i.e "Event-Management-Page". Then I went on to build
            "Amazon" UI clone.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/HTML-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/projects/HTML-CSS-1.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Initially, I struggled to keep up with the pace of the cohort. To
            strengthen my fundamentals, I started building more HTML and CSS
            projects by following YouTube tutorials, which helped me get
            comfortable with the technologies.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/HTML-CSS-2.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/projects/HTML-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            I then moved on to learning my first CSS framework — Tailwind CSS.
            Alongside that, I began studying the fundamentals of JavaScript.
            Using both Tailwind CSS and JavaScript, I went on to build a few
            more projects to solidify my understanding.
          </p>

          <div className="grid grid-cols-1">
            <img
              src="/projects/JS-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            Once I became comfortable with HTML, CSS, Tailwind CSS, and
            JavaScript, I dove into learning React.js by building several small
            projects (as shown in the first image). Eventually, I took on a
            mid-tier, frontend-heavy project — a clone of the original "GIPHY"
            website — to put my React skills to the test.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/React-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/projects/React-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Even after building several small to mid-tier React.js projects, I
            felt something was missing. I wanted to dive deeper into React's
            core fundamentals, so I began following a tutorial playlist by
            WebDevSimplified on YouTube and practiced Frontend machine coding
            tasks.
          </p>

          <div className="grid grid-cols-1">
            <img
              src="/projects/React-3.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-left shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            To keep my JavaScript skills sharp, I also started following the
            Chai-aur-JavaScript series by Hitesh Choudhary on YouTube. Along the
            way, I built several small JavaScript projects to reinforce what I
            was learning.
          </p>

          <div className="grid grid-cols-1">
            <img
              src="/projects/JS-4.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-left shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            After completing these projects and tutorials, I felt confident
            enough to begin preparing for frontend interviews. To take my
            preparation further, I enrolled in Roadside Coder&apos;s Frontend
            Interview Preparation course.
          </p>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-2">
            Over the next few months, I applied to several frontend roles at
            various companies but, unfortunately, didn&apos;t receive any
            callbacks. During this time, I attended a 3-day developer meetup in
            Bangalore organized by Harkirat Singh. There, he encouraged me to
            explore full-stack development. Taking his advice, I spent the rest
            of the months — starting from the end of August — focusing on
            backend technologies and deepening my understanding of TypeScript.
          </p>

          <div className="grid grid-cols-1">
            <img
              src="/meet-ups/MeetUp-1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            During this period, I also dove into the advanced MERN stack,
            learning technologies like Next.js (including SSR, CSR, and the App
            Router), Prisma ORM, PostgreSQL, Next-Auth, Docker, and the
            fundamentals of DevOps.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            After completing the 0-to-1 journey in Cohort-2, I went on to build
            a full-stack project called "PlanIt", a project management platform.
            Following that, I delved into advanced state management tools like
            Redux and Zustand, and also explored React Hook Form for efficient
            form handling in React.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/FS-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/tools/redux.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/tools/zustand.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/tools/rtk.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            After building a full-stack project, I found myself looking for
            something new and exciting to explore. That&apos;s when I began my
            mobile development journey with React Native. Since then, I&apos;ve
            built two applications: "Pill-Buddy", a medicine reminder app, and
            "TrackMate", a habit tracker application.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/RN-1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/projects/RN-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            After building full-stack mobile applications with React Native, I
            shifted my focus back to web development and created two full-stack
            SaaS applications using Next.js. The first, "Anonify", is an
            anonymous messaging platform that allows content creators to engage
            with their audience. The second, "FrameDrop", is a media utility
            SaaS that offers image cropping and video compression features,
            powered by Cloudinary.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <img
              src="/projects/SAAS-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />

            <img
              src="/projects/SAAS-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-fill shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:border dark:border-gray-600"
            />
          </div>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-12">
            Most recently, I built Ping, a real-time, scalable chatting platform
            using all the modern technologies I&apos;ve learned so far. This
            stands as my biggest and most ambitious project to date — a true
            capstone. It features real-time communication powered by Socket.io,
            showcasing my ability to build complex, full-stack applications
            end-to-end.
          </p>

          <div className="grid grid-cols-1">
            <video
              width="500"
              height="500"
              preload="none"
              loop
              muted
              autoPlay
              className="w-full rounded-lg"
            >
              <source src="/video-demo/Ping-Demo.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I&apos;m currently focused on expanding my backend expertise by
            learning modern technologies such as NestJS and Django, along with
            diving deeper into DevOps and infrastructure management. My goal is
            to strengthen my understanding of scalable backend architectures and
            deployment workflows. In the coming weeks, I plan to apply this
            knowledge by building new, production-ready projects that showcase
            these technologies in action.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip top-14 md:top-40 mx-auto">
      <Timeline data={data} />
    </div>
  );
}
