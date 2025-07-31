import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { DynamicIcon } from "lucide-react/dynamic";
import { BreadCrumbsProps } from "@/types";

export default function GenericBreadCrumbs({
  items,
}: {
  items: BreadCrumbsProps[];
}) {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home Icon remains constant : */}
          <BreadcrumbItem>
            <BreadcrumbLink href="/" aria-label="Home" title="Home">
              <span className="sr-only">Home</span>
              <DynamicIcon name="home" className="size-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* These icons keeps changing as we visit different pages : */}
          {items.map((item, index) => (
            <Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === items.length - 1 ? (
                  <BreadcrumbPage>
                    <span className="flex items-center gap-x-2">
                      {item.icon && <item.icon className="size-4" />}
                      {item.label}
                    </span>
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>
                    <span className="flex items-center gap-x-2">
                      {item.icon && <item.icon className="size-4" />}
                      {item.label}
                    </span>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
