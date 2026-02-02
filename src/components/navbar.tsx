"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
    { href: "/#certifications", label: "Certifications" },
    { href: "/#skills", label: "Skills" },
    { href: "/#timeline", label: "Timeline" },
    { href: "/#references", label: "References" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-sm border-b border-border"
                : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-semibold text-lg tracking-tight">
                    Fil Sammy Abawag
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="/#about"
                        className="text-sm font-bold text-muted-foreground hover:text-foreground dark:text-foreground transition-colors"
                    >
                        About
                    </a>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground dark:text-foreground transition-colors outline-none focus:text-foreground">
                            Projects <ChevronDown className="w-3 h-3" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <DropdownMenuItem asChild>
                                <Link href="/#projects" className="cursor-pointer">
                                    Featured Projects
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/#other-projects" className="cursor-pointer">
                                    Other Projects
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/projects" className="cursor-pointer">
                                    All Projects
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {navLinks.filter(link => link.href !== "#about").map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-bold text-muted-foreground hover:text-foreground dark:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <ThemeToggle />

                    <Button asChild variant="outline" size="sm" className="ml-2">
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                            <FileText className="w-4 h-4 mr-2" />
                            View CV
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/filsammy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/fil-sammy-abawag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-9 h-9">
                                <Menu className="w-5 h-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] p-0">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-6 border-b border-border">
                                    <span className="font-semibold">Menu</span>
                                </div>
                                <nav className="flex-1 p-6">
                                    <div className="flex flex-col gap-4">
                                        <a
                                            href="/#about"
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-bold text-foreground hover:text-primary transition-colors py-2"
                                        >
                                            About
                                        </a>
                                        <Link
                                            href="/projects"
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-bold text-foreground hover:text-primary transition-colors py-2"
                                        >
                                            Projects
                                        </Link>
                                        {navLinks.filter(link => link.href !== "/#about").map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg font-bold text-foreground hover:text-primary transition-colors py-2"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                                <div className="p-6 border-t border-border space-y-4">
                                    <div className="flex items-center justify-center gap-4">
                                        <Button variant="ghost" size="icon" asChild>
                                            <a href="https://github.com/filsammy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </Button>
                                        <Button variant="ghost" size="icon" asChild>
                                            <a href="https://www.linkedin.com/in/fil-sammy-abawag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        </Button>
                                    </div>
                                    <Button asChild className="w-full">
                                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                                            <FileText className="w-4 h-4 mr-2" />
                                            View Resume
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
