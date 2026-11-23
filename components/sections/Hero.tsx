"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-tight flex flex-col gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Adnan Kakar</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/90">Computer Engineering Student</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            A final-year Computer Engineering student from India, passionate about crafting clean, efficient, and scalable software solutions. Specializing as a Backend and AI Developer.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/resume/Adnan_Kakar_Python_Developer.pdf"
              download
              className="btn-primary"
            >
              <Download size={20} />
              Download Resume
            </a>
            <Link
              href="#projects"
              className="btn-secondary"
            >
              View Work
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Passport Photo */}
          <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto aspect-square relative rounded-full border border-border/50 p-3 shadow-xl shadow-accent/5">
            <div className="w-full h-full rounded-full border border-border/80 shadow-2xl shadow-accent/10 relative overflow-hidden">
              <Image 
                src="/images/passport-photo.jpeg"
                alt="Adnan Kakar - Computer Engineering Student and AI Developer"
                fill
                sizes="(max-width: 1024px) 384px, (max-width: 1280px) 448px, 512px"
                className="object-cover object-top scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
