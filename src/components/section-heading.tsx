"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    title,
    subtitle,
    align = "left",
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`mb-12 ${align === "center" ? "text-center" : ""}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
            {subtitle && (
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
                    {subtitle}
                </p>
            )}
            <div
                className={`mt-4 h-px w-16 bg-foreground ${align === "center" ? "mx-auto" : ""
                    }`}
            />
        </motion.div>
    );
}
