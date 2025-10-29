/**
 * Blog Index Page
 * Displays blog posts with previews and links.
 */

"use client";

import React from "react";
import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function BlogPage() {
  // NEXT_AGENT_NOTE: Replace with real blog data from CMS (Sanity/Contentful)
  const blogPosts = [
    {
      title: "Understanding Your Prescription",
      excerpt: "Learn how to read and understand your medication labels, dosage instructions, and potential side effects. Our pharmacists explain what you need to know to take your medications safely and effectively...",
      image: "https://images.pexels.com/photos/3825456/pexels-photo-3825456.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "understanding-prescriptions",
      date: "October 20, 2025",
      category: "Medication Safety",
    },
    {
      title: "Boost Your Immune System Naturally",
      excerpt: "Discover natural ways to strengthen your immune system through diet, supplements, exercise, and lifestyle choices. Learn about vitamins and minerals that support immune health...",
      image: "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "boost-immune-system",
      date: "October 15, 2025",
      category: "Wellness",
    },
    {
      title: "Managing Chronic Conditions",
      excerpt: "Tips and strategies for effectively managing chronic health conditions like diabetes, hypertension, and asthma. Learn about medication adherence, monitoring, and lifestyle modifications...",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "managing-chronic-conditions",
      date: "October 10, 2025",
      category: "Health Management",
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
              Health Blog
            </h1>
            <p className="text-lg md:text-xl text-steraGray max-w-3xl mx-auto">
              Expert advice, health tips, and pharmaceutical insights from STERA Pharmacy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
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
                  href={`/blog/${post.slug}`}
                >
                  <div className="flex items-center justify-between text-sm text-steraGray">
                    <span className="bg-steraGold/10 text-steraGold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-steraBgLight py-12 px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steraBgDark mb-4">
            Stay Informed
          </h2>
          <p className="text-steraGray mb-6">
            Get health tips and pharmacy updates delivered to your inbox
          </p>
          <p className="text-sm text-steraGray">
            Contact us via WhatsApp or email to subscribe to our newsletter
          </p>
        </div>
      </section>
    </div>
  );
}
