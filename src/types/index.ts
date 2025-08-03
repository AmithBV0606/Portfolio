import { LucideIcon } from "lucide-react";

export type Site = {
title: string
description: string
href: string
author: string
locale: string
location: string
}

export type NavLink = {
  href: string
  label: string
}

export type SocialLink = {
  href: string
  label: LucideIcon
}

export type IconMap = {
  [key: string]: string
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Frontend': Category[]
  'Backend': Category[]
  Databases: Category[]
  'Package Managers': Category[],
  'Deployment': Category[],
  'DevOps': Category[],
  'Development Tools': Category[],
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Other Software': Category[]
}

export type BreadCrumbsProps = {
  label: string, 
  href?: string, 
  icon?: LucideIcon
}

export type ProjectDataType = {
  name: string;
  description: string;
  miniDescription: string;
  tags: string[];
  image: string;
  link: string;
  startDate: string;
  endDate: string;
};
