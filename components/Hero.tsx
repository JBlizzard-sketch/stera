/**
 * Hero Component
 * Main hero section for the homepage with animated entrance.
 * Features logo, headline, tagline, and CTAs.
 * 
 * Props:
 * - title: string - main headline
 * - subtitle: string - tagline/description
 * - children: React.ReactNode (optional) - CTA buttons or additional content
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="relative bg-stera-gradient min-h-[600px] flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="STERA Pharmacy Logo"
                width={200}
                height={80}
                priority
                className="mb-4"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-steraBgDark mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-steraGray mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {children}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* NEXT_AGENT_NOTE: Replace with real STERA Pharmacy store photo hosted on CDN */}
              <Image
                src="/pharmacist_arranging_98026948.jpg"
                alt="STERA Pharmacy - Your trusted healthcare partner"
                fill
                className="object-cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
