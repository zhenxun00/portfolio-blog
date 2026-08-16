"use client";

import Link from "next/link";

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Back Link */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            Tutorial
          </span>
          <time className="text-sm text-muted-foreground">August 15, 2026</time>
          <span className="text-sm text-muted-foreground">8 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Building a Modern Portfolio with Next.js 14
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create a stunning developer portfolio using the latest Next.js features including App Router, Server Components, and more.
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <h2>Introduction</h2>
        <p>
          In today&apos;s competitive job market, having a professional portfolio website is essential
          for developers. It&apos;s your chance to showcase your skills, projects, and personality to
          potential employers and clients.
        </p>
        <p>
          In this tutorial, we&apos;ll build a modern portfolio website using Next.js 14, one of the
          most popular React frameworks. We&apos;ll cover everything from setup to deployment.
        </p>

        <h2>Why Next.js 14?</h2>
        <p>Next.js 14 offers several advantages for building portfolios:</p>
        <ul>
          <li><strong>App Router</strong> - More intuitive routing with layouts and loading states</li>
          <li><strong>Server Components</strong> - Better performance with server-side rendering</li>
          <li><strong>Static Generation</strong> - Pre-render pages for blazing fast load times</li>
          <li><strong>Built-in Optimization</strong> - Image optimization, font loading, and more</li>
        </ul>

        <h2>Setting Up the Project</h2>
        <p>First, let&apos;s create a new Next.js project:</p>
        <pre><code>{`npx create-next-app@latest my-portfolio
cd my-portfolio
npm run dev`}</code></pre>

        <h2>Project Structure</h2>
        <p>We&apos;ll organize our project with the following structure:</p>
        <pre><code>{`src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── projects/
│   │   └── page.tsx      # Projects page
│   └── blog/
│       └── page.tsx      # Blog page
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    └── ThemeProvider.tsx`}</code></pre>

        <h2>Building the Hero Section</h2>
        <p>
          The hero section is the first thing visitors see. Make it count with a compelling
          headline, brief introduction, and clear call-to-action buttons.
        </p>

        <h2>Adding Dark Mode</h2>
        <p>
          Dark mode is a must-have feature for modern websites. We&apos;ll implement it using
          React context and CSS variables for smooth transitions.
        </p>

        <h2>Conclusion</h2>
        <p>
          Building a portfolio with Next.js 14 is a great way to showcase your skills while
          learning modern web development practices. The framework handles the complex stuff
          so you can focus on creating great content.
        </p>
      </div>

      {/* Author */}
      <div className="mt-12 p-6 rounded-xl border border-border bg-card">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            Z
          </div>
          <div>
            <h3 className="font-semibold">Zhenxun</h3>
            <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </article>
  );
}
