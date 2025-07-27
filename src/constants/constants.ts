import type { IconMap, SocialLink, Site, Technologies } from '@/types/index';

export const SITE: Site = {
  title: 'Amith B V',
  description:
    "I'm a Full Stack Developer with a passion for creating web applications. I have experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills. I enjoy collaborating with teams and contributing to projects that make a difference.",
  href: 'https://cojocarudavid.me',
  author: 'Amith B V',
  locale: 'en-US',
  location: 'India',
}

export const NAV_LINKS: SocialLink[] = [
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
    href: 'https://github.com/cojocaru-david?ref=personal-website',
    label: 'GitHub',
  },
  {
    href: 'mailto:contact@cojocarudavid.me',
    label: 'Email',
  },
  {
    href: '+40 764 132 266',
    label: 'Phone',
  },
  {
    href: 'https://www.instagram.com/david._.cojo?ref=personal-website',
    label: 'Instagram',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
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
