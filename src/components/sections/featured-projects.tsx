"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function FeaturedProjects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="A selection of my recent work and personal projects."
                />

                <div className="flex flex-col gap-24">
                    {featuredProjects.map((project, index) => {
                        // Alternate order: Even (0, 2) = Text Left, Image Right. Odd (1) = Image Left, Text Right.
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                            >
                                {/* Image Column - 60-65% width */}
                                <div className={`w-full lg:w-[60%] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border/50 shadow-xl group">
                                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <Image
                                            src={project.image || "/project-placeholder-1.png"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Overlay Actions on Hover */}
                                        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm">
                                            {project.github && (
                                                <Button variant="secondary" size="default" className="rounded-full" asChild>
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                        <Github className="w-4 h-4 mr-2" /> View Code
                                                    </a>
                                                </Button>
                                            )}
                                            {project.live && (
                                                <Button size="default" className="rounded-full" asChild>
                                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Text Column - 35-40% width */}
                                <div className={`w-full lg:w-[40%] text-left space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="space-y-2">
                                        <span className="text-primary font-mono text-sm tracking-wider">
                                            {project.category?.join(" · ")}
                                        </span>
                                        <h3 className="text-3xl font-bold tracking-tight text-foreground">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="relative p-6 bg-muted/30 border border-border/50 rounded-lg shadow-sm text-muted-foreground leading-relaxed hover:bg-muted/50 transition-colors">
                                        {project.description}
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-mono font-medium text-primary/80 border px-2 py-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
