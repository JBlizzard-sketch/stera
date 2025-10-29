/**
 * Home Page
 * Main landing page with hero, features, blog preview, and contact strip.
 */

"use client";

import React from "react";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ProductGrid from "@/components/ProductGrid";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";

export default function HomePage() {
  // NEXT_AGENT_NOTE: Replace placeholder content with real STERA Pharmacy data from CMS
  const featuredProducts = [
    {
      name: "Prescription Medications",
      description: "Wide range of prescription drugs from trusted manufacturers",
      image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Health Supplements",
      description: "Vitamins, minerals, and dietary supplements for optimal health",
      image: "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Medical Equipment",
      description: "Quality medical devices and equipment for home and clinical use",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const blogPosts = [
    {
      title: "Understanding Your Prescription",
      excerpt: "Learn how to read and understand your medication labels and dosage instructions...",
      image: "https://images.pexels.com/photos/3825456/pexels-photo-3825456.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/blog/understanding-prescriptions",
    },
    {
      title: "Boost Your Immune System Naturally",
      excerpt: "Discover natural ways to strengthen your immune system through diet and supplements...",
      image: "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/blog/boost-immune-system",
    },
    {
      title: "Managing Chronic Conditions",
      excerpt: "Tips and strategies for effectively managing chronic health conditions at home...",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/blog/managing-chronic-conditions",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Your Trusted Healthcare Partner"
        subtitle="Quality medications, professional advice, and caring service for your health and wellbeing."
      >
        <Button
          variant="primary"
          href="https://wa.me/254XXXXXXXXX?text=Hello%20STERA%20Pharmacy!%20I%27d%20like%20to%20place%20an%20order."
        >
          Order on WhatsApp
        </Button>
        <Button variant="secondary" href="/products">
          Explore Products
        </Button>
      </Hero>

      {/* Features Section */}
      <section className="py-16 px-4 bg-steraBgLight">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-steraBgDark mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-steraGray max-w-2xl mx-auto">
              Comprehensive pharmaceutical solutions for all your healthcare needs
            </p>
          </motion.div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-steraBgDark mb-4">
              Health Tips & Insights
            </h2>
            <p className="text-lg text-steraGray max-w-2xl mx-auto">
              Stay informed with expert advice and health information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  title={post.title}
                  description={post.excerpt}
                  image={post.image}
                  imageAlt={post.title}
                  href={post.href}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" href="/blog">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-steraGold py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center space-x-4">
              <Phone size={32} />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>+254 7XX XXX XXX</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <MessageCircle size={32} />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <a
                  href="https://wa.me/254XXXXXXXXX?text=Hello%20STERA%20Pharmacy!"
                  className="hover:underline"
                >
                  Chat with us
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock size={32} />
              <div>
                <p className="font-semibold">Open Hours</p>
                <p>Mon-Fri: 8AM - 8PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
