"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/skills";

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="Tools I use to bring ideas to life."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={category.title}
                            className="group border border-border/50 bg-muted/20 p-6 hover:border-border transition-colors rounded-lg"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <category.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors" />
                                <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">
                                    {category.title}
                                </h3>
                            </div>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="flex flex-wrap gap-2"
                            >
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="bg-background border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-md shadow-sm pointer-events-none"
                                    >
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
