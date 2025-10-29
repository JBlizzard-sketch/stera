"use client";

import React from "react";
import { BlogPost } from "@/lib/blog-posts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-stera-gradient py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-steraGold hover:underline mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-steraGray mb-4 flex-wrap">
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2 bg-steraGold/10 text-steraGold px-3 py-1 rounded-full">
                <Tag size={16} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2">
                <User size={16} />
                {post.author}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-steraBgDark mb-6">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div
              className="text-steraGray leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
            />
          </motion.div>
        </div>
      </article>

      {/* Related Posts CTA */}
      <section className="bg-steraBgLight py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steraBgDark mb-4">
            Read More Health Tips
          </h2>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-steraGold text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-glow"
          >
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
