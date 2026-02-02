"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/certifications";

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export function Certifications() {
    return (
        <section id="certifications" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Certifications"
                    subtitle="Validating my skills and commitment to continuous learning."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                        >
                            <Card className="h-full border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="mt-1 p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                        <Award className="w-6 h-6" />
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="font-bold text-lg leading-tight text-foreground">
                                                {cert.title}
                                            </h3>
                                            {cert.credentialUrl && (
                                                <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-2 text-muted-foreground hover:text-primary" asChild>
                                                    <a
                                                        href={cert.credentialUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="View Credential"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>

                                        <p className="text-muted-foreground font-medium text-sm">
                                            {cert.issuer}
                                        </p>

                                        <div className="flex items-center gap-2 text-xs text-muted-foreground/80 pt-1 font-mono">
                                            <Calendar className="w-3 h-3" />
                                            <span>Issued {cert.date}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
