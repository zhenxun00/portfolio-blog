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
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 font-medium">AI</span>
          <time className="text-sm text-muted-foreground">August 10, 2026</time>
          <span className="text-sm text-muted-foreground">6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          The Future of AI in Web Development
        </h1>
        <p className="text-lg text-muted-foreground">
          Exploring how AI tools are transforming the way we build web applications.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2>AI is Everywhere</h2>
        <p>
          Artificial Intelligence is no longer a futuristic concept—it&apos;s here, and it&apos;s
          transforming how we build software. From code generation to automated testing,
          AI tools are becoming indispensable for modern developers.
        </p>

        <h2>AI-Powered Development Tools</h2>
        <p>Several AI tools are revolutionizing web development:</p>
        <ul>
          <li><strong>GitHub Copilot</strong> - AI pair programmer that suggests code completions</li>
          <li><strong>ChatGPT</strong> - Versatile AI for debugging, documentation, and learning</li>
          <li><strong>Cursor</strong> - AI-first code editor with intelligent refactoring</li>
          <li><strong>v0 by Vercel</strong> - Generate UI components from natural language</li>
        </ul>

        <h2>Building AI Features</h2>
        <p>
          As developers, we can also build AI-powered features into our applications.
          The OpenAI API makes it easier than ever to add intelligent capabilities:
        </p>
        <pre><code>{`const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: prompt }],
});`}</code></pre>

        <h2>The Future Outlook</h2>
        <p>
          AI will continue to evolve and become more integrated into our development
          workflows. The key is to embrace these tools while maintaining our core
          problem-solving skills.
        </p>
      </div>
    </article>
  );
}
