"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundElements() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Each group represents 3 layered boxes at the same position
    const boxGroups = [
        // Top left cluster
        {
            baseSize: 100,
            top: "10%",
            left: "8%",
            rotation: 12
        },
        // Top right cluster
        {
            baseSize: 120,
            top: "15%",
            right: "12%",
            rotation: -8
        },
        // // Middle left cluster
        {
            baseSize: 90,
            top: "40%",
            left: "15%",
            rotation: 15
        },
        // Center cluster
        // {
        //     baseSize: 110,
        //     top: "35%",
        //     left: "50%",
        //     rotation: -12
        // },
        // Middle right cluster
        // {
        //     baseSize: 85,
        //     top: "50%",
        //     right: "18%",
        //     rotation: 10
        // },
        // Bottom left cluster
        {
            baseSize: 95,
            bottom: "20%",
            left: "10%",
            rotation: -15
        },
        // // Bottom center cluster
        // {
        //     baseSize: 105,
        //     bottom: "15%",
        //     left: "45%",
        //     rotation: 8
        // },
        // Bottom right cluster
        {
            baseSize: 115,
            bottom: "25%",
            right: "8%",
            rotation: -10
        },
        // // Additional mid-top cluster
        {
            baseSize: 80,
            top: "25%",
            right: "35%",
            rotation: 20
        },
        // // Additional mid-bottom cluster
        {
            baseSize: 100,
            bottom: "40%",
            left: "35%",
            rotation: -18
        },
    ];

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
            {/* Layered Decorative Box Groups */}
            {boxGroups.map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className="absolute"
                    style={{
                        top: group.top,
                        bottom: group.bottom,
                        left: group.left,
                        right: group.right,
                    }}
                >
                    {/* Layer 1 - Largest, most transparent */}
                    <motion.div
                        className="absolute border-2 border-foreground/15 dark:border-foreground/10"
                        style={{
                            width: group.baseSize,
                            height: group.baseSize,
                            rotate: group.rotation,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: groupIndex * 0.1,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                    />

                    {/* Layer 2 - Medium size */}
                    <motion.div
                        className="absolute border-2 border-foreground/25 dark:border-foreground/20"
                        style={{
                            width: group.baseSize * 0.75,
                            height: group.baseSize * 0.75,
                            top: group.baseSize * 0.125,
                            left: group.baseSize * 0.125,
                            rotate: group.rotation + 5,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: groupIndex * 0.1 + 0.15,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                    />

                    {/* Layer 3 - Smallest, most visible */}
                    <motion.div
                        className="absolute border-2 border-foreground/40 dark:border-foreground/35 bg-foreground/5 dark:bg-foreground/3"
                        style={{
                            width: group.baseSize * 0.5,
                            height: group.baseSize * 0.5,
                            top: group.baseSize * 0.25,
                            left: group.baseSize * 0.25,
                            rotate: group.rotation + 10,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: groupIndex * 0.1 + 0.3,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                    />
                </div>
            ))}
        </div>
    );
}