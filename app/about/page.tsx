/**
 * About Page
 * STERA Pharmacy mission, values, team, and trust signals.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Shield, Users, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-stera-gradient py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-steraBgDark mb-4">
              About STERA Pharmacy
            </h1>
            <p className="text-lg md:text-xl text-steraGray max-w-3xl mx-auto">
              Your trusted partner in health and wellness since our establishment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-steraBgDark mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-steraGray text-center">
              At STERA Pharmacy, our mission is to provide exceptional pharmaceutical care and health services
              to our community. We are committed to improving lives by ensuring access to quality medications,
              professional expertise, and compassionate service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Heart size={32} />,
                title: "Patient-Centered Care",
                description: "We put your health and wellbeing at the heart of everything we do.",
              },
              {
                icon: <Shield size={32} />,
                title: "Quality & Safety",
                description: "We maintain the highest standards in pharmaceutical products and services.",
              },
              {
                icon: <Users size={32} />,
                title: "Community Focus",
                description: "We're dedicated to serving and supporting the health of our local community.",
              },
              {
                icon: <Award size={32} />,
                title: "Professional Excellence",
                description: "Our team continuously pursues knowledge and maintains professional certifications.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-steraGold/10 rounded-full flex items-center justify-center mb-4 text-steraGold">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-steraBgDark mb-2">{value.title}</h3>
                <p className="text-steraGray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-steraBgLight py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-steraBgDark mb-4">
              Our Professional Team
            </h2>
            <p className="text-lg text-steraGray max-w-2xl mx-auto">
              Licensed pharmacists and healthcare professionals dedicated to your wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NEXT_AGENT_NOTE: Replace with real team photos hosted on Cloudinary or CDN */}
            {[
              {
                name: "Lead Pharmacist",
                role: "Licensed Pharmacist",
                image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                name: "Senior Pharmacist",
                role: "Licensed Pharmacist",
                image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                name: "Pharmacy Technician",
                role: "Certified Technician",
                image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-steraBgDark mb-1">{member.name}</h3>
                  <p className="text-steraGray">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-steraBgDark mb-8">Why Trust STERA Pharmacy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="text-4xl font-bold text-steraGold mb-2">100%</div>
                <p className="text-steraGray">Licensed & Certified</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-steraGold mb-2">24/7</div>
                <p className="text-steraGray">Emergency Support Available</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-steraGold mb-2">1000+</div>
                <p className="text-steraGray">Satisfied Customers</p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-steraBgLight rounded-xl">
              <p className="text-steraGray italic">
                &ldquo;STERA Pharmacy is fully licensed by the Pharmacy and Poisons Board of Kenya.
                We adhere to all regulatory requirements and maintain the highest standards
                of pharmaceutical practice and patient care.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
