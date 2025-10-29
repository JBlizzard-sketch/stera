/**
 * Services Page
 * Displays pharmacy services with icons and descriptions.
 */

"use client";

import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Stethoscope, Truck, FileText, Syringe, Clock, Heart } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: "Professional Consultation",
      description: "Get expert advice from our licensed pharmacists on medication usage, interactions, and health concerns.",
    },
    {
      icon: <Truck size={32} />,
      title: "Home Delivery",
      description: "Convenient delivery service bringing your medications and health products directly to your doorstep.",
    },
    {
      icon: <FileText size={32} />,
      title: "Prescription Management",
      description: "We help you manage your prescriptions, provide refill reminders, and maintain your medication records.",
    },
    {
      icon: <Syringe size={32} />,
      title: "Vaccination Services",
      description: "Stay protected with our vaccination services including flu shots and other immunizations.",
    },
    {
      icon: <Clock size={32} />,
      title: "Extended Hours",
      description: "Open seven days a week with extended hours to serve you when you need us most.",
    },
    {
      icon: <Heart size={32} />,
      title: "Health Monitoring",
      description: "Complimentary blood pressure checks, blood glucose testing, and basic health screenings.",
    },
  ];

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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-steraGray max-w-3xl mx-auto">
              Comprehensive pharmaceutical services designed to support your health and wellbeing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-steraBgLight py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-steraBgDark mb-4">
              Why Choose STERA Pharmacy?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-steraBgDark mb-3">Licensed Professionals</h3>
              <p className="text-steraGray">
                Our team of experienced and licensed pharmacists is dedicated to providing accurate, safe, and personalized pharmaceutical care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-steraBgDark mb-3">Quality Assurance</h3>
              <p className="text-steraGray">
                We source all products from reputable manufacturers and maintain strict quality control standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-steraBgDark mb-3">Patient-Centered Care</h3>
              <p className="text-steraGray">
                Your health and satisfaction are our top priorities. We take time to understand your needs and provide personalized service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-steraBgDark mb-3">Convenient Access</h3>
              <p className="text-steraGray">
                With extended hours, home delivery, and multiple contact options, getting your medications has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steraBgDark mb-4">
            Ready to Experience Better Pharmacy Care?
          </h2>
          <p className="text-steraGray mb-6">
            Visit us today or contact us to learn more about how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254XXXXXXXXX?text=Hello%20STERA%20Pharmacy!%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
              className="inline-block px-6 py-3 bg-steraGold text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-glow"
            >
              Contact Us on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-steraGray text-steraGray rounded-lg font-semibold hover:bg-steraGray hover:text-white transition-all"
            >
              Visit Contact Page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
