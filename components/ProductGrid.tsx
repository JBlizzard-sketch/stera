/**
 * ProductGrid Component
 * Displays a responsive grid of product category cards.
 * 
 * Props:
 * - products: Array of product objects with name, description, image, href
 */

"use client";

import React from "react";
import Card from "./Card";
import Button from "./Button";
import { motion } from "framer-motion";

interface Product {
  name: string;
  description: string;
  image: string;
  href?: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            title={product.name}
            description={product.description}
            image={product.image}
            imageAlt={product.name}
          >
            <Button variant="secondary" href={product.href || "/products"} className="w-full">
              Learn More
            </Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
