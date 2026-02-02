"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center min-h-[100vh] px-4 md:px-0">

        {/* Background Name Typography - Behind Image */}
        <div className="absolute inset-0 z-0 flex flex-col justify-between items-center py-12 md:py-20 pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] md:text-[18vw] leading-none font-black tracking-tighter text-foreground/15 whitespace-nowrap select-none"
          >
            FIL SAMMY
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] md:text-[18vw] leading-none font-black tracking-tighter text-foreground/15 whitespace-nowrap select-none"
          >
            ABAWAG
          </motion.h1>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

          {/* Centered Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full max-w-sm md:max-w-md aspect-[4/5] md:aspect-square"
          >
            <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-border/20 shadow-2xl">
              <Image
                src="/profile-pic.png"
                alt="Fil Sammy Abawag"
                width={800}
                height={800}
                unoptimized
                priority
                className="object-cover w-full h-full"
              />
              {/* Dark gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Bottom overlap text (Role) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-[5%] md:bottom-[5%] left-4 md:-left-12 z-30"
          >
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-foreground mix-blend-difference">
              <span className="outlined-text">
                FULL-STACK
              </span>
              <br />
              <span className="text-muted-foreground italic font-serif opacity-80">WEB DEVELOPER</span>
            </h2>
          </motion.div>

          {/* Right side description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-[15%] md:top-[20%] right-4 md:-right-8 max-w-xs text-right z-30 hidden md:block"
          >
            <p className="text-sm md:text-base leading-relaxed bg-background/80 backdrop-blur-md p-4 border border-border/50 rounded-lg shadow-sm">
              Designing thoughtful digital experiences and workflows, using AI as a tool to build faster, smarter, and more effectively.
            </p>


          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-6 md:bottom-8 right-1 -translate-x-1/2"
        >
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
