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
          <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-medium">TypeScript</span>
          <time className="text-sm text-muted-foreground">August 5, 2026</time>
          <span className="text-sm text-muted-foreground">10 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Mastering TypeScript Generics
        </h1>
        <p className="text-lg text-muted-foreground">
          A deep dive into TypeScript generics with practical examples and patterns.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2>What are Generics?</h2>
        <p>
          Generics are a powerful feature in TypeScript that allow you to write reusable,
          type-safe code. They let you create components that work with any data type
          while maintaining type safety.
        </p>

        <h2>Basic Generic Syntax</h2>
        <p>Here&apos;s a simple example of a generic function:</p>
        <pre><code>{`function identity<T>(arg: T): T {
  return arg;
}

// Usage
const num = identity<number>(42);
const str = identity<string>("hello");`}</code></pre>

        <h2>Generic Constraints</h2>
        <p>
          You can constrain generics to specific types using the <code>extends</code> keyword:
        </p>
        <pre><code>{`interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

logLength("hello");     // OK
logLength([1, 2, 3]);   // OK
logLength(42);          // Error!`}</code></pre>

        <h2>Generic Classes</h2>
        <p>Generics work great with classes too:</p>
        <pre><code>{`class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numBox = new Box<number>(42);
const strBox = new Box<string>("hello");`}</code></pre>

        <h2>Real-World Examples</h2>
        <p>
          Generics are especially useful for API responses, data structures, and
          React components. They help you write flexible, reusable code without
          sacrificing type safety.
        </p>
      </div>
    </article>
  );
}
