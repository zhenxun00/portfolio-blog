"use client";

import Link from "next/link";

const featuredProjects = [
  {
    title: "BDS Satellite Positioning",
    description: "北斗卫星导航系统定位 - RINEX解析、卫星位置计算、单点定位。",
    tags: ["Python", "卫星导航"],
    href: "/projects",
    gradient: "from-cyan-500/80 to-blue-500/80",
  },
  {
    title: "AI Writing Assistant",
    description: "AI写作助手 - 智能续写、语法检查、风格转换。",
    tags: ["React", "OpenAI"],
    href: "/projects",
    gradient: "from-purple-500/80 to-pink-500/80",
  },
  {
    title: "Dev Dashboard",
    description: "开发者仪表板 - GitHub统计、技能可视化。",
    tags: ["React", "D3.js"],
    href: "/projects",
    gradient: "from-green-500/80 to-emerald-500/80",
  },
];

const latestPosts = [
  {
    slug: "open-source-contributing",
    title: "How I Contributed to 320k+ Stars Projects",
    date: "2026-08-01",
    category: "Open Source",
    isNew: true,
  },
  {
    slug: "satellite-navigation",
    title: "Introduction to Satellite Navigation Systems",
    date: "2026-07-25",
    category: "Engineering",
    isNew: true,
  },
  {
    slug: "portfolio-nextjs",
    title: "Building a Modern Portfolio with Next.js 14",
    date: "2026-08-15",
    category: "Tutorial",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-bg opacity-30" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div className="glass rounded-3xl p-12 max-w-2xl mx-auto">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl animate-float">
              Z
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zhenxun
              </span>
            </h1>

            {/* Bio */}
            <p className="text-lg text-muted-foreground mb-6">
              Full-stack developer passionate about{" "}
              <span className="text-foreground font-medium">AI</span>,{" "}
              <span className="text-foreground font-medium">satellite navigation</span>, and{" "}
              <span className="text-foreground font-medium">open source</span>.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">320k+</div>
                <div className="text-xs text-muted-foreground">Stars Contributed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">11</div>
                <div className="text-xs text-muted-foreground">PRs</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 glass rounded-xl font-medium hover:bg-white/40 transition-all"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="glass rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/50 dark:bg-white/10 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 px-6 bg-white/50 dark:bg-black/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Posts</h2>
            <Link href="/blog" className="text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass block p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-primary">{post.category}</span>
                  {post.isNew && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-semibold hover:text-primary transition-colors">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out for collaborations or just a chat.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/zhenxun00"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-xl font-medium hover:bg-white/40 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://twitter.com/zhenxun00"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-xl font-medium hover:bg-white/40 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
              <a
                href="mailto:hello@zhenxun.dev"
                className="glass px-6 py-3 rounded-xl font-medium hover:bg-white/40 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
