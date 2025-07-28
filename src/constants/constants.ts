import type { IconMap, SocialLink, Site, Technologies, NavLink } from '@/types/index';
import { Github, Mail, PhoneCall, Instagram, Rss, LinkedinIcon } from "lucide-react";

export const SITE: Site = {
  title: 'Amith B V',
  description:
    "I'm a Full Stack Developer with a strong passion for building scalable and user-friendly web applications. With hands-on experience in both front-end and back-end development, I enjoy turning ideas into real-world solutions. I'm constantly learning new technologies to stay ahead in the ever-evolving tech landscape and take pride in writing clean, efficient code. I thrive in collaborative environments and love contributing to impactful projects that solve real problems.",
  href: 'https://cojocarudavid.me',
  author: 'Amith B V',
  locale: 'en-US',
  location: 'India',
}

export const NAV_LINKS: NavLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/AmithBV0606',
    label: Github,
  },
  {
    href: 'mailto:amithrao0606@gmail.com',
    label: Mail,
  },
  {
    href: 'https://www.instagram.com/amith_rao_01/',
    label: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/amith-b-v-151a281b4/",
    label: LinkedinIcon,
  },
  {
    href: '/rss.xml',
    label: Rss,
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export const technologies: Technologies = {
  'Frontend': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
    { text: 'Shadcn', logo: 'simple-icons:shadcnu' },
    { text: 'Material UI', logo: 'mdi:material-ui' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'TypeScript', logo: 'mdi:language-typescript' },
    { text: 'ReactJs', logo: 'mdi:react' },
    { text: 'NextJs', logo: 'simple-icons:nextdotjs' },

  ],
  'Backend': [
    { text: 'NodeJs', logo: 'simple-icons:nodedotjs' },
    { text: 'Bun', logo: 'simple-icons:bun' },
    { text: 'ExpressJs', logo: 'simple-icons:express' },
    { text: 'HonoJs', logo: 'simple-icons:hono' },
    { text: 'NestJs', logo: 'simple-icons:nestjs' },
    { text: 'JsonWebToken', logo: 'simple-icons:jsonwebtokens' },
    { text: 'Socket.io', logo: 'simple-icons:socketdotio' },
  ],
  Databases: [
    { text: 'PostgreSQL', logo: 'cib:postgresql' },
    { text: 'MongoDB', logo: 'cib:mongodb' },
    { text: 'Redis', logo: 'cib:redis' },
  ],
  'Package Managers': [
    { text: 'NPM', logo: 'mdi:npm' },
    { text: 'Yarn', logo: 'cib:yarn' },
    { text: 'Pnpm', logo: 'simple-icons:pnpm' },
  ],
  'Deployment':[
    { text: 'Vercel', logo: 'simple-icons:vercel' },
    { text: 'Netlify', logo: 'cib:netlify' },
    { text: 'Render', logo: 'simple-icons:render' },
  ],
  'DevOps': [
    { text: 'AWS', logo: 'mdi:aws' },
    { text: 'Docker', logo: 'mdi:docker' },
    { text: 'Kubernetes', logo: 'mdi:kubernetes' },
  ],
  'Development Tools': [
    { text: 'Git', logo: 'mdi:git'},
    { text: 'GitHub', logo: 'mdi:github'},
    { text: 'Ghostty Terminal', logo: 'simple-icons:ghostery'},
    { text: 'Bash Terminal', logo: 'simple-icons:gnubash'},
    { text: 'Postman', logo: 'simple-icons:postman'},
    { text: 'Visual Studio Code', logo: 'mdi:visual-studio' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'MacOS', logo: 'mdi:apple' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'C++', logo: 'mdi:language-cpp' },
    { text: 'Python', logo: 'mdi:language-python' },
    { text: 'Golang', logo: 'mdi:language-go' },
  ],
  'Other Software': [
    { text: 'Discord', logo: 'mdi:discord' },
    { text: 'Brave', logo: 'cib:brave' },
    { text: 'Chrome', logo: 'mdi:google-chrome' },
  ],
}
