export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category?: "Full-Stack" | "Frontend" | "Backend" | "Client Work" | "In Development";
    github?: string;
    live?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "10",
        title: "Water Station Online Ordering System",
        description: "A fullstack web application for a water station business offering secure user authentication, detailed profile creation, dynamic matching system, and real-time messaging. Features mobile-responsive UI and light/dark themes.",
        image: "/water-station2.PNG",
        tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn", "Prisma", "PostgreSQL(Neon)"],
        category: "In Development",
        github: "https://github.com/filsammy/mariclaire-waterstation-system",
        live: "https://mariclaire-waterstation-system.vercel.app/",
        featured: true,
    },
    {
        id: "0",
        title: "Fullstack Web Dating App",
        description: "A fullstack dating web application offering secure user authentication, detailed profile creation, dynamic matching system, and real-time messaging. Features mobile-responsive UI and light/dark themes.",
        image: "",
        tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "TailwindCSS", "Shadcn"],
        category: "Full-Stack",
        github: "https://github.com/filsammy/dating-app-whitecloak",
        live: "https://dating-app-phi-five.vercel.app/",
        featured: false,
    },
    {
        id: "2",
        title: "Fullstack E-commerce App",
        description: "An e-commerce web app built with Vue.js featuring product browsing, cart management, checkout, and an admin dashboard with full CRUD operations.",
        image: "/e-commerce.PNG",
        tags: ["Vue.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
        category: "Full-Stack",
        github: "https://github.com/filsammy/eCommerce-app",
        live: "https://e-commerce-app-nine-ashen.vercel.app",
        featured: true,
    },
    {
        id: "5",
        title: "Fullstack Course Booking App",
        description: "A complete course enrollment system built with the MEVN stack featuring user registration, secure course management, and a custom RESTful API.",
        image: "",
        tags: ["Vue.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
        category: "Full-Stack",
        github: "https://github.com/filsammy/course-booking-app",
        live: "https://course-booking-app-steel.vercel.app",
        featured: false,
    },
    {
        id: "4",
        title: "Mobile Movie App",
        description: "A mobile-focused movie browsing application built with React Native. Features home, search, saved movies, and detailed movie pages powered by TMDB API.",
        image: "",
        tags: ["React Native", "TailwindCSS", "NativeWind", "Expo", "Appwrite", "TMDB API"],
        category: "Frontend",
        github: "https://github.com/filsammy/mobile-movie-app",
        featured: false,
    },
    {
        id: "3",
        title: "Fullstack Blog App",
        description: "A full-stack blogging platform built with the MERN stack featuring secure authentication, blog CRUD operations, and an admin dashboard.",
        image: "",
        tags: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Postman"],
        category: "Full-Stack",
        github: "https://github.com/filsammy/blog-application",
        live: "https://blog-application-react-two.vercel.app",
        featured: false,
    },
    {
        id: "8",
        title: "Lift Right",
        description: "A proposed frontend website design for a Gym business owner.",
        image: "",
        tags: ["React", "TypeScript", "TailwindCSS", "React Router"],
        category: "Frontend",
        github: "https://github.com/filsammy/lift-right-web-app",
        live: "https://lift-right-web-app.vercel.app/",
        featured: false,
    },
    {
        id: "7",
        title: "The Strand V1",
        description: "A website translated from the designer's layout for one of Sandy Beach Hospitality’s resorts in Boracay.",
        image: "",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        category: "Client Work",
        live: "https://strandboracay.coffeecoding.co/",
        featured: false,
    },
    {
        id: "6",
        title: "The Strand V2",
        description: "A project proposal for one of Sandy Beach Hospitality's Resort in Boracay.",
        image: "/client-work.PNG",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        category: "Client Work",
        github: "https://github.com/filsammy/the-strand-v2",
        live: "https://the-strand-v2.vercel.app/",
        featured: true,
    },
    {
        id: "1",
        title: "Sandy Beach Hospitality",
        description: "A replicated website from their original website that we proposed to add an AI chatbot.",
        image: "",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        category: "Client Work",
        live: "https://sandybeach.coffeecoding.co/",
        featured: false,
    },
    {
        id: "9",
        title: "China Young Talent Association",
        description: "A proposed replicated website for a Chinese ESL website.",
        image: "",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        category: "Client Work",
        github: "https://github.com/filsammy/school_website",
        live: "https://school-pink-xi.vercel.app/",
        featured: false,
    },

];
