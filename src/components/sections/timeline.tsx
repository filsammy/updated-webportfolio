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
    role: "Operations Supervisor",
    company: "MariClaire Group of Business",
    date: "2020-2024",
    description:
      "Ran daily operations across a water refilling station, meat shop and convenience store. Scaled water station production by up to 300% through workflow improvements and supported the launch of an additional branch. Seeing manual processes slow the business down is what led me into software development.",
  },
  {
    id: "zuittCodingBootcamp",
    role: "Full-stack Web Development Program",
    company: "Zuitt Coding Bootcamp",
    date: "2025",
    description:
      "Completed an intensive full-stack program (MERN), building an e-commerce platform and a course booking system focused on real business problems.",
  },
  {
    id: "freelance",
    role: "Freelance Front-End Developer",
    company: "Independent",
    date: "Nov 2025-Mar 2026",
    description:
      "Built and launched websites for AMEN Pest Control and HVAC Rescue LLC, including DNS, SSL and Meta Pixel setup, plus client communication and delivery. Also built responsive landing pages from client mockups.",
  },
  {
    id: "corporate",
    role: "Front-End Developer",
    company: "WPP Production (Apple, Korea)",
    date: "Apr 2026-Present",
    description:
      "Localizing Apple web pages to global design standards with WCAG 2.1 AA accessibility, responsiveness and cross-browser quality. Collaborating with teams across Manila and Korea, and mentoring new hires.",
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
