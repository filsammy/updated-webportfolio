"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, Calendar } from "lucide-react";

// Placeholder data - this will eventually live in src/data
const experienceItems = [
  {
    id: "aviation",
    role: "Bachelor of Science in Aviation Technology",
    company: "Indiana Aerospace University",
    date: "2015-2019",
    description:
      "Completed my Bachelor’s degree in Aviation Technology, where I developed discipline, structured thinking, and communication skills. Logged 130+ flight hours on 2–4 seat training aircraft.",
  },
  {
    id: "familyOwnedBusiness",
    role: "Operations Manager",
    company: "MariClaire Water Station and Retail Services",
    date: "2020-2024",
    description:
      "Managed daily operations of a family-owned retail and water station business during the pandemic. Identified operational bottlenecks, introduced process improvements, and contributed to significant sales growth and business expansion. These hands-on operational challenges sparked my transition into software development, where I began designing systems to digitize and streamline real-world workflows.",
  },
  {
    id: "zuittCodingBootcamp",
    role: "Full-stack Web Development Program",
    company: "Zuitt Coding Bootcamp",
    date: "2025",
    description:
      "Completed a rigorous 4-month coding bootcamp, mastering full-stack development with MERN technologies. Built multiple projects—including a full-stack e-commerce platform and a course booking system —focused on solving real business and operational problems.",
  },
  {
    id: "freelance",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    date: "2025-Present",
    description:
      "Building responsive, user-friendly web applications for clients using modern frontend technologies. Applying a business-first and operations-aware approach to frontend development while continuously improving through real-world projects, best practices, ethical AI use, and additional certifications.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Timeline"
          subtitle="My journey into the tech industry."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pb-4">
            {experienceItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="font-medium">{item.company}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

