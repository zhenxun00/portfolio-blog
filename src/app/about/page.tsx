"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">About</h1>
      <p className="text-muted-foreground mb-10">Who I am and what I do.</p>

      <div className="space-y-6 text-muted-foreground">
        <p>
          I&apos;m Zhenxun, a developer interested in building things with code. Currently exploring
          satellite navigation systems, AI applications, and web development.
        </p>

        <p>
          Recently, I&apos;ve been working on a Beidou satellite positioning system that parses RINEX
          data and computes satellite positions. I also build web applications using React and
          Next.js, and contribute to open source projects when I find interesting issues.
        </p>

        <h2 className="text-lg font-semibold text-foreground pt-4">Tech</h2>
        <p>
          Python, JavaScript/TypeScript, React, Next.js, Node.js, Git, NumPy, Pandas.
        </p>

        <h2 className="text-lg font-semibold text-foreground pt-4">Currently</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Building satellite navigation tools</li>
          <li>Contributing to open source projects</li>
          <li>Writing about web development</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground pt-4">Links</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <a href="https://github.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="mailto:hello@zhenxun.dev" className="text-primary hover:underline">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
