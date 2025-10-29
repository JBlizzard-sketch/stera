/**
 * Products Page
 * Displays product categories with images and descriptions.
 */

"use client";

import React from "react";
import ProductGrid from "@/components/ProductGrid";
import { motion } from "framer-motion";

export default function ProductsPage() {
  // NEXT_AGENT_NOTE: Replace with real product data from CMS or database
  // NEXT_AGENT_NOTE: To add dynamic product pages, create /app/products/[slug]/page.tsx and connect to a products API or CMS.
  const products = [
    {
      name: "Prescription Medications",
      description: "Comprehensive range of prescription drugs from leading pharmaceutical manufacturers. All medications are stored and handled according to strict safety guidelines.",
      image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/products#prescription",
    },
    {
      name: "Over-the-Counter (OTC) Medicines",
      description: "Common medications for pain relief, cold and flu, allergies, digestive health, and minor ailments available without prescription.",
      image: "https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/products#otc",
    },
    {
      name: "Vitamins & Supplements",
      description: "High-quality vitamins, minerals, probiotics, and dietary supplements to support your overall health and wellness.",
      image: "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/products#supplements",
    },
    {
      name: "Medical Equipment",
      description: "Blood pressure monitors, thermometers, glucose meters, nebulizers, and other essential medical devices for home use.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/products#equipment",
    },
    {
      name: "Personal Care Products",
      description: "Skincare, oral care, hygiene products, and cosmetics from trusted brands for your daily personal care routine.",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/products#personal-care",
    },
    {
      name: "Baby & Maternal Care",
      description: "Specialized products for mothers and babies including infant formula, diapers, baby care items, and prenatal vitamins.",
      image: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/products#baby-care",
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
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-steraGray max-w-3xl mx-auto">
              Explore our comprehensive range of pharmaceutical products, medical equipment, and health supplies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductGrid products={products} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-steraBgLight py-12 px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steraBgDark mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-steraGray mb-6">
            Our pharmacists are here to help. Contact us via WhatsApp or phone for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254XXXXXXXXX?text=Hello%21%20I%27m%20looking%20for%20a%20specific%20product."
              className="inline-block px-6 py-3 bg-steraGold text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-steraGray text-steraGray rounded-lg font-semibold hover:bg-steraGray hover:text-white transition-all"
            >
              Contact Page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
