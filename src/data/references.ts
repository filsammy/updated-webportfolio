export interface Reference {
    id: string;
    name: string;
    title: string;
    company: string;
    image: string;
    linkedin: string;
}

export const references: Reference[] = [
    {
        id: "1",
        name: "Luis Paulo San Gabriel",
        title: "IT Instructor",
        company: "Zuitt Coding Bootcamp",
        image: "https://media.licdn.com/dms/image/v2/D5603AQF4wfN0u9MLSw/profile-displayphoto-crop_800_800/B56ZmFgJjZG0AI-/0/1758881422087?e=1773273600&v=beta&t=_TtDYkdcx8gI6qSNu_0VUOTqU2N5XCs0L4bmTssD1-U",
        linkedin: "https://www.linkedin.com/in/luis-paulo-san-gabriel-4a0978318/",
    },
    {
        id: "2",
        name: "Filibrico Abawag",
        title: "Senior DevOps Engineer",
        company: "3Cloud",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHWw1GH8sh69w/profile-displayphoto-shrink_800_800/B56ZcN5KL4HUAg-/0/1748284777616?e=1773273600&v=beta&t=8QzQuamworoiIJecsOhhttsKbBvlRTaGPIhrwa5XFAA",
        linkedin: "https://www.linkedin.com/in/jayr-abawag/",
    },
    {
        id: "3",
        name: "Romeo Arnado Jr.",
        title: "Azure DevOps Engineer",
        company: "Vertere Global Inc.",
        image: "/avatar-placeholder.png",
        linkedin: "https://www.linkedin.com/in/romeo-arnado-a6b789b8/",
    },
];
