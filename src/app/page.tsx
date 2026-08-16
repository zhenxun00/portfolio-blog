"use client";

import Link from "next/link";

const featuredProjects = [
  {
    title: "AI Writing Assistant",
    description: "Smart writing tool powered by OpenAI with real-time suggestions and style conversion.",
    tags: ["React", "TypeScript", "OpenAI"],
    href: "/projects#ai-writing",
  },
  {
    title: "Collab Docs",
    description: "Real-time collaborative document editor with WebSocket synchronization.",
    tags: ["Next.js", "Socket.io", "Slate.js"],
    href: "/projects#collab-docs",
  },
  {
    title: "Dev Dashboard",
    description: "Developer analytics dashboard with GitHub integration and skill visualization.",
    tags: ["React", "D3.js", "GitHub API"],
    href: "/projects#dev-dashboard",
  },
];

const latestPosts = [
  {
    title: "Building a Modern Portfolio with Next.js 14",
    date: "2026-08-15",
    excerpt: "Learn how to create a stunning developer portfolio using the latest Next.js features.",
    href: "/blog/portfolio-nextjs",
  },
  {
    title: "The Future of AI in Web Development",
    date: "2026-08-10",
    excerpt: "Exploring how AI tools are transforming the way we build web applications.",
    href: "/blog/ai-web-dev",
  },
  {
    title: "Mastering TypeScript Generics",
    date: "2026-08-05",
    excerpt: "A deep dive into TypeScript generics with practical examples and patterns.",
    href: "/blog/typescript-generics",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="animate-fade-in">
          <p className="text-sm font-medium text-primary mb-4">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zhenxun
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Full-stack developer passionate about{" "}
            <span className="text-foreground font-medium">AI</span>,{" "}
            <span className="text-foreground font-medium">web technologies</span>, and{" "}
            <span className="text-foreground font-medium">open source</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-primary hover:text-primary-hover transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <Link
              key={project.title}
              href={project.href}
              className={`group p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-primary/50 transition-all animate-fade-in delay-${(i + 1) * 100}`}
            >
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Posts</h2>
          <Link href="/blog" className="text-sm text-primary hover:text-primary-hover transition-colors">
            View all →
          </Link>
        </div>
        <div className="space-y-6">
          {latestPosts.map((post, i) => (
            <Link
              key={post.title}
              href={post.href}
              className={`group block p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-primary/50 transition-all animate-fade-in delay-${(i + 1) * 100}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <time className="text-sm text-muted-foreground">{post.date}</time>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-border">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s work together</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:hello@zhenxun.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
