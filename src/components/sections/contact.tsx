"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
    const [formStatus, setFormStatus] = React.useState<FormStatus>("idle");
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setFormStatus("submitting");

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Simulate success
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Reset after 3 seconds
        setTimeout(() => setFormStatus("idle"), 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a project in mind or want to chat? Feel free to reach out."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? "border-destructive" : ""}
                                    disabled={formStatus === "submitting"}
                                />
                                {errors.name && (
                                    <p className="text-xs text-destructive">{errors.name}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? "border-destructive" : ""}
                                    disabled={formStatus === "submitting"}
                                />
                                {errors.email && (
                                    <p className="text-xs text-destructive">{errors.email}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? "border-destructive" : ""}
                                    disabled={formStatus === "submitting"}
                                />
                                {errors.message && (
                                    <p className="text-xs text-destructive">{errors.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full"
                                disabled={formStatus === "submitting"}
                            >
                                {formStatus === "submitting" ? (
                                    <>
                                        <span className="animate-spin mr-2">⏳</span>
                                        Sending...
                                    </>
                                ) : formStatus === "success" ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="h-[400px] lg:h-auto"
                    >
                        <div className="w-full h-full min-h-[400px] bg-muted border border-border relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850011!2d121.0244!3d14.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzE3LjAiTiAxMjHCsDAxJzI3LjgiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                                className="absolute inset-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
