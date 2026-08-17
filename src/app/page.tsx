"use client";

import Link from "next/link";

const featuredProjects = [
  {
    title: "BDS Satellite Positioning",
    description: "北斗卫星导航系统定位 - RINEX解析、卫星位置计算、单点定位。",
    tags: ["Python", "卫星导航"],
    href: "/projects",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Writing Assistant",
    description: "AI写作助手 - 智能续写、语法检查、风格转换。",
    tags: ["React", "OpenAI"],
    href: "/projects",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Dev Dashboard",
    description: "开发者仪表板 - GitHub统计、技能可视化。",
    tags: ["React", "D3.js"],
    href: "/projects",
    gradient: "from-green-500 to-emerald-500",
  },
];

const latestPosts = [
  {
    slug: "portfolio-nextjs",
    title: "Building a Modern Portfolio with Next.js 14",
    date: "2026-08-15",
    category: "Tutorial",
  },
  {
    slug: "ai-web-dev",
    title: "The Future of AI in Web Development",
    date: "2026-08-10",
    category: "AI",
  },
  {
    slug: "typescript-generics",
    title: "Mastering TypeScript Generics",
    date: "2026-08-05",
    category: "TypeScript",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-accent to-accent2 bg-clip-text text-transparent">Zhenxun</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Developer building things with Python, React, and satellite navigation systems.
          </p>
          <div className="flex gap-3">
            <Link href="/projects" className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
              View Projects
            </Link>
            <Link href="/about" className="px-5 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Featured Projects</h2>
            <Link href="/projects" className="text-sm text-primary hover:underline">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex gap-1.5">
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
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Latest Posts</h2>
            <Link href="/blog" className="text-sm text-primary hover:underline">View all →</Link>
          </div>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-card transition-all group"
              >
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <time className="text-xs text-muted-foreground">{post.date}</time>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-primary/70">{post.category}</span>
                  </div>
                </div>
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-accent2/5 border border-border">
            <h2 className="text-xl font-semibold mb-2">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-6">Feel free to reach out for collaborations or just a chat.</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                GitHub
              </a>
              <a href="https://twitter.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                Twitter
              </a>
              <a href="mailto:hello@zhenxun.dev" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/30 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
