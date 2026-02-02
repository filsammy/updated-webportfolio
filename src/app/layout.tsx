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
  title: "Fil Sammy Abawag | Web Developer Portfolio",
  description:
    "A web developer passionate about creating elegant, performant, and accessible digital experiences using modern technologies.",
  keywords: [
    "web developer",
    "portfolio",
    "react",
    "next.js",
    "typescript",
    "full stack",
    "shopify theme",
    "shopify liquid",
  ],
  authors: [{ name: "Fil Sammy Abawag" }],
  openGraph: {
    type: "website",
    title: "Fil Sammy Abawag | Web Developer Portfolio",
    description:
      "A web developer passionate about creating elegant, performant, and accessible digital experiences.",
    siteName: "Fil Sammy Web Portfolio",
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
          defaultTheme="system"
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
