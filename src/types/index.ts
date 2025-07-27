export type Site = {
title: string
description: string
href: string
author: string
locale: string
location: string
}

export type SocialLink = {
  href: string
  label: string
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