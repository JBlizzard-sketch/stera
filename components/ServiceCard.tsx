/**
 * ServiceCard Component
 * Displays a service with icon and description.
 * 
 * Props:
 * - icon: React.ReactNode - Lucide icon component
 * - title: string - service name
 * - description: string - service description
 */

"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-steraGold/10 rounded-full flex items-center justify-center mb-4 text-steraGold">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-steraBgDark mb-3">{title}</h3>
        <p className="text-steraGray">{description}</p>
      </div>
    </motion.div>
  );
}
