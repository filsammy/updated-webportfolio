"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

const otherProjects = projects.filter((p) => !p.featured);

export function OtherProjects() {
    return (
        <section id="other-projects" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Other Projects"
                    subtitle="More things I've built in my spare time."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {otherProjects.map((project) => (
                                <CarouselItem
                                    key={project.id}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <Card className="h-full border border-border hover:border-foreground/20 transition-colors">
                                        <CardContent className="p-6 flex flex-col h-full">
                                            <div className="flex items-center justify-between mb-4">
                                                <Folder className="w-8 h-8 text-muted-foreground" />
                                                <div className="flex gap-2">
                                                    {project.github && (
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="w-8 h-8"
                                                            asChild
                                                        >
                                                            <a
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label="View on GitHub"
                                                            >
                                                                <Github className="w-4 h-4" />
                                                            </a>
                                                        </Button>
                                                    )}
                                                    {project.live && (
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="w-8 h-8"
                                                            asChild
                                                        >
                                                            <a
                                                                href={project.live}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label="View live demo"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs font-mono text-muted-foreground"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 text-center"
                >
                    <Button asChild variant="outline" size="lg">
                        <Link href="/projects">
                            View All Projects
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
