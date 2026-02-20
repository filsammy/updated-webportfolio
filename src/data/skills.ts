import {
    Layout,
    Server,
    Database,
    Shield,
    TestTube,
    Terminal,
    Bot,
    GitBranch,
    Globe,
    Cpu
} from "lucide-react";

export interface Skill {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        icon: Layout,
        skills: [
            { name: "HTML5 / CSS3" },
            { name: "JavaScript (ES6+)" },
            { name: "React / Next.js" },
            { name: "Vue.js" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Shadcn UI" },
            { name: "JQuery" },
        ],
    },
    {
        title: "Backend & DB",
        icon: Server,
        skills: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "PostgreSQL" },
            { name: "MongoDB" },
            { name: "Prisma" },
            { name: "Firebase" }
        ],
    },
    {
        title: "Security & Auth",
        icon: Shield,
        skills: [
            { name: "JWT / OAuth" },
            { name: "Bcrypt" },
            { name: "RBAC" },
            { name: "XSS Mitigation" },
        ],
    },
    {
        title: "Testing & QA",
        icon: TestTube,
        skills: [
            { name: "Postman" },
            { name: "Mocha" },
            { name: "Chai" },
        ],
    },
    {
        title: "Tools & Platforms",
        icon: Terminal,
        skills: [
            { name: "Git / GitHub" },
            { name: "VS Code" },
            { name: "Claude" },
            { name: "Vercel / Render" },
            { name: "AWS Lambda" },
            { name: "Figma" },
        ],
    },
    {
        title: "Concepts",
        icon: Bot,
        skills: [
            { name: "Responsive Design" },
            { name: "AI-Assisted Dev" },
            { name: "Mobile-First Development" },
            { name: "Claude" },
            { name: "RESTful APIs" },
            { name: "RBAC" },
            { name: "SDLC" },
            { name: "W3C Standards" },
            { name: "Accessibility (WCAG)" },
        ],
    },
];
