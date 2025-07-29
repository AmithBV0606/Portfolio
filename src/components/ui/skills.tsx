"use client";

import { useEffect } from 'react'
import { technologies } from '@/constants/constants';
import { Technologies, Category} from "@/types/index";
import { InfiniteScroll } from '@/components/ui/infinite-scroll';
import { type IconType } from 'react-icons'
import { FaQuestionCircle } from 'react-icons/fa'
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiBun,
  SiExpress,
  SiHono,
  SiNestjs,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNpm,
  SiYarn,
  SiPnpm,
  SiVercel,
  SiNetlify,
  SiRender,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGhostery,
  SiGnubash,
  SiPostman,
  SiMacos,
  SiPython,
  SiGo,
  SiDiscord,
  SiBrave,
} from 'react-icons/si'
import { FaAws, FaChrome, FaWindows } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";

const iconMap: { [key: string]: IconType } = {
  'mdi:language-html5': SiHtml5,
  'mdi:language-css3': SiCss3,
  'mdi:tailwind': SiTailwindcss,
  'simple-icons:shadcnu': SiShadcnui,
  'mdi:material-ui': SiMui,
  'mdi:language-javascript': SiJavascript,
  'mdi:language-typescript': SiTypescript,
  'mdi:react': SiReact,
  'simple-icons:nextdotjs': SiNextdotjs,
  'simple-icons:nodedotjs': SiNodedotjs,
  'simple-icons:bun': SiBun,
  'simple-icons:express': SiExpress,
  'simple-icons:hono': SiHono,
  'simple-icons:nestjs': SiNestjs,
  'simple-icons:jsonwebtokens': SiJsonwebtokens,
  'simple-icons:socketdotio': SiSocketdotio,
  'cib:postgresql': SiPostgresql,
  'cib:mongodb': SiMongodb,
  'cib:redis': SiRedis,
  'mdi:npm': SiNpm,
  'cib:yarn': SiYarn,
  'simple-icons:pnpm': SiPnpm,
  'simple-icons:vercel': SiVercel,
  'cib:netlify': SiNetlify,
  'simple-icons:render': SiRender,
  'mdi:aws': FaAws,
  'mdi:docker': SiDocker,
  'mdi:kubernetes': SiKubernetes,
  'mdi:git': SiGit,
  'mdi:github': SiGithub,
  'simple-icons:ghostery': SiGhostery,
  'simple-icons:gnubash': SiGnubash,
  'simple-icons:postman': SiPostman,
  'mdi:visual-studio': BiLogoVisualStudio,
  'mdi:windows': FaWindows,
  'mdi:apple': SiMacos,
  'mdi:language-cpp': TbBrandCpp,
  'mdi:language-python': SiPython,
  'mdi:language-go': SiGo,
  'mdi:discord': SiDiscord,
  'cib:brave': SiBrave,
  'mdi:google-chrome': FaChrome
}

const categories = Object.keys(technologies)
// console.log("Categories : ", categories);

const groupSize = Math.ceil(categories.length / 3); // 4
// console.log("Group Size : ", groupSize);

const categoryGroups = [
  categories.slice(0, groupSize),
  categories.slice(groupSize, groupSize * 2),
  categories.slice(groupSize * 2),
]
// console.log("Category Groups", categoryGroups);

const Skills: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.tech-badge').forEach((badge) => {
      badge.classList.add('tech-badge-visible')
    })
  }, [])

  return (
    <div className="z-30 mt-12 flex w-full flex-col max-w-[calc(100vw-5rem)] mx-auto lg:max-w-4xl">
      <div className="space-y-2">
        {categoryGroups.map((group, groupIndex) => (
          <InfiniteScroll
            key={groupIndex}
            duration={50000}
            direction={groupIndex % 2 === 0 ? 'normal' : 'reverse'}
            showFade={true}
            className="flex flex-row justify-center"
          >
            {group.flatMap((category) =>
              technologies[category as keyof Technologies].map(
                (tech: Category, techIndex: number) => {
                  const IconComponent = iconMap[tech.logo] || FaQuestionCircle
                  return (
                    <div
                      key={`${category}-${techIndex}`}
                      className="tech-badge repo-card border-border bg-card text-muted-foreground mr-5 flex items-center gap-3 rounded-full border px-4 py-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                      data-tech-name={`${category}-${techIndex}`}
                    >
                      <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg shadow-inner">
                        <IconComponent className="tech-icon text-primary dark:text-[#fcdfc1] text-2xl" />
                      </span>
                      <span className="text-foreground font-custom">
                        {tech.text}
                      </span>
                    </div>
                  )
                },
              ),
            )}
          </InfiniteScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
