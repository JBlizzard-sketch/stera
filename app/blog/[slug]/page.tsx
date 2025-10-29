/**
 * Blog Post Detail Page
 * Dynamic route for individual blog posts.
 * NEXT_AGENT_NOTE: This currently uses static data from lib/blog-posts.ts
 * To make this dynamic with CMS, replace blogPosts import with CMS data fetch
 */

import React from "react";
import { blogPosts } from "@/lib/blog-posts";
import Link from "next/link";
import BlogPostContent from "@/components/BlogPostContent";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-steraBgDark mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-steraGold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
}
