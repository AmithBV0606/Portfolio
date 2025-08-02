import { ProjectDataType } from '@/types'
import React from 'react'
import GenericBreadCrumbs from './GenericBreadCrumbs'
import { Folder, FolderOpen } from "lucide-react";
import { cn } from '@/lib/utils'
import { badgeVariants } from './ui/badge'
import { DynamicIcon } from 'lucide-react/dynamic'
import Image from 'next/image'

export default function IndividualProjectHeroSection({ project }: { project: ProjectDataType[]}) {
  return (
    <div className="relative container top-28 md:top-32 w-full mx-auto text-center lg:max-w-[992px] px-3 md:px-4 xl:px-0">
        {/* BreadCrumbs : */}
        <div className="col-start-2 mb-6">
          <GenericBreadCrumbs
            items={[
              { href: "/projects", label: "Projects", icon: Folder },
              { label: project[0].name, icon: FolderOpen },
            ]}
          />
        </div>

        {/* Project Name and Tag : */}
        <section className="col-start-2 flex flex-col gap-y-6 text-start mb-6">
          <div className="flex flex-col">
            <h1 className="mb-2 text-4xl leading-tight font-extrabold text-pretty sm:text-5xl">
              {project[0].name}
            </h1>

            <div className="flex flex-wrap justify-start gap-2">
              {project[0].tags && project[0].tags.length > 0 ? (
                project[0].tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className={cn(
                      badgeVariants({
                        variant: "secondary",
                      }),
                      "bg-[#2e2c29] text-[#fcdfc1] cursor-pointer"
                    )}
                  >
                    <DynamicIcon name="hash" className="size-3" />
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-muted-foreground text-sm">
                  No tags available
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Project Image(Planning to add Video) : */}
        <Image
          src={project[0].image}
          alt={project[0].name}
          className="col-start-2 mb-8 h-auto w-full rounded-3xl border border-gray-400 object-cover"
          loading="lazy"
          width={1800}
          height={1600}
        />
      </div>
  )
}
