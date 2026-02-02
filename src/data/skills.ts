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
        ],
    },
    {
        title: "Backend",
        icon: Server,
        skills: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "PostgreSQL" },
            { name: "MongoDB" },
            { name: "Prisma ORM" },
            { name: "REST APIs" },
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
            { name: "XSS Prevention" },
            { name: "Secure Headers" },
        ],
    },
    {
        title: "Testing & QA",
        icon: TestTube,
        skills: [
            { name: "Postman" },
            { name: "Playwright" },
            { name: "Mocha / Chai" },
        ],
    },
    {
        title: "Tools & Platforms",
        icon: Terminal,
        skills: [
            { name: "Git / GitHub" },
            { name: "VS Code" },
            { name: "Vercel / Render" },
            { name: "AWS Lambda" },
            { name: "Figma" },
        ],
    },
    {
        title: "AI & Emerging",
        icon: Bot,
        skills: [
            { name: "Prompt Engineering" },
            { name: "AI-Assisted Dev" },
            { name: "Antigravity" },
            { name: "Claude" },
            { name: "GitHub Copilot" },
            { name: "ChatGPT" },
            { name: "Gemini" },
        ],
    },
];
