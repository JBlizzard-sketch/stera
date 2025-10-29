/**
 * Card Component
 * Reusable card component for displaying content with optional image.
 * Used for product categories, blog posts, and feature sections.
 * 
 * Props:
 * - title: string - card title
 * - description: string - card description/excerpt
 * - image: string (optional) - image URL
 * - href: string (optional) - link destination
 * - children: React.ReactNode (optional) - custom content
 * - className: string (optional) - additional CSS classes
 */

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  imageAlt = "",
  href,
  children,
  className = "",
}: CardProps) {
  const cardContent = (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full ${className}`}
    >
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold text-steraBgDark mb-2">{title}</h3>}
        {description && <p className="text-steraGray mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full hover:scale-105 transition-transform duration-200">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
