"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { references } from "@/data/references";

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

export function References() {
    return (
        <section id="references" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="People Behind My Career Shift"
                    subtitle="Mentors and industry professionals who helped me transition into tech."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {references.map((reference) => (
                        <motion.div key={reference.id} variants={itemVariants}>
                            <Card className="border border-border hover:border-foreground/20 transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-14 h-14 overflow-hidden rounded-full border border-border shrink-0">
                                            <Image
                                                src={reference.image || "/avatar-placeholder.png"}
                                                alt={reference.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold truncate">{reference.name}</h3>
                                            <p className="text-sm text-muted-foreground truncate">
                                                {reference.title}
                                            </p>
                                            <p className="text-sm text-muted-foreground truncate">
                                                {reference.company}
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="w-8 h-8 shrink-0"
                                            asChild
                                        >
                                            <a
                                                href={reference.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${reference.name}'s LinkedIn`}
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
