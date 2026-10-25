import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundElements } from "@/components/background-elements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webportfolio-1-psi.vercel.app"),
  title: {
    default: "Fil Sammy Abawag | Front-End & Full-Stack Developer",
    template: "%s | Fil Sammy Abawag",
  },
  description:
    "Front-end and full-stack developer based in Makati, Philippines. I build responsive, accessible websites and web apps with React, Next.js, TypeScript and Tailwind CSS.",
  keywords: [
    "Fil Sammy Abawag",
    "front-end developer",
    "full-stack developer",
    "web developer Philippines",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Tailwind CSS",
    "responsive web design",
    "web accessibility",
    "portfolio",
  ],
  authors: [{ name: "Fil Sammy Abawag" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Fil Sammy Abawag | Front-End & Full-Stack Developer",
    description:
      "Responsive, accessible websites and web apps built with React, Next.js, TypeScript and Tailwind CSS.",
    siteName: "Fil Sammy Abawag Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fil Sammy Abawag | Front-End & Full-Stack Developer",
    description:
      "Responsive, accessible websites and web apps built with React, Next.js, TypeScript and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <BackgroundElements />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
