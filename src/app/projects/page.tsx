"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
    const [categoryFilter, setCategoryFilter] = React.useState<string | null>(null);
    const [frameworkFilter, setFrameworkFilter] = React.useState<string | null>(null);

    // Define filter options
    const categories = ["Full-Stack", "Frontend", "Client Work", "In Development"];
    const frameworks = ["Next.js", "React", "Vue.js", "Node.js"];

    // Filter projects based on both category and framework
    const filteredProjects = React.useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory = !categoryFilter || (project.category?.includes(categoryFilter as "Full-Stack" | "Frontend" | "Backend" | "Client Work" | "In Development") ?? false);
            const matchesFramework = !frameworkFilter || project.tags.some(tag => tag.includes(frameworkFilter));
            return matchesCategory && matchesFramework;
        });
    }, [categoryFilter, frameworkFilter]);

    const clearFilters = () => {
        setCategoryFilter(null);
        setFrameworkFilter(null);
    };

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Button asChild variant="ghost" className="gap-2">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </Button>
                </motion.div>

                <SectionHeading
                    title="All Projects"
                    subtitle="A complete collection of my work and personal projects."
                />

                {/* Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 space-y-6"
                >
                    {/* Category Filters */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Project Type
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <Button
                                variant={categoryFilter === null ? "default" : "outline"}
                                size="sm"
                                onClick={() => setCategoryFilter(null)}
                            >
                                All Types
                            </Button>
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={categoryFilter === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setCategoryFilter(category)}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Framework Filters */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Framework / Library
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <Button
                                variant={frameworkFilter === null ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFrameworkFilter(null)}
                            >
                                All Frameworks
                            </Button>
                            {frameworks.map((framework) => (
                                <Button
                                    key={framework}
                                    variant={frameworkFilter === framework ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setFrameworkFilter(framework)}
                                >
                                    {framework}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    {(categoryFilter || frameworkFilter) && (
                        <div className="flex items-center gap-2 pt-2">
                            <span className="text-sm text-muted-foreground">Active filters:</span>
                            {categoryFilter && (
                                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                    {categoryFilter}
                                </span>
                            )}
                            {frameworkFilter && (
                                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                    {frameworkFilter}
                                </span>
                            )}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearFilters}
                                className="ml-2 h-7 text-xs"
                            >
                                Clear All
                            </Button>
                        </div>
                    )}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    key={`${categoryFilter}-${frameworkFilter}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants}>
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
                                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-muted-foreground">
                            No projects found with the selected filters.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={clearFilters}
                        >
                            Clear Filters
                        </Button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
