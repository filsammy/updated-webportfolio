"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#references", label: "References" },
];

const socialLinks = [
  { href: "https://github.com/filsammy", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/fil-sammy-abawag",
    icon: Linkedin,
    label: "LinkedIn",
  },
  //   { href: "mailto:filsammy@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-semibold text-lg tracking-tight">
              Fil Sammy Abawag
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building user-focused web experiences through thoughtful design, process, and modern tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="w-9 h-9"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
            <span className="font-semibold">Email:</span>
            <span> filsammy@gmail.com</span>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
          <p>
            Designed & Built with{" "}
            <span className="text-foreground">Next.js</span> &{" "}
            <span className="text-foreground">Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="w-10 h-10 shadow-lg"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
