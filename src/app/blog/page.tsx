"use client";

import Link from "next/link";

const posts = [
  {
    slug: "portfolio-nextjs",
    title: "Building a Modern Portfolio with Next.js 14",
    date: "2026-08-15",
    category: "Tutorial",
    excerpt: "Learn how to create a stunning developer portfolio using the latest Next.js features.",
    readTime: "8 min read",
  },
  {
    slug: "ai-web-dev",
    title: "The Future of AI in Web Development",
    date: "2026-08-10",
    category: "AI",
    excerpt: "Exploring how AI tools are transforming the way we build web applications.",
    readTime: "6 min read",
  },
  {
    slug: "typescript-generics",
    title: "Mastering TypeScript Generics",
    date: "2026-08-05",
    category: "TypeScript",
    excerpt: "A deep dive into TypeScript generics with practical examples and patterns.",
    readTime: "10 min read",
  },
  {
    slug: "react-performance",
    title: "Optimizing React Performance",
    date: "2026-07-28",
    category: "React",
    excerpt: "Tips and tricks for improving your React application's performance.",
    readTime: "7 min read",
    comingSoon: true,
  },
  {
    slug: "open-source-guide",
    title: "Getting Started with Open Source",
    date: "2026-07-20",
    category: "Community",
    excerpt: "A beginner's guide to contributing to open source projects.",
    readTime: "5 min read",
    comingSoon: true,
  },
  {
    slug: "tailwind-tips",
    title: "Advanced Tailwind CSS Techniques",
    date: "2026-07-15",
    category: "CSS",
    excerpt: "Take your Tailwind CSS skills to the next level.",
    readTime: "9 min read",
    comingSoon: true,
  },
];

const categories = ["All", "Tutorial", "AI", "TypeScript", "React", "Community", "CSS"];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on development, AI, and the latest in web technologies.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              cat === "All"
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.comingSoon ? "#" : `/blog/${post.slug}`}
            className={`group block p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all ${
              post.comingSoon ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {post.category}
              </span>
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
              {post.comingSoon && (
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 font-medium">
                  Coming Soon
                </span>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <section className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-border text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Subscribe to get notified about new posts and updates.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
