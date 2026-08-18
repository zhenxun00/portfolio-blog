"use client";

import Link from "next/link";

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500 font-medium">Open Source</span>
          <time className="text-sm text-muted-foreground">August 1, 2026</time>
          <span className="text-sm text-muted-foreground">12 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          How I Contributed to 320k+ Stars Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          My journey from beginner to contributing to major open source projects with hundreds of thousands of stars.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2>The Beginning</h2>
        <p>
          Contributing to open source can feel daunting at first. Looking at massive codebases with
          millions of lines of code, it&apos;s easy to wonder: &quot;Where do I even start?&quot;
        </p>
        <p>
          The key is to start small and gradually work your way up. Here&apos;s how I went from
          fixing typos to contributing to projects with 320k+ stars.
        </p>

        <h2>Strategy 1: Start with Documentation</h2>
        <p>
          Documentation is often the easiest entry point. Many projects have issues labeled
          &quot;good first issue&quot; or &quot;help wanted&quot; that involve updating docs.
        </p>
        <ul>
          <li>Fix typos and grammar errors</li>
          <li>Update outdated instructions</li>
          <li>Add missing examples</li>
          <li>Translate documentation</li>
        </ul>

        <h2>Strategy 2: Find &quot;Good First Issue&quot; Labels</h2>
        <p>
          Most projects use GitHub labels to mark issues that are suitable for newcomers. Search for:
        </p>
        <ul>
          <li><code>good first issue</code></li>
          <li><code>help wanted</code></li>
          <li><code>beginner friendly</code></li>
        </ul>

        <h2>Strategy 3: Fix Bugs</h2>
        <p>
          Once you&apos;re comfortable with the codebase, look for bug reports. These often have
          clear reproduction steps and expected behavior.
        </p>

        <h2>My Contributions</h2>
        <p>
          Here are some of the projects I&apos;ve contributed to:
        </p>
        <ul>
          <li><strong>TheAlgorithms/Python (224k ⭐)</strong> - Added input validation to cyclic_sort algorithm</li>
          <li><strong>PDFMathTranslate (36k ⭐)</strong> - Synchronized Chinese documentation</li>
          <li><strong>ML-From-Scratch (32k ⭐)</strong> - Implemented Transformer encoder from scratch</li>
          <li><strong>sanic (18.6k ⭐)</strong> - Fixed ASGI exception status code handling</li>
        </ul>

        <h2>Key Lessons</h2>
        <ol>
          <li><strong>Read CONTRIBUTING.md</strong> - Every project has different requirements</li>
          <li><strong>Follow code style</strong> - Match the existing code patterns</li>
          <li><strong>Add tests</strong> - Show that your changes work correctly</li>
          <li><strong>Be patient</strong> - Review can take time for large projects</li>
          <li><strong>Be respectful</strong> - Maintainers are volunteers</li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          Contributing to open source is rewarding both for learning and for building your
          professional network. Start small, be consistent, and don&apos;t be afraid to ask questions.
        </p>
      </div>
    </article>
  );
}
