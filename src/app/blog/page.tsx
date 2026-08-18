"use client";

import Link from "next/link";

const posts = [
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
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-muted-foreground">Writing about code and things.</p>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug}>
            {post.comingSoon ? (
              <div className="glass rounded-2xl p-6 opacity-60">
                <div className="flex items-center gap-2 mb-2">
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-primary">{post.category}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">
                  Coming Soon
                </span>
              </div>
            ) : (
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <time className="text-sm text-muted-foreground">{post.date}</time>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    {post.isNew && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        New
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold hover:text-primary transition-colors">{post.title}</h2>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
