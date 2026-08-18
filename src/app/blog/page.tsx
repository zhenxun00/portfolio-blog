"use client";

import Link from "next/link";

const posts = [
  {
    slug: "portfolio-nextjs",
    title: "Building a Modern Portfolio with Next.js 14",
    date: "2026-08-15",
    category: "Tutorial",
    readTime: "8 min read",
  },
  {
    slug: "ai-web-dev",
    title: "The Future of AI in Web Development",
    date: "2026-08-10",
    category: "AI",
    readTime: "6 min read",
  },
  {
    slug: "typescript-generics",
    title: "Mastering TypeScript Generics",
    date: "2026-08-05",
    category: "TypeScript",
    readTime: "10 min read",
  },
  {
    slug: "open-source-contributing",
    title: "How I Contributed to 320k+ Stars Projects",
    date: "2026-08-01",
    category: "Open Source",
    readTime: "12 min read",
    isNew: true,
  },
  {
    slug: "satellite-navigation",
    title: "Introduction to Satellite Navigation Systems",
    date: "2026-07-25",
    category: "Engineering",
    readTime: "15 min read",
    isNew: true,
  },
  {
    slug: "react-performance",
    title: "Optimizing React Performance",
    date: "2026-07-28",
    category: "React",
    readTime: "7 min read",
    comingSoon: true,
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-10">Writing about code and things.</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug}>
            {post.comingSoon ? (
              <div className="opacity-50">
                <div className="flex items-center gap-2 mb-1">
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{post.category}</span>
                  {post.readTime && (
                    <>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </>
                  )}
                </div>
                <h2 className="font-medium">{post.title}</h2>
              </div>
            ) : (
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="flex items-center gap-2 mb-1">
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{post.category}</span>
                  {post.readTime && (
                    <>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </>
                  )}
                  {post.isNew && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      New
                    </span>
                  )}
                </div>
                <h2 className="font-medium group-hover:text-primary transition-colors">{post.title}</h2>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
