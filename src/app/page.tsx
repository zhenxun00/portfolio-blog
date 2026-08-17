"use client";

import Link from "next/link";

const featuredProjects = [
  {
    title: "BDS Satellite Positioning",
    description: "北斗卫星导航系统定位 - RINEX解析、卫星位置计算、单点定位与连续定位。",
    tags: ["Python", "卫星导航"],
    href: "/projects",
    color: "bg-cyan-500",
  },
  {
    title: "AI Writing Assistant",
    description: "AI写作助手 - 智能续写、语法检查、风格转换。",
    tags: ["React", "OpenAI"],
    href: "/projects",
    color: "bg-purple-500",
  },
  {
    title: "Dev Dashboard",
    description: "开发者仪表板 - GitHub统计、技能可视化。",
    tags: ["React", "D3.js"],
    href: "/projects",
    color: "bg-green-500",
  },
];

const latestPosts = [
  {
    slug: "portfolio-nextjs",
    title: "Building a Modern Portfolio with Next.js 14",
    date: "2026-08-15",
    excerpt: "Learn how to create a stunning developer portfolio using the latest Next.js features.",
    category: "Tutorial",
  },
  {
    slug: "ai-web-dev",
    title: "The Future of AI in Web Development",
    date: "2026-08-10",
    excerpt: "Exploring how AI tools are transforming the way we build web applications.",
    category: "AI",
  },
  {
    slug: "typescript-generics",
    title: "Mastering TypeScript Generics",
    date: "2026-08-05",
    excerpt: "A deep dive into TypeScript generics with practical examples.",
    category: "TypeScript",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-primary font-medium mb-3">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Zhenxun</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Full-stack developer interested in AI, web technologies, and satellite navigation systems.
          </p>
          <div className="flex gap-3">
            <Link href="/projects" className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
              Projects
            </Link>
            <Link href="/about" className="px-5 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Projects</h2>
            <Link href="/projects" className="text-sm text-primary hover:underline">All projects</Link>
          </div>
          <div className="space-y-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {project.title.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm">{project.title}</h3>
                  <p className="text-xs text-muted-foreground truncate">{project.description}</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Writing</h2>
            <Link href="/blog" className="text-sm text-primary hover:underline">All posts</Link>
          </div>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{post.category}</span>
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="text-muted-foreground mb-4">
            I&apos;m a developer building things with Python, React, and occasionally wrestling with satellite signals.
          </p>
          <Link href="/about" className="text-sm text-primary hover:underline">Read more →</Link>
        </div>
      </section>
    </div>
  );
}
