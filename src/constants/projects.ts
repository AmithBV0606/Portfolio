import { ProjectDataType } from "@/types";

export const webApplicationProjects: Array<ProjectDataType> = [
    {
        name: "Ping",
        description: "Ping is a real-time, full-stack chat application designed for seamless and instant communication. Built with modern web technologies, it supports live messaging, dynamic user presence, and scalable architecture. The project emphasizes performance, responsiveness, and a clean user interface for an engaging chat experience.",
        miniDescription: "Ping is a real-time chat application enabling users to send and receive instant messages with a seamless, responsive UI and fast communication powered by WebSockets.",
        tags: ["NextJs", "TypeScript", "Socket.io", "Next-Auth", "React-Hook-Form", "Zod", "Tailwind CSS", "Shadcn UI", "Aceternity UI", "Magic UI", "Framer-motion", "Node.js", "Express", "Supabase(PostgreSQL)", "Prisma", "Redis", "QStash"],
        image: "/projects/SAAS-3.png",
        link: "https://ping.amithbv.com/",
        startDate: "2025-07-09T00:00:00.000Z",
        endDate: "2025-07-27T00:00:00.000Z"
    },
    {
        name: "FrameDrop",
        description: "FrameDrop is a full-stack SaaS application built with Next.js that enables users to effortlessly resize images and compress videos with high efficiency. Leveraging the power of Cloudinary, the platform offers fast and reliable media optimization tailored for content creators and social media professionals. With a user-friendly interface and secure authentication, FrameDrop streamlines the process of preparing media for various platforms, ensuring performance without compromising quality.",
        miniDescription: "FrameDrop is a media utility app that lets users compress videos and resize images for social platforms with customizable aspect ratios, using Cloudinary and Clerk for storage and auth.",
        tags: ["NextJs", "TypeScript", "Cloudinary", "NeonDB(Postgres)", "TailwindCSS", "DaisyUI", "Clerk-Auth", "Prisma ORM", "dayjs", "filesize", "lucid-react", "react-toastify"],
        image: "/projects/SAAS-2.png",
        link: "https://github.com/AmithBV0606/FrameDrop",
        startDate: "2025-05-05T00:00:00.000Z",
        endDate: "2025-05-19T00:00:00.000Z"
    },
    {
        name: "Anonyfy",
        description: "Anonyfy is a full-stack web application that allows users to receive anonymous messages or feedback from others. Built with a focus on privacy and simplicity, it generates unique shareable links for each user without requiring signups. The platform is ideal for collecting honest opinions, feedback, or just fun anonymous interactions.",
        miniDescription: "Anonyfy is a full-stack web app that lets users receive anonymous messages or feedback through a shareable link, ensuring privacy and easy communication.",
        tags: ["NextJs", "TypeScript", "Resend", "ReactJs", "TailwindCSS", "Shadcn-UI", "react-email", "Next-Auth", "MongoDB", "Mongoose ODM", "ZOD"],
        image: "/projects/SAAS-1.png",
        link: "https://anonyfy.amithbv.com/",
        startDate: "2025-04-08T00:00:00.000Z",
        endDate: "2025-04-27T00:00:00.000Z"
    },
];

export const mobileApplicationProjects: Array<ProjectDataType> =[
    {
        name: "TrackMate",
        description: "TrackMate is a React Native habit tracker application that enables users to build and maintain healthy routines. Users can create custom habits, mark daily progress, and visualize their consistency through intuitive UI components. The app is designed for simplicity and long-term habit reinforcement.",
        miniDescription: "TrackMate is a habit tracker app built with React Native that helps users build consistency by allowing them to create, manage, and monitor daily habits with a simple interface.",
        tags: ["React-Native", "TypeScript", "Expo", "Expo-router", "React-Native-Paper", "Appwrite-Auth", "Appwrite-Database"],
        image: "/projects/RN-2.png",
        link: "https://github.com/AmithBV0606/TrackMate",
        startDate: "2025-07-05T00:00:00.000Z",
        endDate: "2025-07-10T00:00:00.000Z"
    },
];