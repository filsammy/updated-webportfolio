export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string; // Optional link to verify
    image?: string; // Optional logo of issuer
}

export const certifications: Certification[] = [
    {
        id: "1",
        title: "Full Stack Web Development",
        issuer: "Zuitt Coding Bootcamp",
        date: "2025",
        credentialUrl: "http://share.zertify.zuitt.co/certificate/1fcd5c36-3eea-4afb-94f7-257ef95ebbdc",
    },
    {
        id: "2",
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "2025",
        credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/FilSammyAbawag-8121/781F107B9AD91E38?sharingId=3712709114F1705D",
    },
    {
        id: "3",
        title: "Career Service Professional Eligibility",
        issuer: "CSC, Philippines ",
        date: "2024",
        credentialUrl: "",
    },
    {
        id: "4",
        title: "Foundations: Data, Data, Everywhere",
        issuer: "Google(Coursera)",
        date: "2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/GWKN0Q78VIXZ?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    },
    {
        id: "5",
        title: "Tester Essentials: Unit Test Development",
        issuer: "Zuitt Coding Bootcamp",
        date: "2026",
        credentialUrl: "http://share.zertify.zuitt.co/certificate/2d5ad761-9177-4022-9be6-e2d17646d199",
    },
];
